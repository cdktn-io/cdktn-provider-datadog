/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StatusPageMaintenanceTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * The pre-filled description shown once the maintenance is completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#completed_description StatusPageMaintenanceTemplate#completed_description}
  */
  readonly completedDescription?: string;
  /**
  * The IDs of the components affected by a maintenance created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#component_ids StatusPageMaintenanceTemplate#component_ids}
  */
  readonly componentIds?: string[];
  /**
  * The pre-filled description shown while the maintenance is in progress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#in_progress_description StatusPageMaintenanceTemplate#in_progress_description}
  */
  readonly inProgressDescription?: string;
  /**
  * The title used for a maintenance created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#maintenance_title StatusPageMaintenanceTemplate#maintenance_title}
  */
  readonly maintenanceTitle?: string;
  /**
  * The name of the maintenance template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#name StatusPageMaintenanceTemplate#name}
  */
  readonly name: string;
  /**
  * The ID of the status page this maintenance template belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#page_id StatusPageMaintenanceTemplate#page_id}
  */
  readonly pageId: string;
  /**
  * The pre-filled description shown while the maintenance is scheduled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#scheduled_description StatusPageMaintenanceTemplate#scheduled_description}
  */
  readonly scheduledDescription?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template datadog_status_page_maintenance_template}
*/
export class StatusPageMaintenanceTemplate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_status_page_maintenance_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StatusPageMaintenanceTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatusPageMaintenanceTemplate to import
  * @param importFromId The id of the existing StatusPageMaintenanceTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatusPageMaintenanceTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_status_page_maintenance_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_maintenance_template datadog_status_page_maintenance_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatusPageMaintenanceTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: StatusPageMaintenanceTemplateConfig) {
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
    this._completedDescription = config.completedDescription;
    this._componentIds = config.componentIds;
    this._inProgressDescription = config.inProgressDescription;
    this._maintenanceTitle = config.maintenanceTitle;
    this._name = config.name;
    this._pageId = config.pageId;
    this._scheduledDescription = config.scheduledDescription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // completed_description - computed: false, optional: true, required: false
  private _completedDescription?: string; 
  public get completedDescription() {
    return this.getStringAttribute('completed_description');
  }
  public set completedDescription(value: string) {
    this._completedDescription = value;
  }
  public resetCompletedDescription() {
    this._completedDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completedDescriptionInput() {
    return this._completedDescription;
  }

  // component_ids - computed: false, optional: true, required: false
  private _componentIds?: string[]; 
  public get componentIds() {
    return this.getListAttribute('component_ids');
  }
  public set componentIds(value: string[]) {
    this._componentIds = value;
  }
  public resetComponentIds() {
    this._componentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentIdsInput() {
    return this._componentIds;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_progress_description - computed: false, optional: true, required: false
  private _inProgressDescription?: string; 
  public get inProgressDescription() {
    return this.getStringAttribute('in_progress_description');
  }
  public set inProgressDescription(value: string) {
    this._inProgressDescription = value;
  }
  public resetInProgressDescription() {
    this._inProgressDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inProgressDescriptionInput() {
    return this._inProgressDescription;
  }

  // maintenance_title - computed: false, optional: true, required: false
  private _maintenanceTitle?: string; 
  public get maintenanceTitle() {
    return this.getStringAttribute('maintenance_title');
  }
  public set maintenanceTitle(value: string) {
    this._maintenanceTitle = value;
  }
  public resetMaintenanceTitle() {
    this._maintenanceTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTitleInput() {
    return this._maintenanceTitle;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
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

  // scheduled_description - computed: false, optional: true, required: false
  private _scheduledDescription?: string; 
  public get scheduledDescription() {
    return this.getStringAttribute('scheduled_description');
  }
  public set scheduledDescription(value: string) {
    this._scheduledDescription = value;
  }
  public resetScheduledDescription() {
    this._scheduledDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledDescriptionInput() {
    return this._scheduledDescription;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      completed_description: cdktn.stringToTerraform(this._completedDescription),
      component_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._componentIds),
      in_progress_description: cdktn.stringToTerraform(this._inProgressDescription),
      maintenance_title: cdktn.stringToTerraform(this._maintenanceTitle),
      name: cdktn.stringToTerraform(this._name),
      page_id: cdktn.stringToTerraform(this._pageId),
      scheduled_description: cdktn.stringToTerraform(this._scheduledDescription),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      completed_description: {
        value: cdktn.stringToHclTerraform(this._completedDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._componentIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      in_progress_description: {
        value: cdktn.stringToHclTerraform(this._inProgressDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_title: {
        value: cdktn.stringToHclTerraform(this._maintenanceTitle),
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
      page_id: {
        value: cdktn.stringToHclTerraform(this._pageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_description: {
        value: cdktn.stringToHclTerraform(this._scheduledDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
