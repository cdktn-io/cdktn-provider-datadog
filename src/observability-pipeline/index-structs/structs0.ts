/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
export interface ObservabilityPipelineConfigDestinationAmazonOpensearchAuth {
  /**
  * ARN of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#assume_role ObservabilityPipeline#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * AWS region override (if applicable).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#aws_region ObservabilityPipeline#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * External ID for assumed role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#external_id ObservabilityPipeline#external_id}
  */
  readonly externalId?: string;
  /**
  * Session name for assumed role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#session_name ObservabilityPipeline#session_name}
  */
  readonly sessionName?: string;
  /**
  * The authentication strategy to use (e.g. aws or basic).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#strategy ObservabilityPipeline#strategy}
  */
  readonly strategy: string;
}

export function observabilityPipelineConfigDestinationAmazonOpensearchAuthToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonOpensearchAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assume_role: cdktn.stringToTerraform(struct!.assumeRole),
    aws_region: cdktn.stringToTerraform(struct!.awsRegion),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    session_name: cdktn.stringToTerraform(struct!.sessionName),
    strategy: cdktn.stringToTerraform(struct!.strategy),
  }
}


export function observabilityPipelineConfigDestinationAmazonOpensearchAuthToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonOpensearchAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assume_role: {
      value: cdktn.stringToHclTerraform(struct!.assumeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktn.stringToHclTerraform(struct!.awsRegion),
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

export class ObservabilityPipelineConfigDestinationAmazonOpensearchAuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonOpensearchAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRole = this._assumeRole;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._sessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionName = this._sessionName;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonOpensearchAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assumeRole = undefined;
      this._awsRegion = undefined;
      this._externalId = undefined;
      this._sessionName = undefined;
      this._strategy = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assumeRole = value.assumeRole;
      this._awsRegion = value.awsRegion;
      this._externalId = value.externalId;
      this._sessionName = value.sessionName;
      this._strategy = value.strategy;
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

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
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

export class ObservabilityPipelineConfigDestinationAmazonOpensearchAuthList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonOpensearchAuth[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonOpensearchAuthOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonOpensearchAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonOpensearchBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationAmazonOpensearchBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonOpensearchBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationAmazonOpensearchBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonOpensearchBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationAmazonOpensearchBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonOpensearchBufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonOpensearchBufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationAmazonOpensearchBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonOpensearchBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonOpensearchBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonOpensearchBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonOpensearchBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationAmazonOpensearchBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonOpensearchBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationAmazonOpensearchBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonOpensearchBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationAmazonOpensearchBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonOpensearchBufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonOpensearchBufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationAmazonOpensearchBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonOpensearchBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonOpensearchBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonOpensearchBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonOpensearchBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationAmazonOpensearchBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationAmazonOpensearchBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationAmazonOpensearchBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonOpensearchBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonOpensearchBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonOpensearchBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationAmazonOpensearchBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonOpensearchBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonOpensearchBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonOpensearchBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonOpensearchBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonOpensearchBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationAmazonOpensearchBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonOpensearchBuffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonOpensearchBuffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationAmazonOpensearchBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationAmazonOpensearchBufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationAmazonOpensearchBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationAmazonOpensearchBufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationAmazonOpensearchBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonOpensearchBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonOpensearchBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonOpensearchBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonOpensearch {
  /**
  * The index or datastream to write logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#bulk_index ObservabilityPipeline#bulk_index}
  */
  readonly bulkIndex?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationAmazonOpensearchAuth[] | cdktn.IResolvable;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationAmazonOpensearchBuffer[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationAmazonOpensearchToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonOpensearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bulk_index: cdktn.stringToTerraform(struct!.bulkIndex),
    auth: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonOpensearchAuthToTerraform, true)(struct!.auth),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonOpensearchBufferToTerraform, true)(struct!.buffer),
  }
}


export function observabilityPipelineConfigDestinationAmazonOpensearchToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonOpensearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bulk_index: {
      value: cdktn.stringToHclTerraform(struct!.bulkIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonOpensearchAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonOpensearchAuthList",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonOpensearchBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonOpensearchBufferList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationAmazonOpensearchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonOpensearch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bulkIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bulkIndex = this._bulkIndex;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonOpensearch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bulkIndex = undefined;
      this._auth.internalValue = undefined;
      this._buffer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bulkIndex = value.bulkIndex;
      this._auth.internalValue = value.auth;
      this._buffer.internalValue = value.buffer;
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

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigDestinationAmazonOpensearchAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigDestinationAmazonOpensearchAuth[] | cdktn.IResolvable) {
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
  private _buffer = new ObservabilityPipelineConfigDestinationAmazonOpensearchBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationAmazonOpensearchBuffer[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationAmazonOpensearchList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonOpensearch[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonOpensearchOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonOpensearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonS3Auth {
  /**
  * The Amazon Resource Name (ARN) of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#assume_role ObservabilityPipeline#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * A unique identifier for cross-account role assumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#external_id ObservabilityPipeline#external_id}
  */
  readonly externalId?: string;
  /**
  * A session identifier used for logging and tracing the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#session_name ObservabilityPipeline#session_name}
  */
  readonly sessionName?: string;
}

export function observabilityPipelineConfigDestinationAmazonS3AuthToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3Auth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assume_role: cdktn.stringToTerraform(struct!.assumeRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    session_name: cdktn.stringToTerraform(struct!.sessionName),
  }
}


export function observabilityPipelineConfigDestinationAmazonS3AuthToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3Auth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationAmazonS3AuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonS3Auth | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonS3Auth | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationAmazonS3AuthList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonS3Auth[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3AuthOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3AuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonS3BufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationAmazonS3BufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3BufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationAmazonS3BufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3BufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationAmazonS3BufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonS3BufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonS3BufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationAmazonS3BufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonS3BufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3BufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3BufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonS3BufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationAmazonS3BufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3BufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationAmazonS3BufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3BufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationAmazonS3BufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonS3BufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonS3BufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationAmazonS3BufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonS3BufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3BufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3BufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonS3Buffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationAmazonS3BufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationAmazonS3BufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationAmazonS3BufferToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3Buffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonS3BufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonS3BufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationAmazonS3BufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3Buffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonS3BufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonS3BufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonS3BufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonS3BufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationAmazonS3BufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonS3Buffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonS3Buffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationAmazonS3BufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationAmazonS3BufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationAmazonS3BufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationAmazonS3BufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationAmazonS3BufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonS3Buffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3BufferOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3BufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonS3 {
  /**
  * S3 bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#bucket ObservabilityPipeline#bucket}
  */
  readonly bucket: string;
  /**
  * Prefix for object keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_prefix ObservabilityPipeline#key_prefix}
  */
  readonly keyPrefix: string;
  /**
  * AWS region of the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
  /**
  * S3 storage class. Valid values are `STANDARD`, `REDUCED_REDUNDANCY`, `INTELLIGENT_TIERING`, `STANDARD_IA`, `EXPRESS_ONEZONE`, `ONEZONE_IA`, `GLACIER`, `GLACIER_IR`, `DEEP_ARCHIVE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#storage_class ObservabilityPipeline#storage_class}
  */
  readonly storageClass: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationAmazonS3Auth[] | cdktn.IResolvable;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationAmazonS3Buffer[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationAmazonS3ToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
    region: cdktn.stringToTerraform(struct!.region),
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
    auth: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonS3AuthToTerraform, true)(struct!.auth),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonS3BufferToTerraform, true)(struct!.buffer),
  }
}


export function observabilityPipelineConfigDestinationAmazonS3ToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
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
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonS3AuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonS3AuthList",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonS3BufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonS3BufferList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationAmazonS3OutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonS3 | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonS3 | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPrefix = undefined;
      this._region = undefined;
      this._storageClass = undefined;
      this._auth.internalValue = undefined;
      this._buffer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPrefix = value.keyPrefix;
      this._region = value.region;
      this._storageClass = value.storageClass;
      this._auth.internalValue = value.auth;
      this._buffer.internalValue = value.buffer;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key_prefix - computed: false, optional: false, required: true
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
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

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigDestinationAmazonS3AuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigDestinationAmazonS3Auth[] | cdktn.IResolvable) {
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
  private _buffer = new ObservabilityPipelineConfigDestinationAmazonS3BufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationAmazonS3Buffer[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationAmazonS3List extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonS3[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3OutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonS3GenericAuth {
  /**
  * The Amazon Resource Name (ARN) of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#assume_role ObservabilityPipeline#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * A unique identifier for cross-account role assumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#external_id ObservabilityPipeline#external_id}
  */
  readonly externalId?: string;
  /**
  * A session identifier used for logging and tracing the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#session_name ObservabilityPipeline#session_name}
  */
  readonly sessionName?: string;
}

export function observabilityPipelineConfigDestinationAmazonS3GenericAuthToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3GenericAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assume_role: cdktn.stringToTerraform(struct!.assumeRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    session_name: cdktn.stringToTerraform(struct!.sessionName),
  }
}


export function observabilityPipelineConfigDestinationAmazonS3GenericAuthToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3GenericAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationAmazonS3GenericAuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonS3GenericAuth | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonS3GenericAuth | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationAmazonS3GenericAuthList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonS3GenericAuth[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3GenericAuthOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3GenericAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonS3GenericBatchSettings {
  /**
  * Maximum batch size in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#batch_size ObservabilityPipeline#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Maximum number of seconds to wait before flushing the batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#timeout_secs ObservabilityPipeline#timeout_secs}
  */
  readonly timeoutSecs?: number;
}

export function observabilityPipelineConfigDestinationAmazonS3GenericBatchSettingsToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3GenericBatchSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size: cdktn.numberToTerraform(struct!.batchSize),
    timeout_secs: cdktn.numberToTerraform(struct!.timeoutSecs),
  }
}


export function observabilityPipelineConfigDestinationAmazonS3GenericBatchSettingsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3GenericBatchSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size: {
      value: cdktn.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_secs: {
      value: cdktn.numberToHclTerraform(struct!.timeoutSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationAmazonS3GenericBatchSettingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonS3GenericBatchSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._timeoutSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSecs = this._timeoutSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonS3GenericBatchSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._batchSize = undefined;
      this._timeoutSecs = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._batchSize = value.batchSize;
      this._timeoutSecs = value.timeoutSecs;
    }
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // timeout_secs - computed: false, optional: true, required: false
  private _timeoutSecs?: number; 
  public get timeoutSecs() {
    return this.getNumberAttribute('timeout_secs');
  }
  public set timeoutSecs(value: number) {
    this._timeoutSecs = value;
  }
  public resetTimeoutSecs() {
    this._timeoutSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecsInput() {
    return this._timeoutSecs;
  }
}

export class ObservabilityPipelineConfigDestinationAmazonS3GenericBatchSettingsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonS3GenericBatchSettings[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3GenericBatchSettingsOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3GenericBatchSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonS3GenericBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationAmazonS3GenericBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3GenericBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationAmazonS3GenericBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3GenericBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationAmazonS3GenericBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonS3GenericBufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonS3GenericBufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationAmazonS3GenericBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonS3GenericBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3GenericBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3GenericBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonS3GenericBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationAmazonS3GenericBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3GenericBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationAmazonS3GenericBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3GenericBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationAmazonS3GenericBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonS3GenericBufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonS3GenericBufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationAmazonS3GenericBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonS3GenericBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3GenericBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3GenericBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonS3GenericBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationAmazonS3GenericBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationAmazonS3GenericBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationAmazonS3GenericBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3GenericBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonS3GenericBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonS3GenericBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationAmazonS3GenericBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3GenericBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonS3GenericBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonS3GenericBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonS3GenericBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonS3GenericBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationAmazonS3GenericBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonS3GenericBuffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonS3GenericBuffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationAmazonS3GenericBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationAmazonS3GenericBufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationAmazonS3GenericBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationAmazonS3GenericBufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationAmazonS3GenericBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonS3GenericBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3GenericBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3GenericBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonS3GenericCompression {
  /**
  * Compression algorithm. Valid values are `gzip`, `zstd`, `snappy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#algorithm ObservabilityPipeline#algorithm}
  */
  readonly algorithm: string;
  /**
  * Compression level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#level ObservabilityPipeline#level}
  */
  readonly level?: number;
}

export function observabilityPipelineConfigDestinationAmazonS3GenericCompressionToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3GenericCompression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktn.stringToTerraform(struct!.algorithm),
    level: cdktn.numberToTerraform(struct!.level),
  }
}


export function observabilityPipelineConfigDestinationAmazonS3GenericCompressionToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3GenericCompression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktn.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktn.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationAmazonS3GenericCompressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonS3GenericCompression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonS3GenericCompression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._level = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._level = value.level;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class ObservabilityPipelineConfigDestinationAmazonS3GenericCompressionList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonS3GenericCompression[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3GenericCompressionOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3GenericCompressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonS3GenericEncoding {
  /**
  * The encoding type. Valid values are `json`, `parquet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#type ObservabilityPipeline#type}
  */
  readonly type: string;
}

export function observabilityPipelineConfigDestinationAmazonS3GenericEncodingToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3GenericEncoding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function observabilityPipelineConfigDestinationAmazonS3GenericEncodingToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3GenericEncoding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ObservabilityPipelineConfigDestinationAmazonS3GenericEncodingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonS3GenericEncoding | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonS3GenericEncoding | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class ObservabilityPipelineConfigDestinationAmazonS3GenericEncodingList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonS3GenericEncoding[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3GenericEncodingOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3GenericEncodingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonS3Generic {
  /**
  * S3 bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#bucket ObservabilityPipeline#bucket}
  */
  readonly bucket: string;
  /**
  * Optional prefix for object keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_prefix ObservabilityPipeline#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * AWS region of the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
  /**
  * S3 storage class. Valid values are `STANDARD`, `REDUCED_REDUNDANCY`, `INTELLIGENT_TIERING`, `STANDARD_IA`, `EXPRESS_ONEZONE`, `ONEZONE_IA`, `GLACIER`, `GLACIER_IR`, `DEEP_ARCHIVE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#storage_class ObservabilityPipeline#storage_class}
  */
  readonly storageClass: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationAmazonS3GenericAuth[] | cdktn.IResolvable;
  /**
  * batch_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#batch_settings ObservabilityPipeline#batch_settings}
  */
  readonly batchSettings?: ObservabilityPipelineConfigDestinationAmazonS3GenericBatchSettings[] | cdktn.IResolvable;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationAmazonS3GenericBuffer[] | cdktn.IResolvable;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#compression ObservabilityPipeline#compression}
  */
  readonly compression?: ObservabilityPipelineConfigDestinationAmazonS3GenericCompression[] | cdktn.IResolvable;
  /**
  * encoding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding?: ObservabilityPipelineConfigDestinationAmazonS3GenericEncoding[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationAmazonS3GenericToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3Generic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
    region: cdktn.stringToTerraform(struct!.region),
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
    auth: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonS3GenericAuthToTerraform, true)(struct!.auth),
    batch_settings: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonS3GenericBatchSettingsToTerraform, true)(struct!.batchSettings),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonS3GenericBufferToTerraform, true)(struct!.buffer),
    compression: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonS3GenericCompressionToTerraform, true)(struct!.compression),
    encoding: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonS3GenericEncodingToTerraform, true)(struct!.encoding),
  }
}


export function observabilityPipelineConfigDestinationAmazonS3GenericToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonS3Generic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
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
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonS3GenericAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonS3GenericAuthList",
    },
    batch_settings: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonS3GenericBatchSettingsToHclTerraform, true)(struct!.batchSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonS3GenericBatchSettingsList",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonS3GenericBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonS3GenericBufferList",
    },
    compression: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonS3GenericCompressionToHclTerraform, true)(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonS3GenericCompressionList",
    },
    encoding: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonS3GenericEncodingToHclTerraform, true)(struct!.encoding),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonS3GenericEncodingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationAmazonS3GenericOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonS3Generic | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._batchSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSettings = this._batchSettings?.internalValue;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._encoding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonS3Generic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._keyPrefix = undefined;
      this._region = undefined;
      this._storageClass = undefined;
      this._auth.internalValue = undefined;
      this._batchSettings.internalValue = undefined;
      this._buffer.internalValue = undefined;
      this._compression.internalValue = undefined;
      this._encoding.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._keyPrefix = value.keyPrefix;
      this._region = value.region;
      this._storageClass = value.storageClass;
      this._auth.internalValue = value.auth;
      this._batchSettings.internalValue = value.batchSettings;
      this._buffer.internalValue = value.buffer;
      this._compression.internalValue = value.compression;
      this._encoding.internalValue = value.encoding;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
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

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigDestinationAmazonS3GenericAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigDestinationAmazonS3GenericAuth[] | cdktn.IResolvable) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // batch_settings - computed: false, optional: true, required: false
  private _batchSettings = new ObservabilityPipelineConfigDestinationAmazonS3GenericBatchSettingsList(this, "batch_settings", false);
  public get batchSettings() {
    return this._batchSettings;
  }
  public putBatchSettings(value: ObservabilityPipelineConfigDestinationAmazonS3GenericBatchSettings[] | cdktn.IResolvable) {
    this._batchSettings.internalValue = value;
  }
  public resetBatchSettings() {
    this._batchSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSettingsInput() {
    return this._batchSettings.internalValue;
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationAmazonS3GenericBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationAmazonS3GenericBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new ObservabilityPipelineConfigDestinationAmazonS3GenericCompressionList(this, "compression", false);
  public get compression() {
    return this._compression;
  }
  public putCompression(value: ObservabilityPipelineConfigDestinationAmazonS3GenericCompression[] | cdktn.IResolvable) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding = new ObservabilityPipelineConfigDestinationAmazonS3GenericEncodingList(this, "encoding", false);
  public get encoding() {
    return this._encoding;
  }
  public putEncoding(value: ObservabilityPipelineConfigDestinationAmazonS3GenericEncoding[] | cdktn.IResolvable) {
    this._encoding.internalValue = value;
  }
  public resetEncoding() {
    this._encoding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationAmazonS3GenericList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonS3Generic[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3GenericOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3GenericOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuth {
  /**
  * The Amazon Resource Name (ARN) of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#assume_role ObservabilityPipeline#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * A unique identifier for cross-account role assumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#external_id ObservabilityPipeline#external_id}
  */
  readonly externalId?: string;
  /**
  * A session identifier used for logging and tracing the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#session_name ObservabilityPipeline#session_name}
  */
  readonly sessionName?: string;
}

export function observabilityPipelineConfigDestinationAmazonSecurityLakeAuthToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assume_role: cdktn.stringToTerraform(struct!.assumeRole),
    external_id: cdktn.stringToTerraform(struct!.externalId),
    session_name: cdktn.stringToTerraform(struct!.sessionName),
  }
}


export function observabilityPipelineConfigDestinationAmazonSecurityLakeAuthToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuth | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuth | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuthList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuth[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuthOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationAmazonSecurityLakeBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationAmazonSecurityLakeBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonSecurityLakeBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationAmazonSecurityLakeBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonSecurityLakeBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationAmazonSecurityLakeBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonSecurityLakeBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonSecurityLakeBuffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBuffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonSecurityLakeBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonSecurityLakeTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigDestinationAmazonSecurityLakeTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
  }
}


export function observabilityPipelineConfigDestinationAmazonSecurityLakeTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationAmazonSecurityLakeTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonSecurityLakeTls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonSecurityLakeTls | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationAmazonSecurityLakeTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonSecurityLakeTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonSecurityLakeTlsOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonSecurityLakeTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonSecurityLake {
  /**
  * Name of the Amazon S3 bucket in Security Lake (3-63 characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#bucket ObservabilityPipeline#bucket}
  */
  readonly bucket: string;
  /**
  * Custom source name for the logs in Security Lake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#custom_source_name ObservabilityPipeline#custom_source_name}
  */
  readonly customSourceName: string;
  /**
  * AWS region of the Security Lake bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuth[] | cdktn.IResolvable;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBuffer[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationAmazonSecurityLakeToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonSecurityLake | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    custom_source_name: cdktn.stringToTerraform(struct!.customSourceName),
    region: cdktn.stringToTerraform(struct!.region),
    auth: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonSecurityLakeAuthToTerraform, true)(struct!.auth),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonSecurityLakeBufferToTerraform, true)(struct!.buffer),
    tls: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonSecurityLakeTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationAmazonSecurityLakeToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonSecurityLake | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_source_name: {
      value: cdktn.stringToHclTerraform(struct!.customSourceName),
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
    auth: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonSecurityLakeAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuthList",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonSecurityLakeBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAmazonSecurityLakeTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAmazonSecurityLakeTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationAmazonSecurityLakeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAmazonSecurityLake | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._customSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSourceName = this._customSourceName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonSecurityLake | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._customSourceName = undefined;
      this._region = undefined;
      this._auth.internalValue = undefined;
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
      this._bucket = value.bucket;
      this._customSourceName = value.customSourceName;
      this._region = value.region;
      this._auth.internalValue = value.auth;
      this._buffer.internalValue = value.buffer;
      this._tls.internalValue = value.tls;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // custom_source_name - computed: false, optional: false, required: true
  private _customSourceName?: string; 
  public get customSourceName() {
    return this.getStringAttribute('custom_source_name');
  }
  public set customSourceName(value: string) {
    this._customSourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customSourceNameInput() {
    return this._customSourceName;
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

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuth[] | cdktn.IResolvable) {
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
  private _buffer = new ObservabilityPipelineConfigDestinationAmazonSecurityLakeBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationAmazonSecurityLakeBuffer[] | cdktn.IResolvable) {
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
  private _tls = new ObservabilityPipelineConfigDestinationAmazonSecurityLakeTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigDestinationAmazonSecurityLakeTls[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationAmazonSecurityLakeList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonSecurityLake[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonSecurityLakeOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonSecurityLakeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAzureStorageBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationAzureStorageBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationAzureStorageBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationAzureStorageBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAzureStorageBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationAzureStorageBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAzureStorageBufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAzureStorageBufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationAzureStorageBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAzureStorageBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAzureStorageBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationAzureStorageBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAzureStorageBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationAzureStorageBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationAzureStorageBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationAzureStorageBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAzureStorageBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationAzureStorageBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAzureStorageBufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAzureStorageBufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationAzureStorageBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAzureStorageBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAzureStorageBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationAzureStorageBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAzureStorageBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationAzureStorageBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationAzureStorageBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationAzureStorageBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationAzureStorageBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationAzureStorageBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationAzureStorageBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationAzureStorageBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAzureStorageBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAzureStorageBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAzureStorageBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAzureStorageBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAzureStorageBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationAzureStorageBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAzureStorageBuffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationAzureStorageBuffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationAzureStorageBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationAzureStorageBufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationAzureStorageBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationAzureStorageBufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationAzureStorageBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAzureStorageBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAzureStorageBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationAzureStorageBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAzureStorage {
  /**
  * Optional prefix for blobs written to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#blob_prefix ObservabilityPipeline#blob_prefix}
  */
  readonly blobPrefix?: string;
  /**
  * Name of the environment variable or secret that holds the Azure Storage connection string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#connection_string_key ObservabilityPipeline#connection_string_key}
  */
  readonly connectionStringKey?: string;
  /**
  * The name of the Azure Blob Storage container to store logs in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#container_name ObservabilityPipeline#container_name}
  */
  readonly containerName: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationAzureStorageBuffer[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationAzureStorageToTerraform(struct?: ObservabilityPipelineConfigDestinationAzureStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_prefix: cdktn.stringToTerraform(struct!.blobPrefix),
    connection_string_key: cdktn.stringToTerraform(struct!.connectionStringKey),
    container_name: cdktn.stringToTerraform(struct!.containerName),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationAzureStorageBufferToTerraform, true)(struct!.buffer),
  }
}


export function observabilityPipelineConfigDestinationAzureStorageToHclTerraform(struct?: ObservabilityPipelineConfigDestinationAzureStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blob_prefix: {
      value: cdktn.stringToHclTerraform(struct!.blobPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_string_key: {
      value: cdktn.stringToHclTerraform(struct!.connectionStringKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktn.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationAzureStorageBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationAzureStorageBufferList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationAzureStorageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationAzureStorage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobPrefix = this._blobPrefix;
    }
    if (this._connectionStringKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionStringKey = this._connectionStringKey;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationAzureStorage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blobPrefix = undefined;
      this._connectionStringKey = undefined;
      this._containerName = undefined;
      this._buffer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blobPrefix = value.blobPrefix;
      this._connectionStringKey = value.connectionStringKey;
      this._containerName = value.containerName;
      this._buffer.internalValue = value.buffer;
    }
  }

  // blob_prefix - computed: false, optional: true, required: false
  private _blobPrefix?: string; 
  public get blobPrefix() {
    return this.getStringAttribute('blob_prefix');
  }
  public set blobPrefix(value: string) {
    this._blobPrefix = value;
  }
  public resetBlobPrefix() {
    this._blobPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobPrefixInput() {
    return this._blobPrefix;
  }

  // connection_string_key - computed: false, optional: true, required: false
  private _connectionStringKey?: string; 
  public get connectionStringKey() {
    return this.getStringAttribute('connection_string_key');
  }
  public set connectionStringKey(value: string) {
    this._connectionStringKey = value;
  }
  public resetConnectionStringKey() {
    this._connectionStringKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringKeyInput() {
    return this._connectionStringKey;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationAzureStorageBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationAzureStorageBuffer[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationAzureStorageList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAzureStorage[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationAzureStorageOutputReference {
    return new ObservabilityPipelineConfigDestinationAzureStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationCloudPremBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationCloudPremBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationCloudPremBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationCloudPremBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationCloudPremBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationCloudPremBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationCloudPremBufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationCloudPremBufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationCloudPremBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationCloudPremBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationCloudPremBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationCloudPremBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationCloudPremBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationCloudPremBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationCloudPremBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationCloudPremBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationCloudPremBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationCloudPremBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationCloudPremBufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationCloudPremBufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationCloudPremBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationCloudPremBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationCloudPremBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationCloudPremBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationCloudPremBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationCloudPremBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationCloudPremBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationCloudPremBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationCloudPremBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationCloudPremBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationCloudPremBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationCloudPremBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationCloudPremBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationCloudPremBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationCloudPremBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationCloudPremBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationCloudPremBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationCloudPremBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationCloudPremBuffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationCloudPremBuffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationCloudPremBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationCloudPremBufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationCloudPremBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationCloudPremBufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationCloudPremBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationCloudPremBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationCloudPremBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationCloudPremBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationCloudPrem {
  /**
  * Name of the environment variable or secret that holds the endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#endpoint_url_key ObservabilityPipeline#endpoint_url_key}
  */
  readonly endpointUrlKey?: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationCloudPremBuffer[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationCloudPremToTerraform(struct?: ObservabilityPipelineConfigDestinationCloudPrem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_url_key: cdktn.stringToTerraform(struct!.endpointUrlKey),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationCloudPremBufferToTerraform, true)(struct!.buffer),
  }
}


export function observabilityPipelineConfigDestinationCloudPremToHclTerraform(struct?: ObservabilityPipelineConfigDestinationCloudPrem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_url_key: {
      value: cdktn.stringToHclTerraform(struct!.endpointUrlKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationCloudPremBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationCloudPremBufferList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationCloudPremOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationCloudPrem | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointUrlKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrlKey = this._endpointUrlKey;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationCloudPrem | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointUrlKey = undefined;
      this._buffer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointUrlKey = value.endpointUrlKey;
      this._buffer.internalValue = value.buffer;
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

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationCloudPremBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationCloudPremBuffer[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationCloudPremList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationCloudPrem[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationCloudPremOutputReference {
    return new ObservabilityPipelineConfigDestinationCloudPremOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBuffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBuffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompression {
  /**
  * Compression algorithm for log events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#algorithm ObservabilityPipeline#algorithm}
  */
  readonly algorithm: string;
  /**
  * Compression level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#level ObservabilityPipeline#level}
  */
  readonly level?: number;
}

export function observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompressionToTerraform(struct?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktn.stringToTerraform(struct!.algorithm),
    level: cdktn.numberToTerraform(struct!.level),
  }
}


export function observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompressionToHclTerraform(struct?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktn.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktn.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._level = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._level = value.level;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompressionList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompression[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompressionOutputReference {
    return new ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
  }
}


export function observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTls | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTlsOutputReference {
    return new ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiem {
  /**
  * Encoding format for log events. Valid values are `json`, `raw_message`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding: string;
  /**
  * Name of the environment variable or secret that holds the endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#endpoint_url_key ObservabilityPipeline#endpoint_url_key}
  */
  readonly endpointUrlKey?: string;
  /**
  * Name of the environment variable or secret that holds the authentication token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#token_key ObservabilityPipeline#token_key}
  */
  readonly tokenKey?: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBuffer[] | cdktn.IResolvable;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#compression ObservabilityPipeline#compression}
  */
  readonly compression?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompression[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemToTerraform(struct?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktn.stringToTerraform(struct!.encoding),
    endpoint_url_key: cdktn.stringToTerraform(struct!.endpointUrlKey),
    token_key: cdktn.stringToTerraform(struct!.tokenKey),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferToTerraform, true)(struct!.buffer),
    compression: cdktn.listMapper(observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompressionToTerraform, true)(struct!.compression),
    tls: cdktn.listMapper(observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemToHclTerraform(struct?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    token_key: {
      value: cdktn.stringToHclTerraform(struct!.tokenKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferList",
    },
    compression: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompressionToHclTerraform, true)(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompressionList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiem | cdktn.IResolvable | undefined {
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
    if (this._tokenKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenKey = this._tokenKey;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiem | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encoding = undefined;
      this._endpointUrlKey = undefined;
      this._tokenKey = undefined;
      this._buffer.internalValue = undefined;
      this._compression.internalValue = undefined;
      this._tls.internalValue = undefined;
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
      this._tokenKey = value.tokenKey;
      this._buffer.internalValue = value.buffer;
      this._compression.internalValue = value.compression;
      this._tls.internalValue = value.tls;
    }
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
  private _buffer = new ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompressionList(this, "compression", false);
  public get compression() {
    return this._compression;
  }
  public putCompression(value: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompression[] | cdktn.IResolvable) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTls[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiem[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemOutputReference {
    return new ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationDatabricksZerobusAuth {
  /**
  * The OAuth client ID used to authenticate with Databricks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#client_id ObservabilityPipeline#client_id}
  */
  readonly clientId: string;
  /**
  * The name of the secret or environment variable holding the OAuth client secret. Defaults to `DESTINATION_DATABRICKS_ZEROBUS_OAUTH_CLIENT_SECRET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#client_secret_key ObservabilityPipeline#client_secret_key}
  */
  readonly clientSecretKey?: string;
}

export function observabilityPipelineConfigDestinationDatabricksZerobusAuthToTerraform(struct?: ObservabilityPipelineConfigDestinationDatabricksZerobusAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret_key: cdktn.stringToTerraform(struct!.clientSecretKey),
  }
}


export function observabilityPipelineConfigDestinationDatabricksZerobusAuthToHclTerraform(struct?: ObservabilityPipelineConfigDestinationDatabricksZerobusAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationDatabricksZerobusAuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationDatabricksZerobusAuth | cdktn.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationDatabricksZerobusAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecretKey = undefined;
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
}

export class ObservabilityPipelineConfigDestinationDatabricksZerobusAuthList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationDatabricksZerobusAuth[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationDatabricksZerobusAuthOutputReference {
    return new ObservabilityPipelineConfigDestinationDatabricksZerobusAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationDatabricksZerobus {
  /**
  * The name of the secret or environment variable holding the Databricks Zerobus ingestion endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#ingestion_endpoint_key ObservabilityPipeline#ingestion_endpoint_key}
  */
  readonly ingestionEndpointKey?: string;
  /**
  * The name of the Databricks table to ingest logs into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#table_name ObservabilityPipeline#table_name}
  */
  readonly tableName: string;
  /**
  * The name of the secret or environment variable holding the Databricks Unity Catalog endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#unity_catalog_endpoint_key ObservabilityPipeline#unity_catalog_endpoint_key}
  */
  readonly unityCatalogEndpointKey?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationDatabricksZerobusAuth[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationDatabricksZerobusToTerraform(struct?: ObservabilityPipelineConfigDestinationDatabricksZerobus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingestion_endpoint_key: cdktn.stringToTerraform(struct!.ingestionEndpointKey),
    table_name: cdktn.stringToTerraform(struct!.tableName),
    unity_catalog_endpoint_key: cdktn.stringToTerraform(struct!.unityCatalogEndpointKey),
    auth: cdktn.listMapper(observabilityPipelineConfigDestinationDatabricksZerobusAuthToTerraform, true)(struct!.auth),
  }
}


export function observabilityPipelineConfigDestinationDatabricksZerobusToHclTerraform(struct?: ObservabilityPipelineConfigDestinationDatabricksZerobus | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingestion_endpoint_key: {
      value: cdktn.stringToHclTerraform(struct!.ingestionEndpointKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktn.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unity_catalog_endpoint_key: {
      value: cdktn.stringToHclTerraform(struct!.unityCatalogEndpointKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationDatabricksZerobusAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationDatabricksZerobusAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationDatabricksZerobusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationDatabricksZerobus | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingestionEndpointKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionEndpointKey = this._ingestionEndpointKey;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._unityCatalogEndpointKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.unityCatalogEndpointKey = this._unityCatalogEndpointKey;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationDatabricksZerobus | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingestionEndpointKey = undefined;
      this._tableName = undefined;
      this._unityCatalogEndpointKey = undefined;
      this._auth.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingestionEndpointKey = value.ingestionEndpointKey;
      this._tableName = value.tableName;
      this._unityCatalogEndpointKey = value.unityCatalogEndpointKey;
      this._auth.internalValue = value.auth;
    }
  }

  // ingestion_endpoint_key - computed: false, optional: true, required: false
  private _ingestionEndpointKey?: string; 
  public get ingestionEndpointKey() {
    return this.getStringAttribute('ingestion_endpoint_key');
  }
  public set ingestionEndpointKey(value: string) {
    this._ingestionEndpointKey = value;
  }
  public resetIngestionEndpointKey() {
    this._ingestionEndpointKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionEndpointKeyInput() {
    return this._ingestionEndpointKey;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // unity_catalog_endpoint_key - computed: false, optional: true, required: false
  private _unityCatalogEndpointKey?: string; 
  public get unityCatalogEndpointKey() {
    return this.getStringAttribute('unity_catalog_endpoint_key');
  }
  public set unityCatalogEndpointKey(value: string) {
    this._unityCatalogEndpointKey = value;
  }
  public resetUnityCatalogEndpointKey() {
    this._unityCatalogEndpointKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unityCatalogEndpointKeyInput() {
    return this._unityCatalogEndpointKey;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigDestinationDatabricksZerobusAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigDestinationDatabricksZerobusAuth[] | cdktn.IResolvable) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationDatabricksZerobusList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationDatabricksZerobus[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationDatabricksZerobusOutputReference {
    return new ObservabilityPipelineConfigDestinationDatabricksZerobusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationDatadogLogsBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationDatadogLogsBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogsBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationDatadogLogsBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogsBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationDatadogLogsBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationDatadogLogsBufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationDatadogLogsBufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationDatadogLogsBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationDatadogLogsBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationDatadogLogsBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationDatadogLogsBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationDatadogLogsBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationDatadogLogsBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogsBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationDatadogLogsBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogsBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationDatadogLogsBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationDatadogLogsBufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationDatadogLogsBufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationDatadogLogsBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationDatadogLogsBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationDatadogLogsBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationDatadogLogsBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationDatadogLogsBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationDatadogLogsBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationDatadogLogsBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationDatadogLogsBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogsBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationDatadogLogsBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationDatadogLogsBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationDatadogLogsBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogsBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationDatadogLogsBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationDatadogLogsBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationDatadogLogsBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationDatadogLogsBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationDatadogLogsBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationDatadogLogsBuffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationDatadogLogsBuffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationDatadogLogsBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationDatadogLogsBufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationDatadogLogsBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationDatadogLogsBufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationDatadogLogsBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationDatadogLogsBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationDatadogLogsBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationDatadogLogsBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationDatadogLogsRoutesBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationDatadogLogsRoutesBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationDatadogLogsRoutesBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationDatadogLogsRoutesBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationDatadogLogsRoutesBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationDatadogLogsRoutesBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationDatadogLogsRoutesBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationDatadogLogsRoutesBuffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBuffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationDatadogLogsRoutesBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationDatadogLogsRoutes {
  /**
  * Name of the environment variable or secret that stores the Datadog API key used by this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#api_key_key ObservabilityPipeline#api_key_key}
  */
  readonly apiKeyKey: string;
  /**
  * A Datadog search query that determines which logs are forwarded using this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * Unique identifier for this route within the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#route_id ObservabilityPipeline#route_id}
  */
  readonly routeId: string;
  /**
  * Datadog site where matching logs are sent (for example, `us1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#site ObservabilityPipeline#site}
  */
  readonly site: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBuffer[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationDatadogLogsRoutesToTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogsRoutes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key_key: cdktn.stringToTerraform(struct!.apiKeyKey),
    include: cdktn.stringToTerraform(struct!.include),
    route_id: cdktn.stringToTerraform(struct!.routeId),
    site: cdktn.stringToTerraform(struct!.site),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationDatadogLogsRoutesBufferToTerraform, true)(struct!.buffer),
  }
}


export function observabilityPipelineConfigDestinationDatadogLogsRoutesToHclTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogsRoutes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKeyKey),
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
    route_id: {
      value: cdktn.stringToHclTerraform(struct!.routeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site: {
      value: cdktn.stringToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationDatadogLogsRoutesBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationDatadogLogsRoutesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationDatadogLogsRoutes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKeyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyKey = this._apiKeyKey;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._routeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeId = this._routeId;
    }
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationDatadogLogsRoutes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKeyKey = undefined;
      this._include = undefined;
      this._routeId = undefined;
      this._site = undefined;
      this._buffer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKeyKey = value.apiKeyKey;
      this._include = value.include;
      this._routeId = value.routeId;
      this._site = value.site;
      this._buffer.internalValue = value.buffer;
    }
  }

  // api_key_key - computed: false, optional: false, required: true
  private _apiKeyKey?: string; 
  public get apiKeyKey() {
    return this.getStringAttribute('api_key_key');
  }
  public set apiKeyKey(value: string) {
    this._apiKeyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyKeyInput() {
    return this._apiKeyKey;
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

  // route_id - computed: false, optional: false, required: true
  private _routeId?: string; 
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
  public set routeId(value: string) {
    this._routeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIdInput() {
    return this._routeId;
  }

  // site - computed: false, optional: false, required: true
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationDatadogLogsRoutesBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationDatadogLogsRoutesBuffer[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationDatadogLogsRoutesList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationDatadogLogsRoutes[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationDatadogLogsRoutesOutputReference {
    return new ObservabilityPipelineConfigDestinationDatadogLogsRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationDatadogLogs {
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationDatadogLogsBuffer[] | cdktn.IResolvable;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#routes ObservabilityPipeline#routes}
  */
  readonly routes?: ObservabilityPipelineConfigDestinationDatadogLogsRoutes[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationDatadogLogsToTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationDatadogLogsBufferToTerraform, true)(struct!.buffer),
    routes: cdktn.listMapper(observabilityPipelineConfigDestinationDatadogLogsRoutesToTerraform, true)(struct!.routes),
  }
}


export function observabilityPipelineConfigDestinationDatadogLogsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationDatadogLogsBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationDatadogLogsBufferList",
    },
    routes: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationDatadogLogsRoutesToHclTerraform, true)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationDatadogLogsRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationDatadogLogsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationDatadogLogs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationDatadogLogs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer.internalValue = undefined;
      this._routes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer.internalValue = value.buffer;
      this._routes.internalValue = value.routes;
    }
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationDatadogLogsBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationDatadogLogsBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new ObservabilityPipelineConfigDestinationDatadogLogsRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: ObservabilityPipelineConfigDestinationDatadogLogsRoutes[] | cdktn.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}

export class ObservabilityPipelineConfigDestinationDatadogLogsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationDatadogLogs[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationDatadogLogsOutputReference {
    return new ObservabilityPipelineConfigDestinationDatadogLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationDatadogMetrics {
}

export function observabilityPipelineConfigDestinationDatadogMetricsToTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function observabilityPipelineConfigDestinationDatadogMetricsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ObservabilityPipelineConfigDestinationDatadogMetricsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationDatadogMetrics | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationDatadogMetrics | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationDatadogMetricsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationDatadogMetrics[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationDatadogMetricsOutputReference {
    return new ObservabilityPipelineConfigDestinationDatadogMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationElasticsearchAuth {
  /**
  * Name of the environment variable or secret that holds the Elasticsearch password (used when `strategy` is `basic`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#password_key ObservabilityPipeline#password_key}
  */
  readonly passwordKey?: string;
  /**
  * The authentication strategy to use. Valid values are `basic`, `aws`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#strategy ObservabilityPipeline#strategy}
  */
  readonly strategy: string;
  /**
  * Name of the environment variable or secret that holds the Elasticsearch username (used when `strategy` is `basic`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#username_key ObservabilityPipeline#username_key}
  */
  readonly usernameKey?: string;
}

export function observabilityPipelineConfigDestinationElasticsearchAuthToTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_key: cdktn.stringToTerraform(struct!.passwordKey),
    strategy: cdktn.stringToTerraform(struct!.strategy),
    username_key: cdktn.stringToTerraform(struct!.usernameKey),
  }
}


export function observabilityPipelineConfigDestinationElasticsearchAuthToHclTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationElasticsearchAuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationElasticsearchAuth | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationElasticsearchAuth | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationElasticsearchAuthList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationElasticsearchAuth[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationElasticsearchAuthOutputReference {
    return new ObservabilityPipelineConfigDestinationElasticsearchAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationElasticsearchBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationElasticsearchBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationElasticsearchBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationElasticsearchBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationElasticsearchBufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationElasticsearchBufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationElasticsearchBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationElasticsearchBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationElasticsearchBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationElasticsearchBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationElasticsearchBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationElasticsearchBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationElasticsearchBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationElasticsearchBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationElasticsearchBufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationElasticsearchBufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationElasticsearchBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationElasticsearchBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationElasticsearchBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationElasticsearchBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationElasticsearchBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationElasticsearchBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationElasticsearchBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationElasticsearchBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationElasticsearchBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationElasticsearchBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationElasticsearchBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationElasticsearchBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationElasticsearchBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationElasticsearchBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationElasticsearchBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationElasticsearchBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationElasticsearchBuffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationElasticsearchBuffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationElasticsearchBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationElasticsearchBufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationElasticsearchBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationElasticsearchBufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationElasticsearchBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationElasticsearchBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationElasticsearchBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationElasticsearchBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationElasticsearchCompression {
  /**
  * The compression algorithm applied when sending data to Elasticsearch. Valid values are `none`, `gzip`, `zlib`, `zstd`, `snappy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#algorithm ObservabilityPipeline#algorithm}
  */
  readonly algorithm: string;
  /**
  * The compression level. Only applicable for `gzip`, `zlib`, and `zstd` algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#level ObservabilityPipeline#level}
  */
  readonly level?: number;
}

export function observabilityPipelineConfigDestinationElasticsearchCompressionToTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchCompression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktn.stringToTerraform(struct!.algorithm),
    level: cdktn.numberToTerraform(struct!.level),
  }
}


export function observabilityPipelineConfigDestinationElasticsearchCompressionToHclTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchCompression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktn.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktn.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationElasticsearchCompressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationElasticsearchCompression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationElasticsearchCompression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._level = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._level = value.level;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }
}

export class ObservabilityPipelineConfigDestinationElasticsearchCompressionList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationElasticsearchCompression[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationElasticsearchCompressionOutputReference {
    return new ObservabilityPipelineConfigDestinationElasticsearchCompressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationElasticsearchDataStream {
  /**
  * When `true`, automatically routes events to the appropriate data stream based on the event content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#auto_routing ObservabilityPipeline#auto_routing}
  */
  readonly autoRouting?: boolean | cdktn.IResolvable;
  /**
  * The data stream dataset. This groups events by their source or application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#dataset ObservabilityPipeline#dataset}
  */
  readonly dataset?: string;
  /**
  * The data stream type. This determines how events are categorized within the data stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#dtype ObservabilityPipeline#dtype}
  */
  readonly dtype?: string;
  /**
  * The data stream namespace. This separates events into different environments or domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#namespace ObservabilityPipeline#namespace}
  */
  readonly namespace?: string;
  /**
  * When `true`, synchronizes data stream fields with the Elasticsearch index mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#sync_fields ObservabilityPipeline#sync_fields}
  */
  readonly syncFields?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationElasticsearchDataStreamToTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchDataStream | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_routing: cdktn.booleanToTerraform(struct!.autoRouting),
    dataset: cdktn.stringToTerraform(struct!.dataset),
    dtype: cdktn.stringToTerraform(struct!.dtype),
    namespace: cdktn.stringToTerraform(struct!.namespace),
    sync_fields: cdktn.booleanToTerraform(struct!.syncFields),
  }
}


export function observabilityPipelineConfigDestinationElasticsearchDataStreamToHclTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchDataStream | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_routing: {
      value: cdktn.booleanToHclTerraform(struct!.autoRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    sync_fields: {
      value: cdktn.booleanToHclTerraform(struct!.syncFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationElasticsearchDataStreamOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationElasticsearchDataStream | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRouting = this._autoRouting;
    }
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
    if (this._syncFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncFields = this._syncFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationElasticsearchDataStream | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRouting = undefined;
      this._dataset = undefined;
      this._dtype = undefined;
      this._namespace = undefined;
      this._syncFields = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRouting = value.autoRouting;
      this._dataset = value.dataset;
      this._dtype = value.dtype;
      this._namespace = value.namespace;
      this._syncFields = value.syncFields;
    }
  }

  // auto_routing - computed: false, optional: true, required: false
  private _autoRouting?: boolean | cdktn.IResolvable; 
  public get autoRouting() {
    return this.getBooleanAttribute('auto_routing');
  }
  public set autoRouting(value: boolean | cdktn.IResolvable) {
    this._autoRouting = value;
  }
  public resetAutoRouting() {
    this._autoRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRoutingInput() {
    return this._autoRouting;
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

  // sync_fields - computed: false, optional: true, required: false
  private _syncFields?: boolean | cdktn.IResolvable; 
  public get syncFields() {
    return this.getBooleanAttribute('sync_fields');
  }
  public set syncFields(value: boolean | cdktn.IResolvable) {
    this._syncFields = value;
  }
  public resetSyncFields() {
    this._syncFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncFieldsInput() {
    return this._syncFields;
  }
}

export class ObservabilityPipelineConfigDestinationElasticsearchDataStreamList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationElasticsearchDataStream[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationElasticsearchDataStreamOutputReference {
    return new ObservabilityPipelineConfigDestinationElasticsearchDataStreamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationElasticsearchTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigDestinationElasticsearchTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
  }
}


export function observabilityPipelineConfigDestinationElasticsearchTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationElasticsearchTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationElasticsearchTls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationElasticsearchTls | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationElasticsearchTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationElasticsearchTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationElasticsearchTlsOutputReference {
    return new ObservabilityPipelineConfigDestinationElasticsearchTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationElasticsearch {
  /**
  * The Elasticsearch API version to use. Set to `auto` to auto-detect. Valid values are `auto`, `v6`, `v7`, `v8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#api_version ObservabilityPipeline#api_version}
  */
  readonly apiVersion?: string;
  /**
  * The name of the index to write events to in Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#bulk_index ObservabilityPipeline#bulk_index}
  */
  readonly bulkIndex?: string;
  /**
  * Name of the environment variable or secret that holds the Elasticsearch endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#endpoint_url_key ObservabilityPipeline#endpoint_url_key}
  */
  readonly endpointUrlKey?: string;
  /**
  * The name of the field used as the document ID in Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#id_key ObservabilityPipeline#id_key}
  */
  readonly idKey?: string;
  /**
  * The name of an Elasticsearch ingest pipeline to apply to events before indexing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#pipeline ObservabilityPipeline#pipeline}
  */
  readonly pipeline?: string;
  /**
  * When `true`, retries failed partial bulk requests when some events in a batch fail while others succeed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#request_retry_partial ObservabilityPipeline#request_retry_partial}
  */
  readonly requestRetryPartial?: boolean | cdktn.IResolvable;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationElasticsearchAuth[] | cdktn.IResolvable;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationElasticsearchBuffer[] | cdktn.IResolvable;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#compression ObservabilityPipeline#compression}
  */
  readonly compression?: ObservabilityPipelineConfigDestinationElasticsearchCompression[] | cdktn.IResolvable;
  /**
  * data_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#data_stream ObservabilityPipeline#data_stream}
  */
  readonly dataStream?: ObservabilityPipelineConfigDestinationElasticsearchDataStream[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationElasticsearchTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationElasticsearchToTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktn.stringToTerraform(struct!.apiVersion),
    bulk_index: cdktn.stringToTerraform(struct!.bulkIndex),
    endpoint_url_key: cdktn.stringToTerraform(struct!.endpointUrlKey),
    id_key: cdktn.stringToTerraform(struct!.idKey),
    pipeline: cdktn.stringToTerraform(struct!.pipeline),
    request_retry_partial: cdktn.booleanToTerraform(struct!.requestRetryPartial),
    auth: cdktn.listMapper(observabilityPipelineConfigDestinationElasticsearchAuthToTerraform, true)(struct!.auth),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationElasticsearchBufferToTerraform, true)(struct!.buffer),
    compression: cdktn.listMapper(observabilityPipelineConfigDestinationElasticsearchCompressionToTerraform, true)(struct!.compression),
    data_stream: cdktn.listMapper(observabilityPipelineConfigDestinationElasticsearchDataStreamToTerraform, true)(struct!.dataStream),
    tls: cdktn.listMapper(observabilityPipelineConfigDestinationElasticsearchTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationElasticsearchToHclTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktn.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    id_key: {
      value: cdktn.stringToHclTerraform(struct!.idKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline: {
      value: cdktn.stringToHclTerraform(struct!.pipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_retry_partial: {
      value: cdktn.booleanToHclTerraform(struct!.requestRetryPartial),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationElasticsearchAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationElasticsearchAuthList",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationElasticsearchBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationElasticsearchBufferList",
    },
    compression: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationElasticsearchCompressionToHclTerraform, true)(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationElasticsearchCompressionList",
    },
    data_stream: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationElasticsearchDataStreamToHclTerraform, true)(struct!.dataStream),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationElasticsearchDataStreamList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationElasticsearchTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationElasticsearchTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationElasticsearchOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationElasticsearch | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._bulkIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bulkIndex = this._bulkIndex;
    }
    if (this._endpointUrlKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrlKey = this._endpointUrlKey;
    }
    if (this._idKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.idKey = this._idKey;
    }
    if (this._pipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline;
    }
    if (this._requestRetryPartial !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestRetryPartial = this._requestRetryPartial;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._dataStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStream = this._dataStream?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationElasticsearch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._bulkIndex = undefined;
      this._endpointUrlKey = undefined;
      this._idKey = undefined;
      this._pipeline = undefined;
      this._requestRetryPartial = undefined;
      this._auth.internalValue = undefined;
      this._buffer.internalValue = undefined;
      this._compression.internalValue = undefined;
      this._dataStream.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._bulkIndex = value.bulkIndex;
      this._endpointUrlKey = value.endpointUrlKey;
      this._idKey = value.idKey;
      this._pipeline = value.pipeline;
      this._requestRetryPartial = value.requestRetryPartial;
      this._auth.internalValue = value.auth;
      this._buffer.internalValue = value.buffer;
      this._compression.internalValue = value.compression;
      this._dataStream.internalValue = value.dataStream;
      this._tls.internalValue = value.tls;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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

  // id_key - computed: false, optional: true, required: false
  private _idKey?: string; 
  public get idKey() {
    return this.getStringAttribute('id_key');
  }
  public set idKey(value: string) {
    this._idKey = value;
  }
  public resetIdKey() {
    this._idKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idKeyInput() {
    return this._idKey;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline?: string; 
  public get pipeline() {
    return this.getStringAttribute('pipeline');
  }
  public set pipeline(value: string) {
    this._pipeline = value;
  }
  public resetPipeline() {
    this._pipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline;
  }

  // request_retry_partial - computed: false, optional: true, required: false
  private _requestRetryPartial?: boolean | cdktn.IResolvable; 
  public get requestRetryPartial() {
    return this.getBooleanAttribute('request_retry_partial');
  }
  public set requestRetryPartial(value: boolean | cdktn.IResolvable) {
    this._requestRetryPartial = value;
  }
  public resetRequestRetryPartial() {
    this._requestRetryPartial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRetryPartialInput() {
    return this._requestRetryPartial;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigDestinationElasticsearchAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigDestinationElasticsearchAuth[] | cdktn.IResolvable) {
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
  private _buffer = new ObservabilityPipelineConfigDestinationElasticsearchBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationElasticsearchBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new ObservabilityPipelineConfigDestinationElasticsearchCompressionList(this, "compression", false);
  public get compression() {
    return this._compression;
  }
  public putCompression(value: ObservabilityPipelineConfigDestinationElasticsearchCompression[] | cdktn.IResolvable) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // data_stream - computed: false, optional: true, required: false
  private _dataStream = new ObservabilityPipelineConfigDestinationElasticsearchDataStreamList(this, "data_stream", false);
  public get dataStream() {
    return this._dataStream;
  }
  public putDataStream(value: ObservabilityPipelineConfigDestinationElasticsearchDataStream[] | cdktn.IResolvable) {
    this._dataStream.internalValue = value;
  }
  public resetDataStream() {
    this._dataStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStreamInput() {
    return this._dataStream.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigDestinationElasticsearchTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigDestinationElasticsearchTls[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationElasticsearchList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationElasticsearch[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationElasticsearchOutputReference {
    return new ObservabilityPipelineConfigDestinationElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGoogleCloudStorageAuth {
  /**
  * Path to the Google Cloud service account key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#credentials_file ObservabilityPipeline#credentials_file}
  */
  readonly credentialsFile: string;
}

export function observabilityPipelineConfigDestinationGoogleCloudStorageAuthToTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleCloudStorageAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_file: cdktn.stringToTerraform(struct!.credentialsFile),
  }
}


export function observabilityPipelineConfigDestinationGoogleCloudStorageAuthToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleCloudStorageAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationGoogleCloudStorageAuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGoogleCloudStorageAuth | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGoogleCloudStorageAuth | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationGoogleCloudStorageAuthList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGoogleCloudStorageAuth[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGoogleCloudStorageAuthOutputReference {
    return new ObservabilityPipelineConfigDestinationGoogleCloudStorageAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationGoogleCloudStorageBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationGoogleCloudStorageBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationGoogleCloudStorageBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationGoogleCloudStorageBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGoogleCloudStorageBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationGoogleCloudStorageBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleCloudStorageBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationGoogleCloudStorageBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationGoogleCloudStorageBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationGoogleCloudStorageBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleCloudStorageBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGoogleCloudStorageBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGoogleCloudStorageBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGoogleCloudStorageBuffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGoogleCloudStorageBuffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGoogleCloudStorageBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadata {
  /**
  * The metadata key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigDestinationGoogleCloudStorageMetadataToTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigDestinationGoogleCloudStorageMetadataToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadataOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadata | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadata | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadataList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadata[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadataOutputReference {
    return new ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGoogleCloudStorage {
  /**
  * Access control list setting for objects written to the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#acl ObservabilityPipeline#acl}
  */
  readonly acl?: string;
  /**
  * Name of the GCS bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#bucket ObservabilityPipeline#bucket}
  */
  readonly bucket: string;
  /**
  * Optional prefix for object keys within the GCS bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_prefix ObservabilityPipeline#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Storage class used for objects stored in GCS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#storage_class ObservabilityPipeline#storage_class}
  */
  readonly storageClass: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationGoogleCloudStorageAuth[] | cdktn.IResolvable;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationGoogleCloudStorageBuffer[] | cdktn.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#metadata ObservabilityPipeline#metadata}
  */
  readonly metadata?: ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadata[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationGoogleCloudStorageToTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleCloudStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktn.stringToTerraform(struct!.acl),
    bucket: cdktn.stringToTerraform(struct!.bucket),
    key_prefix: cdktn.stringToTerraform(struct!.keyPrefix),
    storage_class: cdktn.stringToTerraform(struct!.storageClass),
    auth: cdktn.listMapper(observabilityPipelineConfigDestinationGoogleCloudStorageAuthToTerraform, true)(struct!.auth),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationGoogleCloudStorageBufferToTerraform, true)(struct!.buffer),
    metadata: cdktn.listMapper(observabilityPipelineConfigDestinationGoogleCloudStorageMetadataToTerraform, true)(struct!.metadata),
  }
}


export function observabilityPipelineConfigDestinationGoogleCloudStorageToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleCloudStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktn.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_prefix: {
      value: cdktn.stringToHclTerraform(struct!.keyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktn.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGoogleCloudStorageAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGoogleCloudStorageAuthList",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGoogleCloudStorageBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferList",
    },
    metadata: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGoogleCloudStorageMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationGoogleCloudStorageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGoogleCloudStorage | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._keyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefix = this._keyPrefix;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationGoogleCloudStorage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._bucket = undefined;
      this._keyPrefix = undefined;
      this._storageClass = undefined;
      this._auth.internalValue = undefined;
      this._buffer.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._bucket = value.bucket;
      this._keyPrefix = value.keyPrefix;
      this._storageClass = value.storageClass;
      this._auth.internalValue = value.auth;
      this._buffer.internalValue = value.buffer;
      this._metadata.internalValue = value.metadata;
    }
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // key_prefix - computed: false, optional: true, required: false
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  public resetKeyPrefix() {
    this._keyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigDestinationGoogleCloudStorageAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigDestinationGoogleCloudStorageAuth[] | cdktn.IResolvable) {
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
  private _buffer = new ObservabilityPipelineConfigDestinationGoogleCloudStorageBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationGoogleCloudStorageBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadata[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationGoogleCloudStorageList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGoogleCloudStorage[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGoogleCloudStorageOutputReference {
    return new ObservabilityPipelineConfigDestinationGoogleCloudStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGooglePubsubAuth {
  /**
  * Path to the Google Cloud service account key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#credentials_file ObservabilityPipeline#credentials_file}
  */
  readonly credentialsFile: string;
}

export function observabilityPipelineConfigDestinationGooglePubsubAuthToTerraform(struct?: ObservabilityPipelineConfigDestinationGooglePubsubAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_file: cdktn.stringToTerraform(struct!.credentialsFile),
  }
}


export function observabilityPipelineConfigDestinationGooglePubsubAuthToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGooglePubsubAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationGooglePubsubAuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGooglePubsubAuth | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGooglePubsubAuth | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationGooglePubsubAuthList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGooglePubsubAuth[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGooglePubsubAuthOutputReference {
    return new ObservabilityPipelineConfigDestinationGooglePubsubAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGooglePubsubBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationGooglePubsubBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationGooglePubsubBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationGooglePubsubBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGooglePubsubBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationGooglePubsubBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGooglePubsubBufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGooglePubsubBufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationGooglePubsubBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGooglePubsubBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGooglePubsubBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationGooglePubsubBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGooglePubsubBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationGooglePubsubBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationGooglePubsubBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationGooglePubsubBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGooglePubsubBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationGooglePubsubBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGooglePubsubBufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGooglePubsubBufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationGooglePubsubBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGooglePubsubBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGooglePubsubBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationGooglePubsubBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGooglePubsubBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationGooglePubsubBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationGooglePubsubBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationGooglePubsubBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationGooglePubsubBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationGooglePubsubBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationGooglePubsubBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationGooglePubsubBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGooglePubsubBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGooglePubsubBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGooglePubsubBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGooglePubsubBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGooglePubsubBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationGooglePubsubBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGooglePubsubBuffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGooglePubsubBuffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationGooglePubsubBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationGooglePubsubBufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationGooglePubsubBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationGooglePubsubBufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationGooglePubsubBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGooglePubsubBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGooglePubsubBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationGooglePubsubBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGooglePubsubTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigDestinationGooglePubsubTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationGooglePubsubTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
  }
}


export function observabilityPipelineConfigDestinationGooglePubsubTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGooglePubsubTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationGooglePubsubTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGooglePubsubTls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGooglePubsubTls | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationGooglePubsubTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGooglePubsubTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGooglePubsubTlsOutputReference {
    return new ObservabilityPipelineConfigDestinationGooglePubsubTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGooglePubsub {
  /**
  * Encoding format for log events. Valid values: `json`, `raw_message`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding: string;
  /**
  * Name of the environment variable or secret that holds the Google Cloud Pub/Sub endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#endpoint_url_key ObservabilityPipeline#endpoint_url_key}
  */
  readonly endpointUrlKey?: string;
  /**
  * The Google Cloud project ID that owns the Pub/Sub topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#project ObservabilityPipeline#project}
  */
  readonly project: string;
  /**
  * The Pub/Sub topic name to publish logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#topic ObservabilityPipeline#topic}
  */
  readonly topic: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationGooglePubsubAuth[] | cdktn.IResolvable;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationGooglePubsubBuffer[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationGooglePubsubTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationGooglePubsubToTerraform(struct?: ObservabilityPipelineConfigDestinationGooglePubsub | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktn.stringToTerraform(struct!.encoding),
    endpoint_url_key: cdktn.stringToTerraform(struct!.endpointUrlKey),
    project: cdktn.stringToTerraform(struct!.project),
    topic: cdktn.stringToTerraform(struct!.topic),
    auth: cdktn.listMapper(observabilityPipelineConfigDestinationGooglePubsubAuthToTerraform, true)(struct!.auth),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationGooglePubsubBufferToTerraform, true)(struct!.buffer),
    tls: cdktn.listMapper(observabilityPipelineConfigDestinationGooglePubsubTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationGooglePubsubToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGooglePubsub | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    project: {
      value: cdktn.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGooglePubsubAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGooglePubsubAuthList",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGooglePubsubBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGooglePubsubBufferList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGooglePubsubTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGooglePubsubTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationGooglePubsubOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGooglePubsub | cdktn.IResolvable | undefined {
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
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGooglePubsub | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encoding = undefined;
      this._endpointUrlKey = undefined;
      this._project = undefined;
      this._topic = undefined;
      this._auth.internalValue = undefined;
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
      this._encoding = value.encoding;
      this._endpointUrlKey = value.endpointUrlKey;
      this._project = value.project;
      this._topic = value.topic;
      this._auth.internalValue = value.auth;
      this._buffer.internalValue = value.buffer;
      this._tls.internalValue = value.tls;
    }
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

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigDestinationGooglePubsubAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigDestinationGooglePubsubAuth[] | cdktn.IResolvable) {
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
  private _buffer = new ObservabilityPipelineConfigDestinationGooglePubsubBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationGooglePubsubBuffer[] | cdktn.IResolvable) {
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
  private _tls = new ObservabilityPipelineConfigDestinationGooglePubsubTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigDestinationGooglePubsubTls[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationGooglePubsubList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGooglePubsub[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGooglePubsubOutputReference {
    return new ObservabilityPipelineConfigDestinationGooglePubsubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGoogleSecopsAuth {
  /**
  * Path to the Google Cloud service account key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#credentials_file ObservabilityPipeline#credentials_file}
  */
  readonly credentialsFile: string;
}

export function observabilityPipelineConfigDestinationGoogleSecopsAuthToTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleSecopsAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_file: cdktn.stringToTerraform(struct!.credentialsFile),
  }
}


export function observabilityPipelineConfigDestinationGoogleSecopsAuthToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleSecopsAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationGoogleSecopsAuthOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGoogleSecopsAuth | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGoogleSecopsAuth | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationGoogleSecopsAuthList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGoogleSecopsAuth[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGoogleSecopsAuthOutputReference {
    return new ObservabilityPipelineConfigDestinationGoogleSecopsAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGoogleSecopsBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationGoogleSecopsBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleSecopsBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationGoogleSecopsBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleSecopsBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationGoogleSecopsBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGoogleSecopsBufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGoogleSecopsBufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationGoogleSecopsBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGoogleSecopsBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGoogleSecopsBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationGoogleSecopsBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGoogleSecopsBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationGoogleSecopsBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleSecopsBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationGoogleSecopsBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleSecopsBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationGoogleSecopsBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGoogleSecopsBufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGoogleSecopsBufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationGoogleSecopsBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGoogleSecopsBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGoogleSecopsBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationGoogleSecopsBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGoogleSecopsBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationGoogleSecopsBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationGoogleSecopsBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationGoogleSecopsBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleSecopsBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationGoogleSecopsBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationGoogleSecopsBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationGoogleSecopsBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleSecopsBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGoogleSecopsBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGoogleSecopsBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGoogleSecopsBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGoogleSecopsBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationGoogleSecopsBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGoogleSecopsBuffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationGoogleSecopsBuffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationGoogleSecopsBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationGoogleSecopsBufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationGoogleSecopsBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationGoogleSecopsBufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationGoogleSecopsBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGoogleSecopsBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGoogleSecopsBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationGoogleSecopsBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGoogleSecops {
  /**
  * The Google SecOps customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#customer_id ObservabilityPipeline#customer_id}
  */
  readonly customerId: string;
  /**
  * The encoding format for the logs sent to Google SecOps. Valid values are `json`, `raw_message`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding: string;
  /**
  * Name of the environment variable or secret that holds the Google Chronicle endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#endpoint_url_key ObservabilityPipeline#endpoint_url_key}
  */
  readonly endpointUrlKey?: string;
  /**
  * The log type metadata associated with the Google SecOps destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#log_type ObservabilityPipeline#log_type}
  */
  readonly logType: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationGoogleSecopsAuth[] | cdktn.IResolvable;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationGoogleSecopsBuffer[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationGoogleSecopsToTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleSecops | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_id: cdktn.stringToTerraform(struct!.customerId),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    endpoint_url_key: cdktn.stringToTerraform(struct!.endpointUrlKey),
    log_type: cdktn.stringToTerraform(struct!.logType),
    auth: cdktn.listMapper(observabilityPipelineConfigDestinationGoogleSecopsAuthToTerraform, true)(struct!.auth),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationGoogleSecopsBufferToTerraform, true)(struct!.buffer),
  }
}


export function observabilityPipelineConfigDestinationGoogleSecopsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleSecops | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_id: {
      value: cdktn.stringToHclTerraform(struct!.customerId),
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
    endpoint_url_key: {
      value: cdktn.stringToHclTerraform(struct!.endpointUrlKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktn.stringToHclTerraform(struct!.logType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGoogleSecopsAuthToHclTerraform, true)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGoogleSecopsAuthList",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationGoogleSecopsBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationGoogleSecopsBufferList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationGoogleSecopsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationGoogleSecops | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerId = this._customerId;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._endpointUrlKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrlKey = this._endpointUrlKey;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationGoogleSecops | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerId = undefined;
      this._encoding = undefined;
      this._endpointUrlKey = undefined;
      this._logType = undefined;
      this._auth.internalValue = undefined;
      this._buffer.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerId = value.customerId;
      this._encoding = value.encoding;
      this._endpointUrlKey = value.endpointUrlKey;
      this._logType = value.logType;
      this._auth.internalValue = value.auth;
      this._buffer.internalValue = value.buffer;
    }
  }

  // customer_id - computed: false, optional: false, required: true
  private _customerId?: string; 
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }
  public set customerId(value: string) {
    this._customerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIdInput() {
    return this._customerId;
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

  // log_type - computed: false, optional: false, required: true
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new ObservabilityPipelineConfigDestinationGoogleSecopsAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ObservabilityPipelineConfigDestinationGoogleSecopsAuth[] | cdktn.IResolvable) {
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
  private _buffer = new ObservabilityPipelineConfigDestinationGoogleSecopsBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationGoogleSecopsBuffer[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationGoogleSecopsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGoogleSecops[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationGoogleSecopsOutputReference {
    return new ObservabilityPipelineConfigDestinationGoogleSecopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationHttpClientBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationHttpClientBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationHttpClientBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationHttpClientBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationHttpClientBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationHttpClientBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationHttpClientBufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationHttpClientBufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationHttpClientBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationHttpClientBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationHttpClientBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationHttpClientBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationHttpClientBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationHttpClientBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationHttpClientBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationHttpClientBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationHttpClientBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationHttpClientBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationHttpClientBufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationHttpClientBufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationHttpClientBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationHttpClientBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationHttpClientBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationHttpClientBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationHttpClientBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationHttpClientBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationHttpClientBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationHttpClientBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationHttpClientBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationHttpClientBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationHttpClientBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationHttpClientBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationHttpClientBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationHttpClientBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationHttpClientBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationHttpClientBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationHttpClientBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationHttpClientBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationHttpClientBuffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationHttpClientBuffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationHttpClientBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationHttpClientBufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationHttpClientBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationHttpClientBufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationHttpClientBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationHttpClientBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationHttpClientBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationHttpClientBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationHttpClientCompression {
  /**
  * Compression algorithm. Valid values are `gzip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#algorithm ObservabilityPipeline#algorithm}
  */
  readonly algorithm: string;
}

export function observabilityPipelineConfigDestinationHttpClientCompressionToTerraform(struct?: ObservabilityPipelineConfigDestinationHttpClientCompression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktn.stringToTerraform(struct!.algorithm),
  }
}


export function observabilityPipelineConfigDestinationHttpClientCompressionToHclTerraform(struct?: ObservabilityPipelineConfigDestinationHttpClientCompression | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktn.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationHttpClientCompressionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationHttpClientCompression | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationHttpClientCompression | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }
}

export class ObservabilityPipelineConfigDestinationHttpClientCompressionList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationHttpClientCompression[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationHttpClientCompressionOutputReference {
    return new ObservabilityPipelineConfigDestinationHttpClientCompressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationHttpClientTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigDestinationHttpClientTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationHttpClientTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
  }
}


export function observabilityPipelineConfigDestinationHttpClientTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationHttpClientTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationHttpClientTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationHttpClientTls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationHttpClientTls | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationHttpClientTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationHttpClientTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationHttpClientTlsOutputReference {
    return new ObservabilityPipelineConfigDestinationHttpClientTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationHttpClient {
  /**
  * HTTP authentication strategy. Valid values are `none`, `basic`, `bearer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#auth_strategy ObservabilityPipeline#auth_strategy}
  */
  readonly authStrategy?: string;
  /**
  * Encoding format for events. Valid values are `json`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding: string;
  /**
  * Name of the environment variable or secret that holds the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#password_key ObservabilityPipeline#password_key}
  */
  readonly passwordKey?: string;
  /**
  * Name of the environment variable or secret that holds the authentication token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#token_key ObservabilityPipeline#token_key}
  */
  readonly tokenKey?: string;
  /**
  * Name of the environment variable or secret that holds the request URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#uri_key ObservabilityPipeline#uri_key}
  */
  readonly uriKey?: string;
  /**
  * Name of the environment variable or secret that holds the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#username_key ObservabilityPipeline#username_key}
  */
  readonly usernameKey?: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationHttpClientBuffer[] | cdktn.IResolvable;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#compression ObservabilityPipeline#compression}
  */
  readonly compression?: ObservabilityPipelineConfigDestinationHttpClientCompression[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationHttpClientTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationHttpClientToTerraform(struct?: ObservabilityPipelineConfigDestinationHttpClient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_strategy: cdktn.stringToTerraform(struct!.authStrategy),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    password_key: cdktn.stringToTerraform(struct!.passwordKey),
    token_key: cdktn.stringToTerraform(struct!.tokenKey),
    uri_key: cdktn.stringToTerraform(struct!.uriKey),
    username_key: cdktn.stringToTerraform(struct!.usernameKey),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationHttpClientBufferToTerraform, true)(struct!.buffer),
    compression: cdktn.listMapper(observabilityPipelineConfigDestinationHttpClientCompressionToTerraform, true)(struct!.compression),
    tls: cdktn.listMapper(observabilityPipelineConfigDestinationHttpClientTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationHttpClientToHclTerraform(struct?: ObservabilityPipelineConfigDestinationHttpClient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_strategy: {
      value: cdktn.stringToHclTerraform(struct!.authStrategy),
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
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationHttpClientBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationHttpClientBufferList",
    },
    compression: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationHttpClientCompressionToHclTerraform, true)(struct!.compression),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationHttpClientCompressionList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationHttpClientTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationHttpClientTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationHttpClientOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationHttpClient | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.authStrategy = this._authStrategy;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
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
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
    }
    if (this._compression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationHttpClient | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authStrategy = undefined;
      this._encoding = undefined;
      this._passwordKey = undefined;
      this._tokenKey = undefined;
      this._uriKey = undefined;
      this._usernameKey = undefined;
      this._buffer.internalValue = undefined;
      this._compression.internalValue = undefined;
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
      this._encoding = value.encoding;
      this._passwordKey = value.passwordKey;
      this._tokenKey = value.tokenKey;
      this._uriKey = value.uriKey;
      this._usernameKey = value.usernameKey;
      this._buffer.internalValue = value.buffer;
      this._compression.internalValue = value.compression;
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

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationHttpClientBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationHttpClientBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new ObservabilityPipelineConfigDestinationHttpClientCompressionList(this, "compression", false);
  public get compression() {
    return this._compression;
  }
  public putCompression(value: ObservabilityPipelineConfigDestinationHttpClientCompression[] | cdktn.IResolvable) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new ObservabilityPipelineConfigDestinationHttpClientTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigDestinationHttpClientTls[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationHttpClientList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationHttpClient[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationHttpClientOutputReference {
    return new ObservabilityPipelineConfigDestinationHttpClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationKafkaBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationKafkaBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationKafkaBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationKafkaBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationKafkaBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationKafkaBufferDiskOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationKafkaBufferDisk | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationKafkaBufferDisk | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationKafkaBufferDiskList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationKafkaBufferDisk[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationKafkaBufferDiskOutputReference {
    return new ObservabilityPipelineConfigDestinationKafkaBufferDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationKafkaBufferMemory {
  /**
  * Maximum events for the memory buffer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationKafkaBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationKafkaBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_events: cdktn.numberToTerraform(struct!.maxEvents),
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationKafkaBufferMemoryToHclTerraform(struct?: ObservabilityPipelineConfigDestinationKafkaBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationKafkaBufferMemoryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationKafkaBufferMemory | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationKafkaBufferMemory | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationKafkaBufferMemoryList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationKafkaBufferMemory[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationKafkaBufferMemoryOutputReference {
    return new ObservabilityPipelineConfigDestinationKafkaBufferMemoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationKafkaBuffer {
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationKafkaBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationKafkaBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationKafkaBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationKafkaBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationKafkaBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationKafkaBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationKafkaBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationKafkaBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationKafkaBufferDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationKafkaBufferDiskList",
    },
    memory: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationKafkaBufferMemoryToHclTerraform, true)(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationKafkaBufferMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationKafkaBufferOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationKafkaBuffer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationKafkaBuffer | cdktn.IResolvable | undefined) {
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
  private _disk = new ObservabilityPipelineConfigDestinationKafkaBufferDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: ObservabilityPipelineConfigDestinationKafkaBufferDisk[] | cdktn.IResolvable) {
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
  private _memory = new ObservabilityPipelineConfigDestinationKafkaBufferMemoryList(this, "memory", false);
  public get memory() {
    return this._memory;
  }
  public putMemory(value: ObservabilityPipelineConfigDestinationKafkaBufferMemory[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationKafkaBufferList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationKafkaBuffer[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationKafkaBufferOutputReference {
    return new ObservabilityPipelineConfigDestinationKafkaBufferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOption {
  /**
  * The name of the librdkafka configuration option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The value of the librdkafka configuration option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigDestinationKafkaLibrdkafkaOptionToTerraform(struct?: ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigDestinationKafkaLibrdkafkaOptionToHclTerraform(struct?: ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOptionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOption | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOption | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOptionList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOption[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOptionOutputReference {
    return new ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationKafkaSasl {
  /**
  * SASL authentication mechanism. Valid values are `PLAIN`, `SCRAM-SHA-256`, `SCRAM-SHA-512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#mechanism ObservabilityPipeline#mechanism}
  */
  readonly mechanism: string;
  /**
  * Name of the environment variable or secret that holds the SASL password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#password_key ObservabilityPipeline#password_key}
  */
  readonly passwordKey?: string;
  /**
  * Name of the environment variable or secret that holds the SASL username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#username_key ObservabilityPipeline#username_key}
  */
  readonly usernameKey?: string;
}

export function observabilityPipelineConfigDestinationKafkaSaslToTerraform(struct?: ObservabilityPipelineConfigDestinationKafkaSasl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mechanism: cdktn.stringToTerraform(struct!.mechanism),
    password_key: cdktn.stringToTerraform(struct!.passwordKey),
    username_key: cdktn.stringToTerraform(struct!.usernameKey),
  }
}


export function observabilityPipelineConfigDestinationKafkaSaslToHclTerraform(struct?: ObservabilityPipelineConfigDestinationKafkaSasl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationKafkaSaslOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationKafkaSasl | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationKafkaSasl | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationKafkaSaslList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationKafkaSasl[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationKafkaSaslOutputReference {
    return new ObservabilityPipelineConfigDestinationKafkaSaslOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationKafkaTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigDestinationKafkaTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationKafkaTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
    key_pass_key: cdktn.stringToTerraform(struct!.keyPassKey),
  }
}


export function observabilityPipelineConfigDestinationKafkaTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationKafkaTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class ObservabilityPipelineConfigDestinationKafkaTlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationKafkaTls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationKafkaTls | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationKafkaTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationKafkaTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationKafkaTlsOutputReference {
    return new ObservabilityPipelineConfigDestinationKafkaTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationKafka {
  /**
  * Name of the environment variable or secret that holds the Kafka bootstrap servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#bootstrap_servers_key ObservabilityPipeline#bootstrap_servers_key}
  */
  readonly bootstrapServersKey?: string;
  /**
  * Compression codec for Kafka messages. Valid values are `none`, `gzip`, `snappy`, `lz4`, `zstd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#compression ObservabilityPipeline#compression}
  */
  readonly compression?: string;
  /**
  * Encoding format for log events. Valid values are `json`, `raw_message`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding: string;
  /**
  * The field name to use for Kafka message headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#headers_key ObservabilityPipeline#headers_key}
  */
  readonly headersKey?: string;
  /**
  * The field name to use as the Kafka message key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#key_field ObservabilityPipeline#key_field}
  */
  readonly keyField?: string;
  /**
  * Maximum time in milliseconds to wait for message delivery confirmation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#message_timeout_ms ObservabilityPipeline#message_timeout_ms}
  */
  readonly messageTimeoutMs?: number;
  /**
  * Duration in seconds for the rate limit window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#rate_limit_duration_secs ObservabilityPipeline#rate_limit_duration_secs}
  */
  readonly rateLimitDurationSecs?: number;
  /**
  * Maximum number of messages allowed per rate limit duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#rate_limit_num ObservabilityPipeline#rate_limit_num}
  */
  readonly rateLimitNum?: number;
  /**
  * Socket timeout in milliseconds for network requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#socket_timeout_ms ObservabilityPipeline#socket_timeout_ms}
  */
  readonly socketTimeoutMs?: number;
  /**
  * The Kafka topic name to publish logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#topic ObservabilityPipeline#topic}
  */
  readonly topic: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationKafkaBuffer[] | cdktn.IResolvable;
  /**
  * librdkafka_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#librdkafka_option ObservabilityPipeline#librdkafka_option}
  */
  readonly librdkafkaOption?: ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOption[] | cdktn.IResolvable;
  /**
  * sasl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#sasl ObservabilityPipeline#sasl}
  */
  readonly sasl?: ObservabilityPipelineConfigDestinationKafkaSasl[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationKafkaTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationKafkaToTerraform(struct?: ObservabilityPipelineConfigDestinationKafka | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_servers_key: cdktn.stringToTerraform(struct!.bootstrapServersKey),
    compression: cdktn.stringToTerraform(struct!.compression),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    headers_key: cdktn.stringToTerraform(struct!.headersKey),
    key_field: cdktn.stringToTerraform(struct!.keyField),
    message_timeout_ms: cdktn.numberToTerraform(struct!.messageTimeoutMs),
    rate_limit_duration_secs: cdktn.numberToTerraform(struct!.rateLimitDurationSecs),
    rate_limit_num: cdktn.numberToTerraform(struct!.rateLimitNum),
    socket_timeout_ms: cdktn.numberToTerraform(struct!.socketTimeoutMs),
    topic: cdktn.stringToTerraform(struct!.topic),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationKafkaBufferToTerraform, true)(struct!.buffer),
    librdkafka_option: cdktn.listMapper(observabilityPipelineConfigDestinationKafkaLibrdkafkaOptionToTerraform, true)(struct!.librdkafkaOption),
    sasl: cdktn.listMapper(observabilityPipelineConfigDestinationKafkaSaslToTerraform, true)(struct!.sasl),
    tls: cdktn.listMapper(observabilityPipelineConfigDestinationKafkaTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationKafkaToHclTerraform(struct?: ObservabilityPipelineConfigDestinationKafka | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap_servers_key: {
      value: cdktn.stringToHclTerraform(struct!.bootstrapServersKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: cdktn.stringToHclTerraform(struct!.compression),
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
    headers_key: {
      value: cdktn.stringToHclTerraform(struct!.headersKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_field: {
      value: cdktn.stringToHclTerraform(struct!.keyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_timeout_ms: {
      value: cdktn.numberToHclTerraform(struct!.messageTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_duration_secs: {
      value: cdktn.numberToHclTerraform(struct!.rateLimitDurationSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_num: {
      value: cdktn.numberToHclTerraform(struct!.rateLimitNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    socket_timeout_ms: {
      value: cdktn.numberToHclTerraform(struct!.socketTimeoutMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationKafkaBufferToHclTerraform, true)(struct!.buffer),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationKafkaBufferList",
    },
    librdkafka_option: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationKafkaLibrdkafkaOptionToHclTerraform, true)(struct!.librdkafkaOption),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOptionList",
    },
    sasl: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationKafkaSaslToHclTerraform, true)(struct!.sasl),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationKafkaSaslList",
    },
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationKafkaTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationKafkaTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityPipelineConfigDestinationKafkaOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): ObservabilityPipelineConfigDestinationKafka | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapServersKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServersKey = this._bootstrapServersKey;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._headersKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersKey = this._headersKey;
    }
    if (this._keyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyField = this._keyField;
    }
    if (this._messageTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageTimeoutMs = this._messageTimeoutMs;
    }
    if (this._rateLimitDurationSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitDurationSecs = this._rateLimitDurationSecs;
    }
    if (this._rateLimitNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitNum = this._rateLimitNum;
    }
    if (this._socketTimeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.socketTimeoutMs = this._socketTimeoutMs;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._buffer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer?.internalValue;
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationKafka | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootstrapServersKey = undefined;
      this._compression = undefined;
      this._encoding = undefined;
      this._headersKey = undefined;
      this._keyField = undefined;
      this._messageTimeoutMs = undefined;
      this._rateLimitDurationSecs = undefined;
      this._rateLimitNum = undefined;
      this._socketTimeoutMs = undefined;
      this._topic = undefined;
      this._buffer.internalValue = undefined;
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
      this._compression = value.compression;
      this._encoding = value.encoding;
      this._headersKey = value.headersKey;
      this._keyField = value.keyField;
      this._messageTimeoutMs = value.messageTimeoutMs;
      this._rateLimitDurationSecs = value.rateLimitDurationSecs;
      this._rateLimitNum = value.rateLimitNum;
      this._socketTimeoutMs = value.socketTimeoutMs;
      this._topic = value.topic;
      this._buffer.internalValue = value.buffer;
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

  // headers_key - computed: false, optional: true, required: false
  private _headersKey?: string; 
  public get headersKey() {
    return this.getStringAttribute('headers_key');
  }
  public set headersKey(value: string) {
    this._headersKey = value;
  }
  public resetHeadersKey() {
    this._headersKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersKeyInput() {
    return this._headersKey;
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

  // message_timeout_ms - computed: false, optional: true, required: false
  private _messageTimeoutMs?: number; 
  public get messageTimeoutMs() {
    return this.getNumberAttribute('message_timeout_ms');
  }
  public set messageTimeoutMs(value: number) {
    this._messageTimeoutMs = value;
  }
  public resetMessageTimeoutMs() {
    this._messageTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTimeoutMsInput() {
    return this._messageTimeoutMs;
  }

  // rate_limit_duration_secs - computed: false, optional: true, required: false
  private _rateLimitDurationSecs?: number; 
  public get rateLimitDurationSecs() {
    return this.getNumberAttribute('rate_limit_duration_secs');
  }
  public set rateLimitDurationSecs(value: number) {
    this._rateLimitDurationSecs = value;
  }
  public resetRateLimitDurationSecs() {
    this._rateLimitDurationSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitDurationSecsInput() {
    return this._rateLimitDurationSecs;
  }

  // rate_limit_num - computed: false, optional: true, required: false
  private _rateLimitNum?: number; 
  public get rateLimitNum() {
    return this.getNumberAttribute('rate_limit_num');
  }
  public set rateLimitNum(value: number) {
    this._rateLimitNum = value;
  }
  public resetRateLimitNum() {
    this._rateLimitNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitNumInput() {
    return this._rateLimitNum;
  }

  // socket_timeout_ms - computed: false, optional: true, required: false
  private _socketTimeoutMs?: number; 
  public get socketTimeoutMs() {
    return this.getNumberAttribute('socket_timeout_ms');
  }
  public set socketTimeoutMs(value: number) {
    this._socketTimeoutMs = value;
  }
  public resetSocketTimeoutMs() {
    this._socketTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketTimeoutMsInput() {
    return this._socketTimeoutMs;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // buffer - computed: false, optional: true, required: false
  private _buffer = new ObservabilityPipelineConfigDestinationKafkaBufferList(this, "buffer", false);
  public get buffer() {
    return this._buffer;
  }
  public putBuffer(value: ObservabilityPipelineConfigDestinationKafkaBuffer[] | cdktn.IResolvable) {
    this._buffer.internalValue = value;
  }
  public resetBuffer() {
    this._buffer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer.internalValue;
  }

  // librdkafka_option - computed: false, optional: true, required: false
  private _librdkafkaOption = new ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOptionList(this, "librdkafka_option", false);
  public get librdkafkaOption() {
    return this._librdkafkaOption;
  }
  public putLibrdkafkaOption(value: ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOption[] | cdktn.IResolvable) {
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
  private _sasl = new ObservabilityPipelineConfigDestinationKafkaSaslList(this, "sasl", false);
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: ObservabilityPipelineConfigDestinationKafkaSasl[] | cdktn.IResolvable) {
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
  private _tls = new ObservabilityPipelineConfigDestinationKafkaTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: ObservabilityPipelineConfigDestinationKafkaTls[] | cdktn.IResolvable) {
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

export class ObservabilityPipelineConfigDestinationKafkaList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationKafka[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigDestinationKafkaOutputReference {
    return new ObservabilityPipelineConfigDestinationKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationMicrosoftSentinelBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationMicrosoftSentinelBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationMicrosoftSentinelBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationMicrosoftSentinelBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationMicrosoftSentinelBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationMicrosoftSentinelBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationMicrosoftSentinelBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#client_id ObservabilityPipeline#client_id}
  */
  readonly clientId: string;
  /**
  * Name of the environment variable or secret that holds the Azure AD client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#client_secret_key ObservabilityPipeline#client_secret_key}
  */
  readonly clientSecretKey?: string;
  /**
  * Name of the environment variable or secret that holds the Data Collection Endpoint (DCE) URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#dce_uri_key ObservabilityPipeline#dce_uri_key}
  */
  readonly dceUriKey?: string;
  /**
  * The immutable ID of the Data Collection Rule (DCR).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#dcr_immutable_id ObservabilityPipeline#dcr_immutable_id}
  */
  readonly dcrImmutableId: string;
  /**
  * The name of the Log Analytics table where logs will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#table ObservabilityPipeline#table}
  */
  readonly table: string;
  /**
  * Azure AD tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#tenant_id ObservabilityPipeline#tenant_id}
  */
  readonly tenantId: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationMicrosoftSentinelBuffer[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationMicrosoftSentinelToTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationNewRelicBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelicBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationNewRelicBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelicBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationNewRelicBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelicBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationNewRelicBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationNewRelicBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationNewRelicBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelicBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationNewRelicBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationNewRelicBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationNewRelicBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelicBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#account_id_key ObservabilityPipeline#account_id_key}
  */
  readonly accountIdKey?: string;
  /**
  * Name of the environment variable or secret that holds the New Relic license key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#license_key_key ObservabilityPipeline#license_key_key}
  */
  readonly licenseKeyKey?: string;
  /**
  * The New Relic region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationNewRelicBuffer[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationNewRelicToTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
export interface ObservabilityPipelineConfigDestinationOpensearchBufferDisk {
  /**
  * Maximum size of the disk buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationOpensearchBufferDiskToTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktn.numberToTerraform(struct!.maxSize),
    when_full: cdktn.stringToTerraform(struct!.whenFull),
  }
}


export function observabilityPipelineConfigDestinationOpensearchBufferDiskToHclTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchBufferDisk | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_events ObservabilityPipeline#max_events}
  */
  readonly maxEvents?: number;
  /**
  * Maximum size of the memory buffer (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#max_size ObservabilityPipeline#max_size}
  */
  readonly maxSize?: number;
  /**
  * Behavior when the buffer is full. Valid values are `block` or `drop_newest`. Defaults to `"block"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#when_full ObservabilityPipeline#when_full}
  */
  readonly whenFull?: string;
}

export function observabilityPipelineConfigDestinationOpensearchBufferMemoryToTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchBufferMemory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#disk ObservabilityPipeline#disk}
  */
  readonly disk?: ObservabilityPipelineConfigDestinationOpensearchBufferDisk[] | cdktn.IResolvable;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#memory ObservabilityPipeline#memory}
  */
  readonly memory?: ObservabilityPipelineConfigDestinationOpensearchBufferMemory[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationOpensearchBufferToTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktn.listMapper(observabilityPipelineConfigDestinationOpensearchBufferDiskToTerraform, true)(struct!.disk),
    memory: cdktn.listMapper(observabilityPipelineConfigDestinationOpensearchBufferMemoryToTerraform, true)(struct!.memory),
  }
}


export function observabilityPipelineConfigDestinationOpensearchBufferToHclTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchBuffer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#dataset ObservabilityPipeline#dataset}
  */
  readonly dataset?: string;
  /**
  * The data stream type for your logs. This determines how logs are categorized within the data stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#dtype ObservabilityPipeline#dtype}
  */
  readonly dtype?: string;
  /**
  * The data stream namespace for your logs. This separates logs into different environments or domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#namespace ObservabilityPipeline#namespace}
  */
  readonly namespace?: string;
}

export function observabilityPipelineConfigDestinationOpensearchDataStreamToTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearchDataStream | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#bulk_index ObservabilityPipeline#bulk_index}
  */
  readonly bulkIndex?: string;
  /**
  * buffer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#buffer ObservabilityPipeline#buffer}
  */
  readonly buffer?: ObservabilityPipelineConfigDestinationOpensearchBuffer[] | cdktn.IResolvable;
  /**
  * data_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.11.0/docs/resources/observability_pipeline#data_stream ObservabilityPipeline#data_stream}
  */
  readonly dataStream?: ObservabilityPipelineConfigDestinationOpensearchDataStream[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationOpensearchToTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bulk_index: cdktn.stringToTerraform(struct!.bulkIndex),
    buffer: cdktn.listMapper(observabilityPipelineConfigDestinationOpensearchBufferToTerraform, true)(struct!.buffer),
    data_stream: cdktn.listMapper(observabilityPipelineConfigDestinationOpensearchDataStreamToTerraform, true)(struct!.dataStream),
  }
}


export function observabilityPipelineConfigDestinationOpensearchToHclTerraform(struct?: ObservabilityPipelineConfigDestinationOpensearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bulk_index: {
      value: cdktn.stringToHclTerraform(struct!.bulkIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
