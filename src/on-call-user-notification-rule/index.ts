/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OnCallUserNotificationRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * Notification category to associate the rule with. Valid values are `high_urgency`, `low_urgency`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#category OnCallUserNotificationRule#category}
  */
  readonly category: string;
  /**
  * ID of the notification channel to associate the notification rule with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#channel_id OnCallUserNotificationRule#channel_id}
  */
  readonly channelId: string;
  /**
  * Number of minutes to elapse before this rule is evaluated.  `0` indicates immediate evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#delay_minutes OnCallUserNotificationRule#delay_minutes}
  */
  readonly delayMinutes: number;
  /**
  * ID of the user to associate the notification rule with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#user_id OnCallUserNotificationRule#user_id}
  */
  readonly userId: string;
  /**
  * phone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#phone OnCallUserNotificationRule#phone}
  */
  readonly phone?: OnCallUserNotificationRulePhone;
}
export interface OnCallUserNotificationRulePhone {
  /**
  * Specifies the method in which a phone is used in a notification rule. Valid values are `sms`, `voice`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#method OnCallUserNotificationRule#method}
  */
  readonly method?: string;
}

export function onCallUserNotificationRulePhoneToTerraform(struct?: OnCallUserNotificationRulePhone | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
  }
}


export function onCallUserNotificationRulePhoneToHclTerraform(struct?: OnCallUserNotificationRulePhone | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OnCallUserNotificationRulePhoneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OnCallUserNotificationRulePhone | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnCallUserNotificationRulePhone | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule datadog_on_call_user_notification_rule}
*/
export class OnCallUserNotificationRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_on_call_user_notification_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OnCallUserNotificationRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OnCallUserNotificationRule to import
  * @param importFromId The id of the existing OnCallUserNotificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OnCallUserNotificationRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_on_call_user_notification_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/resources/on_call_user_notification_rule datadog_on_call_user_notification_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OnCallUserNotificationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: OnCallUserNotificationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_on_call_user_notification_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.8.0',
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
    this._category = config.category;
    this._channelId = config.channelId;
    this._delayMinutes = config.delayMinutes;
    this._userId = config.userId;
    this._phone.internalValue = config.phone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // channel_id - computed: false, optional: false, required: true
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // delay_minutes - computed: false, optional: false, required: true
  private _delayMinutes?: number; 
  public get delayMinutes() {
    return this.getNumberAttribute('delay_minutes');
  }
  public set delayMinutes(value: number) {
    this._delayMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delayMinutesInput() {
    return this._delayMinutes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // phone - computed: false, optional: true, required: false
  private _phone = new OnCallUserNotificationRulePhoneOutputReference(this, "phone");
  public get phone() {
    return this._phone;
  }
  public putPhone(value: OnCallUserNotificationRulePhone) {
    this._phone.internalValue = value;
  }
  public resetPhone() {
    this._phone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktn.stringToTerraform(this._category),
      channel_id: cdktn.stringToTerraform(this._channelId),
      delay_minutes: cdktn.numberToTerraform(this._delayMinutes),
      user_id: cdktn.stringToTerraform(this._userId),
      phone: onCallUserNotificationRulePhoneToTerraform(this._phone.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktn.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_id: {
        value: cdktn.stringToHclTerraform(this._channelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_minutes: {
        value: cdktn.numberToHclTerraform(this._delayMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_id: {
        value: cdktn.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone: {
        value: onCallUserNotificationRulePhoneToHclTerraform(this._phone.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OnCallUserNotificationRulePhone",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
