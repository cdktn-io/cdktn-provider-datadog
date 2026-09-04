/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TagRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether the rule is currently enforced. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#enabled TagRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Set to `true` to allow creating a rule with `rule_type` set to `blocking`. The Datadog API only accepts `surfacing` at creation time, so the provider creates the rule as `surfacing` and then immediately updates it to `blocking`, which makes the create non-atomic: if the update fails, a `surfacing` rule is left behind and the resource is marked tainted. This field is only read during creation and is not sent to the API; changing it afterwards produces a diff that has no effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#force_blocking_on_create TagRule#force_blocking_on_create}
  */
  readonly forceBlockingOnCreate?: boolean | cdktn.IResolvable;
  /**
  * Whether destroying this resource permanently deletes the tag rule. When set to `false` the rule is soft-deleted instead, which keeps it recoverable and preserves its historical compliance score data. This field is only read during deletion and is not sent to the API on create or update. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#hard_delete TagRule#hard_delete}
  */
  readonly hardDelete?: boolean | cdktn.IResolvable;
  /**
  * Human-readable name for the tag rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#name TagRule#name}
  */
  readonly name: string;
  /**
  * When `true`, the rule matches tag values that do NOT match any of the supplied patterns. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#negated TagRule#negated}
  */
  readonly negated?: boolean | cdktn.IResolvable;
  /**
  * When `true`, telemetry without this tag is treated as a violation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#required TagRule#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * How the rule is enforced. `surfacing` only highlights non-compliant telemetry, while `blocking` rejects telemetry that violates the rule. The API only accepts `surfacing` at creation time, so creating a rule directly as `blocking` requires `force_blocking_on_create` to be set to `true`. Using `blocking` at all requires blocking tag rules to be enabled for your organization; otherwise the API returns `403 permission denied`. Valid values are `blocking`, `surfacing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#rule_type TagRule#rule_type}
  */
  readonly ruleType: string;
  /**
  * The scope the rule applies within. Typically an environment, team, or organization-level identifier used to limit where the rule is enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#scope TagRule#scope}
  */
  readonly scope: string;
  /**
  * The telemetry source that the tag rule applies to. This field cannot be updated after creation; changing it forces a new resource. Valid values are `logs`, `spans`, `metrics`, `rum`, `feed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#source TagRule#source}
  */
  readonly source: string;
  /**
  * The tag key that the rule governs (for example, `service`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#tag_key TagRule#tag_key}
  */
  readonly tagKey: string;
  /**
  * One or more patterns that valid values for the tag key must match. At least one pattern is required. These are not regular expressions: the API restricts pattern characters to `A-Za-z0-9_:-.,/*`, with `*` acting as a wildcard. A pattern made up only of wildcards (for example a bare `*`) is rejected by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#tag_value_patterns TagRule#tag_value_patterns}
  */
  readonly tagValuePatterns: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule datadog_tag_rule}
*/
export class TagRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_tag_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TagRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TagRule to import
  * @param importFromId The id of the existing TagRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TagRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_tag_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/tag_rule datadog_tag_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TagRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_tag_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.20.0',
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
    this._enabled = config.enabled;
    this._forceBlockingOnCreate = config.forceBlockingOnCreate;
    this._hardDelete = config.hardDelete;
    this._name = config.name;
    this._negated = config.negated;
    this._required = config.required;
    this._ruleType = config.ruleType;
    this._scope = config.scope;
    this._source = config.source;
    this._tagKey = config.tagKey;
    this._tagValuePatterns = config.tagValuePatterns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // force_blocking_on_create - computed: false, optional: true, required: false
  private _forceBlockingOnCreate?: boolean | cdktn.IResolvable; 
  public get forceBlockingOnCreate() {
    return this.getBooleanAttribute('force_blocking_on_create');
  }
  public set forceBlockingOnCreate(value: boolean | cdktn.IResolvable) {
    this._forceBlockingOnCreate = value;
  }
  public resetForceBlockingOnCreate() {
    this._forceBlockingOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceBlockingOnCreateInput() {
    return this._forceBlockingOnCreate;
  }

  // hard_delete - computed: true, optional: true, required: false
  private _hardDelete?: boolean | cdktn.IResolvable; 
  public get hardDelete() {
    return this.getBooleanAttribute('hard_delete');
  }
  public set hardDelete(value: boolean | cdktn.IResolvable) {
    this._hardDelete = value;
  }
  public resetHardDelete() {
    this._hardDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardDeleteInput() {
    return this._hardDelete;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
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

  // negated - computed: true, optional: true, required: false
  private _negated?: boolean | cdktn.IResolvable; 
  public get negated() {
    return this.getBooleanAttribute('negated');
  }
  public set negated(value: boolean | cdktn.IResolvable) {
    this._negated = value;
  }
  public resetNegated() {
    this._negated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negatedInput() {
    return this._negated;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value_patterns - computed: false, optional: false, required: true
  private _tagValuePatterns?: string[]; 
  public get tagValuePatterns() {
    return this.getListAttribute('tag_value_patterns');
  }
  public set tagValuePatterns(value: string[]) {
    this._tagValuePatterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuePatternsInput() {
    return this._tagValuePatterns;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktn.booleanToTerraform(this._enabled),
      force_blocking_on_create: cdktn.booleanToTerraform(this._forceBlockingOnCreate),
      hard_delete: cdktn.booleanToTerraform(this._hardDelete),
      name: cdktn.stringToTerraform(this._name),
      negated: cdktn.booleanToTerraform(this._negated),
      required: cdktn.booleanToTerraform(this._required),
      rule_type: cdktn.stringToTerraform(this._ruleType),
      scope: cdktn.stringToTerraform(this._scope),
      source: cdktn.stringToTerraform(this._source),
      tag_key: cdktn.stringToTerraform(this._tagKey),
      tag_value_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tagValuePatterns),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktn.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_blocking_on_create: {
        value: cdktn.booleanToHclTerraform(this._forceBlockingOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hard_delete: {
        value: cdktn.booleanToHclTerraform(this._hardDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      negated: {
        value: cdktn.booleanToHclTerraform(this._negated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      required: {
        value: cdktn.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rule_type: {
        value: cdktn.stringToHclTerraform(this._ruleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktn.stringToHclTerraform(this._scope),
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
      tag_key: {
        value: cdktn.stringToHclTerraform(this._tagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_value_patterns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tagValuePatterns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
