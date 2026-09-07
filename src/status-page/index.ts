/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StatusPageConfig extends cdktn.TerraformMetaArguments {
  /**
  * The company logo displayed on the status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#company_logo StatusPage#company_logo}
  */
  readonly companyLogo?: string;
  /**
  * The subdomain prefix used to build the status page's URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#domain_prefix StatusPage#domain_prefix}
  */
  readonly domainPrefix: string;
  /**
  * The header image included in subscriber emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#email_header_image StatusPage#email_header_image}
  */
  readonly emailHeaderImage?: string;
  /**
  * The favicon displayed for the status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#favicon StatusPage#favicon}
  */
  readonly favicon?: string;
  /**
  * The name of the status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#name StatusPage#name}
  */
  readonly name: string;
  /**
  * The icon used for the status page's Slack app integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_app_icon StatusPage#slack_app_icon}
  */
  readonly slackAppIcon?: string;
  /**
  * Whether Slack subscriber notifications are enabled for the status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#slack_subscriptions_enabled StatusPage#slack_subscriptions_enabled}
  */
  readonly slackSubscriptionsEnabled?: boolean | cdktn.IResolvable;
  /**
  * Whether subscriber notifications are enabled for the status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#subscriptions_enabled StatusPage#subscriptions_enabled}
  */
  readonly subscriptionsEnabled?: boolean | cdktn.IResolvable;
  /**
  * The type of the status page. Valid values are: public, internal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#type StatusPage#type}
  */
  readonly type: string;
  /**
  * How component statuses are visualized on the page. Valid values are: bars_and_uptime_percentage, bars_only, component_name_only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#visualization_type StatusPage#visualization_type}
  */
  readonly visualizationType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page datadog_status_page}
*/
export class StatusPage extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_status_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StatusPage resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatusPage to import
  * @param importFromId The id of the existing StatusPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatusPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_status_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page datadog_status_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatusPageConfig
  */
  public constructor(scope: Construct, id: string, config: StatusPageConfig) {
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
    this._companyLogo = config.companyLogo;
    this._domainPrefix = config.domainPrefix;
    this._emailHeaderImage = config.emailHeaderImage;
    this._favicon = config.favicon;
    this._name = config.name;
    this._slackAppIcon = config.slackAppIcon;
    this._slackSubscriptionsEnabled = config.slackSubscriptionsEnabled;
    this._subscriptionsEnabled = config.subscriptionsEnabled;
    this._type = config.type;
    this._visualizationType = config.visualizationType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // company_logo - computed: true, optional: true, required: false
  private _companyLogo?: string; 
  public get companyLogo() {
    return this.getStringAttribute('company_logo');
  }
  public set companyLogo(value: string) {
    this._companyLogo = value;
  }
  public resetCompanyLogo() {
    this._companyLogo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyLogoInput() {
    return this._companyLogo;
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

  // domain_prefix - computed: false, optional: false, required: true
  private _domainPrefix?: string; 
  public get domainPrefix() {
    return this.getStringAttribute('domain_prefix');
  }
  public set domainPrefix(value: string) {
    this._domainPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainPrefixInput() {
    return this._domainPrefix;
  }

  // email_header_image - computed: true, optional: true, required: false
  private _emailHeaderImage?: string; 
  public get emailHeaderImage() {
    return this.getStringAttribute('email_header_image');
  }
  public set emailHeaderImage(value: string) {
    this._emailHeaderImage = value;
  }
  public resetEmailHeaderImage() {
    this._emailHeaderImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailHeaderImageInput() {
    return this._emailHeaderImage;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // favicon - computed: true, optional: true, required: false
  private _favicon?: string; 
  public get favicon() {
    return this.getStringAttribute('favicon');
  }
  public set favicon(value: string) {
    this._favicon = value;
  }
  public resetFavicon() {
    this._favicon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faviconInput() {
    return this._favicon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
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

  // page_url - computed: true, optional: false, required: false
  public get pageUrl() {
    return this.getStringAttribute('page_url');
  }

  // slack_app_icon - computed: true, optional: true, required: false
  private _slackAppIcon?: string; 
  public get slackAppIcon() {
    return this.getStringAttribute('slack_app_icon');
  }
  public set slackAppIcon(value: string) {
    this._slackAppIcon = value;
  }
  public resetSlackAppIcon() {
    this._slackAppIcon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackAppIconInput() {
    return this._slackAppIcon;
  }

  // slack_subscriptions_enabled - computed: true, optional: true, required: false
  private _slackSubscriptionsEnabled?: boolean | cdktn.IResolvable; 
  public get slackSubscriptionsEnabled() {
    return this.getBooleanAttribute('slack_subscriptions_enabled');
  }
  public set slackSubscriptionsEnabled(value: boolean | cdktn.IResolvable) {
    this._slackSubscriptionsEnabled = value;
  }
  public resetSlackSubscriptionsEnabled() {
    this._slackSubscriptionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackSubscriptionsEnabledInput() {
    return this._slackSubscriptionsEnabled;
  }

  // subscriptions_enabled - computed: true, optional: true, required: false
  private _subscriptionsEnabled?: boolean | cdktn.IResolvable; 
  public get subscriptionsEnabled() {
    return this.getBooleanAttribute('subscriptions_enabled');
  }
  public set subscriptionsEnabled(value: boolean | cdktn.IResolvable) {
    this._subscriptionsEnabled = value;
  }
  public resetSubscriptionsEnabled() {
    this._subscriptionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionsEnabledInput() {
    return this._subscriptionsEnabled;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // visualization_type - computed: false, optional: false, required: true
  private _visualizationType?: string; 
  public get visualizationType() {
    return this.getStringAttribute('visualization_type');
  }
  public set visualizationType(value: string) {
    this._visualizationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationTypeInput() {
    return this._visualizationType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      company_logo: cdktn.stringToTerraform(this._companyLogo),
      domain_prefix: cdktn.stringToTerraform(this._domainPrefix),
      email_header_image: cdktn.stringToTerraform(this._emailHeaderImage),
      favicon: cdktn.stringToTerraform(this._favicon),
      name: cdktn.stringToTerraform(this._name),
      slack_app_icon: cdktn.stringToTerraform(this._slackAppIcon),
      slack_subscriptions_enabled: cdktn.booleanToTerraform(this._slackSubscriptionsEnabled),
      subscriptions_enabled: cdktn.booleanToTerraform(this._subscriptionsEnabled),
      type: cdktn.stringToTerraform(this._type),
      visualization_type: cdktn.stringToTerraform(this._visualizationType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      company_logo: {
        value: cdktn.stringToHclTerraform(this._companyLogo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_prefix: {
        value: cdktn.stringToHclTerraform(this._domainPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_header_image: {
        value: cdktn.stringToHclTerraform(this._emailHeaderImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      favicon: {
        value: cdktn.stringToHclTerraform(this._favicon),
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
      slack_app_icon: {
        value: cdktn.stringToHclTerraform(this._slackAppIcon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slack_subscriptions_enabled: {
        value: cdktn.booleanToHclTerraform(this._slackSubscriptionsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subscriptions_enabled: {
        value: cdktn.booleanToHclTerraform(this._subscriptionsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visualization_type: {
        value: cdktn.stringToHclTerraform(this._visualizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
