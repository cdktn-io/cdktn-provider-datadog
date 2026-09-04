/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StatusPageDegradationTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * The components affected by a degradation created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#components_affected StatusPageDegradationTemplate#components_affected}
  */
  readonly componentsAffected?: StatusPageDegradationTemplateComponentsAffected[] | cdktn.IResolvable;
  /**
  * The title used for a degradation created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#degradation_title StatusPageDegradationTemplate#degradation_title}
  */
  readonly degradationTitle?: string;
  /**
  * The name of the degradation template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#name StatusPageDegradationTemplate#name}
  */
  readonly name: string;
  /**
  * The ID of the status page this degradation template belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#page_id StatusPageDegradationTemplate#page_id}
  */
  readonly pageId: string;
  /**
  * The pre-filled updates for a degradation created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#updates StatusPageDegradationTemplate#updates}
  */
  readonly updates?: StatusPageDegradationTemplateUpdates[] | cdktn.IResolvable;
}
export interface StatusPageDegradationTemplateComponentsAffected {
  /**
  * The ID of the affected component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#id StatusPageDegradationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the affected component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#name StatusPageDegradationTemplate#name}
  */
  readonly name?: string;
  /**
  * The pre-filled status for this component. Valid values are: operational, degraded, partial_outage, major_outage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#status StatusPageDegradationTemplate#status}
  */
  readonly status: string;
}

export function statusPageDegradationTemplateComponentsAffectedToTerraform(struct?: StatusPageDegradationTemplateComponentsAffected | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function statusPageDegradationTemplateComponentsAffectedToHclTerraform(struct?: StatusPageDegradationTemplateComponentsAffected | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatusPageDegradationTemplateComponentsAffectedOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StatusPageDegradationTemplateComponentsAffected | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatusPageDegradationTemplateComponentsAffected | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._status = value.status;
    }
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class StatusPageDegradationTemplateComponentsAffectedList extends cdktn.ComplexList {
  public internalValue? : StatusPageDegradationTemplateComponentsAffected[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StatusPageDegradationTemplateComponentsAffectedOutputReference {
    return new StatusPageDegradationTemplateComponentsAffectedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatusPageDegradationTemplateUpdates {
  /**
  * The pre-filled message for this update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#message StatusPageDegradationTemplate#message}
  */
  readonly message?: string;
  /**
  * The pre-filled degradation status for this update. Valid values are: investigating, identified, monitoring, resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#status StatusPageDegradationTemplate#status}
  */
  readonly status: string;
}

export function statusPageDegradationTemplateUpdatesToTerraform(struct?: StatusPageDegradationTemplateUpdates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    message: cdktn.stringToTerraform(struct!.message),
    status: cdktn.stringToTerraform(struct!.status),
  }
}


export function statusPageDegradationTemplateUpdatesToHclTerraform(struct?: StatusPageDegradationTemplateUpdates | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    message: {
      value: cdktn.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktn.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatusPageDegradationTemplateUpdatesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StatusPageDegradationTemplateUpdates | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatusPageDegradationTemplateUpdates | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._status = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._status = value.status;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class StatusPageDegradationTemplateUpdatesList extends cdktn.ComplexList {
  public internalValue? : StatusPageDegradationTemplateUpdates[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StatusPageDegradationTemplateUpdatesOutputReference {
    return new StatusPageDegradationTemplateUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template datadog_status_page_degradation_template}
*/
export class StatusPageDegradationTemplate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_status_page_degradation_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatusPageDegradationTemplate to import
  * @param importFromId The id of the existing StatusPageDegradationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatusPageDegradationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_status_page_degradation_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template datadog_status_page_degradation_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatusPageDegradationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: StatusPageDegradationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_status_page_degradation_template',
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
    this._componentsAffected.internalValue = config.componentsAffected;
    this._degradationTitle = config.degradationTitle;
    this._name = config.name;
    this._pageId = config.pageId;
    this._updates.internalValue = config.updates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // components_affected - computed: false, optional: true, required: false
  private _componentsAffected = new StatusPageDegradationTemplateComponentsAffectedList(this, "components_affected", false);
  public get componentsAffected() {
    return this._componentsAffected;
  }
  public putComponentsAffected(value: StatusPageDegradationTemplateComponentsAffected[] | cdktn.IResolvable) {
    this._componentsAffected.internalValue = value;
  }
  public resetComponentsAffected() {
    this._componentsAffected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsAffectedInput() {
    return this._componentsAffected.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // degradation_title - computed: false, optional: true, required: false
  private _degradationTitle?: string; 
  public get degradationTitle() {
    return this.getStringAttribute('degradation_title');
  }
  public set degradationTitle(value: string) {
    this._degradationTitle = value;
  }
  public resetDegradationTitle() {
    this._degradationTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get degradationTitleInput() {
    return this._degradationTitle;
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

  // page_id - computed: false, optional: false, required: true
  private _pageId?: string; 
  public get pageId() {
    return this.getStringAttribute('page_id');
  }
  public set pageId(value: string) {
    this._pageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageIdInput() {
    return this._pageId;
  }

  // updates - computed: false, optional: true, required: false
  private _updates = new StatusPageDegradationTemplateUpdatesList(this, "updates", false);
  public get updates() {
    return this._updates;
  }
  public putUpdates(value: StatusPageDegradationTemplateUpdates[] | cdktn.IResolvable) {
    this._updates.internalValue = value;
  }
  public resetUpdates() {
    this._updates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatesInput() {
    return this._updates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      components_affected: cdktn.listMapper(statusPageDegradationTemplateComponentsAffectedToTerraform, false)(this._componentsAffected.internalValue),
      degradation_title: cdktn.stringToTerraform(this._degradationTitle),
      name: cdktn.stringToTerraform(this._name),
      page_id: cdktn.stringToTerraform(this._pageId),
      updates: cdktn.listMapper(statusPageDegradationTemplateUpdatesToTerraform, false)(this._updates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      components_affected: {
        value: cdktn.listMapperHcl(statusPageDegradationTemplateComponentsAffectedToHclTerraform, false)(this._componentsAffected.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatusPageDegradationTemplateComponentsAffectedList",
      },
      degradation_title: {
        value: cdktn.stringToHclTerraform(this._degradationTitle),
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
      page_id: {
        value: cdktn.stringToHclTerraform(this._pageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updates: {
        value: cdktn.listMapperHcl(statusPageDegradationTemplateUpdatesToHclTerraform, false)(this._updates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatusPageDegradationTemplateUpdatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
