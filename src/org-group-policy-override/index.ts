/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/org_group_policy_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OrgGroupPolicyOverrideConfig extends cdktn.TerraformMetaArguments {
  /**
  * The UUID of the org group that owns the policy. Must be a valid UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/org_group_policy_override#org_group_id OrgGroupPolicyOverride#org_group_id}
  */
  readonly orgGroupId: string;
  /**
  * The short site name of the organization (e.g., `us1`, `eu1`, `us1-fed`). Part of the override's server-side identity; changing it replaces the resource. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/org_group_policy_override#org_site OrgGroupPolicyOverride#org_site}
  */
  readonly orgSite: string;
  /**
  * The UUID of the organization being exempted from the policy. Must be a valid UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/org_group_policy_override#org_uuid OrgGroupPolicyOverride#org_uuid}
  */
  readonly orgUuid: string;
  /**
  * The UUID of the org group policy the override applies to. Must be a valid UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/org_group_policy_override#policy_id OrgGroupPolicyOverride#policy_id}
  */
  readonly policyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/org_group_policy_override datadog_org_group_policy_override}
*/
export class OrgGroupPolicyOverride extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_org_group_policy_override";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OrgGroupPolicyOverride resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgGroupPolicyOverride to import
  * @param importFromId The id of the existing OrgGroupPolicyOverride that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/org_group_policy_override#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgGroupPolicyOverride to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_org_group_policy_override", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/org_group_policy_override datadog_org_group_policy_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgGroupPolicyOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: OrgGroupPolicyOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_org_group_policy_override',
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
    this._orgSite = config.orgSite;
    this._orgUuid = config.orgUuid;
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

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

  // org_site - computed: false, optional: false, required: true
  private _orgSite?: string; 
  public get orgSite() {
    return this.getStringAttribute('org_site');
  }
  public set orgSite(value: string) {
    this._orgSite = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgSiteInput() {
    return this._orgSite;
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      org_group_id: cdktn.stringToTerraform(this._orgGroupId),
      org_site: cdktn.stringToTerraform(this._orgSite),
      org_uuid: cdktn.stringToTerraform(this._orgUuid),
      policy_id: cdktn.stringToTerraform(this._policyId),
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
      org_site: {
        value: cdktn.stringToHclTerraform(this._orgSite),
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
      policy_id: {
        value: cdktn.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
