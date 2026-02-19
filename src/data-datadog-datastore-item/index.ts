/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/data-sources/datastore_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatadogDatastoreItemConfig extends cdktn.TerraformMetaArguments {
  /**
  * The unique identifier of the datastore containing the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/data-sources/datastore_item#datastore_id DataDatadogDatastoreItem#datastore_id}
  */
  readonly datastoreId: string;
  /**
  * The primary key value that identifies the item to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/data-sources/datastore_item#item_key DataDatadogDatastoreItem#item_key}
  */
  readonly itemKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/data-sources/datastore_item datadog_datastore_item}
*/
export class DataDatadogDatastoreItem extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_datastore_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatadogDatastoreItem resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogDatastoreItem to import
  * @param importFromId The id of the existing DataDatadogDatastoreItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/data-sources/datastore_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogDatastoreItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_datastore_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/data-sources/datastore_item datadog_datastore_item} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogDatastoreItemConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogDatastoreItemConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_datastore_item',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.89.0',
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
    this._datastoreId = config.datastoreId;
    this._itemKey = config.itemKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // datastore_id - computed: false, optional: false, required: true
  private _datastoreId?: string; 
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }
  public set datastoreId(value: string) {
    this._datastoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdInput() {
    return this._datastoreId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // item_key - computed: false, optional: false, required: true
  private _itemKey?: string; 
  public get itemKey() {
    return this.getStringAttribute('item_key');
  }
  public set itemKey(value: string) {
    this._itemKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemKeyInput() {
    return this._itemKey;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // store_id - computed: true, optional: false, required: false
  public get storeId() {
    return this.getStringAttribute('store_id');
  }

  // value - computed: true, optional: false, required: false
  private _value = new cdktn.StringMap(this, "value");
  public get value() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datastore_id: cdktn.stringToTerraform(this._datastoreId),
      item_key: cdktn.stringToTerraform(this._itemKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datastore_id: {
        value: cdktn.stringToHclTerraform(this._datastoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      item_key: {
        value: cdktn.stringToHclTerraform(this._itemKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
