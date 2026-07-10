/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OrgGroupPolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The policy content as a JSON-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy#content OrgGroupPolicy#content}
  */
  readonly content: string;
  /**
  * The enforcement tier of the policy. `OVERRIDE_ALLOWED` means the policy is set but member orgs may mutate it. `GROUP_MANAGED` means the policy is strictly controlled and mutations are blocked for affected orgs. `DELEGATE` means each member org controls its own value. Valid values are `OVERRIDE_ALLOWED`, `GROUP_MANAGED`, `DELEGATE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy#enforcement_tier OrgGroupPolicy#enforcement_tier}
  */
  readonly enforcementTier?: string;
  /**
  * The UUID of the org group this policy belongs to. Must be a valid UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy#org_group_id OrgGroupPolicy#org_group_id}
  */
  readonly orgGroupId: string;
  /**
  * The name of the policy. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy#policy_name OrgGroupPolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * The type of the policy. Valid values are `org_config`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy#policy_type OrgGroupPolicy#policy_type}
  */
  readonly policyType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy datadog_org_group_policy}
*/
export class OrgGroupPolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_org_group_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OrgGroupPolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgGroupPolicy to import
  * @param importFromId The id of the existing OrgGroupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgGroupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_org_group_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/org_group_policy datadog_org_group_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgGroupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: OrgGroupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_org_group_policy',
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
    this._content = config.content;
    this._enforcementTier = config.enforcementTier;
    this._orgGroupId = config.orgGroupId;
    this._policyName = config.policyName;
    this._policyType = config.policyType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // enforcement_tier - computed: true, optional: true, required: false
  private _enforcementTier?: string; 
  public get enforcementTier() {
    return this.getStringAttribute('enforcement_tier');
  }
  public set enforcementTier(value: string) {
    this._enforcementTier = value;
  }
  public resetEnforcementTier() {
    this._enforcementTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementTierInput() {
    return this._enforcementTier;
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

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktn.stringToTerraform(this._content),
      enforcement_tier: cdktn.stringToTerraform(this._enforcementTier),
      org_group_id: cdktn.stringToTerraform(this._orgGroupId),
      policy_name: cdktn.stringToTerraform(this._policyName),
      policy_type: cdktn.stringToTerraform(this._policyType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktn.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcement_tier: {
        value: cdktn.stringToHclTerraform(this._enforcementTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_group_id: {
        value: cdktn.stringToHclTerraform(this._orgGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktn.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktn.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
