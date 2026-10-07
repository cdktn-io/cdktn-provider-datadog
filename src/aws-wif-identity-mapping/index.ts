/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AwsWifIdentityMappingConfig extends cdktn.TerraformMetaArguments {
  /**
  * The email or handle of the Datadog user or service account that the AWS principal authenticates as. For a Terraform-managed service account, prefer the stable UUID exported by `datadog_service_account.id`; Datadog accepts it as the service account identifier. Datadog normalizes an email to the account's handle, so the handle form is the only value that survives `terraform import` unchanged — importing a mapping configured by email produces a diff on this attribute, which forces replacement. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping#account_identifier AwsWifIdentityMapping#account_identifier}
  */
  readonly accountIdentifier: string;
  /**
  * The AWS caller ARN pattern allowed to authenticate. Currently, only the `aws` partition is supported. For role-based authentication, use the STS assumed-role ARN returned by `aws sts get-caller-identity`, not the IAM role ARN shown in the AWS console. A pattern may contain one wildcard only, as a trailing `/*` after a specific resource, for example `arn:aws:sts::123456789012:assumed-role/terraform-runner/*`. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping#arn_pattern AwsWifIdentityMapping#arn_pattern}
  */
  readonly arnPattern: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping datadog_aws_wif_identity_mapping}
*/
export class AwsWifIdentityMapping extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_aws_wif_identity_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsWifIdentityMapping resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsWifIdentityMapping to import
  * @param importFromId The id of the existing AwsWifIdentityMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsWifIdentityMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_aws_wif_identity_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/aws_wif_identity_mapping datadog_aws_wif_identity_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsWifIdentityMappingConfig
  */
  public constructor(scope: Construct, id: string, config: AwsWifIdentityMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_aws_wif_identity_mapping',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.25.0',
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
    this._accountIdentifier = config.accountIdentifier;
    this._arnPattern = config.arnPattern;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_identifier - computed: false, optional: false, required: true
  private _accountIdentifier?: string; 
  public get accountIdentifier() {
    return this.getStringAttribute('account_identifier');
  }
  public set accountIdentifier(value: string) {
    this._accountIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdentifierInput() {
    return this._accountIdentifier;
  }

  // account_uuid - computed: true, optional: false, required: false
  public get accountUuid() {
    return this.getStringAttribute('account_uuid');
  }

  // arn_pattern - computed: false, optional: false, required: true
  private _arnPattern?: string; 
  public get arnPattern() {
    return this.getStringAttribute('arn_pattern');
  }
  public set arnPattern(value: string) {
    this._arnPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnPatternInput() {
    return this._arnPattern;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_identifier: cdktn.stringToTerraform(this._accountIdentifier),
      arn_pattern: cdktn.stringToTerraform(this._arnPattern),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_identifier: {
        value: cdktn.stringToHclTerraform(this._accountIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arn_pattern: {
        value: cdktn.stringToHclTerraform(this._arnPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
