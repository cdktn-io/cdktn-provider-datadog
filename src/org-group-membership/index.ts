/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/org_group_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OrgGroupMembershipConfig extends cdktn.TerraformMetaArguments {
  /**
  * The UUID of the org group to assign the organization to. Must be a valid UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/org_group_membership#org_group_id OrgGroupMembership#org_group_id}
  */
  readonly orgGroupId: string;
  /**
  * The UUID of the organization. Must be a valid UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/org_group_membership#org_uuid OrgGroupMembership#org_uuid}
  */
  readonly orgUuid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/org_group_membership datadog_org_group_membership}
*/
export class OrgGroupMembership extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_org_group_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OrgGroupMembership resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgGroupMembership to import
  * @param importFromId The id of the existing OrgGroupMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/org_group_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgGroupMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_org_group_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/org_group_membership datadog_org_group_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgGroupMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: OrgGroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_org_group_membership',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.11.0',
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
    this._orgGroupId = config.orgGroupId;
    this._orgUuid = config.orgUuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // org_group_id - computed: false, optional: false, required: true
  private _orgGroupId?: string; 
  public get orgGroupId() {
    return this.getStringAttribute('org_group_id');
  }
  public set orgGroupId(value: string) {
    this._orgGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgGroupIdInput() {
    return this._orgGroupId;
  }

  // org_name - computed: true, optional: false, required: false
  public get orgName() {
    return this.getStringAttribute('org_name');
  }

  // org_site - computed: true, optional: false, required: false
  public get orgSite() {
    return this.getStringAttribute('org_site');
  }

  // org_uuid - computed: false, optional: false, required: true
  private _orgUuid?: string; 
  public get orgUuid() {
    return this.getStringAttribute('org_uuid');
  }
  public set orgUuid(value: string) {
    this._orgUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgUuidInput() {
    return this._orgUuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      org_group_id: cdktn.stringToTerraform(this._orgGroupId),
      org_uuid: cdktn.stringToTerraform(this._orgUuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      org_group_id: {
        value: cdktn.stringToHclTerraform(this._orgGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_uuid: {
        value: cdktn.stringToHclTerraform(this._orgUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
