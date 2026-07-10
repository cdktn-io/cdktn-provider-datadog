/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/aws_cur_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatadogAwsCurConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Datadog cloud account ID for the AWS CUR configuration you want to retrieve information about.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/aws_cur_config#cloud_account_id DataDatadogAwsCurConfig#cloud_account_id}
  */
  readonly cloudAccountId: number;
}
export interface DataDatadogAwsCurConfigAccountFilters {
}

export function dataDatadogAwsCurConfigAccountFiltersToTerraform(struct?: DataDatadogAwsCurConfigAccountFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogAwsCurConfigAccountFiltersToHclTerraform(struct?: DataDatadogAwsCurConfigAccountFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogAwsCurConfigAccountFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatadogAwsCurConfigAccountFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogAwsCurConfigAccountFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // excluded_accounts - computed: true, optional: false, required: false
  public get excludedAccounts() {
    return this.getListAttribute('excluded_accounts');
  }

  // include_new_accounts - computed: true, optional: false, required: false
  public get includeNewAccounts() {
    return this.getBooleanAttribute('include_new_accounts');
  }

  // included_accounts - computed: true, optional: false, required: false
  public get includedAccounts() {
    return this.getListAttribute('included_accounts');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/aws_cur_config datadog_aws_cur_config}
*/
export class DataDatadogAwsCurConfig extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_aws_cur_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatadogAwsCurConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogAwsCurConfig to import
  * @param importFromId The id of the existing DataDatadogAwsCurConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/aws_cur_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogAwsCurConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_aws_cur_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/aws_cur_config datadog_aws_cur_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogAwsCurConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogAwsCurConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_aws_cur_config',
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
    this._cloudAccountId = config.cloudAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_region - computed: true, optional: false, required: false
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }

  // cloud_account_id - computed: false, optional: false, required: true
  private _cloudAccountId?: number; 
  public get cloudAccountId() {
    return this.getNumberAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: number) {
    this._cloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdInput() {
    return this._cloudAccountId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // error_messages - computed: true, optional: false, required: false
  public get errorMessages() {
    return this.getListAttribute('error_messages');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // report_name - computed: true, optional: false, required: false
  public get reportName() {
    return this.getStringAttribute('report_name');
  }

  // report_prefix - computed: true, optional: false, required: false
  public get reportPrefix() {
    return this.getStringAttribute('report_prefix');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_updated_at - computed: true, optional: false, required: false
  public get statusUpdatedAt() {
    return this.getStringAttribute('status_updated_at');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // account_filters - computed: false, optional: false, required: false
  private _accountFilters = new DataDatadogAwsCurConfigAccountFiltersOutputReference(this, "account_filters");
  public get accountFilters() {
    return this._accountFilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_account_id: cdktn.numberToTerraform(this._cloudAccountId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_account_id: {
        value: cdktn.numberToHclTerraform(this._cloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
