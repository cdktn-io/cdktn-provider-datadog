/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/team_sync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TeamSyncConfig extends cdktn.TerraformMetaArguments {
  /**
  * How often the sync process should run. Valid values are `once`, `continuously`, `paused`. Defaults to `"once"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/team_sync#frequency TeamSync#frequency}
  */
  readonly frequency?: string;
  /**
  * The external source platform for team synchronization. Valid values are `github`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/team_sync#source TeamSync#source}
  */
  readonly source: string;
  /**
  * Whether to sync members from the external team to the Datadog team. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/team_sync#sync_membership TeamSync#sync_membership}
  */
  readonly syncMembership?: boolean | cdktn.IResolvable;
  /**
  * The type of synchronization operation. `link` connects teams by matching names. `provision` creates new teams when no match is found. Valid values are `link`, `provision`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/team_sync#type TeamSync#type}
  */
  readonly type: string;
  /**
  * selection_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/team_sync#selection_state TeamSync#selection_state}
  */
  readonly selectionState?: TeamSyncSelectionState[] | cdktn.IResolvable;
}
export interface TeamSyncSelectionStateExternalId {
  /**
  * The type of external identifier. Valid values are `team`, `organization`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/team_sync#type TeamSync#type}
  */
  readonly type: string;
  /**
  * The external identifier value from the source platform (e.g. a GitHub organization ID or team ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/team_sync#value TeamSync#value}
  */
  readonly value: string;
}

export function teamSyncSelectionStateExternalIdToTerraform(struct?: TeamSyncSelectionStateExternalId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function teamSyncSelectionStateExternalIdToHclTerraform(struct?: TeamSyncSelectionStateExternalId | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamSyncSelectionStateExternalIdOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TeamSyncSelectionStateExternalId | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamSyncSelectionStateExternalId | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TeamSyncSelectionState {
  /**
  * The operation to perform on the selected hierarchy. Valid values are `include`. Defaults to `"include"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/team_sync#operation TeamSync#operation}
  */
  readonly operation?: string;
  /**
  * The scope of the selection. Valid values are `subtree`. Defaults to `"subtree"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/team_sync#scope TeamSync#scope}
  */
  readonly scope?: string;
  /**
  * external_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/team_sync#external_id TeamSync#external_id}
  */
  readonly externalId: TeamSyncSelectionStateExternalId;
}

export function teamSyncSelectionStateToTerraform(struct?: TeamSyncSelectionState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    operation: cdktn.stringToTerraform(struct!.operation),
    scope: cdktn.stringToTerraform(struct!.scope),
    external_id: teamSyncSelectionStateExternalIdToTerraform(struct!.externalId),
  }
}


export function teamSyncSelectionStateToHclTerraform(struct?: TeamSyncSelectionState | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    operation: {
      value: cdktn.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: teamSyncSelectionStateExternalIdToHclTerraform(struct!.externalId),
      isBlock: true,
      type: "struct",
      storageClassType: "TeamSyncSelectionStateExternalId",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamSyncSelectionStateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TeamSyncSelectionState | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._externalId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamSyncSelectionState | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._scope = undefined;
      this._externalId.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._scope = value.scope;
      this._externalId.internalValue = value.externalId;
    }
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId = new TeamSyncSelectionStateExternalIdOutputReference(this, "external_id");
  public get externalId() {
    return this._externalId;
  }
  public putExternalId(value: TeamSyncSelectionStateExternalId) {
    this._externalId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId.internalValue;
  }
}

export class TeamSyncSelectionStateList extends cdktn.ComplexList {
  public internalValue? : TeamSyncSelectionState[] | cdktn.IResolvable

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
  public get(index: number): TeamSyncSelectionStateOutputReference {
    return new TeamSyncSelectionStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/team_sync datadog_team_sync}
*/
export class TeamSync extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_team_sync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TeamSync resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamSync to import
  * @param importFromId The id of the existing TeamSync that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/team_sync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamSync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_team_sync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/team_sync datadog_team_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamSyncConfig
  */
  public constructor(scope: Construct, id: string, config: TeamSyncConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_team_sync',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.13.0',
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
    this._frequency = config.frequency;
    this._source = config.source;
    this._syncMembership = config.syncMembership;
    this._type = config.type;
    this._selectionState.internalValue = config.selectionState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sync_membership - computed: true, optional: true, required: false
  private _syncMembership?: boolean | cdktn.IResolvable; 
  public get syncMembership() {
    return this.getBooleanAttribute('sync_membership');
  }
  public set syncMembership(value: boolean | cdktn.IResolvable) {
    this._syncMembership = value;
  }
  public resetSyncMembership() {
    this._syncMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncMembershipInput() {
    return this._syncMembership;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // selection_state - computed: false, optional: true, required: false
  private _selectionState = new TeamSyncSelectionStateList(this, "selection_state", false);
  public get selectionState() {
    return this._selectionState;
  }
  public putSelectionState(value: TeamSyncSelectionState[] | cdktn.IResolvable) {
    this._selectionState.internalValue = value;
  }
  public resetSelectionState() {
    this._selectionState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionStateInput() {
    return this._selectionState.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      frequency: cdktn.stringToTerraform(this._frequency),
      source: cdktn.stringToTerraform(this._source),
      sync_membership: cdktn.booleanToTerraform(this._syncMembership),
      type: cdktn.stringToTerraform(this._type),
      selection_state: cdktn.listMapper(teamSyncSelectionStateToTerraform, true)(this._selectionState.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      frequency: {
        value: cdktn.stringToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktn.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_membership: {
        value: cdktn.booleanToHclTerraform(this._syncMembership),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selection_state: {
        value: cdktn.listMapperHcl(teamSyncSelectionStateToHclTerraform, true)(this._selectionState.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamSyncSelectionStateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
