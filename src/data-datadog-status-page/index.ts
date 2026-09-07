/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatadogStatusPageConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page#id DataDatadogStatusPage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page datadog_status_page}
*/
export class DataDatadogStatusPage extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_status_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatadogStatusPage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogStatusPage to import
  * @param importFromId The id of the existing DataDatadogStatusPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogStatusPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_status_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page datadog_status_page} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogStatusPageConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogStatusPageConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_status_page',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.20.0',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // company_logo - computed: true, optional: false, required: false
  public get companyLogo() {
    return this.getStringAttribute('company_logo');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_domain - computed: true, optional: false, required: false
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }

  // custom_domain_enabled - computed: true, optional: false, required: false
  public get customDomainEnabled() {
    return this.getBooleanAttribute('custom_domain_enabled');
  }

  // domain_prefix - computed: true, optional: false, required: false
  public get domainPrefix() {
    return this.getStringAttribute('domain_prefix');
  }

  // email_header_image - computed: true, optional: false, required: false
  public get emailHeaderImage() {
    return this.getStringAttribute('email_header_image');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // favicon - computed: true, optional: false, required: false
  public get favicon() {
    return this.getStringAttribute('favicon');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // page_url - computed: true, optional: false, required: false
  public get pageUrl() {
    return this.getStringAttribute('page_url');
  }

  // slack_app_icon - computed: true, optional: false, required: false
  public get slackAppIcon() {
    return this.getStringAttribute('slack_app_icon');
  }

  // slack_subscriptions_enabled - computed: true, optional: false, required: false
  public get slackSubscriptionsEnabled() {
    return this.getBooleanAttribute('slack_subscriptions_enabled');
  }

  // subscriptions_enabled - computed: true, optional: false, required: false
  public get subscriptionsEnabled() {
    return this.getBooleanAttribute('subscriptions_enabled');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // visualization_type - computed: true, optional: false, required: false
  public get visualizationType() {
    return this.getStringAttribute('visualization_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
