/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_user_notification_channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface OnCallUserNotificationChannelConfig extends cdktn.TerraformMetaArguments {
  /**
  * ID of the user to associate the notification channel with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_user_notification_channel#user_id OnCallUserNotificationChannel#user_id}
  */
  readonly userId: string;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_user_notification_channel#email OnCallUserNotificationChannel#email}
  */
  readonly email?: OnCallUserNotificationChannelEmail;
  /**
  * phone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_user_notification_channel#phone OnCallUserNotificationChannel#phone}
  */
  readonly phone?: OnCallUserNotificationChannelPhone;
}
export interface OnCallUserNotificationChannelEmail {
  /**
  * The e-mail address to be notified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_user_notification_channel#address OnCallUserNotificationChannel#address}
  */
  readonly address?: string;
  /**
  * Preferred content formats for notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_user_notification_channel#formats OnCallUserNotificationChannel#formats}
  */
  readonly formats?: string[];
}

export function onCallUserNotificationChannelEmailToTerraform(struct?: OnCallUserNotificationChannelEmail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address: cdktn.stringToTerraform(struct!.address),
    formats: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.formats),
  }
}


export function onCallUserNotificationChannelEmailToHclTerraform(struct?: OnCallUserNotificationChannelEmail | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address: {
      value: cdktn.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    formats: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.formats),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OnCallUserNotificationChannelEmailOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OnCallUserNotificationChannelEmail | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._formats !== undefined) {
      hasAnyValues = true;
      internalValueResult.formats = this._formats;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnCallUserNotificationChannelEmail | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._formats = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._formats = value.formats;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // formats - computed: false, optional: true, required: false
  private _formats?: string[]; 
  public get formats() {
    return this.getListAttribute('formats');
  }
  public set formats(value: string[]) {
    this._formats = value;
  }
  public resetFormats() {
    this._formats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatsInput() {
    return this._formats;
  }
}
export interface OnCallUserNotificationChannelPhone {
  /**
  * The E-164 formatted phone number (for example, +3371234567)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_user_notification_channel#number OnCallUserNotificationChannel#number}
  */
  readonly number?: string;
}

export function onCallUserNotificationChannelPhoneToTerraform(struct?: OnCallUserNotificationChannelPhone | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    number: cdktn.stringToTerraform(struct!.number),
  }
}


export function onCallUserNotificationChannelPhoneToHclTerraform(struct?: OnCallUserNotificationChannelPhone | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    number: {
      value: cdktn.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OnCallUserNotificationChannelPhoneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OnCallUserNotificationChannelPhone | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OnCallUserNotificationChannelPhone | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_user_notification_channel datadog_on_call_user_notification_channel}
*/
export class OnCallUserNotificationChannel extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_on_call_user_notification_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a OnCallUserNotificationChannel resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OnCallUserNotificationChannel to import
  * @param importFromId The id of the existing OnCallUserNotificationChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_user_notification_channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OnCallUserNotificationChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_on_call_user_notification_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/on_call_user_notification_channel datadog_on_call_user_notification_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OnCallUserNotificationChannelConfig
  */
  public constructor(scope: Construct, id: string, config: OnCallUserNotificationChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_on_call_user_notification_channel',
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
    this._userId = config.userId;
    this._email.internalValue = config.email;
    this._phone.internalValue = config.phone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // email - computed: false, optional: true, required: false
  private _email = new OnCallUserNotificationChannelEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: OnCallUserNotificationChannelEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // phone - computed: false, optional: true, required: false
  private _phone = new OnCallUserNotificationChannelPhoneOutputReference(this, "phone");
  public get phone() {
    return this._phone;
  }
  public putPhone(value: OnCallUserNotificationChannelPhone) {
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
      user_id: cdktn.stringToTerraform(this._userId),
      email: onCallUserNotificationChannelEmailToTerraform(this._email.internalValue),
      phone: onCallUserNotificationChannelPhoneToTerraform(this._phone.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      user_id: {
        value: cdktn.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: onCallUserNotificationChannelEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OnCallUserNotificationChannelEmail",
      },
      phone: {
        value: onCallUserNotificationChannelPhoneToHclTerraform(this._phone.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OnCallUserNotificationChannelPhone",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
