/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/org_group_policy_overrides
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatadogOrgGroupPolicyOverridesConfig extends cdktn.TerraformMetaArguments {
  /**
  * The UUID of the org group whose overrides to list. Must be a valid UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/org_group_policy_overrides#org_group_id DataDatadogOrgGroupPolicyOverrides#org_group_id}
  */
  readonly orgGroupId: string;
  /**
  * Filter overrides to those for the given organization. Applied client-side after the List call because the API does not accept an `org_uuid` filter on this endpoint. Must be a valid UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/org_group_policy_overrides#org_uuid DataDatadogOrgGroupPolicyOverrides#org_uuid}
  */
  readonly orgUuid?: string;
  /**
  * Filter overrides to those on the given policy. Must be a valid UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/org_group_policy_overrides#policy_id DataDatadogOrgGroupPolicyOverrides#policy_id}
  */
  readonly policyId?: string;
}
export interface DataDatadogOrgGroupPolicyOverridesOverrides {
}

export function dataDatadogOrgGroupPolicyOverridesOverridesToTerraform(struct?: DataDatadogOrgGroupPolicyOverridesOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogOrgGroupPolicyOverridesOverridesToHclTerraform(struct?: DataDatadogOrgGroupPolicyOverridesOverrides): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogOrgGroupPolicyOverridesOverridesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogOrgGroupPolicyOverridesOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogOrgGroupPolicyOverridesOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // org_group_id - computed: true, optional: false, required: false
  public get orgGroupId() {
    return this.getStringAttribute('org_group_id');
  }

  // org_site - computed: true, optional: false, required: false
  public get orgSite() {
    return this.getStringAttribute('org_site');
  }

  // org_uuid - computed: true, optional: false, required: false
  public get orgUuid() {
    return this.getStringAttribute('org_uuid');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
}

export class DataDatadogOrgGroupPolicyOverridesOverridesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogOrgGroupPolicyOverridesOverridesOutputReference {
    return new DataDatadogOrgGroupPolicyOverridesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/org_group_policy_overrides datadog_org_group_policy_overrides}
*/
export class DataDatadogOrgGroupPolicyOverrides extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_org_group_policy_overrides";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatadogOrgGroupPolicyOverrides resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogOrgGroupPolicyOverrides to import
  * @param importFromId The id of the existing DataDatadogOrgGroupPolicyOverrides that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/org_group_policy_overrides#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogOrgGroupPolicyOverrides to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_org_group_policy_overrides", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/org_group_policy_overrides datadog_org_group_policy_overrides} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogOrgGroupPolicyOverridesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogOrgGroupPolicyOverridesConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_org_group_policy_overrides',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.12.0',
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
    this._policyId = config.policyId;
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

  // org_uuid - computed: false, optional: true, required: false
  private _orgUuid?: string; 
  public get orgUuid() {
    return this.getStringAttribute('org_uuid');
  }
  public set orgUuid(value: string) {
    this._orgUuid = value;
  }
  public resetOrgUuid() {
    this._orgUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgUuidInput() {
    return this._orgUuid;
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataDatadogOrgGroupPolicyOverridesOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
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
