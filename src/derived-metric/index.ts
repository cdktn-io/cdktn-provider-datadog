/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/derived_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DerivedMetricConfig extends cdktn.TerraformMetaArguments {
  /**
  * The definition of a derived metric as a formula over one or more queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/derived_metric#definition DerivedMetric#definition}
  */
  readonly definition: DerivedMetricDefinition;
  /**
  * Caller-assigned name sent as the create ID. After import, the first apply adopts the configured name through an update using the canonical API ID, without replacing the resource. Once the name is stored in state, changing it replaces the resource. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/derived_metric#name DerivedMetric#name}
  */
  readonly name: string;
}
export interface DerivedMetricDefinitionQueries {
  /**
  * The data source that the query is run against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/derived_metric#data_source DerivedMetric#data_source}
  */
  readonly dataSource: string;
  /**
  * The name used to reference this query from the formula.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/derived_metric#name DerivedMetric#name}
  */
  readonly name: string;
  /**
  * The query string executed against the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/derived_metric#query DerivedMetric#query}
  */
  readonly query: string;
}

export function derivedMetricDefinitionQueriesToTerraform(struct?: DerivedMetricDefinitionQueries | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_source: cdktn.stringToTerraform(struct!.dataSource),
    name: cdktn.stringToTerraform(struct!.name),
    query: cdktn.stringToTerraform(struct!.query),
  }
}


export function derivedMetricDefinitionQueriesToHclTerraform(struct?: DerivedMetricDefinitionQueries | cdktn.IResolvable): any {
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

export class DerivedMetricDefinitionQueriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DerivedMetricDefinitionQueries | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DerivedMetricDefinitionQueries | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSource = undefined;
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
      this._dataSource = value.dataSource;
      this._name = value.name;
      this._query = value.query;
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

export class DerivedMetricDefinitionQueriesList extends cdktn.ComplexList {
  public internalValue? : DerivedMetricDefinitionQueries[] | cdktn.IResolvable

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
  public get(index: number): DerivedMetricDefinitionQueriesOutputReference {
    return new DerivedMetricDefinitionQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DerivedMetricDefinition {
  /**
  * The formula that combines the queries into the value of the derived metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/derived_metric#formula DerivedMetric#formula}
  */
  readonly formula: string;
  /**
  * The list of queries referenced by the formula.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/derived_metric#queries DerivedMetric#queries}
  */
  readonly queries: DerivedMetricDefinitionQueries[] | cdktn.IResolvable;
}

export function derivedMetricDefinitionToTerraform(struct?: DerivedMetricDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    formula: cdktn.stringToTerraform(struct!.formula),
    queries: cdktn.listMapper(derivedMetricDefinitionQueriesToTerraform, false)(struct!.queries),
  }
}


export function derivedMetricDefinitionToHclTerraform(struct?: DerivedMetricDefinition | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    formula: {
      value: cdktn.stringToHclTerraform(struct!.formula),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queries: {
      value: cdktn.listMapperHcl(derivedMetricDefinitionQueriesToHclTerraform, false)(struct!.queries),
      isBlock: true,
      type: "list",
      storageClassType: "DerivedMetricDefinitionQueriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DerivedMetricDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DerivedMetricDefinition | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formula !== undefined) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula;
    }
    if (this._queries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DerivedMetricDefinition | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._formula = undefined;
      this._queries.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._formula = value.formula;
      this._queries.internalValue = value.queries;
    }
  }

  // formula - computed: false, optional: false, required: true
  private _formula?: string; 
  public get formula() {
    return this.getStringAttribute('formula');
  }
  public set formula(value: string) {
    this._formula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula;
  }

  // queries - computed: false, optional: false, required: true
  private _queries = new DerivedMetricDefinitionQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: DerivedMetricDefinitionQueries[] | cdktn.IResolvable) {
    this._queries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/derived_metric datadog_derived_metric}
*/
export class DerivedMetric extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_derived_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DerivedMetric resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DerivedMetric to import
  * @param importFromId The id of the existing DerivedMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/derived_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DerivedMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_derived_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/derived_metric datadog_derived_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DerivedMetricConfig
  */
  public constructor(scope: Construct, id: string, config: DerivedMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_derived_metric',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.30.0',
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
    this._definition.internalValue = config.definition;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // definition - computed: false, optional: false, required: true
  private _definition = new DerivedMetricDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DerivedMetricDefinition) {
    this._definition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      definition: derivedMetricDefinitionToTerraform(this._definition.internalValue),
      name: cdktn.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      definition: {
        value: derivedMetricDefinitionToHclTerraform(this._definition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DerivedMetricDefinition",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
