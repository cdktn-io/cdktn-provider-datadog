/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/incident_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatadogIncidentTypeConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the incident type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/incident_type#id DataDatadogIncidentType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataDatadogIncidentTypeConfiguration {
}

export function dataDatadogIncidentTypeConfigurationToTerraform(struct?: DataDatadogIncidentTypeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogIncidentTypeConfigurationToHclTerraform(struct?: DataDatadogIncidentTypeConfiguration): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogIncidentTypeConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatadogIncidentTypeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogIncidentTypeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_incident_deletion - computed: true, optional: false, required: false
  public get allowIncidentDeletion() {
    return this.getBooleanAttribute('allow_incident_deletion');
  }

  // allow_workflows - computed: true, optional: false, required: false
  public get allowWorkflows() {
    return this.getBooleanAttribute('allow_workflows');
  }

  // create_message - computed: true, optional: false, required: false
  public get createMessage() {
    return this.getStringAttribute('create_message');
  }

  // editable_timestamps - computed: true, optional: false, required: false
  public get editableTimestamps() {
    return this.getBooleanAttribute('editable_timestamps');
  }

  // private_incidents - computed: true, optional: false, required: false
  public get privateIncidents() {
    return this.getBooleanAttribute('private_incidents');
  }

  // private_incidents_by_default - computed: true, optional: false, required: false
  public get privateIncidentsByDefault() {
    return this.getBooleanAttribute('private_incidents_by_default');
  }

  // slug_source - computed: true, optional: false, required: false
  public get slugSource() {
    return this.getStringAttribute('slug_source');
  }

  // test_incidents - computed: true, optional: false, required: false
  public get testIncidents() {
    return this.getBooleanAttribute('test_incidents');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/incident_type datadog_incident_type}
*/
export class DataDatadogIncidentType extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_incident_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatadogIncidentType resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogIncidentType to import
  * @param importFromId The id of the existing DataDatadogIncidentType that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/incident_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogIncidentType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_incident_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/incident_type datadog_incident_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogIncidentTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogIncidentTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_incident_type',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.17.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataDatadogIncidentTypeConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
