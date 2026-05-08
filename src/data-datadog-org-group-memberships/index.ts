/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_memberships
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatadogOrgGroupMembershipsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Filter memberships to those within the given org group. At least one filter (`org_group_id` or `org_uuid`) is required. Must be a valid UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_memberships#org_group_id DataDatadogOrgGroupMemberships#org_group_id}
  */
  readonly orgGroupId?: string;
  /**
  * Filter memberships to those for the given organization. At least one filter (`org_group_id` or `org_uuid`) is required. Must be a valid UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_memberships#org_uuid DataDatadogOrgGroupMemberships#org_uuid}
  */
  readonly orgUuid?: string;
}
export interface DataDatadogOrgGroupMembershipsMemberships {
}

export function dataDatadogOrgGroupMembershipsMembershipsToTerraform(struct?: DataDatadogOrgGroupMembershipsMemberships): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDatadogOrgGroupMembershipsMembershipsToHclTerraform(struct?: DataDatadogOrgGroupMembershipsMemberships): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogOrgGroupMembershipsMembershipsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatadogOrgGroupMembershipsMemberships | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogOrgGroupMembershipsMemberships | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // org_group_id - computed: true, optional: false, required: false
  public get orgGroupId() {
    return this.getStringAttribute('org_group_id');
  }

  // org_name - computed: true, optional: false, required: false
  public get orgName() {
    return this.getStringAttribute('org_name');
  }

  // org_site - computed: true, optional: false, required: false
  public get orgSite() {
    return this.getStringAttribute('org_site');
  }

  // org_uuid - computed: true, optional: false, required: false
  public get orgUuid() {
    return this.getStringAttribute('org_uuid');
  }
}

export class DataDatadogOrgGroupMembershipsMembershipsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogOrgGroupMembershipsMembershipsOutputReference {
    return new DataDatadogOrgGroupMembershipsMembershipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_memberships datadog_org_group_memberships}
*/
export class DataDatadogOrgGroupMemberships extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_org_group_memberships";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatadogOrgGroupMemberships resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogOrgGroupMemberships to import
  * @param importFromId The id of the existing DataDatadogOrgGroupMemberships that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_memberships#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogOrgGroupMemberships to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_org_group_memberships", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_memberships datadog_org_group_memberships} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogOrgGroupMembershipsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogOrgGroupMembershipsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_org_group_memberships',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.8.0',
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

  // memberships - computed: true, optional: false, required: false
  private _memberships = new DataDatadogOrgGroupMembershipsMembershipsList(this, "memberships", false);
  public get memberships() {
    return this._memberships;
  }

  // org_group_id - computed: false, optional: true, required: false
  private _orgGroupId?: string; 
  public get orgGroupId() {
    return this.getStringAttribute('org_group_id');
  }
  public set orgGroupId(value: string) {
    this._orgGroupId = value;
  }
  public resetOrgGroupId() {
    this._orgGroupId = undefined;
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
