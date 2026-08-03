/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/integration_aws_available_logs_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatadogIntegrationAwsAvailableLogsServicesConfig extends cdktn.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/integration_aws_available_logs_services datadog_integration_aws_available_logs_services}
*/
export class DataDatadogIntegrationAwsAvailableLogsServices extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_aws_available_logs_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatadogIntegrationAwsAvailableLogsServices resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogIntegrationAwsAvailableLogsServices to import
  * @param importFromId The id of the existing DataDatadogIntegrationAwsAvailableLogsServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/integration_aws_available_logs_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogIntegrationAwsAvailableLogsServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_aws_available_logs_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/integration_aws_available_logs_services datadog_integration_aws_available_logs_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogIntegrationAwsAvailableLogsServicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogIntegrationAwsAvailableLogsServicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_aws_available_logs_services',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.17.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_logs_services - computed: true, optional: false, required: false
  public get awsLogsServices() {
    return this.getListAttribute('aws_logs_services');
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
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
