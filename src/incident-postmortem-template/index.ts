/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IncidentPostmortemTemplateConfig extends cdktn.TerraformMetaArguments {
  /**
  * The templated content of the postmortem, supporting Markdown and incident template variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template#content IncidentPostmortemTemplate#content}
  */
  readonly content?: string;
  /**
  * The ID of the incident type this template is associated with. Immutable after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template#incident_type IncidentPostmortemTemplate#incident_type}
  */
  readonly incidentType: string;
  /**
  * Whether this template is a default for its incident type. The API stores a timestamp; the effective default for an incident type is the template with the most recent default timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template#is_default IncidentPostmortemTemplate#is_default}
  */
  readonly isDefault?: boolean | cdktn.IResolvable;
  /**
  * The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template#location IncidentPostmortemTemplate#location}
  */
  readonly location?: string;
  /**
  * The name of the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template#name IncidentPostmortemTemplate#name}
  */
  readonly name: string;
  /**
  * confluence_postmortem_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template#confluence_postmortem_settings IncidentPostmortemTemplate#confluence_postmortem_settings}
  */
  readonly confluencePostmortemSettings?: IncidentPostmortemTemplateConfluencePostmortemSettings;
  /**
  * google_docs_postmortem_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template#google_docs_postmortem_settings IncidentPostmortemTemplate#google_docs_postmortem_settings}
  */
  readonly googleDocsPostmortemSettings?: IncidentPostmortemTemplateGoogleDocsPostmortemSettings;
}
export interface IncidentPostmortemTemplateConfluencePostmortemSettings {
  /**
  * The ID of the Confluence account, a Datadog connected-account UUID (e.g. `3f9b1c2a-8d4e-4a11-9c2f-0b7e5d6a1f23`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template#account_id IncidentPostmortemTemplate#account_id}
  */
  readonly accountId?: string;
  /**
  * The ID of the parent Confluence page under which postmortems are created: a numeric page ID (e.g. `393217`), not a page path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template#parent_id IncidentPostmortemTemplate#parent_id}
  */
  readonly parentId?: string;
  /**
  * The Confluence space key (e.g. `ENG`), not a numeric space ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template#space_id IncidentPostmortemTemplate#space_id}
  */
  readonly spaceId?: string;
}

export function incidentPostmortemTemplateConfluencePostmortemSettingsToTerraform(struct?: IncidentPostmortemTemplateConfluencePostmortemSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    parent_id: cdktn.stringToTerraform(struct!.parentId),
    space_id: cdktn.stringToTerraform(struct!.spaceId),
  }
}


export function incidentPostmortemTemplateConfluencePostmortemSettingsToHclTerraform(struct?: IncidentPostmortemTemplateConfluencePostmortemSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_id: {
      value: cdktn.stringToHclTerraform(struct!.parentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_id: {
      value: cdktn.stringToHclTerraform(struct!.spaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IncidentPostmortemTemplateConfluencePostmortemSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._parentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentId = this._parentId;
    }
    if (this._spaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceId = this._spaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IncidentPostmortemTemplateConfluencePostmortemSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._parentId = undefined;
      this._spaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._parentId = value.parentId;
      this._spaceId = value.spaceId;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // space_id - computed: false, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }
}
export interface IncidentPostmortemTemplateGoogleDocsPostmortemSettings {
  /**
  * The ID of the Google Drive account, a Datadog connected-account UUID (e.g. `a1b2c3d4-e5f6-4789-8abc-1234567890ab`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template#account_id IncidentPostmortemTemplate#account_id}
  */
  readonly accountId?: string;
  /**
  * The Google Drive folder ID where postmortems are created, taken from the folder URL (e.g. `1eCqLAKQqRHt49J2aqQLGUcnPMzGHkt2B`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template#parent_folder_id IncidentPostmortemTemplate#parent_folder_id}
  */
  readonly parentFolderId?: string;
}

export function incidentPostmortemTemplateGoogleDocsPostmortemSettingsToTerraform(struct?: IncidentPostmortemTemplateGoogleDocsPostmortemSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    parent_folder_id: cdktn.stringToTerraform(struct!.parentFolderId),
  }
}


export function incidentPostmortemTemplateGoogleDocsPostmortemSettingsToHclTerraform(struct?: IncidentPostmortemTemplateGoogleDocsPostmortemSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id: {
      value: cdktn.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_folder_id: {
      value: cdktn.stringToHclTerraform(struct!.parentFolderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IncidentPostmortemTemplateGoogleDocsPostmortemSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._parentFolderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentFolderId = this._parentFolderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IncidentPostmortemTemplateGoogleDocsPostmortemSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._parentFolderId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._parentFolderId = value.parentFolderId;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // parent_folder_id - computed: false, optional: true, required: false
  private _parentFolderId?: string; 
  public get parentFolderId() {
    return this.getStringAttribute('parent_folder_id');
  }
  public set parentFolderId(value: string) {
    this._parentFolderId = value;
  }
  public resetParentFolderId() {
    this._parentFolderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentFolderIdInput() {
    return this._parentFolderId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template datadog_incident_postmortem_template}
*/
export class IncidentPostmortemTemplate extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_incident_postmortem_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IncidentPostmortemTemplate resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncidentPostmortemTemplate to import
  * @param importFromId The id of the existing IncidentPostmortemTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncidentPostmortemTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_incident_postmortem_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/incident_postmortem_template datadog_incident_postmortem_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncidentPostmortemTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: IncidentPostmortemTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_incident_postmortem_template',
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
    this._content = config.content;
    this._incidentType = config.incidentType;
    this._isDefault = config.isDefault;
    this._location = config.location;
    this._name = config.name;
    this._confluencePostmortemSettings.internalValue = config.confluencePostmortemSettings;
    this._googleDocsPostmortemSettings.internalValue = config.googleDocsPostmortemSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktn.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktn.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // last_modified_by_user - computed: true, optional: false, required: false
  public get lastModifiedByUser() {
    return this.getStringAttribute('last_modified_by_user');
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // confluence_postmortem_settings - computed: false, optional: true, required: false
  private _confluencePostmortemSettings = new IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference(this, "confluence_postmortem_settings");
  public get confluencePostmortemSettings() {
    return this._confluencePostmortemSettings;
  }
  public putConfluencePostmortemSettings(value: IncidentPostmortemTemplateConfluencePostmortemSettings) {
    this._confluencePostmortemSettings.internalValue = value;
  }
  public resetConfluencePostmortemSettings() {
    this._confluencePostmortemSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluencePostmortemSettingsInput() {
    return this._confluencePostmortemSettings.internalValue;
  }

  // google_docs_postmortem_settings - computed: false, optional: true, required: false
  private _googleDocsPostmortemSettings = new IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference(this, "google_docs_postmortem_settings");
  public get googleDocsPostmortemSettings() {
    return this._googleDocsPostmortemSettings;
  }
  public putGoogleDocsPostmortemSettings(value: IncidentPostmortemTemplateGoogleDocsPostmortemSettings) {
    this._googleDocsPostmortemSettings.internalValue = value;
  }
  public resetGoogleDocsPostmortemSettings() {
    this._googleDocsPostmortemSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleDocsPostmortemSettingsInput() {
    return this._googleDocsPostmortemSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktn.stringToTerraform(this._content),
      incident_type: cdktn.stringToTerraform(this._incidentType),
      is_default: cdktn.booleanToTerraform(this._isDefault),
      location: cdktn.stringToTerraform(this._location),
      name: cdktn.stringToTerraform(this._name),
      confluence_postmortem_settings: incidentPostmortemTemplateConfluencePostmortemSettingsToTerraform(this._confluencePostmortemSettings.internalValue),
      google_docs_postmortem_settings: incidentPostmortemTemplateGoogleDocsPostmortemSettingsToTerraform(this._googleDocsPostmortemSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktn.stringToHclTerraform(this._content),
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
      is_default: {
        value: cdktn.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
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
      confluence_postmortem_settings: {
        value: incidentPostmortemTemplateConfluencePostmortemSettingsToHclTerraform(this._confluencePostmortemSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IncidentPostmortemTemplateConfluencePostmortemSettings",
      },
      google_docs_postmortem_settings: {
        value: incidentPostmortemTemplateGoogleDocsPostmortemSettingsToHclTerraform(this._googleDocsPostmortemSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IncidentPostmortemTemplateGoogleDocsPostmortemSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
