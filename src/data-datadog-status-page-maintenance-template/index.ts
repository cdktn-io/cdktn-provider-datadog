/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatadogStatusPageMaintenanceTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the maintenance template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_template#id DataDatadogStatusPageMaintenanceTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of the status page this maintenance template belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_template#page_id DataDatadogStatusPageMaintenanceTemplate#page_id}
  */
  readonly pageId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_template datadog_status_page_maintenance_template}
*/
export class DataDatadogStatusPageMaintenanceTemplate extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_status_page_maintenance_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatadogStatusPageMaintenanceTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogStatusPageMaintenanceTemplate to import
  * @param importFromId The id of the existing DataDatadogStatusPageMaintenanceTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogStatusPageMaintenanceTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_status_page_maintenance_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_template datadog_status_page_maintenance_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogStatusPageMaintenanceTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogStatusPageMaintenanceTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_status_page_maintenance_template',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.20.0',
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
    this._pageId = config.pageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // completed_description - computed: true, optional: false, required: false
  public get completedDescription() {
    return this.getStringAttribute('completed_description');
  }

  // component_ids - computed: true, optional: false, required: false
  public get componentIds() {
    return this.getListAttribute('component_ids');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // in_progress_description - computed: true, optional: false, required: false
  public get inProgressDescription() {
    return this.getStringAttribute('in_progress_description');
  }

  // maintenance_title - computed: true, optional: false, required: false
  public get maintenanceTitle() {
    return this.getStringAttribute('maintenance_title');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // page_id - computed: false, optional: false, required: true
  private _pageId?: string; 
  public get pageId() {
    return this.getStringAttribute('page_id');
  }
  public set pageId(value: string) {
    this._pageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageIdInput() {
    return this._pageId;
  }

  // scheduled_description - computed: true, optional: false, required: false
  public get scheduledDescription() {
    return this.getStringAttribute('scheduled_description');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      page_id: cdktn.stringToTerraform(this._pageId),
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
      page_id: {
        value: cdktn.stringToHclTerraform(this._pageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
