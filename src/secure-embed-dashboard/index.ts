/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecureEmbedDashboardConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the dashboard to create a secure embed for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard#dashboard_id SecureEmbedDashboard#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * The live span for the global time, e.g. `1h`, `4h`, `1d`, `2d`, `1w`. Defaults to `"1h"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard#global_time_live_span SecureEmbedDashboard#global_time_live_span}
  */
  readonly globalTimeLiveSpan?: string;
  /**
  * Whether viewers can change the global time range. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard#global_time_selectable SecureEmbedDashboard#global_time_selectable}
  */
  readonly globalTimeSelectable?: boolean | cdktn.IResolvable;
  /**
  * Status of the secure embed. Valid values are `active` and `paused`. Defaults to `"active"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard#status SecureEmbedDashboard#status}
  */
  readonly status?: string;
  /**
  * Title of the secure embed share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard#title SecureEmbedDashboard#title}
  */
  readonly title: string;
  /**
  * Whether to display the dashboard in high density mode. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard#viewing_preferences_high_density SecureEmbedDashboard#viewing_preferences_high_density}
  */
  readonly viewingPreferencesHighDensity?: boolean | cdktn.IResolvable;
  /**
  * Display theme for the embedded dashboard. Valid values are `system`, `dark`, `light`. Defaults to `"system"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard#viewing_preferences_theme SecureEmbedDashboard#viewing_preferences_theme}
  */
  readonly viewingPreferencesTheme?: string;
  /**
  * selectable_template_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard#selectable_template_vars SecureEmbedDashboard#selectable_template_vars}
  */
  readonly selectableTemplateVars?: SecureEmbedDashboardSelectableTemplateVars[] | cdktn.IResolvable;
}
export interface SecureEmbedDashboardSelectableTemplateVars {
  /**
  * The default values for this template variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard#default_values SecureEmbedDashboard#default_values}
  */
  readonly defaultValues?: string[];
  /**
  * The name of the template variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard#name SecureEmbedDashboard#name}
  */
  readonly name: string;
  /**
  * The tag prefix for this template variable. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard#prefix SecureEmbedDashboard#prefix}
  */
  readonly prefix?: string;
  /**
  * The type of the template variable. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard#type SecureEmbedDashboard#type}
  */
  readonly type?: string;
  /**
  * The visible tag values for this template variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard#visible_tags SecureEmbedDashboard#visible_tags}
  */
  readonly visibleTags?: string[];
}

export function secureEmbedDashboardSelectableTemplateVarsToTerraform(struct?: SecureEmbedDashboardSelectableTemplateVars | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.defaultValues),
    name: cdktn.stringToTerraform(struct!.name),
    prefix: cdktn.stringToTerraform(struct!.prefix),
    type: cdktn.stringToTerraform(struct!.type),
    visible_tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.visibleTags),
  }
}


export function secureEmbedDashboardSelectableTemplateVarsToHclTerraform(struct?: SecureEmbedDashboardSelectableTemplateVars | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.defaultValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktn.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visible_tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.visibleTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureEmbedDashboardSelectableTemplateVarsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): SecureEmbedDashboardSelectableTemplateVars | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValues = this._defaultValues;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._visibleTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibleTags = this._visibleTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureEmbedDashboardSelectableTemplateVars | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValues = undefined;
      this._name = undefined;
      this._prefix = undefined;
      this._type = undefined;
      this._visibleTags = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValues = value.defaultValues;
      this._name = value.name;
      this._prefix = value.prefix;
      this._type = value.type;
      this._visibleTags = value.visibleTags;
    }
  }

  // default_values - computed: true, optional: true, required: false
  private _defaultValues?: string[]; 
  public get defaultValues() {
    return this.getListAttribute('default_values');
  }
  public set defaultValues(value: string[]) {
    this._defaultValues = value;
  }
  public resetDefaultValues() {
    this._defaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues;
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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

  // visible_tags - computed: true, optional: true, required: false
  private _visibleTags?: string[]; 
  public get visibleTags() {
    return this.getListAttribute('visible_tags');
  }
  public set visibleTags(value: string[]) {
    this._visibleTags = value;
  }
  public resetVisibleTags() {
    this._visibleTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleTagsInput() {
    return this._visibleTags;
  }
}

export class SecureEmbedDashboardSelectableTemplateVarsList extends cdktn.ComplexList {
  public internalValue? : SecureEmbedDashboardSelectableTemplateVars[] | cdktn.IResolvable

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
  public get(index: number): SecureEmbedDashboardSelectableTemplateVarsOutputReference {
    return new SecureEmbedDashboardSelectableTemplateVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard datadog_secure_embed_dashboard}
*/
export class SecureEmbedDashboard extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_secure_embed_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecureEmbedDashboard resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecureEmbedDashboard to import
  * @param importFromId The id of the existing SecureEmbedDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecureEmbedDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_secure_embed_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/secure_embed_dashboard datadog_secure_embed_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecureEmbedDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: SecureEmbedDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_secure_embed_dashboard',
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
    this._dashboardId = config.dashboardId;
    this._globalTimeLiveSpan = config.globalTimeLiveSpan;
    this._globalTimeSelectable = config.globalTimeSelectable;
    this._status = config.status;
    this._title = config.title;
    this._viewingPreferencesHighDensity = config.viewingPreferencesHighDensity;
    this._viewingPreferencesTheme = config.viewingPreferencesTheme;
    this._selectableTemplateVars.internalValue = config.selectableTemplateVars;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential - computed: true, optional: false, required: false
  public get credential() {
    return this.getStringAttribute('credential');
  }

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
  }

  // global_time_live_span - computed: true, optional: true, required: false
  private _globalTimeLiveSpan?: string; 
  public get globalTimeLiveSpan() {
    return this.getStringAttribute('global_time_live_span');
  }
  public set globalTimeLiveSpan(value: string) {
    this._globalTimeLiveSpan = value;
  }
  public resetGlobalTimeLiveSpan() {
    this._globalTimeLiveSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTimeLiveSpanInput() {
    return this._globalTimeLiveSpan;
  }

  // global_time_selectable - computed: true, optional: true, required: false
  private _globalTimeSelectable?: boolean | cdktn.IResolvable; 
  public get globalTimeSelectable() {
    return this.getBooleanAttribute('global_time_selectable');
  }
  public set globalTimeSelectable(value: boolean | cdktn.IResolvable) {
    this._globalTimeSelectable = value;
  }
  public resetGlobalTimeSelectable() {
    this._globalTimeSelectable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTimeSelectableInput() {
    return this._globalTimeSelectable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // viewing_preferences_high_density - computed: true, optional: true, required: false
  private _viewingPreferencesHighDensity?: boolean | cdktn.IResolvable; 
  public get viewingPreferencesHighDensity() {
    return this.getBooleanAttribute('viewing_preferences_high_density');
  }
  public set viewingPreferencesHighDensity(value: boolean | cdktn.IResolvable) {
    this._viewingPreferencesHighDensity = value;
  }
  public resetViewingPreferencesHighDensity() {
    this._viewingPreferencesHighDensity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewingPreferencesHighDensityInput() {
    return this._viewingPreferencesHighDensity;
  }

  // viewing_preferences_theme - computed: true, optional: true, required: false
  private _viewingPreferencesTheme?: string; 
  public get viewingPreferencesTheme() {
    return this.getStringAttribute('viewing_preferences_theme');
  }
  public set viewingPreferencesTheme(value: string) {
    this._viewingPreferencesTheme = value;
  }
  public resetViewingPreferencesTheme() {
    this._viewingPreferencesTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewingPreferencesThemeInput() {
    return this._viewingPreferencesTheme;
  }

  // selectable_template_vars - computed: false, optional: true, required: false
  private _selectableTemplateVars = new SecureEmbedDashboardSelectableTemplateVarsList(this, "selectable_template_vars", false);
  public get selectableTemplateVars() {
    return this._selectableTemplateVars;
  }
  public putSelectableTemplateVars(value: SecureEmbedDashboardSelectableTemplateVars[] | cdktn.IResolvable) {
    this._selectableTemplateVars.internalValue = value;
  }
  public resetSelectableTemplateVars() {
    this._selectableTemplateVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectableTemplateVarsInput() {
    return this._selectableTemplateVars.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_id: cdktn.stringToTerraform(this._dashboardId),
      global_time_live_span: cdktn.stringToTerraform(this._globalTimeLiveSpan),
      global_time_selectable: cdktn.booleanToTerraform(this._globalTimeSelectable),
      status: cdktn.stringToTerraform(this._status),
      title: cdktn.stringToTerraform(this._title),
      viewing_preferences_high_density: cdktn.booleanToTerraform(this._viewingPreferencesHighDensity),
      viewing_preferences_theme: cdktn.stringToTerraform(this._viewingPreferencesTheme),
      selectable_template_vars: cdktn.listMapper(secureEmbedDashboardSelectableTemplateVarsToTerraform, true)(this._selectableTemplateVars.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_id: {
        value: cdktn.stringToHclTerraform(this._dashboardId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_time_live_span: {
        value: cdktn.stringToHclTerraform(this._globalTimeLiveSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_time_selectable: {
        value: cdktn.booleanToHclTerraform(this._globalTimeSelectable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktn.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      viewing_preferences_high_density: {
        value: cdktn.booleanToHclTerraform(this._viewingPreferencesHighDensity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      viewing_preferences_theme: {
        value: cdktn.stringToHclTerraform(this._viewingPreferencesTheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selectable_template_vars: {
        value: cdktn.listMapperHcl(secureEmbedDashboardSelectableTemplateVarsToHclTerraform, true)(this._selectableTemplateVars.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecureEmbedDashboardSelectableTemplateVarsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
