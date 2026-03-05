/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/security_monitoring_critical_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecurityMonitoringCriticalAssetConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether the critical asset is enabled. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/security_monitoring_critical_asset#enabled SecurityMonitoringCriticalAsset#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The query used to match a critical asset and the associated signals. Uses the same syntax as the search bar in the Security Signals Explorer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/security_monitoring_critical_asset#query SecurityMonitoringCriticalAsset#query}
  */
  readonly query: string;
  /**
  * The rule query to filter which detection rules this critical asset applies to. Uses the same syntax as the search bar for detection rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/security_monitoring_critical_asset#rule_query SecurityMonitoringCriticalAsset#rule_query}
  */
  readonly ruleQuery: string;
  /**
  * The severity change applied to signals matching this critical asset. Valid values are `critical`, `high`, `medium`, `low`, `info`, `increase`, `decrease`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/security_monitoring_critical_asset#severity SecurityMonitoringCriticalAsset#severity}
  */
  readonly severity: string;
  /**
  * A list of tags associated with the critical asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/security_monitoring_critical_asset#tags SecurityMonitoringCriticalAsset#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/security_monitoring_critical_asset datadog_security_monitoring_critical_asset}
*/
export class SecurityMonitoringCriticalAsset extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_security_monitoring_critical_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecurityMonitoringCriticalAsset resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityMonitoringCriticalAsset to import
  * @param importFromId The id of the existing SecurityMonitoringCriticalAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/security_monitoring_critical_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityMonitoringCriticalAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_security_monitoring_critical_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/security_monitoring_critical_asset datadog_security_monitoring_critical_asset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityMonitoringCriticalAssetConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityMonitoringCriticalAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_critical_asset',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.91.0',
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
    this._enabled = config.enabled;
    this._query = config.query;
    this._ruleQuery = config.ruleQuery;
    this._severity = config.severity;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rule_query - computed: false, optional: false, required: true
  private _ruleQuery?: string; 
  public get ruleQuery() {
    return this.getStringAttribute('rule_query');
  }
  public set ruleQuery(value: string) {
    this._ruleQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleQueryInput() {
    return this._ruleQuery;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktn.booleanToTerraform(this._enabled),
      query: cdktn.stringToTerraform(this._query),
      rule_query: cdktn.stringToTerraform(this._ruleQuery),
      severity: cdktn.stringToTerraform(this._severity),
      tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tags),
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
      query: {
        value: cdktn.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_query: {
        value: cdktn.stringToHclTerraform(this._ruleQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktn.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
