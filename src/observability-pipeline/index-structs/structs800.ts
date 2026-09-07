/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimit,
observabilityPipelineConfigProcessorGroupProcessorQuotaLimitToTerraform,
observabilityPipelineConfigProcessorGroupProcessorQuotaLimitToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimitList,
ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVars,
observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsToTerraform,
observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsList,
ObservabilityPipelineConfigProcessorGroupProcessorAddFields,
observabilityPipelineConfigProcessorGroupProcessorAddFieldsToTerraform,
observabilityPipelineConfigProcessorGroupProcessorAddFieldsToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsList,
ObservabilityPipelineConfigProcessorGroupProcessorAddHostname,
observabilityPipelineConfigProcessorGroupProcessorAddHostnameToTerraform,
observabilityPipelineConfigProcessorGroupProcessorAddHostnameToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorAddHostnameList,
ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTags,
observabilityPipelineConfigProcessorGroupProcessorAddMetricTagsToTerraform,
observabilityPipelineConfigProcessorGroupProcessorAddMetricTagsToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsList,
ObservabilityPipelineConfigProcessorGroupProcessorAggregate,
observabilityPipelineConfigProcessorGroupProcessorAggregateToTerraform,
observabilityPipelineConfigProcessorGroupProcessorAggregateToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorAggregateList,
ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessor,
observabilityPipelineConfigProcessorGroupProcessorCustomProcessorToTerraform,
observabilityPipelineConfigProcessorGroupProcessorCustomProcessorToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorList,
ObservabilityPipelineConfigProcessorGroupProcessorDatadogTags,
observabilityPipelineConfigProcessorGroupProcessorDatadogTagsToTerraform,
observabilityPipelineConfigProcessorGroupProcessorDatadogTagsToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorDatadogTagsList,
ObservabilityPipelineConfigProcessorGroupProcessorDedupe,
observabilityPipelineConfigProcessorGroupProcessorDedupeToTerraform,
observabilityPipelineConfigProcessorGroupProcessorDedupeToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorDedupeList,
ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTable,
observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableToTerraform,
observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableList,
ObservabilityPipelineConfigProcessorGroupProcessorFilter,
observabilityPipelineConfigProcessorGroupProcessorFilterToTerraform,
observabilityPipelineConfigProcessorGroupProcessorFilterToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorFilterList,
ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetrics,
observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsToTerraform,
observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsList,
ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetrics,
observabilityPipelineConfigProcessorGroupProcessorGenerateMetricsToTerraform,
observabilityPipelineConfigProcessorGroupProcessorGenerateMetricsToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsList,
ObservabilityPipelineConfigProcessorGroupProcessorMetricTags,
observabilityPipelineConfigProcessorGroupProcessorMetricTagsToTerraform,
observabilityPipelineConfigProcessorGroupProcessorMetricTagsToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsList,
ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapper,
observabilityPipelineConfigProcessorGroupProcessorOcsfMapperToTerraform,
observabilityPipelineConfigProcessorGroupProcessorOcsfMapperToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperList,
ObservabilityPipelineConfigProcessorGroupProcessorParseGrok,
observabilityPipelineConfigProcessorGroupProcessorParseGrokToTerraform,
observabilityPipelineConfigProcessorGroupProcessorParseGrokToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorParseGrokList,
ObservabilityPipelineConfigProcessorGroupProcessorParseJson,
observabilityPipelineConfigProcessorGroupProcessorParseJsonToTerraform,
observabilityPipelineConfigProcessorGroupProcessorParseJsonToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorParseJsonList,
ObservabilityPipelineConfigProcessorGroupProcessorParseXml,
observabilityPipelineConfigProcessorGroupProcessorParseXmlToTerraform,
observabilityPipelineConfigProcessorGroupProcessorParseXmlToHclTerraform,
ObservabilityPipelineConfigProcessorGroupProcessorParseXmlList,
ObservabilityPipelineConfigDestination,
observabilityPipelineConfigDestinationToTerraform,
observabilityPipelineConfigDestinationToHclTerraform,
ObservabilityPipelineConfigDestinationList } from './structs400';
export interface ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideField {
  /**
  * The field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideFieldToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideFieldToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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

export class ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideFieldList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideField[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideFieldOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimit {
  /**
  * Whether to enforce by 'bytes' or 'events'. Valid values are `bytes`, `events`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#enforce ObservabilityPipeline#enforce}
  */
  readonly enforce: string;
  /**
  * The daily quota limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}
  */
  readonly limit: number;
}

export function observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimitToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enforce: cdktn.stringToTerraform(struct!.enforce),
    limit: cdktn.numberToTerraform(struct!.limit),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimitToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enforce: {
      value: cdktn.stringToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktn.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforce = undefined;
      this._limit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforce = value.enforce;
      this._limit = value.limit;
    }
  }

  // enforce - computed: false, optional: false, required: true
  private _enforce?: string; 
  public get enforce() {
    return this.getStringAttribute('enforce');
  }
  public set enforce(value: string) {
    this._enforce = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimitList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimit[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimitOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverride {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideField[] | cdktn.IResolvable;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}
  */
  readonly limit?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimit[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideFieldToTerraform, true)(struct!.field),
    limit: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimitToTerraform, true)(struct!.limit),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideFieldList",
    },
    limit: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimitToHclTerraform, true)(struct!.limit),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverride | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    if (this._limit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverride | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field.internalValue = undefined;
      this._limit.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field.internalValue = value.field;
      this._limit.internalValue = value.limit;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field = new ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideField[] | cdktn.IResolvable) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }

  // limit - computed: false, optional: true, required: false
  private _limit = new ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimitList(this, "limit", false);
  public get limit() {
    return this._limit;
  }
  public putLimit(value: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimit[] | cdktn.IResolvable) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverride[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorQuota {
  /**
  * Whether to drop events exceeding the limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#drop_events ObservabilityPipeline#drop_events}
  */
  readonly dropEvents?: boolean | cdktn.IResolvable;
  /**
  * Whether to ignore when partition fields are missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ignore_when_missing_partitions ObservabilityPipeline#ignore_when_missing_partitions}
  */
  readonly ignoreWhenMissingPartitions?: boolean | cdktn.IResolvable;
  /**
  * The name of the quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The action to take when the quota is exceeded: `drop`, `no_action`, or `overflow_routing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#overflow_action ObservabilityPipeline#overflow_action}
  */
  readonly overflowAction?: string;
  /**
  * List of partition fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#partition_fields ObservabilityPipeline#partition_fields}
  */
  readonly partitionFields?: string[];
  /**
  * The action to take when the max number of buckets is exceeded: `drop`, `no_action`, or `overflow_routing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#too_many_buckets_action ObservabilityPipeline#too_many_buckets_action}
  */
  readonly tooManyBucketsAction?: string;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}
  */
  readonly limit?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimit[] | cdktn.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#override ObservabilityPipeline#override}
  */
  readonly override?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverride[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorQuotaToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuota | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    drop_events: cdktn.booleanToTerraform(struct!.dropEvents),
    ignore_when_missing_partitions: cdktn.booleanToTerraform(struct!.ignoreWhenMissingPartitions),
    name: cdktn.stringToTerraform(struct!.name),
    overflow_action: cdktn.stringToTerraform(struct!.overflowAction),
    partition_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.partitionFields),
    too_many_buckets_action: cdktn.stringToTerraform(struct!.tooManyBucketsAction),
    limit: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorQuotaLimitToTerraform, true)(struct!.limit),
    override: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideToTerraform, true)(struct!.override),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorQuotaToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuota | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    drop_events: {
      value: cdktn.booleanToHclTerraform(struct!.dropEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_when_missing_partitions: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreWhenMissingPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overflow_action: {
      value: cdktn.stringToHclTerraform(struct!.overflowAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.partitionFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    too_many_buckets_action: {
      value: cdktn.stringToHclTerraform(struct!.tooManyBucketsAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorQuotaLimitToHclTerraform, true)(struct!.limit),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimitList",
    },
    override: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideToHclTerraform, true)(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorQuotaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorQuota | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropEvents = this._dropEvents;
    }
    if (this._ignoreWhenMissingPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreWhenMissingPartitions = this._ignoreWhenMissingPartitions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overflowAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.overflowAction = this._overflowAction;
    }
    if (this._partitionFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionFields = this._partitionFields;
    }
    if (this._tooManyBucketsAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyBucketsAction = this._tooManyBucketsAction;
    }
    if (this._limit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit?.internalValue;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorQuota | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dropEvents = undefined;
      this._ignoreWhenMissingPartitions = undefined;
      this._name = undefined;
      this._overflowAction = undefined;
      this._partitionFields = undefined;
      this._tooManyBucketsAction = undefined;
      this._limit.internalValue = undefined;
      this._override.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dropEvents = value.dropEvents;
      this._ignoreWhenMissingPartitions = value.ignoreWhenMissingPartitions;
      this._name = value.name;
      this._overflowAction = value.overflowAction;
      this._partitionFields = value.partitionFields;
      this._tooManyBucketsAction = value.tooManyBucketsAction;
      this._limit.internalValue = value.limit;
      this._override.internalValue = value.override;
    }
  }

  // drop_events - computed: false, optional: true, required: false
  private _dropEvents?: boolean | cdktn.IResolvable; 
  public get dropEvents() {
    return this.getBooleanAttribute('drop_events');
  }
  public set dropEvents(value: boolean | cdktn.IResolvable) {
    this._dropEvents = value;
  }
  public resetDropEvents() {
    this._dropEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropEventsInput() {
    return this._dropEvents;
  }

  // ignore_when_missing_partitions - computed: false, optional: true, required: false
  private _ignoreWhenMissingPartitions?: boolean | cdktn.IResolvable; 
  public get ignoreWhenMissingPartitions() {
    return this.getBooleanAttribute('ignore_when_missing_partitions');
  }
  public set ignoreWhenMissingPartitions(value: boolean | cdktn.IResolvable) {
    this._ignoreWhenMissingPartitions = value;
  }
  public resetIgnoreWhenMissingPartitions() {
    this._ignoreWhenMissingPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWhenMissingPartitionsInput() {
    return this._ignoreWhenMissingPartitions;
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

  // overflow_action - computed: false, optional: true, required: false
  private _overflowAction?: string; 
  public get overflowAction() {
    return this.getStringAttribute('overflow_action');
  }
  public set overflowAction(value: string) {
    this._overflowAction = value;
  }
  public resetOverflowAction() {
    this._overflowAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overflowActionInput() {
    return this._overflowAction;
  }

  // partition_fields - computed: false, optional: true, required: false
  private _partitionFields?: string[]; 
  public get partitionFields() {
    return this.getListAttribute('partition_fields');
  }
  public set partitionFields(value: string[]) {
    this._partitionFields = value;
  }
  public resetPartitionFields() {
    this._partitionFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionFieldsInput() {
    return this._partitionFields;
  }

  // too_many_buckets_action - computed: false, optional: true, required: false
  private _tooManyBucketsAction?: string; 
  public get tooManyBucketsAction() {
    return this.getStringAttribute('too_many_buckets_action');
  }
  public set tooManyBucketsAction(value: string) {
    this._tooManyBucketsAction = value;
  }
  public resetTooManyBucketsAction() {
    this._tooManyBucketsAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooManyBucketsActionInput() {
    return this._tooManyBucketsAction;
  }

  // limit - computed: false, optional: true, required: false
  private _limit = new ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimitList(this, "limit", false);
  public get limit() {
    return this._limit;
  }
  public putLimit(value: ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimit[] | cdktn.IResolvable) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }

  // override - computed: false, optional: true, required: false
  private _override = new ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideList(this, "override", false);
  public get override() {
    return this._override;
  }
  public putOverride(value: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverride[] | cdktn.IResolvable) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorQuotaList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorQuota[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorQuotaOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategy {
  /**
  * The field path in the log event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#path ObservabilityPipeline#path}
  */
  readonly path: string;
  /**
  * The merge strategy to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#strategy ObservabilityPipeline#strategy}
  */
  readonly strategy: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategyToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    strategy: cdktn.stringToTerraform(struct!.strategy),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategyToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktn.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._strategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._strategy = value.strategy;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategyList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategy[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategyOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorReduce {
  /**
  * A list of fields used to group log events for merging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#group_by ObservabilityPipeline#group_by}
  */
  readonly groupBy: string[];
  /**
  * merge_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#merge_strategy ObservabilityPipeline#merge_strategy}
  */
  readonly mergeStrategy?: ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategy[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorReduceToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorReduce | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupBy),
    merge_strategy: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategyToTerraform, true)(struct!.mergeStrategy),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorReduceToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorReduce | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_by: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    merge_strategy: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategyToHclTerraform, true)(struct!.mergeStrategy),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorReduceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorReduce | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._mergeStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeStrategy = this._mergeStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorReduce | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupBy = undefined;
      this._mergeStrategy.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupBy = value.groupBy;
      this._mergeStrategy.internalValue = value.mergeStrategy;
    }
  }

  // group_by - computed: false, optional: false, required: true
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // merge_strategy - computed: false, optional: true, required: false
  private _mergeStrategy = new ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategyList(this, "merge_strategy", false);
  public get mergeStrategy() {
    return this._mergeStrategy;
  }
  public putMergeStrategy(value: ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategy[] | cdktn.IResolvable) {
    this._mergeStrategy.internalValue = value;
  }
  public resetMergeStrategy() {
    this._mergeStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeStrategyInput() {
    return this._mergeStrategy.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorReduceList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorReduce[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorReduceOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorReduceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorRemoveFields {
  /**
  * List of fields to remove from the events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}
  */
  readonly fields: string[];
}

export function observabilityPipelineConfigProcessorGroupProcessorRemoveFieldsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRemoveFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorRemoveFieldsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRemoveFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorRemoveFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorRemoveFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorRemoveFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields = value.fields;
    }
  }

  // fields - computed: false, optional: false, required: true
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorRemoveFieldsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorRemoveFields[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorRemoveFieldsOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorRemoveFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsField {
  /**
  * Destination field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#destination ObservabilityPipeline#destination}
  */
  readonly destination: string;
  /**
  * Whether to keep the original field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#preserve_source ObservabilityPipeline#preserve_source}
  */
  readonly preserveSource: boolean | cdktn.IResolvable;
  /**
  * Source field to rename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#source ObservabilityPipeline#source}
  */
  readonly source: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorRenameFieldsFieldToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination: cdktn.stringToTerraform(struct!.destination),
    preserve_source: cdktn.booleanToTerraform(struct!.preserveSource),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorRenameFieldsFieldToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination: {
      value: cdktn.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_source: {
      value: cdktn.booleanToHclTerraform(struct!.preserveSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._preserveSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSource = this._preserveSource;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._preserveSource = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._preserveSource = value.preserveSource;
      this._source = value.source;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // preserve_source - computed: false, optional: false, required: true
  private _preserveSource?: boolean | cdktn.IResolvable; 
  public get preserveSource() {
    return this.getBooleanAttribute('preserve_source');
  }
  public set preserveSource(value: boolean | cdktn.IResolvable) {
    this._preserveSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSourceInput() {
    return this._preserveSource;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsFieldList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsField[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsFieldOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorRenameFields {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsField[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorRenameFieldsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRenameFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorRenameFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorRenameFieldsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRenameFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorRenameFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorRenameFields | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorRenameFields | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field.internalValue = value.field;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field = new ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsField[] | cdktn.IResolvable) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorRenameFields[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTag {
  /**
  * The new tag key to assign in place of the original.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#rename_to ObservabilityPipeline#rename_to}
  */
  readonly renameTo: string;
  /**
  * The original tag key on the metric event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tag ObservabilityPipeline#tag}
  */
  readonly tag: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTagToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rename_to: cdktn.stringToTerraform(struct!.renameTo),
    tag: cdktn.stringToTerraform(struct!.tag),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTagToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rename_to: {
      value: cdktn.stringToHclTerraform(struct!.renameTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktn.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTag | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._renameTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameTo = this._renameTo;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTag | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._renameTo = undefined;
      this._tag = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._renameTo = value.renameTo;
      this._tag = value.tag;
    }
  }

  // rename_to - computed: false, optional: false, required: true
  private _renameTo?: string; 
  public get renameTo() {
    return this.getStringAttribute('rename_to');
  }
  public set renameTo(value: string) {
    this._renameTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renameToInput() {
    return this._renameTo;
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTagList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTag[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTagOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTags {
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tag ObservabilityPipeline#tag}
  */
  readonly tag?: ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTag[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tag: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTagToTerraform, true)(struct!.tag),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tag: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag.internalValue = value.tag;
    }
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsTag[] | cdktn.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTags[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSample {
  /**
  * Optional list of fields to group events by. Each group is sampled independently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#group_by ObservabilityPipeline#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The percentage of logs to sample.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#percentage ObservabilityPipeline#percentage}
  */
  readonly percentage: number;
}

export function observabilityPipelineConfigProcessorGroupProcessorSampleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSample | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupBy),
    percentage: cdktn.numberToTerraform(struct!.percentage),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSampleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSample | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_by: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    percentage: {
      value: cdktn.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSampleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSample | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSample | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupBy = undefined;
      this._percentage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupBy = value.groupBy;
      this._percentage = value.percentage;
    }
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSampleList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSample[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSampleOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSampleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptions {
  /**
  * A list of keywords to match near the sensitive pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#keywords ObservabilityPipeline#keywords}
  */
  readonly keywords?: string[];
  /**
  * Maximum number of tokens between a keyword and a sensitive value match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#proximity ObservabilityPipeline#proximity}
  */
  readonly proximity?: number;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptionsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    keywords: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.keywords),
    proximity: cdktn.numberToTerraform(struct!.proximity),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptionsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    keywords: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.keywords),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    proximity: {
      value: cdktn.numberToHclTerraform(struct!.proximity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywords = this._keywords;
    }
    if (this._proximity !== undefined) {
      hasAnyValues = true;
      internalValueResult.proximity = this._proximity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keywords = undefined;
      this._proximity = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keywords = value.keywords;
      this._proximity = value.proximity;
    }
  }

  // keywords - computed: false, optional: true, required: false
  private _keywords?: string[]; 
  public get keywords() {
    return this.getListAttribute('keywords');
  }
  public set keywords(value: string[]) {
    this._keywords = value;
  }
  public resetKeywords() {
    this._keywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsInput() {
    return this._keywords;
  }

  // proximity - computed: false, optional: true, required: false
  private _proximity?: number; 
  public get proximity() {
    return this.getNumberAttribute('proximity');
  }
  public set proximity(value: number) {
    this._proximity = value;
  }
  public resetProximity() {
    this._proximity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityInput() {
    return this._proximity;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptionsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptions[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptionsOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHash {
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHashToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHashToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHashOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHash | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHash | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHashList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHash[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHashOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHashOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedact {
  /**
  * Number of characters to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#characters ObservabilityPipeline#characters}
  */
  readonly characters?: number;
  /**
  * Direction from which to keep characters: `first` or `last`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#direction ObservabilityPipeline#direction}
  */
  readonly direction?: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedactToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    characters: cdktn.numberToTerraform(struct!.characters),
    direction: cdktn.stringToTerraform(struct!.direction),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedactToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    characters: {
      value: cdktn.numberToHclTerraform(struct!.characters),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    direction: {
      value: cdktn.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedactOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedact | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._characters !== undefined) {
      hasAnyValues = true;
      internalValueResult.characters = this._characters;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedact | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._characters = undefined;
      this._direction = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._characters = value.characters;
      this._direction = value.direction;
    }
  }

  // characters - computed: false, optional: true, required: false
  private _characters?: number; 
  public get characters() {
    return this.getNumberAttribute('characters');
  }
  public set characters(value: number) {
    this._characters = value;
  }
  public resetCharacters() {
    this._characters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charactersInput() {
    return this._characters;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedactList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedact[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedactOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedact {
  /**
  * Replacement string for redacted values (e.g., `***`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#replace ObservabilityPipeline#replace}
  */
  readonly replace?: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedactToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    replace: cdktn.stringToTerraform(struct!.replace),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedactToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    replace: {
      value: cdktn.stringToHclTerraform(struct!.replace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedactOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedact | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replace !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedact | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replace = value.replace;
    }
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: string; 
  public get replace() {
    return this.getStringAttribute('replace');
  }
  public set replace(value: string) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedactList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedact[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedactOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatch {
  /**
  * hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#hash ObservabilityPipeline#hash}
  */
  readonly hash?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHash[] | cdktn.IResolvable;
  /**
  * partial_redact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#partial_redact ObservabilityPipeline#partial_redact}
  */
  readonly partialRedact?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedact[] | cdktn.IResolvable;
  /**
  * redact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#redact ObservabilityPipeline#redact}
  */
  readonly redact?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedact[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    hash: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHashToTerraform, true)(struct!.hash),
    partial_redact: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedactToTerraform, true)(struct!.partialRedact),
    redact: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedactToTerraform, true)(struct!.redact),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    hash: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHashToHclTerraform, true)(struct!.hash),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHashList",
    },
    partial_redact: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedactToHclTerraform, true)(struct!.partialRedact),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedactList",
    },
    redact: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedactToHclTerraform, true)(struct!.redact),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedactList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash?.internalValue;
    }
    if (this._partialRedact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialRedact = this._partialRedact?.internalValue;
    }
    if (this._redact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redact = this._redact?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash.internalValue = undefined;
      this._partialRedact.internalValue = undefined;
      this._redact.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash.internalValue = value.hash;
      this._partialRedact.internalValue = value.partialRedact;
      this._redact.internalValue = value.redact;
    }
  }

  // hash - computed: false, optional: true, required: false
  private _hash = new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHashList(this, "hash", false);
  public get hash() {
    return this._hash;
  }
  public putHash(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHash[] | cdktn.IResolvable) {
    this._hash.internalValue = value;
  }
  public resetHash() {
    this._hash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash.internalValue;
  }

  // partial_redact - computed: false, optional: true, required: false
  private _partialRedact = new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedactList(this, "partial_redact", false);
  public get partialRedact() {
    return this._partialRedact;
  }
  public putPartialRedact(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedact[] | cdktn.IResolvable) {
    this._partialRedact.internalValue = value;
  }
  public resetPartialRedact() {
    this._partialRedact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialRedactInput() {
    return this._partialRedact.internalValue;
  }

  // redact - computed: false, optional: true, required: false
  private _redact = new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedactList(this, "redact", false);
  public get redact() {
    return this._redact;
  }
  public putRedact(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedact[] | cdktn.IResolvable) {
    this._redact.internalValue = value;
  }
  public resetRedact() {
    this._redact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactInput() {
    return this._redact.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatch[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustom {
  /**
  * Human-readable description providing context about a sensitive data scanner rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#description ObservabilityPipeline#description}
  */
  readonly description?: string;
  /**
  * A regular expression used to detect sensitive values. Must be a valid regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule?: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustomToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    rule: cdktn.stringToTerraform(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustomToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustom | cdktn.IResolvable): any {
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
    rule: {
      value: cdktn.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustomOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustom | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustom | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._rule = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._rule = value.rule;
    }
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

  // rule - computed: false, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustomList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustom[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustomOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibrary {
  /**
  * Human-readable description providing context about a sensitive data scanner rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#description ObservabilityPipeline#description}
  */
  readonly description?: string;
  /**
  * Identifier for a predefined pattern from the sensitive data scanner pattern library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to augment the pattern with recommended keywords (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#use_recommended_keywords ObservabilityPipeline#use_recommended_keywords}
  */
  readonly useRecommendedKeywords?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibraryToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibrary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    id: cdktn.stringToTerraform(struct!.id),
    use_recommended_keywords: cdktn.booleanToTerraform(struct!.useRecommendedKeywords),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibraryToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibrary | cdktn.IResolvable): any {
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
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_recommended_keywords: {
      value: cdktn.booleanToHclTerraform(struct!.useRecommendedKeywords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibraryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibrary | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._useRecommendedKeywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRecommendedKeywords = this._useRecommendedKeywords;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibrary | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._useRecommendedKeywords = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._id = value.id;
      this._useRecommendedKeywords = value.useRecommendedKeywords;
    }
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

  // id - computed: false, optional: true, required: false
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

  // use_recommended_keywords - computed: false, optional: true, required: false
  private _useRecommendedKeywords?: boolean | cdktn.IResolvable; 
  public get useRecommendedKeywords() {
    return this.getBooleanAttribute('use_recommended_keywords');
  }
  public set useRecommendedKeywords(value: boolean | cdktn.IResolvable) {
    this._useRecommendedKeywords = value;
  }
  public resetUseRecommendedKeywords() {
    this._useRecommendedKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRecommendedKeywordsInput() {
    return this._useRecommendedKeywords;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibraryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibrary[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibraryOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibraryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePattern {
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#custom ObservabilityPipeline#custom}
  */
  readonly custom?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustom[] | cdktn.IResolvable;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#library ObservabilityPipeline#library}
  */
  readonly library?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibrary[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustomToTerraform, true)(struct!.custom),
    library: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibraryToTerraform, true)(struct!.library),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustomToHclTerraform, true)(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustomList",
    },
    library: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibraryToHclTerraform, true)(struct!.library),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibraryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePattern | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._library?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.library = this._library?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePattern | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom.internalValue = undefined;
      this._library.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom.internalValue = value.custom;
      this._library.internalValue = value.library;
    }
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustomList(this, "custom", false);
  public get custom() {
    return this._custom;
  }
  public putCustom(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustom[] | cdktn.IResolvable) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // library - computed: false, optional: true, required: false
  private _library = new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibraryList(this, "library", false);
  public get library() {
    return this._library;
  }
  public putLibrary(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibrary[] | cdktn.IResolvable) {
    this._library.internalValue = value;
  }
  public resetLibrary() {
    this._library.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryInput() {
    return this._library.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePattern[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExclude {
  /**
  * The fields to exclude from scanning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}
  */
  readonly fields?: string[];
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExcludeToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExcludeToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExcludeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExclude | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExclude | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExcludeList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExclude[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExcludeOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeInclude {
  /**
  * The fields to include in scanning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}
  */
  readonly fields?: string[];
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeIncludeToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeInclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeIncludeToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeInclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeIncludeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeInclude | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeInclude | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeIncludeList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeInclude[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeIncludeOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScope {
  /**
  * Scan all fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#all ObservabilityPipeline#all}
  */
  readonly all?: boolean | cdktn.IResolvable;
  /**
  * exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#exclude ObservabilityPipeline#exclude}
  */
  readonly exclude?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExclude[] | cdktn.IResolvable;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeInclude[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    all: cdktn.booleanToTerraform(struct!.all),
    exclude: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExcludeToTerraform, true)(struct!.exclude),
    include: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeIncludeToTerraform, true)(struct!.include),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    all: {
      value: cdktn.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExcludeToHclTerraform, true)(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExcludeList",
    },
    include: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeIncludeToHclTerraform, true)(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScope | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScope | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all = undefined;
      this._exclude.internalValue = undefined;
      this._include.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all = value.all;
      this._exclude.internalValue = value.exclude;
      this._include.internalValue = value.include;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktn.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktn.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExclude[] | cdktn.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }

  // include - computed: false, optional: true, required: false
  private _include = new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeIncludeList(this, "include", false);
  public get include() {
    return this._include;
  }
  public putInclude(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeInclude[] | cdktn.IResolvable) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScope[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRule {
  /**
  * A name identifying the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * Tags assigned to this rule for filtering and classification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tags ObservabilityPipeline#tags}
  */
  readonly tags?: string[];
  /**
  * keyword_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#keyword_options ObservabilityPipeline#keyword_options}
  */
  readonly keywordOptions?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptions[] | cdktn.IResolvable;
  /**
  * on_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#on_match ObservabilityPipeline#on_match}
  */
  readonly onMatch?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatch[] | cdktn.IResolvable;
  /**
  * pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#pattern ObservabilityPipeline#pattern}
  */
  readonly pattern?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePattern[] | cdktn.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#scope ObservabilityPipeline#scope}
  */
  readonly scope?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScope[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    tags: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tags),
    keyword_options: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptionsToTerraform, true)(struct!.keywordOptions),
    on_match: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchToTerraform, true)(struct!.onMatch),
    pattern: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternToTerraform, true)(struct!.pattern),
    scope: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeToTerraform, true)(struct!.scope),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    keyword_options: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptionsToHclTerraform, true)(struct!.keywordOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptionsList",
    },
    on_match: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchToHclTerraform, true)(struct!.onMatch),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchList",
    },
    pattern: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternToHclTerraform, true)(struct!.pattern),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternList",
    },
    scope: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._keywordOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywordOptions = this._keywordOptions?.internalValue;
    }
    if (this._onMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onMatch = this._onMatch?.internalValue;
    }
    if (this._pattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern?.internalValue;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._keywordOptions.internalValue = undefined;
      this._onMatch.internalValue = undefined;
      this._pattern.internalValue = undefined;
      this._scope.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tags = value.tags;
      this._keywordOptions.internalValue = value.keywordOptions;
      this._onMatch.internalValue = value.onMatch;
      this._pattern.internalValue = value.pattern;
      this._scope.internalValue = value.scope;
    }
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

  // keyword_options - computed: false, optional: true, required: false
  private _keywordOptions = new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptionsList(this, "keyword_options", false);
  public get keywordOptions() {
    return this._keywordOptions;
  }
  public putKeywordOptions(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptions[] | cdktn.IResolvable) {
    this._keywordOptions.internalValue = value;
  }
  public resetKeywordOptions() {
    this._keywordOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordOptionsInput() {
    return this._keywordOptions.internalValue;
  }

  // on_match - computed: false, optional: true, required: false
  private _onMatch = new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchList(this, "on_match", false);
  public get onMatch() {
    return this._onMatch;
  }
  public putOnMatch(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatch[] | cdktn.IResolvable) {
    this._onMatch.internalValue = value;
  }
  public resetOnMatch() {
    this._onMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMatchInput() {
    return this._onMatch.internalValue;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern = new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternList(this, "pattern", false);
  public get pattern() {
    return this._pattern;
  }
  public putPattern(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePattern[] | cdktn.IResolvable) {
    this._pattern.internalValue = value;
  }
  public resetPattern() {
    this._pattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScope[] | cdktn.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRule[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScanner {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRule[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScanner | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleToTerraform, true)(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScanner | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScanner | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScanner | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRule[] | cdktn.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScanner[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayArray {
  /**
  * The path to the array field to split.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field: string;
  /**
  * A Datadog search query used to determine which logs this array split operation targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorSplitArrayArrayToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayArray | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    include: cdktn.stringToTerraform(struct!.include),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSplitArrayArrayToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayArray | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktn.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayArrayOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayArray | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayArray | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._include = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._include = value.include;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayArrayList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayArray[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayArrayOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayArrayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSplitArray {
  /**
  * array block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#array ObservabilityPipeline#array}
  */
  readonly array?: ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayArray[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorSplitArrayToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSplitArray | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    array: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSplitArrayArrayToTerraform, true)(struct!.array),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSplitArrayToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSplitArray | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    array: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSplitArrayArrayToHclTerraform, true)(struct!.array),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayArrayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorSplitArray | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._array?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorSplitArray | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._array.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._array.internalValue = value.array;
    }
  }

  // array - computed: false, optional: true, required: false
  private _array = new ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayArrayList(this, "array", false);
  public get array() {
    return this._array;
  }
  public putArray(value: ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayArray[] | cdktn.IResolvable) {
    this._array.internalValue = value;
  }
  public resetArray() {
    this._array.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorSplitArray[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimit {
  /**
  * How the per-tag override is applied. One of `limit_override`, `excluded`. Valid values are `limit_override`, `excluded`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#override_type ObservabilityPipeline#override_type}
  */
  readonly overrideType: string;
  /**
  * The tag key this override applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tag_key ObservabilityPipeline#tag_key}
  */
  readonly tagKey: string;
  /**
  * The cardinality cap for this tag. Required when `override_type` is `limit_override`; must be omitted when `override_type` is `excluded`. Value must be between 0 and 1000000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#value_limit ObservabilityPipeline#value_limit}
  */
  readonly valueLimit?: number;
}

export function observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimitToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    override_type: cdktn.stringToTerraform(struct!.overrideType),
    tag_key: cdktn.stringToTerraform(struct!.tagKey),
    value_limit: cdktn.numberToTerraform(struct!.valueLimit),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimitToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    override_type: {
      value: cdktn.stringToHclTerraform(struct!.overrideType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_key: {
      value: cdktn.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_limit: {
      value: cdktn.numberToHclTerraform(struct!.valueLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideType !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideType = this._overrideType;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._valueLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueLimit = this._valueLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overrideType = undefined;
      this._tagKey = undefined;
      this._valueLimit = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overrideType = value.overrideType;
      this._tagKey = value.tagKey;
      this._valueLimit = value.valueLimit;
    }
  }

  // override_type - computed: false, optional: false, required: true
  private _overrideType?: string; 
  public get overrideType() {
    return this.getStringAttribute('override_type');
  }
  public set overrideType(value: string) {
    this._overrideType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideTypeInput() {
    return this._overrideType;
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // value_limit - computed: false, optional: true, required: false
  private _valueLimit?: number; 
  public get valueLimit() {
    return this.getNumberAttribute('value_limit');
  }
  public set valueLimit(value: number) {
    this._valueLimit = value;
  }
  public resetValueLimit() {
    this._valueLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueLimitInput() {
    return this._valueLimit;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimitList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimit[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimitOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimit {
  /**
  * The action to take on this metric when the limit is exceeded. Required when `override_type` is `limit_override`; must be omitted when `override_type` is `excluded`. Valid values are `drop_tag`, `drop_event`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#limit_exceeded_action ObservabilityPipeline#limit_exceeded_action}
  */
  readonly limitExceededAction?: string;
  /**
  * The metric name this override applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#metric_name ObservabilityPipeline#metric_name}
  */
  readonly metricName: string;
  /**
  * How the per-metric override is applied. One of `limit_override`, `excluded`. Valid values are `limit_override`, `excluded`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#override_type ObservabilityPipeline#override_type}
  */
  readonly overrideType: string;
  /**
  * The cardinality cap for this metric. Required when `override_type` is `limit_override`; must be omitted when `override_type` is `excluded`. Value must be between 0 and 1000000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#value_limit ObservabilityPipeline#value_limit}
  */
  readonly valueLimit?: number;
  /**
  * per_tag_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#per_tag_limit ObservabilityPipeline#per_tag_limit}
  */
  readonly perTagLimit?: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimit[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    limit_exceeded_action: cdktn.stringToTerraform(struct!.limitExceededAction),
    metric_name: cdktn.stringToTerraform(struct!.metricName),
    override_type: cdktn.stringToTerraform(struct!.overrideType),
    value_limit: cdktn.numberToTerraform(struct!.valueLimit),
    per_tag_limit: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimitToTerraform, true)(struct!.perTagLimit),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    limit_exceeded_action: {
      value: cdktn.stringToHclTerraform(struct!.limitExceededAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktn.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_type: {
      value: cdktn.stringToHclTerraform(struct!.overrideType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_limit: {
      value: cdktn.numberToHclTerraform(struct!.valueLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_tag_limit: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimitToHclTerraform, true)(struct!.perTagLimit),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitExceededAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitExceededAction = this._limitExceededAction;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._overrideType !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideType = this._overrideType;
    }
    if (this._valueLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueLimit = this._valueLimit;
    }
    if (this._perTagLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTagLimit = this._perTagLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitExceededAction = undefined;
      this._metricName = undefined;
      this._overrideType = undefined;
      this._valueLimit = undefined;
      this._perTagLimit.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitExceededAction = value.limitExceededAction;
      this._metricName = value.metricName;
      this._overrideType = value.overrideType;
      this._valueLimit = value.valueLimit;
      this._perTagLimit.internalValue = value.perTagLimit;
    }
  }

  // limit_exceeded_action - computed: false, optional: true, required: false
  private _limitExceededAction?: string; 
  public get limitExceededAction() {
    return this.getStringAttribute('limit_exceeded_action');
  }
  public set limitExceededAction(value: string) {
    this._limitExceededAction = value;
  }
  public resetLimitExceededAction() {
    this._limitExceededAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitExceededActionInput() {
    return this._limitExceededAction;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // override_type - computed: false, optional: false, required: true
  private _overrideType?: string; 
  public get overrideType() {
    return this.getStringAttribute('override_type');
  }
  public set overrideType(value: string) {
    this._overrideType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideTypeInput() {
    return this._overrideType;
  }

  // value_limit - computed: false, optional: true, required: false
  private _valueLimit?: number; 
  public get valueLimit() {
    return this.getNumberAttribute('value_limit');
  }
  public set valueLimit(value: number) {
    this._valueLimit = value;
  }
  public resetValueLimit() {
    this._valueLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueLimitInput() {
    return this._valueLimit;
  }

  // per_tag_limit - computed: false, optional: true, required: false
  private _perTagLimit = new ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimitList(this, "per_tag_limit", false);
  public get perTagLimit() {
    return this._perTagLimit;
  }
  public putPerTagLimit(value: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitPerTagLimit[] | cdktn.IResolvable) {
    this._perTagLimit.internalValue = value;
  }
  public resetPerTagLimit() {
    this._perTagLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTagLimitInput() {
    return this._perTagLimit.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimit[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingMode {
  /**
  * The cardinality tracking algorithm to use. One of `exact_fingerprint`, `probabilistic`. Valid values are `exact_fingerprint`, `probabilistic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingModeToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingModeToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingModeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingMode | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingModeList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingMode[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingModeOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimit {
  /**
  * The default action to take when the cardinality limit is exceeded. One of `drop_tag`, `drop_event`. Valid values are `drop_tag`, `drop_event`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#limit_exceeded_action ObservabilityPipeline#limit_exceeded_action}
  */
  readonly limitExceededAction: string;
  /**
  * The default maximum number of distinct tag value combinations allowed per metric. Between 0 and 1000000. Value must be between 0 and 1000000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#value_limit ObservabilityPipeline#value_limit}
  */
  readonly valueLimit: number;
  /**
  * per_metric_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#per_metric_limit ObservabilityPipeline#per_metric_limit}
  */
  readonly perMetricLimit?: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimit[] | cdktn.IResolvable;
  /**
  * tracking_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tracking_mode ObservabilityPipeline#tracking_mode}
  */
  readonly trackingMode?: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingMode[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    limit_exceeded_action: cdktn.stringToTerraform(struct!.limitExceededAction),
    value_limit: cdktn.numberToTerraform(struct!.valueLimit),
    per_metric_limit: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitToTerraform, true)(struct!.perMetricLimit),
    tracking_mode: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingModeToTerraform, true)(struct!.trackingMode),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    limit_exceeded_action: {
      value: cdktn.stringToHclTerraform(struct!.limitExceededAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_limit: {
      value: cdktn.numberToHclTerraform(struct!.valueLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_metric_limit: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitToHclTerraform, true)(struct!.perMetricLimit),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitList",
    },
    tracking_mode: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingModeToHclTerraform, true)(struct!.trackingMode),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitExceededAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitExceededAction = this._limitExceededAction;
    }
    if (this._valueLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueLimit = this._valueLimit;
    }
    if (this._perMetricLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perMetricLimit = this._perMetricLimit?.internalValue;
    }
    if (this._trackingMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingMode = this._trackingMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitExceededAction = undefined;
      this._valueLimit = undefined;
      this._perMetricLimit.internalValue = undefined;
      this._trackingMode.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitExceededAction = value.limitExceededAction;
      this._valueLimit = value.valueLimit;
      this._perMetricLimit.internalValue = value.perMetricLimit;
      this._trackingMode.internalValue = value.trackingMode;
    }
  }

  // limit_exceeded_action - computed: false, optional: false, required: true
  private _limitExceededAction?: string; 
  public get limitExceededAction() {
    return this.getStringAttribute('limit_exceeded_action');
  }
  public set limitExceededAction(value: string) {
    this._limitExceededAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitExceededActionInput() {
    return this._limitExceededAction;
  }

  // value_limit - computed: false, optional: false, required: true
  private _valueLimit?: number; 
  public get valueLimit() {
    return this.getNumberAttribute('value_limit');
  }
  public set valueLimit(value: number) {
    this._valueLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueLimitInput() {
    return this._valueLimit;
  }

  // per_metric_limit - computed: false, optional: true, required: false
  private _perMetricLimit = new ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimitList(this, "per_metric_limit", false);
  public get perMetricLimit() {
    return this._perMetricLimit;
  }
  public putPerMetricLimit(value: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitPerMetricLimit[] | cdktn.IResolvable) {
    this._perMetricLimit.internalValue = value;
  }
  public resetPerMetricLimit() {
    this._perMetricLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perMetricLimitInput() {
    return this._perMetricLimit.internalValue;
  }

  // tracking_mode - computed: false, optional: true, required: false
  private _trackingMode = new ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingModeList(this, "tracking_mode", false);
  public get trackingMode() {
    return this._trackingMode;
  }
  public putTrackingMode(value: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitTrackingMode[] | cdktn.IResolvable) {
    this._trackingMode.internalValue = value;
  }
  public resetTrackingMode() {
    this._trackingMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingModeInput() {
    return this._trackingMode.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimit[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorThrottle {
  /**
  * Optional list of fields used to group events before applying throttling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#group_by ObservabilityPipeline#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The number of events to allow before throttling is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#threshold ObservabilityPipeline#threshold}
  */
  readonly threshold: number;
  /**
  * The time window in seconds over which the threshold applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#window ObservabilityPipeline#window}
  */
  readonly window: number;
}

export function observabilityPipelineConfigProcessorGroupProcessorThrottleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorThrottle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupBy),
    threshold: cdktn.numberToTerraform(struct!.threshold),
    window: cdktn.numberToTerraform(struct!.window),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorThrottleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorThrottle | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    group_by: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    threshold: {
      value: cdktn.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window: {
      value: cdktn.numberToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorThrottleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorThrottle | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorThrottle | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupBy = undefined;
      this._threshold = undefined;
      this._window = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupBy = value.groupBy;
      this._threshold = value.threshold;
      this._window = value.window;
    }
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // window - computed: false, optional: false, required: true
  private _window?: number; 
  public get window() {
    return this.getNumberAttribute('window');
  }
  public set window(value: number) {
    this._window = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorThrottleList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorThrottle[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorThrottleOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorThrottleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessor {
  /**
  * A human-friendly name for this processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#display_name ObservabilityPipeline#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether this processor is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#enabled ObservabilityPipeline#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The unique identifier for this processor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * add_env_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#add_env_vars ObservabilityPipeline#add_env_vars}
  */
  readonly addEnvVars?: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVars[] | cdktn.IResolvable;
  /**
  * add_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#add_fields ObservabilityPipeline#add_fields}
  */
  readonly addFields?: ObservabilityPipelineConfigProcessorGroupProcessorAddFields[] | cdktn.IResolvable;
  /**
  * add_hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#add_hostname ObservabilityPipeline#add_hostname}
  */
  readonly addHostname?: ObservabilityPipelineConfigProcessorGroupProcessorAddHostname[] | cdktn.IResolvable;
  /**
  * add_metric_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#add_metric_tags ObservabilityPipeline#add_metric_tags}
  */
  readonly addMetricTags?: ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTags[] | cdktn.IResolvable;
  /**
  * aggregate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#aggregate ObservabilityPipeline#aggregate}
  */
  readonly aggregate?: ObservabilityPipelineConfigProcessorGroupProcessorAggregate[] | cdktn.IResolvable;
  /**
  * custom_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#custom_processor ObservabilityPipeline#custom_processor}
  */
  readonly customProcessor?: ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessor[] | cdktn.IResolvable;
  /**
  * datadog_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#datadog_tags ObservabilityPipeline#datadog_tags}
  */
  readonly datadogTags?: ObservabilityPipelineConfigProcessorGroupProcessorDatadogTags[] | cdktn.IResolvable;
  /**
  * dedupe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#dedupe ObservabilityPipeline#dedupe}
  */
  readonly dedupe?: ObservabilityPipelineConfigProcessorGroupProcessorDedupe[] | cdktn.IResolvable;
  /**
  * enrichment_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#enrichment_table ObservabilityPipeline#enrichment_table}
  */
  readonly enrichmentTable?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTable[] | cdktn.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#filter ObservabilityPipeline#filter}
  */
  readonly filter?: ObservabilityPipelineConfigProcessorGroupProcessorFilter[] | cdktn.IResolvable;
  /**
  * generate_datadog_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#generate_datadog_metrics ObservabilityPipeline#generate_datadog_metrics}
  */
  readonly generateDatadogMetrics?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetrics[] | cdktn.IResolvable;
  /**
  * generate_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#generate_metrics ObservabilityPipeline#generate_metrics}
  */
  readonly generateMetrics?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetrics[] | cdktn.IResolvable;
  /**
  * metric_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#metric_tags ObservabilityPipeline#metric_tags}
  */
  readonly metricTags?: ObservabilityPipelineConfigProcessorGroupProcessorMetricTags[] | cdktn.IResolvable;
  /**
  * ocsf_mapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ocsf_mapper ObservabilityPipeline#ocsf_mapper}
  */
  readonly ocsfMapper?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapper[] | cdktn.IResolvable;
  /**
  * parse_grok block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#parse_grok ObservabilityPipeline#parse_grok}
  */
  readonly parseGrok?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrok[] | cdktn.IResolvable;
  /**
  * parse_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#parse_json ObservabilityPipeline#parse_json}
  */
  readonly parseJson?: ObservabilityPipelineConfigProcessorGroupProcessorParseJson[] | cdktn.IResolvable;
  /**
  * parse_xml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#parse_xml ObservabilityPipeline#parse_xml}
  */
  readonly parseXml?: ObservabilityPipelineConfigProcessorGroupProcessorParseXml[] | cdktn.IResolvable;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#quota ObservabilityPipeline#quota}
  */
  readonly quota?: ObservabilityPipelineConfigProcessorGroupProcessorQuota[] | cdktn.IResolvable;
  /**
  * reduce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#reduce ObservabilityPipeline#reduce}
  */
  readonly reduce?: ObservabilityPipelineConfigProcessorGroupProcessorReduce[] | cdktn.IResolvable;
  /**
  * remove_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#remove_fields ObservabilityPipeline#remove_fields}
  */
  readonly removeFields?: ObservabilityPipelineConfigProcessorGroupProcessorRemoveFields[] | cdktn.IResolvable;
  /**
  * rename_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#rename_fields ObservabilityPipeline#rename_fields}
  */
  readonly renameFields?: ObservabilityPipelineConfigProcessorGroupProcessorRenameFields[] | cdktn.IResolvable;
  /**
  * rename_metric_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#rename_metric_tags ObservabilityPipeline#rename_metric_tags}
  */
  readonly renameMetricTags?: ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTags[] | cdktn.IResolvable;
  /**
  * sample block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#sample ObservabilityPipeline#sample}
  */
  readonly sample?: ObservabilityPipelineConfigProcessorGroupProcessorSample[] | cdktn.IResolvable;
  /**
  * sensitive_data_scanner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#sensitive_data_scanner ObservabilityPipeline#sensitive_data_scanner}
  */
  readonly sensitiveDataScanner?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScanner[] | cdktn.IResolvable;
  /**
  * split_array block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#split_array ObservabilityPipeline#split_array}
  */
  readonly splitArray?: ObservabilityPipelineConfigProcessorGroupProcessorSplitArray[] | cdktn.IResolvable;
  /**
  * tag_cardinality_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tag_cardinality_limit ObservabilityPipeline#tag_cardinality_limit}
  */
  readonly tagCardinalityLimit?: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimit[] | cdktn.IResolvable;
  /**
  * throttle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#throttle ObservabilityPipeline#throttle}
  */
  readonly throttle?: ObservabilityPipelineConfigProcessorGroupProcessorThrottle[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    id: cdktn.stringToTerraform(struct!.id),
    include: cdktn.stringToTerraform(struct!.include),
    add_env_vars: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsToTerraform, true)(struct!.addEnvVars),
    add_fields: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorAddFieldsToTerraform, true)(struct!.addFields),
    add_hostname: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorAddHostnameToTerraform, true)(struct!.addHostname),
    add_metric_tags: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorAddMetricTagsToTerraform, true)(struct!.addMetricTags),
    aggregate: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorAggregateToTerraform, true)(struct!.aggregate),
    custom_processor: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorCustomProcessorToTerraform, true)(struct!.customProcessor),
    datadog_tags: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorDatadogTagsToTerraform, true)(struct!.datadogTags),
    dedupe: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorDedupeToTerraform, true)(struct!.dedupe),
    enrichment_table: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableToTerraform, true)(struct!.enrichmentTable),
    filter: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorFilterToTerraform, true)(struct!.filter),
    generate_datadog_metrics: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsToTerraform, true)(struct!.generateDatadogMetrics),
    generate_metrics: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorGenerateMetricsToTerraform, true)(struct!.generateMetrics),
    metric_tags: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorMetricTagsToTerraform, true)(struct!.metricTags),
    ocsf_mapper: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperToTerraform, true)(struct!.ocsfMapper),
    parse_grok: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorParseGrokToTerraform, true)(struct!.parseGrok),
    parse_json: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorParseJsonToTerraform, true)(struct!.parseJson),
    parse_xml: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorParseXmlToTerraform, true)(struct!.parseXml),
    quota: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorQuotaToTerraform, true)(struct!.quota),
    reduce: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorReduceToTerraform, true)(struct!.reduce),
    remove_fields: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorRemoveFieldsToTerraform, true)(struct!.removeFields),
    rename_fields: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorRenameFieldsToTerraform, true)(struct!.renameFields),
    rename_metric_tags: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsToTerraform, true)(struct!.renameMetricTags),
    sample: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSampleToTerraform, true)(struct!.sample),
    sensitive_data_scanner: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerToTerraform, true)(struct!.sensitiveDataScanner),
    split_array: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSplitArrayToTerraform, true)(struct!.splitArray),
    tag_cardinality_limit: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitToTerraform, true)(struct!.tagCardinalityLimit),
    throttle: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorThrottleToTerraform, true)(struct!.throttle),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktn.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_env_vars: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsToHclTerraform, true)(struct!.addEnvVars),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsList",
    },
    add_fields: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorAddFieldsToHclTerraform, true)(struct!.addFields),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsList",
    },
    add_hostname: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorAddHostnameToHclTerraform, true)(struct!.addHostname),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorAddHostnameList",
    },
    add_metric_tags: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorAddMetricTagsToHclTerraform, true)(struct!.addMetricTags),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsList",
    },
    aggregate: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorAggregateToHclTerraform, true)(struct!.aggregate),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorAggregateList",
    },
    custom_processor: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorCustomProcessorToHclTerraform, true)(struct!.customProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorList",
    },
    datadog_tags: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorDatadogTagsToHclTerraform, true)(struct!.datadogTags),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorDatadogTagsList",
    },
    dedupe: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorDedupeToHclTerraform, true)(struct!.dedupe),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorDedupeList",
    },
    enrichment_table: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableToHclTerraform, true)(struct!.enrichmentTable),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableList",
    },
    filter: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorFilterList",
    },
    generate_datadog_metrics: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsToHclTerraform, true)(struct!.generateDatadogMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsList",
    },
    generate_metrics: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorGenerateMetricsToHclTerraform, true)(struct!.generateMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsList",
    },
    metric_tags: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorMetricTagsToHclTerraform, true)(struct!.metricTags),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsList",
    },
    ocsf_mapper: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperToHclTerraform, true)(struct!.ocsfMapper),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperList",
    },
    parse_grok: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorParseGrokToHclTerraform, true)(struct!.parseGrok),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorParseGrokList",
    },
    parse_json: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorParseJsonToHclTerraform, true)(struct!.parseJson),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorParseJsonList",
    },
    parse_xml: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorParseXmlToHclTerraform, true)(struct!.parseXml),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorParseXmlList",
    },
    quota: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorQuotaToHclTerraform, true)(struct!.quota),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorQuotaList",
    },
    reduce: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorReduceToHclTerraform, true)(struct!.reduce),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorReduceList",
    },
    remove_fields: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorRemoveFieldsToHclTerraform, true)(struct!.removeFields),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorRemoveFieldsList",
    },
    rename_fields: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorRenameFieldsToHclTerraform, true)(struct!.renameFields),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsList",
    },
    rename_metric_tags: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsToHclTerraform, true)(struct!.renameMetricTags),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsList",
    },
    sample: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSampleToHclTerraform, true)(struct!.sample),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSampleList",
    },
    sensitive_data_scanner: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerToHclTerraform, true)(struct!.sensitiveDataScanner),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerList",
    },
    split_array: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorSplitArrayToHclTerraform, true)(struct!.splitArray),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayList",
    },
    tag_cardinality_limit: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitToHclTerraform, true)(struct!.tagCardinalityLimit),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitList",
    },
    throttle: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorThrottleToHclTerraform, true)(struct!.throttle),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorThrottleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._addEnvVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addEnvVars = this._addEnvVars?.internalValue;
    }
    if (this._addFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addFields = this._addFields?.internalValue;
    }
    if (this._addHostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHostname = this._addHostname?.internalValue;
    }
    if (this._addMetricTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addMetricTags = this._addMetricTags?.internalValue;
    }
    if (this._aggregate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregate = this._aggregate?.internalValue;
    }
    if (this._customProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProcessor = this._customProcessor?.internalValue;
    }
    if (this._datadogTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogTags = this._datadogTags?.internalValue;
    }
    if (this._dedupe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupe = this._dedupe?.internalValue;
    }
    if (this._enrichmentTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichmentTable = this._enrichmentTable?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._generateDatadogMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateDatadogMetrics = this._generateDatadogMetrics?.internalValue;
    }
    if (this._generateMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateMetrics = this._generateMetrics?.internalValue;
    }
    if (this._metricTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTags = this._metricTags?.internalValue;
    }
    if (this._ocsfMapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocsfMapper = this._ocsfMapper?.internalValue;
    }
    if (this._parseGrok?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseGrok = this._parseGrok?.internalValue;
    }
    if (this._parseJson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseJson = this._parseJson?.internalValue;
    }
    if (this._parseXml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseXml = this._parseXml?.internalValue;
    }
    if (this._quota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota?.internalValue;
    }
    if (this._reduce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reduce = this._reduce?.internalValue;
    }
    if (this._removeFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeFields = this._removeFields?.internalValue;
    }
    if (this._renameFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameFields = this._renameFields?.internalValue;
    }
    if (this._renameMetricTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameMetricTags = this._renameMetricTags?.internalValue;
    }
    if (this._sample?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sample = this._sample?.internalValue;
    }
    if (this._sensitiveDataScanner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataScanner = this._sensitiveDataScanner?.internalValue;
    }
    if (this._splitArray?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitArray = this._splitArray?.internalValue;
    }
    if (this._tagCardinalityLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagCardinalityLimit = this._tagCardinalityLimit?.internalValue;
    }
    if (this._throttle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttle = this._throttle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._include = undefined;
      this._addEnvVars.internalValue = undefined;
      this._addFields.internalValue = undefined;
      this._addHostname.internalValue = undefined;
      this._addMetricTags.internalValue = undefined;
      this._aggregate.internalValue = undefined;
      this._customProcessor.internalValue = undefined;
      this._datadogTags.internalValue = undefined;
      this._dedupe.internalValue = undefined;
      this._enrichmentTable.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._generateDatadogMetrics.internalValue = undefined;
      this._generateMetrics.internalValue = undefined;
      this._metricTags.internalValue = undefined;
      this._ocsfMapper.internalValue = undefined;
      this._parseGrok.internalValue = undefined;
      this._parseJson.internalValue = undefined;
      this._parseXml.internalValue = undefined;
      this._quota.internalValue = undefined;
      this._reduce.internalValue = undefined;
      this._removeFields.internalValue = undefined;
      this._renameFields.internalValue = undefined;
      this._renameMetricTags.internalValue = undefined;
      this._sample.internalValue = undefined;
      this._sensitiveDataScanner.internalValue = undefined;
      this._splitArray.internalValue = undefined;
      this._tagCardinalityLimit.internalValue = undefined;
      this._throttle.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._enabled = value.enabled;
      this._id = value.id;
      this._include = value.include;
      this._addEnvVars.internalValue = value.addEnvVars;
      this._addFields.internalValue = value.addFields;
      this._addHostname.internalValue = value.addHostname;
      this._addMetricTags.internalValue = value.addMetricTags;
      this._aggregate.internalValue = value.aggregate;
      this._customProcessor.internalValue = value.customProcessor;
      this._datadogTags.internalValue = value.datadogTags;
      this._dedupe.internalValue = value.dedupe;
      this._enrichmentTable.internalValue = value.enrichmentTable;
      this._filter.internalValue = value.filter;
      this._generateDatadogMetrics.internalValue = value.generateDatadogMetrics;
      this._generateMetrics.internalValue = value.generateMetrics;
      this._metricTags.internalValue = value.metricTags;
      this._ocsfMapper.internalValue = value.ocsfMapper;
      this._parseGrok.internalValue = value.parseGrok;
      this._parseJson.internalValue = value.parseJson;
      this._parseXml.internalValue = value.parseXml;
      this._quota.internalValue = value.quota;
      this._reduce.internalValue = value.reduce;
      this._removeFields.internalValue = value.removeFields;
      this._renameFields.internalValue = value.renameFields;
      this._renameMetricTags.internalValue = value.renameMetricTags;
      this._sample.internalValue = value.sample;
      this._sensitiveDataScanner.internalValue = value.sensitiveDataScanner;
      this._splitArray.internalValue = value.splitArray;
      this._tagCardinalityLimit.internalValue = value.tagCardinalityLimit;
      this._throttle.internalValue = value.throttle;
    }
  }

  // display_name - computed: false, optional: true, required: false
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // add_env_vars - computed: false, optional: true, required: false
  private _addEnvVars = new ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsList(this, "add_env_vars", false);
  public get addEnvVars() {
    return this._addEnvVars;
  }
  public putAddEnvVars(value: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVars[] | cdktn.IResolvable) {
    this._addEnvVars.internalValue = value;
  }
  public resetAddEnvVars() {
    this._addEnvVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addEnvVarsInput() {
    return this._addEnvVars.internalValue;
  }

  // add_fields - computed: false, optional: true, required: false
  private _addFields = new ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsList(this, "add_fields", false);
  public get addFields() {
    return this._addFields;
  }
  public putAddFields(value: ObservabilityPipelineConfigProcessorGroupProcessorAddFields[] | cdktn.IResolvable) {
    this._addFields.internalValue = value;
  }
  public resetAddFields() {
    this._addFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addFieldsInput() {
    return this._addFields.internalValue;
  }

  // add_hostname - computed: false, optional: true, required: false
  private _addHostname = new ObservabilityPipelineConfigProcessorGroupProcessorAddHostnameList(this, "add_hostname", false);
  public get addHostname() {
    return this._addHostname;
  }
  public putAddHostname(value: ObservabilityPipelineConfigProcessorGroupProcessorAddHostname[] | cdktn.IResolvable) {
    this._addHostname.internalValue = value;
  }
  public resetAddHostname() {
    this._addHostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHostnameInput() {
    return this._addHostname.internalValue;
  }

  // add_metric_tags - computed: false, optional: true, required: false
  private _addMetricTags = new ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsList(this, "add_metric_tags", false);
  public get addMetricTags() {
    return this._addMetricTags;
  }
  public putAddMetricTags(value: ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTags[] | cdktn.IResolvable) {
    this._addMetricTags.internalValue = value;
  }
  public resetAddMetricTags() {
    this._addMetricTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addMetricTagsInput() {
    return this._addMetricTags.internalValue;
  }

  // aggregate - computed: false, optional: true, required: false
  private _aggregate = new ObservabilityPipelineConfigProcessorGroupProcessorAggregateList(this, "aggregate", false);
  public get aggregate() {
    return this._aggregate;
  }
  public putAggregate(value: ObservabilityPipelineConfigProcessorGroupProcessorAggregate[] | cdktn.IResolvable) {
    this._aggregate.internalValue = value;
  }
  public resetAggregate() {
    this._aggregate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateInput() {
    return this._aggregate.internalValue;
  }

  // custom_processor - computed: false, optional: true, required: false
  private _customProcessor = new ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorList(this, "custom_processor", false);
  public get customProcessor() {
    return this._customProcessor;
  }
  public putCustomProcessor(value: ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessor[] | cdktn.IResolvable) {
    this._customProcessor.internalValue = value;
  }
  public resetCustomProcessor() {
    this._customProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProcessorInput() {
    return this._customProcessor.internalValue;
  }

  // datadog_tags - computed: false, optional: true, required: false
  private _datadogTags = new ObservabilityPipelineConfigProcessorGroupProcessorDatadogTagsList(this, "datadog_tags", false);
  public get datadogTags() {
    return this._datadogTags;
  }
  public putDatadogTags(value: ObservabilityPipelineConfigProcessorGroupProcessorDatadogTags[] | cdktn.IResolvable) {
    this._datadogTags.internalValue = value;
  }
  public resetDatadogTags() {
    this._datadogTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogTagsInput() {
    return this._datadogTags.internalValue;
  }

  // dedupe - computed: false, optional: true, required: false
  private _dedupe = new ObservabilityPipelineConfigProcessorGroupProcessorDedupeList(this, "dedupe", false);
  public get dedupe() {
    return this._dedupe;
  }
  public putDedupe(value: ObservabilityPipelineConfigProcessorGroupProcessorDedupe[] | cdktn.IResolvable) {
    this._dedupe.internalValue = value;
  }
  public resetDedupe() {
    this._dedupe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupeInput() {
    return this._dedupe.internalValue;
  }

  // enrichment_table - computed: false, optional: true, required: false
  private _enrichmentTable = new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableList(this, "enrichment_table", false);
  public get enrichmentTable() {
    return this._enrichmentTable;
  }
  public putEnrichmentTable(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTable[] | cdktn.IResolvable) {
    this._enrichmentTable.internalValue = value;
  }
  public resetEnrichmentTable() {
    this._enrichmentTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentTableInput() {
    return this._enrichmentTable.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ObservabilityPipelineConfigProcessorGroupProcessorFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ObservabilityPipelineConfigProcessorGroupProcessorFilter[] | cdktn.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // generate_datadog_metrics - computed: false, optional: true, required: false
  private _generateDatadogMetrics = new ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsList(this, "generate_datadog_metrics", false);
  public get generateDatadogMetrics() {
    return this._generateDatadogMetrics;
  }
  public putGenerateDatadogMetrics(value: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetrics[] | cdktn.IResolvable) {
    this._generateDatadogMetrics.internalValue = value;
  }
  public resetGenerateDatadogMetrics() {
    this._generateDatadogMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateDatadogMetricsInput() {
    return this._generateDatadogMetrics.internalValue;
  }

  // generate_metrics - computed: false, optional: true, required: false
  private _generateMetrics = new ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsList(this, "generate_metrics", false);
  public get generateMetrics() {
    return this._generateMetrics;
  }
  public putGenerateMetrics(value: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetrics[] | cdktn.IResolvable) {
    this._generateMetrics.internalValue = value;
  }
  public resetGenerateMetrics() {
    this._generateMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateMetricsInput() {
    return this._generateMetrics.internalValue;
  }

  // metric_tags - computed: false, optional: true, required: false
  private _metricTags = new ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsList(this, "metric_tags", false);
  public get metricTags() {
    return this._metricTags;
  }
  public putMetricTags(value: ObservabilityPipelineConfigProcessorGroupProcessorMetricTags[] | cdktn.IResolvable) {
    this._metricTags.internalValue = value;
  }
  public resetMetricTags() {
    this._metricTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTagsInput() {
    return this._metricTags.internalValue;
  }

  // ocsf_mapper - computed: false, optional: true, required: false
  private _ocsfMapper = new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperList(this, "ocsf_mapper", false);
  public get ocsfMapper() {
    return this._ocsfMapper;
  }
  public putOcsfMapper(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapper[] | cdktn.IResolvable) {
    this._ocsfMapper.internalValue = value;
  }
  public resetOcsfMapper() {
    this._ocsfMapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocsfMapperInput() {
    return this._ocsfMapper.internalValue;
  }

  // parse_grok - computed: false, optional: true, required: false
  private _parseGrok = new ObservabilityPipelineConfigProcessorGroupProcessorParseGrokList(this, "parse_grok", false);
  public get parseGrok() {
    return this._parseGrok;
  }
  public putParseGrok(value: ObservabilityPipelineConfigProcessorGroupProcessorParseGrok[] | cdktn.IResolvable) {
    this._parseGrok.internalValue = value;
  }
  public resetParseGrok() {
    this._parseGrok.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseGrokInput() {
    return this._parseGrok.internalValue;
  }

  // parse_json - computed: false, optional: true, required: false
  private _parseJson = new ObservabilityPipelineConfigProcessorGroupProcessorParseJsonList(this, "parse_json", false);
  public get parseJson() {
    return this._parseJson;
  }
  public putParseJson(value: ObservabilityPipelineConfigProcessorGroupProcessorParseJson[] | cdktn.IResolvable) {
    this._parseJson.internalValue = value;
  }
  public resetParseJson() {
    this._parseJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseJsonInput() {
    return this._parseJson.internalValue;
  }

  // parse_xml - computed: false, optional: true, required: false
  private _parseXml = new ObservabilityPipelineConfigProcessorGroupProcessorParseXmlList(this, "parse_xml", false);
  public get parseXml() {
    return this._parseXml;
  }
  public putParseXml(value: ObservabilityPipelineConfigProcessorGroupProcessorParseXml[] | cdktn.IResolvable) {
    this._parseXml.internalValue = value;
  }
  public resetParseXml() {
    this._parseXml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseXmlInput() {
    return this._parseXml.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new ObservabilityPipelineConfigProcessorGroupProcessorQuotaList(this, "quota", false);
  public get quota() {
    return this._quota;
  }
  public putQuota(value: ObservabilityPipelineConfigProcessorGroupProcessorQuota[] | cdktn.IResolvable) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // reduce - computed: false, optional: true, required: false
  private _reduce = new ObservabilityPipelineConfigProcessorGroupProcessorReduceList(this, "reduce", false);
  public get reduce() {
    return this._reduce;
  }
  public putReduce(value: ObservabilityPipelineConfigProcessorGroupProcessorReduce[] | cdktn.IResolvable) {
    this._reduce.internalValue = value;
  }
  public resetReduce() {
    this._reduce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reduceInput() {
    return this._reduce.internalValue;
  }

  // remove_fields - computed: false, optional: true, required: false
  private _removeFields = new ObservabilityPipelineConfigProcessorGroupProcessorRemoveFieldsList(this, "remove_fields", false);
  public get removeFields() {
    return this._removeFields;
  }
  public putRemoveFields(value: ObservabilityPipelineConfigProcessorGroupProcessorRemoveFields[] | cdktn.IResolvable) {
    this._removeFields.internalValue = value;
  }
  public resetRemoveFields() {
    this._removeFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeFieldsInput() {
    return this._removeFields.internalValue;
  }

  // rename_fields - computed: false, optional: true, required: false
  private _renameFields = new ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsList(this, "rename_fields", false);
  public get renameFields() {
    return this._renameFields;
  }
  public putRenameFields(value: ObservabilityPipelineConfigProcessorGroupProcessorRenameFields[] | cdktn.IResolvable) {
    this._renameFields.internalValue = value;
  }
  public resetRenameFields() {
    this._renameFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameFieldsInput() {
    return this._renameFields.internalValue;
  }

  // rename_metric_tags - computed: false, optional: true, required: false
  private _renameMetricTags = new ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTagsList(this, "rename_metric_tags", false);
  public get renameMetricTags() {
    return this._renameMetricTags;
  }
  public putRenameMetricTags(value: ObservabilityPipelineConfigProcessorGroupProcessorRenameMetricTags[] | cdktn.IResolvable) {
    this._renameMetricTags.internalValue = value;
  }
  public resetRenameMetricTags() {
    this._renameMetricTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameMetricTagsInput() {
    return this._renameMetricTags.internalValue;
  }

  // sample - computed: false, optional: true, required: false
  private _sample = new ObservabilityPipelineConfigProcessorGroupProcessorSampleList(this, "sample", false);
  public get sample() {
    return this._sample;
  }
  public putSample(value: ObservabilityPipelineConfigProcessorGroupProcessorSample[] | cdktn.IResolvable) {
    this._sample.internalValue = value;
  }
  public resetSample() {
    this._sample.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleInput() {
    return this._sample.internalValue;
  }

  // sensitive_data_scanner - computed: false, optional: true, required: false
  private _sensitiveDataScanner = new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerList(this, "sensitive_data_scanner", false);
  public get sensitiveDataScanner() {
    return this._sensitiveDataScanner;
  }
  public putSensitiveDataScanner(value: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScanner[] | cdktn.IResolvable) {
    this._sensitiveDataScanner.internalValue = value;
  }
  public resetSensitiveDataScanner() {
    this._sensitiveDataScanner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataScannerInput() {
    return this._sensitiveDataScanner.internalValue;
  }

  // split_array - computed: false, optional: true, required: false
  private _splitArray = new ObservabilityPipelineConfigProcessorGroupProcessorSplitArrayList(this, "split_array", false);
  public get splitArray() {
    return this._splitArray;
  }
  public putSplitArray(value: ObservabilityPipelineConfigProcessorGroupProcessorSplitArray[] | cdktn.IResolvable) {
    this._splitArray.internalValue = value;
  }
  public resetSplitArray() {
    this._splitArray.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitArrayInput() {
    return this._splitArray.internalValue;
  }

  // tag_cardinality_limit - computed: false, optional: true, required: false
  private _tagCardinalityLimit = new ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimitList(this, "tag_cardinality_limit", false);
  public get tagCardinalityLimit() {
    return this._tagCardinalityLimit;
  }
  public putTagCardinalityLimit(value: ObservabilityPipelineConfigProcessorGroupProcessorTagCardinalityLimit[] | cdktn.IResolvable) {
    this._tagCardinalityLimit.internalValue = value;
  }
  public resetTagCardinalityLimit() {
    this._tagCardinalityLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagCardinalityLimitInput() {
    return this._tagCardinalityLimit.internalValue;
  }

  // throttle - computed: false, optional: true, required: false
  private _throttle = new ObservabilityPipelineConfigProcessorGroupProcessorThrottleList(this, "throttle", false);
  public get throttle() {
    return this._throttle;
  }
  public putThrottle(value: ObservabilityPipelineConfigProcessorGroupProcessorThrottle[] | cdktn.IResolvable) {
    this._throttle.internalValue = value;
  }
  public resetThrottle() {
    this._throttle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleInput() {
    return this._throttle.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessor[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroup {
  /**
  * A human-friendly name of the processor group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#display_name ObservabilityPipeline#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether this processor group is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#enabled ObservabilityPipeline#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * The unique ID of the processor group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A Datadog search query used to determine which logs this processor group targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * A list of component IDs whose output is used as the input for this processor group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#processor ObservabilityPipeline#processor}
  */
  readonly processor?: ObservabilityPipelineConfigProcessorGroupProcessor[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupToTerraform(struct?: ObservabilityPipelineConfigProcessorGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    id: cdktn.stringToTerraform(struct!.id),
    include: cdktn.stringToTerraform(struct!.include),
    inputs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputs),
    processor: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorToTerraform, true)(struct!.processor),
  }
}


export function observabilityPipelineConfigProcessorGroupToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktn.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inputs: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    processor: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._include = undefined;
      this._inputs = undefined;
      this._processor.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._enabled = value.enabled;
      this._id = value.id;
      this._include = value.include;
      this._inputs = value.inputs;
      this._processor.internalValue = value.processor;
    }
  }

  // display_name - computed: false, optional: true, required: false
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // include - computed: false, optional: false, required: true
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // inputs - computed: false, optional: false, required: true
  private _inputs?: string[]; 
  public get inputs() {
    return this.getListAttribute('inputs');
  }
  public set inputs(value: string[]) {
    this._inputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs;
  }

  // processor - computed: false, optional: true, required: false
  private _processor = new ObservabilityPipelineConfigProcessorGroupProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: ObservabilityPipelineConfigProcessorGroupProcessor[] | cdktn.IResolvable) {
    this._processor.internalValue = value;
  }
  public resetProcessor() {
    this._processor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroup[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceAmazonDataFirehoseAuth {
  /**
  * The Amazon Resource Name (ARN) of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#assume_role ObservabilityPipeline#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * A unique identifier for cross-account role assumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#external_id ObservabilityPipeline#external_id}
  */
  readonly externalId?: string;
  /**
  * A session identifier used for logging and tracing the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#session_name ObservabilityPipeline#session_name}
  */
  readonly sessionName?: string;
}

export function observabilityPipelineConfigSourceAmazonDataFirehoseAuthToTerraform(struct?: ObservabilityPipelineConfigSourceAmazonDataFirehoseAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    assume_role: cdktn.stringToTerraform(struct!.assumeRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    session_name: cdktn.stringToTerraform(struct!.sessionName),
  }
}


export function observabilityPipelineConfigSourceAmazonDataFirehoseAuthToHclTerraform(struct?: ObservabilityPipelineConfigSourceAmazonDataFirehoseAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    assume_role: {
      value: cdktn.stringToHclTerraform(struct!.assumeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktn.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceAmazonDataFirehoseAuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceAmazonDataFirehoseAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRole = this._assumeRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._sessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionName = this._sessionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceAmazonDataFirehoseAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assumeRole = undefined;
      this._externalId = undefined;
      this._sessionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assumeRole = value.assumeRole;
      this._externalId = value.externalId;
      this._sessionName = value.sessionName;
    }
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: string; 
  public get assumeRole() {
    return this.getStringAttribute('assume_role');
  }
  public set assumeRole(value: string) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // session_name - computed: false, optional: true, required: false
  private _sessionName?: string; 
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
  }
}

export class ObservabilityPipelineConfigSourceAmazonDataFirehoseAuthList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceAmazonDataFirehoseAuth[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceAmazonDataFirehoseAuthOutputReference {
    return new ObservabilityPipelineConfigSourceAmazonDataFirehoseAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceAmazonDataFirehoseTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigSourceAmazonDataFirehoseTlsToTerraform(struct?: ObservabilityPipelineConfigSourceAmazonDataFirehoseTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
  }
}


export function observabilityPipelineConfigSourceAmazonDataFirehoseTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceAmazonDataFirehoseTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceAmazonDataFirehoseTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceAmazonDataFirehoseTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceAmazonDataFirehoseTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }
}

export class ObservabilityPipelineConfigSourceAmazonDataFirehoseTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceAmazonDataFirehoseTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceAmazonDataFirehoseTlsOutputReference {
    return new ObservabilityPipelineConfigSourceAmazonDataFirehoseTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceAmazonDataFirehose {
  /**
  * Name of the environment variable or secret that holds the listen address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigSourceAmazonDataFirehoseAuth[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceAmazonDataFirehoseTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceAmazonDataFirehoseToTerraform(struct?: ObservabilityPipelineConfigSourceAmazonDataFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    auth: cdktn.listMapper(observabilityPipelineConfigSourceAmazonDataFirehoseAuthToTerraform, true)(struct!.auth),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceAmazonDataFirehoseTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceAmazonDataFirehoseToHclTerraform(struct?: ObservabilityPipelineConfigSourceAmazonDataFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_key: {
      value: cdktn.stringToHclTerraform(struct!.addressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceAmazonDataFirehoseAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceAmazonDataFirehoseAuthList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceAmazonDataFirehoseTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceAmazonDataFirehoseTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceAmazonDataFirehoseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceAmazonDataFirehose | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressKey = this._addressKey;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceAmazonDataFirehose | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressKey = undefined;
      this._auth.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressKey = value.addressKey;
      this._auth.internalValue = value.auth;
      this._tls.internalValue = value.tls;
    }
  }

  // address_key - computed: false, optional: true, required: false
  private _addressKey?: string; 
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }
  public set addressKey(value: string) {
    this._addressKey = value;
  }
  public resetAddressKey() {
    this._addressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressKeyInput() {
    return this._addressKey;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigSourceAmazonDataFirehoseAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigSourceAmazonDataFirehoseAuth[] | cdktn.IResolvable) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceAmazonDataFirehoseTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceAmazonDataFirehoseTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceAmazonDataFirehoseList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceAmazonDataFirehose[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceAmazonDataFirehoseOutputReference {
    return new ObservabilityPipelineConfigSourceAmazonDataFirehoseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceAmazonS3Auth {
  /**
  * The Amazon Resource Name (ARN) of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#assume_role ObservabilityPipeline#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * A unique identifier for cross-account role assumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#external_id ObservabilityPipeline#external_id}
  */
  readonly externalId?: string;
  /**
  * A session identifier used for logging and tracing the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#session_name ObservabilityPipeline#session_name}
  */
  readonly sessionName?: string;
}

export function observabilityPipelineConfigSourceAmazonS3AuthToTerraform(struct?: ObservabilityPipelineConfigSourceAmazonS3Auth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    assume_role: cdktn.stringToTerraform(struct!.assumeRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    session_name: cdktn.stringToTerraform(struct!.sessionName),
  }
}


export function observabilityPipelineConfigSourceAmazonS3AuthToHclTerraform(struct?: ObservabilityPipelineConfigSourceAmazonS3Auth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    assume_role: {
      value: cdktn.stringToHclTerraform(struct!.assumeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id: {
      value: cdktn.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktn.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceAmazonS3AuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceAmazonS3Auth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRole = this._assumeRole;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._sessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionName = this._sessionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceAmazonS3Auth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assumeRole = undefined;
      this._externalId = undefined;
      this._sessionName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assumeRole = value.assumeRole;
      this._externalId = value.externalId;
      this._sessionName = value.sessionName;
    }
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: string; 
  public get assumeRole() {
    return this.getStringAttribute('assume_role');
  }
  public set assumeRole(value: string) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // session_name - computed: false, optional: true, required: false
  private _sessionName?: string; 
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
  public set sessionName(value: string) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName;
  }
}

export class ObservabilityPipelineConfigSourceAmazonS3AuthList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceAmazonS3Auth[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceAmazonS3AuthOutputReference {
    return new ObservabilityPipelineConfigSourceAmazonS3AuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceAmazonS3Tls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigSourceAmazonS3TlsToTerraform(struct?: ObservabilityPipelineConfigSourceAmazonS3Tls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
  }
}


export function observabilityPipelineConfigSourceAmazonS3TlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceAmazonS3Tls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceAmazonS3TlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceAmazonS3Tls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceAmazonS3Tls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }
}

export class ObservabilityPipelineConfigSourceAmazonS3TlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceAmazonS3Tls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceAmazonS3TlsOutputReference {
    return new ObservabilityPipelineConfigSourceAmazonS3TlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceAmazonS3 {
  /**
  * Compression format for objects retrieved from the S3 bucket. Use `auto` to detect compression from the object's Content-Encoding header or file extension. Valid values are `auto`, `none`, `gzip`, `zstd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#compression ObservabilityPipeline#compression}
  */
  readonly compression?: string;
  /**
  * AWS region where the S3 bucket resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
  /**
  * Name of the environment variable or secret that holds the S3 bucket URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#url_key ObservabilityPipeline#url_key}
  */
  readonly urlKey?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigSourceAmazonS3Auth[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceAmazonS3Tls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceAmazonS3ToTerraform(struct?: ObservabilityPipelineConfigSourceAmazonS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression: cdktn.stringToTerraform(struct!.compression),
    region: cdktn.stringToTerraform(struct!.region),
    url_key: cdktn.stringToTerraform(struct!.urlKey),
    auth: cdktn.listMapper(observabilityPipelineConfigSourceAmazonS3AuthToTerraform, true)(struct!.auth),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceAmazonS3TlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceAmazonS3ToHclTerraform(struct?: ObservabilityPipelineConfigSourceAmazonS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_key: {
      value: cdktn.stringToHclTerraform(struct!.urlKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceAmazonS3AuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceAmazonS3AuthList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceAmazonS3TlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceAmazonS3TlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceAmazonS3OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceAmazonS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._urlKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlKey = this._urlKey;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceAmazonS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compression = undefined;
      this._region = undefined;
      this._urlKey = undefined;
      this._auth.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compression = value.compression;
      this._region = value.region;
      this._urlKey = value.urlKey;
      this._auth.internalValue = value.auth;
      this._tls.internalValue = value.tls;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // url_key - computed: false, optional: true, required: false
  private _urlKey?: string; 
  public get urlKey() {
    return this.getStringAttribute('url_key');
  }
  public set urlKey(value: string) {
    this._urlKey = value;
  }
  public resetUrlKey() {
    this._urlKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlKeyInput() {
    return this._urlKey;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigSourceAmazonS3AuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigSourceAmazonS3Auth[] | cdktn.IResolvable) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceAmazonS3TlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceAmazonS3Tls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceAmazonS3List extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceAmazonS3[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceAmazonS3OutputReference {
    return new ObservabilityPipelineConfigSourceAmazonS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceDatadogAgentTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigSourceDatadogAgentTlsToTerraform(struct?: ObservabilityPipelineConfigSourceDatadogAgentTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
  }
}


export function observabilityPipelineConfigSourceDatadogAgentTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceDatadogAgentTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceDatadogAgentTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceDatadogAgentTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceDatadogAgentTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }
}

export class ObservabilityPipelineConfigSourceDatadogAgentTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceDatadogAgentTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceDatadogAgentTlsOutputReference {
    return new ObservabilityPipelineConfigSourceDatadogAgentTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceDatadogAgent {
  /**
  * Name of the environment variable or secret that holds the listen address for the Datadog Agent source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceDatadogAgentTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceDatadogAgentToTerraform(struct?: ObservabilityPipelineConfigSourceDatadogAgent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceDatadogAgentTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceDatadogAgentToHclTerraform(struct?: ObservabilityPipelineConfigSourceDatadogAgent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_key: {
      value: cdktn.stringToHclTerraform(struct!.addressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceDatadogAgentTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceDatadogAgentTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceDatadogAgentOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceDatadogAgent | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressKey = this._addressKey;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceDatadogAgent | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressKey = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressKey = value.addressKey;
      this._tls.internalValue = value.tls;
    }
  }

  // address_key - computed: false, optional: true, required: false
  private _addressKey?: string; 
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }
  public set addressKey(value: string) {
    this._addressKey = value;
  }
  public resetAddressKey() {
    this._addressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressKeyInput() {
    return this._addressKey;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceDatadogAgentTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceDatadogAgentTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceDatadogAgentList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceDatadogAgent[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceDatadogAgentOutputReference {
    return new ObservabilityPipelineConfigSourceDatadogAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceFluentBitTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate connecting clients' TLS certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceFluentBitTlsToTerraform(struct?: ObservabilityPipelineConfigSourceFluentBitTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
    verify_certificate: cdktn.booleanToTerraform(struct!.verifyCertificate),
  }
}


export function observabilityPipelineConfigSourceFluentBitTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceFluentBitTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_certificate: {
      value: cdktn.booleanToHclTerraform(struct!.verifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceFluentBitTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceFluentBitTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    if (this._verifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificate = this._verifyCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceFluentBitTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
      this._verifyCertificate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
      this._verifyCertificate = value.verifyCertificate;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: boolean | cdktn.IResolvable; 
  public get verifyCertificate() {
    return this.getBooleanAttribute('verify_certificate');
  }
  public set verifyCertificate(value: boolean | cdktn.IResolvable) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }
}

export class ObservabilityPipelineConfigSourceFluentBitTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceFluentBitTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceFluentBitTlsOutputReference {
    return new ObservabilityPipelineConfigSourceFluentBitTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceFluentBit {
  /**
  * Name of the environment variable or secret that holds the listen address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceFluentBitTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceFluentBitToTerraform(struct?: ObservabilityPipelineConfigSourceFluentBit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceFluentBitTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceFluentBitToHclTerraform(struct?: ObservabilityPipelineConfigSourceFluentBit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_key: {
      value: cdktn.stringToHclTerraform(struct!.addressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceFluentBitTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceFluentBitTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceFluentBitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceFluentBit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressKey = this._addressKey;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceFluentBit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressKey = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressKey = value.addressKey;
      this._tls.internalValue = value.tls;
    }
  }

  // address_key - computed: false, optional: true, required: false
  private _addressKey?: string; 
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }
  public set addressKey(value: string) {
    this._addressKey = value;
  }
  public resetAddressKey() {
    this._addressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressKeyInput() {
    return this._addressKey;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceFluentBitTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceFluentBitTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceFluentBitList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceFluentBit[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceFluentBitOutputReference {
    return new ObservabilityPipelineConfigSourceFluentBitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceFluentdTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate connecting clients' TLS certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceFluentdTlsToTerraform(struct?: ObservabilityPipelineConfigSourceFluentdTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
    verify_certificate: cdktn.booleanToTerraform(struct!.verifyCertificate),
  }
}


export function observabilityPipelineConfigSourceFluentdTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceFluentdTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_certificate: {
      value: cdktn.booleanToHclTerraform(struct!.verifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceFluentdTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceFluentdTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    if (this._verifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificate = this._verifyCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceFluentdTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
      this._verifyCertificate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
      this._verifyCertificate = value.verifyCertificate;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: boolean | cdktn.IResolvable; 
  public get verifyCertificate() {
    return this.getBooleanAttribute('verify_certificate');
  }
  public set verifyCertificate(value: boolean | cdktn.IResolvable) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }
}

export class ObservabilityPipelineConfigSourceFluentdTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceFluentdTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceFluentdTlsOutputReference {
    return new ObservabilityPipelineConfigSourceFluentdTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceFluentd {
  /**
  * Name of the environment variable or secret that holds the listen address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceFluentdTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceFluentdToTerraform(struct?: ObservabilityPipelineConfigSourceFluentd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceFluentdTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceFluentdToHclTerraform(struct?: ObservabilityPipelineConfigSourceFluentd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_key: {
      value: cdktn.stringToHclTerraform(struct!.addressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceFluentdTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceFluentdTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceFluentdOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceFluentd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressKey = this._addressKey;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceFluentd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressKey = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressKey = value.addressKey;
      this._tls.internalValue = value.tls;
    }
  }

  // address_key - computed: false, optional: true, required: false
  private _addressKey?: string; 
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }
  public set addressKey(value: string) {
    this._addressKey = value;
  }
  public resetAddressKey() {
    this._addressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressKeyInput() {
    return this._addressKey;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceFluentdTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceFluentdTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceFluentdList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceFluentd[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceFluentdOutputReference {
    return new ObservabilityPipelineConfigSourceFluentdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceGooglePubsubAuth {
  /**
  * Path to the Google Cloud service account key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#credentials_file ObservabilityPipeline#credentials_file}
  */
  readonly credentialsFile: string;
}

export function observabilityPipelineConfigSourceGooglePubsubAuthToTerraform(struct?: ObservabilityPipelineConfigSourceGooglePubsubAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    credentials_file: cdktn.stringToTerraform(struct!.credentialsFile),
  }
}


export function observabilityPipelineConfigSourceGooglePubsubAuthToHclTerraform(struct?: ObservabilityPipelineConfigSourceGooglePubsubAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    credentials_file: {
      value: cdktn.stringToHclTerraform(struct!.credentialsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceGooglePubsubAuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceGooglePubsubAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialsFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsFile = this._credentialsFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceGooglePubsubAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialsFile = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialsFile = value.credentialsFile;
    }
  }

  // credentials_file - computed: false, optional: false, required: true
  private _credentialsFile?: string; 
  public get credentialsFile() {
    return this.getStringAttribute('credentials_file');
  }
  public set credentialsFile(value: string) {
    this._credentialsFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsFileInput() {
    return this._credentialsFile;
  }
}

export class ObservabilityPipelineConfigSourceGooglePubsubAuthList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceGooglePubsubAuth[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceGooglePubsubAuthOutputReference {
    return new ObservabilityPipelineConfigSourceGooglePubsubAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceGooglePubsubTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigSourceGooglePubsubTlsToTerraform(struct?: ObservabilityPipelineConfigSourceGooglePubsubTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
  }
}


export function observabilityPipelineConfigSourceGooglePubsubTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceGooglePubsubTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceGooglePubsubTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceGooglePubsubTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceGooglePubsubTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }
}

export class ObservabilityPipelineConfigSourceGooglePubsubTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceGooglePubsubTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceGooglePubsubTlsOutputReference {
    return new ObservabilityPipelineConfigSourceGooglePubsubTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceGooglePubsub {
  /**
  * The decoding format used to interpret incoming logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#decoding ObservabilityPipeline#decoding}
  */
  readonly decoding: string;
  /**
  * The Google Cloud project ID that owns the Pub/Sub subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#project ObservabilityPipeline#project}
  */
  readonly project: string;
  /**
  * The Pub/Sub subscription name from which messages are consumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#subscription ObservabilityPipeline#subscription}
  */
  readonly subscription: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigSourceGooglePubsubAuth[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceGooglePubsubTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceGooglePubsubToTerraform(struct?: ObservabilityPipelineConfigSourceGooglePubsub | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    decoding: cdktn.stringToTerraform(struct!.decoding),
    project: cdktn.stringToTerraform(struct!.project),
    subscription: cdktn.stringToTerraform(struct!.subscription),
    auth: cdktn.listMapper(observabilityPipelineConfigSourceGooglePubsubAuthToTerraform, true)(struct!.auth),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceGooglePubsubTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceGooglePubsubToHclTerraform(struct?: ObservabilityPipelineConfigSourceGooglePubsub | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    decoding: {
      value: cdktn.stringToHclTerraform(struct!.decoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktn.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription: {
      value: cdktn.stringToHclTerraform(struct!.subscription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceGooglePubsubAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceGooglePubsubAuthList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceGooglePubsubTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceGooglePubsubTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceGooglePubsubOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceGooglePubsub | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.decoding = this._decoding;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._subscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscription = this._subscription;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceGooglePubsub | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decoding = undefined;
      this._project = undefined;
      this._subscription = undefined;
      this._auth.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decoding = value.decoding;
      this._project = value.project;
      this._subscription = value.subscription;
      this._auth.internalValue = value.auth;
      this._tls.internalValue = value.tls;
    }
  }

  // decoding - computed: false, optional: false, required: true
  private _decoding?: string; 
  public get decoding() {
    return this.getStringAttribute('decoding');
  }
  public set decoding(value: string) {
    this._decoding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decodingInput() {
    return this._decoding;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // subscription - computed: false, optional: false, required: true
  private _subscription?: string; 
  public get subscription() {
    return this.getStringAttribute('subscription');
  }
  public set subscription(value: string) {
    this._subscription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInput() {
    return this._subscription;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigSourceGooglePubsubAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigSourceGooglePubsubAuth[] | cdktn.IResolvable) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceGooglePubsubTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceGooglePubsubTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceGooglePubsubList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceGooglePubsub[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceGooglePubsubOutputReference {
    return new ObservabilityPipelineConfigSourceGooglePubsubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceHttpClientTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * Server name to use for Server Name Indication (SNI) and to verify against the certificate presented by the remote host. Use this when the address you connect to doesn't match the certificate's Common Name or Subject Alternative Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#server_name ObservabilityPipeline#server_name}
  */
  readonly serverName?: string;
}

export function observabilityPipelineConfigSourceHttpClientTlsToTerraform(struct?: ObservabilityPipelineConfigSourceHttpClientTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
    server_name: cdktn.stringToTerraform(struct!.serverName),
  }
}


export function observabilityPipelineConfigSourceHttpClientTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceHttpClientTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktn.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceHttpClientTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceHttpClientTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceHttpClientTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
      this._serverName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
      this._serverName = value.serverName;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}

export class ObservabilityPipelineConfigSourceHttpClientTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceHttpClientTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceHttpClientTlsOutputReference {
    return new ObservabilityPipelineConfigSourceHttpClientTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceHttpClient {
  /**
  * Optional authentication strategy for HTTP requests. Valid values are `none`, `basic`, `bearer`, `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#auth_strategy ObservabilityPipeline#auth_strategy}
  */
  readonly authStrategy?: string;
  /**
  * Name of the environment variable or secret that holds a custom header value (used with custom auth strategies).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#custom_key ObservabilityPipeline#custom_key}
  */
  readonly customKey?: string;
  /**
  * The decoding format used to interpret incoming logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#decoding ObservabilityPipeline#decoding}
  */
  readonly decoding: string;
  /**
  * Name of the environment variable or secret that holds the HTTP endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#endpoint_url_key ObservabilityPipeline#endpoint_url_key}
  */
  readonly endpointUrlKey?: string;
  /**
  * Name of the environment variable or secret that holds the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#password_key ObservabilityPipeline#password_key}
  */
  readonly passwordKey?: string;
  /**
  * The interval (in seconds) between HTTP scrape requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#scrape_interval_secs ObservabilityPipeline#scrape_interval_secs}
  */
  readonly scrapeIntervalSecs?: number;
  /**
  * The timeout (in seconds) for each scrape request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#scrape_timeout_secs ObservabilityPipeline#scrape_timeout_secs}
  */
  readonly scrapeTimeoutSecs?: number;
  /**
  * Name of the environment variable or secret that holds the authentication token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#token_key ObservabilityPipeline#token_key}
  */
  readonly tokenKey?: string;
  /**
  * Name of the environment variable or secret that holds the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#username_key ObservabilityPipeline#username_key}
  */
  readonly usernameKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceHttpClientTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceHttpClientToTerraform(struct?: ObservabilityPipelineConfigSourceHttpClient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_strategy: cdktn.stringToTerraform(struct!.authStrategy),
    custom_key: cdktn.stringToTerraform(struct!.customKey),
    decoding: cdktn.stringToTerraform(struct!.decoding),
    endpoint_url_key: cdktn.stringToTerraform(struct!.endpointUrlKey),
    password_key: cdktn.stringToTerraform(struct!.passwordKey),
    scrape_interval_secs: cdktn.numberToTerraform(struct!.scrapeIntervalSecs),
    scrape_timeout_secs: cdktn.numberToTerraform(struct!.scrapeTimeoutSecs),
    token_key: cdktn.stringToTerraform(struct!.tokenKey),
    username_key: cdktn.stringToTerraform(struct!.usernameKey),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceHttpClientTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceHttpClientToHclTerraform(struct?: ObservabilityPipelineConfigSourceHttpClient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_strategy: {
      value: cdktn.stringToHclTerraform(struct!.authStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_key: {
      value: cdktn.stringToHclTerraform(struct!.customKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decoding: {
      value: cdktn.stringToHclTerraform(struct!.decoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_url_key: {
      value: cdktn.stringToHclTerraform(struct!.endpointUrlKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_key: {
      value: cdktn.stringToHclTerraform(struct!.passwordKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_interval_secs: {
      value: cdktn.numberToHclTerraform(struct!.scrapeIntervalSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scrape_timeout_secs: {
      value: cdktn.numberToHclTerraform(struct!.scrapeTimeoutSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_key: {
      value: cdktn.stringToHclTerraform(struct!.tokenKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_key: {
      value: cdktn.stringToHclTerraform(struct!.usernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceHttpClientTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceHttpClientTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceHttpClientOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceHttpClient | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.authStrategy = this._authStrategy;
    }
    if (this._customKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKey = this._customKey;
    }
    if (this._decoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.decoding = this._decoding;
    }
    if (this._endpointUrlKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrlKey = this._endpointUrlKey;
    }
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    if (this._scrapeIntervalSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeIntervalSecs = this._scrapeIntervalSecs;
    }
    if (this._scrapeTimeoutSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeTimeoutSecs = this._scrapeTimeoutSecs;
    }
    if (this._tokenKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenKey = this._tokenKey;
    }
    if (this._usernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameKey = this._usernameKey;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceHttpClient | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authStrategy = undefined;
      this._customKey = undefined;
      this._decoding = undefined;
      this._endpointUrlKey = undefined;
      this._passwordKey = undefined;
      this._scrapeIntervalSecs = undefined;
      this._scrapeTimeoutSecs = undefined;
      this._tokenKey = undefined;
      this._usernameKey = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authStrategy = value.authStrategy;
      this._customKey = value.customKey;
      this._decoding = value.decoding;
      this._endpointUrlKey = value.endpointUrlKey;
      this._passwordKey = value.passwordKey;
      this._scrapeIntervalSecs = value.scrapeIntervalSecs;
      this._scrapeTimeoutSecs = value.scrapeTimeoutSecs;
      this._tokenKey = value.tokenKey;
      this._usernameKey = value.usernameKey;
      this._tls.internalValue = value.tls;
    }
  }

  // auth_strategy - computed: false, optional: true, required: false
  private _authStrategy?: string; 
  public get authStrategy() {
    return this.getStringAttribute('auth_strategy');
  }
  public set authStrategy(value: string) {
    this._authStrategy = value;
  }
  public resetAuthStrategy() {
    this._authStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authStrategyInput() {
    return this._authStrategy;
  }

  // custom_key - computed: false, optional: true, required: false
  private _customKey?: string; 
  public get customKey() {
    return this.getStringAttribute('custom_key');
  }
  public set customKey(value: string) {
    this._customKey = value;
  }
  public resetCustomKey() {
    this._customKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyInput() {
    return this._customKey;
  }

  // decoding - computed: false, optional: false, required: true
  private _decoding?: string; 
  public get decoding() {
    return this.getStringAttribute('decoding');
  }
  public set decoding(value: string) {
    this._decoding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decodingInput() {
    return this._decoding;
  }

  // endpoint_url_key - computed: false, optional: true, required: false
  private _endpointUrlKey?: string; 
  public get endpointUrlKey() {
    return this.getStringAttribute('endpoint_url_key');
  }
  public set endpointUrlKey(value: string) {
    this._endpointUrlKey = value;
  }
  public resetEndpointUrlKey() {
    this._endpointUrlKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlKeyInput() {
    return this._endpointUrlKey;
  }

  // password_key - computed: false, optional: true, required: false
  private _passwordKey?: string; 
  public get passwordKey() {
    return this.getStringAttribute('password_key');
  }
  public set passwordKey(value: string) {
    this._passwordKey = value;
  }
  public resetPasswordKey() {
    this._passwordKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }

  // scrape_interval_secs - computed: false, optional: true, required: false
  private _scrapeIntervalSecs?: number; 
  public get scrapeIntervalSecs() {
    return this.getNumberAttribute('scrape_interval_secs');
  }
  public set scrapeIntervalSecs(value: number) {
    this._scrapeIntervalSecs = value;
  }
  public resetScrapeIntervalSecs() {
    this._scrapeIntervalSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeIntervalSecsInput() {
    return this._scrapeIntervalSecs;
  }

  // scrape_timeout_secs - computed: false, optional: true, required: false
  private _scrapeTimeoutSecs?: number; 
  public get scrapeTimeoutSecs() {
    return this.getNumberAttribute('scrape_timeout_secs');
  }
  public set scrapeTimeoutSecs(value: number) {
    this._scrapeTimeoutSecs = value;
  }
  public resetScrapeTimeoutSecs() {
    this._scrapeTimeoutSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeTimeoutSecsInput() {
    return this._scrapeTimeoutSecs;
  }

  // token_key - computed: false, optional: true, required: false
  private _tokenKey?: string; 
  public get tokenKey() {
    return this.getStringAttribute('token_key');
  }
  public set tokenKey(value: string) {
    this._tokenKey = value;
  }
  public resetTokenKey() {
    this._tokenKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenKeyInput() {
    return this._tokenKey;
  }

  // username_key - computed: false, optional: true, required: false
  private _usernameKey?: string; 
  public get usernameKey() {
    return this.getStringAttribute('username_key');
  }
  public set usernameKey(value: string) {
    this._usernameKey = value;
  }
  public resetUsernameKey() {
    this._usernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameKeyInput() {
    return this._usernameKey;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceHttpClientTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceHttpClientTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceHttpClientList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceHttpClient[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceHttpClientOutputReference {
    return new ObservabilityPipelineConfigSourceHttpClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceHttpServerTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate connecting clients' TLS certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceHttpServerTlsToTerraform(struct?: ObservabilityPipelineConfigSourceHttpServerTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
    verify_certificate: cdktn.booleanToTerraform(struct!.verifyCertificate),
  }
}


export function observabilityPipelineConfigSourceHttpServerTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceHttpServerTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_certificate: {
      value: cdktn.booleanToHclTerraform(struct!.verifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceHttpServerTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceHttpServerTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    if (this._verifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificate = this._verifyCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceHttpServerTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
      this._verifyCertificate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
      this._verifyCertificate = value.verifyCertificate;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: boolean | cdktn.IResolvable; 
  public get verifyCertificate() {
    return this.getBooleanAttribute('verify_certificate');
  }
  public set verifyCertificate(value: boolean | cdktn.IResolvable) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }
}

export class ObservabilityPipelineConfigSourceHttpServerTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceHttpServerTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceHttpServerTlsOutputReference {
    return new ObservabilityPipelineConfigSourceHttpServerTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAdd {
  /**
  * The metadata field name to add to incoming events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key ObservabilityPipeline#key}
  */
  readonly key: string;
  /**
  * The metadata field value to add to incoming events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigSourceHttpServerValidTokenFieldToAddToTerraform(struct?: ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigSourceHttpServerValidTokenFieldToAddToHclTerraform(struct?: ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAddOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAddList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAdd[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAddOutputReference {
    return new ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceHttpServerValidTokenPathToToken {
  /**
  * The name of the HTTP header that carries the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#header ObservabilityPipeline#header}
  */
  readonly header?: string;
  /**
  * Built-in token location on the incoming HTTP request. One of `path`, `address`. Valid values are `path`, `address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#location ObservabilityPipeline#location}
  */
  readonly location?: string;
}

export function observabilityPipelineConfigSourceHttpServerValidTokenPathToTokenToTerraform(struct?: ObservabilityPipelineConfigSourceHttpServerValidTokenPathToToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    header: cdktn.stringToTerraform(struct!.header),
    location: cdktn.stringToTerraform(struct!.location),
  }
}


export function observabilityPipelineConfigSourceHttpServerValidTokenPathToTokenToHclTerraform(struct?: ObservabilityPipelineConfigSourceHttpServerValidTokenPathToToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    header: {
      value: cdktn.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceHttpServerValidTokenPathToTokenOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceHttpServerValidTokenPathToToken | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceHttpServerValidTokenPathToToken | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._header = undefined;
      this._location = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._header = value.header;
      this._location = value.location;
    }
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // location - computed: false, optional: true, required: false
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
}

export class ObservabilityPipelineConfigSourceHttpServerValidTokenPathToTokenList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceHttpServerValidTokenPathToToken[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceHttpServerValidTokenPathToTokenOutputReference {
    return new ObservabilityPipelineConfigSourceHttpServerValidTokenPathToTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceHttpServerValidToken {
  /**
  * Whether this token is currently accepted. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#enabled ObservabilityPipeline#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Name of the environment variable or secret that holds the expected token value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#token_key ObservabilityPipeline#token_key}
  */
  readonly tokenKey: string;
  /**
  * field_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#field_to_add ObservabilityPipeline#field_to_add}
  */
  readonly fieldToAdd?: ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAdd[] | cdktn.IResolvable;
  /**
  * path_to_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#path_to_token ObservabilityPipeline#path_to_token}
  */
  readonly pathToToken?: ObservabilityPipelineConfigSourceHttpServerValidTokenPathToToken[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceHttpServerValidTokenToTerraform(struct?: ObservabilityPipelineConfigSourceHttpServerValidToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    token_key: cdktn.stringToTerraform(struct!.tokenKey),
    field_to_add: cdktn.listMapper(observabilityPipelineConfigSourceHttpServerValidTokenFieldToAddToTerraform, true)(struct!.fieldToAdd),
    path_to_token: cdktn.listMapper(observabilityPipelineConfigSourceHttpServerValidTokenPathToTokenToTerraform, true)(struct!.pathToToken),
  }
}


export function observabilityPipelineConfigSourceHttpServerValidTokenToHclTerraform(struct?: ObservabilityPipelineConfigSourceHttpServerValidToken | cdktn.IResolvable): any {
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
    token_key: {
      value: cdktn.stringToHclTerraform(struct!.tokenKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_to_add: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceHttpServerValidTokenFieldToAddToHclTerraform, true)(struct!.fieldToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAddList",
    },
    path_to_token: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceHttpServerValidTokenPathToTokenToHclTerraform, true)(struct!.pathToToken),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceHttpServerValidTokenPathToTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceHttpServerValidTokenOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceHttpServerValidToken | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._tokenKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenKey = this._tokenKey;
    }
    if (this._fieldToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToAdd = this._fieldToAdd?.internalValue;
    }
    if (this._pathToToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathToToken = this._pathToToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceHttpServerValidToken | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._tokenKey = undefined;
      this._fieldToAdd.internalValue = undefined;
      this._pathToToken.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._tokenKey = value.tokenKey;
      this._fieldToAdd.internalValue = value.fieldToAdd;
      this._pathToToken.internalValue = value.pathToToken;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // token_key - computed: false, optional: false, required: true
  private _tokenKey?: string; 
  public get tokenKey() {
    return this.getStringAttribute('token_key');
  }
  public set tokenKey(value: string) {
    this._tokenKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenKeyInput() {
    return this._tokenKey;
  }

  // field_to_add - computed: false, optional: true, required: false
  private _fieldToAdd = new ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAddList(this, "field_to_add", false);
  public get fieldToAdd() {
    return this._fieldToAdd;
  }
  public putFieldToAdd(value: ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAdd[] | cdktn.IResolvable) {
    this._fieldToAdd.internalValue = value;
  }
  public resetFieldToAdd() {
    this._fieldToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToAddInput() {
    return this._fieldToAdd.internalValue;
  }

  // path_to_token - computed: false, optional: true, required: false
  private _pathToToken = new ObservabilityPipelineConfigSourceHttpServerValidTokenPathToTokenList(this, "path_to_token", false);
  public get pathToToken() {
    return this._pathToToken;
  }
  public putPathToToken(value: ObservabilityPipelineConfigSourceHttpServerValidTokenPathToToken[] | cdktn.IResolvable) {
    this._pathToToken.internalValue = value;
  }
  public resetPathToToken() {
    this._pathToToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathToTokenInput() {
    return this._pathToToken.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceHttpServerValidTokenList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceHttpServerValidToken[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceHttpServerValidTokenOutputReference {
    return new ObservabilityPipelineConfigSourceHttpServerValidTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceHttpServer {
  /**
  * Name of the environment variable or secret that holds the listen address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * HTTP authentication method. Valid values are `none`, `plain`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#auth_strategy ObservabilityPipeline#auth_strategy}
  */
  readonly authStrategy: string;
  /**
  * The decoding format used to interpret incoming logs. Valid values are `json`, `gelf`, `syslog`, `bytes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#decoding ObservabilityPipeline#decoding}
  */
  readonly decoding: string;
  /**
  * Name of the environment variable or secret that holds the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#password_key ObservabilityPipeline#password_key}
  */
  readonly passwordKey?: string;
  /**
  * Name of the environment variable or secret that holds the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#username_key ObservabilityPipeline#username_key}
  */
  readonly usernameKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceHttpServerTls[] | cdktn.IResolvable;
  /**
  * valid_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#valid_token ObservabilityPipeline#valid_token}
  */
  readonly validToken?: ObservabilityPipelineConfigSourceHttpServerValidToken[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceHttpServerToTerraform(struct?: ObservabilityPipelineConfigSourceHttpServer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    auth_strategy: cdktn.stringToTerraform(struct!.authStrategy),
    decoding: cdktn.stringToTerraform(struct!.decoding),
    password_key: cdktn.stringToTerraform(struct!.passwordKey),
    username_key: cdktn.stringToTerraform(struct!.usernameKey),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceHttpServerTlsToTerraform, true)(struct!.tls),
    valid_token: cdktn.listMapper(observabilityPipelineConfigSourceHttpServerValidTokenToTerraform, true)(struct!.validToken),
  }
}


export function observabilityPipelineConfigSourceHttpServerToHclTerraform(struct?: ObservabilityPipelineConfigSourceHttpServer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_key: {
      value: cdktn.stringToHclTerraform(struct!.addressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_strategy: {
      value: cdktn.stringToHclTerraform(struct!.authStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decoding: {
      value: cdktn.stringToHclTerraform(struct!.decoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_key: {
      value: cdktn.stringToHclTerraform(struct!.passwordKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_key: {
      value: cdktn.stringToHclTerraform(struct!.usernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceHttpServerTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceHttpServerTlsList",
    },
    valid_token: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceHttpServerValidTokenToHclTerraform, true)(struct!.validToken),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceHttpServerValidTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceHttpServerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceHttpServer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressKey = this._addressKey;
    }
    if (this._authStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.authStrategy = this._authStrategy;
    }
    if (this._decoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.decoding = this._decoding;
    }
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    if (this._usernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameKey = this._usernameKey;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._validToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validToken = this._validToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceHttpServer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressKey = undefined;
      this._authStrategy = undefined;
      this._decoding = undefined;
      this._passwordKey = undefined;
      this._usernameKey = undefined;
      this._tls.internalValue = undefined;
      this._validToken.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressKey = value.addressKey;
      this._authStrategy = value.authStrategy;
      this._decoding = value.decoding;
      this._passwordKey = value.passwordKey;
      this._usernameKey = value.usernameKey;
      this._tls.internalValue = value.tls;
      this._validToken.internalValue = value.validToken;
    }
  }

  // address_key - computed: false, optional: true, required: false
  private _addressKey?: string; 
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }
  public set addressKey(value: string) {
    this._addressKey = value;
  }
  public resetAddressKey() {
    this._addressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressKeyInput() {
    return this._addressKey;
  }

  // auth_strategy - computed: false, optional: false, required: true
  private _authStrategy?: string; 
  public get authStrategy() {
    return this.getStringAttribute('auth_strategy');
  }
  public set authStrategy(value: string) {
    this._authStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authStrategyInput() {
    return this._authStrategy;
  }

  // decoding - computed: false, optional: false, required: true
  private _decoding?: string; 
  public get decoding() {
    return this.getStringAttribute('decoding');
  }
  public set decoding(value: string) {
    this._decoding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decodingInput() {
    return this._decoding;
  }

  // password_key - computed: false, optional: true, required: false
  private _passwordKey?: string; 
  public get passwordKey() {
    return this.getStringAttribute('password_key');
  }
  public set passwordKey(value: string) {
    this._passwordKey = value;
  }
  public resetPasswordKey() {
    this._passwordKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }

  // username_key - computed: false, optional: true, required: false
  private _usernameKey?: string; 
  public get usernameKey() {
    return this.getStringAttribute('username_key');
  }
  public set usernameKey(value: string) {
    this._usernameKey = value;
  }
  public resetUsernameKey() {
    this._usernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameKeyInput() {
    return this._usernameKey;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceHttpServerTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceHttpServerTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // valid_token - computed: false, optional: true, required: false
  private _validToken = new ObservabilityPipelineConfigSourceHttpServerValidTokenList(this, "valid_token", false);
  public get validToken() {
    return this._validToken;
  }
  public putValidToken(value: ObservabilityPipelineConfigSourceHttpServerValidToken[] | cdktn.IResolvable) {
    this._validToken.internalValue = value;
  }
  public resetValidToken() {
    this._validToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validTokenInput() {
    return this._validToken.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceHttpServerList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceHttpServer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceHttpServerOutputReference {
    return new ObservabilityPipelineConfigSourceHttpServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceKafkaLibrdkafkaOption {
  /**
  * The name of the librdkafka option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The value of the librdkafka option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigSourceKafkaLibrdkafkaOptionToTerraform(struct?: ObservabilityPipelineConfigSourceKafkaLibrdkafkaOption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigSourceKafkaLibrdkafkaOptionToHclTerraform(struct?: ObservabilityPipelineConfigSourceKafkaLibrdkafkaOption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
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

export class ObservabilityPipelineConfigSourceKafkaLibrdkafkaOptionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceKafkaLibrdkafkaOption | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceKafkaLibrdkafkaOption | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class ObservabilityPipelineConfigSourceKafkaLibrdkafkaOptionList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceKafkaLibrdkafkaOption[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceKafkaLibrdkafkaOptionOutputReference {
    return new ObservabilityPipelineConfigSourceKafkaLibrdkafkaOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceKafkaSasl {
  /**
  * SASL mechanism to use (e.g., PLAIN, SCRAM-SHA-256, SCRAM-SHA-512). Valid values are `PLAIN`, `SCRAM-SHA-256`, `SCRAM-SHA-512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#mechanism ObservabilityPipeline#mechanism}
  */
  readonly mechanism: string;
  /**
  * Name of the environment variable or secret that holds the SASL password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#password_key ObservabilityPipeline#password_key}
  */
  readonly passwordKey?: string;
  /**
  * Name of the environment variable or secret that holds the SASL username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#username_key ObservabilityPipeline#username_key}
  */
  readonly usernameKey?: string;
}

export function observabilityPipelineConfigSourceKafkaSaslToTerraform(struct?: ObservabilityPipelineConfigSourceKafkaSasl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mechanism: cdktn.stringToTerraform(struct!.mechanism),
    password_key: cdktn.stringToTerraform(struct!.passwordKey),
    username_key: cdktn.stringToTerraform(struct!.usernameKey),
  }
}


export function observabilityPipelineConfigSourceKafkaSaslToHclTerraform(struct?: ObservabilityPipelineConfigSourceKafkaSasl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mechanism: {
      value: cdktn.stringToHclTerraform(struct!.mechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_key: {
      value: cdktn.stringToHclTerraform(struct!.passwordKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_key: {
      value: cdktn.stringToHclTerraform(struct!.usernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceKafkaSaslOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceKafkaSasl | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.mechanism = this._mechanism;
    }
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    if (this._usernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameKey = this._usernameKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceKafkaSasl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mechanism = undefined;
      this._passwordKey = undefined;
      this._usernameKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mechanism = value.mechanism;
      this._passwordKey = value.passwordKey;
      this._usernameKey = value.usernameKey;
    }
  }

  // mechanism - computed: false, optional: false, required: true
  private _mechanism?: string; 
  public get mechanism() {
    return this.getStringAttribute('mechanism');
  }
  public set mechanism(value: string) {
    this._mechanism = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mechanismInput() {
    return this._mechanism;
  }

  // password_key - computed: false, optional: true, required: false
  private _passwordKey?: string; 
  public get passwordKey() {
    return this.getStringAttribute('password_key');
  }
  public set passwordKey(value: string) {
    this._passwordKey = value;
  }
  public resetPasswordKey() {
    this._passwordKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }

  // username_key - computed: false, optional: true, required: false
  private _usernameKey?: string; 
  public get usernameKey() {
    return this.getStringAttribute('username_key');
  }
  public set usernameKey(value: string) {
    this._usernameKey = value;
  }
  public resetUsernameKey() {
    this._usernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameKeyInput() {
    return this._usernameKey;
  }
}

export class ObservabilityPipelineConfigSourceKafkaSaslList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceKafkaSasl[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceKafkaSaslOutputReference {
    return new ObservabilityPipelineConfigSourceKafkaSaslOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceKafkaTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigSourceKafkaTlsToTerraform(struct?: ObservabilityPipelineConfigSourceKafkaTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
  }
}


export function observabilityPipelineConfigSourceKafkaTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceKafkaTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceKafkaTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceKafkaTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceKafkaTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }
}

export class ObservabilityPipelineConfigSourceKafkaTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceKafkaTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceKafkaTlsOutputReference {
    return new ObservabilityPipelineConfigSourceKafkaTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceKafka {
  /**
  * Name of the environment variable or secret that holds the Kafka bootstrap servers connection string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#bootstrap_servers_key ObservabilityPipeline#bootstrap_servers_key}
  */
  readonly bootstrapServersKey?: string;
  /**
  * The Kafka consumer group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#group_id ObservabilityPipeline#group_id}
  */
  readonly groupId: string;
  /**
  * A list of Kafka topic names to subscribe to. The source ingests messages from each topic specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#topics ObservabilityPipeline#topics}
  */
  readonly topics: string[];
  /**
  * librdkafka_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#librdkafka_option ObservabilityPipeline#librdkafka_option}
  */
  readonly librdkafkaOption?: ObservabilityPipelineConfigSourceKafkaLibrdkafkaOption[] | cdktn.IResolvable;
  /**
  * sasl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#sasl ObservabilityPipeline#sasl}
  */
  readonly sasl?: ObservabilityPipelineConfigSourceKafkaSasl[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceKafkaTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceKafkaToTerraform(struct?: ObservabilityPipelineConfigSourceKafka | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bootstrap_servers_key: cdktn.stringToTerraform(struct!.bootstrapServersKey),
    group_id: cdktn.stringToTerraform(struct!.groupId),
    topics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.topics),
    librdkafka_option: cdktn.listMapper(observabilityPipelineConfigSourceKafkaLibrdkafkaOptionToTerraform, true)(struct!.librdkafkaOption),
    sasl: cdktn.listMapper(observabilityPipelineConfigSourceKafkaSaslToTerraform, true)(struct!.sasl),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceKafkaTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceKafkaToHclTerraform(struct?: ObservabilityPipelineConfigSourceKafka | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bootstrap_servers_key: {
      value: cdktn.stringToHclTerraform(struct!.bootstrapServersKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktn.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topics: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.topics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    librdkafka_option: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceKafkaLibrdkafkaOptionToHclTerraform, true)(struct!.librdkafkaOption),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceKafkaLibrdkafkaOptionList",
    },
    sasl: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceKafkaSaslToHclTerraform, true)(struct!.sasl),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceKafkaSaslList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceKafkaTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceKafkaTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceKafkaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceKafka | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapServersKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServersKey = this._bootstrapServersKey;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._topics !== undefined) {
      hasAnyValues = true;
      internalValueResult.topics = this._topics;
    }
    if (this._librdkafkaOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.librdkafkaOption = this._librdkafkaOption?.internalValue;
    }
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceKafka | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootstrapServersKey = undefined;
      this._groupId = undefined;
      this._topics = undefined;
      this._librdkafkaOption.internalValue = undefined;
      this._sasl.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootstrapServersKey = value.bootstrapServersKey;
      this._groupId = value.groupId;
      this._topics = value.topics;
      this._librdkafkaOption.internalValue = value.librdkafkaOption;
      this._sasl.internalValue = value.sasl;
      this._tls.internalValue = value.tls;
    }
  }

  // bootstrap_servers_key - computed: false, optional: true, required: false
  private _bootstrapServersKey?: string; 
  public get bootstrapServersKey() {
    return this.getStringAttribute('bootstrap_servers_key');
  }
  public set bootstrapServersKey(value: string) {
    this._bootstrapServersKey = value;
  }
  public resetBootstrapServersKey() {
    this._bootstrapServersKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersKeyInput() {
    return this._bootstrapServersKey;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // topics - computed: false, optional: false, required: true
  private _topics?: string[]; 
  public get topics() {
    return this.getListAttribute('topics');
  }
  public set topics(value: string[]) {
    this._topics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics;
  }

  // librdkafka_option - computed: false, optional: true, required: false
  private _librdkafkaOption = new ObservabilityPipelineConfigSourceKafkaLibrdkafkaOptionList(this, "librdkafka_option", false);
  public get librdkafkaOption() {
    return this._librdkafkaOption;
  }
  public putLibrdkafkaOption(value: ObservabilityPipelineConfigSourceKafkaLibrdkafkaOption[] | cdktn.IResolvable) {
    this._librdkafkaOption.internalValue = value;
  }
  public resetLibrdkafkaOption() {
    this._librdkafkaOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get librdkafkaOptionInput() {
    return this._librdkafkaOption.internalValue;
  }

  // sasl - computed: false, optional: true, required: false
  private _sasl = new ObservabilityPipelineConfigSourceKafkaSaslList(this, "sasl", false);
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: ObservabilityPipelineConfigSourceKafkaSasl[] | cdktn.IResolvable) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceKafkaTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceKafkaTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceKafkaList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceKafka[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceKafkaOutputReference {
    return new ObservabilityPipelineConfigSourceKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceLogstashTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate connecting clients' TLS certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceLogstashTlsToTerraform(struct?: ObservabilityPipelineConfigSourceLogstashTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
    verify_certificate: cdktn.booleanToTerraform(struct!.verifyCertificate),
  }
}


export function observabilityPipelineConfigSourceLogstashTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceLogstashTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_certificate: {
      value: cdktn.booleanToHclTerraform(struct!.verifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceLogstashTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceLogstashTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    if (this._verifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificate = this._verifyCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceLogstashTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
      this._verifyCertificate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
      this._verifyCertificate = value.verifyCertificate;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: boolean | cdktn.IResolvable; 
  public get verifyCertificate() {
    return this.getBooleanAttribute('verify_certificate');
  }
  public set verifyCertificate(value: boolean | cdktn.IResolvable) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }
}

export class ObservabilityPipelineConfigSourceLogstashTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceLogstashTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceLogstashTlsOutputReference {
    return new ObservabilityPipelineConfigSourceLogstashTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceLogstash {
  /**
  * Name of the environment variable or secret that holds the listen address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceLogstashTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceLogstashToTerraform(struct?: ObservabilityPipelineConfigSourceLogstash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceLogstashTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceLogstashToHclTerraform(struct?: ObservabilityPipelineConfigSourceLogstash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_key: {
      value: cdktn.stringToHclTerraform(struct!.addressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceLogstashTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceLogstashTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceLogstashOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceLogstash | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressKey = this._addressKey;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceLogstash | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressKey = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressKey = value.addressKey;
      this._tls.internalValue = value.tls;
    }
  }

  // address_key - computed: false, optional: true, required: false
  private _addressKey?: string; 
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }
  public set addressKey(value: string) {
    this._addressKey = value;
  }
  public resetAddressKey() {
    this._addressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressKeyInput() {
    return this._addressKey;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceLogstashTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceLogstashTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceLogstashList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceLogstash[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceLogstashOutputReference {
    return new ObservabilityPipelineConfigSourceLogstashOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceOpentelemetryTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate connecting clients' TLS certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceOpentelemetryTlsToTerraform(struct?: ObservabilityPipelineConfigSourceOpentelemetryTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
    verify_certificate: cdktn.booleanToTerraform(struct!.verifyCertificate),
  }
}


export function observabilityPipelineConfigSourceOpentelemetryTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceOpentelemetryTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_certificate: {
      value: cdktn.booleanToHclTerraform(struct!.verifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceOpentelemetryTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceOpentelemetryTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    if (this._verifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificate = this._verifyCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceOpentelemetryTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
      this._verifyCertificate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
      this._verifyCertificate = value.verifyCertificate;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: boolean | cdktn.IResolvable; 
  public get verifyCertificate() {
    return this.getBooleanAttribute('verify_certificate');
  }
  public set verifyCertificate(value: boolean | cdktn.IResolvable) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }
}

export class ObservabilityPipelineConfigSourceOpentelemetryTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceOpentelemetryTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceOpentelemetryTlsOutputReference {
    return new ObservabilityPipelineConfigSourceOpentelemetryTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceOpentelemetry {
  /**
  * Environment variable name containing the gRPC server address for receiving OTLP data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#grpc_address_key ObservabilityPipeline#grpc_address_key}
  */
  readonly grpcAddressKey?: string;
  /**
  * Environment variable name containing the HTTP server address for receiving OTLP data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#http_address_key ObservabilityPipeline#http_address_key}
  */
  readonly httpAddressKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceOpentelemetryTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceOpentelemetryToTerraform(struct?: ObservabilityPipelineConfigSourceOpentelemetry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    grpc_address_key: cdktn.stringToTerraform(struct!.grpcAddressKey),
    http_address_key: cdktn.stringToTerraform(struct!.httpAddressKey),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceOpentelemetryTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceOpentelemetryToHclTerraform(struct?: ObservabilityPipelineConfigSourceOpentelemetry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    grpc_address_key: {
      value: cdktn.stringToHclTerraform(struct!.grpcAddressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_address_key: {
      value: cdktn.stringToHclTerraform(struct!.httpAddressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceOpentelemetryTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceOpentelemetryTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceOpentelemetryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceOpentelemetry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcAddressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcAddressKey = this._grpcAddressKey;
    }
    if (this._httpAddressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAddressKey = this._httpAddressKey;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceOpentelemetry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpcAddressKey = undefined;
      this._httpAddressKey = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpcAddressKey = value.grpcAddressKey;
      this._httpAddressKey = value.httpAddressKey;
      this._tls.internalValue = value.tls;
    }
  }

  // grpc_address_key - computed: false, optional: true, required: false
  private _grpcAddressKey?: string; 
  public get grpcAddressKey() {
    return this.getStringAttribute('grpc_address_key');
  }
  public set grpcAddressKey(value: string) {
    this._grpcAddressKey = value;
  }
  public resetGrpcAddressKey() {
    this._grpcAddressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcAddressKeyInput() {
    return this._grpcAddressKey;
  }

  // http_address_key - computed: false, optional: true, required: false
  private _httpAddressKey?: string; 
  public get httpAddressKey() {
    return this.getStringAttribute('http_address_key');
  }
  public set httpAddressKey(value: string) {
    this._httpAddressKey = value;
  }
  public resetHttpAddressKey() {
    this._httpAddressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAddressKeyInput() {
    return this._httpAddressKey;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceOpentelemetryTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceOpentelemetryTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceOpentelemetryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceOpentelemetry[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceOpentelemetryOutputReference {
    return new ObservabilityPipelineConfigSourceOpentelemetryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceRsyslogTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate connecting clients' TLS certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceRsyslogTlsToTerraform(struct?: ObservabilityPipelineConfigSourceRsyslogTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
    verify_certificate: cdktn.booleanToTerraform(struct!.verifyCertificate),
  }
}


export function observabilityPipelineConfigSourceRsyslogTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceRsyslogTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_certificate: {
      value: cdktn.booleanToHclTerraform(struct!.verifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceRsyslogTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceRsyslogTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    if (this._verifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificate = this._verifyCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceRsyslogTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
      this._verifyCertificate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
      this._verifyCertificate = value.verifyCertificate;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: boolean | cdktn.IResolvable; 
  public get verifyCertificate() {
    return this.getBooleanAttribute('verify_certificate');
  }
  public set verifyCertificate(value: boolean | cdktn.IResolvable) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }
}

export class ObservabilityPipelineConfigSourceRsyslogTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceRsyslogTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceRsyslogTlsOutputReference {
    return new ObservabilityPipelineConfigSourceRsyslogTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceRsyslog {
  /**
  * Name of the environment variable or secret that holds the listen address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * Protocol used by the syslog source to receive messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceRsyslogTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceRsyslogToTerraform(struct?: ObservabilityPipelineConfigSourceRsyslog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    mode: cdktn.stringToTerraform(struct!.mode),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceRsyslogTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceRsyslogToHclTerraform(struct?: ObservabilityPipelineConfigSourceRsyslog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_key: {
      value: cdktn.stringToHclTerraform(struct!.addressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceRsyslogTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceRsyslogTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceRsyslogOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceRsyslog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressKey = this._addressKey;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceRsyslog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressKey = undefined;
      this._mode = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressKey = value.addressKey;
      this._mode = value.mode;
      this._tls.internalValue = value.tls;
    }
  }

  // address_key - computed: false, optional: true, required: false
  private _addressKey?: string; 
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }
  public set addressKey(value: string) {
    this._addressKey = value;
  }
  public resetAddressKey() {
    this._addressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressKeyInput() {
    return this._addressKey;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceRsyslogTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceRsyslogTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceRsyslogList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceRsyslog[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceRsyslogOutputReference {
    return new ObservabilityPipelineConfigSourceRsyslogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSocketFramingCharacterDelimited {
  /**
  * A single ASCII character used as a delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#delimiter ObservabilityPipeline#delimiter}
  */
  readonly delimiter: string;
}

export function observabilityPipelineConfigSourceSocketFramingCharacterDelimitedToTerraform(struct?: ObservabilityPipelineConfigSourceSocketFramingCharacterDelimited | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
  }
}


export function observabilityPipelineConfigSourceSocketFramingCharacterDelimitedToHclTerraform(struct?: ObservabilityPipelineConfigSourceSocketFramingCharacterDelimited | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delimiter: {
      value: cdktn.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceSocketFramingCharacterDelimitedOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceSocketFramingCharacterDelimited | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSocketFramingCharacterDelimited | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delimiter = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delimiter = value.delimiter;
    }
  }

  // delimiter - computed: false, optional: false, required: true
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }
}

export class ObservabilityPipelineConfigSourceSocketFramingCharacterDelimitedList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSocketFramingCharacterDelimited[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSocketFramingCharacterDelimitedOutputReference {
    return new ObservabilityPipelineConfigSourceSocketFramingCharacterDelimitedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSocketFraming {
  /**
  * The framing method. Valid values are `newline_delimited`, `bytes`, `character_delimited`, `octet_counting`, `chunked_gelf`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#method ObservabilityPipeline#method}
  */
  readonly method: string;
  /**
  * character_delimited block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#character_delimited ObservabilityPipeline#character_delimited}
  */
  readonly characterDelimited?: ObservabilityPipelineConfigSourceSocketFramingCharacterDelimited[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSocketFramingToTerraform(struct?: ObservabilityPipelineConfigSourceSocketFraming | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
    character_delimited: cdktn.listMapper(observabilityPipelineConfigSourceSocketFramingCharacterDelimitedToTerraform, true)(struct!.characterDelimited),
  }
}


export function observabilityPipelineConfigSourceSocketFramingToHclTerraform(struct?: ObservabilityPipelineConfigSourceSocketFraming | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    character_delimited: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceSocketFramingCharacterDelimitedToHclTerraform, true)(struct!.characterDelimited),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceSocketFramingCharacterDelimitedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceSocketFramingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceSocketFraming | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._characterDelimited?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterDelimited = this._characterDelimited?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSocketFraming | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._characterDelimited.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._characterDelimited.internalValue = value.characterDelimited;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // character_delimited - computed: false, optional: true, required: false
  private _characterDelimited = new ObservabilityPipelineConfigSourceSocketFramingCharacterDelimitedList(this, "character_delimited", false);
  public get characterDelimited() {
    return this._characterDelimited;
  }
  public putCharacterDelimited(value: ObservabilityPipelineConfigSourceSocketFramingCharacterDelimited[] | cdktn.IResolvable) {
    this._characterDelimited.internalValue = value;
  }
  public resetCharacterDelimited() {
    this._characterDelimited.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterDelimitedInput() {
    return this._characterDelimited.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceSocketFramingList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSocketFraming[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSocketFramingOutputReference {
    return new ObservabilityPipelineConfigSourceSocketFramingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSocketTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate connecting clients' TLS certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSocketTlsToTerraform(struct?: ObservabilityPipelineConfigSourceSocketTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
    verify_certificate: cdktn.booleanToTerraform(struct!.verifyCertificate),
  }
}


export function observabilityPipelineConfigSourceSocketTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceSocketTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_certificate: {
      value: cdktn.booleanToHclTerraform(struct!.verifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceSocketTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceSocketTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    if (this._verifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificate = this._verifyCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSocketTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
      this._verifyCertificate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
      this._verifyCertificate = value.verifyCertificate;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: boolean | cdktn.IResolvable; 
  public get verifyCertificate() {
    return this.getBooleanAttribute('verify_certificate');
  }
  public set verifyCertificate(value: boolean | cdktn.IResolvable) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }
}

export class ObservabilityPipelineConfigSourceSocketTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSocketTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSocketTlsOutputReference {
    return new ObservabilityPipelineConfigSourceSocketTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSocket {
  /**
  * Name of the environment variable or secret that holds the listen address for the socket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * The protocol used to receive logs. Valid values are `tcp`, `udp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode: string;
  /**
  * framing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#framing ObservabilityPipeline#framing}
  */
  readonly framing?: ObservabilityPipelineConfigSourceSocketFraming[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceSocketTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSocketToTerraform(struct?: ObservabilityPipelineConfigSourceSocket | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    mode: cdktn.stringToTerraform(struct!.mode),
    framing: cdktn.listMapper(observabilityPipelineConfigSourceSocketFramingToTerraform, true)(struct!.framing),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceSocketTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceSocketToHclTerraform(struct?: ObservabilityPipelineConfigSourceSocket | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_key: {
      value: cdktn.stringToHclTerraform(struct!.addressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    framing: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceSocketFramingToHclTerraform, true)(struct!.framing),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceSocketFramingList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceSocketTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceSocketTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceSocketOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceSocket | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressKey = this._addressKey;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._framing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.framing = this._framing?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSocket | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressKey = undefined;
      this._mode = undefined;
      this._framing.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressKey = value.addressKey;
      this._mode = value.mode;
      this._framing.internalValue = value.framing;
      this._tls.internalValue = value.tls;
    }
  }

  // address_key - computed: false, optional: true, required: false
  private _addressKey?: string; 
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }
  public set addressKey(value: string) {
    this._addressKey = value;
  }
  public resetAddressKey() {
    this._addressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressKeyInput() {
    return this._addressKey;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // framing - computed: false, optional: true, required: false
  private _framing = new ObservabilityPipelineConfigSourceSocketFramingList(this, "framing", false);
  public get framing() {
    return this._framing;
  }
  public putFraming(value: ObservabilityPipelineConfigSourceSocketFraming[] | cdktn.IResolvable) {
    this._framing.internalValue = value;
  }
  public resetFraming() {
    this._framing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get framingInput() {
    return this._framing.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceSocketTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceSocketTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceSocketList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSocket[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSocketOutputReference {
    return new ObservabilityPipelineConfigSourceSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSplunkHecTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate connecting clients' TLS certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSplunkHecTlsToTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHecTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
    verify_certificate: cdktn.booleanToTerraform(struct!.verifyCertificate),
  }
}


export function observabilityPipelineConfigSourceSplunkHecTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHecTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_certificate: {
      value: cdktn.booleanToHclTerraform(struct!.verifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceSplunkHecTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceSplunkHecTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    if (this._verifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificate = this._verifyCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSplunkHecTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
      this._verifyCertificate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
      this._verifyCertificate = value.verifyCertificate;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: boolean | cdktn.IResolvable; 
  public get verifyCertificate() {
    return this.getBooleanAttribute('verify_certificate');
  }
  public set verifyCertificate(value: boolean | cdktn.IResolvable) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }
}

export class ObservabilityPipelineConfigSourceSplunkHecTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSplunkHecTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSplunkHecTlsOutputReference {
    return new ObservabilityPipelineConfigSourceSplunkHecTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAdd {
  /**
  * The metadata field name to add to incoming events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key ObservabilityPipeline#key}
  */
  readonly key: string;
  /**
  * The metadata field value to add to incoming events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigSourceSplunkHecValidTokenFieldToAddToTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigSourceSplunkHecValidTokenFieldToAddToHclTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
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

export class ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAddOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAdd | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAdd | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAddList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAdd[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAddOutputReference {
    return new ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSplunkHecValidToken {
  /**
  * Whether this token is currently accepted. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#enabled ObservabilityPipeline#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Name of the environment variable or secret that holds the expected HEC token value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#token_key ObservabilityPipeline#token_key}
  */
  readonly tokenKey: string;
  /**
  * field_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#field_to_add ObservabilityPipeline#field_to_add}
  */
  readonly fieldToAdd?: ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAdd[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSplunkHecValidTokenToTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHecValidToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    token_key: cdktn.stringToTerraform(struct!.tokenKey),
    field_to_add: cdktn.listMapper(observabilityPipelineConfigSourceSplunkHecValidTokenFieldToAddToTerraform, true)(struct!.fieldToAdd),
  }
}


export function observabilityPipelineConfigSourceSplunkHecValidTokenToHclTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHecValidToken | cdktn.IResolvable): any {
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
    token_key: {
      value: cdktn.stringToHclTerraform(struct!.tokenKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_to_add: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceSplunkHecValidTokenFieldToAddToHclTerraform, true)(struct!.fieldToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceSplunkHecValidTokenOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceSplunkHecValidToken | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._tokenKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenKey = this._tokenKey;
    }
    if (this._fieldToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToAdd = this._fieldToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSplunkHecValidToken | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._tokenKey = undefined;
      this._fieldToAdd.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._tokenKey = value.tokenKey;
      this._fieldToAdd.internalValue = value.fieldToAdd;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // token_key - computed: false, optional: false, required: true
  private _tokenKey?: string; 
  public get tokenKey() {
    return this.getStringAttribute('token_key');
  }
  public set tokenKey(value: string) {
    this._tokenKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenKeyInput() {
    return this._tokenKey;
  }

  // field_to_add - computed: false, optional: true, required: false
  private _fieldToAdd = new ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAddList(this, "field_to_add", false);
  public get fieldToAdd() {
    return this._fieldToAdd;
  }
  public putFieldToAdd(value: ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAdd[] | cdktn.IResolvable) {
    this._fieldToAdd.internalValue = value;
  }
  public resetFieldToAdd() {
    this._fieldToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToAddInput() {
    return this._fieldToAdd.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceSplunkHecValidTokenList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSplunkHecValidToken[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSplunkHecValidTokenOutputReference {
    return new ObservabilityPipelineConfigSourceSplunkHecValidTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSplunkHec {
  /**
  * Name of the environment variable or secret that holds the listen address for the HEC API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * When `true`, the Splunk HEC token from the incoming request is stored in the event, allowing downstream components to forward it to other Splunk HEC destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#store_hec_token ObservabilityPipeline#store_hec_token}
  */
  readonly storeHecToken?: boolean | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceSplunkHecTls[] | cdktn.IResolvable;
  /**
  * valid_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#valid_token ObservabilityPipeline#valid_token}
  */
  readonly validToken?: ObservabilityPipelineConfigSourceSplunkHecValidToken[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSplunkHecToTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    store_hec_token: cdktn.booleanToTerraform(struct!.storeHecToken),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceSplunkHecTlsToTerraform, true)(struct!.tls),
    valid_token: cdktn.listMapper(observabilityPipelineConfigSourceSplunkHecValidTokenToTerraform, true)(struct!.validToken),
  }
}


export function observabilityPipelineConfigSourceSplunkHecToHclTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_key: {
      value: cdktn.stringToHclTerraform(struct!.addressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_hec_token: {
      value: cdktn.booleanToHclTerraform(struct!.storeHecToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceSplunkHecTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceSplunkHecTlsList",
    },
    valid_token: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceSplunkHecValidTokenToHclTerraform, true)(struct!.validToken),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceSplunkHecValidTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceSplunkHecOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceSplunkHec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressKey = this._addressKey;
    }
    if (this._storeHecToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeHecToken = this._storeHecToken;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._validToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validToken = this._validToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSplunkHec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressKey = undefined;
      this._storeHecToken = undefined;
      this._tls.internalValue = undefined;
      this._validToken.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressKey = value.addressKey;
      this._storeHecToken = value.storeHecToken;
      this._tls.internalValue = value.tls;
      this._validToken.internalValue = value.validToken;
    }
  }

  // address_key - computed: false, optional: true, required: false
  private _addressKey?: string; 
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }
  public set addressKey(value: string) {
    this._addressKey = value;
  }
  public resetAddressKey() {
    this._addressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressKeyInput() {
    return this._addressKey;
  }

  // store_hec_token - computed: false, optional: true, required: false
  private _storeHecToken?: boolean | cdktn.IResolvable; 
  public get storeHecToken() {
    return this.getBooleanAttribute('store_hec_token');
  }
  public set storeHecToken(value: boolean | cdktn.IResolvable) {
    this._storeHecToken = value;
  }
  public resetStoreHecToken() {
    this._storeHecToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeHecTokenInput() {
    return this._storeHecToken;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceSplunkHecTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceSplunkHecTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // valid_token - computed: false, optional: true, required: false
  private _validToken = new ObservabilityPipelineConfigSourceSplunkHecValidTokenList(this, "valid_token", false);
  public get validToken() {
    return this._validToken;
  }
  public putValidToken(value: ObservabilityPipelineConfigSourceSplunkHecValidToken[] | cdktn.IResolvable) {
    this._validToken.internalValue = value;
  }
  public resetValidToken() {
    this._validToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validTokenInput() {
    return this._validToken.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceSplunkHecList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSplunkHec[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSplunkHecOutputReference {
    return new ObservabilityPipelineConfigSourceSplunkHecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSplunkTcpTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate connecting clients' TLS certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSplunkTcpTlsToTerraform(struct?: ObservabilityPipelineConfigSourceSplunkTcpTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
    verify_certificate: cdktn.booleanToTerraform(struct!.verifyCertificate),
  }
}


export function observabilityPipelineConfigSourceSplunkTcpTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceSplunkTcpTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_certificate: {
      value: cdktn.booleanToHclTerraform(struct!.verifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceSplunkTcpTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceSplunkTcpTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    if (this._verifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificate = this._verifyCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSplunkTcpTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
      this._verifyCertificate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
      this._verifyCertificate = value.verifyCertificate;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: boolean | cdktn.IResolvable; 
  public get verifyCertificate() {
    return this.getBooleanAttribute('verify_certificate');
  }
  public set verifyCertificate(value: boolean | cdktn.IResolvable) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }
}

export class ObservabilityPipelineConfigSourceSplunkTcpTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSplunkTcpTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSplunkTcpTlsOutputReference {
    return new ObservabilityPipelineConfigSourceSplunkTcpTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSplunkTcp {
  /**
  * Name of the environment variable or secret that holds the listen address for the Splunk TCP receiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceSplunkTcpTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSplunkTcpToTerraform(struct?: ObservabilityPipelineConfigSourceSplunkTcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceSplunkTcpTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceSplunkTcpToHclTerraform(struct?: ObservabilityPipelineConfigSourceSplunkTcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_key: {
      value: cdktn.stringToHclTerraform(struct!.addressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceSplunkTcpTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceSplunkTcpTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceSplunkTcpOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceSplunkTcp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressKey = this._addressKey;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSplunkTcp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressKey = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressKey = value.addressKey;
      this._tls.internalValue = value.tls;
    }
  }

  // address_key - computed: false, optional: true, required: false
  private _addressKey?: string; 
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }
  public set addressKey(value: string) {
    this._addressKey = value;
  }
  public resetAddressKey() {
    this._addressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressKeyInput() {
    return this._addressKey;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceSplunkTcpTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceSplunkTcpTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceSplunkTcpList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSplunkTcp[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSplunkTcpOutputReference {
    return new ObservabilityPipelineConfigSourceSplunkTcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSumoLogic {
  /**
  * Name of the environment variable or secret that holds the listen address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
}

export function observabilityPipelineConfigSourceSumoLogicToTerraform(struct?: ObservabilityPipelineConfigSourceSumoLogic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
  }
}


export function observabilityPipelineConfigSourceSumoLogicToHclTerraform(struct?: ObservabilityPipelineConfigSourceSumoLogic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_key: {
      value: cdktn.stringToHclTerraform(struct!.addressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceSumoLogicOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceSumoLogic | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressKey = this._addressKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSumoLogic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressKey = value.addressKey;
    }
  }

  // address_key - computed: false, optional: true, required: false
  private _addressKey?: string; 
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }
  public set addressKey(value: string) {
    this._addressKey = value;
  }
  public resetAddressKey() {
    this._addressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressKeyInput() {
    return this._addressKey;
  }
}

export class ObservabilityPipelineConfigSourceSumoLogicList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSumoLogic[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSumoLogicOutputReference {
    return new ObservabilityPipelineConfigSourceSumoLogicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSyslogNgTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate connecting clients' TLS certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSyslogNgTlsToTerraform(struct?: ObservabilityPipelineConfigSourceSyslogNgTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
    verify_certificate: cdktn.booleanToTerraform(struct!.verifyCertificate),
  }
}


export function observabilityPipelineConfigSourceSyslogNgTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceSyslogNgTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_certificate: {
      value: cdktn.booleanToHclTerraform(struct!.verifyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceSyslogNgTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceSyslogNgTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    if (this._verifyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCertificate = this._verifyCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSyslogNgTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
      this._verifyCertificate = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
      this._verifyCertificate = value.verifyCertificate;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: false, required: true
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: boolean | cdktn.IResolvable; 
  public get verifyCertificate() {
    return this.getBooleanAttribute('verify_certificate');
  }
  public set verifyCertificate(value: boolean | cdktn.IResolvable) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }
}

export class ObservabilityPipelineConfigSourceSyslogNgTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSyslogNgTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSyslogNgTlsOutputReference {
    return new ObservabilityPipelineConfigSourceSyslogNgTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSyslogNg {
  /**
  * Name of the environment variable or secret that holds the listen address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * Protocol used by the syslog source to receive messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceSyslogNgTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSyslogNgToTerraform(struct?: ObservabilityPipelineConfigSourceSyslogNg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    mode: cdktn.stringToTerraform(struct!.mode),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceSyslogNgTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceSyslogNgToHclTerraform(struct?: ObservabilityPipelineConfigSourceSyslogNg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    address_key: {
      value: cdktn.stringToHclTerraform(struct!.addressKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceSyslogNgTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceSyslogNgTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceSyslogNgOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceSyslogNg | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressKey = this._addressKey;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSyslogNg | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressKey = undefined;
      this._mode = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressKey = value.addressKey;
      this._mode = value.mode;
      this._tls.internalValue = value.tls;
    }
  }

  // address_key - computed: false, optional: true, required: false
  private _addressKey?: string; 
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }
  public set addressKey(value: string) {
    this._addressKey = value;
  }
  public resetAddressKey() {
    this._addressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressKeyInput() {
    return this._addressKey;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceSyslogNgTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceSyslogNgTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceSyslogNgList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSyslogNg[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSyslogNgOutputReference {
    return new ObservabilityPipelineConfigSourceSyslogNgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceWebsocketTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the client certificate file. Required when `mode` is `with_client_cert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile?: string;
  /**
  * Path to the private key file associated with the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * The TLS mode. Use `enabled` for server-only TLS, or `with_client_cert` for mutual TLS with a client certificate. Valid values are `enabled`, `with_client_cert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode: string;
}

export function observabilityPipelineConfigSourceWebsocketTlsToTerraform(struct?: ObservabilityPipelineConfigSourceWebsocketTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function observabilityPipelineConfigSourceWebsocketTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceWebsocketTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ca_file: {
      value: cdktn.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crt_file: {
      value: cdktn.stringToHclTerraform(struct!.crtFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktn.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_key: {
      value: cdktn.stringToHclTerraform(struct!.keyPassKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceWebsocketTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceWebsocketTls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._crtFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.crtFile = this._crtFile;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keyPassKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassKey = this._keyPassKey;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceWebsocketTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
      this._keyPassKey = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._crtFile = value.crtFile;
      this._keyFile = value.keyFile;
      this._keyPassKey = value.keyPassKey;
      this._mode = value.mode;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // crt_file - computed: false, optional: true, required: false
  private _crtFile?: string; 
  public get crtFile() {
    return this.getStringAttribute('crt_file');
  }
  public set crtFile(value: string) {
    this._crtFile = value;
  }
  public resetCrtFile() {
    this._crtFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crtFileInput() {
    return this._crtFile;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_pass_key - computed: false, optional: true, required: false
  private _keyPassKey?: string; 
  public get keyPassKey() {
    return this.getStringAttribute('key_pass_key');
  }
  public set keyPassKey(value: string) {
    this._keyPassKey = value;
  }
  public resetKeyPassKey() {
    this._keyPassKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassKeyInput() {
    return this._keyPassKey;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class ObservabilityPipelineConfigSourceWebsocketTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceWebsocketTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceWebsocketTlsOutputReference {
    return new ObservabilityPipelineConfigSourceWebsocketTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceWebsocket {
  /**
  * The authentication strategy used when connecting to the WebSocket server. Valid values are `none`, `basic`, `bearer`, `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#auth_strategy ObservabilityPipeline#auth_strategy}
  */
  readonly authStrategy: string;
  /**
  * Name of the environment variable or secret that holds a custom header value. Used when `auth_strategy` is `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#custom_key ObservabilityPipeline#custom_key}
  */
  readonly customKey?: string;
  /**
  * The decoding format used to interpret incoming log events. Valid values are `bytes`, `gelf`, `json`, `syslog`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#decoding ObservabilityPipeline#decoding}
  */
  readonly decoding: string;
  /**
  * Name of the environment variable or secret that holds the password. Used when `auth_strategy` is `basic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#password_key ObservabilityPipeline#password_key}
  */
  readonly passwordKey?: string;
  /**
  * Name of the environment variable or secret that holds the bearer token. Used when `auth_strategy` is `bearer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#token_key ObservabilityPipeline#token_key}
  */
  readonly tokenKey?: string;
  /**
  * Name of the environment variable or secret that holds the WebSocket URI to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#uri_key ObservabilityPipeline#uri_key}
  */
  readonly uriKey?: string;
  /**
  * Name of the environment variable or secret that holds the username. Used when `auth_strategy` is `basic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#username_key ObservabilityPipeline#username_key}
  */
  readonly usernameKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceWebsocketTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceWebsocketToTerraform(struct?: ObservabilityPipelineConfigSourceWebsocket | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_strategy: cdktn.stringToTerraform(struct!.authStrategy),
    custom_key: cdktn.stringToTerraform(struct!.customKey),
    decoding: cdktn.stringToTerraform(struct!.decoding),
    password_key: cdktn.stringToTerraform(struct!.passwordKey),
    token_key: cdktn.stringToTerraform(struct!.tokenKey),
    uri_key: cdktn.stringToTerraform(struct!.uriKey),
    username_key: cdktn.stringToTerraform(struct!.usernameKey),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceWebsocketTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceWebsocketToHclTerraform(struct?: ObservabilityPipelineConfigSourceWebsocket | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_strategy: {
      value: cdktn.stringToHclTerraform(struct!.authStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_key: {
      value: cdktn.stringToHclTerraform(struct!.customKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decoding: {
      value: cdktn.stringToHclTerraform(struct!.decoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_key: {
      value: cdktn.stringToHclTerraform(struct!.passwordKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_key: {
      value: cdktn.stringToHclTerraform(struct!.tokenKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_key: {
      value: cdktn.stringToHclTerraform(struct!.uriKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_key: {
      value: cdktn.stringToHclTerraform(struct!.usernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceWebsocketTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceWebsocketTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceWebsocketOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSourceWebsocket | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.authStrategy = this._authStrategy;
    }
    if (this._customKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKey = this._customKey;
    }
    if (this._decoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.decoding = this._decoding;
    }
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    if (this._tokenKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenKey = this._tokenKey;
    }
    if (this._uriKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriKey = this._uriKey;
    }
    if (this._usernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameKey = this._usernameKey;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceWebsocket | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authStrategy = undefined;
      this._customKey = undefined;
      this._decoding = undefined;
      this._passwordKey = undefined;
      this._tokenKey = undefined;
      this._uriKey = undefined;
      this._usernameKey = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authStrategy = value.authStrategy;
      this._customKey = value.customKey;
      this._decoding = value.decoding;
      this._passwordKey = value.passwordKey;
      this._tokenKey = value.tokenKey;
      this._uriKey = value.uriKey;
      this._usernameKey = value.usernameKey;
      this._tls.internalValue = value.tls;
    }
  }

  // auth_strategy - computed: false, optional: false, required: true
  private _authStrategy?: string; 
  public get authStrategy() {
    return this.getStringAttribute('auth_strategy');
  }
  public set authStrategy(value: string) {
    this._authStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authStrategyInput() {
    return this._authStrategy;
  }

  // custom_key - computed: false, optional: true, required: false
  private _customKey?: string; 
  public get customKey() {
    return this.getStringAttribute('custom_key');
  }
  public set customKey(value: string) {
    this._customKey = value;
  }
  public resetCustomKey() {
    this._customKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyInput() {
    return this._customKey;
  }

  // decoding - computed: false, optional: false, required: true
  private _decoding?: string; 
  public get decoding() {
    return this.getStringAttribute('decoding');
  }
  public set decoding(value: string) {
    this._decoding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decodingInput() {
    return this._decoding;
  }

  // password_key - computed: false, optional: true, required: false
  private _passwordKey?: string; 
  public get passwordKey() {
    return this.getStringAttribute('password_key');
  }
  public set passwordKey(value: string) {
    this._passwordKey = value;
  }
  public resetPasswordKey() {
    this._passwordKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }

  // token_key - computed: false, optional: true, required: false
  private _tokenKey?: string; 
  public get tokenKey() {
    return this.getStringAttribute('token_key');
  }
  public set tokenKey(value: string) {
    this._tokenKey = value;
  }
  public resetTokenKey() {
    this._tokenKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenKeyInput() {
    return this._tokenKey;
  }

  // uri_key - computed: false, optional: true, required: false
  private _uriKey?: string; 
  public get uriKey() {
    return this.getStringAttribute('uri_key');
  }
  public set uriKey(value: string) {
    this._uriKey = value;
  }
  public resetUriKey() {
    this._uriKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriKeyInput() {
    return this._uriKey;
  }

  // username_key - computed: false, optional: true, required: false
  private _usernameKey?: string; 
  public get usernameKey() {
    return this.getStringAttribute('username_key');
  }
  public set usernameKey(value: string) {
    this._usernameKey = value;
  }
  public resetUsernameKey() {
    this._usernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameKeyInput() {
    return this._usernameKey;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigSourceWebsocketTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigSourceWebsocketTls[] | cdktn.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceWebsocketList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceWebsocket[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceWebsocketOutputReference {
    return new ObservabilityPipelineConfigSourceWebsocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSource {
  /**
  * The unique identifier for this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * amazon_data_firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#amazon_data_firehose ObservabilityPipeline#amazon_data_firehose}
  */
  readonly amazonDataFirehose?: ObservabilityPipelineConfigSourceAmazonDataFirehose[] | cdktn.IResolvable;
  /**
  * amazon_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#amazon_s3 ObservabilityPipeline#amazon_s3}
  */
  readonly amazonS3?: ObservabilityPipelineConfigSourceAmazonS3[] | cdktn.IResolvable;
  /**
  * datadog_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#datadog_agent ObservabilityPipeline#datadog_agent}
  */
  readonly datadogAgent?: ObservabilityPipelineConfigSourceDatadogAgent[] | cdktn.IResolvable;
  /**
  * fluent_bit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#fluent_bit ObservabilityPipeline#fluent_bit}
  */
  readonly fluentBit?: ObservabilityPipelineConfigSourceFluentBit[] | cdktn.IResolvable;
  /**
  * fluentd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#fluentd ObservabilityPipeline#fluentd}
  */
  readonly fluentd?: ObservabilityPipelineConfigSourceFluentd[] | cdktn.IResolvable;
  /**
  * google_pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#google_pubsub ObservabilityPipeline#google_pubsub}
  */
  readonly googlePubsub?: ObservabilityPipelineConfigSourceGooglePubsub[] | cdktn.IResolvable;
  /**
  * http_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#http_client ObservabilityPipeline#http_client}
  */
  readonly httpClient?: ObservabilityPipelineConfigSourceHttpClient[] | cdktn.IResolvable;
  /**
  * http_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#http_server ObservabilityPipeline#http_server}
  */
  readonly httpServer?: ObservabilityPipelineConfigSourceHttpServer[] | cdktn.IResolvable;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#kafka ObservabilityPipeline#kafka}
  */
  readonly kafka?: ObservabilityPipelineConfigSourceKafka[] | cdktn.IResolvable;
  /**
  * logstash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#logstash ObservabilityPipeline#logstash}
  */
  readonly logstash?: ObservabilityPipelineConfigSourceLogstash[] | cdktn.IResolvable;
  /**
  * opentelemetry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#opentelemetry ObservabilityPipeline#opentelemetry}
  */
  readonly opentelemetry?: ObservabilityPipelineConfigSourceOpentelemetry[] | cdktn.IResolvable;
  /**
  * rsyslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#rsyslog ObservabilityPipeline#rsyslog}
  */
  readonly rsyslog?: ObservabilityPipelineConfigSourceRsyslog[] | cdktn.IResolvable;
  /**
  * socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#socket ObservabilityPipeline#socket}
  */
  readonly socket?: ObservabilityPipelineConfigSourceSocket[] | cdktn.IResolvable;
  /**
  * splunk_hec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#splunk_hec ObservabilityPipeline#splunk_hec}
  */
  readonly splunkHec?: ObservabilityPipelineConfigSourceSplunkHec[] | cdktn.IResolvable;
  /**
  * splunk_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#splunk_tcp ObservabilityPipeline#splunk_tcp}
  */
  readonly splunkTcp?: ObservabilityPipelineConfigSourceSplunkTcp[] | cdktn.IResolvable;
  /**
  * sumo_logic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#sumo_logic ObservabilityPipeline#sumo_logic}
  */
  readonly sumoLogic?: ObservabilityPipelineConfigSourceSumoLogic[] | cdktn.IResolvable;
  /**
  * syslog_ng block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#syslog_ng ObservabilityPipeline#syslog_ng}
  */
  readonly syslogNg?: ObservabilityPipelineConfigSourceSyslogNg[] | cdktn.IResolvable;
  /**
  * websocket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#websocket ObservabilityPipeline#websocket}
  */
  readonly websocket?: ObservabilityPipelineConfigSourceWebsocket[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceToTerraform(struct?: ObservabilityPipelineConfigSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    amazon_data_firehose: cdktn.listMapper(observabilityPipelineConfigSourceAmazonDataFirehoseToTerraform, true)(struct!.amazonDataFirehose),
    amazon_s3: cdktn.listMapper(observabilityPipelineConfigSourceAmazonS3ToTerraform, true)(struct!.amazonS3),
    datadog_agent: cdktn.listMapper(observabilityPipelineConfigSourceDatadogAgentToTerraform, true)(struct!.datadogAgent),
    fluent_bit: cdktn.listMapper(observabilityPipelineConfigSourceFluentBitToTerraform, true)(struct!.fluentBit),
    fluentd: cdktn.listMapper(observabilityPipelineConfigSourceFluentdToTerraform, true)(struct!.fluentd),
    google_pubsub: cdktn.listMapper(observabilityPipelineConfigSourceGooglePubsubToTerraform, true)(struct!.googlePubsub),
    http_client: cdktn.listMapper(observabilityPipelineConfigSourceHttpClientToTerraform, true)(struct!.httpClient),
    http_server: cdktn.listMapper(observabilityPipelineConfigSourceHttpServerToTerraform, true)(struct!.httpServer),
    kafka: cdktn.listMapper(observabilityPipelineConfigSourceKafkaToTerraform, true)(struct!.kafka),
    logstash: cdktn.listMapper(observabilityPipelineConfigSourceLogstashToTerraform, true)(struct!.logstash),
    opentelemetry: cdktn.listMapper(observabilityPipelineConfigSourceOpentelemetryToTerraform, true)(struct!.opentelemetry),
    rsyslog: cdktn.listMapper(observabilityPipelineConfigSourceRsyslogToTerraform, true)(struct!.rsyslog),
    socket: cdktn.listMapper(observabilityPipelineConfigSourceSocketToTerraform, true)(struct!.socket),
    splunk_hec: cdktn.listMapper(observabilityPipelineConfigSourceSplunkHecToTerraform, true)(struct!.splunkHec),
    splunk_tcp: cdktn.listMapper(observabilityPipelineConfigSourceSplunkTcpToTerraform, true)(struct!.splunkTcp),
    sumo_logic: cdktn.listMapper(observabilityPipelineConfigSourceSumoLogicToTerraform, true)(struct!.sumoLogic),
    syslog_ng: cdktn.listMapper(observabilityPipelineConfigSourceSyslogNgToTerraform, true)(struct!.syslogNg),
    websocket: cdktn.listMapper(observabilityPipelineConfigSourceWebsocketToTerraform, true)(struct!.websocket),
  }
}


export function observabilityPipelineConfigSourceToHclTerraform(struct?: ObservabilityPipelineConfigSource | cdktn.IResolvable): any {
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
    amazon_data_firehose: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceAmazonDataFirehoseToHclTerraform, true)(struct!.amazonDataFirehose),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceAmazonDataFirehoseList",
    },
    amazon_s3: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceAmazonS3ToHclTerraform, true)(struct!.amazonS3),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceAmazonS3List",
    },
    datadog_agent: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceDatadogAgentToHclTerraform, true)(struct!.datadogAgent),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceDatadogAgentList",
    },
    fluent_bit: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceFluentBitToHclTerraform, true)(struct!.fluentBit),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceFluentBitList",
    },
    fluentd: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceFluentdToHclTerraform, true)(struct!.fluentd),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceFluentdList",
    },
    google_pubsub: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceGooglePubsubToHclTerraform, true)(struct!.googlePubsub),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceGooglePubsubList",
    },
    http_client: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceHttpClientToHclTerraform, true)(struct!.httpClient),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceHttpClientList",
    },
    http_server: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceHttpServerToHclTerraform, true)(struct!.httpServer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceHttpServerList",
    },
    kafka: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceKafkaToHclTerraform, true)(struct!.kafka),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceKafkaList",
    },
    logstash: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceLogstashToHclTerraform, true)(struct!.logstash),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceLogstashList",
    },
    opentelemetry: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceOpentelemetryToHclTerraform, true)(struct!.opentelemetry),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceOpentelemetryList",
    },
    rsyslog: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceRsyslogToHclTerraform, true)(struct!.rsyslog),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceRsyslogList",
    },
    socket: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceSocketToHclTerraform, true)(struct!.socket),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceSocketList",
    },
    splunk_hec: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceSplunkHecToHclTerraform, true)(struct!.splunkHec),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceSplunkHecList",
    },
    splunk_tcp: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceSplunkTcpToHclTerraform, true)(struct!.splunkTcp),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceSplunkTcpList",
    },
    sumo_logic: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceSumoLogicToHclTerraform, true)(struct!.sumoLogic),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceSumoLogicList",
    },
    syslog_ng: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceSyslogNgToHclTerraform, true)(struct!.syslogNg),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceSyslogNgList",
    },
    websocket: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceWebsocketToHclTerraform, true)(struct!.websocket),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceWebsocketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigSourceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigSource | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._amazonDataFirehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonDataFirehose = this._amazonDataFirehose?.internalValue;
    }
    if (this._amazonS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonS3 = this._amazonS3?.internalValue;
    }
    if (this._datadogAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogAgent = this._datadogAgent?.internalValue;
    }
    if (this._fluentBit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluentBit = this._fluentBit?.internalValue;
    }
    if (this._fluentd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fluentd = this._fluentd?.internalValue;
    }
    if (this._googlePubsub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googlePubsub = this._googlePubsub?.internalValue;
    }
    if (this._httpClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpClient = this._httpClient?.internalValue;
    }
    if (this._httpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpServer = this._httpServer?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._logstash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logstash = this._logstash?.internalValue;
    }
    if (this._opentelemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentelemetry = this._opentelemetry?.internalValue;
    }
    if (this._rsyslog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsyslog = this._rsyslog?.internalValue;
    }
    if (this._socket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.socket = this._socket?.internalValue;
    }
    if (this._splunkHec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkHec = this._splunkHec?.internalValue;
    }
    if (this._splunkTcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkTcp = this._splunkTcp?.internalValue;
    }
    if (this._sumoLogic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sumoLogic = this._sumoLogic?.internalValue;
    }
    if (this._syslogNg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogNg = this._syslogNg?.internalValue;
    }
    if (this._websocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.websocket = this._websocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSource | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._amazonDataFirehose.internalValue = undefined;
      this._amazonS3.internalValue = undefined;
      this._datadogAgent.internalValue = undefined;
      this._fluentBit.internalValue = undefined;
      this._fluentd.internalValue = undefined;
      this._googlePubsub.internalValue = undefined;
      this._httpClient.internalValue = undefined;
      this._httpServer.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._logstash.internalValue = undefined;
      this._opentelemetry.internalValue = undefined;
      this._rsyslog.internalValue = undefined;
      this._socket.internalValue = undefined;
      this._splunkHec.internalValue = undefined;
      this._splunkTcp.internalValue = undefined;
      this._sumoLogic.internalValue = undefined;
      this._syslogNg.internalValue = undefined;
      this._websocket.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._amazonDataFirehose.internalValue = value.amazonDataFirehose;
      this._amazonS3.internalValue = value.amazonS3;
      this._datadogAgent.internalValue = value.datadogAgent;
      this._fluentBit.internalValue = value.fluentBit;
      this._fluentd.internalValue = value.fluentd;
      this._googlePubsub.internalValue = value.googlePubsub;
      this._httpClient.internalValue = value.httpClient;
      this._httpServer.internalValue = value.httpServer;
      this._kafka.internalValue = value.kafka;
      this._logstash.internalValue = value.logstash;
      this._opentelemetry.internalValue = value.opentelemetry;
      this._rsyslog.internalValue = value.rsyslog;
      this._socket.internalValue = value.socket;
      this._splunkHec.internalValue = value.splunkHec;
      this._splunkTcp.internalValue = value.splunkTcp;
      this._sumoLogic.internalValue = value.sumoLogic;
      this._syslogNg.internalValue = value.syslogNg;
      this._websocket.internalValue = value.websocket;
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

  // amazon_data_firehose - computed: false, optional: true, required: false
  private _amazonDataFirehose = new ObservabilityPipelineConfigSourceAmazonDataFirehoseList(this, "amazon_data_firehose", false);
  public get amazonDataFirehose() {
    return this._amazonDataFirehose;
  }
  public putAmazonDataFirehose(value: ObservabilityPipelineConfigSourceAmazonDataFirehose[] | cdktn.IResolvable) {
    this._amazonDataFirehose.internalValue = value;
  }
  public resetAmazonDataFirehose() {
    this._amazonDataFirehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonDataFirehoseInput() {
    return this._amazonDataFirehose.internalValue;
  }

  // amazon_s3 - computed: false, optional: true, required: false
  private _amazonS3 = new ObservabilityPipelineConfigSourceAmazonS3List(this, "amazon_s3", false);
  public get amazonS3() {
    return this._amazonS3;
  }
  public putAmazonS3(value: ObservabilityPipelineConfigSourceAmazonS3[] | cdktn.IResolvable) {
    this._amazonS3.internalValue = value;
  }
  public resetAmazonS3() {
    this._amazonS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonS3Input() {
    return this._amazonS3.internalValue;
  }

  // datadog_agent - computed: false, optional: true, required: false
  private _datadogAgent = new ObservabilityPipelineConfigSourceDatadogAgentList(this, "datadog_agent", false);
  public get datadogAgent() {
    return this._datadogAgent;
  }
  public putDatadogAgent(value: ObservabilityPipelineConfigSourceDatadogAgent[] | cdktn.IResolvable) {
    this._datadogAgent.internalValue = value;
  }
  public resetDatadogAgent() {
    this._datadogAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogAgentInput() {
    return this._datadogAgent.internalValue;
  }

  // fluent_bit - computed: false, optional: true, required: false
  private _fluentBit = new ObservabilityPipelineConfigSourceFluentBitList(this, "fluent_bit", false);
  public get fluentBit() {
    return this._fluentBit;
  }
  public putFluentBit(value: ObservabilityPipelineConfigSourceFluentBit[] | cdktn.IResolvable) {
    this._fluentBit.internalValue = value;
  }
  public resetFluentBit() {
    this._fluentBit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentBitInput() {
    return this._fluentBit.internalValue;
  }

  // fluentd - computed: false, optional: true, required: false
  private _fluentd = new ObservabilityPipelineConfigSourceFluentdList(this, "fluentd", false);
  public get fluentd() {
    return this._fluentd;
  }
  public putFluentd(value: ObservabilityPipelineConfigSourceFluentd[] | cdktn.IResolvable) {
    this._fluentd.internalValue = value;
  }
  public resetFluentd() {
    this._fluentd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluentdInput() {
    return this._fluentd.internalValue;
  }

  // google_pubsub - computed: false, optional: true, required: false
  private _googlePubsub = new ObservabilityPipelineConfigSourceGooglePubsubList(this, "google_pubsub", false);
  public get googlePubsub() {
    return this._googlePubsub;
  }
  public putGooglePubsub(value: ObservabilityPipelineConfigSourceGooglePubsub[] | cdktn.IResolvable) {
    this._googlePubsub.internalValue = value;
  }
  public resetGooglePubsub() {
    this._googlePubsub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googlePubsubInput() {
    return this._googlePubsub.internalValue;
  }

  // http_client - computed: false, optional: true, required: false
  private _httpClient = new ObservabilityPipelineConfigSourceHttpClientList(this, "http_client", false);
  public get httpClient() {
    return this._httpClient;
  }
  public putHttpClient(value: ObservabilityPipelineConfigSourceHttpClient[] | cdktn.IResolvable) {
    this._httpClient.internalValue = value;
  }
  public resetHttpClient() {
    this._httpClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientInput() {
    return this._httpClient.internalValue;
  }

  // http_server - computed: false, optional: true, required: false
  private _httpServer = new ObservabilityPipelineConfigSourceHttpServerList(this, "http_server", false);
  public get httpServer() {
    return this._httpServer;
  }
  public putHttpServer(value: ObservabilityPipelineConfigSourceHttpServer[] | cdktn.IResolvable) {
    this._httpServer.internalValue = value;
  }
  public resetHttpServer() {
    this._httpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServerInput() {
    return this._httpServer.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new ObservabilityPipelineConfigSourceKafkaList(this, "kafka", false);
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: ObservabilityPipelineConfigSourceKafka[] | cdktn.IResolvable) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // logstash - computed: false, optional: true, required: false
  private _logstash = new ObservabilityPipelineConfigSourceLogstashList(this, "logstash", false);
  public get logstash() {
    return this._logstash;
  }
  public putLogstash(value: ObservabilityPipelineConfigSourceLogstash[] | cdktn.IResolvable) {
    this._logstash.internalValue = value;
  }
  public resetLogstash() {
    this._logstash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstashInput() {
    return this._logstash.internalValue;
  }

  // opentelemetry - computed: false, optional: true, required: false
  private _opentelemetry = new ObservabilityPipelineConfigSourceOpentelemetryList(this, "opentelemetry", false);
  public get opentelemetry() {
    return this._opentelemetry;
  }
  public putOpentelemetry(value: ObservabilityPipelineConfigSourceOpentelemetry[] | cdktn.IResolvable) {
    this._opentelemetry.internalValue = value;
  }
  public resetOpentelemetry() {
    this._opentelemetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentelemetryInput() {
    return this._opentelemetry.internalValue;
  }

  // rsyslog - computed: false, optional: true, required: false
  private _rsyslog = new ObservabilityPipelineConfigSourceRsyslogList(this, "rsyslog", false);
  public get rsyslog() {
    return this._rsyslog;
  }
  public putRsyslog(value: ObservabilityPipelineConfigSourceRsyslog[] | cdktn.IResolvable) {
    this._rsyslog.internalValue = value;
  }
  public resetRsyslog() {
    this._rsyslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsyslogInput() {
    return this._rsyslog.internalValue;
  }

  // socket - computed: false, optional: true, required: false
  private _socket = new ObservabilityPipelineConfigSourceSocketList(this, "socket", false);
  public get socket() {
    return this._socket;
  }
  public putSocket(value: ObservabilityPipelineConfigSourceSocket[] | cdktn.IResolvable) {
    this._socket.internalValue = value;
  }
  public resetSocket() {
    this._socket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketInput() {
    return this._socket.internalValue;
  }

  // splunk_hec - computed: false, optional: true, required: false
  private _splunkHec = new ObservabilityPipelineConfigSourceSplunkHecList(this, "splunk_hec", false);
  public get splunkHec() {
    return this._splunkHec;
  }
  public putSplunkHec(value: ObservabilityPipelineConfigSourceSplunkHec[] | cdktn.IResolvable) {
    this._splunkHec.internalValue = value;
  }
  public resetSplunkHec() {
    this._splunkHec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkHecInput() {
    return this._splunkHec.internalValue;
  }

  // splunk_tcp - computed: false, optional: true, required: false
  private _splunkTcp = new ObservabilityPipelineConfigSourceSplunkTcpList(this, "splunk_tcp", false);
  public get splunkTcp() {
    return this._splunkTcp;
  }
  public putSplunkTcp(value: ObservabilityPipelineConfigSourceSplunkTcp[] | cdktn.IResolvable) {
    this._splunkTcp.internalValue = value;
  }
  public resetSplunkTcp() {
    this._splunkTcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkTcpInput() {
    return this._splunkTcp.internalValue;
  }

  // sumo_logic - computed: false, optional: true, required: false
  private _sumoLogic = new ObservabilityPipelineConfigSourceSumoLogicList(this, "sumo_logic", false);
  public get sumoLogic() {
    return this._sumoLogic;
  }
  public putSumoLogic(value: ObservabilityPipelineConfigSourceSumoLogic[] | cdktn.IResolvable) {
    this._sumoLogic.internalValue = value;
  }
  public resetSumoLogic() {
    this._sumoLogic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumoLogicInput() {
    return this._sumoLogic.internalValue;
  }

  // syslog_ng - computed: false, optional: true, required: false
  private _syslogNg = new ObservabilityPipelineConfigSourceSyslogNgList(this, "syslog_ng", false);
  public get syslogNg() {
    return this._syslogNg;
  }
  public putSyslogNg(value: ObservabilityPipelineConfigSourceSyslogNg[] | cdktn.IResolvable) {
    this._syslogNg.internalValue = value;
  }
  public resetSyslogNg() {
    this._syslogNg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogNgInput() {
    return this._syslogNg.internalValue;
  }

  // websocket - computed: false, optional: true, required: false
  private _websocket = new ObservabilityPipelineConfigSourceWebsocketList(this, "websocket", false);
  public get websocket() {
    return this._websocket;
  }
  public putWebsocket(value: ObservabilityPipelineConfigSourceWebsocket[] | cdktn.IResolvable) {
    this._websocket.internalValue = value;
  }
  public resetWebsocket() {
    this._websocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketInput() {
    return this._websocket.internalValue;
  }
}

export class ObservabilityPipelineConfigSourceList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSource[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceOutputReference {
    return new ObservabilityPipelineConfigSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigA {
  /**
  * The type of data being ingested. Defaults to `logs` if not specified. Valid values are `logs`, `metrics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#pipeline_type ObservabilityPipeline#pipeline_type}
  */
  readonly pipelineType?: string;
  /**
  * Set to `true` to continue using the legacy search syntax while migrating filter queries. After migrating all queries to the new syntax, set to `false`. The legacy syntax is deprecated and will eventually be removed. Requires Observability Pipelines Worker 2.11 or later. Only applies to `logs` pipelines. This field is ignored for `metrics` pipelines. See https://docs.datadoghq.com/observability_pipelines/guide/upgrade_your_filter_queries_to_the_new_search_syntax/ for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#use_legacy_search_syntax ObservabilityPipeline#use_legacy_search_syntax}
  */
  readonly useLegacySearchSyntax?: boolean | cdktn.IResolvable;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#destination ObservabilityPipeline#destination}
  */
  readonly destination?: ObservabilityPipelineConfigDestination[] | cdktn.IResolvable;
  /**
  * processor_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#processor_group ObservabilityPipeline#processor_group}
  */
  readonly processorGroup?: ObservabilityPipelineConfigProcessorGroup[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#source ObservabilityPipeline#source}
  */
  readonly source?: ObservabilityPipelineConfigSource[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigAToTerraform(struct?: ObservabilityPipelineConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pipeline_type: cdktn.stringToTerraform(struct!.pipelineType),
    use_legacy_search_syntax: cdktn.booleanToTerraform(struct!.useLegacySearchSyntax),
    destination: cdktn.listMapper(observabilityPipelineConfigDestinationToTerraform, true)(struct!.destination),
    processor_group: cdktn.listMapper(observabilityPipelineConfigProcessorGroupToTerraform, true)(struct!.processorGroup),
    source: cdktn.listMapper(observabilityPipelineConfigSourceToTerraform, true)(struct!.source),
  }
}


export function observabilityPipelineConfigAToHclTerraform(struct?: ObservabilityPipelineConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pipeline_type: {
      value: cdktn.stringToHclTerraform(struct!.pipelineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_legacy_search_syntax: {
      value: cdktn.booleanToHclTerraform(struct!.useLegacySearchSyntax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationList",
    },
    processor_group: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupToHclTerraform, true)(struct!.processorGroup),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupList",
    },
    source: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigAOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigA | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipelineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineType = this._pipelineType;
    }
    if (this._useLegacySearchSyntax !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLegacySearchSyntax = this._useLegacySearchSyntax;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._processorGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processorGroup = this._processorGroup?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigA | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pipelineType = undefined;
      this._useLegacySearchSyntax = undefined;
      this._destination.internalValue = undefined;
      this._processorGroup.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pipelineType = value.pipelineType;
      this._useLegacySearchSyntax = value.useLegacySearchSyntax;
      this._destination.internalValue = value.destination;
      this._processorGroup.internalValue = value.processorGroup;
      this._source.internalValue = value.source;
    }
  }

  // pipeline_type - computed: true, optional: true, required: false
  private _pipelineType?: string; 
  public get pipelineType() {
    return this.getStringAttribute('pipeline_type');
  }
  public set pipelineType(value: string) {
    this._pipelineType = value;
  }
  public resetPipelineType() {
    this._pipelineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineTypeInput() {
    return this._pipelineType;
  }

  // use_legacy_search_syntax - computed: true, optional: true, required: false
  private _useLegacySearchSyntax?: boolean | cdktn.IResolvable; 
  public get useLegacySearchSyntax() {
    return this.getBooleanAttribute('use_legacy_search_syntax');
  }
  public set useLegacySearchSyntax(value: boolean | cdktn.IResolvable) {
    this._useLegacySearchSyntax = value;
  }
  public resetUseLegacySearchSyntax() {
    this._useLegacySearchSyntax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLegacySearchSyntaxInput() {
    return this._useLegacySearchSyntax;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new ObservabilityPipelineConfigDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ObservabilityPipelineConfigDestination[] | cdktn.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // processor_group - computed: false, optional: true, required: false
  private _processorGroup = new ObservabilityPipelineConfigProcessorGroupList(this, "processor_group", false);
  public get processorGroup() {
    return this._processorGroup;
  }
  public putProcessorGroup(value: ObservabilityPipelineConfigProcessorGroup[] | cdktn.IResolvable) {
    this._processorGroup.internalValue = value;
  }
  public resetProcessorGroup() {
    this._processorGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorGroupInput() {
    return this._processorGroup.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ObservabilityPipelineConfigSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: ObservabilityPipelineConfigSource[] | cdktn.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class ObservabilityPipelineConfigAList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigA[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigAOutputReference {
    return new ObservabilityPipelineConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
