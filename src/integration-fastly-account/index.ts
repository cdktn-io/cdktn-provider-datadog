/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/integration_fastly_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IntegrationFastlyAccountConfig extends cdktn.TerraformMetaArguments {
  /**
  * The API key for the Fastly account. Exactly one of `api_key` or `api_key_wo` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/integration_fastly_account#api_key IntegrationFastlyAccount#api_key}
  */
  readonly apiKey?: string;
  /**
  * Write-only API key for the Fastly account. Exactly one of `api_key` or `api_key_wo` must be set. Must be used with `api_key_wo_version`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/integration_fastly_account#api_key_wo IntegrationFastlyAccount#api_key_wo}
  */
  readonly apiKeyWo?: string;
  /**
  * Version for `api_key_wo` rotation. Changing this triggers an update. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/integration_fastly_account#api_key_wo_version IntegrationFastlyAccount#api_key_wo_version}
  */
  readonly apiKeyWoVersion?: string;
  /**
  * The name of the Fastly account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/integration_fastly_account#name IntegrationFastlyAccount#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/integration_fastly_account datadog_integration_fastly_account}
*/
export class IntegrationFastlyAccount extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_fastly_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IntegrationFastlyAccount resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationFastlyAccount to import
  * @param importFromId The id of the existing IntegrationFastlyAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/integration_fastly_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationFastlyAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_fastly_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/integration_fastly_account datadog_integration_fastly_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationFastlyAccountConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationFastlyAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_fastly_account',
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
    this._apiKey = config.apiKey;
    this._apiKeyWo = config.apiKeyWo;
    this._apiKeyWoVersion = config.apiKeyWoVersion;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_wo - computed: false, optional: true, required: false
  private _apiKeyWo?: string; 
  public get apiKeyWo() {
    return this.getStringAttribute('api_key_wo');
  }
  public set apiKeyWo(value: string) {
    this._apiKeyWo = value;
  }
  public resetApiKeyWo() {
    this._apiKeyWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyWoInput() {
    return this._apiKeyWo;
  }

  // api_key_wo_version - computed: false, optional: true, required: false
  private _apiKeyWoVersion?: string; 
  public get apiKeyWoVersion() {
    return this.getStringAttribute('api_key_wo_version');
  }
  public set apiKeyWoVersion(value: string) {
    this._apiKeyWoVersion = value;
  }
  public resetApiKeyWoVersion() {
    this._apiKeyWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyWoVersionInput() {
    return this._apiKeyWoVersion;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktn.stringToTerraform(this._apiKey),
      api_key_wo: cdktn.stringToTerraform(this._apiKeyWo),
      api_key_wo_version: cdktn.stringToTerraform(this._apiKeyWoVersion),
      name: cdktn.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktn.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_wo: {
        value: cdktn.stringToHclTerraform(this._apiKeyWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_wo_version: {
        value: cdktn.stringToHclTerraform(this._apiKeyWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
