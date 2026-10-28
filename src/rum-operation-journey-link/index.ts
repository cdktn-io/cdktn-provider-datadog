/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation_journey_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RumOperationJourneyLinkConfig extends cdktn.TerraformMetaArguments {
  /**
  * ID of the journey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation_journey_link#journey_id RumOperationJourneyLink#journey_id}
  */
  readonly journeyId: string;
  /**
  * ID of the RUM operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation_journey_link#operation_id RumOperationJourneyLink#operation_id}
  */
  readonly operationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation_journey_link datadog_rum_operation_journey_link}
*/
export class RumOperationJourneyLink extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_rum_operation_journey_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RumOperationJourneyLink resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RumOperationJourneyLink to import
  * @param importFromId The id of the existing RumOperationJourneyLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation_journey_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RumOperationJourneyLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_rum_operation_journey_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/rum_operation_journey_link datadog_rum_operation_journey_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RumOperationJourneyLinkConfig
  */
  public constructor(scope: Construct, id: string, config: RumOperationJourneyLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_rum_operation_journey_link',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.27.0',
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
    this._journeyId = config.journeyId;
    this._operationId = config.operationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // journey_id - computed: false, optional: false, required: true
  private _journeyId?: string; 
  public get journeyId() {
    return this.getStringAttribute('journey_id');
  }
  public set journeyId(value: string) {
    this._journeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get journeyIdInput() {
    return this._journeyId;
  }

  // operation_id - computed: false, optional: false, required: true
  private _operationId?: string; 
  public get operationId() {
    return this.getStringAttribute('operation_id');
  }
  public set operationId(value: string) {
    this._operationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationIdInput() {
    return this._operationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      journey_id: cdktn.stringToTerraform(this._journeyId),
      operation_id: cdktn.stringToTerraform(this._operationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      journey_id: {
        value: cdktn.stringToHclTerraform(this._journeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_id: {
        value: cdktn.stringToHclTerraform(this._operationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
