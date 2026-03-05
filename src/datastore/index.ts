/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/datastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DatastoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * A human-readable description about the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/datastore#description Datastore#description}
  */
  readonly description?: string;
  /**
  * The display name for the new datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/datastore#name Datastore#name}
  */
  readonly name: string;
  /**
  * The organization access level for the datastore. For example, 'contributor'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/datastore#org_access Datastore#org_access}
  */
  readonly orgAccess?: string;
  /**
  * The name of the primary key column for this datastore. Primary column names:   - Must abide by both [PostgreSQL naming conventions](https://www.postgresql.org/docs/7.0/syntax525.htm)   - Cannot exceed 63 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/datastore#primary_column_name Datastore#primary_column_name}
  */
  readonly primaryColumnName: string;
  /**
  * Can be set to `uuid` to automatically generate primary keys when new items are added. Default value is `none`, which requires you to supply a primary key for each new item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/datastore#primary_key_generation_strategy Datastore#primary_key_generation_strategy}
  */
  readonly primaryKeyGenerationStrategy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/datastore datadog_datastore}
*/
export class Datastore extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_datastore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Datastore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Datastore to import
  * @param importFromId The id of the existing Datastore that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/datastore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Datastore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_datastore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/datastore datadog_datastore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatastoreConfig
  */
  public constructor(scope: Construct, id: string, config: DatastoreConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_datastore',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.91.0',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._orgAccess = config.orgAccess;
    this._primaryColumnName = config.primaryColumnName;
    this._primaryKeyGenerationStrategy = config.primaryKeyGenerationStrategy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // creator_user_id - computed: true, optional: false, required: false
  public get creatorUserId() {
    return this.getNumberAttribute('creator_user_id');
  }

  // creator_user_uuid - computed: true, optional: false, required: false
  public get creatorUserUuid() {
    return this.getStringAttribute('creator_user_uuid');
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

  // org_access - computed: false, optional: true, required: false
  private _orgAccess?: string; 
  public get orgAccess() {
    return this.getStringAttribute('org_access');
  }
  public set orgAccess(value: string) {
    this._orgAccess = value;
  }
  public resetOrgAccess() {
    this._orgAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgAccessInput() {
    return this._orgAccess;
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }

  // primary_column_name - computed: false, optional: false, required: true
  private _primaryColumnName?: string; 
  public get primaryColumnName() {
    return this.getStringAttribute('primary_column_name');
  }
  public set primaryColumnName(value: string) {
    this._primaryColumnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColumnNameInput() {
    return this._primaryColumnName;
  }

  // primary_key_generation_strategy - computed: false, optional: true, required: false
  private _primaryKeyGenerationStrategy?: string; 
  public get primaryKeyGenerationStrategy() {
    return this.getStringAttribute('primary_key_generation_strategy');
  }
  public set primaryKeyGenerationStrategy(value: string) {
    this._primaryKeyGenerationStrategy = value;
  }
  public resetPrimaryKeyGenerationStrategy() {
    this._primaryKeyGenerationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyGenerationStrategyInput() {
    return this._primaryKeyGenerationStrategy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      org_access: cdktn.stringToTerraform(this._orgAccess),
      primary_column_name: cdktn.stringToTerraform(this._primaryColumnName),
      primary_key_generation_strategy: cdktn.stringToTerraform(this._primaryKeyGenerationStrategy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      org_access: {
        value: cdktn.stringToHclTerraform(this._orgAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_column_name: {
        value: cdktn.stringToHclTerraform(this._primaryColumnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key_generation_strategy: {
        value: cdktn.stringToHclTerraform(this._primaryKeyGenerationStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
