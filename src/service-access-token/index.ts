/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/service_access_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ServiceAccessTokenConfig extends cdktn.TerraformMetaArguments {
  /**
  * Expiration date of the service access token, in RFC3339 format. Omit for a non-expiring token. The Datadog API caps expirations to within 365 days from creation. This attribute is immutable: it cannot be added, changed, or removed after creation. To rotate the expiration, destroy and re-create the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/service_access_token#expires_at ServiceAccessToken#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Name of the service access token. Must be non-empty. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/service_access_token#name ServiceAccessToken#name}
  */
  readonly name: string;
  /**
  * Authorization scopes granted to the service access token. At least one scope is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/service_access_token#scopes ServiceAccessToken#scopes}
  */
  readonly scopes: string[];
  /**
  * ID of the service account that owns this access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/service_access_token#service_account_id ServiceAccessToken#service_account_id}
  */
  readonly serviceAccountId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/service_access_token datadog_service_access_token}
*/
export class ServiceAccessToken extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_service_access_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ServiceAccessToken resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceAccessToken to import
  * @param importFromId The id of the existing ServiceAccessToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/service_access_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceAccessToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_service_access_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/service_access_token datadog_service_access_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceAccessTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceAccessTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_service_access_token',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.12.1',
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
    this._expiresAt = config.expiresAt;
    this._name = config.name;
    this._scopes = config.scopes;
    this._serviceAccountId = config.serviceAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // expires_at - computed: false, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // last_used_at - computed: true, optional: false, required: false
  public get lastUsedAt() {
    return this.getStringAttribute('last_used_at');
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

  // public_portion - computed: true, optional: false, required: false
  public get publicPortion() {
    return this.getStringAttribute('public_portion');
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktn.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expires_at: cdktn.stringToTerraform(this._expiresAt),
      name: cdktn.stringToTerraform(this._name),
      scopes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._scopes),
      service_account_id: cdktn.stringToTerraform(this._serviceAccountId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expires_at: {
        value: cdktn.stringToHclTerraform(this._expiresAt),
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
      scopes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_account_id: {
        value: cdktn.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
