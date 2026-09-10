/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.21.0/docs/resources/saml_idp_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SamlIdpMetadataConfig extends cdktn.TerraformMetaArguments {
  /**
  * The content of the IdP metadata XML file, for example loaded with the `file()` function. A leading UTF-8 byte order mark (BOM) is stripped automatically before upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.21.0/docs/resources/saml_idp_metadata#idp_metadata SamlIdpMetadata#idp_metadata}
  */
  readonly idpMetadata: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.21.0/docs/resources/saml_idp_metadata datadog_saml_idp_metadata}
*/
export class SamlIdpMetadata extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_saml_idp_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SamlIdpMetadata resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlIdpMetadata to import
  * @param importFromId The id of the existing SamlIdpMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.21.0/docs/resources/saml_idp_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlIdpMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_saml_idp_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.21.0/docs/resources/saml_idp_metadata datadog_saml_idp_metadata} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlIdpMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: SamlIdpMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_saml_idp_metadata',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.21.0',
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
    this._idpMetadata = config.idpMetadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assertion_consumer_service - computed: true, optional: false, required: false
  public get assertionConsumerService() {
    return this.getListAttribute('assertion_consumer_service');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_metadata - computed: false, optional: false, required: true
  private _idpMetadata?: string; 
  public get idpMetadata() {
    return this.getStringAttribute('idp_metadata');
  }
  public set idpMetadata(value: string) {
    this._idpMetadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataInput() {
    return this._idpMetadata;
  }

  // sso_url - computed: true, optional: false, required: false
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      idp_metadata: cdktn.stringToTerraform(this._idpMetadata),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      idp_metadata: {
        value: cdktn.stringToHclTerraform(this._idpMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
