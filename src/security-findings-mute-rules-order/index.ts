/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rules_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityFindingsMuteRulesOrderConfig extends cdktn.TerraformMetaArguments {
  /**
  * A unique identifier for the order resource. This field has no server-side equivalent; Datadog recommends matching the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rules_order#name SecurityFindingsMuteRulesOrder#name}
  */
  readonly name: string;
  /**
  * The ordered list of all mute rule IDs. The order of IDs in this attribute defines the evaluation order of the mute rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rules_order#rule_ids SecurityFindingsMuteRulesOrder#rule_ids}
  */
  readonly ruleIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rules_order datadog_security_findings_mute_rules_order}
*/
export class SecurityFindingsMuteRulesOrder extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_findings_mute_rules_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityFindingsMuteRulesOrder resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityFindingsMuteRulesOrder to import
  * @param importFromId The id of the existing SecurityFindingsMuteRulesOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rules_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityFindingsMuteRulesOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_findings_mute_rules_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_mute_rules_order datadog_security_findings_mute_rules_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityFindingsMuteRulesOrderConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityFindingsMuteRulesOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_findings_mute_rules_order',
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
    this._name = config.name;
    this._ruleIds = config.ruleIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rule_ids - computed: false, optional: false, required: true
  private _ruleIds?: string[]; 
  public get ruleIds() {
    return this.getListAttribute('rule_ids');
  }
  public set ruleIds(value: string[]) {
    this._ruleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdsInput() {
    return this._ruleIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      rule_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._ruleIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._ruleIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
