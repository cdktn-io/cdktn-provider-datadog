/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { DashboardV2Tab, 
dashboardV2TabToTerraform, 
dashboardV2TabToHclTerraform, 
DashboardV2TabList, 
DashboardV2TemplateVariable, 
dashboardV2TemplateVariableToTerraform, 
dashboardV2TemplateVariableToHclTerraform, 
DashboardV2TemplateVariableList, 
DashboardV2TemplateVariablePreset, 
dashboardV2TemplateVariablePresetToTerraform, 
dashboardV2TemplateVariablePresetToHclTerraform, 
DashboardV2TemplateVariablePresetList, 
DashboardV2Widget, 
dashboardV2WidgetToTerraform, 
dashboardV2WidgetToHclTerraform, 
DashboardV2WidgetList} from './index-structs/index';
export * from './index-structs/index';
import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface DashboardV2Config extends cdktn.TerraformMetaArguments {
  /**
  * A list of dashboard lists this dashboard belongs to. This attribute should not be set if managing the corresponding dashboard lists using Terraform as it causes inconsistent behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#dashboard_lists DashboardV2#dashboard_lists}
  */
  readonly dashboardLists?: number[];
  /**
  * A list of dashboard lists this dashboard should be removed from. Internal only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#dashboard_lists_removed DashboardV2#dashboard_lists_removed}
  */
  readonly dashboardListsRemoved?: number[];
  /**
  * The description of the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#description DashboardV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#id DashboardV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether this dashboard is read-only. **Deprecated.** This field is deprecated and non-functional. Use `restricted_roles` instead to define which roles are required to edit the dashboard. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#is_read_only DashboardV2#is_read_only}
  */
  readonly isReadOnly?: boolean | cdktn.IResolvable;
  /**
  * The layout type of the dashboard. Valid values are `ordered`, `free`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#layout_type DashboardV2#layout_type}
  */
  readonly layoutType: string;
  /**
  * The list of handles for the users to notify when changes are made to this dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#notify_list DashboardV2#notify_list}
  */
  readonly notifyList?: string[];
  /**
  * The reflow type of a new dashboard layout. Set this only when layout type is `ordered`. If set to `fixed`, the dashboard expects all widgets to have a layout, and if it's set to `auto`, widgets should not have layouts. Valid values are `auto`, `fixed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#reflow_type DashboardV2#reflow_type}
  */
  readonly reflowType?: string;
  /**
  * A list of role identifiers. Only the author and users associated with at least one of these roles can edit this dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#restricted_roles DashboardV2#restricted_roles}
  */
  readonly restrictedRoles?: string[];
  /**
  * A list of tags assigned to the Dashboard. Only team names of the form `team:<name>` are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#tags DashboardV2#tags}
  */
  readonly tags?: string[];
  /**
  * The title of the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#title DashboardV2#title}
  */
  readonly title: string;
  /**
  * The URL of the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#url DashboardV2#url}
  */
  readonly url?: string;
  /**
  * tab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#tab DashboardV2#tab}
  */
  readonly tab?: DashboardV2Tab[] | cdktn.IResolvable;
  /**
  * template_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#template_variable DashboardV2#template_variable}
  */
  readonly templateVariable?: DashboardV2TemplateVariable[] | cdktn.IResolvable;
  /**
  * template_variable_preset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#template_variable_preset DashboardV2#template_variable_preset}
  */
  readonly templateVariablePreset?: DashboardV2TemplateVariablePreset[] | cdktn.IResolvable;
  /**
  * widget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#widget DashboardV2#widget}
  */
  readonly widget?: DashboardV2Widget[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2 datadog_dashboard_v2}
*/
export class DashboardV2 extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_dashboard_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DashboardV2 resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardV2 to import
  * @param importFromId The id of the existing DashboardV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_dashboard_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/dashboard_v2 datadog_dashboard_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardV2Config
  */
  public constructor(scope: Construct, id: string, config: DashboardV2Config) {
    super(scope, id, {
      terraformResourceType: 'datadog_dashboard_v2',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.13.0',
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
    this._dashboardLists = config.dashboardLists;
    this._dashboardListsRemoved = config.dashboardListsRemoved;
    this._description = config.description;
    this._id = config.id;
    this._isReadOnly = config.isReadOnly;
    this._layoutType = config.layoutType;
    this._notifyList = config.notifyList;
    this._reflowType = config.reflowType;
    this._restrictedRoles = config.restrictedRoles;
    this._tags = config.tags;
    this._title = config.title;
    this._url = config.url;
    this._tab.internalValue = config.tab;
    this._templateVariable.internalValue = config.templateVariable;
    this._templateVariablePreset.internalValue = config.templateVariablePreset;
    this._widget.internalValue = config.widget;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_lists - computed: false, optional: true, required: false
  private _dashboardLists?: number[]; 
  public get dashboardLists() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('dashboard_lists')));
  }
  public set dashboardLists(value: number[]) {
    this._dashboardLists = value;
  }
  public resetDashboardLists() {
    this._dashboardLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardListsInput() {
    return this._dashboardLists;
  }

  // dashboard_lists_removed - computed: true, optional: true, required: false
  private _dashboardListsRemoved?: number[]; 
  public get dashboardListsRemoved() {
    return cdktn.Token.asNumberList(cdktn.Fn.tolist(this.getNumberListAttribute('dashboard_lists_removed')));
  }
  public set dashboardListsRemoved(value: number[]) {
    this._dashboardListsRemoved = value;
  }
  public resetDashboardListsRemoved() {
    this._dashboardListsRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardListsRemovedInput() {
    return this._dashboardListsRemoved;
  }

  // description - computed: false, optional: true, required: false
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_read_only - computed: false, optional: true, required: false
  private _isReadOnly?: boolean | cdktn.IResolvable; 
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }
  public set isReadOnly(value: boolean | cdktn.IResolvable) {
    this._isReadOnly = value;
  }
  public resetIsReadOnly() {
    this._isReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadOnlyInput() {
    return this._isReadOnly;
  }

  // layout_type - computed: false, optional: false, required: true
  private _layoutType?: string; 
  public get layoutType() {
    return this.getStringAttribute('layout_type');
  }
  public set layoutType(value: string) {
    this._layoutType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutTypeInput() {
    return this._layoutType;
  }

  // notify_list - computed: false, optional: true, required: false
  private _notifyList?: string[]; 
  public get notifyList() {
    return cdktn.Fn.tolist(this.getListAttribute('notify_list'));
  }
  public set notifyList(value: string[]) {
    this._notifyList = value;
  }
  public resetNotifyList() {
    this._notifyList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyListInput() {
    return this._notifyList;
  }

  // reflow_type - computed: false, optional: true, required: false
  private _reflowType?: string; 
  public get reflowType() {
    return this.getStringAttribute('reflow_type');
  }
  public set reflowType(value: string) {
    this._reflowType = value;
  }
  public resetReflowType() {
    this._reflowType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reflowTypeInput() {
    return this._reflowType;
  }

  // restricted_roles - computed: false, optional: true, required: false
  private _restrictedRoles?: string[]; 
  public get restrictedRoles() {
    return cdktn.Fn.tolist(this.getListAttribute('restricted_roles'));
  }
  public set restrictedRoles(value: string[]) {
    this._restrictedRoles = value;
  }
  public resetRestrictedRoles() {
    this._restrictedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedRolesInput() {
    return this._restrictedRoles;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // tab - computed: false, optional: true, required: false
  private _tab = new DashboardV2TabList(this, "tab", false);
  public get tab() {
    return this._tab;
  }
  public putTab(value: DashboardV2Tab[] | cdktn.IResolvable) {
    this._tab.internalValue = value;
  }
  public resetTab() {
    this._tab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tabInput() {
    return this._tab.internalValue;
  }

  // template_variable - computed: false, optional: true, required: false
  private _templateVariable = new DashboardV2TemplateVariableList(this, "template_variable", false);
  public get templateVariable() {
    return this._templateVariable;
  }
  public putTemplateVariable(value: DashboardV2TemplateVariable[] | cdktn.IResolvable) {
    this._templateVariable.internalValue = value;
  }
  public resetTemplateVariable() {
    this._templateVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVariableInput() {
    return this._templateVariable.internalValue;
  }

  // template_variable_preset - computed: false, optional: true, required: false
  private _templateVariablePreset = new DashboardV2TemplateVariablePresetList(this, "template_variable_preset", false);
  public get templateVariablePreset() {
    return this._templateVariablePreset;
  }
  public putTemplateVariablePreset(value: DashboardV2TemplateVariablePreset[] | cdktn.IResolvable) {
    this._templateVariablePreset.internalValue = value;
  }
  public resetTemplateVariablePreset() {
    this._templateVariablePreset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVariablePresetInput() {
    return this._templateVariablePreset.internalValue;
  }

  // widget - computed: false, optional: true, required: false
  private _widget = new DashboardV2WidgetList(this, "widget", false);
  public get widget() {
    return this._widget;
  }
  public putWidget(value: DashboardV2Widget[] | cdktn.IResolvable) {
    this._widget.internalValue = value;
  }
  public resetWidget() {
    this._widget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetInput() {
    return this._widget.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_lists: cdktn.listMapper(cdktn.numberToTerraform, false)(this._dashboardLists),
      dashboard_lists_removed: cdktn.listMapper(cdktn.numberToTerraform, false)(this._dashboardListsRemoved),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      is_read_only: cdktn.booleanToTerraform(this._isReadOnly),
      layout_type: cdktn.stringToTerraform(this._layoutType),
      notify_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._notifyList),
      reflow_type: cdktn.stringToTerraform(this._reflowType),
      restricted_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(this._restrictedRoles),
      tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tags),
      title: cdktn.stringToTerraform(this._title),
      url: cdktn.stringToTerraform(this._url),
      tab: cdktn.listMapper(dashboardV2TabToTerraform, true)(this._tab.internalValue),
      template_variable: cdktn.listMapper(dashboardV2TemplateVariableToTerraform, true)(this._templateVariable.internalValue),
      template_variable_preset: cdktn.listMapper(dashboardV2TemplateVariablePresetToTerraform, true)(this._templateVariablePreset.internalValue),
      widget: cdktn.listMapper(dashboardV2WidgetToTerraform, true)(this._widget.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_lists: {
        value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(this._dashboardLists),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      dashboard_lists_removed: {
        value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(this._dashboardListsRemoved),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_read_only: {
        value: cdktn.booleanToHclTerraform(this._isReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      layout_type: {
        value: cdktn.stringToHclTerraform(this._layoutType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_list: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._notifyList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      reflow_type: {
        value: cdktn.stringToHclTerraform(this._reflowType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restricted_roles: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._restrictedRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      title: {
        value: cdktn.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktn.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tab: {
        value: cdktn.listMapperHcl(dashboardV2TabToHclTerraform, true)(this._tab.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardV2TabList",
      },
      template_variable: {
        value: cdktn.listMapperHcl(dashboardV2TemplateVariableToHclTerraform, true)(this._templateVariable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardV2TemplateVariableList",
      },
      template_variable_preset: {
        value: cdktn.listMapperHcl(dashboardV2TemplateVariablePresetToHclTerraform, true)(this._templateVariablePreset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardV2TemplateVariablePresetList",
      },
      widget: {
        value: cdktn.listMapperHcl(dashboardV2WidgetToHclTerraform, true)(this._widget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardV2WidgetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
