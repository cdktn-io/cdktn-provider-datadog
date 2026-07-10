/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LogsMetricConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric#id LogsMetric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the log-based metric. This field can't be updated after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric#name LogsMetric#name}
  */
  readonly name: string;
  /**
  * compute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric#compute LogsMetric#compute}
  */
  readonly compute: LogsMetricCompute;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric#filter LogsMetric#filter}
  */
  readonly filter: LogsMetricFilter;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric#group_by LogsMetric#group_by}
  */
  readonly groupBy?: LogsMetricGroupBy[] | cdktn.IResolvable;
}
export interface LogsMetricCompute {
  /**
  * The type of aggregation to use. This field can't be updated after creation. Valid values are `count`, `distribution`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric#aggregation_type LogsMetric#aggregation_type}
  */
  readonly aggregationType: string;
  /**
  * Toggle to include/exclude percentiles for a distribution metric. Defaults to false. Can only be applied to metrics that have an `aggregation_type` of distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric#include_percentiles LogsMetric#include_percentiles}
  */
  readonly includePercentiles?: boolean | cdktn.IResolvable;
  /**
  * The path to the value the log-based metric will aggregate on (only used if the aggregation type is a "distribution"). This field can't be updated after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric#path LogsMetric#path}
  */
  readonly path?: string;
}

export function logsMetricComputeToTerraform(struct?: LogsMetricComputeOutputReference | LogsMetricCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aggregation_type: cdktn.stringToTerraform(struct!.aggregationType),
    include_percentiles: cdktn.booleanToTerraform(struct!.includePercentiles),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function logsMetricComputeToHclTerraform(struct?: LogsMetricComputeOutputReference | LogsMetricCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aggregation_type: {
      value: cdktn.stringToHclTerraform(struct!.aggregationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_percentiles: {
      value: cdktn.booleanToHclTerraform(struct!.includePercentiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsMetricComputeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsMetricCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationType = this._aggregationType;
    }
    if (this._includePercentiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePercentiles = this._includePercentiles;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsMetricCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationType = undefined;
      this._includePercentiles = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationType = value.aggregationType;
      this._includePercentiles = value.includePercentiles;
      this._path = value.path;
    }
  }

  // aggregation_type - computed: false, optional: false, required: true
  private _aggregationType?: string; 
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
  public set aggregationType(value: string) {
    this._aggregationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType;
  }

  // include_percentiles - computed: false, optional: true, required: false
  private _includePercentiles?: boolean | cdktn.IResolvable; 
  public get includePercentiles() {
    return this.getBooleanAttribute('include_percentiles');
  }
  public set includePercentiles(value: boolean | cdktn.IResolvable) {
    this._includePercentiles = value;
  }
  public resetIncludePercentiles() {
    this._includePercentiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePercentilesInput() {
    return this._includePercentiles;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface LogsMetricFilter {
  /**
  * The search query - following the log search syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric#query LogsMetric#query}
  */
  readonly query: string;
}

export function logsMetricFilterToTerraform(struct?: LogsMetricFilterOutputReference | LogsMetricFilter): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function logsMetricFilterToHclTerraform(struct?: LogsMetricFilterOutputReference | LogsMetricFilter): any {
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

export class LogsMetricFilterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogsMetricFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsMetricFilter | undefined) {
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
export interface LogsMetricGroupBy {
  /**
  * The path to the value the log-based metric will be aggregated over.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric#path LogsMetric#path}
  */
  readonly path: string;
  /**
  * Name of the tag that gets created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric#tag_name LogsMetric#tag_name}
  */
  readonly tagName: string;
}

export function logsMetricGroupByToTerraform(struct?: LogsMetricGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    tag_name: cdktn.stringToTerraform(struct!.tagName),
  }
}


export function logsMetricGroupByToHclTerraform(struct?: LogsMetricGroupBy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_name: {
      value: cdktn.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogsMetricGroupByOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): LogsMetricGroupBy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogsMetricGroupBy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._tagName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._tagName = value.tagName;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // tag_name - computed: false, optional: false, required: true
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}

export class LogsMetricGroupByList extends cdktn.ComplexList {
  public internalValue? : LogsMetricGroupBy[] | cdktn.IResolvable

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
  public get(index: number): LogsMetricGroupByOutputReference {
    return new LogsMetricGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric datadog_logs_metric}
*/
export class LogsMetric extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_logs_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LogsMetric resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogsMetric to import
  * @param importFromId The id of the existing LogsMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogsMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_logs_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/logs_metric datadog_logs_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogsMetricConfig
  */
  public constructor(scope: Construct, id: string, config: LogsMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_logs_metric',
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
    this._name = config.name;
    this._compute.internalValue = config.compute;
    this._filter.internalValue = config.filter;
    this._groupBy.internalValue = config.groupBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _compute = new LogsMetricComputeOutputReference(this, "compute");
  public get compute() {
    return this._compute;
  }
  public putCompute(value: LogsMetricCompute) {
    this._compute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute.internalValue;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new LogsMetricFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: LogsMetricFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new LogsMetricGroupByList(this, "group_by", true);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: LogsMetricGroupBy[] | cdktn.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      compute: logsMetricComputeToTerraform(this._compute.internalValue),
      filter: logsMetricFilterToTerraform(this._filter.internalValue),
      group_by: cdktn.listMapper(logsMetricGroupByToTerraform, true)(this._groupBy.internalValue),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute: {
        value: logsMetricComputeToHclTerraform(this._compute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogsMetricComputeList",
      },
      filter: {
        value: logsMetricFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogsMetricFilterList",
      },
      group_by: {
        value: cdktn.listMapperHcl(logsMetricGroupByToHclTerraform, true)(this._groupBy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogsMetricGroupByList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
