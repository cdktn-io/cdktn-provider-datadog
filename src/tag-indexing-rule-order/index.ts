/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule_order
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TagIndexingRuleOrderConfig extends cdktn.TerraformMetaArguments {
  /**
  * A unique name for the order resource. Recommended to match the resource name. No corresponding field exists in the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule_order#name TagIndexingRuleOrder#name}
  */
  readonly name: string;
  /**
  * Ordered list of ALL tag indexing rule UUIDs. The server assigns each rule a rule_order value (1, 2, 3, ...) corresponding to its position in this list. This resource claims full ownership of evaluation order: rules created outside Terraform (e.g. via the UI) will appear as configuration drift on the next plan. All rules must be listed here; omitting a rule ID will result in a 404 error from the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule_order#rule_ids TagIndexingRuleOrder#rule_ids}
  */
  readonly ruleIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule_order datadog_tag_indexing_rule_order}
*/
export class TagIndexingRuleOrder extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_tag_indexing_rule_order";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TagIndexingRuleOrder resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TagIndexingRuleOrder to import
  * @param importFromId The id of the existing TagIndexingRuleOrder that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule_order#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TagIndexingRuleOrder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_tag_indexing_rule_order", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/tag_indexing_rule_order datadog_tag_indexing_rule_order} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagIndexingRuleOrderConfig
  */
  public constructor(scope: Construct, id: string, config: TagIndexingRuleOrderConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_tag_indexing_rule_order',
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
