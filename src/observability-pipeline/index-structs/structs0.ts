/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
export interface ObservabilityPipelineConfigDestinationAmazonOpensearchAuth {
  /**
  * ARN of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#assume_role ObservabilityPipeline#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * AWS region override (if applicable).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#aws_region ObservabilityPipeline#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * External ID for assumed role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#external_id ObservabilityPipeline#external_id}
  */
  readonly externalId?: string;
  /**
  * Session name for assumed role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#session_name ObservabilityPipeline#session_name}
  */
  readonly sessionName?: string;
  /**
  * The authentication strategy to use (e.g. aws or basic).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#strategy ObservabilityPipeline#strategy}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonOpensearchAuthOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonOpensearchAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonOpensearch {
  /**
  * The index or datastream to write logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#bulk_index ObservabilityPipeline#bulk_index}
  */
  readonly bulkIndex?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationAmazonOpensearchAuth[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationAmazonOpensearchToTerraform(struct?: ObservabilityPipelineConfigDestinationAmazonOpensearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bulk_index: cdktn.stringToTerraform(struct!.bulkIndex),
    auth: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonOpensearchAuthToTerraform, true)(struct!.auth),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonOpensearch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bulkIndex = undefined;
      this._auth.internalValue = undefined;
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
}

export class ObservabilityPipelineConfigDestinationAmazonOpensearchList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonOpensearch[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#assume_role ObservabilityPipeline#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * A unique identifier for cross-account role assumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#external_id ObservabilityPipeline#external_id}
  */
  readonly externalId?: string;
  /**
  * A session identifier used for logging and tracing the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#session_name ObservabilityPipeline#session_name}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3AuthOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3AuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonS3 {
  /**
  * S3 bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#bucket ObservabilityPipeline#bucket}
  */
  readonly bucket: string;
  /**
  * Prefix for object keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#key_prefix ObservabilityPipeline#key_prefix}
  */
  readonly keyPrefix: string;
  /**
  * AWS region of the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
  /**
  * S3 storage class. Valid values are `STANDARD`, `REDUCED_REDUNDANCY`, `INTELLIGENT_TIERING`, `STANDARD_IA`, `EXPRESS_ONEZONE`, `ONEZONE_IA`, `GLACIER`, `GLACIER_IR`, `DEEP_ARCHIVE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#storage_class ObservabilityPipeline#storage_class}
  */
  readonly storageClass: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationAmazonS3Auth[] | cdktn.IResolvable;
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
}

export class ObservabilityPipelineConfigDestinationAmazonS3List extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonS3[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonS3OutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuth {
  /**
  * The Amazon Resource Name (ARN) of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#assume_role ObservabilityPipeline#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * A unique identifier for cross-account role assumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#external_id ObservabilityPipeline#external_id}
  */
  readonly externalId?: string;
  /**
  * A session identifier used for logging and tracing the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#session_name ObservabilityPipeline#session_name}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuthOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAmazonSecurityLakeTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationAmazonSecurityLakeTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
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
}

export class ObservabilityPipelineConfigDestinationAmazonSecurityLakeTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAmazonSecurityLakeTls[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#bucket ObservabilityPipeline#bucket}
  */
  readonly bucket: string;
  /**
  * Custom source name for the logs in Security Lake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#custom_source_name ObservabilityPipeline#custom_source_name}
  */
  readonly customSourceName: string;
  /**
  * AWS region of the Security Lake bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationAmazonSecurityLakeAuth[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationAmazonSecurityLakeOutputReference {
    return new ObservabilityPipelineConfigDestinationAmazonSecurityLakeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationAzureStorage {
  /**
  * Optional prefix for blobs written to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#blob_prefix ObservabilityPipeline#blob_prefix}
  */
  readonly blobPrefix?: string;
  /**
  * The name of the Azure Blob Storage container to store logs in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#container_name ObservabilityPipeline#container_name}
  */
  readonly containerName: string;
}

export function observabilityPipelineConfigDestinationAzureStorageToTerraform(struct?: ObservabilityPipelineConfigDestinationAzureStorage | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_prefix: cdktn.stringToTerraform(struct!.blobPrefix),
    container_name: cdktn.stringToTerraform(struct!.containerName),
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
    container_name: {
      value: cdktn.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationAzureStorage | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blobPrefix = undefined;
      this._containerName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blobPrefix = value.blobPrefix;
      this._containerName = value.containerName;
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
}

export class ObservabilityPipelineConfigDestinationAzureStorageList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationAzureStorage[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationAzureStorageOutputReference {
    return new ObservabilityPipelineConfigDestinationAzureStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationCloudPrem {
}

export function observabilityPipelineConfigDestinationCloudPremToTerraform(struct?: ObservabilityPipelineConfigDestinationCloudPrem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function observabilityPipelineConfigDestinationCloudPremToHclTerraform(struct?: ObservabilityPipelineConfigDestinationCloudPrem | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationCloudPrem | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationCloudPremList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationCloudPrem[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationCloudPremOutputReference {
    return new ObservabilityPipelineConfigDestinationCloudPremOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompression {
  /**
  * Compression algorithm for log events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#algorithm ObservabilityPipeline#algorithm}
  */
  readonly algorithm: string;
  /**
  * Compression level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#level ObservabilityPipeline#level}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
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
}

export class ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemTls[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding: string;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#compression ObservabilityPipeline#compression}
  */
  readonly compression?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemCompression[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemOutputReference {
    return new ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationDatadogLogsRoutes {
  /**
  * Name of the environment variable or secret that stores the Datadog API key used by this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#api_key_key ObservabilityPipeline#api_key_key}
  */
  readonly apiKeyKey: string;
  /**
  * A Datadog search query that determines which logs are forwarded using this route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * Unique identifier for this route within the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#route_id ObservabilityPipeline#route_id}
  */
  readonly routeId: string;
  /**
  * Datadog site where matching logs are sent (for example, `us1`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#site ObservabilityPipeline#site}
  */
  readonly site: string;
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
}

export class ObservabilityPipelineConfigDestinationDatadogLogsRoutesList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationDatadogLogsRoutes[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#routes ObservabilityPipeline#routes}
  */
  readonly routes?: ObservabilityPipelineConfigDestinationDatadogLogsRoutes[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationDatadogLogsToTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routes: cdktn.listMapper(observabilityPipelineConfigDestinationDatadogLogsRoutesToTerraform, true)(struct!.routes),
  }
}


export function observabilityPipelineConfigDestinationDatadogLogsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationDatadogLogs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      this._routes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routes.internalValue = value.routes;
    }
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationDatadogMetricsOutputReference {
    return new ObservabilityPipelineConfigDestinationDatadogMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationElasticsearchDataStream {
  /**
  * The data stream dataset for your logs. This groups logs by their source or application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#dataset ObservabilityPipeline#dataset}
  */
  readonly dataset?: string;
  /**
  * The data stream type for your logs. This determines how logs are categorized within the data stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#dtype ObservabilityPipeline#dtype}
  */
  readonly dtype?: string;
  /**
  * The data stream namespace for your logs. This separates logs into different environments or domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#namespace ObservabilityPipeline#namespace}
  */
  readonly namespace?: string;
}

export function observabilityPipelineConfigDestinationElasticsearchDataStreamToTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchDataStream | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigDestinationElasticsearchDataStreamToHclTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearchDataStream | cdktn.IResolvable): any {
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationElasticsearchDataStream | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigDestinationElasticsearchDataStreamList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationElasticsearchDataStream[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationElasticsearchDataStreamOutputReference {
    return new ObservabilityPipelineConfigDestinationElasticsearchDataStreamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationElasticsearch {
  /**
  * The Elasticsearch API version to use. Set to `auto` to auto-detect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#api_version ObservabilityPipeline#api_version}
  */
  readonly apiVersion?: string;
  /**
  * The index or datastream to write logs to in Elasticsearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#bulk_index ObservabilityPipeline#bulk_index}
  */
  readonly bulkIndex?: string;
  /**
  * data_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#data_stream ObservabilityPipeline#data_stream}
  */
  readonly dataStream?: ObservabilityPipelineConfigDestinationElasticsearchDataStream[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationElasticsearchToTerraform(struct?: ObservabilityPipelineConfigDestinationElasticsearch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktn.stringToTerraform(struct!.apiVersion),
    bulk_index: cdktn.stringToTerraform(struct!.bulkIndex),
    data_stream: cdktn.listMapper(observabilityPipelineConfigDestinationElasticsearchDataStreamToTerraform, true)(struct!.dataStream),
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
    data_stream: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigDestinationElasticsearchDataStreamToHclTerraform, true)(struct!.dataStream),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigDestinationElasticsearchDataStreamList",
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
    if (this._dataStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStream = this._dataStream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationElasticsearch | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._bulkIndex = undefined;
      this._dataStream.internalValue = undefined;
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
      this._dataStream.internalValue = value.dataStream;
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
}

export class ObservabilityPipelineConfigDestinationElasticsearchList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationElasticsearch[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Path to the GCP service account key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#credentials_file ObservabilityPipeline#credentials_file}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationGoogleCloudStorageAuthOutputReference {
    return new ObservabilityPipelineConfigDestinationGoogleCloudStorageAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGoogleCloudStorageMetadata {
  /**
  * The metadata key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The metadata value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#acl ObservabilityPipeline#acl}
  */
  readonly acl?: string;
  /**
  * Name of the GCS bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#bucket ObservabilityPipeline#bucket}
  */
  readonly bucket: string;
  /**
  * Optional prefix for object keys within the GCS bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#key_prefix ObservabilityPipeline#key_prefix}
  */
  readonly keyPrefix?: string;
  /**
  * Storage class used for objects stored in GCS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#storage_class ObservabilityPipeline#storage_class}
  */
  readonly storageClass: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationGoogleCloudStorageAuth[] | cdktn.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#metadata ObservabilityPipeline#metadata}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Path to the GCP service account key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#credentials_file ObservabilityPipeline#credentials_file}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationGooglePubsubAuthOutputReference {
    return new ObservabilityPipelineConfigDestinationGooglePubsubAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGooglePubsubTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationGooglePubsubTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
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
}

export class ObservabilityPipelineConfigDestinationGooglePubsubTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGooglePubsubTls[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding: string;
  /**
  * The GCP project ID that owns the Pub/Sub topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#project ObservabilityPipeline#project}
  */
  readonly project: string;
  /**
  * The Pub/Sub topic name to publish logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#topic ObservabilityPipeline#topic}
  */
  readonly topic: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationGooglePubsubAuth[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
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
    project: cdktn.stringToTerraform(struct!.project),
    topic: cdktn.stringToTerraform(struct!.topic),
    auth: cdktn.listMapper(observabilityPipelineConfigDestinationGooglePubsubAuthToTerraform, true)(struct!.auth),
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
      this._project = undefined;
      this._topic = undefined;
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
      this._encoding = value.encoding;
      this._project = value.project;
      this._topic = value.topic;
      this._auth.internalValue = value.auth;
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Path to the GCP service account key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#credentials_file ObservabilityPipeline#credentials_file}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationGoogleSecopsAuthOutputReference {
    return new ObservabilityPipelineConfigDestinationGoogleSecopsAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationGoogleSecops {
  /**
  * The Google SecOps customer ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#customer_id ObservabilityPipeline#customer_id}
  */
  readonly customerId: string;
  /**
  * The encoding format for the logs sent to Google SecOps. Valid values are `json`, `raw_message`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding: string;
  /**
  * The log type metadata associated with the Google SecOps destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#log_type ObservabilityPipeline#log_type}
  */
  readonly logType: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigDestinationGoogleSecopsAuth[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationGoogleSecopsToTerraform(struct?: ObservabilityPipelineConfigDestinationGoogleSecops | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_id: cdktn.stringToTerraform(struct!.customerId),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    log_type: cdktn.stringToTerraform(struct!.logType),
    auth: cdktn.listMapper(observabilityPipelineConfigDestinationGoogleSecopsAuthToTerraform, true)(struct!.auth),
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
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationGoogleSecops | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerId = undefined;
      this._encoding = undefined;
      this._logType = undefined;
      this._auth.internalValue = undefined;
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
      this._logType = value.logType;
      this._auth.internalValue = value.auth;
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
}

export class ObservabilityPipelineConfigDestinationGoogleSecopsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationGoogleSecops[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationGoogleSecopsOutputReference {
    return new ObservabilityPipelineConfigDestinationGoogleSecopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationHttpClientCompression {
  /**
  * Compression algorithm. Valid values are `gzip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#algorithm ObservabilityPipeline#algorithm}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationHttpClientTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
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
}

export class ObservabilityPipelineConfigDestinationHttpClientTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationHttpClientTls[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#auth_strategy ObservabilityPipeline#auth_strategy}
  */
  readonly authStrategy?: string;
  /**
  * Encoding format for events. Valid values are `json`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding: string;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#compression ObservabilityPipeline#compression}
  */
  readonly compression?: ObservabilityPipelineConfigDestinationHttpClientCompression[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationHttpClientOutputReference {
    return new ObservabilityPipelineConfigDestinationHttpClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOption {
  /**
  * The name of the librdkafka configuration option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The value of the librdkafka configuration option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#mechanism ObservabilityPipeline#mechanism}
  */
  readonly mechanism: string;
}

export function observabilityPipelineConfigDestinationKafkaSaslToTerraform(struct?: ObservabilityPipelineConfigDestinationKafkaSasl | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mechanism: cdktn.stringToTerraform(struct!.mechanism),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationKafkaSasl | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mechanism = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mechanism = value.mechanism;
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
}

export class ObservabilityPipelineConfigDestinationKafkaSaslList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationKafkaSasl[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationKafkaTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
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
}

export class ObservabilityPipelineConfigDestinationKafkaTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationKafkaTls[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Compression codec for Kafka messages. Valid values are `none`, `gzip`, `snappy`, `lz4`, `zstd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#compression ObservabilityPipeline#compression}
  */
  readonly compression?: string;
  /**
  * Encoding format for log events. Valid values are `json`, `raw_message`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding: string;
  /**
  * The field name to use for Kafka message headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#headers_key ObservabilityPipeline#headers_key}
  */
  readonly headersKey?: string;
  /**
  * The field name to use as the Kafka message key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#key_field ObservabilityPipeline#key_field}
  */
  readonly keyField?: string;
  /**
  * Maximum time in milliseconds to wait for message delivery confirmation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#message_timeout_ms ObservabilityPipeline#message_timeout_ms}
  */
  readonly messageTimeoutMs?: number;
  /**
  * Duration in seconds for the rate limit window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#rate_limit_duration_secs ObservabilityPipeline#rate_limit_duration_secs}
  */
  readonly rateLimitDurationSecs?: number;
  /**
  * Maximum number of messages allowed per rate limit duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#rate_limit_num ObservabilityPipeline#rate_limit_num}
  */
  readonly rateLimitNum?: number;
  /**
  * Socket timeout in milliseconds for network requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#socket_timeout_ms ObservabilityPipeline#socket_timeout_ms}
  */
  readonly socketTimeoutMs?: number;
  /**
  * The Kafka topic name to publish logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#topic ObservabilityPipeline#topic}
  */
  readonly topic: string;
  /**
  * librdkafka_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#librdkafka_option ObservabilityPipeline#librdkafka_option}
  */
  readonly librdkafkaOption?: ObservabilityPipelineConfigDestinationKafkaLibrdkafkaOption[] | cdktn.IResolvable;
  /**
  * sasl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#sasl ObservabilityPipeline#sasl}
  */
  readonly sasl?: ObservabilityPipelineConfigDestinationKafkaSasl[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationKafkaTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationKafkaToTerraform(struct?: ObservabilityPipelineConfigDestinationKafka | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktn.stringToTerraform(struct!.compression),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    headers_key: cdktn.stringToTerraform(struct!.headersKey),
    key_field: cdktn.stringToTerraform(struct!.keyField),
    message_timeout_ms: cdktn.numberToTerraform(struct!.messageTimeoutMs),
    rate_limit_duration_secs: cdktn.numberToTerraform(struct!.rateLimitDurationSecs),
    rate_limit_num: cdktn.numberToTerraform(struct!.rateLimitNum),
    socket_timeout_ms: cdktn.numberToTerraform(struct!.socketTimeoutMs),
    topic: cdktn.stringToTerraform(struct!.topic),
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
      this._compression = undefined;
      this._encoding = undefined;
      this._headersKey = undefined;
      this._keyField = undefined;
      this._messageTimeoutMs = undefined;
      this._rateLimitDurationSecs = undefined;
      this._rateLimitNum = undefined;
      this._socketTimeoutMs = undefined;
      this._topic = undefined;
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
      this._compression = value.compression;
      this._encoding = value.encoding;
      this._headersKey = value.headersKey;
      this._keyField = value.keyField;
      this._messageTimeoutMs = value.messageTimeoutMs;
      this._rateLimitDurationSecs = value.rateLimitDurationSecs;
      this._rateLimitNum = value.rateLimitNum;
      this._socketTimeoutMs = value.socketTimeoutMs;
      this._topic = value.topic;
      this._librdkafkaOption.internalValue = value.librdkafkaOption;
      this._sasl.internalValue = value.sasl;
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationKafkaOutputReference {
    return new ObservabilityPipelineConfigDestinationKafkaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationMicrosoftSentinel {
  /**
  * Azure AD client ID used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#client_id ObservabilityPipeline#client_id}
  */
  readonly clientId: string;
  /**
  * The immutable ID of the Data Collection Rule (DCR).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#dcr_immutable_id ObservabilityPipeline#dcr_immutable_id}
  */
  readonly dcrImmutableId: string;
  /**
  * The name of the Log Analytics table where logs will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#table ObservabilityPipeline#table}
  */
  readonly table: string;
  /**
  * Azure AD tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#tenant_id ObservabilityPipeline#tenant_id}
  */
  readonly tenantId: string;
}

export function observabilityPipelineConfigDestinationMicrosoftSentinelToTerraform(struct?: ObservabilityPipelineConfigDestinationMicrosoftSentinel | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    dcr_immutable_id: cdktn.stringToTerraform(struct!.dcrImmutableId),
    table: cdktn.stringToTerraform(struct!.table),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationMicrosoftSentinel | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._dcrImmutableId = undefined;
      this._table = undefined;
      this._tenantId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._dcrImmutableId = value.dcrImmutableId;
      this._table = value.table;
      this._tenantId = value.tenantId;
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
}

export class ObservabilityPipelineConfigDestinationMicrosoftSentinelList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationMicrosoftSentinel[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationMicrosoftSentinelOutputReference {
    return new ObservabilityPipelineConfigDestinationMicrosoftSentinelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationNewRelic {
  /**
  * The New Relic region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
}

export function observabilityPipelineConfigDestinationNewRelicToTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function observabilityPipelineConfigDestinationNewRelicToHclTerraform(struct?: ObservabilityPipelineConfigDestinationNewRelic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationNewRelic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
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
}

export class ObservabilityPipelineConfigDestinationNewRelicList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationNewRelic[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationNewRelicOutputReference {
    return new ObservabilityPipelineConfigDestinationNewRelicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationOpensearchDataStream {
  /**
  * The data stream dataset for your logs. This groups logs by their source or application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#dataset ObservabilityPipeline#dataset}
  */
  readonly dataset?: string;
  /**
  * The data stream type for your logs. This determines how logs are categorized within the data stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#dtype ObservabilityPipeline#dtype}
  */
  readonly dtype?: string;
  /**
  * The data stream namespace for your logs. This separates logs into different environments or domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#namespace ObservabilityPipeline#namespace}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#bulk_index ObservabilityPipeline#bulk_index}
  */
  readonly bulkIndex?: string;
  /**
  * data_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#data_stream ObservabilityPipeline#data_stream}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationOpensearchOutputReference {
    return new ObservabilityPipelineConfigDestinationOpensearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationRsyslogTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigDestinationRsyslogTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationRsyslogTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigDestinationRsyslogTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationRsyslogTls | cdktn.IResolvable): any {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationRsyslogTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
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
}

export class ObservabilityPipelineConfigDestinationRsyslogTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationRsyslogTls[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Optional socket keepalive duration in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#keepalive ObservabilityPipeline#keepalive}
  */
  readonly keepalive?: number;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationRsyslogTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationRsyslogToTerraform(struct?: ObservabilityPipelineConfigDestinationRsyslog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keepalive: cdktn.numberToTerraform(struct!.keepalive),
    tls: cdktn.listMapper(observabilityPipelineConfigDestinationRsyslogTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationRsyslogToHclTerraform(struct?: ObservabilityPipelineConfigDestinationRsyslog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keepalive: {
      value: cdktn.numberToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
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
      this._keepalive = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepalive = value.keepalive;
      this._tls.internalValue = value.tls;
    }
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationRsyslogOutputReference {
    return new ObservabilityPipelineConfigDestinationRsyslogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSentinelOne {
  /**
  * The SentinelOne region to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
}

export function observabilityPipelineConfigDestinationSentinelOneToTerraform(struct?: ObservabilityPipelineConfigDestinationSentinelOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function observabilityPipelineConfigDestinationSentinelOneToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSentinelOne | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktn.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSentinelOne | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
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
}

export class ObservabilityPipelineConfigDestinationSentinelOneList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSentinelOne[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationSentinelOneOutputReference {
    return new ObservabilityPipelineConfigDestinationSentinelOneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimited {
  /**
  * A single ASCII character used as a delimiter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#delimiter ObservabilityPipeline#delimiter}
  */
  readonly delimiter: string;
}

export function observabilityPipelineConfigDestinationSocketFramingCharacterDelimitedToTerraform(struct?: ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimited | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
  }
}


export function observabilityPipelineConfigDestinationSocketFramingCharacterDelimitedToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimited | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#method ObservabilityPipeline#method}
  */
  readonly method: string;
  /**
  * character_delimited block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#character_delimited ObservabilityPipeline#character_delimited}
  */
  readonly characterDelimited?: ObservabilityPipelineConfigDestinationSocketFramingCharacterDelimited[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSocketFramingToTerraform(struct?: ObservabilityPipelineConfigDestinationSocketFraming | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
    character_delimited: cdktn.listMapper(observabilityPipelineConfigDestinationSocketFramingCharacterDelimitedToTerraform, true)(struct!.characterDelimited),
  }
}


export function observabilityPipelineConfigDestinationSocketFramingToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSocketFraming | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigDestinationSocketTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationSocketTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigDestinationSocketTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSocketTls | cdktn.IResolvable): any {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSocketTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
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
}

export class ObservabilityPipelineConfigDestinationSocketTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSocketTls[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Encoding format for log events. Valid values are `json`, `raw_message`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding: string;
  /**
  * The protocol used to send logs. Valid values are `tcp`, `udp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode: string;
  /**
  * framing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#framing ObservabilityPipeline#framing}
  */
  readonly framing?: ObservabilityPipelineConfigDestinationSocketFraming[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationSocketTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSocketToTerraform(struct?: ObservabilityPipelineConfigDestinationSocket | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktn.stringToTerraform(struct!.encoding),
    mode: cdktn.stringToTerraform(struct!.mode),
    framing: cdktn.listMapper(observabilityPipelineConfigDestinationSocketFramingToTerraform, true)(struct!.framing),
    tls: cdktn.listMapper(observabilityPipelineConfigDestinationSocketTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationSocketToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSocket | cdktn.IResolvable): any {
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
    mode: {
      value: cdktn.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
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

  public set internalValue(value: ObservabilityPipelineConfigDestinationSocket | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encoding = undefined;
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
      this._encoding = value.encoding;
      this._mode = value.mode;
      this._framing.internalValue = value.framing;
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationSocketOutputReference {
    return new ObservabilityPipelineConfigDestinationSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSplunkHec {
  /**
  * If `true`, Splunk tries to extract timestamps from incoming log events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#auto_extract_timestamp ObservabilityPipeline#auto_extract_timestamp}
  */
  readonly autoExtractTimestamp?: boolean | cdktn.IResolvable;
  /**
  * Encoding format for log events. Valid values: `json`, `raw_message`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding: string;
  /**
  * Optional name of the Splunk index where logs are written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#index ObservabilityPipeline#index}
  */
  readonly index?: string;
  /**
  * The Splunk sourcetype to assign to log events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#sourcetype ObservabilityPipeline#sourcetype}
  */
  readonly sourcetype?: string;
}

export function observabilityPipelineConfigDestinationSplunkHecToTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_extract_timestamp: cdktn.booleanToTerraform(struct!.autoExtractTimestamp),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    index: cdktn.stringToTerraform(struct!.index),
    sourcetype: cdktn.stringToTerraform(struct!.sourcetype),
  }
}


export function observabilityPipelineConfigDestinationSplunkHecToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSplunkHec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    index: {
      value: cdktn.stringToHclTerraform(struct!.index),
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
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._sourcetype !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcetype = this._sourcetype;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSplunkHec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoExtractTimestamp = undefined;
      this._encoding = undefined;
      this._index = undefined;
      this._sourcetype = undefined;
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
      this._index = value.index;
      this._sourcetype = value.sourcetype;
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
}

export class ObservabilityPipelineConfigDestinationSplunkHecList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSplunkHec[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationSplunkHecOutputReference {
    return new ObservabilityPipelineConfigDestinationSplunkHecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomField {
  /**
  * The header field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name?: string;
  /**
  * The header field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value?: string;
}

export function observabilityPipelineConfigDestinationSumoLogicHeaderCustomFieldToTerraform(struct?: ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigDestinationSumoLogicHeaderCustomFieldToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomField | cdktn.IResolvable): any {
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding?: string;
  /**
  * Optional override for the host name header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#header_host_name ObservabilityPipeline#header_host_name}
  */
  readonly headerHostName?: string;
  /**
  * Optional override for the source category header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#header_source_category ObservabilityPipeline#header_source_category}
  */
  readonly headerSourceCategory?: string;
  /**
  * Optional override for the source name header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#header_source_name ObservabilityPipeline#header_source_name}
  */
  readonly headerSourceName?: string;
  /**
  * header_custom_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#header_custom_field ObservabilityPipeline#header_custom_field}
  */
  readonly headerCustomField?: ObservabilityPipelineConfigDestinationSumoLogicHeaderCustomField[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSumoLogicToTerraform(struct?: ObservabilityPipelineConfigDestinationSumoLogic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktn.stringToTerraform(struct!.encoding),
    header_host_name: cdktn.stringToTerraform(struct!.headerHostName),
    header_source_category: cdktn.stringToTerraform(struct!.headerSourceCategory),
    header_source_name: cdktn.stringToTerraform(struct!.headerSourceName),
    header_custom_field: cdktn.listMapper(observabilityPipelineConfigDestinationSumoLogicHeaderCustomFieldToTerraform, true)(struct!.headerCustomField),
  }
}


export function observabilityPipelineConfigDestinationSumoLogicToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSumoLogic | cdktn.IResolvable): any {
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
      this._headerHostName = undefined;
      this._headerSourceCategory = undefined;
      this._headerSourceName = undefined;
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
      this._headerHostName = value.headerHostName;
      this._headerSourceCategory = value.headerSourceCategory;
      this._headerSourceName = value.headerSourceName;
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigDestinationSumoLogicOutputReference {
    return new ObservabilityPipelineConfigDestinationSumoLogicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigDestinationSyslogNgTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
}

export function observabilityPipelineConfigDestinationSyslogNgTlsToTerraform(struct?: ObservabilityPipelineConfigDestinationSyslogNgTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktn.stringToTerraform(struct!.caFile),
    crt_file: cdktn.stringToTerraform(struct!.crtFile),
    key_file: cdktn.stringToTerraform(struct!.keyFile),
  }
}


export function observabilityPipelineConfigDestinationSyslogNgTlsToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSyslogNgTls | cdktn.IResolvable): any {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigDestinationSyslogNgTls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._crtFile = undefined;
      this._keyFile = undefined;
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
}

export class ObservabilityPipelineConfigDestinationSyslogNgTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigDestinationSyslogNgTls[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Optional socket keepalive duration in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#keepalive ObservabilityPipeline#keepalive}
  */
  readonly keepalive?: number;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigDestinationSyslogNgTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationSyslogNgToTerraform(struct?: ObservabilityPipelineConfigDestinationSyslogNg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keepalive: cdktn.numberToTerraform(struct!.keepalive),
    tls: cdktn.listMapper(observabilityPipelineConfigDestinationSyslogNgTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigDestinationSyslogNgToHclTerraform(struct?: ObservabilityPipelineConfigDestinationSyslogNg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keepalive: {
      value: cdktn.numberToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
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
      this._keepalive = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keepalive = value.keepalive;
      this._tls.internalValue = value.tls;
    }
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * A list of component IDs whose output is used as the `input` for this component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#inputs ObservabilityPipeline#inputs}
  */
  readonly inputs: string[];
  /**
  * amazon_opensearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#amazon_opensearch ObservabilityPipeline#amazon_opensearch}
  */
  readonly amazonOpensearch?: ObservabilityPipelineConfigDestinationAmazonOpensearch[] | cdktn.IResolvable;
  /**
  * amazon_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#amazon_s3 ObservabilityPipeline#amazon_s3}
  */
  readonly amazonS3?: ObservabilityPipelineConfigDestinationAmazonS3[] | cdktn.IResolvable;
  /**
  * amazon_security_lake block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#amazon_security_lake ObservabilityPipeline#amazon_security_lake}
  */
  readonly amazonSecurityLake?: ObservabilityPipelineConfigDestinationAmazonSecurityLake[] | cdktn.IResolvable;
  /**
  * azure_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#azure_storage ObservabilityPipeline#azure_storage}
  */
  readonly azureStorage?: ObservabilityPipelineConfigDestinationAzureStorage[] | cdktn.IResolvable;
  /**
  * cloud_prem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#cloud_prem ObservabilityPipeline#cloud_prem}
  */
  readonly cloudPrem?: ObservabilityPipelineConfigDestinationCloudPrem[] | cdktn.IResolvable;
  /**
  * crowdstrike_next_gen_siem block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#crowdstrike_next_gen_siem ObservabilityPipeline#crowdstrike_next_gen_siem}
  */
  readonly crowdstrikeNextGenSiem?: ObservabilityPipelineConfigDestinationCrowdstrikeNextGenSiem[] | cdktn.IResolvable;
  /**
  * datadog_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#datadog_logs ObservabilityPipeline#datadog_logs}
  */
  readonly datadogLogs?: ObservabilityPipelineConfigDestinationDatadogLogs[] | cdktn.IResolvable;
  /**
  * datadog_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#datadog_metrics ObservabilityPipeline#datadog_metrics}
  */
  readonly datadogMetrics?: ObservabilityPipelineConfigDestinationDatadogMetrics[] | cdktn.IResolvable;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#elasticsearch ObservabilityPipeline#elasticsearch}
  */
  readonly elasticsearch?: ObservabilityPipelineConfigDestinationElasticsearch[] | cdktn.IResolvable;
  /**
  * google_cloud_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#google_cloud_storage ObservabilityPipeline#google_cloud_storage}
  */
  readonly googleCloudStorage?: ObservabilityPipelineConfigDestinationGoogleCloudStorage[] | cdktn.IResolvable;
  /**
  * google_pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#google_pubsub ObservabilityPipeline#google_pubsub}
  */
  readonly googlePubsub?: ObservabilityPipelineConfigDestinationGooglePubsub[] | cdktn.IResolvable;
  /**
  * google_secops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#google_secops ObservabilityPipeline#google_secops}
  */
  readonly googleSecops?: ObservabilityPipelineConfigDestinationGoogleSecops[] | cdktn.IResolvable;
  /**
  * http_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#http_client ObservabilityPipeline#http_client}
  */
  readonly httpClient?: ObservabilityPipelineConfigDestinationHttpClient[] | cdktn.IResolvable;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#kafka ObservabilityPipeline#kafka}
  */
  readonly kafka?: ObservabilityPipelineConfigDestinationKafka[] | cdktn.IResolvable;
  /**
  * microsoft_sentinel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#microsoft_sentinel ObservabilityPipeline#microsoft_sentinel}
  */
  readonly microsoftSentinel?: ObservabilityPipelineConfigDestinationMicrosoftSentinel[] | cdktn.IResolvable;
  /**
  * new_relic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#new_relic ObservabilityPipeline#new_relic}
  */
  readonly newRelic?: ObservabilityPipelineConfigDestinationNewRelic[] | cdktn.IResolvable;
  /**
  * opensearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#opensearch ObservabilityPipeline#opensearch}
  */
  readonly opensearch?: ObservabilityPipelineConfigDestinationOpensearch[] | cdktn.IResolvable;
  /**
  * rsyslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#rsyslog ObservabilityPipeline#rsyslog}
  */
  readonly rsyslog?: ObservabilityPipelineConfigDestinationRsyslog[] | cdktn.IResolvable;
  /**
  * sentinel_one block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#sentinel_one ObservabilityPipeline#sentinel_one}
  */
  readonly sentinelOne?: ObservabilityPipelineConfigDestinationSentinelOne[] | cdktn.IResolvable;
  /**
  * socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#socket ObservabilityPipeline#socket}
  */
  readonly socket?: ObservabilityPipelineConfigDestinationSocket[] | cdktn.IResolvable;
  /**
  * splunk_hec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#splunk_hec ObservabilityPipeline#splunk_hec}
  */
  readonly splunkHec?: ObservabilityPipelineConfigDestinationSplunkHec[] | cdktn.IResolvable;
  /**
  * sumo_logic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#sumo_logic ObservabilityPipeline#sumo_logic}
  */
  readonly sumoLogic?: ObservabilityPipelineConfigDestinationSumoLogic[] | cdktn.IResolvable;
  /**
  * syslog_ng block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#syslog_ng ObservabilityPipeline#syslog_ng}
  */
  readonly syslogNg?: ObservabilityPipelineConfigDestinationSyslogNg[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigDestinationToTerraform(struct?: ObservabilityPipelineConfigDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    inputs: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.inputs),
    amazon_opensearch: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonOpensearchToTerraform, true)(struct!.amazonOpensearch),
    amazon_s3: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonS3ToTerraform, true)(struct!.amazonS3),
    amazon_security_lake: cdktn.listMapper(observabilityPipelineConfigDestinationAmazonSecurityLakeToTerraform, true)(struct!.amazonSecurityLake),
    azure_storage: cdktn.listMapper(observabilityPipelineConfigDestinationAzureStorageToTerraform, true)(struct!.azureStorage),
    cloud_prem: cdktn.listMapper(observabilityPipelineConfigDestinationCloudPremToTerraform, true)(struct!.cloudPrem),
    crowdstrike_next_gen_siem: cdktn.listMapper(observabilityPipelineConfigDestinationCrowdstrikeNextGenSiemToTerraform, true)(struct!.crowdstrikeNextGenSiem),
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
    rsyslog: cdktn.listMapper(observabilityPipelineConfigDestinationRsyslogToTerraform, true)(struct!.rsyslog),
    sentinel_one: cdktn.listMapper(observabilityPipelineConfigDestinationSentinelOneToTerraform, true)(struct!.sentinelOne),
    socket: cdktn.listMapper(observabilityPipelineConfigDestinationSocketToTerraform, true)(struct!.socket),
    splunk_hec: cdktn.listMapper(observabilityPipelineConfigDestinationSplunkHecToTerraform, true)(struct!.splunkHec),
    sumo_logic: cdktn.listMapper(observabilityPipelineConfigDestinationSumoLogicToTerraform, true)(struct!.sumoLogic),
    syslog_ng: cdktn.listMapper(observabilityPipelineConfigDestinationSyslogNgToTerraform, true)(struct!.syslogNg),
  }
}


export function observabilityPipelineConfigDestinationToHclTerraform(struct?: ObservabilityPipelineConfigDestination | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    if (this._amazonSecurityLake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonSecurityLake = this._amazonSecurityLake?.internalValue;
    }
    if (this._azureStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorage = this._azureStorage?.internalValue;
    }
    if (this._cloudPrem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudPrem = this._cloudPrem?.internalValue;
    }
    if (this._crowdstrikeNextGenSiem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crowdstrikeNextGenSiem = this._crowdstrikeNextGenSiem?.internalValue;
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
      this._amazonSecurityLake.internalValue = undefined;
      this._azureStorage.internalValue = undefined;
      this._cloudPrem.internalValue = undefined;
      this._crowdstrikeNextGenSiem.internalValue = undefined;
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
      this._rsyslog.internalValue = undefined;
      this._sentinelOne.internalValue = undefined;
      this._socket.internalValue = undefined;
      this._splunkHec.internalValue = undefined;
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
      this._amazonSecurityLake.internalValue = value.amazonSecurityLake;
      this._azureStorage.internalValue = value.azureStorage;
      this._cloudPrem.internalValue = value.cloudPrem;
      this._crowdstrikeNextGenSiem.internalValue = value.crowdstrikeNextGenSiem;
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
      this._rsyslog.internalValue = value.rsyslog;
      this._sentinelOne.internalValue = value.sentinelOne;
      this._socket.internalValue = value.socket;
      this._splunkHec.internalValue = value.splunkHec;
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field: string;
  /**
  * The name of the environment variable to read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariableToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariableToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#variable ObservabilityPipeline#variable}
  */
  readonly variable?: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariable[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVars | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variable: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsVariableToTerraform, true)(struct!.variable),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorAddEnvVarsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddEnvVars | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The value to assign to the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorAddFieldsFieldToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorAddFieldsFieldToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsField | cdktn.IResolvable): any {
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: ObservabilityPipelineConfigProcessorGroupProcessorAddFieldsField[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorAddFieldsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorAddFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorAddFieldsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorAddHostnameToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorAddHostname | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorAddHostnameOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorAddHostnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemap {
  /**
  * Whether to drop events that cause errors during transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#drop_on_error ObservabilityPipeline#drop_on_error}
  */
  readonly dropOnError: boolean | cdktn.IResolvable;
  /**
  * Whether this remap rule is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#enabled ObservabilityPipeline#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * A Datadog search query used to filter events for this specific remap rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * A descriptive name for this remap rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The VRL script source code that defines the transformation logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#source ObservabilityPipeline#source}
  */
  readonly source: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemapToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemap | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#remap ObservabilityPipeline#remap}
  */
  readonly remap?: ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemap[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorCustomProcessorToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remap: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorCustomProcessorRemapToTerraform, true)(struct!.remap),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorCustomProcessorToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorCustomProcessor | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#action ObservabilityPipeline#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#keys ObservabilityPipeline#keys}
  */
  readonly keys: string[];
  /**
  *  Valid values are `filter`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorDatadogTagsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorDatadogTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}
  */
  readonly fields: string[];
  /**
  * The deduplication mode to apply to the fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorDedupeToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorDedupe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
    mode: cdktn.stringToTerraform(struct!.mode),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorDedupeToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorDedupe | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#delimiter ObservabilityPipeline#delimiter}
  */
  readonly delimiter: string;
  /**
  * The `encoding` `includes_headers`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#includes_headers ObservabilityPipeline#includes_headers}
  */
  readonly includesHeaders?: boolean | cdktn.IResolvable;
  /**
  * File encoding format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#type ObservabilityPipeline#type}
  */
  readonly type: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncodingToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncoding | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncodingOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncodingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKey {
  /**
  * The `items` `column`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#column ObservabilityPipeline#column}
  */
  readonly column?: string;
  /**
  * The comparison method (e.g. equals).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#comparison ObservabilityPipeline#comparison}
  */
  readonly comparison?: string;
  /**
  * The `items` `field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    comparison: cdktn.stringToTerraform(struct!.comparison),
    field: cdktn.stringToTerraform(struct!.field),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cdktn.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._comparison = undefined;
      this._field = undefined;
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
      this._field = value.field;
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
}

export class ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKeyList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKey[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#path ObservabilityPipeline#path}
  */
  readonly path?: string;
  /**
  * encoding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#encoding ObservabilityPipeline#encoding}
  */
  readonly encoding?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileEncoding[] | cdktn.IResolvable;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#key ObservabilityPipeline#key}
  */
  readonly key?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileKey[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFileToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#key_field ObservabilityPipeline#key_field}
  */
  readonly keyField?: string;
  /**
  * Locale used to resolve geographical names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#locale ObservabilityPipeline#locale}
  */
  readonly locale?: string;
  /**
  * Path to the GeoIP database file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#path ObservabilityPipeline#path}
  */
  readonly path?: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoipToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoip | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * List of column names to include from the reference table. If not provided, all columns are included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#columns ObservabilityPipeline#columns}
  */
  readonly columns?: string[];
  /**
  * Path to the field in the log event to match against the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#key_field ObservabilityPipeline#key_field}
  */
  readonly keyField: string;
  /**
  * The unique identifier of the reference table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#table_id ObservabilityPipeline#table_id}
  */
  readonly tableId: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTableToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columns),
    key_field: cdktn.stringToTerraform(struct!.keyField),
    table_id: cdktn.stringToTerraform(struct!.tableId),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTableToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      this._columns = value.columns;
      this._keyField = value.keyField;
      this._tableId = value.tableId;
    }
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#target ObservabilityPipeline#target}
  */
  readonly target: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#file ObservabilityPipeline#file}
  */
  readonly file?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableFile[] | cdktn.IResolvable;
  /**
  * geoip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#geoip ObservabilityPipeline#geoip}
  */
  readonly geoip?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableGeoip[] | cdktn.IResolvable;
  /**
  * reference_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#reference_table ObservabilityPipeline#reference_table}
  */
  readonly referenceTable?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTableReferenceTable[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorEnrichmentTableToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorEnrichmentTable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorFilterToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorFilter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: string;
  /**
  * Metric value strategy: `increment_by_one` or `increment_by_field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#strategy ObservabilityPipeline#strategy}
  */
  readonly strategy: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValueToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    strategy: cdktn.stringToTerraform(struct!.strategy),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValueToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#group_by ObservabilityPipeline#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Datadog filter query to match logs for metric generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * Type of metric to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#metric_type ObservabilityPipeline#metric_type}
  */
  readonly metricType: string;
  /**
  * Name of the custom metric to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricValue[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetric | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#metric ObservabilityPipeline#metric}
  */
  readonly metric?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetric[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsMetricToTerraform, true)(struct!.metric),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetrics | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorGenerateDatadogMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRule {
  /**
  * The action to take on tags with matching keys. Valid values are `include`, `exclude`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#action ObservabilityPipeline#action}
  */
  readonly action: string;
  /**
  * A Datadog search query used to determine which metrics this rule targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * A list of tag keys to include or exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#keys ObservabilityPipeline#keys}
  */
  readonly keys: string[];
  /**
  * The processing mode for tag filtering. Valid values are `filter`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorMetricTagsRuleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule?: ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsRule[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorMetricTagsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorMetricTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorMetricTagsRuleToTerraform, true)(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorMetricTagsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorMetricTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorMetricTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMapping {
  /**
  * Search query for selecting which logs the mapping applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include: string;
  /**
  * Predefined library mapping for log transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#library_mapping ObservabilityPipeline#library_mapping}
  */
  readonly libraryMapping: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include: cdktn.stringToTerraform(struct!.include),
    library_mapping: cdktn.stringToTerraform(struct!.libraryMapping),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMapping | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMapping | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._include = undefined;
      this._libraryMapping = undefined;
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

  // library_mapping - computed: false, optional: false, required: true
  private _libraryMapping?: string; 
  public get libraryMapping() {
    return this.getStringAttribute('library_mapping');
  }
  public set libraryMapping(value: string) {
    this._libraryMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryMappingInput() {
    return this._libraryMapping;
  }
}

export class ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMapping[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#mapping ObservabilityPipeline#mapping}
  */
  readonly mapping?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperMapping[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapper | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorOcsfMapperMappingToTerraform, true)(struct!.mapping),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorOcsfMapperToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapper | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      this._mapping.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapping.internalValue = value.mapping;
    }
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorOcsfMapperOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRule {
  /**
  * The name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The definition of the Grok rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRuleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    rule: cdktn.stringToTerraform(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRuleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRule | cdktn.IResolvable): any {
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The definition of the helper Grok rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRuleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    rule: cdktn.stringToTerraform(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRuleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRule | cdktn.IResolvable): any {
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * The name of the field in the log event to apply the Grok rules to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#source ObservabilityPipeline#source}
  */
  readonly source: string;
  /**
  * match_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#match_rule ObservabilityPipeline#match_rule}
  */
  readonly matchRule?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleMatchRule[] | cdktn.IResolvable;
  /**
  * support_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#support_rule ObservabilityPipeline#support_rule}
  */
  readonly supportRule?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRuleSupportRule[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRule | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * If set to `true`, disables the default Grok rules provided by Datadog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#disable_library_rules ObservabilityPipeline#disable_library_rules}
  */
  readonly disableLibraryRules?: boolean | cdktn.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrokRule[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseGrokToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrok | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_library_rules: cdktn.booleanToTerraform(struct!.disableLibraryRules),
    rule: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorParseGrokRuleToTerraform, true)(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorParseGrokToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseGrok | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_library_rules: {
      value: cdktn.booleanToHclTerraform(struct!.disableLibraryRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
      this._rule.internalValue = value.rule;
    }
  }

  // disable_library_rules - computed: false, optional: true, required: false
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseJsonToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorParseJsonToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseJson | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#always_use_text_key ObservabilityPipeline#always_use_text_key}
  */
  readonly alwaysUseTextKey?: boolean | cdktn.IResolvable;
  /**
  * The prefix to use for XML attributes in the parsed output. If the field is left empty, the original attribute key is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#attr_prefix ObservabilityPipeline#attr_prefix}
  */
  readonly attrPrefix?: string;
  /**
  * The path to the log field on which you want to parse XML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field: string;
  /**
  * Whether to include XML attributes in the parsed output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#include_attr ObservabilityPipeline#include_attr}
  */
  readonly includeAttr?: boolean | cdktn.IResolvable;
  /**
  * Whether to parse boolean values from strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#parse_bool ObservabilityPipeline#parse_bool}
  */
  readonly parseBool?: boolean | cdktn.IResolvable;
  /**
  * Whether to parse null values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#parse_null ObservabilityPipeline#parse_null}
  */
  readonly parseNull?: boolean | cdktn.IResolvable;
  /**
  * Whether to parse numeric values from strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#parse_number ObservabilityPipeline#parse_number}
  */
  readonly parseNumber?: boolean | cdktn.IResolvable;
  /**
  * The key name to use for the text node when XML attributes are appended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#text_key ObservabilityPipeline#text_key}
  */
  readonly textKey?: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorParseXmlToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorParseXml | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#enforce ObservabilityPipeline#enforce}
  */
  readonly enforce: string;
  /**
  * The daily quota limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}
  */
  readonly limit: number;
}

export function observabilityPipelineConfigProcessorGroupProcessorQuotaLimitToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktn.stringToTerraform(struct!.enforce),
    limit: cdktn.numberToTerraform(struct!.limit),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorQuotaLimitToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimitOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideField {
  /**
  * The field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideFieldToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideFieldToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideField | cdktn.IResolvable): any {
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#enforce ObservabilityPipeline#enforce}
  */
  readonly enforce: string;
  /**
  * The daily quota limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}
  */
  readonly limit: number;
}

export function observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimitToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktn.stringToTerraform(struct!.enforce),
    limit: cdktn.numberToTerraform(struct!.limit),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimitToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideField[] | cdktn.IResolvable;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}
  */
  readonly limit?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimit[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideFieldToTerraform, true)(struct!.field),
    limit: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideLimitToTerraform, true)(struct!.limit),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorQuotaOverrideToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverride | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#drop_events ObservabilityPipeline#drop_events}
  */
  readonly dropEvents?: boolean | cdktn.IResolvable;
  /**
  * Whether to ignore when partition fields are missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#ignore_when_missing_partitions ObservabilityPipeline#ignore_when_missing_partitions}
  */
  readonly ignoreWhenMissingPartitions?: boolean | cdktn.IResolvable;
  /**
  * The name of the quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The action to take when the quota is exceeded: `drop`, `no_action`, or `overflow_routing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#overflow_action ObservabilityPipeline#overflow_action}
  */
  readonly overflowAction?: string;
  /**
  * List of partition fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#partition_fields ObservabilityPipeline#partition_fields}
  */
  readonly partitionFields?: string[];
  /**
  * The action to take when the max number of buckets is exceeded: `drop`, `no_action`, or `overflow_routing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#too_many_buckets_action ObservabilityPipeline#too_many_buckets_action}
  */
  readonly tooManyBucketsAction?: string;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#limit ObservabilityPipeline#limit}
  */
  readonly limit?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaLimit[] | cdktn.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#override ObservabilityPipeline#override}
  */
  readonly override?: ObservabilityPipelineConfigProcessorGroupProcessorQuotaOverride[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorQuotaToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorQuota | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#path ObservabilityPipeline#path}
  */
  readonly path: string;
  /**
  * The merge strategy to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#strategy ObservabilityPipeline#strategy}
  */
  readonly strategy: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategyToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktn.stringToTerraform(struct!.path),
    strategy: cdktn.stringToTerraform(struct!.strategy),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategyToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#group_by ObservabilityPipeline#group_by}
  */
  readonly groupBy: string[];
  /**
  * merge_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#merge_strategy ObservabilityPipeline#merge_strategy}
  */
  readonly mergeStrategy?: ObservabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategy[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorReduceToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorReduce | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupBy),
    merge_strategy: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorReduceMergeStrategyToTerraform, true)(struct!.mergeStrategy),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorReduceToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorReduce | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}
  */
  readonly fields: string[];
}

export function observabilityPipelineConfigProcessorGroupProcessorRemoveFieldsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRemoveFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorRemoveFieldsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRemoveFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#destination ObservabilityPipeline#destination}
  */
  readonly destination: string;
  /**
  * Whether to keep the original field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#preserve_source ObservabilityPipeline#preserve_source}
  */
  readonly preserveSource: boolean | cdktn.IResolvable;
  /**
  * Source field to rename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#source ObservabilityPipeline#source}
  */
  readonly source: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorRenameFieldsFieldToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsField | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#field ObservabilityPipeline#field}
  */
  readonly field?: ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsField[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorRenameFieldsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRenameFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorRenameFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorRenameFieldsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorRenameFields | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorRenameFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigProcessorGroupProcessorSample {
  /**
  * Optional list of fields to group events by. Each group is sampled independently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#group_by ObservabilityPipeline#group_by}
  */
  readonly groupBy?: string[];
  /**
  * The percentage of logs to sample.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#percentage ObservabilityPipeline#percentage}
  */
  readonly percentage: number;
}

export function observabilityPipelineConfigProcessorGroupProcessorSampleToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSample | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.groupBy),
    percentage: cdktn.numberToTerraform(struct!.percentage),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSampleToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSample | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#keywords ObservabilityPipeline#keywords}
  */
  readonly keywords?: string[];
  /**
  * Maximum number of tokens between a keyword and a sensitive value match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#proximity ObservabilityPipeline#proximity}
  */
  readonly proximity?: number;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptionsToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keywords: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.keywords),
    proximity: cdktn.numberToTerraform(struct!.proximity),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptionsToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleKeywordOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHashToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#characters ObservabilityPipeline#characters}
  */
  readonly characters?: number;
  /**
  * Direction from which to keep characters: `first` or `last`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#direction ObservabilityPipeline#direction}
  */
  readonly direction?: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedactToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    characters: cdktn.numberToTerraform(struct!.characters),
    direction: cdktn.stringToTerraform(struct!.direction),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedactToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#replace ObservabilityPipeline#replace}
  */
  readonly replace?: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedactToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replace: cdktn.stringToTerraform(struct!.replace),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedactToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedact | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#hash ObservabilityPipeline#hash}
  */
  readonly hash?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchHash[] | cdktn.IResolvable;
  /**
  * partial_redact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#partial_redact ObservabilityPipeline#partial_redact}
  */
  readonly partialRedact?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchPartialRedact[] | cdktn.IResolvable;
  /**
  * redact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#redact ObservabilityPipeline#redact}
  */
  readonly redact?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchRedact[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatchToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleOnMatch | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#description ObservabilityPipeline#description}
  */
  readonly description?: string;
  /**
  * A regular expression used to detect sensitive values. Must be a valid regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#rule ObservabilityPipeline#rule}
  */
  readonly rule?: string;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustomToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    rule: cdktn.stringToTerraform(struct!.rule),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustomToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustom | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#description ObservabilityPipeline#description}
  */
  readonly description?: string;
  /**
  * Identifier for a predefined pattern from the sensitive data scanner pattern library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to augment the pattern with recommended keywords (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#use_recommended_keywords ObservabilityPipeline#use_recommended_keywords}
  */
  readonly useRecommendedKeywords?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibraryToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibrary | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#custom ObservabilityPipeline#custom}
  */
  readonly custom?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustom[] | cdktn.IResolvable;
  /**
  * library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#library ObservabilityPipeline#library}
  */
  readonly library?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibrary[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternCustomToTerraform, true)(struct!.custom),
    library: cdktn.listMapper(observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternLibraryToTerraform, true)(struct!.library),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePatternToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRulePattern | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}
  */
  readonly fields?: string[];
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExcludeToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExcludeToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#fields ObservabilityPipeline#fields}
  */
  readonly fields?: string[];
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeIncludeToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeInclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.fields),
  }
}


export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeIncludeToHclTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeInclude | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#all ObservabilityPipeline#all}
  */
  readonly all?: boolean | cdktn.IResolvable;
  /**
  * exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#exclude ObservabilityPipeline#exclude}
  */
  readonly exclude?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeExclude[] | cdktn.IResolvable;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.89.0/docs/resources/observability_pipeline#include ObservabilityPipeline#include}
  */
  readonly include?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeInclude[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeToTerraform(struct?: ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScope | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeOutputReference {
    return new ObservabilityPipelineConfigProcessorGroupProcessorSensitiveDataScannerRuleScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
