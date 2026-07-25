/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/apm_retention_filters_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatadogApmRetentionFiltersOrderConfig extends cdktn.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/apm_retention_filters_order datadog_apm_retention_filters_order}
*/
export class DataDatadogApmRetentionFiltersOrder extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_apm_retention_filters_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatadogApmRetentionFiltersOrder resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogApmRetentionFiltersOrder to import
  * @param importFromId The id of the existing DataDatadogApmRetentionFiltersOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/apm_retention_filters_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogApmRetentionFiltersOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_apm_retention_filters_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/apm_retention_filters_order datadog_apm_retention_filters_order} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogApmRetentionFiltersOrderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogApmRetentionFiltersOrderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_apm_retention_filters_order',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.16.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_ids - computed: true, optional: false, required: false
  public get filterIds() {
    return this.getListAttribute('filter_ids');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
