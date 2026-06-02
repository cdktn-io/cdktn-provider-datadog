/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/agentless_scanning_azure_scan_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AgentlessScanningAzureScanOptionsConfig extends cdktn.TerraformMetaArguments {
  /**
  * The Azure subscription ID for which agentless scanning is configured. Must be a valid Azure subscription ID (UUID format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/agentless_scanning_azure_scan_options#azure_subscription_id AgentlessScanningAzureScanOptions#azure_subscription_id}
  */
  readonly azureSubscriptionId: string;
  /**
  * Indicates whether host compliance scanning is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/agentless_scanning_azure_scan_options#compliance_host AgentlessScanningAzureScanOptions#compliance_host}
  */
  readonly complianceHost?: boolean | cdktn.IResolvable;
  /**
  * Indicates if scanning for vulnerabilities in containers is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/agentless_scanning_azure_scan_options#vuln_containers_os AgentlessScanningAzureScanOptions#vuln_containers_os}
  */
  readonly vulnContainersOs: boolean | cdktn.IResolvable;
  /**
  * Indicates if scanning for vulnerabilities in hosts is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/agentless_scanning_azure_scan_options#vuln_host_os AgentlessScanningAzureScanOptions#vuln_host_os}
  */
  readonly vulnHostOs: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/agentless_scanning_azure_scan_options datadog_agentless_scanning_azure_scan_options}
*/
export class AgentlessScanningAzureScanOptions extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_agentless_scanning_azure_scan_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AgentlessScanningAzureScanOptions resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgentlessScanningAzureScanOptions to import
  * @param importFromId The id of the existing AgentlessScanningAzureScanOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/agentless_scanning_azure_scan_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgentlessScanningAzureScanOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_agentless_scanning_azure_scan_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/agentless_scanning_azure_scan_options datadog_agentless_scanning_azure_scan_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentlessScanningAzureScanOptionsConfig
  */
  public constructor(scope: Construct, id: string, config: AgentlessScanningAzureScanOptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_agentless_scanning_azure_scan_options',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.11.0',
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
    this._azureSubscriptionId = config.azureSubscriptionId;
    this._complianceHost = config.complianceHost;
    this._vulnContainersOs = config.vulnContainersOs;
    this._vulnHostOs = config.vulnHostOs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_subscription_id - computed: false, optional: false, required: true
  private _azureSubscriptionId?: string; 
  public get azureSubscriptionId() {
    return this.getStringAttribute('azure_subscription_id');
  }
  public set azureSubscriptionId(value: string) {
    this._azureSubscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubscriptionIdInput() {
    return this._azureSubscriptionId;
  }

  // compliance_host - computed: true, optional: true, required: false
  private _complianceHost?: boolean | cdktn.IResolvable; 
  public get complianceHost() {
    return this.getBooleanAttribute('compliance_host');
  }
  public set complianceHost(value: boolean | cdktn.IResolvable) {
    this._complianceHost = value;
  }
  public resetComplianceHost() {
    this._complianceHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceHostInput() {
    return this._complianceHost;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vuln_containers_os - computed: false, optional: false, required: true
  private _vulnContainersOs?: boolean | cdktn.IResolvable; 
  public get vulnContainersOs() {
    return this.getBooleanAttribute('vuln_containers_os');
  }
  public set vulnContainersOs(value: boolean | cdktn.IResolvable) {
    this._vulnContainersOs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnContainersOsInput() {
    return this._vulnContainersOs;
  }

  // vuln_host_os - computed: false, optional: false, required: true
  private _vulnHostOs?: boolean | cdktn.IResolvable; 
  public get vulnHostOs() {
    return this.getBooleanAttribute('vuln_host_os');
  }
  public set vulnHostOs(value: boolean | cdktn.IResolvable) {
    this._vulnHostOs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnHostOsInput() {
    return this._vulnHostOs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_subscription_id: cdktn.stringToTerraform(this._azureSubscriptionId),
      compliance_host: cdktn.booleanToTerraform(this._complianceHost),
      vuln_containers_os: cdktn.booleanToTerraform(this._vulnContainersOs),
      vuln_host_os: cdktn.booleanToTerraform(this._vulnHostOs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_subscription_id: {
        value: cdktn.stringToHclTerraform(this._azureSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_host: {
        value: cdktn.booleanToHclTerraform(this._complianceHost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vuln_containers_os: {
        value: cdktn.booleanToHclTerraform(this._vulnContainersOs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vuln_host_os: {
        value: cdktn.booleanToHclTerraform(this._vulnHostOs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
