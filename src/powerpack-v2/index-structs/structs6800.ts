/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { PowerpackV2WidgetTreemapDefinitionRequestFormula,
powerpackV2WidgetTreemapDefinitionRequestFormulaToTerraform,
powerpackV2WidgetTreemapDefinitionRequestFormulaToHclTerraform,
PowerpackV2WidgetTreemapDefinitionRequestFormulaList,
PowerpackV2WidgetTreemapDefinitionRequestQuery,
powerpackV2WidgetTreemapDefinitionRequestQueryToTerraform,
powerpackV2WidgetTreemapDefinitionRequestQueryToHclTerraform,
PowerpackV2WidgetTreemapDefinitionRequestQueryList,
PowerpackV2WidgetTreemapDefinitionRequestSort,
powerpackV2WidgetTreemapDefinitionRequestSortToTerraform,
powerpackV2WidgetTreemapDefinitionRequestSortToHclTerraform,
PowerpackV2WidgetTreemapDefinitionRequestSortOutputReference,
PowerpackV2WidgetTreemapDefinitionRequestStyle,
powerpackV2WidgetTreemapDefinitionRequestStyleToTerraform,
powerpackV2WidgetTreemapDefinitionRequestStyleToHclTerraform,
PowerpackV2WidgetTreemapDefinitionRequestStyleOutputReference,
PowerpackV2WidgetTreemapDefinitionCustomLinks,
powerpackV2WidgetTreemapDefinitionCustomLinksToTerraform,
powerpackV2WidgetTreemapDefinitionCustomLinksToHclTerraform,
PowerpackV2WidgetTreemapDefinitionCustomLinksList } from './structs6400';
export interface PowerpackV2WidgetTreemapDefinitionRequest {
  /**
  * formula block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#formula PowerpackV2#formula}
  */
  readonly formula?: PowerpackV2WidgetTreemapDefinitionRequestFormula[] | cdktn.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query?: PowerpackV2WidgetTreemapDefinitionRequestQuery[] | cdktn.IResolvable;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetTreemapDefinitionRequestSort;
  /**
  * style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#style PowerpackV2#style}
  */
  readonly style?: PowerpackV2WidgetTreemapDefinitionRequestStyle;
}

export function powerpackV2WidgetTreemapDefinitionRequestToTerraform(struct?: PowerpackV2WidgetTreemapDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    formula: cdktn.listMapper(powerpackV2WidgetTreemapDefinitionRequestFormulaToTerraform, true)(struct!.formula),
    query: cdktn.listMapper(powerpackV2WidgetTreemapDefinitionRequestQueryToTerraform, true)(struct!.query),
    sort: powerpackV2WidgetTreemapDefinitionRequestSortToTerraform(struct!.sort),
    style: powerpackV2WidgetTreemapDefinitionRequestStyleToTerraform(struct!.style),
  }
}


export function powerpackV2WidgetTreemapDefinitionRequestToHclTerraform(struct?: PowerpackV2WidgetTreemapDefinitionRequest | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    formula: {
      value: cdktn.listMapperHcl(powerpackV2WidgetTreemapDefinitionRequestFormulaToHclTerraform, true)(struct!.formula),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetTreemapDefinitionRequestFormulaList",
    },
    query: {
      value: cdktn.listMapperHcl(powerpackV2WidgetTreemapDefinitionRequestQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetTreemapDefinitionRequestQueryList",
    },
    sort: {
      value: powerpackV2WidgetTreemapDefinitionRequestSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetTreemapDefinitionRequestSortList",
    },
    style: {
      value: powerpackV2WidgetTreemapDefinitionRequestStyleToHclTerraform(struct!.style),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetTreemapDefinitionRequestStyleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetTreemapDefinitionRequestOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetTreemapDefinitionRequest | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetTreemapDefinitionRequest | cdktn.IResolvable | undefined) {
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
  private _formula = new PowerpackV2WidgetTreemapDefinitionRequestFormulaList(this, "formula", false);
  public get formula() {
    return this._formula;
  }
  public putFormula(value: PowerpackV2WidgetTreemapDefinitionRequestFormula[] | cdktn.IResolvable) {
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
  private _query = new PowerpackV2WidgetTreemapDefinitionRequestQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: PowerpackV2WidgetTreemapDefinitionRequestQuery[] | cdktn.IResolvable) {
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
  private _sort = new PowerpackV2WidgetTreemapDefinitionRequestSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetTreemapDefinitionRequestSort) {
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
  private _style = new PowerpackV2WidgetTreemapDefinitionRequestStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: PowerpackV2WidgetTreemapDefinitionRequestStyle) {
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

export class PowerpackV2WidgetTreemapDefinitionRequestList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetTreemapDefinitionRequest[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetTreemapDefinitionRequestOutputReference {
    return new PowerpackV2WidgetTreemapDefinitionRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetTreemapDefinitionTimeFixed {
  /**
  * Start time in seconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#from PowerpackV2#from}
  */
  readonly from: number;
  /**
  * End time in seconds since epoch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#to PowerpackV2#to}
  */
  readonly to: number;
}

export function powerpackV2WidgetTreemapDefinitionTimeFixedToTerraform(struct?: PowerpackV2WidgetTreemapDefinitionTimeFixedOutputReference | PowerpackV2WidgetTreemapDefinitionTimeFixed): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    from: cdktn.numberToTerraform(struct!.from),
    to: cdktn.numberToTerraform(struct!.to),
  }
}


export function powerpackV2WidgetTreemapDefinitionTimeFixedToHclTerraform(struct?: PowerpackV2WidgetTreemapDefinitionTimeFixedOutputReference | PowerpackV2WidgetTreemapDefinitionTimeFixed): any {
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

export class PowerpackV2WidgetTreemapDefinitionTimeFixedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetTreemapDefinitionTimeFixed | undefined {
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

  public set internalValue(value: PowerpackV2WidgetTreemapDefinitionTimeFixed | undefined) {
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
export interface PowerpackV2WidgetTreemapDefinitionTimeLive {
  /**
  * Unit of the time span. Valid values are `minute`, `hour`, `day`, `week`, `month`, `year`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#unit PowerpackV2#unit}
  */
  readonly unit: string;
  /**
  * Value of the time span.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value: number;
}

export function powerpackV2WidgetTreemapDefinitionTimeLiveToTerraform(struct?: PowerpackV2WidgetTreemapDefinitionTimeLiveOutputReference | PowerpackV2WidgetTreemapDefinitionTimeLive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: cdktn.stringToTerraform(struct!.unit),
    value: cdktn.numberToTerraform(struct!.value),
  }
}


export function powerpackV2WidgetTreemapDefinitionTimeLiveToHclTerraform(struct?: PowerpackV2WidgetTreemapDefinitionTimeLiveOutputReference | PowerpackV2WidgetTreemapDefinitionTimeLive): any {
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

export class PowerpackV2WidgetTreemapDefinitionTimeLiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetTreemapDefinitionTimeLive | undefined {
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

  public set internalValue(value: PowerpackV2WidgetTreemapDefinitionTimeLive | undefined) {
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
export interface PowerpackV2WidgetTreemapDefinitionTime {
  /**
  * fixed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#fixed PowerpackV2#fixed}
  */
  readonly fixed?: PowerpackV2WidgetTreemapDefinitionTimeFixed;
  /**
  * live block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#live PowerpackV2#live}
  */
  readonly live?: PowerpackV2WidgetTreemapDefinitionTimeLive;
}

export function powerpackV2WidgetTreemapDefinitionTimeToTerraform(struct?: PowerpackV2WidgetTreemapDefinitionTimeOutputReference | PowerpackV2WidgetTreemapDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fixed: powerpackV2WidgetTreemapDefinitionTimeFixedToTerraform(struct!.fixed),
    live: powerpackV2WidgetTreemapDefinitionTimeLiveToTerraform(struct!.live),
  }
}


export function powerpackV2WidgetTreemapDefinitionTimeToHclTerraform(struct?: PowerpackV2WidgetTreemapDefinitionTimeOutputReference | PowerpackV2WidgetTreemapDefinitionTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fixed: {
      value: powerpackV2WidgetTreemapDefinitionTimeFixedToHclTerraform(struct!.fixed),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetTreemapDefinitionTimeFixedList",
    },
    live: {
      value: powerpackV2WidgetTreemapDefinitionTimeLiveToHclTerraform(struct!.live),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetTreemapDefinitionTimeLiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetTreemapDefinitionTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetTreemapDefinitionTime | undefined {
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

  public set internalValue(value: PowerpackV2WidgetTreemapDefinitionTime | undefined) {
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
  private _fixed = new PowerpackV2WidgetTreemapDefinitionTimeFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: PowerpackV2WidgetTreemapDefinitionTimeFixed) {
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
  private _live = new PowerpackV2WidgetTreemapDefinitionTimeLiveOutputReference(this, "live");
  public get live() {
    return this._live;
  }
  public putLive(value: PowerpackV2WidgetTreemapDefinitionTimeLive) {
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
export interface PowerpackV2WidgetTreemapDefinition {
  /**
  * The description of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#description PowerpackV2#description}
  */
  readonly description?: string;
  /**
  * Hide any portion of the widget's timeframe that is incomplete due to cost data not being available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#hide_incomplete_cost_data PowerpackV2#hide_incomplete_cost_data}
  */
  readonly hideIncompleteCostData?: boolean | cdktn.IResolvable;
  /**
  * The timeframe to use when displaying the widget. Valid values are `1m`, `5m`, `10m`, `15m`, `30m`, `1h`, `4h`, `1d`, `2d`, `1w`, `1mo`, `3mo`, `6mo`, `week_to_date`, `month_to_date`, `1y`, `alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#live_span PowerpackV2#live_span}
  */
  readonly liveSpan?: string;
  /**
  * The title of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#title PowerpackV2#title}
  */
  readonly title?: string;
  /**
  * The alignment of the widget's title. Valid values are `center`, `left`, `right`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#title_align PowerpackV2#title_align}
  */
  readonly titleAlign?: string;
  /**
  * The size of the widget's title (defaults to 16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#title_size PowerpackV2#title_size}
  */
  readonly titleSize?: string;
  /**
  * custom_links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#custom_links PowerpackV2#custom_links}
  */
  readonly customLinks?: PowerpackV2WidgetTreemapDefinitionCustomLinks[] | cdktn.IResolvable;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#request PowerpackV2#request}
  */
  readonly request?: PowerpackV2WidgetTreemapDefinitionRequest[] | cdktn.IResolvable;
  /**
  * time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#time PowerpackV2#time}
  */
  readonly time?: PowerpackV2WidgetTreemapDefinitionTime;
}

export function powerpackV2WidgetTreemapDefinitionToTerraform(struct?: PowerpackV2WidgetTreemapDefinitionOutputReference | PowerpackV2WidgetTreemapDefinition): any {
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
    custom_links: cdktn.listMapper(powerpackV2WidgetTreemapDefinitionCustomLinksToTerraform, true)(struct!.customLinks),
    request: cdktn.listMapper(powerpackV2WidgetTreemapDefinitionRequestToTerraform, true)(struct!.request),
    time: powerpackV2WidgetTreemapDefinitionTimeToTerraform(struct!.time),
  }
}


export function powerpackV2WidgetTreemapDefinitionToHclTerraform(struct?: PowerpackV2WidgetTreemapDefinitionOutputReference | PowerpackV2WidgetTreemapDefinition): any {
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
      value: cdktn.listMapperHcl(powerpackV2WidgetTreemapDefinitionCustomLinksToHclTerraform, true)(struct!.customLinks),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetTreemapDefinitionCustomLinksList",
    },
    request: {
      value: cdktn.listMapperHcl(powerpackV2WidgetTreemapDefinitionRequestToHclTerraform, true)(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetTreemapDefinitionRequestList",
    },
    time: {
      value: powerpackV2WidgetTreemapDefinitionTimeToHclTerraform(struct!.time),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetTreemapDefinitionTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetTreemapDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetTreemapDefinition | undefined {
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

  public set internalValue(value: PowerpackV2WidgetTreemapDefinition | undefined) {
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
  private _customLinks = new PowerpackV2WidgetTreemapDefinitionCustomLinksList(this, "custom_links", false);
  public get customLinks() {
    return this._customLinks;
  }
  public putCustomLinks(value: PowerpackV2WidgetTreemapDefinitionCustomLinks[] | cdktn.IResolvable) {
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
  private _request = new PowerpackV2WidgetTreemapDefinitionRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: PowerpackV2WidgetTreemapDefinitionRequest[] | cdktn.IResolvable) {
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
  private _time = new PowerpackV2WidgetTreemapDefinitionTimeOutputReference(this, "time");
  public get time() {
    return this._time;
  }
  public putTime(value: PowerpackV2WidgetTreemapDefinitionTime) {
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
export interface PowerpackV2WidgetWidgetLayout {
  /**
  * The height of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#height PowerpackV2#height}
  */
  readonly height: number;
  /**
  * Whether the widget should be the first one on the second column in high density or not. Only one widget in the dashboard should have this property set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#is_column_break PowerpackV2#is_column_break}
  */
  readonly isColumnBreak?: boolean | cdktn.IResolvable;
  /**
  * The width of the widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#width PowerpackV2#width}
  */
  readonly width: number;
  /**
  * The position of the widget on the x (horizontal) axis. Must be greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#x PowerpackV2#x}
  */
  readonly x: number;
  /**
  * The position of the widget on the y (vertical) axis. Must be greater than or equal to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#y PowerpackV2#y}
  */
  readonly y: number;
}

export function powerpackV2WidgetWidgetLayoutToTerraform(struct?: PowerpackV2WidgetWidgetLayoutOutputReference | PowerpackV2WidgetWidgetLayout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    height: cdktn.numberToTerraform(struct!.height),
    is_column_break: cdktn.booleanToTerraform(struct!.isColumnBreak),
    width: cdktn.numberToTerraform(struct!.width),
    x: cdktn.numberToTerraform(struct!.x),
    y: cdktn.numberToTerraform(struct!.y),
  }
}


export function powerpackV2WidgetWidgetLayoutToHclTerraform(struct?: PowerpackV2WidgetWidgetLayoutOutputReference | PowerpackV2WidgetWidgetLayout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    height: {
      value: cdktn.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_column_break: {
      value: cdktn.booleanToHclTerraform(struct!.isColumnBreak),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    width: {
      value: cdktn.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x: {
      value: cdktn.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktn.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWidgetLayoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWidgetLayout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._isColumnBreak !== undefined) {
      hasAnyValues = true;
      internalValueResult.isColumnBreak = this._isColumnBreak;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetWidgetLayout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._isColumnBreak = undefined;
      this._width = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._isColumnBreak = value.isColumnBreak;
      this._width = value.width;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // height - computed: false, optional: false, required: true
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // is_column_break - computed: false, optional: true, required: false
  private _isColumnBreak?: boolean | cdktn.IResolvable; 
  public get isColumnBreak() {
    return this.getBooleanAttribute('is_column_break');
  }
  public set isColumnBreak(value: boolean | cdktn.IResolvable) {
    this._isColumnBreak = value;
  }
  public resetIsColumnBreak() {
    this._isColumnBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isColumnBreakInput() {
    return this._isColumnBreak;
  }

  // width - computed: false, optional: false, required: true
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x - computed: false, optional: false, required: true
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: false, required: true
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}
export interface PowerpackV2WidgetWildcardDefinitionCustomLink {
  /**
  * The flag for toggling context menu link visibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#is_hidden PowerpackV2#is_hidden}
  */
  readonly isHidden?: boolean | cdktn.IResolvable;
  /**
  * The label for the custom link URL. Keep the label short and descriptive. Use metrics and tags as variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#label PowerpackV2#label}
  */
  readonly label?: string;
  /**
  * The URL of the custom link. URL must include `http` or `https`. A relative URL must start with `/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#link PowerpackV2#link}
  */
  readonly link?: string;
  /**
  * The label ID that refers to a context menu link. Can be `logs`, `hosts`, `traces`, `profiles`, `processes`, `containers`, or `rum`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#override_label PowerpackV2#override_label}
  */
  readonly overrideLabel?: string;
}

export function powerpackV2WidgetWildcardDefinitionCustomLinkToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionCustomLink | cdktn.IResolvable): any {
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


export function powerpackV2WidgetWildcardDefinitionCustomLinkToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionCustomLink | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionCustomLinkOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionCustomLink | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionCustomLink | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionCustomLinkList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionCustomLink[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionCustomLinkOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionCustomLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for APM Resource Stats queries. Valid values are `apm_resource_stats`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * APM environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#env PowerpackV2#env}
  */
  readonly env: string;
  /**
  * Array of fields to group results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#operation_name PowerpackV2#operation_name}
  */
  readonly operationName?: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#primary_tag_name PowerpackV2#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#primary_tag_value PowerpackV2#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#resource_name PowerpackV2#resource_name}
  */
  readonly resourceName?: string;
  /**
  * APM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#service PowerpackV2#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `errors`, `error_rate`, `hits`, `latency_avg`, `latency_distribution`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#stat PowerpackV2#stat}
  */
  readonly stat: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryCompute {
  /**
  * The aggregation methods for event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryComputeToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryCompute | cdktn.IResolvable): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryComputeToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryCompute | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryCompute | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryComputeOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySortToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySort): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySortToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySort): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySort | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBy {
  /**
  * The event facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySort;
}

export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBySort) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSortToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSort): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSortToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSort): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSort | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFields {
  /**
  * List of event facets to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#fields PowerpackV2#fields}
  */
  readonly fields: string[];
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSort;
}

export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSortToTerraform(struct!.sort),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFields): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFields | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFields | undefined) {
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
  private _sort = new PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsSort) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearch {
  /**
  * The events search string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearchToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearchOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearchToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearchOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearch): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearch | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for event platform-based queries. Valid values are `logs`, `spans`, `network`, `rum`, `security_signals`, `profiles`, `audit`, `events`, `ci_tests`, `ci_pipelines`, `incident_analytics`, `product_analytics`, `on_call_events`, `errors`, `llm_observability`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream. Omit or use `[]` to query all indexes at once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#indexes PowerpackV2#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Option for storage location. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#storage PowerpackV2#storage}
  */
  readonly storage?: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#compute PowerpackV2#compute}
  */
  readonly compute: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryCompute[] | cdktn.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBy[] | cdktn.IResolvable;
  /**
  * group_by_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by_fields PowerpackV2#group_by_fields}
  */
  readonly groupByFields?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFields;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#search PowerpackV2#search}
  */
  readonly search?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearch;
}

export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuery): any {
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
    compute: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryComputeToTerraform, true)(struct!.compute),
    group_by: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByToTerraform, true)(struct!.groupBy),
    group_by_fields: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsToTerraform(struct!.groupByFields),
    search: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuery): any {
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
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByList",
    },
    group_by_fields: {
      value: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsToHclTerraform(struct!.groupByFields),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsList",
    },
    search: {
      value: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuery | undefined) {
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
  private _compute = new PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryCompute[] | cdktn.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupBy[] | cdktn.IResolvable) {
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
  private _groupByFields = new PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFieldsOutputReference(this, "group_by_fields");
  public get groupByFields() {
    return this._groupByFields;
  }
  public putGroupByFields(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryGroupByFields) {
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
  private _search = new PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuerySearch) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregator PowerpackV2#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for metrics queries. Defaults to `"metrics"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource?: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * The metrics query definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
  /**
  * Semantic mode for metrics queries. This determines how metrics from different sources are combined or displayed. Valid values are `combined`, `native`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#semantic_mode PowerpackV2#semantic_mode}
  */
  readonly semanticMode?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQuery {
  /**
  * apm_resource_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#apm_resource_stats_query PowerpackV2#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQuery;
  /**
  * event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#event_query PowerpackV2#event_query}
  */
  readonly eventQuery?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuery;
  /**
  * metric_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric_query PowerpackV2#metric_query}
  */
  readonly metricQuery?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQuery;
}

export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    apm_resource_stats_query: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    event_query: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQueryToTerraform(struct!.metricQuery),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    apm_resource_stats_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQueryToHclTerraform(struct!.apmResourceStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQueryList",
    },
    event_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryToHclTerraform(struct!.eventQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryList",
    },
    metric_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQueryToHclTerraform(struct!.metricQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apmResourceStatsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmResourceStatsQuery = this._apmResourceStatsQuery?.internalValue;
    }
    if (this._eventQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventQuery = this._eventQuery?.internalValue;
    }
    if (this._metricQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricQuery = this._metricQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apmResourceStatsQuery.internalValue = undefined;
      this._eventQuery.internalValue = undefined;
      this._metricQuery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apmResourceStatsQuery.internalValue = value.apmResourceStatsQuery;
      this._eventQuery.internalValue = value.eventQuery;
      this._metricQuery.internalValue = value.metricQuery;
    }
  }

  // apm_resource_stats_query - computed: false, optional: true, required: false
  private _apmResourceStatsQuery = new PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQueryOutputReference(this, "apm_resource_stats_query");
  public get apmResourceStatsQuery() {
    return this._apmResourceStatsQuery;
  }
  public putApmResourceStatsQuery(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryApmResourceStatsQuery) {
    this._apmResourceStatsQuery.internalValue = value;
  }
  public resetApmResourceStatsQuery() {
    this._apmResourceStatsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmResourceStatsQueryInput() {
    return this._apmResourceStatsQuery.internalValue;
  }

  // event_query - computed: false, optional: true, required: false
  private _eventQuery = new PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQueryOutputReference(this, "event_query");
  public get eventQuery() {
    return this._eventQuery;
  }
  public putEventQuery(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryEventQuery) {
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
  private _metricQuery = new PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQueryOutputReference(this, "metric_query");
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryMetricQuery) {
    this._metricQuery.internalValue = value;
  }
  public resetMetricQuery() {
    this._metricQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricQueryInput() {
    return this._metricQuery.internalValue;
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyle {
  /**
  * How to order series. Valid values are `tags`, `values`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order_by PowerpackV2#order_by}
  */
  readonly orderBy?: string;
  /**
  * A color palette to apply to the widget. The available options are available at: https://docs.datadoghq.com/dashboards/widgets/timeseries/#appearance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#palette PowerpackV2#palette}
  */
  readonly palette?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyleToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyleOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    order_by: cdktn.stringToTerraform(struct!.orderBy),
    palette: cdktn.stringToTerraform(struct!.palette),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyleToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyleOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyle): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyle | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyle | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestHistogramRequest {
  /**
  * histogram_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#histogram_query PowerpackV2#histogram_query}
  */
  readonly histogramQuery: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQuery;
  /**
  * style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#style PowerpackV2#style}
  */
  readonly style?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyle;
}

export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    histogram_query: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryToTerraform(struct!.histogramQuery),
    style: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyleToTerraform(struct!.style),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestHistogramRequestToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestOutputReference | PowerpackV2WidgetWildcardDefinitionRequestHistogramRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    histogram_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryToHclTerraform(struct!.histogramQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryList",
    },
    style: {
      value: powerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyleToHclTerraform(struct!.style),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestHistogramRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._histogramQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.histogramQuery = this._histogramQuery?.internalValue;
    }
    if (this._style?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._histogramQuery.internalValue = undefined;
      this._style.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._histogramQuery.internalValue = value.histogramQuery;
      this._style.internalValue = value.style;
    }
  }

  // histogram_query - computed: false, optional: false, required: true
  private _histogramQuery = new PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQueryOutputReference(this, "histogram_query");
  public get histogramQuery() {
    return this._histogramQuery;
  }
  public putHistogramQuery(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestHistogramQuery) {
    this._histogramQuery.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramQueryInput() {
    return this._histogramQuery.internalValue;
  }

  // style - computed: false, optional: true, required: false
  private _style = new PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: PowerpackV2WidgetWildcardDefinitionRequestHistogramRequestStyle) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumns {
  /**
  * Widget column field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#field PowerpackV2#field}
  */
  readonly field?: string;
  /**
  * Widget column width. Valid values are `auto`, `compact`, `full`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#width PowerpackV2#width}
  */
  readonly width?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumnsToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumns | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    width: cdktn.stringToTerraform(struct!.width),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumnsToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumns | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumnsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumns | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumns | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumnsList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumns[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumnsOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupBy {
  /**
  * Facet name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupByToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupBy | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupBy | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupByOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySort {
  /**
  * The facet path for the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#column PowerpackV2#column}
  */
  readonly column: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySortToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySortToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySort): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySort | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuery {
  /**
  * Specifies the field for logs pattern clustering. Can only be used with `logs_pattern_stream`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#clustering_pattern_field_path PowerpackV2#clustering_pattern_field_path}
  */
  readonly clusteringPatternFieldPath?: string;
  /**
  * Source from which to query items to display in the stream. Valid values are `logs_stream`, `audit_stream`, `ci_pipeline_stream`, `ci_test_stream`, `rum_issue_stream`, `apm_issue_stream`, `trace_stream`, `logs_issue_stream`, `logs_pattern_stream`, `logs_transaction_stream`, `event_stream`, `rum_stream`, `llm_observability_stream`, `issue_stream`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Size of events displayed in widget. Required if `data_source` is `event_stream`. Valid values are `s`, `l`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#event_size PowerpackV2#event_size}
  */
  readonly eventSize?: string;
  /**
  * List of indexes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#indexes PowerpackV2#indexes}
  */
  readonly indexes?: string[];
  /**
  * Widget query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#query_string PowerpackV2#query_string}
  */
  readonly queryString?: string;
  /**
  * Storage location (private beta).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#storage PowerpackV2#storage}
  */
  readonly storage?: string;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupBy[] | cdktn.IResolvable;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySort;
}

export function powerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuery): any {
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
    group_by: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupByToTerraform, true)(struct!.groupBy),
    sort: powerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySortToTerraform(struct!.sort),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuery): any {
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
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupByList",
    },
    sort: {
      value: powerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuery | undefined) {
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
  private _groupBy = new PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryGroupBy[] | cdktn.IResolvable) {
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
  private _sort = new PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuerySort) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestListstreamRequest {
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#columns PowerpackV2#columns}
  */
  readonly columns: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumns[] | cdktn.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuery;
}

export function powerpackV2WidgetWildcardDefinitionRequestListstreamRequestToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestOutputReference | PowerpackV2WidgetWildcardDefinitionRequestListstreamRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    columns: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumnsToTerraform, true)(struct!.columns),
    query: powerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestListstreamRequestToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestOutputReference | PowerpackV2WidgetWildcardDefinitionRequestListstreamRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    columns: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumnsList",
    },
    query: {
      value: powerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestListstreamRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns.internalValue = value.columns;
      this._query.internalValue = value.query;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestColumns[] | cdktn.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // query - computed: false, optional: false, required: true
  private _query = new PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: PowerpackV2WidgetWildcardDefinitionRequestListstreamRequestQuery) {
    this._query.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort_query PowerpackV2#sort_query}
  */
  readonly sortQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQuery;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupByToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBySortQuery) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupByOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiCompute | cdktn.IResolvable): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiCompute | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#search_query PowerpackV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#compute_query PowerpackV2#compute_query}
  */
  readonly computeQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQuery): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQuery | undefined) {
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
  private _computeQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryComputeQuery) {
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
  private _groupBy = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptions {
  /**
  * The type of trend line to display. Valid values are `area`, `line`, and `bars`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#trend_type PowerpackV2#trend_type}
  */
  readonly trendType?: string;
  /**
  * The scale of the y-axis. Valid values are `shared` and `independent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#y_scale PowerpackV2#y_scale}
  */
  readonly yScale?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptionsToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptionsOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    trend_type: cdktn.stringToTerraform(struct!.trendType),
    y_scale: cdktn.stringToTerraform(struct!.yScale),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptionsToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptionsOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptions): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptions | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptions | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormats {
  /**
  * The comparator to use. Valid values are `=`, `>`, `>=`, `<`, `<=`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#comparator PowerpackV2#comparator}
  */
  readonly comparator: string;
  /**
  * The color palette to apply to the background, same values available as palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#custom_bg_color PowerpackV2#custom_bg_color}
  */
  readonly customBgColor?: string;
  /**
  * The color palette to apply to the foreground, same values available as palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#custom_fg_color PowerpackV2#custom_fg_color}
  */
  readonly customFgColor?: string;
  /**
  * Setting this to True hides values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#hide_value PowerpackV2#hide_value}
  */
  readonly hideValue?: boolean | cdktn.IResolvable;
  /**
  * Displays an image as the background.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#image_url PowerpackV2#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The metric from the request to correlate with this conditional format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * The color palette to apply. Valid values are `blue`, `custom_bg`, `custom_image`, `custom_text`, `gray_on_white`, `grey`, `green`, `orange`, `red`, `red_on_white`, `white_on_gray`, `white_on_green`, `green_on_white`, `white_on_red`, `white_on_yellow`, `yellow_on_white`, `black_on_light_yellow`, `black_on_light_green`, `black_on_light_red`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#palette PowerpackV2#palette}
  */
  readonly palette: string;
  /**
  * Defines the displayed timeframe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#timeframe PowerpackV2#timeframe}
  */
  readonly timeframe?: string;
  /**
  * A value for the comparator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormatsToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormats | cdktn.IResolvable): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormatsToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormats | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormatsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormats | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormats | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormatsList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormats[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormatsOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimit {
  /**
  * The number of results to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#count PowerpackV2#count}
  */
  readonly count?: number;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`. Defaults to `"desc"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimitToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimitOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimitToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimitOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimit): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimit | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimit | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonical {
  /**
  * per unit name. If you want to represent megabytes/s, you set 'unit_name' = 'megabyte' and 'per_unit_name = 'second'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#per_unit_name PowerpackV2#per_unit_name}
  */
  readonly perUnitName?: string;
  /**
  * Unit name. It should be in singular form ('megabyte' and not 'megabytes')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#unit_name PowerpackV2#unit_name}
  */
  readonly unitName?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonicalToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonicalOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonical): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    per_unit_name: cdktn.stringToTerraform(struct!.perUnitName),
    unit_name: cdktn.stringToTerraform(struct!.unitName),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonicalToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonicalOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonical): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonicalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonical | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonical | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustom {
  /**
  * Unit label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#label PowerpackV2#label}
  */
  readonly label: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustomToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustomOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustomToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustomOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustom): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustom | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnit {
  /**
  * canonical block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#canonical PowerpackV2#canonical}
  */
  readonly canonical?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonical;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#custom PowerpackV2#custom}
  */
  readonly custom?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustom;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    canonical: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonicalToTerraform(struct!.canonical),
    custom: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustomToTerraform(struct!.custom),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    canonical: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonicalToHclTerraform(struct!.canonical),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonicalList",
    },
    custom: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnit | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnit | undefined) {
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
  private _canonical = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonicalOutputReference(this, "canonical");
  public get canonical() {
    return this._canonical;
  }
  public putCanonical(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCanonical) {
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
  private _custom = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitCustom) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScale {
  /**
  * The name of the unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#unit_name PowerpackV2#unit_name}
  */
  readonly unitName: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScaleToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScaleOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit_name: cdktn.stringToTerraform(struct!.unitName),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScaleToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScaleOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScale): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScaleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unitName !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitName = this._unitName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScale | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormat {
  /**
  * unit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#unit PowerpackV2#unit}
  */
  readonly unit: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnit;
  /**
  * unit_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#unit_scale PowerpackV2#unit_scale}
  */
  readonly unitScale?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScale;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitToTerraform(struct!.unit),
    unit_scale: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScaleToTerraform(struct!.unitScale),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitToHclTerraform(struct!.unit),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitList",
    },
    unit_scale: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScaleToHclTerraform(struct!.unitScale),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormat | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormat | undefined) {
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
  private _unit = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitOutputReference(this, "unit");
  public get unit() {
    return this._unit;
  }
  public putUnit(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnit) {
    this._unit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit.internalValue;
  }

  // unit_scale - computed: false, optional: true, required: false
  private _unitScale = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScaleOutputReference(this, "unit_scale");
  public get unitScale() {
    return this._unitScale;
  }
  public putUnitScale(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatUnitScale) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyle {
  /**
  * The color palette used to display the formula. A guide to the available color palettes can be found at https://docs.datadoghq.com/dashboards/guide/widget_colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#palette PowerpackV2#palette}
  */
  readonly palette?: string;
  /**
  * Index specifying which color to use within the palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#palette_index PowerpackV2#palette_index}
  */
  readonly paletteIndex?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyleToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyleOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    palette: cdktn.stringToTerraform(struct!.palette),
    palette_index: cdktn.numberToTerraform(struct!.paletteIndex),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyleToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyleOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyle): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyle | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyle | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormula {
  /**
  * An expression alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#alias PowerpackV2#alias}
  */
  readonly alias?: string;
  /**
  * A list of display modes for each table cell. Valid values are `number`, `bar`, and `trend`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cell_display_mode PowerpackV2#cell_display_mode}
  */
  readonly cellDisplayMode?: string;
  /**
  * A string expression built from queries, formulas, and functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#formula_expression PowerpackV2#formula_expression}
  */
  readonly formulaExpression: string;
  /**
  * cell_display_mode_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cell_display_mode_options PowerpackV2#cell_display_mode_options}
  */
  readonly cellDisplayModeOptions?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptions;
  /**
  * conditional_formats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#conditional_formats PowerpackV2#conditional_formats}
  */
  readonly conditionalFormats?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormats[] | cdktn.IResolvable;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimit;
  /**
  * number_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#number_format PowerpackV2#number_format}
  */
  readonly numberFormat?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormat;
  /**
  * style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#style PowerpackV2#style}
  */
  readonly style?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyle;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormula | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    cell_display_mode: cdktn.stringToTerraform(struct!.cellDisplayMode),
    formula_expression: cdktn.stringToTerraform(struct!.formulaExpression),
    cell_display_mode_options: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptionsToTerraform(struct!.cellDisplayModeOptions),
    conditional_formats: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormatsToTerraform, true)(struct!.conditionalFormats),
    limit: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimitToTerraform(struct!.limit),
    number_format: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatToTerraform(struct!.numberFormat),
    style: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyleToTerraform(struct!.style),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormula | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptionsToHclTerraform(struct!.cellDisplayModeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptionsList",
    },
    conditional_formats: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormatsToHclTerraform, true)(struct!.conditionalFormats),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormatsList",
    },
    limit: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimitToHclTerraform(struct!.limit),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimitList",
    },
    number_format: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatToHclTerraform(struct!.numberFormat),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatList",
    },
    style: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyleToHclTerraform(struct!.style),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormula | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormula | cdktn.IResolvable | undefined) {
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
  private _cellDisplayModeOptions = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptionsOutputReference(this, "cell_display_mode_options");
  public get cellDisplayModeOptions() {
    return this._cellDisplayModeOptions;
  }
  public putCellDisplayModeOptions(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaCellDisplayModeOptions) {
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
  private _conditionalFormats = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormatsList(this, "conditional_formats", false);
  public get conditionalFormats() {
    return this._conditionalFormats;
  }
  public putConditionalFormats(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaConditionalFormats[] | cdktn.IResolvable) {
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
  private _limit = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaLimit) {
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
  private _numberFormat = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormatOutputReference(this, "number_format");
  public get numberFormat() {
    return this._numberFormat;
  }
  public putNumberFormat(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaNumberFormat) {
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
  private _style = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaStyle) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormula[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort_query PowerpackV2#sort_query}
  */
  readonly sortQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQuery;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupByToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBySortQuery) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupByOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiCompute | cdktn.IResolvable): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiCompute | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#search_query PowerpackV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#compute_query PowerpackV2#compute_query}
  */
  readonly computeQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQuery): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQuery | undefined) {
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
  private _computeQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryComputeQuery) {
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
  private _groupBy = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQuery {
  /**
  * A list of processes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#filter_by PowerpackV2#filter_by}
  */
  readonly filterBy?: string[];
  /**
  * The max number of items in the filter list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * Your chosen metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric: string;
  /**
  * Your chosen search term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#search_by PowerpackV2#search_by}
  */
  readonly searchBy?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for APM Dependency Stats queries. Valid values are `apm_dependency_stats`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * APM environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#env PowerpackV2#env}
  */
  readonly env: string;
  /**
  * Determines whether stats for upstream or downstream dependencies should be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#is_upstream PowerpackV2#is_upstream}
  */
  readonly isUpstream?: boolean | cdktn.IResolvable;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#operation_name PowerpackV2#operation_name}
  */
  readonly operationName: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#primary_tag_name PowerpackV2#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#primary_tag_value PowerpackV2#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#resource_name PowerpackV2#resource_name}
  */
  readonly resourceName: string;
  /**
  * APM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#service PowerpackV2#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `avg_duration`, `avg_root_duration`, `avg_spans_per_trace`, `error_rate`, `pct_exec_time`, `pct_of_traces`, `total_traces_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#stat PowerpackV2#stat}
  */
  readonly stat: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for APM Resource Stats queries. Valid values are `apm_resource_stats`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * APM environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#env PowerpackV2#env}
  */
  readonly env: string;
  /**
  * Array of fields to group results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#operation_name PowerpackV2#operation_name}
  */
  readonly operationName?: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#primary_tag_name PowerpackV2#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#primary_tag_value PowerpackV2#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#resource_name PowerpackV2#resource_name}
  */
  readonly resourceName?: string;
  /**
  * APM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#service PowerpackV2#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `errors`, `error_rate`, `hits`, `latency_avg`, `latency_distribution`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#stat PowerpackV2#stat}
  */
  readonly stat: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQuery {
  /**
  * The aggregation methods available for cloud cost queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregator PowerpackV2#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for cloud cost queries. Valid values are `cloud_cost`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Query for Cloud Cost data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryCompute {
  /**
  * The aggregation methods for event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryComputeToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryCompute | cdktn.IResolvable): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryComputeToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryCompute | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryCompute | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryComputeOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySortToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySort): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySortToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySort): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySort | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBy {
  /**
  * The event facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySort;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBySort) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSortToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSort): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSortToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSort): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSort | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFields {
  /**
  * List of event facets to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#fields PowerpackV2#fields}
  */
  readonly fields: string[];
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSort;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSortToTerraform(struct!.sort),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFields): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFields | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFields | undefined) {
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
  private _sort = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsSort) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearch {
  /**
  * The events search string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearchToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearchOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearchToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearchOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearch): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearch | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for event platform-based queries. Valid values are `logs`, `spans`, `network`, `rum`, `security_signals`, `profiles`, `audit`, `events`, `ci_tests`, `ci_pipelines`, `incident_analytics`, `product_analytics`, `on_call_events`, `errors`, `llm_observability`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream. Omit or use `[]` to query all indexes at once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#indexes PowerpackV2#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Option for storage location. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#storage PowerpackV2#storage}
  */
  readonly storage?: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#compute PowerpackV2#compute}
  */
  readonly compute: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryCompute[] | cdktn.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBy[] | cdktn.IResolvable;
  /**
  * group_by_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by_fields PowerpackV2#group_by_fields}
  */
  readonly groupByFields?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFields;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#search PowerpackV2#search}
  */
  readonly search?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearch;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuery): any {
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
    compute: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryComputeToTerraform, true)(struct!.compute),
    group_by: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByToTerraform, true)(struct!.groupBy),
    group_by_fields: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsToTerraform(struct!.groupByFields),
    search: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuery): any {
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
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByList",
    },
    group_by_fields: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsToHclTerraform(struct!.groupByFields),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsList",
    },
    search: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuery | undefined) {
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
  private _compute = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryCompute[] | cdktn.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupBy[] | cdktn.IResolvable) {
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
  private _groupByFields = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFieldsOutputReference(this, "group_by_fields");
  public get groupByFields() {
    return this._groupByFields;
  }
  public putGroupByFields(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryGroupByFields) {
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
  private _search = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuerySearch) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregator PowerpackV2#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for metrics queries. Defaults to `"metrics"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource?: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * The metrics query definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
  /**
  * Semantic mode for metrics queries. This determines how metrics from different sources are combined or displayed. Valid values are `combined`, `native`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#semantic_mode PowerpackV2#semantic_mode}
  */
  readonly semanticMode?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregator PowerpackV2#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for process queries. Valid values are `process`, `container`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Whether to normalize the CPU percentages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#is_normalized_cpu PowerpackV2#is_normalized_cpu}
  */
  readonly isNormalizedCpu?: boolean | cdktn.IResolvable;
  /**
  * The number of hits to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * The process metric name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric: string;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`. Defaults to `"desc"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: string;
  /**
  * An array of tags to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#tag_filters PowerpackV2#tag_filters}
  */
  readonly tagFilters?: string[];
  /**
  * The text to use as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#text_filter PowerpackV2#text_filter}
  */
  readonly textFilter?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQuery {
  /**
  * Additional filters applied to the SLO query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#additional_query_filters PowerpackV2#additional_query_filters}
  */
  readonly additionalQueryFilters?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for SLO queries. Valid values are `slo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Group mode to query measures. Valid values are `overall`, `components`. Defaults to `"overall"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_mode PowerpackV2#group_mode}
  */
  readonly groupMode?: string;
  /**
  * SLO measures queries. Valid values are `good_events`, `bad_events`, `good_minutes`, `bad_minutes`, `slo_status`, `error_budget_remaining`, `burn_rate`, `error_budget_burndown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#measure PowerpackV2#measure}
  */
  readonly measure: string;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name?: string;
  /**
  * ID of an SLO to query measures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#slo_id PowerpackV2#slo_id}
  */
  readonly sloId: string;
  /**
  * type of the SLO to query. Valid values are `metric`, `monitor`, `time_slice`. Defaults to `"metric"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#slo_query_type PowerpackV2#slo_query_type}
  */
  readonly sloQueryType?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuery {
  /**
  * apm_dependency_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#apm_dependency_stats_query PowerpackV2#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQuery;
  /**
  * apm_resource_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#apm_resource_stats_query PowerpackV2#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQuery;
  /**
  * cloud_cost_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cloud_cost_query PowerpackV2#cloud_cost_query}
  */
  readonly cloudCostQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQuery;
  /**
  * event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#event_query PowerpackV2#event_query}
  */
  readonly eventQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuery;
  /**
  * metric_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric_query PowerpackV2#metric_query}
  */
  readonly metricQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQuery;
  /**
  * process_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#process_query PowerpackV2#process_query}
  */
  readonly processQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQuery;
  /**
  * slo_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#slo_query PowerpackV2#slo_query}
  */
  readonly sloQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQuery;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    apm_dependency_stats_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_resource_stats_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    cloud_cost_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQueryToTerraform(struct!.cloudCostQuery),
    event_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQueryToTerraform(struct!.processQuery),
    slo_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQueryToTerraform(struct!.sloQuery),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    apm_dependency_stats_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQueryToHclTerraform(struct!.apmDependencyStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQueryList",
    },
    apm_resource_stats_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQueryToHclTerraform(struct!.apmResourceStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQueryList",
    },
    cloud_cost_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQueryToHclTerraform(struct!.cloudCostQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQueryList",
    },
    event_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryToHclTerraform(struct!.eventQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryList",
    },
    metric_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQueryToHclTerraform(struct!.metricQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQueryList",
    },
    process_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQueryToHclTerraform(struct!.processQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQueryList",
    },
    slo_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQueryToHclTerraform(struct!.sloQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apmDependencyStatsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmDependencyStatsQuery = this._apmDependencyStatsQuery?.internalValue;
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
    if (this._sloQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloQuery = this._sloQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apmDependencyStatsQuery.internalValue = undefined;
      this._apmResourceStatsQuery.internalValue = undefined;
      this._cloudCostQuery.internalValue = undefined;
      this._eventQuery.internalValue = undefined;
      this._metricQuery.internalValue = undefined;
      this._processQuery.internalValue = undefined;
      this._sloQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apmDependencyStatsQuery.internalValue = value.apmDependencyStatsQuery;
      this._apmResourceStatsQuery.internalValue = value.apmResourceStatsQuery;
      this._cloudCostQuery.internalValue = value.cloudCostQuery;
      this._eventQuery.internalValue = value.eventQuery;
      this._metricQuery.internalValue = value.metricQuery;
      this._processQuery.internalValue = value.processQuery;
      this._sloQuery.internalValue = value.sloQuery;
    }
  }

  // apm_dependency_stats_query - computed: false, optional: true, required: false
  private _apmDependencyStatsQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQueryOutputReference(this, "apm_dependency_stats_query");
  public get apmDependencyStatsQuery() {
    return this._apmDependencyStatsQuery;
  }
  public putApmDependencyStatsQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmDependencyStatsQuery) {
    this._apmDependencyStatsQuery.internalValue = value;
  }
  public resetApmDependencyStatsQuery() {
    this._apmDependencyStatsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDependencyStatsQueryInput() {
    return this._apmDependencyStatsQuery.internalValue;
  }

  // apm_resource_stats_query - computed: false, optional: true, required: false
  private _apmResourceStatsQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQueryOutputReference(this, "apm_resource_stats_query");
  public get apmResourceStatsQuery() {
    return this._apmResourceStatsQuery;
  }
  public putApmResourceStatsQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryApmResourceStatsQuery) {
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
  private _cloudCostQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQueryOutputReference(this, "cloud_cost_query");
  public get cloudCostQuery() {
    return this._cloudCostQuery;
  }
  public putCloudCostQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryCloudCostQuery) {
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
  private _eventQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQueryOutputReference(this, "event_query");
  public get eventQuery() {
    return this._eventQuery;
  }
  public putEventQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryEventQuery) {
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
  private _metricQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQueryOutputReference(this, "metric_query");
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryMetricQuery) {
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
  private _processQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryProcessQuery) {
    this._processQuery.internalValue = value;
  }
  public resetProcessQuery() {
    this._processQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processQueryInput() {
    return this._processQuery.internalValue;
  }

  // slo_query - computed: false, optional: true, required: false
  private _sloQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQueryOutputReference(this, "slo_query");
  public get sloQuery() {
    return this._sloQuery;
  }
  public putSloQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuerySloQuery) {
    this._sloQuery.internalValue = value;
  }
  public resetSloQuery() {
    this._sloQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloQueryInput() {
    return this._sloQuery.internalValue;
  }
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuery[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort_query PowerpackV2#sort_query}
  */
  readonly sortQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQuery;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupByToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBySortQuery) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupByOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiCompute | cdktn.IResolvable): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiCompute | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#search_query PowerpackV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#compute_query PowerpackV2#compute_query}
  */
  readonly computeQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQuery): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQuery | undefined) {
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
  private _computeQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryComputeQuery) {
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
  private _groupBy = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort_query PowerpackV2#sort_query}
  */
  readonly sortQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQuery;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupByToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBySortQuery) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupByOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiCompute | cdktn.IResolvable): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiCompute | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#search_query PowerpackV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#compute_query PowerpackV2#compute_query}
  */
  readonly computeQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQuery): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQuery | undefined) {
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
  private _computeQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryComputeQuery) {
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
  private _groupBy = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSort {
  /**
  * The index of the formula to sort by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: number;
  /**
  * Widget sorting direction. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSortToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.numberToTerraform(struct!.index),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSortToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSort): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSort | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSort {
  /**
  * The name of the group tag to sort by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Widget sorting direction. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSortToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSortToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSort): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSort | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderBy {
  /**
  * formula_sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#formula_sort PowerpackV2#formula_sort}
  */
  readonly formulaSort?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSort;
  /**
  * group_sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_sort PowerpackV2#group_sort}
  */
  readonly groupSort?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSort;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    formula_sort: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSortToTerraform(struct!.formulaSort),
    group_sort: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSortToTerraform(struct!.groupSort),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    formula_sort: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSortToHclTerraform(struct!.formulaSort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSortList",
    },
    group_sort: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSortToHclTerraform(struct!.groupSort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderBy | cdktn.IResolvable | undefined) {
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
  private _formulaSort = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSortOutputReference(this, "formula_sort");
  public get formulaSort() {
    return this._formulaSort;
  }
  public putFormulaSort(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByFormulaSort) {
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
  private _groupSort = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSortOutputReference(this, "group_sort");
  public get groupSort() {
    return this._groupSort;
  }
  public putGroupSort(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByGroupSort) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSort {
  /**
  * The number of items to limit the widget to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#count PowerpackV2#count}
  */
  readonly count?: number;
  /**
  * order_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order_by PowerpackV2#order_by}
  */
  readonly orderBy?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderBy[] | cdktn.IResolvable;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    order_by: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByToTerraform, true)(struct!.orderBy),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSort): any {
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
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByToHclTerraform, true)(struct!.orderBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSort | undefined) {
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
  private _orderBy = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderByList(this, "order_by", false);
  public get orderBy() {
    return this._orderBy;
  }
  public putOrderBy(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOrderBy[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyle {
  /**
  * How to order series. Valid values are `tags`, `values`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order_by PowerpackV2#order_by}
  */
  readonly orderBy?: string;
  /**
  * A color palette to apply to the widget. The available options are available at: https://docs.datadoghq.com/dashboards/widgets/timeseries/#appearance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#palette PowerpackV2#palette}
  */
  readonly palette?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyleToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyleOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    order_by: cdktn.stringToTerraform(struct!.orderBy),
    palette: cdktn.stringToTerraform(struct!.palette),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyleToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyleOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyle): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyle | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyle | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequest {
  /**
  * How the data points are displayed on the graph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#display_type PowerpackV2#display_type}
  */
  readonly displayType?: string;
  /**
  * The metric query to use for this widget. **Deprecated.** Use queries and formulas instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#q PowerpackV2#q}
  */
  readonly q?: string;
  /**
  * apm_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#apm_query PowerpackV2#apm_query}
  */
  readonly apmQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQuery;
  /**
  * formula block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#formula PowerpackV2#formula}
  */
  readonly formula?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormula[] | cdktn.IResolvable;
  /**
  * log_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#log_query PowerpackV2#log_query}
  */
  readonly logQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQuery;
  /**
  * process_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#process_query PowerpackV2#process_query}
  */
  readonly processQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQuery;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuery[] | cdktn.IResolvable;
  /**
  * rum_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#rum_query PowerpackV2#rum_query}
  */
  readonly rumQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQuery;
  /**
  * security_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#security_query PowerpackV2#security_query}
  */
  readonly securityQuery?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQuery;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSort;
  /**
  * style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#style PowerpackV2#style}
  */
  readonly style?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyle;
}

export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequest): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_type: cdktn.stringToTerraform(struct!.displayType),
    q: cdktn.stringToTerraform(struct!.q),
    apm_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryToTerraform(struct!.apmQuery),
    formula: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaToTerraform, true)(struct!.formula),
    log_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryToTerraform(struct!.logQuery),
    process_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQueryToTerraform(struct!.processQuery),
    query: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryToTerraform, true)(struct!.query),
    rum_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryToTerraform(struct!.rumQuery),
    security_query: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryToTerraform(struct!.securityQuery),
    sort: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortToTerraform(struct!.sort),
    style: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyleToTerraform(struct!.style),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequest): any {
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
    q: {
      value: cdktn.stringToHclTerraform(struct!.q),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apm_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryToHclTerraform(struct!.apmQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryList",
    },
    formula: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaToHclTerraform, true)(struct!.formula),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaList",
    },
    log_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryToHclTerraform(struct!.logQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryList",
    },
    process_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQueryToHclTerraform(struct!.processQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQueryList",
    },
    query: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryList",
    },
    rum_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryToHclTerraform(struct!.rumQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryList",
    },
    security_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryToHclTerraform(struct!.securityQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryList",
    },
    sort: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortList",
    },
    style: {
      value: powerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyleToHclTerraform(struct!.style),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayType !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayType = this._displayType;
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayType = undefined;
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
      this._displayType = value.displayType;
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
  private _apmQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQueryOutputReference(this, "apm_query");
  public get apmQuery() {
    return this._apmQuery;
  }
  public putApmQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestApmQuery) {
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
  private _formula = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormulaList(this, "formula", false);
  public get formula() {
    return this._formula;
  }
  public putFormula(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestFormula[] | cdktn.IResolvable) {
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
  private _logQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQueryOutputReference(this, "log_query");
  public get logQuery() {
    return this._logQuery;
  }
  public putLogQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestLogQuery) {
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
  private _processQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestProcessQuery) {
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
  private _query = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQueryList(this, "query", false);
  public get query() {
    return this._query;
  }
  public putQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestQuery[] | cdktn.IResolvable) {
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
  private _rumQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQueryOutputReference(this, "rum_query");
  public get rumQuery() {
    return this._rumQuery;
  }
  public putRumQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestRumQuery) {
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
  private _securityQuery = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQueryOutputReference(this, "security_query");
  public get securityQuery() {
    return this._securityQuery;
  }
  public putSecurityQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSecurityQuery) {
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
  private _sort = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestSort) {
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
  private _style = new PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: PowerpackV2WidgetWildcardDefinitionRequestTimeseriesRequestStyle) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort_query PowerpackV2#sort_query}
  */
  readonly sortQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQuery;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupByToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBySortQuery) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupByOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiCompute | cdktn.IResolvable): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiCompute | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#search_query PowerpackV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#compute_query PowerpackV2#compute_query}
  */
  readonly computeQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQuery): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQuery | undefined) {
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
  private _computeQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryComputeQuery) {
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
  private _groupBy = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestApmQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptions {
  /**
  * The type of trend line to display. Valid values are `area`, `line`, and `bars`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#trend_type PowerpackV2#trend_type}
  */
  readonly trendType?: string;
  /**
  * The scale of the y-axis. Valid values are `shared` and `independent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#y_scale PowerpackV2#y_scale}
  */
  readonly yScale?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptionsToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptionsOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    trend_type: cdktn.stringToTerraform(struct!.trendType),
    y_scale: cdktn.stringToTerraform(struct!.yScale),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptionsToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptionsOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptions): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptions | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptions | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormats {
  /**
  * The comparator to use. Valid values are `=`, `>`, `>=`, `<`, `<=`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#comparator PowerpackV2#comparator}
  */
  readonly comparator: string;
  /**
  * The color palette to apply to the background, same values available as palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#custom_bg_color PowerpackV2#custom_bg_color}
  */
  readonly customBgColor?: string;
  /**
  * The color palette to apply to the foreground, same values available as palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#custom_fg_color PowerpackV2#custom_fg_color}
  */
  readonly customFgColor?: string;
  /**
  * Setting this to True hides values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#hide_value PowerpackV2#hide_value}
  */
  readonly hideValue?: boolean | cdktn.IResolvable;
  /**
  * Displays an image as the background.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#image_url PowerpackV2#image_url}
  */
  readonly imageUrl?: string;
  /**
  * The metric from the request to correlate with this conditional format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * The color palette to apply. Valid values are `blue`, `custom_bg`, `custom_image`, `custom_text`, `gray_on_white`, `grey`, `green`, `orange`, `red`, `red_on_white`, `white_on_gray`, `white_on_green`, `green_on_white`, `white_on_red`, `white_on_yellow`, `yellow_on_white`, `black_on_light_yellow`, `black_on_light_green`, `black_on_light_red`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#palette PowerpackV2#palette}
  */
  readonly palette: string;
  /**
  * Defines the displayed timeframe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#timeframe PowerpackV2#timeframe}
  */
  readonly timeframe?: string;
  /**
  * A value for the comparator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#value PowerpackV2#value}
  */
  readonly value: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormatsToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormats | cdktn.IResolvable): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormatsToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormats | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormatsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormats | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormats | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormatsList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormats[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormatsOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimit {
  /**
  * The number of results to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#count PowerpackV2#count}
  */
  readonly count?: number;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`. Defaults to `"desc"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimitToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimitOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimitToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimitOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimit): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimit | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimit | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonical {
  /**
  * per unit name. If you want to represent megabytes/s, you set 'unit_name' = 'megabyte' and 'per_unit_name = 'second'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#per_unit_name PowerpackV2#per_unit_name}
  */
  readonly perUnitName?: string;
  /**
  * Unit name. It should be in singular form ('megabyte' and not 'megabytes')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#unit_name PowerpackV2#unit_name}
  */
  readonly unitName?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonicalToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonicalOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonical): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    per_unit_name: cdktn.stringToTerraform(struct!.perUnitName),
    unit_name: cdktn.stringToTerraform(struct!.unitName),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonicalToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonicalOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonical): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonicalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonical | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonical | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustom {
  /**
  * Unit label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#label PowerpackV2#label}
  */
  readonly label: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustomToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustomOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustom): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    label: cdktn.stringToTerraform(struct!.label),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustomToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustomOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustom): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustomOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustom | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnit {
  /**
  * canonical block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#canonical PowerpackV2#canonical}
  */
  readonly canonical?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonical;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#custom PowerpackV2#custom}
  */
  readonly custom?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustom;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    canonical: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonicalToTerraform(struct!.canonical),
    custom: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustomToTerraform(struct!.custom),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    canonical: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonicalToHclTerraform(struct!.canonical),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonicalList",
    },
    custom: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnit | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnit | undefined) {
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
  private _canonical = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonicalOutputReference(this, "canonical");
  public get canonical() {
    return this._canonical;
  }
  public putCanonical(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCanonical) {
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
  private _custom = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitCustom) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScale {
  /**
  * The name of the unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#unit_name PowerpackV2#unit_name}
  */
  readonly unitName: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScaleToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScaleOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScale): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit_name: cdktn.stringToTerraform(struct!.unitName),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScaleToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScaleOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScale): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScaleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unitName !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitName = this._unitName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScale | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormat {
  /**
  * unit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#unit PowerpackV2#unit}
  */
  readonly unit: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnit;
  /**
  * unit_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#unit_scale PowerpackV2#unit_scale}
  */
  readonly unitScale?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScale;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    unit: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitToTerraform(struct!.unit),
    unit_scale: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScaleToTerraform(struct!.unitScale),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    unit: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitToHclTerraform(struct!.unit),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitList",
    },
    unit_scale: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScaleToHclTerraform(struct!.unitScale),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormat | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormat | undefined) {
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
  private _unit = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitOutputReference(this, "unit");
  public get unit() {
    return this._unit;
  }
  public putUnit(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnit) {
    this._unit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit.internalValue;
  }

  // unit_scale - computed: false, optional: true, required: false
  private _unitScale = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScaleOutputReference(this, "unit_scale");
  public get unitScale() {
    return this._unitScale;
  }
  public putUnitScale(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatUnitScale) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyle {
  /**
  * The color palette used to display the formula. A guide to the available color palettes can be found at https://docs.datadoghq.com/dashboards/guide/widget_colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#palette PowerpackV2#palette}
  */
  readonly palette?: string;
  /**
  * Index specifying which color to use within the palette.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#palette_index PowerpackV2#palette_index}
  */
  readonly paletteIndex?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyleToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyleOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyle): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    palette: cdktn.stringToTerraform(struct!.palette),
    palette_index: cdktn.numberToTerraform(struct!.paletteIndex),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyleToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyleOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyle): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyle | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyle | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormula {
  /**
  * An expression alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#alias PowerpackV2#alias}
  */
  readonly alias?: string;
  /**
  * A list of display modes for each table cell. Valid values are `number`, `bar`, and `trend`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cell_display_mode PowerpackV2#cell_display_mode}
  */
  readonly cellDisplayMode?: string;
  /**
  * A string expression built from queries, formulas, and functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#formula_expression PowerpackV2#formula_expression}
  */
  readonly formulaExpression: string;
  /**
  * cell_display_mode_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cell_display_mode_options PowerpackV2#cell_display_mode_options}
  */
  readonly cellDisplayModeOptions?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptions;
  /**
  * conditional_formats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#conditional_formats PowerpackV2#conditional_formats}
  */
  readonly conditionalFormats?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormats[] | cdktn.IResolvable;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimit;
  /**
  * number_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#number_format PowerpackV2#number_format}
  */
  readonly numberFormat?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormat;
  /**
  * style block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#style PowerpackV2#style}
  */
  readonly style?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyle;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormula | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    cell_display_mode: cdktn.stringToTerraform(struct!.cellDisplayMode),
    formula_expression: cdktn.stringToTerraform(struct!.formulaExpression),
    cell_display_mode_options: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptionsToTerraform(struct!.cellDisplayModeOptions),
    conditional_formats: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormatsToTerraform, true)(struct!.conditionalFormats),
    limit: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimitToTerraform(struct!.limit),
    number_format: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatToTerraform(struct!.numberFormat),
    style: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyleToTerraform(struct!.style),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormula | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptionsToHclTerraform(struct!.cellDisplayModeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptionsList",
    },
    conditional_formats: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormatsToHclTerraform, true)(struct!.conditionalFormats),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormatsList",
    },
    limit: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimitToHclTerraform(struct!.limit),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimitList",
    },
    number_format: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatToHclTerraform(struct!.numberFormat),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatList",
    },
    style: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyleToHclTerraform(struct!.style),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormula | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormula | cdktn.IResolvable | undefined) {
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
  private _cellDisplayModeOptions = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptionsOutputReference(this, "cell_display_mode_options");
  public get cellDisplayModeOptions() {
    return this._cellDisplayModeOptions;
  }
  public putCellDisplayModeOptions(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaCellDisplayModeOptions) {
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
  private _conditionalFormats = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormatsList(this, "conditional_formats", false);
  public get conditionalFormats() {
    return this._conditionalFormats;
  }
  public putConditionalFormats(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaConditionalFormats[] | cdktn.IResolvable) {
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
  private _limit = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaLimit) {
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
  private _numberFormat = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormatOutputReference(this, "number_format");
  public get numberFormat() {
    return this._numberFormat;
  }
  public putNumberFormat(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaNumberFormat) {
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
  private _style = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyleOutputReference(this, "style");
  public get style() {
    return this._style;
  }
  public putStyle(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaStyle) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormula[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestFormulaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort_query PowerpackV2#sort_query}
  */
  readonly sortQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQuery;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupByToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBySortQuery) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupByOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiCompute | cdktn.IResolvable): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiCompute | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#search_query PowerpackV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#compute_query PowerpackV2#compute_query}
  */
  readonly computeQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQuery): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQuery | undefined) {
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
  private _computeQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryComputeQuery) {
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
  private _groupBy = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestLogQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQuery {
  /**
  * A list of processes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#filter_by PowerpackV2#filter_by}
  */
  readonly filterBy?: string[];
  /**
  * The max number of items in the filter list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * Your chosen metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric: string;
  /**
  * Your chosen search term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#search_by PowerpackV2#search_by}
  */
  readonly searchBy?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestProcessQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for APM Dependency Stats queries. Valid values are `apm_dependency_stats`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * APM environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#env PowerpackV2#env}
  */
  readonly env: string;
  /**
  * Determines whether stats for upstream or downstream dependencies should be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#is_upstream PowerpackV2#is_upstream}
  */
  readonly isUpstream?: boolean | cdktn.IResolvable;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#operation_name PowerpackV2#operation_name}
  */
  readonly operationName: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#primary_tag_name PowerpackV2#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#primary_tag_value PowerpackV2#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#resource_name PowerpackV2#resource_name}
  */
  readonly resourceName: string;
  /**
  * APM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#service PowerpackV2#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `avg_duration`, `avg_root_duration`, `avg_spans_per_trace`, `error_rate`, `pct_exec_time`, `pct_of_traces`, `total_traces_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#stat PowerpackV2#stat}
  */
  readonly stat: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for APM Resource Stats queries. Valid values are `apm_resource_stats`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * APM environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#env PowerpackV2#env}
  */
  readonly env: string;
  /**
  * Array of fields to group results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Name of operation on service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#operation_name PowerpackV2#operation_name}
  */
  readonly operationName?: string;
  /**
  * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#primary_tag_name PowerpackV2#primary_tag_name}
  */
  readonly primaryTagName?: string;
  /**
  * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#primary_tag_value PowerpackV2#primary_tag_value}
  */
  readonly primaryTagValue?: string;
  /**
  * APM resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#resource_name PowerpackV2#resource_name}
  */
  readonly resourceName?: string;
  /**
  * APM service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#service PowerpackV2#service}
  */
  readonly service: string;
  /**
  * APM statistic. Valid values are `errors`, `error_rate`, `hits`, `latency_avg`, `latency_distribution`, `latency_max`, `latency_p50`, `latency_p75`, `latency_p90`, `latency_p95`, `latency_p99`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#stat PowerpackV2#stat}
  */
  readonly stat: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQuery {
  /**
  * The aggregation methods available for cloud cost queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregator PowerpackV2#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for cloud cost queries. Valid values are `cloud_cost`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Query for Cloud Cost data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryCompute {
  /**
  * The aggregation methods for event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * A time interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
  /**
  * The measurable attribute to compute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryComputeToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryCompute | cdktn.IResolvable): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryComputeToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryCompute | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryCompute | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryComputeOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySortToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySort): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySortToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySort): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySort | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBy {
  /**
  * The event facet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet: string;
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySort;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySortToTerraform(struct!.sort),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sort = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBySort) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSort {
  /**
  * The aggregation methods for the event platform queries. Valid values are `count`, `cardinality`, `median`, `pc75`, `pc90`, `pc95`, `pc98`, `pc99`, `sum`, `min`, `max`, `avg`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The metric used for sorting group by results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric?: string;
  /**
  * Direction of sort. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSortToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSort): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSortToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSort): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSort | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFields {
  /**
  * List of event facets to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#fields PowerpackV2#fields}
  */
  readonly fields: string[];
  /**
  * The number of groups to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSort;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFields): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSortToTerraform(struct!.sort),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFields): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSortToHclTerraform(struct!.sort),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFields | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFields | undefined) {
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
  private _sort = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSortOutputReference(this, "sort");
  public get sort() {
    return this._sort;
  }
  public putSort(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsSort) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearch {
  /**
  * The events search string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearchToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearchOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearch): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearchToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearchOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearch): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearchOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearch | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuery {
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for event platform-based queries. Valid values are `logs`, `spans`, `network`, `rum`, `security_signals`, `profiles`, `audit`, `events`, `ci_tests`, `ci_pipelines`, `incident_analytics`, `product_analytics`, `on_call_events`, `errors`, `llm_observability`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * An array of index names to query in the stream. Omit or use `[]` to query all indexes at once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#indexes PowerpackV2#indexes}
  */
  readonly indexes?: string[];
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Option for storage location. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#storage PowerpackV2#storage}
  */
  readonly storage?: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#compute PowerpackV2#compute}
  */
  readonly compute: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryCompute[] | cdktn.IResolvable;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBy[] | cdktn.IResolvable;
  /**
  * group_by_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by_fields PowerpackV2#group_by_fields}
  */
  readonly groupByFields?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFields;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#search PowerpackV2#search}
  */
  readonly search?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearch;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuery): any {
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
    compute: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryComputeToTerraform, true)(struct!.compute),
    group_by: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByToTerraform, true)(struct!.groupBy),
    group_by_fields: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsToTerraform(struct!.groupByFields),
    search: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearchToTerraform(struct!.search),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuery): any {
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
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryComputeToHclTerraform, true)(struct!.compute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryComputeList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByList",
    },
    group_by_fields: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsToHclTerraform(struct!.groupByFields),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsList",
    },
    search: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuery | undefined) {
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
  private _compute = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryComputeList(this, "compute", false);
  public get compute() {
    return this._compute;
  }
  public putCompute(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryCompute[] | cdktn.IResolvable) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupBy[] | cdktn.IResolvable) {
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
  private _groupByFields = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFieldsOutputReference(this, "group_by_fields");
  public get groupByFields() {
    return this._groupByFields;
  }
  public putGroupByFields(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryGroupByFields) {
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
  private _search = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuerySearch) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregator PowerpackV2#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for metrics queries. Defaults to `"metrics"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource?: string;
  /**
  * The name of the query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * The metrics query definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#query PowerpackV2#query}
  */
  readonly query: string;
  /**
  * Semantic mode for metrics queries. This determines how metrics from different sources are combined or displayed. Valid values are `combined`, `native`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#semantic_mode PowerpackV2#semantic_mode}
  */
  readonly semanticMode?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQuery {
  /**
  * The aggregation methods available for metrics queries. Valid values are `avg`, `min`, `max`, `sum`, `last`, `area`, `l2norm`, `percentile`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregator PowerpackV2#aggregator}
  */
  readonly aggregator?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for process queries. Valid values are `process`, `container`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Whether to normalize the CPU percentages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#is_normalized_cpu PowerpackV2#is_normalized_cpu}
  */
  readonly isNormalizedCpu?: boolean | cdktn.IResolvable;
  /**
  * The number of hits to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * The process metric name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric PowerpackV2#metric}
  */
  readonly metric: string;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * The direction of the sort. Valid values are `asc`, `desc`. Defaults to `"desc"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort PowerpackV2#sort}
  */
  readonly sort?: string;
  /**
  * An array of tags to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#tag_filters PowerpackV2#tag_filters}
  */
  readonly tagFilters?: string[];
  /**
  * The text to use as a filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#text_filter PowerpackV2#text_filter}
  */
  readonly textFilter?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQuery {
  /**
  * Additional filters applied to the SLO query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#additional_query_filters PowerpackV2#additional_query_filters}
  */
  readonly additionalQueryFilters?: string;
  /**
  * The source organization UUID for cross organization queries. Feature in Private Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cross_org_uuids PowerpackV2#cross_org_uuids}
  */
  readonly crossOrgUuids?: string[];
  /**
  * The data source for SLO queries. Valid values are `slo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#data_source PowerpackV2#data_source}
  */
  readonly dataSource: string;
  /**
  * Group mode to query measures. Valid values are `overall`, `components`. Defaults to `"overall"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_mode PowerpackV2#group_mode}
  */
  readonly groupMode?: string;
  /**
  * SLO measures queries. Valid values are `good_events`, `bad_events`, `good_minutes`, `bad_minutes`, `slo_status`, `error_budget_remaining`, `burn_rate`, `error_budget_burndown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#measure PowerpackV2#measure}
  */
  readonly measure: string;
  /**
  * The name of query for use in formulas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name?: string;
  /**
  * ID of an SLO to query measures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#slo_id PowerpackV2#slo_id}
  */
  readonly sloId: string;
  /**
  * type of the SLO to query. Valid values are `metric`, `monitor`, `time_slice`. Defaults to `"metric"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#slo_query_type PowerpackV2#slo_query_type}
  */
  readonly sloQueryType?: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuery {
  /**
  * apm_dependency_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#apm_dependency_stats_query PowerpackV2#apm_dependency_stats_query}
  */
  readonly apmDependencyStatsQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQuery;
  /**
  * apm_resource_stats_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#apm_resource_stats_query PowerpackV2#apm_resource_stats_query}
  */
  readonly apmResourceStatsQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQuery;
  /**
  * cloud_cost_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#cloud_cost_query PowerpackV2#cloud_cost_query}
  */
  readonly cloudCostQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQuery;
  /**
  * event_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#event_query PowerpackV2#event_query}
  */
  readonly eventQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuery;
  /**
  * metric_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#metric_query PowerpackV2#metric_query}
  */
  readonly metricQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQuery;
  /**
  * process_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#process_query PowerpackV2#process_query}
  */
  readonly processQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQuery;
  /**
  * slo_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#slo_query PowerpackV2#slo_query}
  */
  readonly sloQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQuery;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    apm_dependency_stats_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryToTerraform(struct!.apmDependencyStatsQuery),
    apm_resource_stats_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryToTerraform(struct!.apmResourceStatsQuery),
    cloud_cost_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryToTerraform(struct!.cloudCostQuery),
    event_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryToTerraform(struct!.eventQuery),
    metric_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryToTerraform(struct!.metricQuery),
    process_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryToTerraform(struct!.processQuery),
    slo_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryToTerraform(struct!.sloQuery),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuery | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    apm_dependency_stats_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryToHclTerraform(struct!.apmDependencyStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryList",
    },
    apm_resource_stats_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryToHclTerraform(struct!.apmResourceStatsQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryList",
    },
    cloud_cost_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryToHclTerraform(struct!.cloudCostQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryList",
    },
    event_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryToHclTerraform(struct!.eventQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryList",
    },
    metric_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryToHclTerraform(struct!.metricQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryList",
    },
    process_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryToHclTerraform(struct!.processQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryList",
    },
    slo_query: {
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryToHclTerraform(struct!.sloQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuery | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apmDependencyStatsQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmDependencyStatsQuery = this._apmDependencyStatsQuery?.internalValue;
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
    if (this._sloQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloQuery = this._sloQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuery | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apmDependencyStatsQuery.internalValue = undefined;
      this._apmResourceStatsQuery.internalValue = undefined;
      this._cloudCostQuery.internalValue = undefined;
      this._eventQuery.internalValue = undefined;
      this._metricQuery.internalValue = undefined;
      this._processQuery.internalValue = undefined;
      this._sloQuery.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apmDependencyStatsQuery.internalValue = value.apmDependencyStatsQuery;
      this._apmResourceStatsQuery.internalValue = value.apmResourceStatsQuery;
      this._cloudCostQuery.internalValue = value.cloudCostQuery;
      this._eventQuery.internalValue = value.eventQuery;
      this._metricQuery.internalValue = value.metricQuery;
      this._processQuery.internalValue = value.processQuery;
      this._sloQuery.internalValue = value.sloQuery;
    }
  }

  // apm_dependency_stats_query - computed: false, optional: true, required: false
  private _apmDependencyStatsQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQueryOutputReference(this, "apm_dependency_stats_query");
  public get apmDependencyStatsQuery() {
    return this._apmDependencyStatsQuery;
  }
  public putApmDependencyStatsQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmDependencyStatsQuery) {
    this._apmDependencyStatsQuery.internalValue = value;
  }
  public resetApmDependencyStatsQuery() {
    this._apmDependencyStatsQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDependencyStatsQueryInput() {
    return this._apmDependencyStatsQuery.internalValue;
  }

  // apm_resource_stats_query - computed: false, optional: true, required: false
  private _apmResourceStatsQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQueryOutputReference(this, "apm_resource_stats_query");
  public get apmResourceStatsQuery() {
    return this._apmResourceStatsQuery;
  }
  public putApmResourceStatsQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryApmResourceStatsQuery) {
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
  private _cloudCostQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQueryOutputReference(this, "cloud_cost_query");
  public get cloudCostQuery() {
    return this._cloudCostQuery;
  }
  public putCloudCostQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryCloudCostQuery) {
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
  private _eventQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQueryOutputReference(this, "event_query");
  public get eventQuery() {
    return this._eventQuery;
  }
  public putEventQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryEventQuery) {
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
  private _metricQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQueryOutputReference(this, "metric_query");
  public get metricQuery() {
    return this._metricQuery;
  }
  public putMetricQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryMetricQuery) {
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
  private _processQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQueryOutputReference(this, "process_query");
  public get processQuery() {
    return this._processQuery;
  }
  public putProcessQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryProcessQuery) {
    this._processQuery.internalValue = value;
  }
  public resetProcessQuery() {
    this._processQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processQueryInput() {
    return this._processQuery.internalValue;
  }

  // slo_query - computed: false, optional: true, required: false
  private _sloQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQueryOutputReference(this, "slo_query");
  public get sloQuery() {
    return this._sloQuery;
  }
  public putSloQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuerySloQuery) {
    this._sloQuery.internalValue = value;
  }
  public resetSloQuery() {
    this._sloQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloQueryInput() {
    return this._sloQuery.internalValue;
  }
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQuery[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort_query PowerpackV2#sort_query}
  */
  readonly sortQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQuery;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBySortQuery) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute | cdktn.IResolvable): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#search_query PowerpackV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#compute_query PowerpackV2#compute_query}
  */
  readonly computeQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQuery | undefined) {
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
  private _computeQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryComputeQuery) {
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
  private _groupBy = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestRumQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQuery {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Widget sorting methods. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQuery): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQuery): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQuery | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy {
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * The maximum number of items in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#limit PowerpackV2#limit}
  */
  readonly limit?: number;
  /**
  * sort_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#sort_query PowerpackV2#sort_query}
  */
  readonly sortQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQuery;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    facet: cdktn.stringToTerraform(struct!.facet),
    limit: cdktn.numberToTerraform(struct!.limit),
    sort_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryToTerraform(struct!.sortQuery),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy | cdktn.IResolvable): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryToHclTerraform(struct!.sortQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy | cdktn.IResolvable | undefined) {
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
  private _sortQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQueryOutputReference(this, "sort_query");
  public get sortQuery() {
    return this._sortQuery;
  }
  public putSortQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBySortQuery) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute {
  /**
  * The aggregation method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#aggregation PowerpackV2#aggregation}
  */
  readonly aggregation: string;
  /**
  * The facet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#facet PowerpackV2#facet}
  */
  readonly facet?: string;
  /**
  * Define the time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#interval PowerpackV2#interval}
  */
  readonly interval?: number;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute | cdktn.IResolvable): any {
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


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute | cdktn.IResolvable): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute | cdktn.IResolvable | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute | cdktn.IResolvable | undefined) {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeList extends cdktn.ComplexList {
  public internalValue? : PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute[] | cdktn.IResolvable

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
  public get(index: number): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeOutputReference {
    return new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery {
  /**
  * A comma separated-list of index names. Use `*` to query all indexes at once. [Multiple Indexes](https://docs.datadoghq.com/logs/indexes/#multiple-indexes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: string;
  /**
  * The search query to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#search_query PowerpackV2#search_query}
  */
  readonly searchQuery?: string;
  /**
  * compute_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#compute_query PowerpackV2#compute_query}
  */
  readonly computeQuery?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQuery;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#group_by PowerpackV2#group_by}
  */
  readonly groupBy?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy[] | cdktn.IResolvable;
  /**
  * multi_compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#multi_compute PowerpackV2#multi_compute}
  */
  readonly multiCompute?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute[] | cdktn.IResolvable;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.stringToTerraform(struct!.index),
    search_query: cdktn.stringToTerraform(struct!.searchQuery),
    compute_query: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryToTerraform(struct!.computeQuery),
    group_by: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByToTerraform, true)(struct!.groupBy),
    multi_compute: cdktn.listMapper(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeToTerraform, true)(struct!.multiCompute),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery): any {
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
      value: powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryToHclTerraform(struct!.computeQuery),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryList",
    },
    group_by: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByList",
    },
    multi_compute: {
      value: cdktn.listMapperHcl(powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeToHclTerraform, true)(struct!.multiCompute),
      isBlock: true,
      type: "list",
      storageClassType: "PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQuery | undefined) {
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
  private _computeQuery = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQueryOutputReference(this, "compute_query");
  public get computeQuery() {
    return this._computeQuery;
  }
  public putComputeQuery(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryComputeQuery) {
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
  private _groupBy = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryGroupBy[] | cdktn.IResolvable) {
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
  private _multiCompute = new PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiComputeList(this, "multi_compute", false);
  public get multiCompute() {
    return this._multiCompute;
  }
  public putMultiCompute(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSecurityQueryMultiCompute[] | cdktn.IResolvable) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort {
  /**
  * The index of the formula to sort by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#index PowerpackV2#index}
  */
  readonly index: number;
  /**
  * Widget sorting direction. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    index: cdktn.numberToTerraform(struct!.index),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByFormulaSort | undefined) {
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
export interface PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort {
  /**
  * The name of the group tag to sort by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#name PowerpackV2#name}
  */
  readonly name: string;
  /**
  * Widget sorting direction. Valid values are `asc`, `desc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/powerpack_v2#order PowerpackV2#order}
  */
  readonly order: string;
}

export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortToTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    order: cdktn.stringToTerraform(struct!.order),
  }
}


export function powerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortToHclTerraform(struct?: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortOutputReference | PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort): any {
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

export class PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSortOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort | undefined {
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

  public set internalValue(value: PowerpackV2WidgetWildcardDefinitionRequestTreemapRequestSortOrderByGroupSort | undefined) {
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
