/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { ObservabilityPipelineConfigDestinationAmazonOpensearch,
observabilityPipelineConfigDestinationAmazonOpensearchToTerraform,
observabilityPipelineConfigDestinationAmazonOpensearchToHclTerraform,
ObservabilityPipelineConfigDestinationAmazonOpensearchList,
ObservabilityPipelineConfigDestinationAmazonS3,
observabilityPipelineConfigDestinationAmazonS3ToTerraform,
observabilityPipelineConfigDestinationAmazonS3ToHclTerraform,
ObservabilityPipelineConfigDestinationAmazonS3List,
ObservabilityPipelineConfigDestinationAmazonS3Generic,
observabilityPipelineConfigDestinationAmazonS3GenericToTerraform,
observabilityPipelineConfigDestinationAmazonS3GenericToHclTerraform,
ObservabilityPipelineConfigDestinationAmazonS3GenericList,
ObservabilityPipelineConfigDestinationAmazonSecurityLake,
observabilityPipelineConfigDestinationAmazonSecurityLakeToTerraform,
observabilityPipelineConfigDestinationAmazonSecurityLakeToHclTerraform,
ObservabilityPipelineConfigDestinationAmazonSecurityLakeList,
ObservabilityPipelineConfigDestinationAzureStorage,
observabilityPipelineConfigDestinationAzureStorageToTerraform,
observabilityPipelineConfigDestinationAzureStorageToHclTerraform,
ObservabilityPipelineConfigDestinationAzureStorageList,
ObservabilityPipelineConfigDestinationClickhouse,
observabilityPipelineConfigDestinationClickhouseToTerraform,
observabilityPipelineConfigDestinationClickhouseToHclTerraform,
ObservabilityPipelineConfigDestinationClickhouseList,
ObservabilityPipelineConfigDestinationCloudPrem,
observabilityPipelineConfigDestinationCloudPremToTerraform,
observabilityPipelineConfigDestinationCloudPremToHclTerraform,
ObservabilityPipelineConfigDestinationCloudPremList,
ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiem,
observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemToTerraform,
observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemToHclTerraform,
ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemList,
ObservabilityPipelineConfigDestinationDatabricksZerobus,
observabilityPipelineConfigDestinationDatabricksZerobusToTerraform,
observabilityPipelineConfigDestinationDatabricksZerobusToHclTerraform,
ObservabilityPipelineConfigDestinationDatabricksZerobusList,
ObservabilityPipelineConfigDestinationDatadogLogs,
observabilityPipelineConfigDestinationDatadogLogsToTerraform,
observabilityPipelineConfigDestinationDatadogLogsToHclTerraform,
ObservabilityPipelineConfigDestinationDatadogLogsList,
ObservabilityPipelineConfigDestinationDatadogMetrics,
observabilityPipelineConfigDestinationDatadogMetricsToTerraform,
observabilityPipelineConfigDestinationDatadogMetricsToHclTerraform,
ObservabilityPipelineConfigDestinationDatadogMetricsList,
ObservabilityPipelineConfigDestinationElasticsearch,
observabilityPipelineConfigDestinationElasticsearchToTerraform,
observabilityPipelineConfigDestinationElasticsearchToHclTerraform,
ObservabilityPipelineConfigDestinationElasticsearchList,
ObservabilityPipelineConfigDestinationGoogleCloudStorage,
observabilityPipelineConfigDestinationGoogleCloudStorageToTerraform,
observabilityPipelineConfigDestinationGoogleCloudStorageToHclTerraform,
ObservabilityPipelineConfigDestinationGoogleCloudStorageList,
ObservabilityPipelineConfigDestinationGooglePubsub,
observabilityPipelineConfigDestinationGooglePubsubToTerraform,
observabilityPipelineConfigDestinationGooglePubsubToHclTerraform,
ObservabilityPipelineConfigDestinationGooglePubsubList,
ObservabilityPipelineConfigDestinationGoogleSecops,
observabilityPipelineConfigDestinationGoogleSecopsToTerraform,
observabilityPipelineConfigDestinationGoogleSecopsToHclTerraform,
ObservabilityPipelineConfigDestinationGoogleSecopsList,
ObservabilityPipelineConfigDestinationHttpClient,
observabilityPipelineConfigDestinationHttpClientToTerraform,
observabilityPipelineConfigDestinationHttpClientToHclTerraform,
ObservabilityPipelineConfigDestinationHttpClientList,
ObservabilityPipelineConfigDestinationKafka,
observabilityPipelineConfigDestinationKafkaToTerraform,
observabilityPipelineConfigDestinationKafkaToHclTerraform,
ObservabilityPipelineConfigDestinationKafkaList } from './structs0';
export interface ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationMicrosoftSentinelBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationMicrosoftSentinelBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDisk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDisk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationMicrosoftSentinelBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationMicrosoftSentinelBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_events: {
      value: cdktn.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxEvents = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxEvents = value.maxEvents;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationMicrosoftSentinelBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationMicrosoftSentinelBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationMicrosoftSentinelBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationMicrosoftSentinelBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationMicrosoftSentinelBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationMicrosoftSentinelBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationMicrosoftSentinelBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationMicrosoftSentinelBuffer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationMicrosoftSentinelBuffer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disk.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disk.internalValue = value.disk;
      this._memory.internalValue = value.memory;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDisk[] | cdktn.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemory[] | cdktn.IResolvable) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationMicrosoftSentinelBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationMicrosoftSentinel {
  /**
  * Azure AD client ID used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#client_id ObservabilityPipeline#client_id}
  */
  readonly clientId: string;
  /**
  * Name of the environment variable or secret that holds the Azure AD client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#client_secret_key ObservabilityPipeline#client_secret_key}
  */
  readonly clientSecretKey?: string;
  /**
  * Name of the environment variable or secret that holds the Data Collection Endpoint (DCE) URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#dce_uri_key ObservabilityPipeline#dce_uri_key}
  */
  readonly dceUriKey?: string;
  /**
  * The immutable ID of the Data Collection Rule (DCR).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#dcr_immutable_id ObservabilityPipeline#dcr_immutable_id}
  */
  readonly dcrImmutableId: string;
  /**
  * The name of the Log Analytics table where logs will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#table ObservabilityPipeline#table}
  */
  readonly table: string;
  /**
  * Azure AD tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tenant_id ObservabilityPipeline#tenant_id}
  */
  readonly tenantId: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBuffer[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationMicrosoftSentinelToTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret_key: cdktn.stringToTerraform(struct!.clientSecretKey),
    dce_uri_key: cdktn.stringToTerraform(struct!.dceUriKey),
    dcr_immutable_id: cdktn.stringToTerraform(struct!.dcrImmutableId),
    table: cdktn.stringToTerraform(struct!.table),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationMicrosoftSentinelBufferToTerraform, true)(struct!.buffer),
  }
}


export function observabilityPipelineConfigDestinationMicrosoftSentinelToHclTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_key: {
      value: cdktn.stringToHclTerraform(struct!.clientSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dce_uri_key: {
      value: cdktn.stringToHclTerraform(struct!.dceUriKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dcr_immutable_id: {
      value: cdktn.stringToHclTerraform(struct!.dcrImmutableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationMicrosoftSentinelBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationMicrosoftSentinelOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationMicrosoftSentinel | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretKey = this._clientSecretKey;
    }
    if (this._dceUriKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dceUriKey = this._dceUriKey;
    }
    if (this._dcrImmutableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcrImmutableId = this._dcrImmutableId;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationMicrosoftSentinel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecretKey = undefined;
      this._dceUriKey = undefined;
      this._dcrImmutableId = undefined;
      this._table = undefined;
      this._tenantId = undefined;
      this._buffer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecretKey = value.clientSecretKey;
      this._dceUriKey = value.dceUriKey;
      this._dcrImmutableId = value.dcrImmutableId;
      this._table = value.table;
      this._tenantId = value.tenantId;
      this._buffer.internalValue = value.buffer;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_key - computed: false, optional: true, required: false
  private _clientSecretKey?: string; 
  public get clientSecretKey() {
    return this.getStringAttribute('client_secret_key');
  }
  public set clientSecretKey(value: string) {
    this._clientSecretKey = value;
  }
  public resetClientSecretKey() {
    this._clientSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretKeyInput() {
    return this._clientSecretKey;
  }

  // dce_uri_key - computed: false, optional: true, required: false
  private _dceUriKey?: string; 
  public get dceUriKey() {
    return this.getStringAttribute('dce_uri_key');
  }
  public set dceUriKey(value: string) {
    this._dceUriKey = value;
  }
  public resetDceUriKey() {
    this._dceUriKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dceUriKeyInput() {
    return this._dceUriKey;
  }

  // dcr_immutable_id - computed: false, optional: false, required: true
  private _dcrImmutableId?: string; 
  public get dcrImmutableId() {
    return this.getStringAttribute('dcr_immutable_id');
  }
  public set dcrImmutableId(value: string) {
    this._dcrImmutableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dcrImmutableIdInput() {
    return this._dcrImmutableId;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationMicrosoftSentinelBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationMicrosoftSentinelList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationMicrosoftSentinel[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationMicrosoftSentinelOutputReference {
    return new ObservabilityPipelineConfigDestinationMicrosoftSentinelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationNewRelicBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationNewRelicBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelicBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationNewRelicBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelicBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationNewRelicBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationNewRelicBufferDisk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationNewRelicBufferDisk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationNewRelicBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationNewRelicBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationNewRelicBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationNewRelicBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationNewRelicBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationNewRelicBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelicBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationNewRelicBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelicBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_events: {
      value: cdktn.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationNewRelicBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationNewRelicBufferMemory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationNewRelicBufferMemory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxEvents = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxEvents = value.maxEvents;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationNewRelicBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationNewRelicBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationNewRelicBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationNewRelicBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationNewRelicBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationNewRelicBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationNewRelicBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationNewRelicBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelicBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationNewRelicBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationNewRelicBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationNewRelicBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelicBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationNewRelicBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationNewRelicBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationNewRelicBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationNewRelicBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationNewRelicBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationNewRelicBuffer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationNewRelicBuffer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disk.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disk.internalValue = value.disk;
      this._memory.internalValue = value.memory;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ObservabilityPipelineConfigDestinationNewRelicBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationNewRelicBufferDisk[] | cdktn.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new ObservabilityPipelineConfigDestinationNewRelicBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationNewRelicBufferMemory[] | cdktn.IResolvable) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationNewRelicBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationNewRelicBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationNewRelicBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationNewRelicBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationNewRelic {
  /**
  * Name of the environment variable or secret that holds the New Relic account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#account_id_key ObservabilityPipeline#account_id_key}
  */
  readonly accountIdKey?: string;
  /**
  * Name of the environment variable or secret that holds the New Relic license key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#license_key_key ObservabilityPipeline#license_key_key}
  */
  readonly licenseKeyKey?: string;
  /**
  * The New Relic region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationNewRelicBuffer[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationNewRelicToTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id_key: cdktn.stringToTerraform(struct!.accountIdKey),
    license_key_key: cdktn.stringToTerraform(struct!.licenseKeyKey),
    region: cdktn.stringToTerraform(struct!.region),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationNewRelicBufferToTerraform, true)(struct!.buffer),
  }
}


export function observabilityPipelineConfigDestinationNewRelicToHclTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    account_id_key: {
      value: cdktn.stringToHclTerraform(struct!.accountIdKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_key_key: {
      value: cdktn.stringToHclTerraform(struct!.licenseKeyKey),
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
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationNewRelicBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationNewRelicBufferList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationNewRelicOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationNewRelic | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIdKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIdKey = this._accountIdKey;
    }
    if (this._licenseKeyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseKeyKey = this._licenseKeyKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationNewRelic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIdKey = undefined;
      this._licenseKeyKey = undefined;
      this._region = undefined;
      this._buffer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIdKey = value.accountIdKey;
      this._licenseKeyKey = value.licenseKeyKey;
      this._region = value.region;
      this._buffer.internalValue = value.buffer;
    }
  }

  // account_id_key - computed: false, optional: true, required: false
  private _accountIdKey?: string; 
  public get accountIdKey() {
    return this.getStringAttribute('account_id_key');
  }
  public set accountIdKey(value: string) {
    this._accountIdKey = value;
  }
  public resetAccountIdKey() {
    this._accountIdKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdKeyInput() {
    return this._accountIdKey;
  }

  // license_key_key - computed: false, optional: true, required: false
  private _licenseKeyKey?: string; 
  public get licenseKeyKey() {
    return this.getStringAttribute('license_key_key');
  }
  public set licenseKeyKey(value: string) {
    this._licenseKeyKey = value;
  }
  public resetLicenseKeyKey() {
    this._licenseKeyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKeyKeyInput() {
    return this._licenseKeyKey;
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

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationNewRelicBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationNewRelicBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationNewRelicList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationNewRelic[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationNewRelicOutputReference {
    return new ObservabilityPipelineConfigDestinationNewRelicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationOpensearchAuth {
  /**
  * Name of the environment variable or secret that holds the OpenSearch password (used when `strategy` is `basic`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#password_key ObservabilityPipeline#password_key}
  */
  readonly passwordKey?: string;
  /**
  * The authentication strategy to use. Valid values are `basic`, `aws`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#strategy ObservabilityPipeline#strategy}
  */
  readonly strategy: string;
  /**
  * Name of the environment variable or secret that holds the OpenSearch username (used when `strategy` is `basic`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#username_key ObservabilityPipeline#username_key}
  */
  readonly usernameKey?: string;
}

export function observabilityPipelineConfigDestinationOpensearchAuthToTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    password_key: cdktn.stringToTerraform(struct!.passwordKey),
    strategy: cdktn.stringToTerraform(struct!.strategy),
    username_key: cdktn.stringToTerraform(struct!.usernameKey),
  }
}


export function observabilityPipelineConfigDestinationOpensearchAuthToHclTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    password_key: {
      value: cdktn.stringToHclTerraform(struct!.passwordKey),
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

export class ObservabilityPipelineConfigDestinationOpensearchAuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationOpensearchAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._usernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameKey = this._usernameKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationOpensearchAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordKey = undefined;
      this._strategy = undefined;
      this._usernameKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordKey = value.passwordKey;
      this._strategy = value.strategy;
      this._usernameKey = value.usernameKey;
    }
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

export class ObservabilityPipelineConfigDestinationOpensearchAuthList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationOpensearchAuth[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationOpensearchAuthOutputReference {
    return new ObservabilityPipelineConfigDestinationOpensearchAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationOpensearchBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationOpensearchBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationOpensearchBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationOpensearchBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationOpensearchBufferDisk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationOpensearchBufferDisk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationOpensearchBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationOpensearchBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationOpensearchBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationOpensearchBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationOpensearchBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationOpensearchBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationOpensearchBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_events: {
      value: cdktn.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationOpensearchBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationOpensearchBufferMemory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationOpensearchBufferMemory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxEvents = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxEvents = value.maxEvents;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationOpensearchBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationOpensearchBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationOpensearchBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationOpensearchBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationOpensearchBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationOpensearchBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationOpensearchBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationOpensearchBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationOpensearchBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationOpensearchBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationOpensearchBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationOpensearchBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationOpensearchBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationOpensearchBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationOpensearchBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationOpensearchBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationOpensearchBuffer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationOpensearchBuffer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disk.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disk.internalValue = value.disk;
      this._memory.internalValue = value.memory;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ObservabilityPipelineConfigDestinationOpensearchBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationOpensearchBufferDisk[] | cdktn.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new ObservabilityPipelineConfigDestinationOpensearchBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationOpensearchBufferMemory[] | cdktn.IResolvable) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationOpensearchBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationOpensearchBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationOpensearchBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationOpensearchBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationOpensearchDataStream {
  /**
  * The data stream dataset for your logs. This groups logs by their source or application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#dataset ObservabilityPipeline#dataset}
  */
  readonly dataset?: string;
  /**
  * The data stream type for your logs. This determines how logs are categorized within the data stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#dtype ObservabilityPipeline#dtype}
  */
  readonly dtype?: string;
  /**
  * The data stream namespace for your logs. This separates logs into different environments or domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#namespace ObservabilityPipeline#namespace}
  */
  readonly namespace?: string;
}

export function observabilityPipelineConfigDestinationOpensearchDataStreamToTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchDataStream | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset: cdktn.stringToTerraform(struct!.dataset),
    dtype: cdktn.stringToTerraform(struct!.dtype),
    namespace: cdktn.stringToTerraform(struct!.namespace),
  }
}


export function observabilityPipelineConfigDestinationOpensearchDataStreamToHclTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchDataStream | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset: {
      value: cdktn.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dtype: {
      value: cdktn.stringToHclTerraform(struct!.dtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktn.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationOpensearchDataStreamOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationOpensearchDataStream | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._dtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtype = this._dtype;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationOpensearchDataStream | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataset = undefined;
      this._dtype = undefined;
      this._namespace = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataset = value.dataset;
      this._dtype = value.dtype;
      this._namespace = value.namespace;
    }
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // dtype - computed: false, optional: true, required: false
  private _dtype?: string; 
  public get dtype() {
    return this.getStringAttribute('dtype');
  }
  public set dtype(value: string) {
    this._dtype = value;
  }
  public resetDtype() {
    this._dtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtypeInput() {
    return this._dtype;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class ObservabilityPipelineConfigDestinationOpensearchDataStreamList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationOpensearchDataStream[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationOpensearchDataStreamOutputReference {
    return new ObservabilityPipelineConfigDestinationOpensearchDataStreamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationOpensearch {
  /**
  * The index or datastream to write logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#bulk_index ObservabilityPipeline#bulk_index}
  */
  readonly bulkIndex?: string;
  /**
  * Name of the environment variable or secret that holds the OpenSearch endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#endpoint_url_key ObservabilityPipeline#endpoint_url_key}
  */
  readonly endpointUrlKey?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationOpensearchAuth[] | cdktn.IResolvable;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationOpensearchBuffer[] | cdktn.IResolvable;
  /**
  * data_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#data_stream ObservabilityPipeline#data_stream}
  */
  readonly dataStream?: ObservabilityPipelineConfigDestinationOpensearchDataStream[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationOpensearchToTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bulk_index: cdktn.stringToTerraform(struct!.bulkIndex),
    endpoint_url_key: cdktn.stringToTerraform(struct!.endpointUrlKey),
    auth: cdktn.listMapper(observabilityPipelineConfigDestinationOpensearchAuthToTerraform, true)(struct!.auth),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationOpensearchBufferToTerraform, true)(struct!.buffer),
    data_stream: cdktn.listMapper(observabilityPipelineConfigDestinationOpensearchDataStreamToTerraform, true)(struct!.dataStream),
  }
}


export function observabilityPipelineConfigDestinationOpensearchToHclTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bulk_index: {
      value: cdktn.stringToHclTerraform(struct!.bulkIndex),
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
    auth: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationOpensearchAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationOpensearchAuthList",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationOpensearchBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationOpensearchBufferList",
    },
    data_stream: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationOpensearchDataStreamToHclTerraform, true)(struct!.dataStream),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationOpensearchDataStreamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationOpensearchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationOpensearch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bulkIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bulkIndex = this._bulkIndex;
    }
    if (this._endpointUrlKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrlKey = this._endpointUrlKey;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    if (this._dataStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStream = this._dataStream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationOpensearch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bulkIndex = undefined;
      this._endpointUrlKey = undefined;
      this._auth.internalValue = undefined;
      this._buffer.internalValue = undefined;
      this._dataStream.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bulkIndex = value.bulkIndex;
      this._endpointUrlKey = value.endpointUrlKey;
      this._auth.internalValue = value.auth;
      this._buffer.internalValue = value.buffer;
      this._dataStream.internalValue = value.dataStream;
    }
  }

  // bulk_index - computed: false, optional: true, required: false
  private _bulkIndex?: string; 
  public get bulkIndex() {
    return this.getStringAttribute('bulk_index');
  }
  public set bulkIndex(value: string) {
    this._bulkIndex = value;
  }
  public resetBulkIndex() {
    this._bulkIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkIndexInput() {
    return this._bulkIndex;
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

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigDestinationOpensearchAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigDestinationOpensearchAuth[] | cdktn.IResolvable) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationOpensearchBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationOpensearchBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // data_stream - computed: false, optional: true, required: false
  private _dataStream = new ObservabilityPipelineConfigDestinationOpensearchDataStreamList(this, "data_stream", false);
  public get dataStream() {
    return this._dataStream;
  }
  public putDataStream(value: ObservabilityPipelineConfigDestinationOpensearchDataStream[] | cdktn.IResolvable) {
    this._dataStream.internalValue = value;
  }
  public resetDataStream() {
    this._dataStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStreamInput() {
    return this._dataStream.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationOpensearchList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationOpensearch[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationOpensearchOutputReference {
    return new ObservabilityPipelineConfigDestinationOpensearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationOpentelemetryBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationOpentelemetryBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationOpentelemetryBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationOpentelemetryBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationOpentelemetryBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationOpentelemetryBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationOpentelemetryBufferDisk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationOpentelemetryBufferDisk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationOpentelemetryBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationOpentelemetryBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationOpentelemetryBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationOpentelemetryBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationOpentelemetryBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationOpentelemetryBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationOpentelemetryBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationOpentelemetryBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationOpentelemetryBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_events: {
      value: cdktn.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationOpentelemetryBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationOpentelemetryBufferMemory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationOpentelemetryBufferMemory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxEvents = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxEvents = value.maxEvents;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationOpentelemetryBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationOpentelemetryBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationOpentelemetryBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationOpentelemetryBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationOpentelemetryBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationOpentelemetryBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationOpentelemetryBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationOpentelemetryBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationOpentelemetryBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationOpentelemetryBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationOpentelemetryBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationOpentelemetryBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationOpentelemetryBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationOpentelemetryBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationOpentelemetryBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationOpentelemetryBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationOpentelemetryBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationOpentelemetryBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationOpentelemetryBuffer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationOpentelemetryBuffer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disk.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disk.internalValue = value.disk;
      this._memory.internalValue = value.memory;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ObservabilityPipelineConfigDestinationOpentelemetryBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationOpentelemetryBufferDisk[] | cdktn.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new ObservabilityPipelineConfigDestinationOpentelemetryBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationOpentelemetryBufferMemory[] | cdktn.IResolvable) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationOpentelemetryBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationOpentelemetryBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationOpentelemetryBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationOpentelemetryBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationOpentelemetryTls {
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

export function observabilityPipelineConfigDestinationOpentelemetryTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationOpentelemetryTls | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigDestinationOpentelemetryTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationOpentelemetryTls | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigDestinationOpentelemetryTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationOpentelemetryTls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationOpentelemetryTls | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationOpentelemetryTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationOpentelemetryTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationOpentelemetryTlsOutputReference {
    return new ObservabilityPipelineConfigDestinationOpentelemetryTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationOpentelemetry {
  /**
  * Environment variable name containing the URI of the OTLP HTTP endpoint to send metrics to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#http_client_uri_key ObservabilityPipeline#http_client_uri_key}
  */
  readonly httpClientUriKey?: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationOpentelemetryBuffer[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationOpentelemetryTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationOpentelemetryToTerraform(struct?: ObservabilityPipelineConfigDestinationOpentelemetry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    http_client_uri_key: cdktn.stringToTerraform(struct!.httpClientUriKey),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationOpentelemetryBufferToTerraform, true)(struct!.buffer),
    tls: cdktn.listMapper(observabilityPipelineConfigDestinationOpentelemetryTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationOpentelemetryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationOpentelemetry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    http_client_uri_key: {
      value: cdktn.stringToHclTerraform(struct!.httpClientUriKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationOpentelemetryBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationOpentelemetryBufferList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationOpentelemetryTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationOpentelemetryTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationOpentelemetryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationOpentelemetry | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpClientUriKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpClientUriKey = this._httpClientUriKey;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationOpentelemetry | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpClientUriKey = undefined;
      this._buffer.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpClientUriKey = value.httpClientUriKey;
      this._buffer.internalValue = value.buffer;
      this._tls.internalValue = value.tls;
    }
  }

  // http_client_uri_key - computed: false, optional: true, required: false
  private _httpClientUriKey?: string; 
  public get httpClientUriKey() {
    return this.getStringAttribute('http_client_uri_key');
  }
  public set httpClientUriKey(value: string) {
    this._httpClientUriKey = value;
  }
  public resetHttpClientUriKey() {
    this._httpClientUriKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientUriKeyInput() {
    return this._httpClientUriKey;
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationOpentelemetryBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationOpentelemetryBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigDestinationOpentelemetryTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigDestinationOpentelemetryTls[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationOpentelemetryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationOpentelemetry[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationOpentelemetryOutputReference {
    return new ObservabilityPipelineConfigDestinationOpentelemetryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationRsyslogBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationRsyslogBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationRsyslogBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationRsyslogBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationRsyslogBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationRsyslogBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationRsyslogBufferDisk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationRsyslogBufferDisk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationRsyslogBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationRsyslogBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationRsyslogBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationRsyslogBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationRsyslogBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationRsyslogBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationRsyslogBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationRsyslogBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationRsyslogBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_events: {
      value: cdktn.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationRsyslogBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationRsyslogBufferMemory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationRsyslogBufferMemory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxEvents = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxEvents = value.maxEvents;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationRsyslogBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationRsyslogBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationRsyslogBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationRsyslogBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationRsyslogBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationRsyslogBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationRsyslogBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationRsyslogBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationRsyslogBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationRsyslogBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationRsyslogBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationRsyslogBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationRsyslogBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationRsyslogBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationRsyslogBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationRsyslogBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationRsyslogBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationRsyslogBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationRsyslogBuffer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationRsyslogBuffer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disk.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disk.internalValue = value.disk;
      this._memory.internalValue = value.memory;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ObservabilityPipelineConfigDestinationRsyslogBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationRsyslogBufferDisk[] | cdktn.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new ObservabilityPipelineConfigDestinationRsyslogBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationRsyslogBufferMemory[] | cdktn.IResolvable) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationRsyslogBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationRsyslogBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationRsyslogBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationRsyslogBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationRsyslogTls {
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

export function observabilityPipelineConfigDestinationRsyslogTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationRsyslogTls | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigDestinationRsyslogTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationRsyslogTls | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigDestinationRsyslogTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationRsyslogTls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationRsyslogTls | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationRsyslogTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationRsyslogTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationRsyslogTlsOutputReference {
    return new ObservabilityPipelineConfigDestinationRsyslogTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationRsyslog {
  /**
  * Name of the environment variable or secret that holds the rsyslog endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#endpoint_url_key ObservabilityPipeline#endpoint_url_key}
  */
  readonly endpointUrlKey?: string;
  /**
  * Optional socket keepalive duration in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#keepalive ObservabilityPipeline#keepalive}
  */
  readonly keepalive?: number;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationRsyslogBuffer[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationRsyslogTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationRsyslogToTerraform(struct?: ObservabilityPipelineConfigDestinationRsyslog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_url_key: cdktn.stringToTerraform(struct!.endpointUrlKey),
    keepalive: cdktn.numberToTerraform(struct!.keepalive),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationRsyslogBufferToTerraform, true)(struct!.buffer),
    tls: cdktn.listMapper(observabilityPipelineConfigDestinationRsyslogTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationRsyslogToHclTerraform(struct?: ObservabilityPipelineConfigDestinationRsyslog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_url_key: {
      value: cdktn.stringToHclTerraform(struct!.endpointUrlKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive: {
      value: cdktn.numberToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationRsyslogBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationRsyslogBufferList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationRsyslogTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationRsyslogTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationRsyslogOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationRsyslog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointUrlKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrlKey = this._endpointUrlKey;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationRsyslog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointUrlKey = undefined;
      this._keepalive = undefined;
      this._buffer.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointUrlKey = value.endpointUrlKey;
      this._keepalive = value.keepalive;
      this._buffer.internalValue = value.buffer;
      this._tls.internalValue = value.tls;
    }
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

  // keepalive - computed: false, optional: true, required: false
  private _keepalive?: number; 
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }
  public set keepalive(value: number) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationRsyslogBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationRsyslogBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigDestinationRsyslogTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigDestinationRsyslogTls[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationRsyslogList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationRsyslog[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationRsyslogOutputReference {
    return new ObservabilityPipelineConfigDestinationRsyslogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSentinelOneBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationSentinelOneBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationSentinelOneBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationSentinelOneBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSentinelOneBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSentinelOneBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSentinelOneBufferDisk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSentinelOneBufferDisk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationSentinelOneBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSentinelOneBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSentinelOneBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationSentinelOneBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSentinelOneBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationSentinelOneBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationSentinelOneBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationSentinelOneBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSentinelOneBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_events: {
      value: cdktn.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSentinelOneBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSentinelOneBufferMemory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSentinelOneBufferMemory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxEvents = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxEvents = value.maxEvents;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationSentinelOneBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSentinelOneBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSentinelOneBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationSentinelOneBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSentinelOneBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationSentinelOneBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationSentinelOneBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSentinelOneBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationSentinelOneBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationSentinelOneBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationSentinelOneBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationSentinelOneBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSentinelOneBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSentinelOneBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSentinelOneBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSentinelOneBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSentinelOneBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSentinelOneBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSentinelOneBuffer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSentinelOneBuffer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disk.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disk.internalValue = value.disk;
      this._memory.internalValue = value.memory;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ObservabilityPipelineConfigDestinationSentinelOneBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationSentinelOneBufferDisk[] | cdktn.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new ObservabilityPipelineConfigDestinationSentinelOneBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationSentinelOneBufferMemory[] | cdktn.IResolvable) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationSentinelOneBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSentinelOneBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSentinelOneBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationSentinelOneBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSentinelOne {
  /**
  * The SentinelOne region to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
  /**
  * Name of the environment variable or secret that holds the SentinelOne API token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#token_key ObservabilityPipeline#token_key}
  */
  readonly tokenKey?: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationSentinelOneBuffer[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSentinelOneToTerraform(struct?: ObservabilityPipelineConfigDestinationSentinelOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
    token_key: cdktn.stringToTerraform(struct!.tokenKey),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationSentinelOneBufferToTerraform, true)(struct!.buffer),
  }
}


export function observabilityPipelineConfigDestinationSentinelOneToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSentinelOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
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
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSentinelOneBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSentinelOneBufferList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSentinelOneOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSentinelOne | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tokenKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenKey = this._tokenKey;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSentinelOne | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._tokenKey = undefined;
      this._buffer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._tokenKey = value.tokenKey;
      this._buffer.internalValue = value.buffer;
    }
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

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationSentinelOneBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationSentinelOneBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationSentinelOneList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSentinelOne[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSentinelOneOutputReference {
    return new ObservabilityPipelineConfigDestinationSentinelOneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSocketBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationSocketBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationSocketBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationSocketBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSocketBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSocketBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSocketBufferDisk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSocketBufferDisk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationSocketBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSocketBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSocketBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationSocketBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSocketBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationSocketBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationSocketBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationSocketBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSocketBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_events: {
      value: cdktn.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSocketBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSocketBufferMemory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSocketBufferMemory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxEvents = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxEvents = value.maxEvents;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationSocketBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSocketBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSocketBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationSocketBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSocketBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationSocketBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationSocketBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSocketBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationSocketBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationSocketBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationSocketBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationSocketBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSocketBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSocketBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSocketBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSocketBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSocketBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSocketBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSocketBuffer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSocketBuffer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disk.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disk.internalValue = value.disk;
      this._memory.internalValue = value.memory;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ObservabilityPipelineConfigDestinationSocketBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationSocketBufferDisk[] | cdktn.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new ObservabilityPipelineConfigDestinationSocketBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationSocketBufferMemory[] | cdktn.IResolvable) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationSocketBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSocketBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSocketBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationSocketBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimited {
  /**
  * A single ASCII character used as a delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#delimiter ObservabilityPipeline#delimiter}
  */
  readonly delimiter: string;
}

export function observabilityPipelineConfigDestinationSocketFramingCharacterDelimitedToTerraform(struct?: ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimited | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
  }
}


export function observabilityPipelineConfigDestinationSocketFramingCharacterDelimitedToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimited | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimitedOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimited | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimited | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimitedList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimited[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimitedOutputReference {
    return new ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimitedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSocketFraming {
  /**
  * The framing method. Valid values are `newline_delimited`, `bytes`, `character_delimited`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#method ObservabilityPipeline#method}
  */
  readonly method: string;
  /**
  * character_delimited block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#character_delimited ObservabilityPipeline#character_delimited}
  */
  readonly characterDelimited?: ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimited[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSocketFramingToTerraform(struct?: ObservabilityPipelineConfigDestinationSocketFraming | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
    character_delimited: cdktn.listMapper(observabilityPipelineConfigDestinationSocketFramingCharacterDelimitedToTerraform, true)(struct!.characterDelimited),
  }
}


export function observabilityPipelineConfigDestinationSocketFramingToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSocketFraming | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSocketFramingCharacterDelimitedToHclTerraform, true)(struct!.characterDelimited),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimitedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSocketFramingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSocketFraming | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationSocketFraming | cdktn.IResolvable | undefined) {
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
  private _characterDelimited = new ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimitedList(this, "character_delimited", false);
  public get characterDelimited() {
    return this._characterDelimited;
  }
  public putCharacterDelimited(value: ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimited[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationSocketFramingList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSocketFraming[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSocketFramingOutputReference {
    return new ObservabilityPipelineConfigDestinationSocketFramingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSocketTls {
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

export function observabilityPipelineConfigDestinationSocketTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationSocketTls | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigDestinationSocketTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSocketTls | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigDestinationSocketTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSocketTls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationSocketTls | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationSocketTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSocketTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSocketTlsOutputReference {
    return new ObservabilityPipelineConfigDestinationSocketTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSocket {
  /**
  * Name of the environment variable or secret that holds the socket address (host:port).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * Encoding format for log events. Valid values are `json`, `raw_message`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding: string;
  /**
  * The protocol used to send logs. Valid values are `tcp`, `udp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationSocketBuffer[] | cdktn.IResolvable;
  /**
  * framing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#framing ObservabilityPipeline#framing}
  */
  readonly framing?: ObservabilityPipelineConfigDestinationSocketFraming[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationSocketTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSocketToTerraform(struct?: ObservabilityPipelineConfigDestinationSocket | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    mode: cdktn.stringToTerraform(struct!.mode),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationSocketBufferToTerraform, true)(struct!.buffer),
    framing: cdktn.listMapper(observabilityPipelineConfigDestinationSocketFramingToTerraform, true)(struct!.framing),
    tls: cdktn.listMapper(observabilityPipelineConfigDestinationSocketTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationSocketToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSocket | cdktn.IResolvable): any {
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
    encoding: {
      value: cdktn.stringToHclTerraform(struct!.encoding),
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
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSocketBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSocketBufferList",
    },
    framing: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSocketFramingToHclTerraform, true)(struct!.framing),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSocketFramingList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSocketTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSocketTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSocketOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSocket | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressKey = this._addressKey;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationSocket | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressKey = undefined;
      this._encoding = undefined;
      this._mode = undefined;
      this._buffer.internalValue = undefined;
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
      this._encoding = value.encoding;
      this._mode = value.mode;
      this._buffer.internalValue = value.buffer;
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

  // encoding - computed: false, optional: false, required: true
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
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

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationSocketBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationSocketBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // framing - computed: false, optional: true, required: false
  private _framing = new ObservabilityPipelineConfigDestinationSocketFramingList(this, "framing", false);
  public get framing() {
    return this._framing;
  }
  public putFraming(value: ObservabilityPipelineConfigDestinationSocketFraming[] | cdktn.IResolvable) {
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
  private _tls = new ObservabilityPipelineConfigDestinationSocketTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigDestinationSocketTls[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationSocketList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSocket[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSocketOutputReference {
    return new ObservabilityPipelineConfigDestinationSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSplunkHecBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationSplunkHecBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationSplunkHecBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSplunkHecBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSplunkHecBufferDisk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSplunkHecBufferDisk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationSplunkHecBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSplunkHecBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSplunkHecBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationSplunkHecBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSplunkHecBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationSplunkHecBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationSplunkHecBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_events: {
      value: cdktn.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSplunkHecBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSplunkHecBufferMemory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSplunkHecBufferMemory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxEvents = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxEvents = value.maxEvents;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationSplunkHecBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSplunkHecBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSplunkHecBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationSplunkHecBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSplunkHecBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationSplunkHecBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationSplunkHecBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSplunkHecBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationSplunkHecBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationSplunkHecBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationSplunkHecBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSplunkHecBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSplunkHecBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSplunkHecBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSplunkHecBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSplunkHecBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSplunkHecBuffer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSplunkHecBuffer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disk.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disk.internalValue = value.disk;
      this._memory.internalValue = value.memory;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ObservabilityPipelineConfigDestinationSplunkHecBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationSplunkHecBufferDisk[] | cdktn.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new ObservabilityPipelineConfigDestinationSplunkHecBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationSplunkHecBufferMemory[] | cdktn.IResolvable) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationSplunkHecBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSplunkHecBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSplunkHecBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationSplunkHecBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSplunkHec {
  /**
  * If `true`, Splunk tries to extract timestamps from incoming log events. If `false`, Splunk assigns the time the event was received. Only applies when `endpoint_target` is `event`; cannot be `true` when `endpoint_target` is `raw`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#auto_extract_timestamp ObservabilityPipeline#auto_extract_timestamp}
  */
  readonly autoExtractTimestamp?: boolean | cdktn.IResolvable;
  /**
  * Encoding format for log events. Valid values are `json`, `raw_message`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding: string;
  /**
  * The Splunk HEC endpoint to send events to. Use `event` to send structured events to the `/event` endpoint, or `raw` to send the raw message to the `/raw` endpoint. Valid values are `event`, `raw`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#endpoint_target ObservabilityPipeline#endpoint_target}
  */
  readonly endpointTarget?: string;
  /**
  * Name of the environment variable or secret that holds the Splunk HEC endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#endpoint_url_key ObservabilityPipeline#endpoint_url_key}
  */
  readonly endpointUrlKey?: string;
  /**
  * Optional name of the Splunk index where logs are written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#index ObservabilityPipeline#index}
  */
  readonly index?: string;
  /**
  * List of log field names to send as indexed fields to Splunk HEC. Available only when `encoding` is `json`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#indexed_fields ObservabilityPipeline#indexed_fields}
  */
  readonly indexedFields?: string[];
  /**
  * The Splunk sourcetype to assign to log events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#sourcetype ObservabilityPipeline#sourcetype}
  */
  readonly sourcetype?: string;
  /**
  * Name of the environment variable or secret that holds the Splunk HEC token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#token_key ObservabilityPipeline#token_key}
  */
  readonly tokenKey?: string;
  /**
  * Controls how the Splunk HEC token is supplied. Use `custom` to provide a token via `token_key`, or `from_source` to forward the token received from an upstream Splunk HEC source. Valid values are `custom`, `from_source`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#token_strategy ObservabilityPipeline#token_strategy}
  */
  readonly tokenStrategy?: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationSplunkHecBuffer[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSplunkHecToTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auto_extract_timestamp: cdktn.booleanToTerraform(struct!.autoExtractTimestamp),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    endpoint_target: cdktn.stringToTerraform(struct!.endpointTarget),
    endpoint_url_key: cdktn.stringToTerraform(struct!.endpointUrlKey),
    index: cdktn.stringToTerraform(struct!.index),
    indexed_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.indexedFields),
    sourcetype: cdktn.stringToTerraform(struct!.sourcetype),
    token_key: cdktn.stringToTerraform(struct!.tokenKey),
    token_strategy: cdktn.stringToTerraform(struct!.tokenStrategy),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationSplunkHecBufferToTerraform, true)(struct!.buffer),
  }
}


export function observabilityPipelineConfigDestinationSplunkHecToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auto_extract_timestamp: {
      value: cdktn.booleanToHclTerraform(struct!.autoExtractTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encoding: {
      value: cdktn.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_target: {
      value: cdktn.stringToHclTerraform(struct!.endpointTarget),
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
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indexed_fields: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.indexedFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sourcetype: {
      value: cdktn.stringToHclTerraform(struct!.sourcetype),
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
    token_strategy: {
      value: cdktn.stringToHclTerraform(struct!.tokenStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSplunkHecBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSplunkHecBufferList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSplunkHecOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSplunkHec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoExtractTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoExtractTimestamp = this._autoExtractTimestamp;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._endpointTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointTarget = this._endpointTarget;
    }
    if (this._endpointUrlKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrlKey = this._endpointUrlKey;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._indexedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedFields = this._indexedFields;
    }
    if (this._sourcetype !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcetype = this._sourcetype;
    }
    if (this._tokenKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenKey = this._tokenKey;
    }
    if (this._tokenStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenStrategy = this._tokenStrategy;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSplunkHec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoExtractTimestamp = undefined;
      this._encoding = undefined;
      this._endpointTarget = undefined;
      this._endpointUrlKey = undefined;
      this._index = undefined;
      this._indexedFields = undefined;
      this._sourcetype = undefined;
      this._tokenKey = undefined;
      this._tokenStrategy = undefined;
      this._buffer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoExtractTimestamp = value.autoExtractTimestamp;
      this._encoding = value.encoding;
      this._endpointTarget = value.endpointTarget;
      this._endpointUrlKey = value.endpointUrlKey;
      this._index = value.index;
      this._indexedFields = value.indexedFields;
      this._sourcetype = value.sourcetype;
      this._tokenKey = value.tokenKey;
      this._tokenStrategy = value.tokenStrategy;
      this._buffer.internalValue = value.buffer;
    }
  }

  // auto_extract_timestamp - computed: false, optional: true, required: false
  private _autoExtractTimestamp?: boolean | cdktn.IResolvable; 
  public get autoExtractTimestamp() {
    return this.getBooleanAttribute('auto_extract_timestamp');
  }
  public set autoExtractTimestamp(value: boolean | cdktn.IResolvable) {
    this._autoExtractTimestamp = value;
  }
  public resetAutoExtractTimestamp() {
    this._autoExtractTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoExtractTimestampInput() {
    return this._autoExtractTimestamp;
  }

  // encoding - computed: false, optional: false, required: true
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // endpoint_target - computed: false, optional: true, required: false
  private _endpointTarget?: string; 
  public get endpointTarget() {
    return this.getStringAttribute('endpoint_target');
  }
  public set endpointTarget(value: string) {
    this._endpointTarget = value;
  }
  public resetEndpointTarget() {
    this._endpointTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTargetInput() {
    return this._endpointTarget;
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

  // index - computed: false, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // indexed_fields - computed: false, optional: true, required: false
  private _indexedFields?: string[]; 
  public get indexedFields() {
    return this.getListAttribute('indexed_fields');
  }
  public set indexedFields(value: string[]) {
    this._indexedFields = value;
  }
  public resetIndexedFields() {
    this._indexedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedFieldsInput() {
    return this._indexedFields;
  }

  // sourcetype - computed: false, optional: true, required: false
  private _sourcetype?: string; 
  public get sourcetype() {
    return this.getStringAttribute('sourcetype');
  }
  public set sourcetype(value: string) {
    this._sourcetype = value;
  }
  public resetSourcetype() {
    this._sourcetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcetypeInput() {
    return this._sourcetype;
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

  // token_strategy - computed: false, optional: true, required: false
  private _tokenStrategy?: string; 
  public get tokenStrategy() {
    return this.getStringAttribute('token_strategy');
  }
  public set tokenStrategy(value: string) {
    this._tokenStrategy = value;
  }
  public resetTokenStrategy() {
    this._tokenStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenStrategyInput() {
    return this._tokenStrategy;
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationSplunkHecBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationSplunkHecBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationSplunkHecList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSplunkHec[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSplunkHecOutputReference {
    return new ObservabilityPipelineConfigDestinationSplunkHecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationSplunkHecMetricsBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationSplunkHecMetricsBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferDisk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferDisk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationSplunkHecMetricsBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationSplunkHecMetricsBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_events: {
      value: cdktn.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferMemory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferMemory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxEvents = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxEvents = value.maxEvents;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSplunkHecMetricsBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSplunkHecMetricsBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecMetricsBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationSplunkHecMetricsBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationSplunkHecMetricsBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationSplunkHecMetricsBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecMetricsBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSplunkHecMetricsBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSplunkHecMetricsBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSplunkHecMetricsBuffer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSplunkHecMetricsBuffer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disk.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disk.internalValue = value.disk;
      this._memory.internalValue = value.memory;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferDisk[] | cdktn.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferMemory[] | cdktn.IResolvable) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSplunkHecMetricsBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSplunkHecMetricsTls {
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

export function observabilityPipelineConfigDestinationSplunkHecMetricsTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecMetricsTls | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigDestinationSplunkHecMetricsTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecMetricsTls | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigDestinationSplunkHecMetricsTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSplunkHecMetricsTls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationSplunkHecMetricsTls | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationSplunkHecMetricsTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSplunkHecMetricsTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSplunkHecMetricsTlsOutputReference {
    return new ObservabilityPipelineConfigDestinationSplunkHecMetricsTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSplunkHecMetrics {
  /**
  * Compression algorithm applied when sending metrics to Splunk HEC. Valid values are `none`, `gzip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#compression ObservabilityPipeline#compression}
  */
  readonly compression?: string;
  /**
  * Optional default namespace for metrics sent to Splunk HEC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#default_namespace ObservabilityPipeline#default_namespace}
  */
  readonly defaultNamespace?: string;
  /**
  * Name of the environment variable or secret that holds the Splunk HEC endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#endpoint_url_key ObservabilityPipeline#endpoint_url_key}
  */
  readonly endpointUrlKey?: string;
  /**
  * Optional name of the Splunk index where metrics are written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#index ObservabilityPipeline#index}
  */
  readonly index?: string;
  /**
  * The Splunk source field value for metric events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#source ObservabilityPipeline#source}
  */
  readonly source?: string;
  /**
  * The Splunk sourcetype to assign to metric events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#sourcetype ObservabilityPipeline#sourcetype}
  */
  readonly sourcetype?: string;
  /**
  * Name of the environment variable or secret that holds the Splunk HEC token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#token_key ObservabilityPipeline#token_key}
  */
  readonly tokenKey?: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationSplunkHecMetricsBuffer[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationSplunkHecMetricsTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSplunkHecMetricsToTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    compression: cdktn.stringToTerraform(struct!.compression),
    default_namespace: cdktn.stringToTerraform(struct!.defaultNamespace),
    endpoint_url_key: cdktn.stringToTerraform(struct!.endpointUrlKey),
    index: cdktn.stringToTerraform(struct!.index),
    source: cdktn.stringToTerraform(struct!.source),
    sourcetype: cdktn.stringToTerraform(struct!.sourcetype),
    token_key: cdktn.stringToTerraform(struct!.tokenKey),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationSplunkHecMetricsBufferToTerraform, true)(struct!.buffer),
    tls: cdktn.listMapper(observabilityPipelineConfigDestinationSplunkHecMetricsTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationSplunkHecMetricsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHecMetrics | cdktn.IResolvable): any {
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
    default_namespace: {
      value: cdktn.stringToHclTerraform(struct!.defaultNamespace),
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
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sourcetype: {
      value: cdktn.stringToHclTerraform(struct!.sourcetype),
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
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSplunkHecMetricsBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSplunkHecMetricsTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSplunkHecMetricsTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSplunkHecMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSplunkHecMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._defaultNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNamespace = this._defaultNamespace;
    }
    if (this._endpointUrlKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrlKey = this._endpointUrlKey;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sourcetype !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcetype = this._sourcetype;
    }
    if (this._tokenKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenKey = this._tokenKey;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSplunkHecMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compression = undefined;
      this._defaultNamespace = undefined;
      this._endpointUrlKey = undefined;
      this._index = undefined;
      this._source = undefined;
      this._sourcetype = undefined;
      this._tokenKey = undefined;
      this._buffer.internalValue = undefined;
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
      this._defaultNamespace = value.defaultNamespace;
      this._endpointUrlKey = value.endpointUrlKey;
      this._index = value.index;
      this._source = value.source;
      this._sourcetype = value.sourcetype;
      this._tokenKey = value.tokenKey;
      this._buffer.internalValue = value.buffer;
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

  // default_namespace - computed: false, optional: true, required: false
  private _defaultNamespace?: string; 
  public get defaultNamespace() {
    return this.getStringAttribute('default_namespace');
  }
  public set defaultNamespace(value: string) {
    this._defaultNamespace = value;
  }
  public resetDefaultNamespace() {
    this._defaultNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNamespaceInput() {
    return this._defaultNamespace;
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

  // index - computed: false, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sourcetype - computed: false, optional: true, required: false
  private _sourcetype?: string; 
  public get sourcetype() {
    return this.getStringAttribute('sourcetype');
  }
  public set sourcetype(value: string) {
    this._sourcetype = value;
  }
  public resetSourcetype() {
    this._sourcetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcetypeInput() {
    return this._sourcetype;
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

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationSplunkHecMetricsBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationSplunkHecMetricsBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigDestinationSplunkHecMetricsTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigDestinationSplunkHecMetricsTls[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationSplunkHecMetricsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSplunkHecMetrics[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSplunkHecMetricsOutputReference {
    return new ObservabilityPipelineConfigDestinationSplunkHecMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSumoLogicBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationSumoLogicBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationSumoLogicBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationSumoLogicBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSumoLogicBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSumoLogicBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSumoLogicBufferDisk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSumoLogicBufferDisk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationSumoLogicBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSumoLogicBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSumoLogicBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationSumoLogicBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSumoLogicBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationSumoLogicBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationSumoLogicBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationSumoLogicBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSumoLogicBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_events: {
      value: cdktn.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSumoLogicBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSumoLogicBufferMemory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSumoLogicBufferMemory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxEvents = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxEvents = value.maxEvents;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationSumoLogicBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSumoLogicBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSumoLogicBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationSumoLogicBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSumoLogicBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationSumoLogicBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationSumoLogicBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSumoLogicBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationSumoLogicBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationSumoLogicBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationSumoLogicBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationSumoLogicBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSumoLogicBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSumoLogicBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSumoLogicBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSumoLogicBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSumoLogicBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSumoLogicBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSumoLogicBuffer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSumoLogicBuffer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disk.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disk.internalValue = value.disk;
      this._memory.internalValue = value.memory;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ObservabilityPipelineConfigDestinationSumoLogicBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationSumoLogicBufferDisk[] | cdktn.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new ObservabilityPipelineConfigDestinationSumoLogicBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationSumoLogicBufferMemory[] | cdktn.IResolvable) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationSumoLogicBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSumoLogicBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSumoLogicBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationSumoLogicBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomField {
  /**
  * The header field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name?: string;
  /**
  * The header field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value?: string;
}

export function observabilityPipelineConfigDestinationSumoLogicHeaderCustomFieldToTerraform(struct?: ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigDestinationSumoLogicHeaderCustomFieldToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomField | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomField | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomField | cdktn.IResolvable | undefined) {
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

  // name - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomFieldList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomField[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomFieldOutputReference {
    return new ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSumoLogic {
  /**
  * The output encoding format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding?: string;
  /**
  * Name of the environment variable or secret that holds the Sumo Logic endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#endpoint_url_key ObservabilityPipeline#endpoint_url_key}
  */
  readonly endpointUrlKey?: string;
  /**
  * Optional override for the host name header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#header_host_name ObservabilityPipeline#header_host_name}
  */
  readonly headerHostName?: string;
  /**
  * Optional override for the source category header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#header_source_category ObservabilityPipeline#header_source_category}
  */
  readonly headerSourceCategory?: string;
  /**
  * Optional override for the source name header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#header_source_name ObservabilityPipeline#header_source_name}
  */
  readonly headerSourceName?: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationSumoLogicBuffer[] | cdktn.IResolvable;
  /**
  * header_custom_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#header_custom_field ObservabilityPipeline#header_custom_field}
  */
  readonly headerCustomField?: ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomField[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSumoLogicToTerraform(struct?: ObservabilityPipelineConfigDestinationSumoLogic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    encoding: cdktn.stringToTerraform(struct!.encoding),
    endpoint_url_key: cdktn.stringToTerraform(struct!.endpointUrlKey),
    header_host_name: cdktn.stringToTerraform(struct!.headerHostName),
    header_source_category: cdktn.stringToTerraform(struct!.headerSourceCategory),
    header_source_name: cdktn.stringToTerraform(struct!.headerSourceName),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationSumoLogicBufferToTerraform, true)(struct!.buffer),
    header_custom_field: cdktn.listMapper(observabilityPipelineConfigDestinationSumoLogicHeaderCustomFieldToTerraform, true)(struct!.headerCustomField),
  }
}


export function observabilityPipelineConfigDestinationSumoLogicToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSumoLogic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    encoding: {
      value: cdktn.stringToHclTerraform(struct!.encoding),
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
    header_host_name: {
      value: cdktn.stringToHclTerraform(struct!.headerHostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_source_category: {
      value: cdktn.stringToHclTerraform(struct!.headerSourceCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_source_name: {
      value: cdktn.stringToHclTerraform(struct!.headerSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSumoLogicBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSumoLogicBufferList",
    },
    header_custom_field: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSumoLogicHeaderCustomFieldToHclTerraform, true)(struct!.headerCustomField),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSumoLogicOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSumoLogic | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._endpointUrlKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrlKey = this._endpointUrlKey;
    }
    if (this._headerHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerHostName = this._headerHostName;
    }
    if (this._headerSourceCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSourceCategory = this._headerSourceCategory;
    }
    if (this._headerSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerSourceName = this._headerSourceName;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    if (this._headerCustomField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerCustomField = this._headerCustomField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSumoLogic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encoding = undefined;
      this._endpointUrlKey = undefined;
      this._headerHostName = undefined;
      this._headerSourceCategory = undefined;
      this._headerSourceName = undefined;
      this._buffer.internalValue = undefined;
      this._headerCustomField.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encoding = value.encoding;
      this._endpointUrlKey = value.endpointUrlKey;
      this._headerHostName = value.headerHostName;
      this._headerSourceCategory = value.headerSourceCategory;
      this._headerSourceName = value.headerSourceName;
      this._buffer.internalValue = value.buffer;
      this._headerCustomField.internalValue = value.headerCustomField;
    }
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
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

  // header_host_name - computed: false, optional: true, required: false
  private _headerHostName?: string; 
  public get headerHostName() {
    return this.getStringAttribute('header_host_name');
  }
  public set headerHostName(value: string) {
    this._headerHostName = value;
  }
  public resetHeaderHostName() {
    this._headerHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerHostNameInput() {
    return this._headerHostName;
  }

  // header_source_category - computed: false, optional: true, required: false
  private _headerSourceCategory?: string; 
  public get headerSourceCategory() {
    return this.getStringAttribute('header_source_category');
  }
  public set headerSourceCategory(value: string) {
    this._headerSourceCategory = value;
  }
  public resetHeaderSourceCategory() {
    this._headerSourceCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSourceCategoryInput() {
    return this._headerSourceCategory;
  }

  // header_source_name - computed: false, optional: true, required: false
  private _headerSourceName?: string; 
  public get headerSourceName() {
    return this.getStringAttribute('header_source_name');
  }
  public set headerSourceName(value: string) {
    this._headerSourceName = value;
  }
  public resetHeaderSourceName() {
    this._headerSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerSourceNameInput() {
    return this._headerSourceName;
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationSumoLogicBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationSumoLogicBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // header_custom_field - computed: false, optional: true, required: false
  private _headerCustomField = new ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomFieldList(this, "header_custom_field", false);
  public get headerCustomField() {
    return this._headerCustomField;
  }
  public putHeaderCustomField(value: ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomField[] | cdktn.IResolvable) {
    this._headerCustomField.internalValue = value;
  }
  public resetHeaderCustomField() {
    this._headerCustomField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerCustomFieldInput() {
    return this._headerCustomField.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationSumoLogicList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSumoLogic[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSumoLogicOutputReference {
    return new ObservabilityPipelineConfigDestinationSumoLogicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSyslogNgBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationSyslogNgBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationSyslogNgBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationSyslogNgBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSyslogNgBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSyslogNgBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSyslogNgBufferDisk | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSyslogNgBufferDisk | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationSyslogNgBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSyslogNgBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSyslogNgBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationSyslogNgBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSyslogNgBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationSyslogNgBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationSyslogNgBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationSyslogNgBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSyslogNgBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max_events: {
      value: cdktn.numberToHclTerraform(struct!.maxEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktn.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_full: {
      value: cdktn.stringToHclTerraform(struct!.whenFull),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSyslogNgBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSyslogNgBufferMemory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEvents = this._maxEvents;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._whenFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenFull = this._whenFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSyslogNgBufferMemory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxEvents = undefined;
      this._maxSize = undefined;
      this._whenFull = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxEvents = value.maxEvents;
      this._maxSize = value.maxSize;
      this._whenFull = value.whenFull;
    }
  }

  // max_events - computed: false, optional: true, required: false
  private _maxEvents?: number; 
  public get maxEvents() {
    return this.getNumberAttribute('max_events');
  }
  public set maxEvents(value: number) {
    this._maxEvents = value;
  }
  public resetMaxEvents() {
    this._maxEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEventsInput() {
    return this._maxEvents;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // when_full - computed: true, optional: true, required: false
  private _whenFull?: string; 
  public get whenFull() {
    return this.getStringAttribute('when_full');
  }
  public set whenFull(value: string) {
    this._whenFull = value;
  }
  public resetWhenFull() {
    this._whenFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenFullInput() {
    return this._whenFull;
  }
}

export class ObservabilityPipelineConfigDestinationSyslogNgBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSyslogNgBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSyslogNgBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationSyslogNgBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSyslogNgBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationSyslogNgBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationSyslogNgBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSyslogNgBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationSyslogNgBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationSyslogNgBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationSyslogNgBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationSyslogNgBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSyslogNgBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSyslogNgBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSyslogNgBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSyslogNgBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSyslogNgBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSyslogNgBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSyslogNgBuffer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSyslogNgBuffer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disk.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disk.internalValue = value.disk;
      this._memory.internalValue = value.memory;
    }
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new ObservabilityPipelineConfigDestinationSyslogNgBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationSyslogNgBufferDisk[] | cdktn.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new ObservabilityPipelineConfigDestinationSyslogNgBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationSyslogNgBufferMemory[] | cdktn.IResolvable) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationSyslogNgBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSyslogNgBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSyslogNgBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationSyslogNgBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSyslogNgTls {
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

export function observabilityPipelineConfigDestinationSyslogNgTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationSyslogNgTls | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigDestinationSyslogNgTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSyslogNgTls | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigDestinationSyslogNgTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSyslogNgTls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationSyslogNgTls | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationSyslogNgTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSyslogNgTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSyslogNgTlsOutputReference {
    return new ObservabilityPipelineConfigDestinationSyslogNgTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSyslogNg {
  /**
  * Name of the environment variable or secret that holds the syslog-ng endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#endpoint_url_key ObservabilityPipeline#endpoint_url_key}
  */
  readonly endpointUrlKey?: string;
  /**
  * Optional socket keepalive duration in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#keepalive ObservabilityPipeline#keepalive}
  */
  readonly keepalive?: number;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationSyslogNgBuffer[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationSyslogNgTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSyslogNgToTerraform(struct?: ObservabilityPipelineConfigDestinationSyslogNg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpoint_url_key: cdktn.stringToTerraform(struct!.endpointUrlKey),
    keepalive: cdktn.numberToTerraform(struct!.keepalive),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationSyslogNgBufferToTerraform, true)(struct!.buffer),
    tls: cdktn.listMapper(observabilityPipelineConfigDestinationSyslogNgTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationSyslogNgToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSyslogNg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpoint_url_key: {
      value: cdktn.stringToHclTerraform(struct!.endpointUrlKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive: {
      value: cdktn.numberToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSyslogNgBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSyslogNgBufferList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSyslogNgTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSyslogNgTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationSyslogNgOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationSyslogNg | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointUrlKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrlKey = this._endpointUrlKey;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSyslogNg | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointUrlKey = undefined;
      this._keepalive = undefined;
      this._buffer.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointUrlKey = value.endpointUrlKey;
      this._keepalive = value.keepalive;
      this._buffer.internalValue = value.buffer;
      this._tls.internalValue = value.tls;
    }
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

  // keepalive - computed: false, optional: true, required: false
  private _keepalive?: number; 
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }
  public set keepalive(value: number) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationSyslogNgBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationSyslogNgBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigDestinationSyslogNgTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigDestinationSyslogNgTls[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationSyslogNgList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSyslogNg[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationSyslogNgOutputReference {
    return new ObservabilityPipelineConfigDestinationSyslogNgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestination {
  /**
  * The unique identifier for this destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * amazon_opensearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#amazon_opensearch ObservabilityPipeline#amazon_opensearch}
  */
  readonly amazonOpensearch?: ObservabilityPipelineConfigDestinationAmazonOpensearch[] | cdktn.IResolvable;
  /**
  * amazon_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#amazon_s3 ObservabilityPipeline#amazon_s3}
  */
  readonly amazonS3?: ObservabilityPipelineConfigDestinationAmazonS3[] | cdktn.IResolvable;
  /**
  * amazon_s3_generic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#amazon_s3_generic ObservabilityPipeline#amazon_s3_generic}
  */
  readonly amazonS3Generic?: ObservabilityPipelineConfigDestinationAmazonS3Generic[] | cdktn.IResolvable;
  /**
  * amazon_security_lake block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#amazon_security_lake ObservabilityPipeline#amazon_security_lake}
  */
  readonly amazonSecurityLake?: ObservabilityPipelineConfigDestinationAmazonSecurityLake[] | cdktn.IResolvable;
  /**
  * azure_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#azure_storage ObservabilityPipeline#azure_storage}
  */
  readonly azureStorage?: ObservabilityPipelineConfigDestinationAzureStorage[] | cdktn.IResolvable;
  /**
  * clickhouse block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#clickhouse ObservabilityPipeline#clickhouse}
  */
  readonly clickhouse?: ObservabilityPipelineConfigDestinationClickhouse[] | cdktn.IResolvable;
  /**
  * cloud_prem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#cloud_prem ObservabilityPipeline#cloud_prem}
  */
  readonly cloudPrem?: ObservabilityPipelineConfigDestinationCloudPrem[] | cdktn.IResolvable;
  /**
  * crowdstrike_next_gen_siem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#crowdstrike_next_gen_siem ObservabilityPipeline#crowdstrike_next_gen_siem}
  */
  readonly crowdstrikeNextGenSiem?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiem[] | cdktn.IResolvable;
  /**
  * databricks_zerobus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#databricks_zerobus ObservabilityPipeline#databricks_zerobus}
  */
  readonly databricksZerobus?: ObservabilityPipelineConfigDestinationDatabricksZerobus[] | cdktn.IResolvable;
  /**
  * datadog_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#datadog_logs ObservabilityPipeline#datadog_logs}
  */
  readonly datadogLogs?: ObservabilityPipelineConfigDestinationDatadogLogs[] | cdktn.IResolvable;
  /**
  * datadog_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#datadog_metrics ObservabilityPipeline#datadog_metrics}
  */
  readonly datadogMetrics?: ObservabilityPipelineConfigDestinationDatadogMetrics[] | cdktn.IResolvable;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#elasticsearch ObservabilityPipeline#elasticsearch}
  */
  readonly elasticsearch?: ObservabilityPipelineConfigDestinationElasticsearch[] | cdktn.IResolvable;
  /**
  * google_cloud_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#google_cloud_storage ObservabilityPipeline#google_cloud_storage}
  */
  readonly googleCloudStorage?: ObservabilityPipelineConfigDestinationGoogleCloudStorage[] | cdktn.IResolvable;
  /**
  * google_pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#google_pubsub ObservabilityPipeline#google_pubsub}
  */
  readonly googlePubsub?: ObservabilityPipelineConfigDestinationGooglePubsub[] | cdktn.IResolvable;
  /**
  * google_secops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#google_secops ObservabilityPipeline#google_secops}
  */
  readonly googleSecops?: ObservabilityPipelineConfigDestinationGoogleSecops[] | cdktn.IResolvable;
  /**
  * http_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#http_client ObservabilityPipeline#http_client}
  */
  readonly httpClient?: ObservabilityPipelineConfigDestinationHttpClient[] | cdktn.IResolvable;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#kafka ObservabilityPipeline#kafka}
  */
  readonly kafka?: ObservabilityPipelineConfigDestinationKafka[] | cdktn.IResolvable;
  /**
  * microsoft_sentinel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#microsoft_sentinel ObservabilityPipeline#microsoft_sentinel}
  */
  readonly microsoftSentinel?: ObservabilityPipelineConfigDestinationMicrosoftSentinel[] | cdktn.IResolvable;
  /**
  * new_relic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#new_relic ObservabilityPipeline#new_relic}
  */
  readonly newRelic?: ObservabilityPipelineConfigDestinationNewRelic[] | cdktn.IResolvable;
  /**
  * opensearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#opensearch ObservabilityPipeline#opensearch}
  */
  readonly opensearch?: ObservabilityPipelineConfigDestinationOpensearch[] | cdktn.IResolvable;
  /**
  * opentelemetry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#opentelemetry ObservabilityPipeline#opentelemetry}
  */
  readonly opentelemetry?: ObservabilityPipelineConfigDestinationOpentelemetry[] | cdktn.IResolvable;
  /**
  * rsyslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#rsyslog ObservabilityPipeline#rsyslog}
  */
  readonly rsyslog?: ObservabilityPipelineConfigDestinationRsyslog[] | cdktn.IResolvable;
  /**
  * sentinel_one block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#sentinel_one ObservabilityPipeline#sentinel_one}
  */
  readonly sentinelOne?: ObservabilityPipelineConfigDestinationSentinelOne[] | cdktn.IResolvable;
  /**
  * socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#socket ObservabilityPipeline#socket}
  */
  readonly socket?: ObservabilityPipelineConfigDestinationSocket[] | cdktn.IResolvable;
  /**
  * splunk_hec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#splunk_hec ObservabilityPipeline#splunk_hec}
  */
  readonly splunkHec?: ObservabilityPipelineConfigDestinationSplunkHec[] | cdktn.IResolvable;
  /**
  * splunk_hec_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#splunk_hec_metrics ObservabilityPipeline#splunk_hec_metrics}
  */
  readonly splunkHecMetrics?: ObservabilityPipelineConfigDestinationSplunkHecMetrics[] | cdktn.IResolvable;
  /**
  * sumo_logic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#sumo_logic ObservabilityPipeline#sumo_logic}
  */
  readonly sumoLogic?: ObservabilityPipelineConfigDestinationSumoLogic[] | cdktn.IResolvable;
  /**
  * syslog_ng block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#syslog_ng ObservabilityPipeline#syslog_ng}
  */
  readonly syslogNg?: ObservabilityPipelineConfigDestinationSyslogNg[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationToTerraform(struct?: ObservabilityPipelineConfigDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    inputs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputs),
    amazon_opensearch: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonOpensearchToTerraform, true)(struct!.amazonOpensearch),
    amazon_s3: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonS3ToTerraform, true)(struct!.amazonS3),
    amazon_s3_generic: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonS3GenericToTerraform, true)(struct!.amazonS3Generic),
    amazon_security_lake: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonSecurityLakeToTerraform, true)(struct!.amazonSecurityLake),
    azure_storage: cdktn.listMapper(observabilityPipelineConfigDestinationAzureStorageToTerraform, true)(struct!.azureStorage),
    clickhouse: cdktn.listMapper(observabilityPipelineConfigDestinationClickhouseToTerraform, true)(struct!.clickhouse),
    cloud_prem: cdktn.listMapper(observabilityPipelineConfigDestinationCloudPremToTerraform, true)(struct!.cloudPrem),
    crowdstrike_next_gen_siem: cdktn.listMapper(observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemToTerraform, true)(struct!.crowdstrikeNextGenSiem),
    databricks_zerobus: cdktn.listMapper(observabilityPipelineConfigDestinationDatabricksZerobusToTerraform, true)(struct!.databricksZerobus),
    datadog_logs: cdktn.listMapper(observabilityPipelineConfigDestinationDatadogLogsToTerraform, true)(struct!.datadogLogs),
    datadog_metrics: cdktn.listMapper(observabilityPipelineConfigDestinationDatadogMetricsToTerraform, true)(struct!.datadogMetrics),
    elasticsearch: cdktn.listMapper(observabilityPipelineConfigDestinationElasticsearchToTerraform, true)(struct!.elasticsearch),
    google_cloud_storage: cdktn.listMapper(observabilityPipelineConfigDestinationGoogleCloudStorageToTerraform, true)(struct!.googleCloudStorage),
    google_pubsub: cdktn.listMapper(observabilityPipelineConfigDestinationGooglePubsubToTerraform, true)(struct!.googlePubsub),
    google_secops: cdktn.listMapper(observabilityPipelineConfigDestinationGoogleSecopsToTerraform, true)(struct!.googleSecops),
    http_client: cdktn.listMapper(observabilityPipelineConfigDestinationHttpClientToTerraform, true)(struct!.httpClient),
    kafka: cdktn.listMapper(observabilityPipelineConfigDestinationKafkaToTerraform, true)(struct!.kafka),
    microsoft_sentinel: cdktn.listMapper(observabilityPipelineConfigDestinationMicrosoftSentinelToTerraform, true)(struct!.microsoftSentinel),
    new_relic: cdktn.listMapper(observabilityPipelineConfigDestinationNewRelicToTerraform, true)(struct!.newRelic),
    opensearch: cdktn.listMapper(observabilityPipelineConfigDestinationOpensearchToTerraform, true)(struct!.opensearch),
    opentelemetry: cdktn.listMapper(observabilityPipelineConfigDestinationOpentelemetryToTerraform, true)(struct!.opentelemetry),
    rsyslog: cdktn.listMapper(observabilityPipelineConfigDestinationRsyslogToTerraform, true)(struct!.rsyslog),
    sentinel_one: cdktn.listMapper(observabilityPipelineConfigDestinationSentinelOneToTerraform, true)(struct!.sentinelOne),
    socket: cdktn.listMapper(observabilityPipelineConfigDestinationSocketToTerraform, true)(struct!.socket),
    splunk_hec: cdktn.listMapper(observabilityPipelineConfigDestinationSplunkHecToTerraform, true)(struct!.splunkHec),
    splunk_hec_metrics: cdktn.listMapper(observabilityPipelineConfigDestinationSplunkHecMetricsToTerraform, true)(struct!.splunkHecMetrics),
    sumo_logic: cdktn.listMapper(observabilityPipelineConfigDestinationSumoLogicToTerraform, true)(struct!.sumoLogic),
    syslog_ng: cdktn.listMapper(observabilityPipelineConfigDestinationSyslogNgToTerraform, true)(struct!.syslogNg),
  }
}


export function observabilityPipelineConfigDestinationToHclTerraform(struct?: ObservabilityPipelineConfigDestination | cdktn.IResolvable): any {
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
    inputs: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.inputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    amazon_opensearch: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonOpensearchToHclTerraform, true)(struct!.amazonOpensearch),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonOpensearchList",
    },
    amazon_s3: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonS3ToHclTerraform, true)(struct!.amazonS3),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonS3List",
    },
    amazon_s3_generic: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonS3GenericToHclTerraform, true)(struct!.amazonS3Generic),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonS3GenericList",
    },
    amazon_security_lake: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonSecurityLakeToHclTerraform, true)(struct!.amazonSecurityLake),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonSecurityLakeList",
    },
    azure_storage: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAzureStorageToHclTerraform, true)(struct!.azureStorage),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAzureStorageList",
    },
    clickhouse: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationClickhouseToHclTerraform, true)(struct!.clickhouse),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationClickhouseList",
    },
    cloud_prem: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationCloudPremToHclTerraform, true)(struct!.cloudPrem),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationCloudPremList",
    },
    crowdstrike_next_gen_siem: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemToHclTerraform, true)(struct!.crowdstrikeNextGenSiem),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemList",
    },
    databricks_zerobus: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationDatabricksZerobusToHclTerraform, true)(struct!.databricksZerobus),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationDatabricksZerobusList",
    },
    datadog_logs: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationDatadogLogsToHclTerraform, true)(struct!.datadogLogs),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationDatadogLogsList",
    },
    datadog_metrics: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationDatadogMetricsToHclTerraform, true)(struct!.datadogMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationDatadogMetricsList",
    },
    elasticsearch: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationElasticsearchToHclTerraform, true)(struct!.elasticsearch),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationElasticsearchList",
    },
    google_cloud_storage: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGoogleCloudStorageToHclTerraform, true)(struct!.googleCloudStorage),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGoogleCloudStorageList",
    },
    google_pubsub: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGooglePubsubToHclTerraform, true)(struct!.googlePubsub),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGooglePubsubList",
    },
    google_secops: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGoogleSecopsToHclTerraform, true)(struct!.googleSecops),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGoogleSecopsList",
    },
    http_client: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationHttpClientToHclTerraform, true)(struct!.httpClient),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationHttpClientList",
    },
    kafka: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationKafkaToHclTerraform, true)(struct!.kafka),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationKafkaList",
    },
    microsoft_sentinel: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationMicrosoftSentinelToHclTerraform, true)(struct!.microsoftSentinel),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationMicrosoftSentinelList",
    },
    new_relic: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationNewRelicToHclTerraform, true)(struct!.newRelic),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationNewRelicList",
    },
    opensearch: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationOpensearchToHclTerraform, true)(struct!.opensearch),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationOpensearchList",
    },
    opentelemetry: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationOpentelemetryToHclTerraform, true)(struct!.opentelemetry),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationOpentelemetryList",
    },
    rsyslog: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationRsyslogToHclTerraform, true)(struct!.rsyslog),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationRsyslogList",
    },
    sentinel_one: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSentinelOneToHclTerraform, true)(struct!.sentinelOne),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSentinelOneList",
    },
    socket: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSocketToHclTerraform, true)(struct!.socket),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSocketList",
    },
    splunk_hec: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSplunkHecToHclTerraform, true)(struct!.splunkHec),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSplunkHecList",
    },
    splunk_hec_metrics: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSplunkHecMetricsToHclTerraform, true)(struct!.splunkHecMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSplunkHecMetricsList",
    },
    sumo_logic: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSumoLogicToHclTerraform, true)(struct!.sumoLogic),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSumoLogicList",
    },
    syslog_ng: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationSyslogNgToHclTerraform, true)(struct!.syslogNg),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationSyslogNgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestination | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs;
    }
    if (this._amazonOpensearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonOpensearch = this._amazonOpensearch?.internalValue;
    }
    if (this._amazonS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonS3 = this._amazonS3?.internalValue;
    }
    if (this._amazonS3Generic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonS3Generic = this._amazonS3Generic?.internalValue;
    }
    if (this._amazonSecurityLake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonSecurityLake = this._amazonSecurityLake?.internalValue;
    }
    if (this._azureStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorage = this._azureStorage?.internalValue;
    }
    if (this._clickhouse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouse = this._clickhouse?.internalValue;
    }
    if (this._cloudPrem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudPrem = this._cloudPrem?.internalValue;
    }
    if (this._crowdstrikeNextGenSiem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crowdstrikeNextGenSiem = this._crowdstrikeNextGenSiem?.internalValue;
    }
    if (this._databricksZerobus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksZerobus = this._databricksZerobus?.internalValue;
    }
    if (this._datadogLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogLogs = this._datadogLogs?.internalValue;
    }
    if (this._datadogMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogMetrics = this._datadogMetrics?.internalValue;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._googleCloudStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorage = this._googleCloudStorage?.internalValue;
    }
    if (this._googlePubsub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googlePubsub = this._googlePubsub?.internalValue;
    }
    if (this._googleSecops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleSecops = this._googleSecops?.internalValue;
    }
    if (this._httpClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpClient = this._httpClient?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._microsoftSentinel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.microsoftSentinel = this._microsoftSentinel?.internalValue;
    }
    if (this._newRelic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newRelic = this._newRelic?.internalValue;
    }
    if (this._opensearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearch = this._opensearch?.internalValue;
    }
    if (this._opentelemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentelemetry = this._opentelemetry?.internalValue;
    }
    if (this._rsyslog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsyslog = this._rsyslog?.internalValue;
    }
    if (this._sentinelOne?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelOne = this._sentinelOne?.internalValue;
    }
    if (this._socket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.socket = this._socket?.internalValue;
    }
    if (this._splunkHec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkHec = this._splunkHec?.internalValue;
    }
    if (this._splunkHecMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkHecMetrics = this._splunkHecMetrics?.internalValue;
    }
    if (this._sumoLogic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sumoLogic = this._sumoLogic?.internalValue;
    }
    if (this._syslogNg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogNg = this._syslogNg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestination | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._inputs = undefined;
      this._amazonOpensearch.internalValue = undefined;
      this._amazonS3.internalValue = undefined;
      this._amazonS3Generic.internalValue = undefined;
      this._amazonSecurityLake.internalValue = undefined;
      this._azureStorage.internalValue = undefined;
      this._clickhouse.internalValue = undefined;
      this._cloudPrem.internalValue = undefined;
      this._crowdstrikeNextGenSiem.internalValue = undefined;
      this._databricksZerobus.internalValue = undefined;
      this._datadogLogs.internalValue = undefined;
      this._datadogMetrics.internalValue = undefined;
      this._elasticsearch.internalValue = undefined;
      this._googleCloudStorage.internalValue = undefined;
      this._googlePubsub.internalValue = undefined;
      this._googleSecops.internalValue = undefined;
      this._httpClient.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._microsoftSentinel.internalValue = undefined;
      this._newRelic.internalValue = undefined;
      this._opensearch.internalValue = undefined;
      this._opentelemetry.internalValue = undefined;
      this._rsyslog.internalValue = undefined;
      this._sentinelOne.internalValue = undefined;
      this._socket.internalValue = undefined;
      this._splunkHec.internalValue = undefined;
      this._splunkHecMetrics.internalValue = undefined;
      this._sumoLogic.internalValue = undefined;
      this._syslogNg.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._inputs = value.inputs;
      this._amazonOpensearch.internalValue = value.amazonOpensearch;
      this._amazonS3.internalValue = value.amazonS3;
      this._amazonS3Generic.internalValue = value.amazonS3Generic;
      this._amazonSecurityLake.internalValue = value.amazonSecurityLake;
      this._azureStorage.internalValue = value.azureStorage;
      this._clickhouse.internalValue = value.clickhouse;
      this._cloudPrem.internalValue = value.cloudPrem;
      this._crowdstrikeNextGenSiem.internalValue = value.crowdstrikeNextGenSiem;
      this._databricksZerobus.internalValue = value.databricksZerobus;
      this._datadogLogs.internalValue = value.datadogLogs;
      this._datadogMetrics.internalValue = value.datadogMetrics;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._googleCloudStorage.internalValue = value.googleCloudStorage;
      this._googlePubsub.internalValue = value.googlePubsub;
      this._googleSecops.internalValue = value.googleSecops;
      this._httpClient.internalValue = value.httpClient;
      this._kafka.internalValue = value.kafka;
      this._microsoftSentinel.internalValue = value.microsoftSentinel;
      this._newRelic.internalValue = value.newRelic;
      this._opensearch.internalValue = value.opensearch;
      this._opentelemetry.internalValue = value.opentelemetry;
      this._rsyslog.internalValue = value.rsyslog;
      this._sentinelOne.internalValue = value.sentinelOne;
      this._socket.internalValue = value.socket;
      this._splunkHec.internalValue = value.splunkHec;
      this._splunkHecMetrics.internalValue = value.splunkHecMetrics;
      this._sumoLogic.internalValue = value.sumoLogic;
      this._syslogNg.internalValue = value.syslogNg;
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

  // amazon_opensearch - computed: false, optional: true, required: false
  private _amazonOpensearch = new ObservabilityPipelineConfigDestinationAmazonOpensearchList(this, "amazon_opensearch", false);
  public get amazonOpensearch() {
    return this._amazonOpensearch;
  }
  public putAmazonOpensearch(value: ObservabilityPipelineConfigDestinationAmazonOpensearch[] | cdktn.IResolvable) {
    this._amazonOpensearch.internalValue = value;
  }
  public resetAmazonOpensearch() {
    this._amazonOpensearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonOpensearchInput() {
    return this._amazonOpensearch.internalValue;
  }

  // amazon_s3 - computed: false, optional: true, required: false
  private _amazonS3 = new ObservabilityPipelineConfigDestinationAmazonS3List(this, "amazon_s3", false);
  public get amazonS3() {
    return this._amazonS3;
  }
  public putAmazonS3(value: ObservabilityPipelineConfigDestinationAmazonS3[] | cdktn.IResolvable) {
    this._amazonS3.internalValue = value;
  }
  public resetAmazonS3() {
    this._amazonS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonS3Input() {
    return this._amazonS3.internalValue;
  }

  // amazon_s3_generic - computed: false, optional: true, required: false
  private _amazonS3Generic = new ObservabilityPipelineConfigDestinationAmazonS3GenericList(this, "amazon_s3_generic", false);
  public get amazonS3Generic() {
    return this._amazonS3Generic;
  }
  public putAmazonS3Generic(value: ObservabilityPipelineConfigDestinationAmazonS3Generic[] | cdktn.IResolvable) {
    this._amazonS3Generic.internalValue = value;
  }
  public resetAmazonS3Generic() {
    this._amazonS3Generic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonS3GenericInput() {
    return this._amazonS3Generic.internalValue;
  }

  // amazon_security_lake - computed: false, optional: true, required: false
  private _amazonSecurityLake = new ObservabilityPipelineConfigDestinationAmazonSecurityLakeList(this, "amazon_security_lake", false);
  public get amazonSecurityLake() {
    return this._amazonSecurityLake;
  }
  public putAmazonSecurityLake(value: ObservabilityPipelineConfigDestinationAmazonSecurityLake[] | cdktn.IResolvable) {
    this._amazonSecurityLake.internalValue = value;
  }
  public resetAmazonSecurityLake() {
    this._amazonSecurityLake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonSecurityLakeInput() {
    return this._amazonSecurityLake.internalValue;
  }

  // azure_storage - computed: false, optional: true, required: false
  private _azureStorage = new ObservabilityPipelineConfigDestinationAzureStorageList(this, "azure_storage", false);
  public get azureStorage() {
    return this._azureStorage;
  }
  public putAzureStorage(value: ObservabilityPipelineConfigDestinationAzureStorage[] | cdktn.IResolvable) {
    this._azureStorage.internalValue = value;
  }
  public resetAzureStorage() {
    this._azureStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageInput() {
    return this._azureStorage.internalValue;
  }

  // clickhouse - computed: false, optional: true, required: false
  private _clickhouse = new ObservabilityPipelineConfigDestinationClickhouseList(this, "clickhouse", false);
  public get clickhouse() {
    return this._clickhouse;
  }
  public putClickhouse(value: ObservabilityPipelineConfigDestinationClickhouse[] | cdktn.IResolvable) {
    this._clickhouse.internalValue = value;
  }
  public resetClickhouse() {
    this._clickhouse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseInput() {
    return this._clickhouse.internalValue;
  }

  // cloud_prem - computed: false, optional: true, required: false
  private _cloudPrem = new ObservabilityPipelineConfigDestinationCloudPremList(this, "cloud_prem", false);
  public get cloudPrem() {
    return this._cloudPrem;
  }
  public putCloudPrem(value: ObservabilityPipelineConfigDestinationCloudPrem[] | cdktn.IResolvable) {
    this._cloudPrem.internalValue = value;
  }
  public resetCloudPrem() {
    this._cloudPrem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudPremInput() {
    return this._cloudPrem.internalValue;
  }

  // crowdstrike_next_gen_siem - computed: false, optional: true, required: false
  private _crowdstrikeNextGenSiem = new ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemList(this, "crowdstrike_next_gen_siem", false);
  public get crowdstrikeNextGenSiem() {
    return this._crowdstrikeNextGenSiem;
  }
  public putCrowdstrikeNextGenSiem(value: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiem[] | cdktn.IResolvable) {
    this._crowdstrikeNextGenSiem.internalValue = value;
  }
  public resetCrowdstrikeNextGenSiem() {
    this._crowdstrikeNextGenSiem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crowdstrikeNextGenSiemInput() {
    return this._crowdstrikeNextGenSiem.internalValue;
  }

  // databricks_zerobus - computed: false, optional: true, required: false
  private _databricksZerobus = new ObservabilityPipelineConfigDestinationDatabricksZerobusList(this, "databricks_zerobus", false);
  public get databricksZerobus() {
    return this._databricksZerobus;
  }
  public putDatabricksZerobus(value: ObservabilityPipelineConfigDestinationDatabricksZerobus[] | cdktn.IResolvable) {
    this._databricksZerobus.internalValue = value;
  }
  public resetDatabricksZerobus() {
    this._databricksZerobus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksZerobusInput() {
    return this._databricksZerobus.internalValue;
  }

  // datadog_logs - computed: false, optional: true, required: false
  private _datadogLogs = new ObservabilityPipelineConfigDestinationDatadogLogsList(this, "datadog_logs", false);
  public get datadogLogs() {
    return this._datadogLogs;
  }
  public putDatadogLogs(value: ObservabilityPipelineConfigDestinationDatadogLogs[] | cdktn.IResolvable) {
    this._datadogLogs.internalValue = value;
  }
  public resetDatadogLogs() {
    this._datadogLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogLogsInput() {
    return this._datadogLogs.internalValue;
  }

  // datadog_metrics - computed: false, optional: true, required: false
  private _datadogMetrics = new ObservabilityPipelineConfigDestinationDatadogMetricsList(this, "datadog_metrics", false);
  public get datadogMetrics() {
    return this._datadogMetrics;
  }
  public putDatadogMetrics(value: ObservabilityPipelineConfigDestinationDatadogMetrics[] | cdktn.IResolvable) {
    this._datadogMetrics.internalValue = value;
  }
  public resetDatadogMetrics() {
    this._datadogMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogMetricsInput() {
    return this._datadogMetrics.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new ObservabilityPipelineConfigDestinationElasticsearchList(this, "elasticsearch", false);
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: ObservabilityPipelineConfigDestinationElasticsearch[] | cdktn.IResolvable) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // google_cloud_storage - computed: false, optional: true, required: false
  private _googleCloudStorage = new ObservabilityPipelineConfigDestinationGoogleCloudStorageList(this, "google_cloud_storage", false);
  public get googleCloudStorage() {
    return this._googleCloudStorage;
  }
  public putGoogleCloudStorage(value: ObservabilityPipelineConfigDestinationGoogleCloudStorage[] | cdktn.IResolvable) {
    this._googleCloudStorage.internalValue = value;
  }
  public resetGoogleCloudStorage() {
    this._googleCloudStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageInput() {
    return this._googleCloudStorage.internalValue;
  }

  // google_pubsub - computed: false, optional: true, required: false
  private _googlePubsub = new ObservabilityPipelineConfigDestinationGooglePubsubList(this, "google_pubsub", false);
  public get googlePubsub() {
    return this._googlePubsub;
  }
  public putGooglePubsub(value: ObservabilityPipelineConfigDestinationGooglePubsub[] | cdktn.IResolvable) {
    this._googlePubsub.internalValue = value;
  }
  public resetGooglePubsub() {
    this._googlePubsub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googlePubsubInput() {
    return this._googlePubsub.internalValue;
  }

  // google_secops - computed: false, optional: true, required: false
  private _googleSecops = new ObservabilityPipelineConfigDestinationGoogleSecopsList(this, "google_secops", false);
  public get googleSecops() {
    return this._googleSecops;
  }
  public putGoogleSecops(value: ObservabilityPipelineConfigDestinationGoogleSecops[] | cdktn.IResolvable) {
    this._googleSecops.internalValue = value;
  }
  public resetGoogleSecops() {
    this._googleSecops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleSecopsInput() {
    return this._googleSecops.internalValue;
  }

  // http_client - computed: false, optional: true, required: false
  private _httpClient = new ObservabilityPipelineConfigDestinationHttpClientList(this, "http_client", false);
  public get httpClient() {
    return this._httpClient;
  }
  public putHttpClient(value: ObservabilityPipelineConfigDestinationHttpClient[] | cdktn.IResolvable) {
    this._httpClient.internalValue = value;
  }
  public resetHttpClient() {
    this._httpClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientInput() {
    return this._httpClient.internalValue;
  }

  // kafka - computed: false, optional: true, required: false
  private _kafka = new ObservabilityPipelineConfigDestinationKafkaList(this, "kafka", false);
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: ObservabilityPipelineConfigDestinationKafka[] | cdktn.IResolvable) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // microsoft_sentinel - computed: false, optional: true, required: false
  private _microsoftSentinel = new ObservabilityPipelineConfigDestinationMicrosoftSentinelList(this, "microsoft_sentinel", false);
  public get microsoftSentinel() {
    return this._microsoftSentinel;
  }
  public putMicrosoftSentinel(value: ObservabilityPipelineConfigDestinationMicrosoftSentinel[] | cdktn.IResolvable) {
    this._microsoftSentinel.internalValue = value;
  }
  public resetMicrosoftSentinel() {
    this._microsoftSentinel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftSentinelInput() {
    return this._microsoftSentinel.internalValue;
  }

  // new_relic - computed: false, optional: true, required: false
  private _newRelic = new ObservabilityPipelineConfigDestinationNewRelicList(this, "new_relic", false);
  public get newRelic() {
    return this._newRelic;
  }
  public putNewRelic(value: ObservabilityPipelineConfigDestinationNewRelic[] | cdktn.IResolvable) {
    this._newRelic.internalValue = value;
  }
  public resetNewRelic() {
    this._newRelic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newRelicInput() {
    return this._newRelic.internalValue;
  }

  // opensearch - computed: false, optional: true, required: false
  private _opensearch = new ObservabilityPipelineConfigDestinationOpensearchList(this, "opensearch", false);
  public get opensearch() {
    return this._opensearch;
  }
  public putOpensearch(value: ObservabilityPipelineConfigDestinationOpensearch[] | cdktn.IResolvable) {
    this._opensearch.internalValue = value;
  }
  public resetOpensearch() {
    this._opensearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchInput() {
    return this._opensearch.internalValue;
  }

  // opentelemetry - computed: false, optional: true, required: false
  private _opentelemetry = new ObservabilityPipelineConfigDestinationOpentelemetryList(this, "opentelemetry", false);
  public get opentelemetry() {
    return this._opentelemetry;
  }
  public putOpentelemetry(value: ObservabilityPipelineConfigDestinationOpentelemetry[] | cdktn.IResolvable) {
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
  private _rsyslog = new ObservabilityPipelineConfigDestinationRsyslogList(this, "rsyslog", false);
  public get rsyslog() {
    return this._rsyslog;
  }
  public putRsyslog(value: ObservabilityPipelineConfigDestinationRsyslog[] | cdktn.IResolvable) {
    this._rsyslog.internalValue = value;
  }
  public resetRsyslog() {
    this._rsyslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsyslogInput() {
    return this._rsyslog.internalValue;
  }

  // sentinel_one - computed: false, optional: true, required: false
  private _sentinelOne = new ObservabilityPipelineConfigDestinationSentinelOneList(this, "sentinel_one", false);
  public get sentinelOne() {
    return this._sentinelOne;
  }
  public putSentinelOne(value: ObservabilityPipelineConfigDestinationSentinelOne[] | cdktn.IResolvable) {
    this._sentinelOne.internalValue = value;
  }
  public resetSentinelOne() {
    this._sentinelOne.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelOneInput() {
    return this._sentinelOne.internalValue;
  }

  // socket - computed: false, optional: true, required: false
  private _socket = new ObservabilityPipelineConfigDestinationSocketList(this, "socket", false);
  public get socket() {
    return this._socket;
  }
  public putSocket(value: ObservabilityPipelineConfigDestinationSocket[] | cdktn.IResolvable) {
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
  private _splunkHec = new ObservabilityPipelineConfigDestinationSplunkHecList(this, "splunk_hec", false);
  public get splunkHec() {
    return this._splunkHec;
  }
  public putSplunkHec(value: ObservabilityPipelineConfigDestinationSplunkHec[] | cdktn.IResolvable) {
    this._splunkHec.internalValue = value;
  }
  public resetSplunkHec() {
    this._splunkHec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkHecInput() {
    return this._splunkHec.internalValue;
  }

  // splunk_hec_metrics - computed: false, optional: true, required: false
  private _splunkHecMetrics = new ObservabilityPipelineConfigDestinationSplunkHecMetricsList(this, "splunk_hec_metrics", false);
  public get splunkHecMetrics() {
    return this._splunkHecMetrics;
  }
  public putSplunkHecMetrics(value: ObservabilityPipelineConfigDestinationSplunkHecMetrics[] | cdktn.IResolvable) {
    this._splunkHecMetrics.internalValue = value;
  }
  public resetSplunkHecMetrics() {
    this._splunkHecMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkHecMetricsInput() {
    return this._splunkHecMetrics.internalValue;
  }

  // sumo_logic - computed: false, optional: true, required: false
  private _sumoLogic = new ObservabilityPipelineConfigDestinationSumoLogicList(this, "sumo_logic", false);
  public get sumoLogic() {
    return this._sumoLogic;
  }
  public putSumoLogic(value: ObservabilityPipelineConfigDestinationSumoLogic[] | cdktn.IResolvable) {
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
  private _syslogNg = new ObservabilityPipelineConfigDestinationSyslogNgList(this, "syslog_ng", false);
  public get syslogNg() {
    return this._syslogNg;
  }
  public putSyslogNg(value: ObservabilityPipelineConfigDestinationSyslogNg[] | cdktn.IResolvable) {
    this._syslogNg.internalValue = value;
  }
  public resetSyslogNg() {
    this._syslogNg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogNgInput() {
    return this._syslogNg.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestination[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationOutputReference {
    return new ObservabilityPipelineConfigDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariable {
  /**
  * The target field in the log event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field: string;
  /**
  * The name of the environment variable to read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariableToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariableToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariable | cdktn.IResolvable): any {
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._name = value.name;
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
}

export class ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariableList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariable[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariableOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVars {
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#variable ObservabilityPipeline#variable}
  */
  readonly variable?: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariable[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVars | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    variable: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariableToTerraform, true)(struct!.variable),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVars | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    variable: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariableToHclTerraform, true)(struct!.variable),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVars | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVars | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._variable.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._variable.internalValue = value.variable;
    }
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariableList(this, "variable", false);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariable[] | cdktn.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVars[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsField {
  /**
  * The field name to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The value to assign to the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorAddFieldsFieldToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorAddFieldsFieldToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsField | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsField | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsField | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsFieldList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsField[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsFieldOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorAddFields {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsField[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorAddFieldsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorAddFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorAddFieldsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    field: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorAddFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorAddFields | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorAddFields | cdktn.IResolvable | undefined) {
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
  private _field = new ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsField[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorAddFields[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorAddHostname {
}

export function observabilityPipelineConfigProcessorGroupProcessorAddHostnameToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddHostname | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorAddHostnameToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddHostname | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ObservabilityPipelineConfigProcessorGroupProcessorAddHostnameOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorAddHostname | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorAddHostname | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorAddHostnameList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorAddHostname[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorAddHostnameOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorAddHostnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTag {
  /**
  * The tag name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTagToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTag | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTagToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTag | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTagOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTag | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTag | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTagList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTag[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTagOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTags {
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#tag ObservabilityPipeline#tag}
  */
  readonly tag?: ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTag[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorAddMetricTagsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tag: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTagToTerraform, true)(struct!.tag),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorAddMetricTagsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tag: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTags | cdktn.IResolvable | undefined) {
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
  private _tag = new ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsTag[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTags[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorAddMetricTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorAggregate {
  /**
  * The interval, in seconds, over which metrics are aggregated. Must be between 1 and 60. Value must be between 1 and 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#interval_secs ObservabilityPipeline#interval_secs}
  */
  readonly intervalSecs: number;
  /**
  * The aggregation mode. One of `auto`, `sum`, `latest`, `count`, `max`, `min`, `mean`. Valid values are `auto`, `sum`, `latest`, `count`, `max`, `min`, `mean`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorAggregateToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAggregate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    interval_secs: cdktn.numberToTerraform(struct!.intervalSecs),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorAggregateToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAggregate | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    interval_secs: {
      value: cdktn.numberToHclTerraform(struct!.intervalSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ObservabilityPipelineConfigProcessorGroupProcessorAggregateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorAggregate | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSecs = this._intervalSecs;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorAggregate | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intervalSecs = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intervalSecs = value.intervalSecs;
      this._mode = value.mode;
    }
  }

  // interval_secs - computed: false, optional: false, required: true
  private _intervalSecs?: number; 
  public get intervalSecs() {
    return this.getNumberAttribute('interval_secs');
  }
  public set intervalSecs(value: number) {
    this._intervalSecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecsInput() {
    return this._intervalSecs;
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

export class ObservabilityPipelineConfigProcessorGroupProcessorAggregateList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorAggregate[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorAggregateOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorAggregateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemap {
  /**
  * Whether to drop events that cause errors during transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#drop_on_error ObservabilityPipeline#drop_on_error}
  */
  readonly dropOnError: boolean | cdktn.IResolvable;
  /**
  * Whether this remap rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#enabled ObservabilityPipeline#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * A Datadog search query used to filter events for this specific remap rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * A descriptive name for this remap rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The VRL script source code that defines the transformation logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#source ObservabilityPipeline#source}
  */
  readonly source: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemapToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    drop_on_error: cdktn.booleanToTerraform(struct!.dropOnError),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    include: cdktn.stringToTerraform(struct!.include),
    name: cdktn.stringToTerraform(struct!.name),
    source: cdktn.stringToTerraform(struct!.source),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemapToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    drop_on_error: {
      value: cdktn.booleanToHclTerraform(struct!.dropOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include: {
      value: cdktn.stringToHclTerraform(struct!.include),
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

export class ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemapOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemap | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropOnError = this._dropOnError;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemap | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dropOnError = undefined;
      this._enabled = undefined;
      this._include = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dropOnError = value.dropOnError;
      this._enabled = value.enabled;
      this._include = value.include;
      this._name = value.name;
      this._source = value.source;
    }
  }

  // drop_on_error - computed: false, optional: false, required: true
  private _dropOnError?: boolean | cdktn.IResolvable; 
  public get dropOnError() {
    return this.getBooleanAttribute('drop_on_error');
  }
  public set dropOnError(value: boolean | cdktn.IResolvable) {
    this._dropOnError = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropOnErrorInput() {
    return this._dropOnError;
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

export class ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemapList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemap[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemapOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessor {
  /**
  * remap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#remap ObservabilityPipeline#remap}
  */
  readonly remap?: ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemap[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorCustomProcessorToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    remap: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemapToTerraform, true)(struct!.remap),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorCustomProcessorToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    remap: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemapToHclTerraform, true)(struct!.remap),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessor | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remap = this._remap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessor | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remap.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remap.internalValue = value.remap;
    }
  }

  // remap - computed: false, optional: true, required: false
  private _remap = new ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemapList(this, "remap", false);
  public get remap() {
    return this._remap;
  }
  public putRemap(value: ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemap[] | cdktn.IResolvable) {
    this._remap.internalValue = value;
  }
  public resetRemap() {
    this._remap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remapInput() {
    return this._remap.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessor[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorDatadogTags {
  /**
  *  Valid values are `include`, `exclude`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#action ObservabilityPipeline#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#keys ObservabilityPipeline#keys}
  */
  readonly keys: string[];
  /**
  *  Valid values are `filter`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorDatadogTagsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorDatadogTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.keys),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorDatadogTagsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorDatadogTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ObservabilityPipelineConfigProcessorGroupProcessorDatadogTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorDatadogTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorDatadogTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._keys = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._keys = value.keys;
      this._mode = value.mode;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // keys - computed: false, optional: false, required: true
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
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

export class ObservabilityPipelineConfigProcessorGroupProcessorDatadogTagsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorDatadogTags[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorDatadogTagsOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorDatadogTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorDedupe {
  /**
  * A list of log field paths to check for duplicates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}
  */
  readonly fields: string[];
  /**
  * The deduplication mode to apply to the fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorDedupeToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorDedupe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorDedupeToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorDedupe | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorDedupeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorDedupe | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorDedupe | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields = value.fields;
      this._mode = value.mode;
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

export class ObservabilityPipelineConfigProcessorGroupProcessorDedupeList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorDedupe[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorDedupeOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorDedupeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncoding {
  /**
  * The `encoding` `delimiter`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#delimiter ObservabilityPipeline#delimiter}
  */
  readonly delimiter: string;
  /**
  * The `encoding` `includes_headers`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#includes_headers ObservabilityPipeline#includes_headers}
  */
  readonly includesHeaders?: boolean | cdktn.IResolvable;
  /**
  * File encoding format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#type ObservabilityPipeline#type}
  */
  readonly type: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncodingToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncoding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
    includes_headers: cdktn.booleanToTerraform(struct!.includesHeaders),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncodingToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncoding | cdktn.IResolvable): any {
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
    includes_headers: {
      value: cdktn.booleanToHclTerraform(struct!.includesHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncodingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncoding | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._includesHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includesHeaders = this._includesHeaders;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncoding | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delimiter = undefined;
      this._includesHeaders = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delimiter = value.delimiter;
      this._includesHeaders = value.includesHeaders;
      this._type = value.type;
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

  // includes_headers - computed: false, optional: true, required: false
  private _includesHeaders?: boolean | cdktn.IResolvable; 
  public get includesHeaders() {
    return this.getBooleanAttribute('includes_headers');
  }
  public set includesHeaders(value: boolean | cdktn.IResolvable) {
    this._includesHeaders = value;
  }
  public resetIncludesHeaders() {
    this._includesHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesHeadersInput() {
    return this._includesHeaders;
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
}

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncodingList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncoding[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncodingOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncodingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyField {
  /**
  * The path to the field in the log event to use as the lookup key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#event ObservabilityPipeline#event}
  */
  readonly event?: string;
  /**
  * The name of the secret containing the lookup key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#secret ObservabilityPipeline#secret}
  */
  readonly secret?: string;
  /**
  * A plain field path in the log event (for example, `log.user.id`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#string_path ObservabilityPipeline#string_path}
  */
  readonly stringPath?: string;
  /**
  * A VRL expression that returns the value to use as the lookup key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#vrl ObservabilityPipeline#vrl}
  */
  readonly vrl?: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyFieldToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    event: cdktn.stringToTerraform(struct!.event),
    secret: cdktn.stringToTerraform(struct!.secret),
    string_path: cdktn.stringToTerraform(struct!.stringPath),
    vrl: cdktn.stringToTerraform(struct!.vrl),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyFieldToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    event: {
      value: cdktn.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktn.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_path: {
      value: cdktn.stringToHclTerraform(struct!.stringPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrl: {
      value: cdktn.stringToHclTerraform(struct!.vrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyFieldOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyField | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._stringPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringPath = this._stringPath;
    }
    if (this._vrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrl = this._vrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyField | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._event = undefined;
      this._secret = undefined;
      this._stringPath = undefined;
      this._vrl = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._event = value.event;
      this._secret = value.secret;
      this._stringPath = value.stringPath;
      this._vrl = value.vrl;
    }
  }

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // string_path - computed: false, optional: true, required: false
  private _stringPath?: string; 
  public get stringPath() {
    return this.getStringAttribute('string_path');
  }
  public set stringPath(value: string) {
    this._stringPath = value;
  }
  public resetStringPath() {
    this._stringPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringPathInput() {
    return this._stringPath;
  }

  // vrl - computed: false, optional: true, required: false
  private _vrl?: string; 
  public get vrl() {
    return this.getStringAttribute('vrl');
  }
  public set vrl(value: string) {
    this._vrl = value;
  }
  public resetVrl() {
    this._vrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrlInput() {
    return this._vrl;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyFieldList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyField[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyFieldOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKey {
  /**
  * The `items` `column`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#column ObservabilityPipeline#column}
  */
  readonly column?: string;
  /**
  * The comparison method (e.g. equals).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#comparison ObservabilityPipeline#comparison}
  */
  readonly comparison?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyField[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    comparison: cdktn.stringToTerraform(struct!.comparison),
    field: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyFieldToTerraform, true)(struct!.field),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparison: {
      value: cdktn.stringToHclTerraform(struct!.comparison),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._comparison = undefined;
      this._field.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._comparison = value.comparison;
      this._field.internalValue = value.field;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // comparison - computed: false, optional: true, required: false
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  public resetComparison() {
    this._comparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
  }

  // field - computed: false, optional: true, required: false
  private _field = new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyField[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKey[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFile {
  /**
  * Path to the CSV file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#path ObservabilityPipeline#path}
  */
  readonly path?: string;
  /**
  * encoding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncoding[] | cdktn.IResolvable;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key ObservabilityPipeline#key}
  */
  readonly key?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKey[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    encoding: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncodingToTerraform, true)(struct!.encoding),
    key: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyToTerraform, true)(struct!.key),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFile | cdktn.IResolvable): any {
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
    encoding: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncodingToHclTerraform, true)(struct!.encoding),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncodingList",
    },
    key: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyToHclTerraform, true)(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._encoding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._encoding.internalValue = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._encoding.internalValue = value.encoding;
      this._key.internalValue = value.key;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding = new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncodingList(this, "encoding", false);
  public get encoding() {
    return this._encoding;
  }
  public putEncoding(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncoding[] | cdktn.IResolvable) {
    this._encoding.internalValue = value;
  }
  public resetEncoding() {
    this._encoding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
  public putKey(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKey[] | cdktn.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFile[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoip {
  /**
  * Path to the IP field in the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_field ObservabilityPipeline#key_field}
  */
  readonly keyField?: string;
  /**
  * Locale used to resolve geographical names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#locale ObservabilityPipeline#locale}
  */
  readonly locale?: string;
  /**
  * Path to the GeoIP database file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#path ObservabilityPipeline#path}
  */
  readonly path?: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoipToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoip | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key_field: cdktn.stringToTerraform(struct!.keyField),
    locale: cdktn.stringToTerraform(struct!.locale),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoipToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoip | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key_field: {
      value: cdktn.stringToHclTerraform(struct!.keyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locale: {
      value: cdktn.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoipOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoip | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyField = this._keyField;
    }
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoip | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyField = undefined;
      this._locale = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyField = value.keyField;
      this._locale = value.locale;
      this._path = value.path;
    }
  }

  // key_field - computed: false, optional: true, required: false
  private _keyField?: string; 
  public get keyField() {
    return this.getStringAttribute('key_field');
  }
  public set keyField(value: string) {
    this._keyField = value;
  }
  public resetKeyField() {
    this._keyField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFieldInput() {
    return this._keyField;
  }

  // locale - computed: false, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoipList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoip[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoipOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTable {
  /**
  * Name of the environment variable or secret that holds the Datadog application key for the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#app_key_key ObservabilityPipeline#app_key_key}
  */
  readonly appKeyKey?: string;
  /**
  * List of column names to include from the reference table. If not provided, all columns are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#columns ObservabilityPipeline#columns}
  */
  readonly columns?: string[];
  /**
  * Path to the field in the log event to match against the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#key_field ObservabilityPipeline#key_field}
  */
  readonly keyField: string;
  /**
  * The unique identifier of the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#table_id ObservabilityPipeline#table_id}
  */
  readonly tableId: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTableToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_key_key: cdktn.stringToTerraform(struct!.appKeyKey),
    columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columns),
    key_field: cdktn.stringToTerraform(struct!.keyField),
    table_id: cdktn.stringToTerraform(struct!.tableId),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTableToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_key_key: {
      value: cdktn.stringToHclTerraform(struct!.appKeyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_field: {
      value: cdktn.stringToHclTerraform(struct!.keyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktn.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appKeyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.appKeyKey = this._appKeyKey;
    }
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._keyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyField = this._keyField;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appKeyKey = undefined;
      this._columns = undefined;
      this._keyField = undefined;
      this._tableId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appKeyKey = value.appKeyKey;
      this._columns = value.columns;
      this._keyField = value.keyField;
      this._tableId = value.tableId;
    }
  }

  // app_key_key - computed: false, optional: true, required: false
  private _appKeyKey?: string; 
  public get appKeyKey() {
    return this.getStringAttribute('app_key_key');
  }
  public set appKeyKey(value: string) {
    this._appKeyKey = value;
  }
  public resetAppKeyKey() {
    this._appKeyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appKeyKeyInput() {
    return this._appKeyKey;
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // key_field - computed: false, optional: false, required: true
  private _keyField?: string; 
  public get keyField() {
    return this.getStringAttribute('key_field');
  }
  public set keyField(value: string) {
    this._keyField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFieldInput() {
    return this._keyField;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTableList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTable[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTableOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTable {
  /**
  * Path where enrichment results should be stored in the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#target ObservabilityPipeline#target}
  */
  readonly target: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#file ObservabilityPipeline#file}
  */
  readonly file?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFile[] | cdktn.IResolvable;
  /**
  * geoip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#geoip ObservabilityPipeline#geoip}
  */
  readonly geoip?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoip[] | cdktn.IResolvable;
  /**
  * reference_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#reference_table ObservabilityPipeline#reference_table}
  */
  readonly referenceTable?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTable[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    target: cdktn.stringToTerraform(struct!.target),
    file: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileToTerraform, true)(struct!.file),
    geoip: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoipToTerraform, true)(struct!.geoip),
    reference_table: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTableToTerraform, true)(struct!.referenceTable),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileList",
    },
    geoip: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoipToHclTerraform, true)(struct!.geoip),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoipList",
    },
    reference_table: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTableToHclTerraform, true)(struct!.referenceTable),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._geoip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoip = this._geoip?.internalValue;
    }
    if (this._referenceTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceTable = this._referenceTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
      this._file.internalValue = undefined;
      this._geoip.internalValue = undefined;
      this._referenceTable.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
      this._file.internalValue = value.file;
      this._geoip.internalValue = value.geoip;
      this._referenceTable.internalValue = value.referenceTable;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // file - computed: false, optional: true, required: false
  private _file = new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileList(this, "file", false);
  public get file() {
    return this._file;
  }
  public putFile(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFile[] | cdktn.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // geoip - computed: false, optional: true, required: false
  private _geoip = new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoipList(this, "geoip", false);
  public get geoip() {
    return this._geoip;
  }
  public putGeoip(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoip[] | cdktn.IResolvable) {
    this._geoip.internalValue = value;
  }
  public resetGeoip() {
    this._geoip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipInput() {
    return this._geoip.internalValue;
  }

  // reference_table - computed: false, optional: true, required: false
  private _referenceTable = new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTableList(this, "reference_table", false);
  public get referenceTable() {
    return this._referenceTable;
  }
  public putReferenceTable(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTable[] | cdktn.IResolvable) {
    this._referenceTable.internalValue = value;
  }
  public resetReferenceTable() {
    this._referenceTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceTableInput() {
    return this._referenceTable.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTable[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorFilter {
}

export function observabilityPipelineConfigProcessorGroupProcessorFilterToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorFilterToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class ObservabilityPipelineConfigProcessorGroupProcessorFilterOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorFilter | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorFilter | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorFilterList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorFilter[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorFilterOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValue {
  /**
  * Name of the log field containing the numeric value to increment the metric by (used only for `increment_by_field`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: string;
  /**
  * Metric value strategy: `increment_by_one` or `increment_by_field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#strategy ObservabilityPipeline#strategy}
  */
  readonly strategy: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValueToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    strategy: cdktn.stringToTerraform(struct!.strategy),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValueToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValue | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._strategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._strategy = value.strategy;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

export class ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValueList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValue[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValueOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetric {
  /**
  * Optional fields used to group the metric series.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#group_by ObservabilityPipeline#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Datadog filter query to match logs for metric generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * Type of metric to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#metric_type ObservabilityPipeline#metric_type}
  */
  readonly metricType: string;
  /**
  * Name of the custom metric to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValue[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupBy),
    include: cdktn.stringToTerraform(struct!.include),
    metric_type: cdktn.stringToTerraform(struct!.metricType),
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValueToTerraform, true)(struct!.value),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetric | cdktn.IResolvable): any {
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
    include: {
      value: cdktn.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktn.stringToHclTerraform(struct!.metricType),
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
    value: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupBy = undefined;
      this._include = undefined;
      this._metricType = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupBy = value.groupBy;
      this._include = value.include;
      this._metricType = value.metricType;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

  // value - computed: false, optional: true, required: false
  private _value = new ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValue[] | cdktn.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetric[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetrics {
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#metric ObservabilityPipeline#metric}
  */
  readonly metric?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetric[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricToTerraform, true)(struct!.metric),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricToHclTerraform, true)(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricList(this, "metric", false);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetric[] | cdktn.IResolvable) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetrics[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValue {
  /**
  * Name of the log field containing the numeric value to increment the metric by (used only for `increment_by_field`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: string;
  /**
  * Metric value strategy: `increment_by_one` or `increment_by_field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#strategy ObservabilityPipeline#strategy}
  */
  readonly strategy: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValueToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    strategy: cdktn.stringToTerraform(struct!.strategy),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValueToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValue | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValueOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._strategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._strategy = value.strategy;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

export class ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValueList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValue[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValueOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetric {
  /**
  * Optional fields used to group the metric series.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#group_by ObservabilityPipeline#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Datadog filter query to match logs for metric generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * Type of metric to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#metric_type ObservabilityPipeline#metric_type}
  */
  readonly metricType: string;
  /**
  * Name of the custom metric to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValue[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    group_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupBy),
    include: cdktn.stringToTerraform(struct!.include),
    metric_type: cdktn.stringToTerraform(struct!.metricType),
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValueToTerraform, true)(struct!.value),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetric | cdktn.IResolvable): any {
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
    include: {
      value: cdktn.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktn.stringToHclTerraform(struct!.metricType),
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
    value: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetric | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetric | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupBy = undefined;
      this._include = undefined;
      this._metricType = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupBy = value.groupBy;
      this._include = value.include;
      this._metricType = value.metricType;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

  // value - computed: false, optional: true, required: false
  private _value = new ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricValue[] | cdktn.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetric[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetrics {
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#metric ObservabilityPipeline#metric}
  */
  readonly metric?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetric[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorGenerateMetricsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    metric: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricToTerraform, true)(struct!.metric),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorGenerateMetricsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    metric: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricToHclTerraform, true)(struct!.metric),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetrics | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetricList(this, "metric", false);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsMetric[] | cdktn.IResolvable) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetrics[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorGenerateMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRule {
  /**
  * The action to take on tags with matching keys. Valid values are `include`, `exclude`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#action ObservabilityPipeline#action}
  */
  readonly action: string;
  /**
  * A Datadog search query used to determine which metrics this rule targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * A list of tag keys to include or exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#keys ObservabilityPipeline#keys}
  */
  readonly keys: string[];
  /**
  * The processing mode for tag filtering. Valid values are `filter`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorMetricTagsRuleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action: cdktn.stringToTerraform(struct!.action),
    include: cdktn.stringToTerraform(struct!.include),
    keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.keys),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorMetricTagsRuleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action: {
      value: cdktn.stringToHclTerraform(struct!.action),
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
    keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._include = undefined;
      this._keys = undefined;
      this._mode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._include = value.include;
      this._keys = value.keys;
      this._mode = value.mode;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // keys - computed: false, optional: false, required: true
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
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

export class ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRuleList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRule[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRuleOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorMetricTags {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule?: ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRule[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorMetricTagsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorMetricTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    rule: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorMetricTagsRuleToTerraform, true)(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorMetricTagsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorMetricTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    rule: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorMetricTagsRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorMetricTags | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorMetricTags | cdktn.IResolvable | undefined) {
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
  private _rule = new ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRule[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorMetricTags[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTable {
  /**
  * The substring to match in the source value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#contains ObservabilityPipeline#contains}
  */
  readonly contains?: string;
  /**
  * The exact value to match in the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#equals ObservabilityPipeline#equals}
  */
  readonly equalTo?: string;
  /**
  * The source field to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#equals_source ObservabilityPipeline#equals_source}
  */
  readonly equalsSource?: string;
  /**
  * A regex pattern to match in the source value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#matches ObservabilityPipeline#matches}
  */
  readonly matches?: string;
  /**
  * A regex pattern that must not match the source value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#not_matches ObservabilityPipeline#not_matches}
  */
  readonly notMatches?: string;
  /**
  * The value to use when a match is found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value?: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTableToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    contains: cdktn.stringToTerraform(struct!.contains),
    equals: cdktn.stringToTerraform(struct!.equalTo),
    equals_source: cdktn.stringToTerraform(struct!.equalsSource),
    matches: cdktn.stringToTerraform(struct!.matches),
    not_matches: cdktn.stringToTerraform(struct!.notMatches),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTableToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    contains: {
      value: cdktn.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktn.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals_source: {
      value: cdktn.stringToHclTerraform(struct!.equalsSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matches: {
      value: cdktn.stringToHclTerraform(struct!.matches),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_matches: {
      value: cdktn.stringToHclTerraform(struct!.notMatches),
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

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTableOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._equalsSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalsSource = this._equalsSource;
    }
    if (this._matches !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches;
    }
    if (this._notMatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.notMatches = this._notMatches;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contains = undefined;
      this._equals = undefined;
      this._equalsSource = undefined;
      this._matches = undefined;
      this._notMatches = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contains = value.contains;
      this._equals = value.equalTo;
      this._equalsSource = value.equalsSource;
      this._matches = value.matches;
      this._notMatches = value.notMatches;
      this._value = value.value;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // equals_source - computed: false, optional: true, required: false
  private _equalsSource?: string; 
  public get equalsSource() {
    return this.getStringAttribute('equals_source');
  }
  public set equalsSource(value: string) {
    this._equalsSource = value;
  }
  public resetEqualsSource() {
    this._equalsSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalsSourceInput() {
    return this._equalsSource;
  }

  // matches - computed: false, optional: true, required: false
  private _matches?: string; 
  public get matches() {
    return this.getStringAttribute('matches');
  }
  public set matches(value: string) {
    this._matches = value;
  }
  public resetMatches() {
    this._matches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches;
  }

  // not_matches - computed: false, optional: true, required: false
  private _notMatches?: string; 
  public get notMatches() {
    return this.getStringAttribute('not_matches');
  }
  public set notMatches(value: string) {
    this._notMatches = value;
  }
  public resetNotMatches() {
    this._notMatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notMatchesInput() {
    return this._notMatches;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTableList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTable[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTableOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookup {
  /**
  * The default value to use if no lookup match is found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#default ObservabilityPipeline#default}
  */
  readonly default?: string;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#table ObservabilityPipeline#table}
  */
  readonly table?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTable[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default: cdktn.stringToTerraform(struct!.default),
    table: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTableToTerraform, true)(struct!.table),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default: {
      value: cdktn.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTableToHclTerraform, true)(struct!.table),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._table.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._table.internalValue = value.table;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // table - computed: false, optional: true, required: false
  private _table = new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTableList(this, "table", false);
  public get table() {
    return this._table;
  }
  public putTable(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupTable[] | cdktn.IResolvable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookup[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMapping {
  /**
  * The default value to use if the source field is missing or empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#default ObservabilityPipeline#default}
  */
  readonly default?: string;
  /**
  * The destination OCSF field path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#dest ObservabilityPipeline#dest}
  */
  readonly dest: string;
  /**
  * The source field path from the log event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#source ObservabilityPipeline#source}
  */
  readonly source?: string;
  /**
  * Multiple source field paths for combined mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#sources ObservabilityPipeline#sources}
  */
  readonly sources?: string[];
  /**
  * A static value to use for the destination field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value?: string;
  /**
  * lookup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#lookup ObservabilityPipeline#lookup}
  */
  readonly lookup?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookup[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default: cdktn.stringToTerraform(struct!.default),
    dest: cdktn.stringToTerraform(struct!.dest),
    source: cdktn.stringToTerraform(struct!.source),
    sources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sources),
    value: cdktn.stringToTerraform(struct!.value),
    lookup: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupToTerraform, true)(struct!.lookup),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default: {
      value: cdktn.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest: {
      value: cdktn.stringToHclTerraform(struct!.dest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lookup: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupToHclTerraform, true)(struct!.lookup),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._dest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dest = this._dest;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._lookup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookup = this._lookup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._dest = undefined;
      this._source = undefined;
      this._sources = undefined;
      this._value = undefined;
      this._lookup.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._dest = value.dest;
      this._source = value.source;
      this._sources = value.sources;
      this._value = value.value;
      this._lookup.internalValue = value.lookup;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // dest - computed: false, optional: false, required: true
  private _dest?: string; 
  public get dest() {
    return this.getStringAttribute('dest');
  }
  public set dest(value: string) {
    this._dest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destInput() {
    return this._dest;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: string[]; 
  public get sources() {
    return this.getListAttribute('sources');
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // lookup - computed: false, optional: true, required: false
  private _lookup = new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookupList(this, "lookup", false);
  public get lookup() {
    return this._lookup;
  }
  public putLookup(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingLookup[] | cdktn.IResolvable) {
    this._lookup.internalValue = value;
  }
  public resetLookup() {
    this._lookup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupInput() {
    return this._lookup.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMapping[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadata {
  /**
  * The OCSF event class name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#class ObservabilityPipeline#class}
  */
  readonly class: string;
  /**
  * A list of OCSF profiles to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#profiles ObservabilityPipeline#profiles}
  */
  readonly profiles?: string[];
  /**
  * The OCSF schema version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#version ObservabilityPipeline#version}
  */
  readonly version: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadataToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    class: cdktn.stringToTerraform(struct!.class),
    profiles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.profiles),
    version: cdktn.stringToTerraform(struct!.version),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadataToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    class: {
      value: cdktn.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profiles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.profiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    version: {
      value: cdktn.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadata | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadata | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._profiles = undefined;
      this._version = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._profiles = value.profiles;
      this._version = value.version;
    }
  }

  // class - computed: false, optional: false, required: true
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadataList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadata[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadataOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMapping {
  /**
  * The version of the custom mapping configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#version ObservabilityPipeline#version}
  */
  readonly version: number;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#mapping ObservabilityPipeline#mapping}
  */
  readonly mapping?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMapping[] | cdktn.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#metadata ObservabilityPipeline#metadata}
  */
  readonly metadata?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadata[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    version: cdktn.numberToTerraform(struct!.version),
    mapping: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingToTerraform, true)(struct!.mapping),
    metadata: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadataToTerraform, true)(struct!.metadata),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    version: {
      value: cdktn.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mapping: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingToHclTerraform, true)(struct!.mapping),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingList",
    },
    metadata: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._mapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
      this._mapping.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
      this._mapping.internalValue = value.mapping;
      this._metadata.internalValue = value.metadata;
    }
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

  // mapping - computed: false, optional: true, required: false
  private _mapping = new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMappingList(this, "mapping", false);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMapping[] | cdktn.IResolvable) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingMetadata[] | cdktn.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMapping[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMapping {
  /**
  * Search query for selecting which logs the mapping applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * Predefined library mapping for log transformation. Use this or custom_mapping, not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#library_mapping ObservabilityPipeline#library_mapping}
  */
  readonly libraryMapping?: string;
  /**
  * custom_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#custom_mapping ObservabilityPipeline#custom_mapping}
  */
  readonly customMapping?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMapping[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include: cdktn.stringToTerraform(struct!.include),
    library_mapping: cdktn.stringToTerraform(struct!.libraryMapping),
    custom_mapping: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingToTerraform, true)(struct!.customMapping),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include: {
      value: cdktn.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    library_mapping: {
      value: cdktn.stringToHclTerraform(struct!.libraryMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_mapping: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingToHclTerraform, true)(struct!.customMapping),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMapping | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._libraryMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.libraryMapping = this._libraryMapping;
    }
    if (this._customMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMapping = this._customMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._include = undefined;
      this._libraryMapping = undefined;
      this._customMapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._include = value.include;
      this._libraryMapping = value.libraryMapping;
      this._customMapping.internalValue = value.customMapping;
    }
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

  // library_mapping - computed: false, optional: true, required: false
  private _libraryMapping?: string; 
  public get libraryMapping() {
    return this.getStringAttribute('library_mapping');
  }
  public set libraryMapping(value: string) {
    this._libraryMapping = value;
  }
  public resetLibraryMapping() {
    this._libraryMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryMappingInput() {
    return this._libraryMapping;
  }

  // custom_mapping - computed: false, optional: true, required: false
  private _customMapping = new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMappingList(this, "custom_mapping", false);
  public get customMapping() {
    return this._customMapping;
  }
  public putCustomMapping(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingCustomMapping[] | cdktn.IResolvable) {
    this._customMapping.internalValue = value;
  }
  public resetCustomMapping() {
    this._customMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMappingInput() {
    return this._customMapping.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMapping[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapper {
  /**
  * Whether to keep an event that does not match any of the mapping filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#keep_unmatched ObservabilityPipeline#keep_unmatched}
  */
  readonly keepUnmatched?: boolean | cdktn.IResolvable;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#mapping ObservabilityPipeline#mapping}
  */
  readonly mapping?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMapping[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapper | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    keep_unmatched: cdktn.booleanToTerraform(struct!.keepUnmatched),
    mapping: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingToTerraform, true)(struct!.mapping),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapper | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    keep_unmatched: {
      value: cdktn.booleanToHclTerraform(struct!.keepUnmatched),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mapping: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingToHclTerraform, true)(struct!.mapping),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapper | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepUnmatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepUnmatched = this._keepUnmatched;
    }
    if (this._mapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapper | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepUnmatched = undefined;
      this._mapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepUnmatched = value.keepUnmatched;
      this._mapping.internalValue = value.mapping;
    }
  }

  // keep_unmatched - computed: false, optional: true, required: false
  private _keepUnmatched?: boolean | cdktn.IResolvable; 
  public get keepUnmatched() {
    return this.getBooleanAttribute('keep_unmatched');
  }
  public set keepUnmatched(value: boolean | cdktn.IResolvable) {
    this._keepUnmatched = value;
  }
  public resetKeepUnmatched() {
    this._keepUnmatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepUnmatchedInput() {
    return this._keepUnmatched;
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping = new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingList(this, "mapping", false);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMapping[] | cdktn.IResolvable) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapper[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRule {
  /**
  * The name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The definition of the Grok rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRuleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    rule: cdktn.stringToTerraform(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRuleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRule | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rule = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rule = value.rule;
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

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRuleList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRule[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRuleOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRule {
  /**
  * The name of the helper Grok rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The definition of the helper Grok rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRuleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    rule: cdktn.stringToTerraform(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRuleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRule | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rule = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rule = value.rule;
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

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRuleList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRule[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRuleOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRule {
  /**
  * A Datadog search query used to determine which logs this Grok rule targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * match_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#match_rule ObservabilityPipeline#match_rule}
  */
  readonly matchRule?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRule[] | cdktn.IResolvable;
  /**
  * support_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#support_rule ObservabilityPipeline#support_rule}
  */
  readonly supportRule?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRule[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    include: cdktn.stringToTerraform(struct!.include),
    match_rule: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRuleToTerraform, true)(struct!.matchRule),
    support_rule: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRuleToTerraform, true)(struct!.supportRule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    include: {
      value: cdktn.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_rule: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRuleToHclTerraform, true)(struct!.matchRule),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRuleList",
    },
    support_rule: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRuleToHclTerraform, true)(struct!.supportRule),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._matchRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRule = this._matchRule?.internalValue;
    }
    if (this._supportRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportRule = this._supportRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._include = undefined;
      this._matchRule.internalValue = undefined;
      this._supportRule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._include = value.include;
      this._matchRule.internalValue = value.matchRule;
      this._supportRule.internalValue = value.supportRule;
    }
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

  // match_rule - computed: false, optional: true, required: false
  private _matchRule = new ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRuleList(this, "match_rule", false);
  public get matchRule() {
    return this._matchRule;
  }
  public putMatchRule(value: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleMatchRule[] | cdktn.IResolvable) {
    this._matchRule.internalValue = value;
  }
  public resetMatchRule() {
    this._matchRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRuleInput() {
    return this._matchRule.internalValue;
  }

  // support_rule - computed: false, optional: true, required: false
  private _supportRule = new ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRuleList(this, "support_rule", false);
  public get supportRule() {
    return this._supportRule;
  }
  public putSupportRule(value: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleSupportRule[] | cdktn.IResolvable) {
    this._supportRule.internalValue = value;
  }
  public resetSupportRule() {
    this._supportRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportRuleInput() {
    return this._supportRule.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRule[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRule {
  /**
  * The name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The definition of the Grok rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRuleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    rule: cdktn.stringToTerraform(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRuleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRule | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rule = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rule = value.rule;
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

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRuleList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRule[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRuleOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRule {
  /**
  * The name of the helper Grok rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The definition of the helper Grok rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRuleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    rule: cdktn.stringToTerraform(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRuleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRule | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rule = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rule = value.rule;
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

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRuleList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRule[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRuleOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRule {
  /**
  * The value of the source field in log events which should be processed by the Grok rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#source ObservabilityPipeline#source}
  */
  readonly source: string;
  /**
  * match_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#match_rule ObservabilityPipeline#match_rule}
  */
  readonly matchRule?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRule[] | cdktn.IResolvable;
  /**
  * support_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#support_rule ObservabilityPipeline#support_rule}
  */
  readonly supportRule?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRule[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    source: cdktn.stringToTerraform(struct!.source),
    match_rule: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRuleToTerraform, true)(struct!.matchRule),
    support_rule: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRuleToTerraform, true)(struct!.supportRule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    source: {
      value: cdktn.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_rule: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRuleToHclTerraform, true)(struct!.matchRule),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRuleList",
    },
    support_rule: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRuleToHclTerraform, true)(struct!.supportRule),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRule | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._matchRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRule = this._matchRule?.internalValue;
    }
    if (this._supportRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportRule = this._supportRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRule | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._matchRule.internalValue = undefined;
      this._supportRule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._matchRule.internalValue = value.matchRule;
      this._supportRule.internalValue = value.supportRule;
    }
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

  // match_rule - computed: false, optional: true, required: false
  private _matchRule = new ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRuleList(this, "match_rule", false);
  public get matchRule() {
    return this._matchRule;
  }
  public putMatchRule(value: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRule[] | cdktn.IResolvable) {
    this._matchRule.internalValue = value;
  }
  public resetMatchRule() {
    this._matchRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRuleInput() {
    return this._matchRule.internalValue;
  }

  // support_rule - computed: false, optional: true, required: false
  private _supportRule = new ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRuleList(this, "support_rule", false);
  public get supportRule() {
    return this._supportRule;
  }
  public putSupportRule(value: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRule[] | cdktn.IResolvable) {
    this._supportRule.internalValue = value;
  }
  public resetSupportRule() {
    this._supportRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportRuleInput() {
    return this._supportRule.internalValue;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRule[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorParseGrok {
  /**
  * If set to `true`, disables the default Grok rules provided by Datadog. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#disable_library_rules ObservabilityPipeline#disable_library_rules}
  */
  readonly disableLibraryRules?: boolean | cdktn.IResolvable;
  /**
  * The log field to parse with the Grok rules. Defaults to `"message"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: string;
  /**
  * include_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#include_rule ObservabilityPipeline#include_rule}
  */
  readonly includeRule?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRule[] | cdktn.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRule[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseGrokToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrok | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    disable_library_rules: cdktn.booleanToTerraform(struct!.disableLibraryRules),
    field: cdktn.stringToTerraform(struct!.field),
    include_rule: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleToTerraform, true)(struct!.includeRule),
    rule: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleToTerraform, true)(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorParseGrokToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrok | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    disable_library_rules: {
      value: cdktn.booleanToHclTerraform(struct!.disableLibraryRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_rule: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleToHclTerraform, true)(struct!.includeRule),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleList",
    },
    rule: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorParseGrokOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorParseGrok | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableLibraryRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLibraryRules = this._disableLibraryRules;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._includeRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRule = this._includeRule?.internalValue;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorParseGrok | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableLibraryRules = undefined;
      this._field = undefined;
      this._includeRule.internalValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableLibraryRules = value.disableLibraryRules;
      this._field = value.field;
      this._includeRule.internalValue = value.includeRule;
      this._rule.internalValue = value.rule;
    }
  }

  // disable_library_rules - computed: true, optional: true, required: false
  private _disableLibraryRules?: boolean | cdktn.IResolvable; 
  public get disableLibraryRules() {
    return this.getBooleanAttribute('disable_library_rules');
  }
  public set disableLibraryRules(value: boolean | cdktn.IResolvable) {
    this._disableLibraryRules = value;
  }
  public resetDisableLibraryRules() {
    this._disableLibraryRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLibraryRulesInput() {
    return this._disableLibraryRules;
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // include_rule - computed: false, optional: true, required: false
  private _includeRule = new ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRuleList(this, "include_rule", false);
  public get includeRule() {
    return this._includeRule;
  }
  public putIncludeRule(value: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokIncludeRule[] | cdktn.IResolvable) {
    this._includeRule.internalValue = value;
  }
  public resetIncludeRule() {
    this._includeRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRuleInput() {
    return this._includeRule.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRule[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorParseGrokList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorParseGrok[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorParseGrokOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorParseGrokOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorParseJson {
  /**
  * The field to parse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseJsonToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorParseJsonToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseJson | cdktn.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorParseJsonOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorParseJson | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorParseJson | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
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
}

export class ObservabilityPipelineConfigProcessorGroupProcessorParseJsonList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorParseJson[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorParseJsonOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorParseJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorParseXml {
  /**
  * Whether to always store text inside an object using the text key even when no attributes exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#always_use_text_key ObservabilityPipeline#always_use_text_key}
  */
  readonly alwaysUseTextKey?: boolean | cdktn.IResolvable;
  /**
  * The prefix to use for XML attributes in the parsed output. If the field is left empty, the original attribute key is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#attr_prefix ObservabilityPipeline#attr_prefix}
  */
  readonly attrPrefix?: string;
  /**
  * The path to the log field on which you want to parse XML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field: string;
  /**
  * Whether to include XML attributes in the parsed output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#include_attr ObservabilityPipeline#include_attr}
  */
  readonly includeAttr?: boolean | cdktn.IResolvable;
  /**
  * Whether to parse boolean values from strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#parse_bool ObservabilityPipeline#parse_bool}
  */
  readonly parseBool?: boolean | cdktn.IResolvable;
  /**
  * Whether to parse null values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#parse_null ObservabilityPipeline#parse_null}
  */
  readonly parseNull?: boolean | cdktn.IResolvable;
  /**
  * Whether to parse numeric values from strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#parse_number ObservabilityPipeline#parse_number}
  */
  readonly parseNumber?: boolean | cdktn.IResolvable;
  /**
  * The key name to use for the text node when XML attributes are appended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/observability_pipeline#text_key ObservabilityPipeline#text_key}
  */
  readonly textKey?: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseXmlToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseXml | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    always_use_text_key: cdktn.booleanToTerraform(struct!.alwaysUseTextKey),
    attr_prefix: cdktn.stringToTerraform(struct!.attrPrefix),
    field: cdktn.stringToTerraform(struct!.field),
    include_attr: cdktn.booleanToTerraform(struct!.includeAttr),
    parse_bool: cdktn.booleanToTerraform(struct!.parseBool),
    parse_null: cdktn.booleanToTerraform(struct!.parseNull),
    parse_number: cdktn.booleanToTerraform(struct!.parseNumber),
    text_key: cdktn.stringToTerraform(struct!.textKey),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorParseXmlToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseXml | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    always_use_text_key: {
      value: cdktn.booleanToHclTerraform(struct!.alwaysUseTextKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    attr_prefix: {
      value: cdktn.stringToHclTerraform(struct!.attrPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_attr: {
      value: cdktn.booleanToHclTerraform(struct!.includeAttr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parse_bool: {
      value: cdktn.booleanToHclTerraform(struct!.parseBool),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parse_null: {
      value: cdktn.booleanToHclTerraform(struct!.parseNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parse_number: {
      value: cdktn.booleanToHclTerraform(struct!.parseNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text_key: {
      value: cdktn.stringToHclTerraform(struct!.textKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigProcessorGroupProcessorParseXmlOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorParseXml | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysUseTextKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysUseTextKey = this._alwaysUseTextKey;
    }
    if (this._attrPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrPrefix = this._attrPrefix;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._includeAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAttr = this._includeAttr;
    }
    if (this._parseBool !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseBool = this._parseBool;
    }
    if (this._parseNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseNull = this._parseNull;
    }
    if (this._parseNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseNumber = this._parseNumber;
    }
    if (this._textKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.textKey = this._textKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorParseXml | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysUseTextKey = undefined;
      this._attrPrefix = undefined;
      this._field = undefined;
      this._includeAttr = undefined;
      this._parseBool = undefined;
      this._parseNull = undefined;
      this._parseNumber = undefined;
      this._textKey = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysUseTextKey = value.alwaysUseTextKey;
      this._attrPrefix = value.attrPrefix;
      this._field = value.field;
      this._includeAttr = value.includeAttr;
      this._parseBool = value.parseBool;
      this._parseNull = value.parseNull;
      this._parseNumber = value.parseNumber;
      this._textKey = value.textKey;
    }
  }

  // always_use_text_key - computed: false, optional: true, required: false
  private _alwaysUseTextKey?: boolean | cdktn.IResolvable; 
  public get alwaysUseTextKey() {
    return this.getBooleanAttribute('always_use_text_key');
  }
  public set alwaysUseTextKey(value: boolean | cdktn.IResolvable) {
    this._alwaysUseTextKey = value;
  }
  public resetAlwaysUseTextKey() {
    this._alwaysUseTextKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysUseTextKeyInput() {
    return this._alwaysUseTextKey;
  }

  // attr_prefix - computed: false, optional: true, required: false
  private _attrPrefix?: string; 
  public get attrPrefix() {
    return this.getStringAttribute('attr_prefix');
  }
  public set attrPrefix(value: string) {
    this._attrPrefix = value;
  }
  public resetAttrPrefix() {
    this._attrPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrPrefixInput() {
    return this._attrPrefix;
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

  // include_attr - computed: false, optional: true, required: false
  private _includeAttr?: boolean | cdktn.IResolvable; 
  public get includeAttr() {
    return this.getBooleanAttribute('include_attr');
  }
  public set includeAttr(value: boolean | cdktn.IResolvable) {
    this._includeAttr = value;
  }
  public resetIncludeAttr() {
    this._includeAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAttrInput() {
    return this._includeAttr;
  }

  // parse_bool - computed: false, optional: true, required: false
  private _parseBool?: boolean | cdktn.IResolvable; 
  public get parseBool() {
    return this.getBooleanAttribute('parse_bool');
  }
  public set parseBool(value: boolean | cdktn.IResolvable) {
    this._parseBool = value;
  }
  public resetParseBool() {
    this._parseBool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseBoolInput() {
    return this._parseBool;
  }

  // parse_null - computed: false, optional: true, required: false
  private _parseNull?: boolean | cdktn.IResolvable; 
  public get parseNull() {
    return this.getBooleanAttribute('parse_null');
  }
  public set parseNull(value: boolean | cdktn.IResolvable) {
    this._parseNull = value;
  }
  public resetParseNull() {
    this._parseNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseNullInput() {
    return this._parseNull;
  }

  // parse_number - computed: false, optional: true, required: false
  private _parseNumber?: boolean | cdktn.IResolvable; 
  public get parseNumber() {
    return this.getBooleanAttribute('parse_number');
  }
  public set parseNumber(value: boolean | cdktn.IResolvable) {
    this._parseNumber = value;
  }
  public resetParseNumber() {
    this._parseNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseNumberInput() {
    return this._parseNumber;
  }

  // text_key - computed: false, optional: true, required: false
  private _textKey?: string; 
  public get textKey() {
    return this.getStringAttribute('text_key');
  }
  public set textKey(value: string) {
    this._textKey = value;
  }
  public resetTextKey() {
    this._textKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textKeyInput() {
    return this._textKey;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorParseXmlList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorParseXml[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorParseXmlOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorParseXmlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimit {
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

export function observabilityPipelineConfigProcessorGroupProcessorQuotaLimitToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enforce: cdktn.stringToTerraform(struct!.enforce),
    limit: cdktn.numberToTerraform(struct!.limit),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorQuotaLimitToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimit | cdktn.IResolvable): any {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimitOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimit | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimit | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimitList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimit[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimitOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
