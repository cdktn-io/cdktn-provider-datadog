/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatasetConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dataset#name Dataset#name}
  */
  readonly name: string;
  /**
  * An array of principals. A principal is a subject or group of subjects. Each principal is formatted as `type:id`. Supported types: `role` and `team`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dataset#principals Dataset#principals}
  */
  readonly principals: string[];
  /**
  * product_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dataset#product_filters Dataset#product_filters}
  */
  readonly productFilters?: DatasetProductFilters[] | cdktn.IResolvable;
}
export interface DatasetProductFilters {
  /**
  * A list of tag-based filters used to restrict access to the product type. Each filter is formatted as `@tag.key:value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dataset#filters Dataset#filters}
  */
  readonly filters: string[];
  /**
  * The product type of the dataset. Supported types: `apm`, `rum`, `synthetics`, `metrics` (Custom Metrics), `logs`, `sd_repoinfo`, `error_tracking`, `cloud_cost`, and `ml_obs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dataset#product Dataset#product}
  */
  readonly product: string;
}

export function datasetProductFiltersToTerraform(struct?: DatasetProductFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.filters),
    product: cdktn.stringToTerraform(struct!.product),
  }
}


export function datasetProductFiltersToHclTerraform(struct?: DatasetProductFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    product: {
      value: cdktn.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasetProductFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DatasetProductFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasetProductFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters = undefined;
      this._product = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters = value.filters;
      this._product = value.product;
    }
  }

  // filters - computed: false, optional: false, required: true
  private _filters?: string[]; 
  public get filters() {
    return cdktn.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }
}

export class DatasetProductFiltersList extends cdktn.ComplexList {
  public internalValue? : DatasetProductFilters[] | cdktn.IResolvable

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
  public get(index: number): DatasetProductFiltersOutputReference {
    return new DatasetProductFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dataset datadog_dataset}
*/
export class Dataset extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Dataset resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dataset to import
  * @param importFromId The id of the existing Dataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dataset datadog_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_dataset',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.13.0',
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
    this._name = config.name;
    this._principals = config.principals;
    this._productFilters.internalValue = config.productFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // principals - computed: false, optional: false, required: true
  private _principals?: string[]; 
  public get principals() {
    return cdktn.Fn.tolist(this.getListAttribute('principals'));
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }

  // product_filters - computed: false, optional: true, required: false
  private _productFilters = new DatasetProductFiltersList(this, "product_filters", true);
  public get productFilters() {
    return this._productFilters;
  }
  public putProductFilters(value: DatasetProductFilters[] | cdktn.IResolvable) {
    this._productFilters.internalValue = value;
  }
  public resetProductFilters() {
    this._productFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productFiltersInput() {
    return this._productFilters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      principals: cdktn.listMapper(cdktn.stringToTerraform, false)(this._principals),
      product_filters: cdktn.listMapper(datasetProductFiltersToTerraform, true)(this._productFilters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principals: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._principals),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      product_filters: {
        value: cdktn.listMapperHcl(datasetProductFiltersToHclTerraform, true)(this._productFilters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatasetProductFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
