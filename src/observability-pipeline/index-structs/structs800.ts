/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { ObservabilityPipelineConfigDestination,
observabilityPipelineConfigDestinationToTerraform,
observabilityPipelineConfigDestinationToHclTerraform,
ObservabilityPipelineConfigDestinationList,
ObservabilityPipelineConfigProcessorGroup,
observabilityPipelineConfigProcessorGroupToTerraform,
observabilityPipelineConfigProcessorGroupToHclTerraform,
ObservabilityPipelineConfigProcessorGroupList } from './structs400';
export interface ObservabilityPipelineConfigSourceAmazonDataFirehoseAuth {
  /**
  * The Amazon Resource Name (ARN) of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#assume_role ObservabilityPipeline#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * A unique identifier for cross-account role assumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#external_id ObservabilityPipeline#external_id}
  */
  readonly externalId?: string;
  /**
  * A session identifier used for logging and tracing the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#session_name ObservabilityPipeline#session_name}
  */
  readonly sessionName?: string;
}

export function observabilityPipelineConfigSourceAmazonDataFirehoseAuthToTerraform(struct?: ObservabilityPipelineConfigSourceAmazonDataFirehoseAuth | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigSourceAmazonDataFirehoseAuthToHclTerraform(struct?: ObservabilityPipelineConfigSourceAmazonDataFirehoseAuth | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigSourceAmazonDataFirehoseTlsToTerraform(struct?: ObservabilityPipelineConfigSourceAmazonDataFirehoseTls | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigSourceAmazonDataFirehoseTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceAmazonDataFirehoseTls | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigSourceAmazonDataFirehoseAuth[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceAmazonDataFirehoseTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceAmazonDataFirehoseToTerraform(struct?: ObservabilityPipelineConfigSourceAmazonDataFirehose | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#assume_role ObservabilityPipeline#assume_role}
  */
  readonly assumeRole?: string;
  /**
  * A unique identifier for cross-account role assumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#external_id ObservabilityPipeline#external_id}
  */
  readonly externalId?: string;
  /**
  * A session identifier used for logging and tracing the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#session_name ObservabilityPipeline#session_name}
  */
  readonly sessionName?: string;
}

export function observabilityPipelineConfigSourceAmazonS3AuthToTerraform(struct?: ObservabilityPipelineConfigSourceAmazonS3Auth | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigSourceAmazonS3AuthToHclTerraform(struct?: ObservabilityPipelineConfigSourceAmazonS3Auth | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigSourceAmazonS3TlsToTerraform(struct?: ObservabilityPipelineConfigSourceAmazonS3Tls | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigSourceAmazonS3TlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceAmazonS3Tls | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#compression ObservabilityPipeline#compression}
  */
  readonly compression?: string;
  /**
  * AWS region where the S3 bucket resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#region ObservabilityPipeline#region}
  */
  readonly region: string;
  /**
  * Name of the environment variable or secret that holds the S3 bucket URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#url_key ObservabilityPipeline#url_key}
  */
  readonly urlKey?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigSourceAmazonS3Auth[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceAmazonS3Tls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceAmazonS3ToTerraform(struct?: ObservabilityPipelineConfigSourceAmazonS3 | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigSourceDatadogAgentTlsToTerraform(struct?: ObservabilityPipelineConfigSourceDatadogAgentTls | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigSourceDatadogAgentTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceDatadogAgentTls | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceDatadogAgentTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceDatadogAgentToTerraform(struct?: ObservabilityPipelineConfigSourceDatadogAgent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceDatadogAgentTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceDatadogAgentToHclTerraform(struct?: ObservabilityPipelineConfigSourceDatadogAgent | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceFluentBitTlsToTerraform(struct?: ObservabilityPipelineConfigSourceFluentBitTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceFluentBitTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceFluentBitToTerraform(struct?: ObservabilityPipelineConfigSourceFluentBit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceFluentBitTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceFluentBitToHclTerraform(struct?: ObservabilityPipelineConfigSourceFluentBit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceFluentdTlsToTerraform(struct?: ObservabilityPipelineConfigSourceFluentdTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceFluentdTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceFluentdToTerraform(struct?: ObservabilityPipelineConfigSourceFluentd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceFluentdTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceFluentdToHclTerraform(struct?: ObservabilityPipelineConfigSourceFluentd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#credentials_file ObservabilityPipeline#credentials_file}
  */
  readonly credentialsFile: string;
}

export function observabilityPipelineConfigSourceGooglePubsubAuthToTerraform(struct?: ObservabilityPipelineConfigSourceGooglePubsubAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_file: cdktn.stringToTerraform(struct!.credentialsFile),
  }
}


export function observabilityPipelineConfigSourceGooglePubsubAuthToHclTerraform(struct?: ObservabilityPipelineConfigSourceGooglePubsubAuth | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigSourceGooglePubsubTlsToTerraform(struct?: ObservabilityPipelineConfigSourceGooglePubsubTls | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigSourceGooglePubsubTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceGooglePubsubTls | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#decoding ObservabilityPipeline#decoding}
  */
  readonly decoding: string;
  /**
  * The Google Cloud project ID that owns the Pub/Sub subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#project ObservabilityPipeline#project}
  */
  readonly project: string;
  /**
  * The Pub/Sub subscription name from which messages are consumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#subscription ObservabilityPipeline#subscription}
  */
  readonly subscription: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#auth ObservabilityPipeline#auth}
  */
  readonly auth?: ObservabilityPipelineConfigSourceGooglePubsubAuth[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceGooglePubsubTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceGooglePubsubToTerraform(struct?: ObservabilityPipelineConfigSourceGooglePubsub | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigSourceHttpClientTlsToTerraform(struct?: ObservabilityPipelineConfigSourceHttpClientTls | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigSourceHttpClientTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceHttpClientTls | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#auth_strategy ObservabilityPipeline#auth_strategy}
  */
  readonly authStrategy?: string;
  /**
  * Name of the environment variable or secret that holds a custom header value (used with custom auth strategies).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#custom_key ObservabilityPipeline#custom_key}
  */
  readonly customKey?: string;
  /**
  * The decoding format used to interpret incoming logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#decoding ObservabilityPipeline#decoding}
  */
  readonly decoding: string;
  /**
  * Name of the environment variable or secret that holds the HTTP endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#endpoint_url_key ObservabilityPipeline#endpoint_url_key}
  */
  readonly endpointUrlKey?: string;
  /**
  * Name of the environment variable or secret that holds the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#password_key ObservabilityPipeline#password_key}
  */
  readonly passwordKey?: string;
  /**
  * The interval (in seconds) between HTTP scrape requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#scrape_interval_secs ObservabilityPipeline#scrape_interval_secs}
  */
  readonly scrapeIntervalSecs?: number;
  /**
  * The timeout (in seconds) for each scrape request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#scrape_timeout_secs ObservabilityPipeline#scrape_timeout_secs}
  */
  readonly scrapeTimeoutSecs?: number;
  /**
  * Name of the environment variable or secret that holds the authentication token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#token_key ObservabilityPipeline#token_key}
  */
  readonly tokenKey?: string;
  /**
  * Name of the environment variable or secret that holds the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#username_key ObservabilityPipeline#username_key}
  */
  readonly usernameKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceHttpClientTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceHttpClientToTerraform(struct?: ObservabilityPipelineConfigSourceHttpClient | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceHttpServerTlsToTerraform(struct?: ObservabilityPipelineConfigSourceHttpServerTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key ObservabilityPipeline#key}
  */
  readonly key: string;
  /**
  * The metadata field value to add to incoming events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigSourceHttpServerValidTokenFieldToAddToTerraform(struct?: ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigSourceHttpServerValidTokenFieldToAddToHclTerraform(struct?: ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#header ObservabilityPipeline#header}
  */
  readonly header?: string;
  /**
  * Built-in token location on the incoming HTTP request. One of `path`, `address`. Valid values are `path`, `address`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#location ObservabilityPipeline#location}
  */
  readonly location?: string;
}

export function observabilityPipelineConfigSourceHttpServerValidTokenPathToTokenToTerraform(struct?: ObservabilityPipelineConfigSourceHttpServerValidTokenPathToToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktn.stringToTerraform(struct!.header),
    location: cdktn.stringToTerraform(struct!.location),
  }
}


export function observabilityPipelineConfigSourceHttpServerValidTokenPathToTokenToHclTerraform(struct?: ObservabilityPipelineConfigSourceHttpServerValidTokenPathToToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#enabled ObservabilityPipeline#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Name of the environment variable or secret that holds the expected token value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#token_key ObservabilityPipeline#token_key}
  */
  readonly tokenKey: string;
  /**
  * field_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#field_to_add ObservabilityPipeline#field_to_add}
  */
  readonly fieldToAdd?: ObservabilityPipelineConfigSourceHttpServerValidTokenFieldToAdd[] | cdktn.IResolvable;
  /**
  * path_to_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#path_to_token ObservabilityPipeline#path_to_token}
  */
  readonly pathToToken?: ObservabilityPipelineConfigSourceHttpServerValidTokenPathToToken[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceHttpServerValidTokenToTerraform(struct?: ObservabilityPipelineConfigSourceHttpServerValidToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * HTTP authentication method. Valid values are `none`, `plain`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#auth_strategy ObservabilityPipeline#auth_strategy}
  */
  readonly authStrategy: string;
  /**
  * The decoding format used to interpret incoming logs. Valid values are `json`, `gelf`, `syslog`, `bytes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#decoding ObservabilityPipeline#decoding}
  */
  readonly decoding: string;
  /**
  * Name of the environment variable or secret that holds the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#password_key ObservabilityPipeline#password_key}
  */
  readonly passwordKey?: string;
  /**
  * Name of the environment variable or secret that holds the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#username_key ObservabilityPipeline#username_key}
  */
  readonly usernameKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceHttpServerTls[] | cdktn.IResolvable;
  /**
  * valid_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#valid_token ObservabilityPipeline#valid_token}
  */
  readonly validToken?: ObservabilityPipelineConfigSourceHttpServerValidToken[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceHttpServerToTerraform(struct?: ObservabilityPipelineConfigSourceHttpServer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#name ObservabilityPipeline#name}
  */
  readonly name: string;
  /**
  * The value of the librdkafka option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigSourceKafkaLibrdkafkaOptionToTerraform(struct?: ObservabilityPipelineConfigSourceKafkaLibrdkafkaOption | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigSourceKafkaLibrdkafkaOptionToHclTerraform(struct?: ObservabilityPipelineConfigSourceKafkaLibrdkafkaOption | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#mechanism ObservabilityPipeline#mechanism}
  */
  readonly mechanism: string;
  /**
  * Name of the environment variable or secret that holds the SASL password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#password_key ObservabilityPipeline#password_key}
  */
  readonly passwordKey?: string;
  /**
  * Name of the environment variable or secret that holds the SASL username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#username_key ObservabilityPipeline#username_key}
  */
  readonly usernameKey?: string;
}

export function observabilityPipelineConfigSourceKafkaSaslToTerraform(struct?: ObservabilityPipelineConfigSourceKafkaSasl | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigSourceKafkaSaslToHclTerraform(struct?: ObservabilityPipelineConfigSourceKafkaSasl | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
}

export function observabilityPipelineConfigSourceKafkaTlsToTerraform(struct?: ObservabilityPipelineConfigSourceKafkaTls | cdktn.IResolvable): any {
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


export function observabilityPipelineConfigSourceKafkaTlsToHclTerraform(struct?: ObservabilityPipelineConfigSourceKafkaTls | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#bootstrap_servers_key ObservabilityPipeline#bootstrap_servers_key}
  */
  readonly bootstrapServersKey?: string;
  /**
  * The Kafka consumer group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#group_id ObservabilityPipeline#group_id}
  */
  readonly groupId: string;
  /**
  * A list of Kafka topic names to subscribe to. The source ingests messages from each topic specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#topics ObservabilityPipeline#topics}
  */
  readonly topics: string[];
  /**
  * librdkafka_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#librdkafka_option ObservabilityPipeline#librdkafka_option}
  */
  readonly librdkafkaOption?: ObservabilityPipelineConfigSourceKafkaLibrdkafkaOption[] | cdktn.IResolvable;
  /**
  * sasl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#sasl ObservabilityPipeline#sasl}
  */
  readonly sasl?: ObservabilityPipelineConfigSourceKafkaSasl[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceKafkaTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceKafkaToTerraform(struct?: ObservabilityPipelineConfigSourceKafka | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceLogstashTlsToTerraform(struct?: ObservabilityPipelineConfigSourceLogstashTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceLogstashTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceLogstashToTerraform(struct?: ObservabilityPipelineConfigSourceLogstash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceLogstashTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceLogstashToHclTerraform(struct?: ObservabilityPipelineConfigSourceLogstash | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceOpentelemetryTlsToTerraform(struct?: ObservabilityPipelineConfigSourceOpentelemetryTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#grpc_address_key ObservabilityPipeline#grpc_address_key}
  */
  readonly grpcAddressKey?: string;
  /**
  * Environment variable name containing the HTTP server address for receiving OTLP data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#http_address_key ObservabilityPipeline#http_address_key}
  */
  readonly httpAddressKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceOpentelemetryTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceOpentelemetryToTerraform(struct?: ObservabilityPipelineConfigSourceOpentelemetry | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceRsyslogTlsToTerraform(struct?: ObservabilityPipelineConfigSourceRsyslogTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * Protocol used by the syslog source to receive messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceRsyslogTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceRsyslogToTerraform(struct?: ObservabilityPipelineConfigSourceRsyslog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#delimiter ObservabilityPipeline#delimiter}
  */
  readonly delimiter: string;
}

export function observabilityPipelineConfigSourceSocketFramingCharacterDelimitedToTerraform(struct?: ObservabilityPipelineConfigSourceSocketFramingCharacterDelimited | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktn.stringToTerraform(struct!.delimiter),
  }
}


export function observabilityPipelineConfigSourceSocketFramingCharacterDelimitedToHclTerraform(struct?: ObservabilityPipelineConfigSourceSocketFramingCharacterDelimited | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#method ObservabilityPipeline#method}
  */
  readonly method: string;
  /**
  * character_delimited block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#character_delimited ObservabilityPipeline#character_delimited}
  */
  readonly characterDelimited?: ObservabilityPipelineConfigSourceSocketFramingCharacterDelimited[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSocketFramingToTerraform(struct?: ObservabilityPipelineConfigSourceSocketFraming | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktn.stringToTerraform(struct!.method),
    character_delimited: cdktn.listMapper(observabilityPipelineConfigSourceSocketFramingCharacterDelimitedToTerraform, true)(struct!.characterDelimited),
  }
}


export function observabilityPipelineConfigSourceSocketFramingToHclTerraform(struct?: ObservabilityPipelineConfigSourceSocketFraming | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSocketTlsToTerraform(struct?: ObservabilityPipelineConfigSourceSocketTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * The protocol used to receive logs. Valid values are `tcp`, `udp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode: string;
  /**
  * framing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#framing ObservabilityPipeline#framing}
  */
  readonly framing?: ObservabilityPipelineConfigSourceSocketFraming[] | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceSocketTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSocketToTerraform(struct?: ObservabilityPipelineConfigSourceSocket | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSplunkHecTlsToTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHecTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key ObservabilityPipeline#key}
  */
  readonly key: string;
  /**
  * The metadata field value to add to incoming events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#value ObservabilityPipeline#value}
  */
  readonly value: string;
}

export function observabilityPipelineConfigSourceSplunkHecValidTokenFieldToAddToTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function observabilityPipelineConfigSourceSplunkHecValidTokenFieldToAddToHclTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAdd | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#enabled ObservabilityPipeline#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Name of the environment variable or secret that holds the expected HEC token value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#token_key ObservabilityPipeline#token_key}
  */
  readonly tokenKey: string;
  /**
  * field_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#field_to_add ObservabilityPipeline#field_to_add}
  */
  readonly fieldToAdd?: ObservabilityPipelineConfigSourceSplunkHecValidTokenFieldToAdd[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSplunkHecValidTokenToTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHecValidToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * When `true`, the Splunk HEC token from the incoming request is stored in the event, allowing downstream components to forward it to other Splunk HEC destinations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#store_hec_token ObservabilityPipeline#store_hec_token}
  */
  readonly storeHecToken?: boolean | cdktn.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceSplunkHecTls[] | cdktn.IResolvable;
  /**
  * valid_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#valid_token ObservabilityPipeline#valid_token}
  */
  readonly validToken?: ObservabilityPipelineConfigSourceSplunkHecValidToken[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSplunkHecToTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSplunkTcpTlsToTerraform(struct?: ObservabilityPipelineConfigSourceSplunkTcpTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceSplunkTcpTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSplunkTcpToTerraform(struct?: ObservabilityPipelineConfigSourceSplunkTcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
    tls: cdktn.listMapper(observabilityPipelineConfigSourceSplunkTcpTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceSplunkTcpToHclTerraform(struct?: ObservabilityPipelineConfigSourceSplunkTcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
}

export function observabilityPipelineConfigSourceSumoLogicToTerraform(struct?: ObservabilityPipelineConfigSourceSumoLogic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_key: cdktn.stringToTerraform(struct!.addressKey),
  }
}


export function observabilityPipelineConfigSourceSumoLogicToHclTerraform(struct?: ObservabilityPipelineConfigSourceSumoLogic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS server certificate file used to identify the pipeline component to connecting clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
  /**
  * Name of the environment variable or secret that holds the passphrase for the private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#key_pass_key ObservabilityPipeline#key_pass_key}
  */
  readonly keyPassKey?: string;
  /**
  * When `true`, requires client connections to present a valid certificate, enabling mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#verify_certificate ObservabilityPipeline#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSyslogNgTlsToTerraform(struct?: ObservabilityPipelineConfigSourceSyslogNgTls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#address_key ObservabilityPipeline#address_key}
  */
  readonly addressKey?: string;
  /**
  * Protocol used by the syslog source to receive messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceSyslogNgTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSyslogNgToTerraform(struct?: ObservabilityPipelineConfigSourceSyslogNg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
export interface ObservabilityPipelineConfigSource {
  /**
  * The unique identifier for this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * amazon_data_firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#amazon_data_firehose ObservabilityPipeline#amazon_data_firehose}
  */
  readonly amazonDataFirehose?: ObservabilityPipelineConfigSourceAmazonDataFirehose[] | cdktn.IResolvable;
  /**
  * amazon_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#amazon_s3 ObservabilityPipeline#amazon_s3}
  */
  readonly amazonS3?: ObservabilityPipelineConfigSourceAmazonS3[] | cdktn.IResolvable;
  /**
  * datadog_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#datadog_agent ObservabilityPipeline#datadog_agent}
  */
  readonly datadogAgent?: ObservabilityPipelineConfigSourceDatadogAgent[] | cdktn.IResolvable;
  /**
  * fluent_bit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#fluent_bit ObservabilityPipeline#fluent_bit}
  */
  readonly fluentBit?: ObservabilityPipelineConfigSourceFluentBit[] | cdktn.IResolvable;
  /**
  * fluentd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#fluentd ObservabilityPipeline#fluentd}
  */
  readonly fluentd?: ObservabilityPipelineConfigSourceFluentd[] | cdktn.IResolvable;
  /**
  * google_pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#google_pubsub ObservabilityPipeline#google_pubsub}
  */
  readonly googlePubsub?: ObservabilityPipelineConfigSourceGooglePubsub[] | cdktn.IResolvable;
  /**
  * http_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#http_client ObservabilityPipeline#http_client}
  */
  readonly httpClient?: ObservabilityPipelineConfigSourceHttpClient[] | cdktn.IResolvable;
  /**
  * http_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#http_server ObservabilityPipeline#http_server}
  */
  readonly httpServer?: ObservabilityPipelineConfigSourceHttpServer[] | cdktn.IResolvable;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#kafka ObservabilityPipeline#kafka}
  */
  readonly kafka?: ObservabilityPipelineConfigSourceKafka[] | cdktn.IResolvable;
  /**
  * logstash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#logstash ObservabilityPipeline#logstash}
  */
  readonly logstash?: ObservabilityPipelineConfigSourceLogstash[] | cdktn.IResolvable;
  /**
  * opentelemetry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#opentelemetry ObservabilityPipeline#opentelemetry}
  */
  readonly opentelemetry?: ObservabilityPipelineConfigSourceOpentelemetry[] | cdktn.IResolvable;
  /**
  * rsyslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#rsyslog ObservabilityPipeline#rsyslog}
  */
  readonly rsyslog?: ObservabilityPipelineConfigSourceRsyslog[] | cdktn.IResolvable;
  /**
  * socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#socket ObservabilityPipeline#socket}
  */
  readonly socket?: ObservabilityPipelineConfigSourceSocket[] | cdktn.IResolvable;
  /**
  * splunk_hec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#splunk_hec ObservabilityPipeline#splunk_hec}
  */
  readonly splunkHec?: ObservabilityPipelineConfigSourceSplunkHec[] | cdktn.IResolvable;
  /**
  * splunk_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#splunk_tcp ObservabilityPipeline#splunk_tcp}
  */
  readonly splunkTcp?: ObservabilityPipelineConfigSourceSplunkTcp[] | cdktn.IResolvable;
  /**
  * sumo_logic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#sumo_logic ObservabilityPipeline#sumo_logic}
  */
  readonly sumoLogic?: ObservabilityPipelineConfigSourceSumoLogic[] | cdktn.IResolvable;
  /**
  * syslog_ng block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#syslog_ng ObservabilityPipeline#syslog_ng}
  */
  readonly syslogNg?: ObservabilityPipelineConfigSourceSyslogNg[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceToTerraform(struct?: ObservabilityPipelineConfigSource | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  }
}


export function observabilityPipelineConfigSourceToHclTerraform(struct?: ObservabilityPipelineConfigSource | cdktn.IResolvable): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#pipeline_type ObservabilityPipeline#pipeline_type}
  */
  readonly pipelineType?: string;
  /**
  * Set to `true` to continue using the legacy search syntax while migrating filter queries. After migrating all queries to the new syntax, set to `false`. The legacy syntax is deprecated and will eventually be removed. Requires Observability Pipelines Worker 2.11 or later. Only applies to `logs` pipelines. This field is ignored for `metrics` pipelines. See https://docs.datadoghq.com/observability_pipelines/guide/upgrade_your_filter_queries_to_the_new_search_syntax/ for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#use_legacy_search_syntax ObservabilityPipeline#use_legacy_search_syntax}
  */
  readonly useLegacySearchSyntax?: boolean | cdktn.IResolvable;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#destination ObservabilityPipeline#destination}
  */
  readonly destination?: ObservabilityPipelineConfigDestination[] | cdktn.IResolvable;
  /**
  * processor_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#processor_group ObservabilityPipeline#processor_group}
  */
  readonly processorGroup?: ObservabilityPipelineConfigProcessorGroup[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/observability_pipeline#source ObservabilityPipeline#source}
  */
  readonly source?: ObservabilityPipelineConfigSource[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigAToTerraform(struct?: ObservabilityPipelineConfigA | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

  // use_legacy_search_syntax - computed: false, optional: true, required: false
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
