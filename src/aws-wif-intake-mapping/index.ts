/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/aws_wif_intake_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AwsWifIntakeMappingConfig extends cdktn.TerraformMetaArguments {
  /**
  * The AWS caller ARN pattern allowed to authenticate. Changing this value replaces the mapping. Currently, only the `aws` partition is supported. For role-based authentication, use the STS assumed-role ARN returned by `aws sts get-caller-identity`, not the IAM role ARN shown in the AWS console. A pattern may contain one wildcard only, as a trailing `/*` after a specific resource; for example, `arn:aws:sts::123456789012:assumed-role/DatadogAgentRole/*`. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/aws_wif_intake_mapping#arn_pattern AwsWifIntakeMapping#arn_pattern}
  */
  readonly arnPattern: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/aws_wif_intake_mapping datadog_aws_wif_intake_mapping}
*/
export class AwsWifIntakeMapping extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_aws_wif_intake_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AwsWifIntakeMapping resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsWifIntakeMapping to import
  * @param importFromId The id of the existing AwsWifIntakeMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/aws_wif_intake_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsWifIntakeMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_aws_wif_intake_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/aws_wif_intake_mapping datadog_aws_wif_intake_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsWifIntakeMappingConfig
  */
  public constructor(scope: Construct, id: string, config: AwsWifIntakeMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_aws_wif_intake_mapping',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.30.0',
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
    this._arnPattern = config.arnPattern;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // par_enrollment_enabled - computed: true, optional: false, required: false
  public get parEnrollmentEnabled() {
    return this.getBooleanAttribute('par_enrollment_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn_pattern: cdktn.stringToTerraform(this._arnPattern),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
