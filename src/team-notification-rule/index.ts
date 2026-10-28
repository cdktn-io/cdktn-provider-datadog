/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TeamNotificationRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the team that this notification rule belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule#team_id TeamNotificationRule#team_id}
  */
  readonly teamId: string;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule#email TeamNotificationRule#email}
  */
  readonly email?: TeamNotificationRuleEmail;
  /**
  * ms_teams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule#ms_teams TeamNotificationRule#ms_teams}
  */
  readonly msTeams?: TeamNotificationRuleMsTeams;
  /**
  * pagerduty block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule#pagerduty TeamNotificationRule#pagerduty}
  */
  readonly pagerduty?: TeamNotificationRulePagerduty;
  /**
  * servicenow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule#servicenow TeamNotificationRule#servicenow}
  */
  readonly servicenow?: TeamNotificationRuleServicenow;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule#slack TeamNotificationRule#slack}
  */
  readonly slack?: TeamNotificationRuleSlack;
}
export interface TeamNotificationRuleEmail {
  /**
  * Whether to send email notifications to team members when alerts are triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule#enabled TeamNotificationRule#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * A single email address to send notifications to instead of all team members. Requires `enabled` to be `true`. When omitted, notifications are sent to all team members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule#recipient_email TeamNotificationRule#recipient_email}
  */
  readonly recipientEmail?: string;
}

export function teamNotificationRuleEmailToTerraform(struct?: TeamNotificationRuleEmail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    recipient_email: cdktn.stringToTerraform(struct!.recipientEmail),
  }
}


export function teamNotificationRuleEmailToHclTerraform(struct?: TeamNotificationRuleEmail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recipient_email: {
      value: cdktn.stringToHclTerraform(struct!.recipientEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamNotificationRuleEmailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TeamNotificationRuleEmail | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._recipientEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipientEmail = this._recipientEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamNotificationRuleEmail | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._recipientEmail = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._recipientEmail = value.recipientEmail;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // recipient_email - computed: false, optional: true, required: false
  private _recipientEmail?: string; 
  public get recipientEmail() {
    return this.getStringAttribute('recipient_email');
  }
  public set recipientEmail(value: string) {
    this._recipientEmail = value;
  }
  public resetRecipientEmail() {
    this._recipientEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientEmailInput() {
    return this._recipientEmail;
  }
}
export interface TeamNotificationRuleMsTeams {
  /**
  * MS Teams connector name used to route notifications to the appropriate channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule#connector_name TeamNotificationRule#connector_name}
  */
  readonly connectorName?: string;
}

export function teamNotificationRuleMsTeamsToTerraform(struct?: TeamNotificationRuleMsTeams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connector_name: cdktn.stringToTerraform(struct!.connectorName),
  }
}


export function teamNotificationRuleMsTeamsToHclTerraform(struct?: TeamNotificationRuleMsTeams | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connector_name: {
      value: cdktn.stringToHclTerraform(struct!.connectorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamNotificationRuleMsTeamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TeamNotificationRuleMsTeams | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorName = this._connectorName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamNotificationRuleMsTeams | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorName = value.connectorName;
    }
  }

  // connector_name - computed: false, optional: true, required: false
  private _connectorName?: string; 
  public get connectorName() {
    return this.getStringAttribute('connector_name');
  }
  public set connectorName(value: string) {
    this._connectorName = value;
  }
  public resetConnectorName() {
    this._connectorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorNameInput() {
    return this._connectorName;
  }
}
export interface TeamNotificationRulePagerduty {
  /**
  * PagerDuty service name to send incident notifications to. The service name can be found in your PagerDuty service settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule#service_name TeamNotificationRule#service_name}
  */
  readonly serviceName?: string;
}

export function teamNotificationRulePagerdutyToTerraform(struct?: TeamNotificationRulePagerduty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_name: cdktn.stringToTerraform(struct!.serviceName),
  }
}


export function teamNotificationRulePagerdutyToHclTerraform(struct?: TeamNotificationRulePagerduty | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamNotificationRulePagerdutyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TeamNotificationRulePagerduty | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamNotificationRulePagerduty | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface TeamNotificationRuleServicenow {
  /**
  * ServiceNow template handle names to use for notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule#templates TeamNotificationRule#templates}
  */
  readonly templates?: string[];
}

export function teamNotificationRuleServicenowToTerraform(struct?: TeamNotificationRuleServicenow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    templates: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.templates),
  }
}


export function teamNotificationRuleServicenowToHclTerraform(struct?: TeamNotificationRuleServicenow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    templates: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.templates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamNotificationRuleServicenowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TeamNotificationRuleServicenow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templates !== undefined) {
      hasAnyValues = true;
      internalValueResult.templates = this._templates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamNotificationRuleServicenow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._templates = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._templates = value.templates;
    }
  }

  // templates - computed: false, optional: true, required: false
  private _templates?: string[]; 
  public get templates() {
    return this.getListAttribute('templates');
  }
  public set templates(value: string[]) {
    this._templates = value;
  }
  public resetTemplates() {
    this._templates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates;
  }
}
export interface TeamNotificationRuleSlack {
  /**
  * Slack channel name for notifications, without a leading '#'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule#channel TeamNotificationRule#channel}
  */
  readonly channel?: string;
  /**
  * Slack workspace name where the channel is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule#workspace TeamNotificationRule#workspace}
  */
  readonly workspace?: string;
}

export function teamNotificationRuleSlackToTerraform(struct?: TeamNotificationRuleSlack | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel: cdktn.stringToTerraform(struct!.channel),
    workspace: cdktn.stringToTerraform(struct!.workspace),
  }
}


export function teamNotificationRuleSlackToHclTerraform(struct?: TeamNotificationRuleSlack | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel: {
      value: cdktn.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace: {
      value: cdktn.stringToHclTerraform(struct!.workspace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamNotificationRuleSlackOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TeamNotificationRuleSlack | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._workspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamNotificationRuleSlack | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._workspace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._workspace = value.workspace;
    }
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  public resetWorkspace() {
    this._workspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule datadog_team_notification_rule}
*/
export class TeamNotificationRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_team_notification_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TeamNotificationRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamNotificationRule to import
  * @param importFromId The id of the existing TeamNotificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamNotificationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_team_notification_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.27.0/docs/resources/team_notification_rule datadog_team_notification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamNotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TeamNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_team_notification_rule',
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
    this._teamId = config.teamId;
    this._email.internalValue = config.email;
    this._msTeams.internalValue = config.msTeams;
    this._pagerduty.internalValue = config.pagerduty;
    this._servicenow.internalValue = config.servicenow;
    this._slack.internalValue = config.slack;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // email - computed: false, optional: true, required: false
  private _email = new TeamNotificationRuleEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: TeamNotificationRuleEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // ms_teams - computed: false, optional: true, required: false
  private _msTeams = new TeamNotificationRuleMsTeamsOutputReference(this, "ms_teams");
  public get msTeams() {
    return this._msTeams;
  }
  public putMsTeams(value: TeamNotificationRuleMsTeams) {
    this._msTeams.internalValue = value;
  }
  public resetMsTeams() {
    this._msTeams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msTeamsInput() {
    return this._msTeams.internalValue;
  }

  // pagerduty - computed: false, optional: true, required: false
  private _pagerduty = new TeamNotificationRulePagerdutyOutputReference(this, "pagerduty");
  public get pagerduty() {
    return this._pagerduty;
  }
  public putPagerduty(value: TeamNotificationRulePagerduty) {
    this._pagerduty.internalValue = value;
  }
  public resetPagerduty() {
    this._pagerduty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyInput() {
    return this._pagerduty.internalValue;
  }

  // servicenow - computed: false, optional: true, required: false
  private _servicenow = new TeamNotificationRuleServicenowOutputReference(this, "servicenow");
  public get servicenow() {
    return this._servicenow;
  }
  public putServicenow(value: TeamNotificationRuleServicenow) {
    this._servicenow.internalValue = value;
  }
  public resetServicenow() {
    this._servicenow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowInput() {
    return this._servicenow.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new TeamNotificationRuleSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: TeamNotificationRuleSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      team_id: cdktn.stringToTerraform(this._teamId),
      email: teamNotificationRuleEmailToTerraform(this._email.internalValue),
      ms_teams: teamNotificationRuleMsTeamsToTerraform(this._msTeams.internalValue),
      pagerduty: teamNotificationRulePagerdutyToTerraform(this._pagerduty.internalValue),
      servicenow: teamNotificationRuleServicenowToTerraform(this._servicenow.internalValue),
      slack: teamNotificationRuleSlackToTerraform(this._slack.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      team_id: {
        value: cdktn.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: teamNotificationRuleEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TeamNotificationRuleEmail",
      },
      ms_teams: {
        value: teamNotificationRuleMsTeamsToHclTerraform(this._msTeams.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TeamNotificationRuleMsTeams",
      },
      pagerduty: {
        value: teamNotificationRulePagerdutyToHclTerraform(this._pagerduty.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TeamNotificationRulePagerduty",
      },
      servicenow: {
        value: teamNotificationRuleServicenowToHclTerraform(this._servicenow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TeamNotificationRuleServicenow",
      },
      slack: {
        value: teamNotificationRuleSlackToHclTerraform(this._slack.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TeamNotificationRuleSlack",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
