/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TagIndexingRuleConfig extends cdktn.TerraformMetaArguments {
  /**
  * When true, the rule excludes the listed tags and indexes all others. When false (default), the rule includes only the listed tags. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule#exclude_tags_mode TagIndexingRule#exclude_tags_mode}
  */
  readonly excludeTagsMode?: boolean | cdktn.IResolvable;
  /**
  * Metric name prefixes excluded from the rule's scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule#ignored_metric_name_matches TagIndexingRule#ignored_metric_name_matches}
  */
  readonly ignoredMetricNameMatches?: string[];
  /**
  * Metric name prefixes (glob patterns) this rule applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule#metric_name_matches TagIndexingRule#metric_name_matches}
  */
  readonly metricNameMatches: string[];
  /**
  * Human-readable name for the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule#name TagIndexingRule#name}
  */
  readonly name: string;
  /**
  * Versioned configuration options for the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule#options TagIndexingRule#options}
  */
  readonly options?: TagIndexingRuleOptions;
  /**
  * Tag keys this rule includes or excludes, depending on exclude_tags_mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule#tags TagIndexingRule#tags}
  */
  readonly tags?: string[];
}
export interface TagIndexingRuleOptionsDataDynamicTags {
  /**
  * Lookback window, in seconds, for excluding tags that were not queried in that period. Requires `exclude_tags_mode` to be `true`. Value must be between 1 and 7776000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule#exclude_not_queried_window_seconds TagIndexingRule#exclude_not_queried_window_seconds}
  */
  readonly excludeNotQueriedWindowSeconds?: number;
  /**
  * When true, excludes tags not used in any dashboards or monitors. Requires `exclude_tags_mode` to be `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule#exclude_not_used_in_assets TagIndexingRule#exclude_not_used_in_assets}
  */
  readonly excludeNotUsedInAssets?: boolean | cdktn.IResolvable;
}

export function tagIndexingRuleOptionsDataDynamicTagsToTerraform(struct?: TagIndexingRuleOptionsDataDynamicTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    exclude_not_queried_window_seconds: cdktn.numberToTerraform(struct!.excludeNotQueriedWindowSeconds),
    exclude_not_used_in_assets: cdktn.booleanToTerraform(struct!.excludeNotUsedInAssets),
  }
}


export function tagIndexingRuleOptionsDataDynamicTagsToHclTerraform(struct?: TagIndexingRuleOptionsDataDynamicTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    exclude_not_queried_window_seconds: {
      value: cdktn.numberToHclTerraform(struct!.excludeNotQueriedWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exclude_not_used_in_assets: {
      value: cdktn.booleanToHclTerraform(struct!.excludeNotUsedInAssets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagIndexingRuleOptionsDataDynamicTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagIndexingRuleOptionsDataDynamicTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeNotQueriedWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeNotQueriedWindowSeconds = this._excludeNotQueriedWindowSeconds;
    }
    if (this._excludeNotUsedInAssets !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeNotUsedInAssets = this._excludeNotUsedInAssets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagIndexingRuleOptionsDataDynamicTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeNotQueriedWindowSeconds = undefined;
      this._excludeNotUsedInAssets = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeNotQueriedWindowSeconds = value.excludeNotQueriedWindowSeconds;
      this._excludeNotUsedInAssets = value.excludeNotUsedInAssets;
    }
  }

  // exclude_not_queried_window_seconds - computed: false, optional: true, required: false
  private _excludeNotQueriedWindowSeconds?: number; 
  public get excludeNotQueriedWindowSeconds() {
    return this.getNumberAttribute('exclude_not_queried_window_seconds');
  }
  public set excludeNotQueriedWindowSeconds(value: number) {
    this._excludeNotQueriedWindowSeconds = value;
  }
  public resetExcludeNotQueriedWindowSeconds() {
    this._excludeNotQueriedWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNotQueriedWindowSecondsInput() {
    return this._excludeNotQueriedWindowSeconds;
  }

  // exclude_not_used_in_assets - computed: false, optional: true, required: false
  private _excludeNotUsedInAssets?: boolean | cdktn.IResolvable; 
  public get excludeNotUsedInAssets() {
    return this.getBooleanAttribute('exclude_not_used_in_assets');
  }
  public set excludeNotUsedInAssets(value: boolean | cdktn.IResolvable) {
    this._excludeNotUsedInAssets = value;
  }
  public resetExcludeNotUsedInAssets() {
    this._excludeNotUsedInAssets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNotUsedInAssetsInput() {
    return this._excludeNotUsedInAssets;
  }
}
export interface TagIndexingRuleOptionsData {
  /**
  * Configuration for excluding tags based on dynamic usage signals. Only applies when `exclude_tags_mode` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule#dynamic_tags TagIndexingRule#dynamic_tags}
  */
  readonly dynamicTags?: TagIndexingRuleOptionsDataDynamicTags;
  /**
  * When true, the rule applies to metrics ingested before the rule was created. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule#manage_preexisting_metrics TagIndexingRule#manage_preexisting_metrics}
  */
  readonly managePreexistingMetrics?: boolean | cdktn.IResolvable;
  /**
  * When true, this rule's tag list overrides tags configured by earlier rules for the same metric. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule#override_previous_rules TagIndexingRule#override_previous_rules}
  */
  readonly overridePreviousRules?: boolean | cdktn.IResolvable;
}

export function tagIndexingRuleOptionsDataToTerraform(struct?: TagIndexingRuleOptionsData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dynamic_tags: tagIndexingRuleOptionsDataDynamicTagsToTerraform(struct!.dynamicTags),
    manage_preexisting_metrics: cdktn.booleanToTerraform(struct!.managePreexistingMetrics),
    override_previous_rules: cdktn.booleanToTerraform(struct!.overridePreviousRules),
  }
}


export function tagIndexingRuleOptionsDataToHclTerraform(struct?: TagIndexingRuleOptionsData | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dynamic_tags: {
      value: tagIndexingRuleOptionsDataDynamicTagsToHclTerraform(struct!.dynamicTags),
      isBlock: true,
      type: "struct",
      storageClassType: "TagIndexingRuleOptionsDataDynamicTags",
    },
    manage_preexisting_metrics: {
      value: cdktn.booleanToHclTerraform(struct!.managePreexistingMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override_previous_rules: {
      value: cdktn.booleanToHclTerraform(struct!.overridePreviousRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagIndexingRuleOptionsDataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagIndexingRuleOptionsData | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicTags = this._dynamicTags?.internalValue;
    }
    if (this._managePreexistingMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.managePreexistingMetrics = this._managePreexistingMetrics;
    }
    if (this._overridePreviousRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.overridePreviousRules = this._overridePreviousRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagIndexingRuleOptionsData | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicTags.internalValue = undefined;
      this._managePreexistingMetrics = undefined;
      this._overridePreviousRules = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicTags.internalValue = value.dynamicTags;
      this._managePreexistingMetrics = value.managePreexistingMetrics;
      this._overridePreviousRules = value.overridePreviousRules;
    }
  }

  // dynamic_tags - computed: false, optional: true, required: false
  private _dynamicTags = new TagIndexingRuleOptionsDataDynamicTagsOutputReference(this, "dynamic_tags");
  public get dynamicTags() {
    return this._dynamicTags;
  }
  public putDynamicTags(value: TagIndexingRuleOptionsDataDynamicTags) {
    this._dynamicTags.internalValue = value;
  }
  public resetDynamicTags() {
    this._dynamicTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicTagsInput() {
    return this._dynamicTags.internalValue;
  }

  // manage_preexisting_metrics - computed: true, optional: true, required: false
  private _managePreexistingMetrics?: boolean | cdktn.IResolvable; 
  public get managePreexistingMetrics() {
    return this.getBooleanAttribute('manage_preexisting_metrics');
  }
  public set managePreexistingMetrics(value: boolean | cdktn.IResolvable) {
    this._managePreexistingMetrics = value;
  }
  public resetManagePreexistingMetrics() {
    this._managePreexistingMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managePreexistingMetricsInput() {
    return this._managePreexistingMetrics;
  }

  // override_previous_rules - computed: true, optional: true, required: false
  private _overridePreviousRules?: boolean | cdktn.IResolvable; 
  public get overridePreviousRules() {
    return this.getBooleanAttribute('override_previous_rules');
  }
  public set overridePreviousRules(value: boolean | cdktn.IResolvable) {
    this._overridePreviousRules = value;
  }
  public resetOverridePreviousRules() {
    this._overridePreviousRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePreviousRulesInput() {
    return this._overridePreviousRules;
  }
}
export interface TagIndexingRuleOptions {
  /**
  * Behavioral options for how the rule applies to metrics, including backfill and override behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule#data TagIndexingRule#data}
  */
  readonly data: TagIndexingRuleOptionsData;
  /**
  * Options schema version. Only `1` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule#version TagIndexingRule#version}
  */
  readonly version: number;
}

export function tagIndexingRuleOptionsToTerraform(struct?: TagIndexingRuleOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data: tagIndexingRuleOptionsDataToTerraform(struct!.data),
    version: cdktn.numberToTerraform(struct!.version),
  }
}


export function tagIndexingRuleOptionsToHclTerraform(struct?: TagIndexingRuleOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data: {
      value: tagIndexingRuleOptionsDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "TagIndexingRuleOptionsData",
    },
    version: {
      value: cdktn.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagIndexingRuleOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagIndexingRuleOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagIndexingRuleOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data.internalValue = value.data;
      this._version = value.version;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data = new TagIndexingRuleOptionsDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: TagIndexingRuleOptionsData) {
    this._data.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule datadog_tag_indexing_rule}
*/
export class TagIndexingRule extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_tag_indexing_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TagIndexingRule resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TagIndexingRule to import
  * @param importFromId The id of the existing TagIndexingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TagIndexingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_tag_indexing_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/tag_indexing_rule datadog_tag_indexing_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagIndexingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TagIndexingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_tag_indexing_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.19.0',
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
    this._excludeTagsMode = config.excludeTagsMode;
    this._ignoredMetricNameMatches = config.ignoredMetricNameMatches;
    this._metricNameMatches = config.metricNameMatches;
    this._name = config.name;
    this._options.internalValue = config.options;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by_handle - computed: true, optional: false, required: false
  public get createdByHandle() {
    return this.getStringAttribute('created_by_handle');
  }

  // exclude_tags_mode - computed: true, optional: true, required: false
  private _excludeTagsMode?: boolean | cdktn.IResolvable; 
  public get excludeTagsMode() {
    return this.getBooleanAttribute('exclude_tags_mode');
  }
  public set excludeTagsMode(value: boolean | cdktn.IResolvable) {
    this._excludeTagsMode = value;
  }
  public resetExcludeTagsMode() {
    this._excludeTagsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTagsModeInput() {
    return this._excludeTagsMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignored_metric_name_matches - computed: true, optional: true, required: false
  private _ignoredMetricNameMatches?: string[]; 
  public get ignoredMetricNameMatches() {
    return this.getListAttribute('ignored_metric_name_matches');
  }
  public set ignoredMetricNameMatches(value: string[]) {
    this._ignoredMetricNameMatches = value;
  }
  public resetIgnoredMetricNameMatches() {
    this._ignoredMetricNameMatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredMetricNameMatchesInput() {
    return this._ignoredMetricNameMatches;
  }

  // metric_name_matches - computed: false, optional: false, required: true
  private _metricNameMatches?: string[]; 
  public get metricNameMatches() {
    return this.getListAttribute('metric_name_matches');
  }
  public set metricNameMatches(value: string[]) {
    this._metricNameMatches = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameMatchesInput() {
    return this._metricNameMatches;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // modified_by_handle - computed: true, optional: false, required: false
  public get modifiedByHandle() {
    return this.getStringAttribute('modified_by_handle');
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

  // options - computed: false, optional: true, required: false
  private _options = new TagIndexingRuleOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: TagIndexingRuleOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // rule_order - computed: true, optional: false, required: false
  public get ruleOrder() {
    return this.getNumberAttribute('rule_order');
  }

  // tags - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_tags_mode: cdktn.booleanToTerraform(this._excludeTagsMode),
      ignored_metric_name_matches: cdktn.listMapper(cdktn.stringToTerraform, false)(this._ignoredMetricNameMatches),
      metric_name_matches: cdktn.listMapper(cdktn.stringToTerraform, false)(this._metricNameMatches),
      name: cdktn.stringToTerraform(this._name),
      options: tagIndexingRuleOptionsToTerraform(this._options.internalValue),
      tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_tags_mode: {
        value: cdktn.booleanToHclTerraform(this._excludeTagsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignored_metric_name_matches: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._ignoredMetricNameMatches),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      metric_name_matches: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._metricNameMatches),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: tagIndexingRuleOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TagIndexingRuleOptions",
      },
      tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
