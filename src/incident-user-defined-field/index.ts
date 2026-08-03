/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IncidentUserDefinedFieldConfig extends cdktn.TerraformMetaArguments {
  /**
  * The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#category IncidentUserDefinedField#category}
  */
  readonly category?: string;
  /**
  * The default value for the field. Must be one of the valid values when `valid_values` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#default_value IncidentUserDefinedField#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#display_name IncidentUserDefinedField#display_name}
  */
  readonly displayName?: string;
  /**
  * The ID of the incident type this field is associated with. Changing the incident type forces a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#incident_type IncidentUserDefinedField#incident_type}
  */
  readonly incidentType: string;
  /**
  * The unique identifier of the field. Must start with a letter or digit and contain only letters, digits, underscores, or periods. Changing the name forces a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#name IncidentUserDefinedField#name}
  */
  readonly name: string;
  /**
  * A decimal string representing the field's display order in the UI. Assigned by the server when not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#ordinal IncidentUserDefinedField#ordinal}
  */
  readonly ordinal?: string;
  /**
  * When true, users must fill out this field on incidents. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#required IncidentUserDefinedField#required}
  */
  readonly required?: boolean | cdktn.IResolvable;
  /**
  * For metric tag-type fields only, the metric tag key that powers the autocomplete options. Changing the tag key forces a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#tag_key IncidentUserDefinedField#tag_key}
  */
  readonly tagKey?: string;
  /**
  * The data type of the field. Changing the type forces a new resource. Valid values are `dropdown`, `multiselect`, `textbox`, `textarray`, `metrictag`, `autocomplete`, `number`, `datetime`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#type IncidentUserDefinedField#type}
  */
  readonly type: string;
  /**
  * valid_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#valid_value IncidentUserDefinedField#valid_value}
  */
  readonly validValue?: IncidentUserDefinedFieldValidValue[] | cdktn.IResolvable;
}
export interface IncidentUserDefinedFieldMetadata {
}

export function incidentUserDefinedFieldMetadataToTerraform(struct?: IncidentUserDefinedFieldMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function incidentUserDefinedFieldMetadataToHclTerraform(struct?: IncidentUserDefinedFieldMetadata): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class IncidentUserDefinedFieldMetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IncidentUserDefinedFieldMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IncidentUserDefinedFieldMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // search_limit_param - computed: true, optional: false, required: false
  public get searchLimitParam() {
    return this.getStringAttribute('search_limit_param');
  }

  // search_params - computed: true, optional: false, required: false
  private _searchParams = new cdktn.StringMap(this, "search_params");
  public get searchParams() {
    return this._searchParams;
  }

  // search_query_param - computed: true, optional: false, required: false
  public get searchQueryParam() {
    return this.getStringAttribute('search_query_param');
  }

  // search_result_path - computed: true, optional: false, required: false
  public get searchResultPath() {
    return this.getStringAttribute('search_result_path');
  }

  // search_url - computed: true, optional: false, required: false
  public get searchUrl() {
    return this.getStringAttribute('search_url');
  }
}
export interface IncidentUserDefinedFieldValidValue {
  /**
  * A detailed description of the valid value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#description IncidentUserDefinedField#description}
  */
  readonly description?: string;
  /**
  * The human-readable display name for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#display_name IncidentUserDefinedField#display_name}
  */
  readonly displayName: string;
  /**
  * A short description of the valid value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#short_description IncidentUserDefinedField#short_description}
  */
  readonly shortDescription?: string;
  /**
  * The identifier that is stored when this option is selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#value IncidentUserDefinedField#value}
  */
  readonly value: string;
}

export function incidentUserDefinedFieldValidValueToTerraform(struct?: IncidentUserDefinedFieldValidValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    short_description: cdktn.stringToTerraform(struct!.shortDescription),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function incidentUserDefinedFieldValidValueToHclTerraform(struct?: IncidentUserDefinedFieldValidValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    short_description: {
      value: cdktn.stringToHclTerraform(struct!.shortDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IncidentUserDefinedFieldValidValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): IncidentUserDefinedFieldValidValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._shortDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortDescription = this._shortDescription;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IncidentUserDefinedFieldValidValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._shortDescription = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._shortDescription = value.shortDescription;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // short_description - computed: true, optional: true, required: false
  private _shortDescription?: string; 
  public get shortDescription() {
    return this.getStringAttribute('short_description');
  }
  public set shortDescription(value: string) {
    this._shortDescription = value;
  }
  public resetShortDescription() {
    this._shortDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortDescriptionInput() {
    return this._shortDescription;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IncidentUserDefinedFieldValidValueList extends cdktn.ComplexList {
  public internalValue? : IncidentUserDefinedFieldValidValue[] | cdktn.IResolvable

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
  public get(index: number): IncidentUserDefinedFieldValidValueOutputReference {
    return new IncidentUserDefinedFieldValidValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field datadog_incident_user_defined_field}
*/
export class IncidentUserDefinedField extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_incident_user_defined_field";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IncidentUserDefinedField resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncidentUserDefinedField to import
  * @param importFromId The id of the existing IncidentUserDefinedField that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncidentUserDefinedField to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_incident_user_defined_field", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_field datadog_incident_user_defined_field} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncidentUserDefinedFieldConfig
  */
  public constructor(scope: Construct, id: string, config: IncidentUserDefinedFieldConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_incident_user_defined_field',
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
    this._category = config.category;
    this._defaultValue = config.defaultValue;
    this._displayName = config.displayName;
    this._incidentType = config.incidentType;
    this._name = config.name;
    this._ordinal = config.ordinal;
    this._required = config.required;
    this._tagKey = config.tagKey;
    this._type = config.type;
    this._validValue.internalValue = config.validValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getStringAttribute('deleted');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incident_type - computed: false, optional: false, required: true
  private _incidentType?: string; 
  public get incidentType() {
    return this.getStringAttribute('incident_type');
  }
  public set incidentType(value: string) {
    this._incidentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTypeInput() {
    return this._incidentType;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new IncidentUserDefinedFieldMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
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

  // ordinal - computed: true, optional: true, required: false
  private _ordinal?: string; 
  public get ordinal() {
    return this.getStringAttribute('ordinal');
  }
  public set ordinal(value: string) {
    this._ordinal = value;
  }
  public resetOrdinal() {
    this._ordinal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalInput() {
    return this._ordinal;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktn.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktn.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // reserved - computed: true, optional: false, required: false
  public get reserved() {
    return this.getBooleanAttribute('reserved');
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
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

  // valid_value - computed: false, optional: true, required: false
  private _validValue = new IncidentUserDefinedFieldValidValueList(this, "valid_value", true);
  public get validValue() {
    return this._validValue;
  }
  public putValidValue(value: IncidentUserDefinedFieldValidValue[] | cdktn.IResolvable) {
    this._validValue.internalValue = value;
  }
  public resetValidValue() {
    this._validValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validValueInput() {
    return this._validValue.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktn.stringToTerraform(this._category),
      default_value: cdktn.stringToTerraform(this._defaultValue),
      display_name: cdktn.stringToTerraform(this._displayName),
      incident_type: cdktn.stringToTerraform(this._incidentType),
      name: cdktn.stringToTerraform(this._name),
      ordinal: cdktn.stringToTerraform(this._ordinal),
      required: cdktn.booleanToTerraform(this._required),
      tag_key: cdktn.stringToTerraform(this._tagKey),
      type: cdktn.stringToTerraform(this._type),
      valid_value: cdktn.listMapper(incidentUserDefinedFieldValidValueToTerraform, true)(this._validValue.internalValue),
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
      default_value: {
        value: cdktn.stringToHclTerraform(this._defaultValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incident_type: {
        value: cdktn.stringToHclTerraform(this._incidentType),
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
      ordinal: {
        value: cdktn.stringToHclTerraform(this._ordinal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      required: {
        value: cdktn.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_key: {
        value: cdktn.stringToHclTerraform(this._tagKey),
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
      valid_value: {
        value: cdktn.listMapperHcl(incidentUserDefinedFieldValidValueToHclTerraform, true)(this._validValue.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IncidentUserDefinedFieldValidValueList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
