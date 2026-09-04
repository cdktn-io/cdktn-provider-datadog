/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IncidentTypeConfig extends cdktn.TerraformMetaArguments {
  /**
  * The incident type's behavior settings. Any field left unset takes its server-side default. This block is applied in a separate call after the incident type is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type#configuration IncidentType#configuration}
  */
  readonly configuration?: IncidentTypeConfiguration;
  /**
  * Description of the incident type. The description can have a maximum of 512 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type#description IncidentType#description}
  */
  readonly description?: string;
  /**
  * Whether this incident type is the default type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type#is_default IncidentType#is_default}
  */
  readonly isDefault?: boolean | cdktn.IResolvable;
  /**
  * Name of the incident type. Must be between 1 and 50 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type#name IncidentType#name}
  */
  readonly name: string;
}
export interface IncidentTypeConfiguration {
  /**
  * Whether incidents of this type can be deleted. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type#allow_incident_deletion IncidentType#allow_incident_deletion}
  */
  readonly allowIncidentDeletion?: boolean | cdktn.IResolvable;
  /**
  * Whether users can manually run a workflow from an incident of this type. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type#allow_workflows IncidentType#allow_workflows}
  */
  readonly allowWorkflows?: boolean | cdktn.IResolvable;
  /**
  * An optional message shown to users when they declare an incident of this type. Defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type#create_message IncidentType#create_message}
  */
  readonly createMessage?: string;
  /**
  * Whether responders can edit incident timestamps for incidents of this type. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type#editable_timestamps IncidentType#editable_timestamps}
  */
  readonly editableTimestamps?: boolean | cdktn.IResolvable;
  /**
  * Whether responders can create private incidents of this type. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type#private_incidents IncidentType#private_incidents}
  */
  readonly privateIncidents?: boolean | cdktn.IResolvable;
  /**
  * Whether the private toggle is enabled by default in the incident creation modal for this type. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type#private_incidents_by_default IncidentType#private_incidents_by_default}
  */
  readonly privateIncidentsByDefault?: boolean | cdktn.IResolvable;
  /**
  * The source used to derive the incident slug. When set to `servicenow`, incidents display the ServiceNow record ID instead of the public ID. If no ServiceNow integration exists, the public ID is displayed. Defaults to `default`. Valid values are `default`, `servicenow`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type#slug_source IncidentType#slug_source}
  */
  readonly slugSource?: string;
  /**
  * Whether test incidents of this type can be created. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type#test_incidents IncidentType#test_incidents}
  */
  readonly testIncidents?: boolean | cdktn.IResolvable;
}

export function incidentTypeConfigurationToTerraform(struct?: IncidentTypeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allow_incident_deletion: cdktn.booleanToTerraform(struct!.allowIncidentDeletion),
    allow_workflows: cdktn.booleanToTerraform(struct!.allowWorkflows),
    create_message: cdktn.stringToTerraform(struct!.createMessage),
    editable_timestamps: cdktn.booleanToTerraform(struct!.editableTimestamps),
    private_incidents: cdktn.booleanToTerraform(struct!.privateIncidents),
    private_incidents_by_default: cdktn.booleanToTerraform(struct!.privateIncidentsByDefault),
    slug_source: cdktn.stringToTerraform(struct!.slugSource),
    test_incidents: cdktn.booleanToTerraform(struct!.testIncidents),
  }
}


export function incidentTypeConfigurationToHclTerraform(struct?: IncidentTypeConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allow_incident_deletion: {
      value: cdktn.booleanToHclTerraform(struct!.allowIncidentDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_workflows: {
      value: cdktn.booleanToHclTerraform(struct!.allowWorkflows),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_message: {
      value: cdktn.stringToHclTerraform(struct!.createMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    editable_timestamps: {
      value: cdktn.booleanToHclTerraform(struct!.editableTimestamps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_incidents: {
      value: cdktn.booleanToHclTerraform(struct!.privateIncidents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_incidents_by_default: {
      value: cdktn.booleanToHclTerraform(struct!.privateIncidentsByDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    slug_source: {
      value: cdktn.stringToHclTerraform(struct!.slugSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_incidents: {
      value: cdktn.booleanToHclTerraform(struct!.testIncidents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IncidentTypeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IncidentTypeConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowIncidentDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIncidentDeletion = this._allowIncidentDeletion;
    }
    if (this._allowWorkflows !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowWorkflows = this._allowWorkflows;
    }
    if (this._createMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.createMessage = this._createMessage;
    }
    if (this._editableTimestamps !== undefined) {
      hasAnyValues = true;
      internalValueResult.editableTimestamps = this._editableTimestamps;
    }
    if (this._privateIncidents !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIncidents = this._privateIncidents;
    }
    if (this._privateIncidentsByDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIncidentsByDefault = this._privateIncidentsByDefault;
    }
    if (this._slugSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.slugSource = this._slugSource;
    }
    if (this._testIncidents !== undefined) {
      hasAnyValues = true;
      internalValueResult.testIncidents = this._testIncidents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IncidentTypeConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowIncidentDeletion = undefined;
      this._allowWorkflows = undefined;
      this._createMessage = undefined;
      this._editableTimestamps = undefined;
      this._privateIncidents = undefined;
      this._privateIncidentsByDefault = undefined;
      this._slugSource = undefined;
      this._testIncidents = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowIncidentDeletion = value.allowIncidentDeletion;
      this._allowWorkflows = value.allowWorkflows;
      this._createMessage = value.createMessage;
      this._editableTimestamps = value.editableTimestamps;
      this._privateIncidents = value.privateIncidents;
      this._privateIncidentsByDefault = value.privateIncidentsByDefault;
      this._slugSource = value.slugSource;
      this._testIncidents = value.testIncidents;
    }
  }

  // allow_incident_deletion - computed: true, optional: true, required: false
  private _allowIncidentDeletion?: boolean | cdktn.IResolvable; 
  public get allowIncidentDeletion() {
    return this.getBooleanAttribute('allow_incident_deletion');
  }
  public set allowIncidentDeletion(value: boolean | cdktn.IResolvable) {
    this._allowIncidentDeletion = value;
  }
  public resetAllowIncidentDeletion() {
    this._allowIncidentDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIncidentDeletionInput() {
    return this._allowIncidentDeletion;
  }

  // allow_workflows - computed: true, optional: true, required: false
  private _allowWorkflows?: boolean | cdktn.IResolvable; 
  public get allowWorkflows() {
    return this.getBooleanAttribute('allow_workflows');
  }
  public set allowWorkflows(value: boolean | cdktn.IResolvable) {
    this._allowWorkflows = value;
  }
  public resetAllowWorkflows() {
    this._allowWorkflows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWorkflowsInput() {
    return this._allowWorkflows;
  }

  // create_message - computed: true, optional: true, required: false
  private _createMessage?: string; 
  public get createMessage() {
    return this.getStringAttribute('create_message');
  }
  public set createMessage(value: string) {
    this._createMessage = value;
  }
  public resetCreateMessage() {
    this._createMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMessageInput() {
    return this._createMessage;
  }

  // editable_timestamps - computed: true, optional: true, required: false
  private _editableTimestamps?: boolean | cdktn.IResolvable; 
  public get editableTimestamps() {
    return this.getBooleanAttribute('editable_timestamps');
  }
  public set editableTimestamps(value: boolean | cdktn.IResolvable) {
    this._editableTimestamps = value;
  }
  public resetEditableTimestamps() {
    this._editableTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editableTimestampsInput() {
    return this._editableTimestamps;
  }

  // private_incidents - computed: true, optional: true, required: false
  private _privateIncidents?: boolean | cdktn.IResolvable; 
  public get privateIncidents() {
    return this.getBooleanAttribute('private_incidents');
  }
  public set privateIncidents(value: boolean | cdktn.IResolvable) {
    this._privateIncidents = value;
  }
  public resetPrivateIncidents() {
    this._privateIncidents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIncidentsInput() {
    return this._privateIncidents;
  }

  // private_incidents_by_default - computed: true, optional: true, required: false
  private _privateIncidentsByDefault?: boolean | cdktn.IResolvable; 
  public get privateIncidentsByDefault() {
    return this.getBooleanAttribute('private_incidents_by_default');
  }
  public set privateIncidentsByDefault(value: boolean | cdktn.IResolvable) {
    this._privateIncidentsByDefault = value;
  }
  public resetPrivateIncidentsByDefault() {
    this._privateIncidentsByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIncidentsByDefaultInput() {
    return this._privateIncidentsByDefault;
  }

  // slug_source - computed: true, optional: true, required: false
  private _slugSource?: string; 
  public get slugSource() {
    return this.getStringAttribute('slug_source');
  }
  public set slugSource(value: string) {
    this._slugSource = value;
  }
  public resetSlugSource() {
    this._slugSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugSourceInput() {
    return this._slugSource;
  }

  // test_incidents - computed: true, optional: true, required: false
  private _testIncidents?: boolean | cdktn.IResolvable; 
  public get testIncidents() {
    return this.getBooleanAttribute('test_incidents');
  }
  public set testIncidents(value: boolean | cdktn.IResolvable) {
    this._testIncidents = value;
  }
  public resetTestIncidents() {
    this._testIncidents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testIncidentsInput() {
    return this._testIncidents;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type datadog_incident_type}
*/
export class IncidentType extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_incident_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IncidentType resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncidentType to import
  * @param importFromId The id of the existing IncidentType that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncidentType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_incident_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_type datadog_incident_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncidentTypeConfig
  */
  public constructor(scope: Construct, id: string, config: IncidentTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_incident_type',
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
    this._configuration.internalValue = config.configuration;
    this._description = config.description;
    this._isDefault = config.isDefault;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: true, optional: true, required: false
  private _configuration = new IncidentTypeConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: IncidentTypeConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktn.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktn.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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
      configuration: incidentTypeConfigurationToTerraform(this._configuration.internalValue),
      description: cdktn.stringToTerraform(this._description),
      is_default: cdktn.booleanToTerraform(this._isDefault),
      name: cdktn.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: incidentTypeConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IncidentTypeConfiguration",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default: {
        value: cdktn.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
