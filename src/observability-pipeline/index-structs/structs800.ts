/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktn from 'cdktn';
import { ObservabilityPipelineConfigSourceAmazonDataFirehose,
observabilityPipelineConfigSourceAmazonDataFirehoseToTerraform,
observabilityPipelineConfigSourceAmazonDataFirehoseToHclTerraform,
ObservabilityPipelineConfigSourceAmazonDataFirehoseList,
ObservabilityPipelineConfigSourceAmazonS3,
observabilityPipelineConfigSourceAmazonS3ToTerraform,
observabilityPipelineConfigSourceAmazonS3ToHclTerraform,
ObservabilityPipelineConfigSourceAmazonS3List,
ObservabilityPipelineConfigSourceDatadogAgent,
observabilityPipelineConfigSourceDatadogAgentToTerraform,
observabilityPipelineConfigSourceDatadogAgentToHclTerraform,
ObservabilityPipelineConfigSourceDatadogAgentList,
ObservabilityPipelineConfigSourceFluentBit,
observabilityPipelineConfigSourceFluentBitToTerraform,
observabilityPipelineConfigSourceFluentBitToHclTerraform,
ObservabilityPipelineConfigSourceFluentBitList,
ObservabilityPipelineConfigSourceFluentd,
observabilityPipelineConfigSourceFluentdToTerraform,
observabilityPipelineConfigSourceFluentdToHclTerraform,
ObservabilityPipelineConfigSourceFluentdList,
ObservabilityPipelineConfigSourceGooglePubsub,
observabilityPipelineConfigSourceGooglePubsubToTerraform,
observabilityPipelineConfigSourceGooglePubsubToHclTerraform,
ObservabilityPipelineConfigSourceGooglePubsubList,
ObservabilityPipelineConfigSourceHttpClient,
observabilityPipelineConfigSourceHttpClientToTerraform,
observabilityPipelineConfigSourceHttpClientToHclTerraform,
ObservabilityPipelineConfigSourceHttpClientList,
ObservabilityPipelineConfigSourceHttpServer,
observabilityPipelineConfigSourceHttpServerToTerraform,
observabilityPipelineConfigSourceHttpServerToHclTerraform,
ObservabilityPipelineConfigSourceHttpServerList,
ObservabilityPipelineConfigSourceKafka,
observabilityPipelineConfigSourceKafkaToTerraform,
observabilityPipelineConfigSourceKafkaToHclTerraform,
ObservabilityPipelineConfigSourceKafkaList,
ObservabilityPipelineConfigSourceLogstash,
observabilityPipelineConfigSourceLogstashToTerraform,
observabilityPipelineConfigSourceLogstashToHclTerraform,
ObservabilityPipelineConfigSourceLogstashList,
ObservabilityPipelineConfigSourceOpentelemetry,
observabilityPipelineConfigSourceOpentelemetryToTerraform,
observabilityPipelineConfigSourceOpentelemetryToHclTerraform,
ObservabilityPipelineConfigSourceOpentelemetryList,
ObservabilityPipelineConfigSourceRsyslog,
observabilityPipelineConfigSourceRsyslogToTerraform,
observabilityPipelineConfigSourceRsyslogToHclTerraform,
ObservabilityPipelineConfigSourceRsyslogList,
ObservabilityPipelineConfigSourceSocket,
observabilityPipelineConfigSourceSocketToTerraform,
observabilityPipelineConfigSourceSocketToHclTerraform,
ObservabilityPipelineConfigSourceSocketList,
ObservabilityPipelineConfigDestination,
observabilityPipelineConfigDestinationToTerraform,
observabilityPipelineConfigDestinationToHclTerraform,
ObservabilityPipelineConfigDestinationList,
ObservabilityPipelineConfigProcessorGroup,
observabilityPipelineConfigProcessorGroupToTerraform,
observabilityPipelineConfigProcessorGroupToHclTerraform,
ObservabilityPipelineConfigProcessorGroupList } from './structs400'
export interface ObservabilityPipelineConfigSourceSplunkHecTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSplunkHecTls | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigSourceSplunkHecTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSplunkHecTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSplunkHecTlsOutputReference {
    return new ObservabilityPipelineConfigSourceSplunkHecTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSplunkHec {
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceSplunkHecTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSplunkHecToTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls: cdktn.listMapper(observabilityPipelineConfigSourceSplunkHecTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceSplunkHecToHclTerraform(struct?: ObservabilityPipelineConfigSourceSplunkHec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls: {
      value: cdktn.listMapperHcl(observabilityPipelineConfigSourceSplunkHecTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "ObservabilityPipelineConfigSourceSplunkHecTlsList",
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
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSplunkHec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tls.internalValue = value.tls;
    }
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
}

export class ObservabilityPipelineConfigSourceSplunkHecList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSplunkHec[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSplunkHecOutputReference {
    return new ObservabilityPipelineConfigSourceSplunkHecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSplunkTcpTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSplunkTcpTls | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigSourceSplunkTcpTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSplunkTcpTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSplunkTcpTlsOutputReference {
    return new ObservabilityPipelineConfigSourceSplunkTcpTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSplunkTcp {
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceSplunkTcpTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSplunkTcpToTerraform(struct?: ObservabilityPipelineConfigSourceSplunkTcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls: cdktn.listMapper(observabilityPipelineConfigSourceSplunkTcpTlsToTerraform, true)(struct!.tls),
  }
}


export function observabilityPipelineConfigSourceSplunkTcpToHclTerraform(struct?: ObservabilityPipelineConfigSourceSplunkTcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      this._tls.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tls.internalValue = value.tls;
    }
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigSourceSplunkTcpOutputReference {
    return new ObservabilityPipelineConfigSourceSplunkTcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSumoLogic {
}

export function observabilityPipelineConfigSourceSumoLogicToTerraform(struct?: ObservabilityPipelineConfigSourceSumoLogic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function observabilityPipelineConfigSourceSumoLogicToHclTerraform(struct?: ObservabilityPipelineConfigSourceSumoLogic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSumoLogic | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigSourceSumoLogicList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSumoLogic[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSumoLogicOutputReference {
    return new ObservabilityPipelineConfigSourceSumoLogicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSyslogNgTls {
  /**
  * Path to the Certificate Authority (CA) file used to validate the server's TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#ca_file ObservabilityPipeline#ca_file}
  */
  readonly caFile?: string;
  /**
  * Path to the TLS client certificate file used to authenticate the pipeline component with upstream or downstream services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#crt_file ObservabilityPipeline#crt_file}
  */
  readonly crtFile: string;
  /**
  * Path to the private key file associated with the TLS client certificate. Used for mutual TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#key_file ObservabilityPipeline#key_file}
  */
  readonly keyFile?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityPipelineConfigSourceSyslogNgTls | cdktn.IResolvable | undefined) {
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

export class ObservabilityPipelineConfigSourceSyslogNgTlsList extends cdktn.ComplexList {
  public internalValue? : ObservabilityPipelineConfigSourceSyslogNgTls[] | cdktn.IResolvable

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
  public get(index: number): ObservabilityPipelineConfigSourceSyslogNgTlsOutputReference {
    return new ObservabilityPipelineConfigSourceSyslogNgTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObservabilityPipelineConfigSourceSyslogNg {
  /**
  * Protocol used by the syslog source to receive messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#mode ObservabilityPipeline#mode}
  */
  readonly mode?: string;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#tls ObservabilityPipeline#tls}
  */
  readonly tls?: ObservabilityPipelineConfigSourceSyslogNgTls[] | cdktn.IResolvable;
}

export function observabilityPipelineConfigSourceSyslogNgToTerraform(struct?: ObservabilityPipelineConfigSourceSyslogNg | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
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
      this._mode = value.mode;
      this._tls.internalValue = value.tls;
    }
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#id ObservabilityPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * amazon_data_firehose block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#amazon_data_firehose ObservabilityPipeline#amazon_data_firehose}
  */
  readonly amazonDataFirehose?: ObservabilityPipelineConfigSourceAmazonDataFirehose[] | cdktn.IResolvable;
  /**
  * amazon_s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#amazon_s3 ObservabilityPipeline#amazon_s3}
  */
  readonly amazonS3?: ObservabilityPipelineConfigSourceAmazonS3[] | cdktn.IResolvable;
  /**
  * datadog_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#datadog_agent ObservabilityPipeline#datadog_agent}
  */
  readonly datadogAgent?: ObservabilityPipelineConfigSourceDatadogAgent[] | cdktn.IResolvable;
  /**
  * fluent_bit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#fluent_bit ObservabilityPipeline#fluent_bit}
  */
  readonly fluentBit?: ObservabilityPipelineConfigSourceFluentBit[] | cdktn.IResolvable;
  /**
  * fluentd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#fluentd ObservabilityPipeline#fluentd}
  */
  readonly fluentd?: ObservabilityPipelineConfigSourceFluentd[] | cdktn.IResolvable;
  /**
  * google_pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#google_pubsub ObservabilityPipeline#google_pubsub}
  */
  readonly googlePubsub?: ObservabilityPipelineConfigSourceGooglePubsub[] | cdktn.IResolvable;
  /**
  * http_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#http_client ObservabilityPipeline#http_client}
  */
  readonly httpClient?: ObservabilityPipelineConfigSourceHttpClient[] | cdktn.IResolvable;
  /**
  * http_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#http_server ObservabilityPipeline#http_server}
  */
  readonly httpServer?: ObservabilityPipelineConfigSourceHttpServer[] | cdktn.IResolvable;
  /**
  * kafka block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#kafka ObservabilityPipeline#kafka}
  */
  readonly kafka?: ObservabilityPipelineConfigSourceKafka[] | cdktn.IResolvable;
  /**
  * logstash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#logstash ObservabilityPipeline#logstash}
  */
  readonly logstash?: ObservabilityPipelineConfigSourceLogstash[] | cdktn.IResolvable;
  /**
  * opentelemetry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#opentelemetry ObservabilityPipeline#opentelemetry}
  */
  readonly opentelemetry?: ObservabilityPipelineConfigSourceOpentelemetry[] | cdktn.IResolvable;
  /**
  * rsyslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#rsyslog ObservabilityPipeline#rsyslog}
  */
  readonly rsyslog?: ObservabilityPipelineConfigSourceRsyslog[] | cdktn.IResolvable;
  /**
  * socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#socket ObservabilityPipeline#socket}
  */
  readonly socket?: ObservabilityPipelineConfigSourceSocket[] | cdktn.IResolvable;
  /**
  * splunk_hec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#splunk_hec ObservabilityPipeline#splunk_hec}
  */
  readonly splunkHec?: ObservabilityPipelineConfigSourceSplunkHec[] | cdktn.IResolvable;
  /**
  * splunk_tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#splunk_tcp ObservabilityPipeline#splunk_tcp}
  */
  readonly splunkTcp?: ObservabilityPipelineConfigSourceSplunkTcp[] | cdktn.IResolvable;
  /**
  * sumo_logic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#sumo_logic ObservabilityPipeline#sumo_logic}
  */
  readonly sumoLogic?: ObservabilityPipelineConfigSourceSumoLogic[] | cdktn.IResolvable;
  /**
  * syslog_ng block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#syslog_ng ObservabilityPipeline#syslog_ng}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#pipeline_type ObservabilityPipeline#pipeline_type}
  */
  readonly pipelineType?: string;
  /**
  * Set to `true` to continue using the legacy search syntax while migrating filter queries. After migrating all queries to the new syntax, set to `false`. The legacy syntax is deprecated and will eventually be removed. Requires Observability Pipelines Worker 2.11 or later. See https://docs.datadoghq.com/observability_pipelines/guide/upgrade_your_filter_queries_to_the_new_search_syntax/ for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#use_legacy_search_syntax ObservabilityPipeline#use_legacy_search_syntax}
  */
  readonly useLegacySearchSyntax?: boolean | cdktn.IResolvable;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#destination ObservabilityPipeline#destination}
  */
  readonly destination?: ObservabilityPipelineConfigDestination[] | cdktn.IResolvable;
  /**
  * processor_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#processor_group ObservabilityPipeline#processor_group}
  */
  readonly processorGroup?: ObservabilityPipelineConfigProcessorGroup[] | cdktn.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.90.0/docs/resources/observability_pipeline#source ObservabilityPipeline#source}
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
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObservabilityPipelineConfigAOutputReference {
    return new ObservabilityPipelineConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
