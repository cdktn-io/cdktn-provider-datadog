/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WebhookOauth2ClientCredentialsConfig extends cdktn.TerraformMetaArguments {
  /**
  * The URL used to fetch the access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#access_token_url WebhookOauth2ClientCredentials#access_token_url}
  */
  readonly accessTokenUrl: string;
  /**
  * The audience requested when fetching the access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#audience WebhookOauth2ClientCredentials#audience}
  */
  readonly audience?: string;
  /**
  * The OAuth2 client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_id WebhookOauth2ClientCredentials#client_id}
  */
  readonly clientId: string;
  /**
  * The OAuth2 client secret. This value is not returned by the API, so it cannot be detected as drifted or filled in on import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#client_secret WebhookOauth2ClientCredentials#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The name of the auth method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#name WebhookOauth2ClientCredentials#name}
  */
  readonly name: string;
  /**
  * The scope requested when fetching the access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#scope WebhookOauth2ClientCredentials#scope}
  */
  readonly scope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials datadog_webhook_oauth2_client_credentials}
*/
export class WebhookOauth2ClientCredentials extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_webhook_oauth2_client_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WebhookOauth2ClientCredentials resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebhookOauth2ClientCredentials to import
  * @param importFromId The id of the existing WebhookOauth2ClientCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebhookOauth2ClientCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_webhook_oauth2_client_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/webhook_oauth2_client_credentials datadog_webhook_oauth2_client_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebhookOauth2ClientCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: WebhookOauth2ClientCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_webhook_oauth2_client_credentials',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.19.0',
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
    this._accessTokenUrl = config.accessTokenUrl;
    this._audience = config.audience;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._name = config.name;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_url - computed: false, optional: false, required: true
  private _accessTokenUrl?: string; 
  public get accessTokenUrl() {
    return this.getStringAttribute('access_token_url');
  }
  public set accessTokenUrl(value: string) {
    this._accessTokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenUrlInput() {
    return this._accessTokenUrl;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

  // scope - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_url: cdktn.stringToTerraform(this._accessTokenUrl),
      audience: cdktn.stringToTerraform(this._audience),
      client_id: cdktn.stringToTerraform(this._clientId),
      client_secret: cdktn.stringToTerraform(this._clientSecret),
      name: cdktn.stringToTerraform(this._name),
      scope: cdktn.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_url: {
        value: cdktn.stringToHclTerraform(this._accessTokenUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audience: {
        value: cdktn.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktn.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktn.stringToHclTerraform(this._clientSecret),
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
      scope: {
        value: cdktn.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
