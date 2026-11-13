/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/rum_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RumApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether to create the default retention filters (`Sessions with errors` and `Sessions`, both at 100%) when the application is created. Defaults to `true` on the API side. Set to `false` to create the application without them, such as when you manage its retention filters in the same configuration. Permanent retention filters are always created. This setting only applies during application creation. Changing it afterward doesn't add or remove filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/rum_application#create_default_retention_filters RumApplication#create_default_retention_filters}
  */
  readonly createDefaultRetentionFilters?: boolean | cdktn.IResolvable;
  /**
  * Name of the RUM application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/rum_application#name RumApplication#name}
  */
  readonly name: string;
  /**
  * Controls the retention policy for Product Analytics data derived from RUM events. `MAX` enables Product Analytics for the application, and `NONE` disables it. If not set, Datadog picks the value when the application is created. Valid values are `MAX`, `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/rum_application#product_analytics_retention_state RumApplication#product_analytics_retention_state}
  */
  readonly productAnalyticsRetentionState?: string;
  /**
  * Configures which RUM events are processed and stored for the application. `ALL` enables RUM, `ERROR_FOCUSED_MODE` uses the application for Error Tracking only, without RUM, and `NONE` disables RUM event processing. If not set, Datadog uses `ALL` when the application is created. Valid values are `ALL`, `ERROR_FOCUSED_MODE`, `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/rum_application#rum_event_processing_state RumApplication#rum_event_processing_state}
  */
  readonly rumEventProcessingState?: string;
  /**
  * Type of the RUM application. Supported values are `browser`, `ios`, `android`, `react-native`, `flutter`, `roku`, `electron`, `unity`, `kotlin-multiplatform`. Defaults to `"browser"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/rum_application#type RumApplication#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/rum_application datadog_rum_application}
*/
export class RumApplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_rum_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RumApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RumApplication to import
  * @param importFromId The id of the existing RumApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/rum_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RumApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_rum_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/rum_application datadog_rum_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RumApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: RumApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_rum_application',
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
    this._createDefaultRetentionFilters = config.createDefaultRetentionFilters;
    this._name = config.name;
    this._productAnalyticsRetentionState = config.productAnalyticsRetentionState;
    this._rumEventProcessingState = config.rumEventProcessingState;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_id - computed: true, optional: false, required: false
  public get apiKeyId() {
    return this.getNumberAttribute('api_key_id');
  }

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // create_default_retention_filters - computed: false, optional: true, required: false
  private _createDefaultRetentionFilters?: boolean | cdktn.IResolvable; 
  public get createDefaultRetentionFilters() {
    return this.getBooleanAttribute('create_default_retention_filters');
  }
  public set createDefaultRetentionFilters(value: boolean | cdktn.IResolvable) {
    this._createDefaultRetentionFilters = value;
  }
  public resetCreateDefaultRetentionFilters() {
    this._createDefaultRetentionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDefaultRetentionFiltersInput() {
    return this._createDefaultRetentionFilters;
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

  // product_analytics_retention_state - computed: true, optional: true, required: false
  private _productAnalyticsRetentionState?: string; 
  public get productAnalyticsRetentionState() {
    return this.getStringAttribute('product_analytics_retention_state');
  }
  public set productAnalyticsRetentionState(value: string) {
    this._productAnalyticsRetentionState = value;
  }
  public resetProductAnalyticsRetentionState() {
    this._productAnalyticsRetentionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productAnalyticsRetentionStateInput() {
    return this._productAnalyticsRetentionState;
  }

  // rum_event_processing_state - computed: true, optional: true, required: false
  private _rumEventProcessingState?: string; 
  public get rumEventProcessingState() {
    return this.getStringAttribute('rum_event_processing_state');
  }
  public set rumEventProcessingState(value: string) {
    this._rumEventProcessingState = value;
  }
  public resetRumEventProcessingState() {
    this._rumEventProcessingState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rumEventProcessingStateInput() {
    return this._rumEventProcessingState;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_default_retention_filters: cdktn.booleanToTerraform(this._createDefaultRetentionFilters),
      name: cdktn.stringToTerraform(this._name),
      product_analytics_retention_state: cdktn.stringToTerraform(this._productAnalyticsRetentionState),
      rum_event_processing_state: cdktn.stringToTerraform(this._rumEventProcessingState),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_default_retention_filters: {
        value: cdktn.booleanToHclTerraform(this._createDefaultRetentionFilters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_analytics_retention_state: {
        value: cdktn.stringToHclTerraform(this._productAnalyticsRetentionState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rum_event_processing_state: {
        value: cdktn.stringToHclTerraform(this._rumEventProcessingState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
