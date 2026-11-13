/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ActionConnectionConfig extends cdktn.TerraformMetaArguments {
  /**
  * AWS Secrets Manager settings shared by credential references. Required when a credential uses an AWS Secrets Manager reference. Optional for literal credentials. Available only on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#external_secrets_manager ActionConnection#external_secrets_manager}
  */
  readonly externalSecretsManager?: ActionConnectionExternalSecretsManager;
  /**
  * Name of the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#name ActionConnection#name}
  */
  readonly name: string;
  /**
  * User-defined tags associated with the connection. Each tag must follow the `key:value` format. The `default` tag key is reserved. See also `effective_tags`, which includes provider-level `default_tags`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#tags ActionConnection#tags}
  */
  readonly tags?: string[];
  /**
  * anthropic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#anthropic ActionConnection#anthropic}
  */
  readonly anthropic?: ActionConnectionAnthropic;
  /**
  * asana block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#asana ActionConnection#asana}
  */
  readonly asana?: ActionConnectionAsana;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#aws ActionConnection#aws}
  */
  readonly aws?: ActionConnectionAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#azure ActionConnection#azure}
  */
  readonly azure?: ActionConnectionAzure;
  /**
  * circle_ci block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#circle_ci ActionConnection#circle_ci}
  */
  readonly circleCi?: ActionConnectionCircleCi;
  /**
  * clickup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#clickup ActionConnection#clickup}
  */
  readonly clickup?: ActionConnectionClickup;
  /**
  * cloudflare block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#cloudflare ActionConnection#cloudflare}
  */
  readonly cloudflare?: ActionConnectionCloudflare;
  /**
  * config_cat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#config_cat ActionConnection#config_cat}
  */
  readonly configCat?: ActionConnectionConfigCat;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#datadog ActionConnection#datadog}
  */
  readonly datadog?: ActionConnectionDatadog;
  /**
  * fastly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#fastly ActionConnection#fastly}
  */
  readonly fastly?: ActionConnectionFastly;
  /**
  * freshservice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#freshservice ActionConnection#freshservice}
  */
  readonly freshservice?: ActionConnectionFreshservice;
  /**
  * gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#gcp ActionConnection#gcp}
  */
  readonly gcp?: ActionConnectionGcp;
  /**
  * gemini block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#gemini ActionConnection#gemini}
  */
  readonly gemini?: ActionConnectionGemini;
  /**
  * gitlab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#gitlab ActionConnection#gitlab}
  */
  readonly gitlab?: ActionConnectionGitlab;
  /**
  * grey_noise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#grey_noise ActionConnection#grey_noise}
  */
  readonly greyNoise?: ActionConnectionGreyNoise;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#http ActionConnection#http}
  */
  readonly http?: ActionConnectionHttp;
  /**
  * launch_darkly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#launch_darkly ActionConnection#launch_darkly}
  */
  readonly launchDarkly?: ActionConnectionLaunchDarkly;
  /**
  * notion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#notion ActionConnection#notion}
  */
  readonly notion?: ActionConnectionNotion;
  /**
  * okta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#okta ActionConnection#okta}
  */
  readonly okta?: ActionConnectionOkta;
  /**
  * openai block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#openai ActionConnection#openai}
  */
  readonly openai?: ActionConnectionOpenai;
  /**
  * service_now block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#service_now ActionConnection#service_now}
  */
  readonly serviceNow?: ActionConnectionServiceNow;
  /**
  * split block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#split ActionConnection#split}
  */
  readonly split?: ActionConnectionSplit;
  /**
  * statsig block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#statsig ActionConnection#statsig}
  */
  readonly statsig?: ActionConnectionStatsig;
  /**
  * virus_total block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#virus_total ActionConnection#virus_total}
  */
  readonly virusTotal?: ActionConnectionVirusTotal;
}
export interface ActionConnectionExternalSecretsManager {
  /**
  * ID of an AWS connection in the same organization used to retrieve secrets. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#connection_id ActionConnection#connection_id}
  */
  readonly connectionId: string;
  /**
  * AWS region containing the secrets. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#region ActionConnection#region}
  */
  readonly region: string;
}

export function actionConnectionExternalSecretsManagerToTerraform(struct?: ActionConnectionExternalSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    connection_id: cdktn.stringToTerraform(struct!.connectionId),
    region: cdktn.stringToTerraform(struct!.region),
  }
}


export function actionConnectionExternalSecretsManagerToHclTerraform(struct?: ActionConnectionExternalSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    connection_id: {
      value: cdktn.stringToHclTerraform(struct!.connectionId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionExternalSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionExternalSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionExternalSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._region = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._region = value.region;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
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
export interface ActionConnectionAnthropicApiKeyApiTokenAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionAnthropicApiKeyApiTokenAwsSecretsManagerToTerraform(struct?: ActionConnectionAnthropicApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionAnthropicApiKeyApiTokenAwsSecretsManagerToHclTerraform(struct?: ActionConnectionAnthropicApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionAnthropicApiKeyApiTokenAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionAnthropicApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionAnthropicApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionAnthropicApiKey {
  /**
  * Anthropic API token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token ActionConnection#api_token}
  */
  readonly apiToken?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token_aws_secrets_manager ActionConnection#api_token_aws_secrets_manager}
  */
  readonly apiTokenAwsSecretsManager?: ActionConnectionAnthropicApiKeyApiTokenAwsSecretsManager;
}

export function actionConnectionAnthropicApiKeyToTerraform(struct?: ActionConnectionAnthropicApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token: cdktn.stringToTerraform(struct!.apiToken),
    api_token_aws_secrets_manager: actionConnectionAnthropicApiKeyApiTokenAwsSecretsManagerToTerraform(struct!.apiTokenAwsSecretsManager),
  }
}


export function actionConnectionAnthropicApiKeyToHclTerraform(struct?: ActionConnectionAnthropicApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token: {
      value: cdktn.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token_aws_secrets_manager: {
      value: actionConnectionAnthropicApiKeyApiTokenAwsSecretsManagerToHclTerraform(struct!.apiTokenAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionAnthropicApiKeyApiTokenAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionAnthropicApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionAnthropicApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._apiTokenAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTokenAwsSecretsManager = this._apiTokenAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionAnthropicApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._apiTokenAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._apiTokenAwsSecretsManager.internalValue = value.apiTokenAwsSecretsManager;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // api_token_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiTokenAwsSecretsManager = new ActionConnectionAnthropicApiKeyApiTokenAwsSecretsManagerOutputReference(this, "api_token_aws_secrets_manager");
  public get apiTokenAwsSecretsManager() {
    return this._apiTokenAwsSecretsManager;
  }
  public putApiTokenAwsSecretsManager(value: ActionConnectionAnthropicApiKeyApiTokenAwsSecretsManager) {
    this._apiTokenAwsSecretsManager.internalValue = value;
  }
  public resetApiTokenAwsSecretsManager() {
    this._apiTokenAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenAwsSecretsManagerInput() {
    return this._apiTokenAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionAnthropic {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionAnthropicApiKey;
}

export function actionConnectionAnthropicToTerraform(struct?: ActionConnectionAnthropic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionAnthropicApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionAnthropicToHclTerraform(struct?: ActionConnectionAnthropic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionAnthropicApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionAnthropicApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionAnthropicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionAnthropic | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionAnthropic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionAnthropicApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionAnthropicApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ActionConnectionAsanaAccessTokenAccessTokenAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionAsanaAccessTokenAccessTokenAwsSecretsManagerToTerraform(struct?: ActionConnectionAsanaAccessTokenAccessTokenAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionAsanaAccessTokenAccessTokenAwsSecretsManagerToHclTerraform(struct?: ActionConnectionAsanaAccessTokenAccessTokenAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionAsanaAccessTokenAccessTokenAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionAsanaAccessTokenAccessTokenAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionAsanaAccessTokenAccessTokenAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionAsanaAccessToken {
  /**
  * Asana access token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#access_token ActionConnection#access_token}
  */
  readonly accessToken?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#access_token_aws_secrets_manager ActionConnection#access_token_aws_secrets_manager}
  */
  readonly accessTokenAwsSecretsManager?: ActionConnectionAsanaAccessTokenAccessTokenAwsSecretsManager;
}

export function actionConnectionAsanaAccessTokenToTerraform(struct?: ActionConnectionAsanaAccessToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    access_token_aws_secrets_manager: actionConnectionAsanaAccessTokenAccessTokenAwsSecretsManagerToTerraform(struct!.accessTokenAwsSecretsManager),
  }
}


export function actionConnectionAsanaAccessTokenToHclTerraform(struct?: ActionConnectionAsanaAccessToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_aws_secrets_manager: {
      value: actionConnectionAsanaAccessTokenAccessTokenAwsSecretsManagerToHclTerraform(struct!.accessTokenAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionAsanaAccessTokenAccessTokenAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionAsanaAccessTokenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionAsanaAccessToken | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._accessTokenAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenAwsSecretsManager = this._accessTokenAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionAsanaAccessToken | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken = undefined;
      this._accessTokenAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken = value.accessToken;
      this._accessTokenAwsSecretsManager.internalValue = value.accessTokenAwsSecretsManager;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // access_token_aws_secrets_manager - computed: false, optional: true, required: false
  private _accessTokenAwsSecretsManager = new ActionConnectionAsanaAccessTokenAccessTokenAwsSecretsManagerOutputReference(this, "access_token_aws_secrets_manager");
  public get accessTokenAwsSecretsManager() {
    return this._accessTokenAwsSecretsManager;
  }
  public putAccessTokenAwsSecretsManager(value: ActionConnectionAsanaAccessTokenAccessTokenAwsSecretsManager) {
    this._accessTokenAwsSecretsManager.internalValue = value;
  }
  public resetAccessTokenAwsSecretsManager() {
    this._accessTokenAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenAwsSecretsManagerInput() {
    return this._accessTokenAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionAsana {
  /**
  * access_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#access_token ActionConnection#access_token}
  */
  readonly accessToken?: ActionConnectionAsanaAccessToken;
}

export function actionConnectionAsanaToTerraform(struct?: ActionConnectionAsana | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: actionConnectionAsanaAccessTokenToTerraform(struct!.accessToken),
  }
}


export function actionConnectionAsanaToHclTerraform(struct?: ActionConnectionAsana | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: actionConnectionAsanaAccessTokenToHclTerraform(struct!.accessToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionAsanaAccessToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionAsanaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionAsana | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionAsana | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken.internalValue = value.accessToken;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken = new ActionConnectionAsanaAccessTokenOutputReference(this, "access_token");
  public get accessToken() {
    return this._accessToken;
  }
  public putAccessToken(value: ActionConnectionAsanaAccessToken) {
    this._accessToken.internalValue = value;
  }
  public resetAccessToken() {
    this._accessToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken.internalValue;
  }
}
export interface ActionConnectionAwsAssumeRole {
  /**
  * AWS account that the connection is created for. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#account_id ActionConnection#account_id}
  */
  readonly accountId?: string;
  /**
  * Role to assume. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#role ActionConnection#role}
  */
  readonly role?: string;
}

export function actionConnectionAwsAssumeRoleToTerraform(struct?: ActionConnectionAwsAssumeRole | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    account_id: cdktn.stringToTerraform(struct!.accountId),
    role: cdktn.stringToTerraform(struct!.role),
  }
}


export function actionConnectionAwsAssumeRoleToHclTerraform(struct?: ActionConnectionAwsAssumeRole | cdktn.IResolvable): any {
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
    role: {
      value: cdktn.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionAwsAssumeRoleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionAwsAssumeRole | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionAwsAssumeRole | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._role = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._role = value.role;
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

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}
export interface ActionConnectionAws {
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#assume_role ActionConnection#assume_role}
  */
  readonly assumeRole?: ActionConnectionAwsAssumeRole;
}

export function actionConnectionAwsToTerraform(struct?: ActionConnectionAws | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    assume_role: actionConnectionAwsAssumeRoleToTerraform(struct!.assumeRole),
  }
}


export function actionConnectionAwsToHclTerraform(struct?: ActionConnectionAws | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    assume_role: {
      value: actionConnectionAwsAssumeRoleToHclTerraform(struct!.assumeRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionAwsAssumeRole",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionAwsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionAws | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assumeRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRole = this._assumeRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionAws | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assumeRole.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assumeRole.internalValue = value.assumeRole;
    }
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole = new ActionConnectionAwsAssumeRoleOutputReference(this, "assume_role");
  public get assumeRole() {
    return this._assumeRole;
  }
  public putAssumeRole(value: ActionConnectionAwsAssumeRole) {
    this._assumeRole.internalValue = value;
  }
  public resetAssumeRole() {
    this._assumeRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole.internalValue;
  }
}
export interface ActionConnectionAzureTenant {
  /**
  * Azure application client ID. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#app_client_id ActionConnection#app_client_id}
  */
  readonly appClientId?: string;
  /**
  * Azure application client secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#client_secret ActionConnection#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Custom scope requested when acquiring an OAuth 2 access token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#custom_scopes ActionConnection#custom_scopes}
  */
  readonly customScopes?: string;
  /**
  * Azure Active Directory tenant ID. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#tenant_id ActionConnection#tenant_id}
  */
  readonly tenantId?: string;
}

export function actionConnectionAzureTenantToTerraform(struct?: ActionConnectionAzureTenant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    app_client_id: cdktn.stringToTerraform(struct!.appClientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    custom_scopes: cdktn.stringToTerraform(struct!.customScopes),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function actionConnectionAzureTenantToHclTerraform(struct?: ActionConnectionAzureTenant | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    app_client_id: {
      value: cdktn.stringToHclTerraform(struct!.appClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktn.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_scopes: {
      value: cdktn.stringToHclTerraform(struct!.customScopes),
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

export class ActionConnectionAzureTenantOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionAzureTenant | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appClientId = this._appClientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._customScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.customScopes = this._customScopes;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionAzureTenant | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appClientId = undefined;
      this._clientSecret = undefined;
      this._customScopes = undefined;
      this._tenantId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appClientId = value.appClientId;
      this._clientSecret = value.clientSecret;
      this._customScopes = value.customScopes;
      this._tenantId = value.tenantId;
    }
  }

  // app_client_id - computed: false, optional: true, required: false
  private _appClientId?: string; 
  public get appClientId() {
    return this.getStringAttribute('app_client_id');
  }
  public set appClientId(value: string) {
    this._appClientId = value;
  }
  public resetAppClientId() {
    this._appClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appClientIdInput() {
    return this._appClientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // custom_scopes - computed: false, optional: true, required: false
  private _customScopes?: string; 
  public get customScopes() {
    return this.getStringAttribute('custom_scopes');
  }
  public set customScopes(value: string) {
    this._customScopes = value;
  }
  public resetCustomScopes() {
    this._customScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customScopesInput() {
    return this._customScopes;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface ActionConnectionAzure {
  /**
  * tenant block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#tenant ActionConnection#tenant}
  */
  readonly tenant?: ActionConnectionAzureTenant;
}

export function actionConnectionAzureToTerraform(struct?: ActionConnectionAzure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    tenant: actionConnectionAzureTenantToTerraform(struct!.tenant),
  }
}


export function actionConnectionAzureToHclTerraform(struct?: ActionConnectionAzure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    tenant: {
      value: actionConnectionAzureTenantToHclTerraform(struct!.tenant),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionAzureTenant",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionAzureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionAzure | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tenant?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionAzure | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tenant.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tenant.internalValue = value.tenant;
    }
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant = new ActionConnectionAzureTenantOutputReference(this, "tenant");
  public get tenant() {
    return this._tenant;
  }
  public putTenant(value: ActionConnectionAzureTenant) {
    this._tenant.internalValue = value;
  }
  public resetTenant() {
    this._tenant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant.internalValue;
  }
}
export interface ActionConnectionCircleCiApiKeyApiTokenAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionCircleCiApiKeyApiTokenAwsSecretsManagerToTerraform(struct?: ActionConnectionCircleCiApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionCircleCiApiKeyApiTokenAwsSecretsManagerToHclTerraform(struct?: ActionConnectionCircleCiApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionCircleCiApiKeyApiTokenAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionCircleCiApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionCircleCiApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionCircleCiApiKey {
  /**
  * CircleCI API token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token ActionConnection#api_token}
  */
  readonly apiToken?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token_aws_secrets_manager ActionConnection#api_token_aws_secrets_manager}
  */
  readonly apiTokenAwsSecretsManager?: ActionConnectionCircleCiApiKeyApiTokenAwsSecretsManager;
}

export function actionConnectionCircleCiApiKeyToTerraform(struct?: ActionConnectionCircleCiApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token: cdktn.stringToTerraform(struct!.apiToken),
    api_token_aws_secrets_manager: actionConnectionCircleCiApiKeyApiTokenAwsSecretsManagerToTerraform(struct!.apiTokenAwsSecretsManager),
  }
}


export function actionConnectionCircleCiApiKeyToHclTerraform(struct?: ActionConnectionCircleCiApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token: {
      value: cdktn.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token_aws_secrets_manager: {
      value: actionConnectionCircleCiApiKeyApiTokenAwsSecretsManagerToHclTerraform(struct!.apiTokenAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionCircleCiApiKeyApiTokenAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionCircleCiApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionCircleCiApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._apiTokenAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTokenAwsSecretsManager = this._apiTokenAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionCircleCiApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._apiTokenAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._apiTokenAwsSecretsManager.internalValue = value.apiTokenAwsSecretsManager;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // api_token_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiTokenAwsSecretsManager = new ActionConnectionCircleCiApiKeyApiTokenAwsSecretsManagerOutputReference(this, "api_token_aws_secrets_manager");
  public get apiTokenAwsSecretsManager() {
    return this._apiTokenAwsSecretsManager;
  }
  public putApiTokenAwsSecretsManager(value: ActionConnectionCircleCiApiKeyApiTokenAwsSecretsManager) {
    this._apiTokenAwsSecretsManager.internalValue = value;
  }
  public resetApiTokenAwsSecretsManager() {
    this._apiTokenAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenAwsSecretsManagerInput() {
    return this._apiTokenAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionCircleCi {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionCircleCiApiKey;
}

export function actionConnectionCircleCiToTerraform(struct?: ActionConnectionCircleCi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionCircleCiApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionCircleCiToHclTerraform(struct?: ActionConnectionCircleCi | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionCircleCiApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionCircleCiApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionCircleCiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionCircleCi | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionCircleCi | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionCircleCiApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionCircleCiApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ActionConnectionClickupApiKeyApiTokenAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionClickupApiKeyApiTokenAwsSecretsManagerToTerraform(struct?: ActionConnectionClickupApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionClickupApiKeyApiTokenAwsSecretsManagerToHclTerraform(struct?: ActionConnectionClickupApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionClickupApiKeyApiTokenAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionClickupApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionClickupApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionClickupApiKey {
  /**
  * ClickUp API token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token ActionConnection#api_token}
  */
  readonly apiToken?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token_aws_secrets_manager ActionConnection#api_token_aws_secrets_manager}
  */
  readonly apiTokenAwsSecretsManager?: ActionConnectionClickupApiKeyApiTokenAwsSecretsManager;
}

export function actionConnectionClickupApiKeyToTerraform(struct?: ActionConnectionClickupApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token: cdktn.stringToTerraform(struct!.apiToken),
    api_token_aws_secrets_manager: actionConnectionClickupApiKeyApiTokenAwsSecretsManagerToTerraform(struct!.apiTokenAwsSecretsManager),
  }
}


export function actionConnectionClickupApiKeyToHclTerraform(struct?: ActionConnectionClickupApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token: {
      value: cdktn.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token_aws_secrets_manager: {
      value: actionConnectionClickupApiKeyApiTokenAwsSecretsManagerToHclTerraform(struct!.apiTokenAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionClickupApiKeyApiTokenAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionClickupApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionClickupApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._apiTokenAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTokenAwsSecretsManager = this._apiTokenAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionClickupApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._apiTokenAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._apiTokenAwsSecretsManager.internalValue = value.apiTokenAwsSecretsManager;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // api_token_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiTokenAwsSecretsManager = new ActionConnectionClickupApiKeyApiTokenAwsSecretsManagerOutputReference(this, "api_token_aws_secrets_manager");
  public get apiTokenAwsSecretsManager() {
    return this._apiTokenAwsSecretsManager;
  }
  public putApiTokenAwsSecretsManager(value: ActionConnectionClickupApiKeyApiTokenAwsSecretsManager) {
    this._apiTokenAwsSecretsManager.internalValue = value;
  }
  public resetApiTokenAwsSecretsManager() {
    this._apiTokenAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenAwsSecretsManagerInput() {
    return this._apiTokenAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionClickup {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionClickupApiKey;
}

export function actionConnectionClickupToTerraform(struct?: ActionConnectionClickup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionClickupApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionClickupToHclTerraform(struct?: ActionConnectionClickup | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionClickupApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionClickupApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionClickupOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionClickup | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionClickup | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionClickupApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionClickupApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ActionConnectionCloudflareApiTokenApiTokenAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionCloudflareApiTokenApiTokenAwsSecretsManagerToTerraform(struct?: ActionConnectionCloudflareApiTokenApiTokenAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionCloudflareApiTokenApiTokenAwsSecretsManagerToHclTerraform(struct?: ActionConnectionCloudflareApiTokenApiTokenAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionCloudflareApiTokenApiTokenAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionCloudflareApiTokenApiTokenAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionCloudflareApiTokenApiTokenAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionCloudflareApiToken {
  /**
  * Cloudflare API token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token ActionConnection#api_token}
  */
  readonly apiToken?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token_aws_secrets_manager ActionConnection#api_token_aws_secrets_manager}
  */
  readonly apiTokenAwsSecretsManager?: ActionConnectionCloudflareApiTokenApiTokenAwsSecretsManager;
}

export function actionConnectionCloudflareApiTokenToTerraform(struct?: ActionConnectionCloudflareApiToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token: cdktn.stringToTerraform(struct!.apiToken),
    api_token_aws_secrets_manager: actionConnectionCloudflareApiTokenApiTokenAwsSecretsManagerToTerraform(struct!.apiTokenAwsSecretsManager),
  }
}


export function actionConnectionCloudflareApiTokenToHclTerraform(struct?: ActionConnectionCloudflareApiToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token: {
      value: cdktn.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token_aws_secrets_manager: {
      value: actionConnectionCloudflareApiTokenApiTokenAwsSecretsManagerToHclTerraform(struct!.apiTokenAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionCloudflareApiTokenApiTokenAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionCloudflareApiTokenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionCloudflareApiToken | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._apiTokenAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTokenAwsSecretsManager = this._apiTokenAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionCloudflareApiToken | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._apiTokenAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._apiTokenAwsSecretsManager.internalValue = value.apiTokenAwsSecretsManager;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // api_token_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiTokenAwsSecretsManager = new ActionConnectionCloudflareApiTokenApiTokenAwsSecretsManagerOutputReference(this, "api_token_aws_secrets_manager");
  public get apiTokenAwsSecretsManager() {
    return this._apiTokenAwsSecretsManager;
  }
  public putApiTokenAwsSecretsManager(value: ActionConnectionCloudflareApiTokenApiTokenAwsSecretsManager) {
    this._apiTokenAwsSecretsManager.internalValue = value;
  }
  public resetApiTokenAwsSecretsManager() {
    this._apiTokenAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenAwsSecretsManagerInput() {
    return this._apiTokenAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionCloudflareGlobalApiTokenAuthEmailAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionCloudflareGlobalApiTokenAuthEmailAwsSecretsManagerToTerraform(struct?: ActionConnectionCloudflareGlobalApiTokenAuthEmailAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionCloudflareGlobalApiTokenAuthEmailAwsSecretsManagerToHclTerraform(struct?: ActionConnectionCloudflareGlobalApiTokenAuthEmailAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionCloudflareGlobalApiTokenAuthEmailAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionCloudflareGlobalApiTokenAuthEmailAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionCloudflareGlobalApiTokenAuthEmailAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionCloudflareGlobalApiTokenGlobalApiKeyAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionCloudflareGlobalApiTokenGlobalApiKeyAwsSecretsManagerToTerraform(struct?: ActionConnectionCloudflareGlobalApiTokenGlobalApiKeyAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionCloudflareGlobalApiTokenGlobalApiKeyAwsSecretsManagerToHclTerraform(struct?: ActionConnectionCloudflareGlobalApiTokenGlobalApiKeyAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionCloudflareGlobalApiTokenGlobalApiKeyAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionCloudflareGlobalApiTokenGlobalApiKeyAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionCloudflareGlobalApiTokenGlobalApiKeyAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionCloudflareGlobalApiToken {
  /**
  * Email address associated with the Cloudflare account. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#auth_email ActionConnection#auth_email}
  */
  readonly authEmail?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#auth_email_aws_secrets_manager ActionConnection#auth_email_aws_secrets_manager}
  */
  readonly authEmailAwsSecretsManager?: ActionConnectionCloudflareGlobalApiTokenAuthEmailAwsSecretsManager;
  /**
  * Cloudflare global API key. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#global_api_key ActionConnection#global_api_key}
  */
  readonly globalApiKey?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#global_api_key_aws_secrets_manager ActionConnection#global_api_key_aws_secrets_manager}
  */
  readonly globalApiKeyAwsSecretsManager?: ActionConnectionCloudflareGlobalApiTokenGlobalApiKeyAwsSecretsManager;
}

export function actionConnectionCloudflareGlobalApiTokenToTerraform(struct?: ActionConnectionCloudflareGlobalApiToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    auth_email: cdktn.stringToTerraform(struct!.authEmail),
    auth_email_aws_secrets_manager: actionConnectionCloudflareGlobalApiTokenAuthEmailAwsSecretsManagerToTerraform(struct!.authEmailAwsSecretsManager),
    global_api_key: cdktn.stringToTerraform(struct!.globalApiKey),
    global_api_key_aws_secrets_manager: actionConnectionCloudflareGlobalApiTokenGlobalApiKeyAwsSecretsManagerToTerraform(struct!.globalApiKeyAwsSecretsManager),
  }
}


export function actionConnectionCloudflareGlobalApiTokenToHclTerraform(struct?: ActionConnectionCloudflareGlobalApiToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    auth_email: {
      value: cdktn.stringToHclTerraform(struct!.authEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_email_aws_secrets_manager: {
      value: actionConnectionCloudflareGlobalApiTokenAuthEmailAwsSecretsManagerToHclTerraform(struct!.authEmailAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionCloudflareGlobalApiTokenAuthEmailAwsSecretsManager",
    },
    global_api_key: {
      value: cdktn.stringToHclTerraform(struct!.globalApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_api_key_aws_secrets_manager: {
      value: actionConnectionCloudflareGlobalApiTokenGlobalApiKeyAwsSecretsManagerToHclTerraform(struct!.globalApiKeyAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionCloudflareGlobalApiTokenGlobalApiKeyAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionCloudflareGlobalApiTokenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionCloudflareGlobalApiToken | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEmail = this._authEmail;
    }
    if (this._authEmailAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEmailAwsSecretsManager = this._authEmailAwsSecretsManager?.internalValue;
    }
    if (this._globalApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalApiKey = this._globalApiKey;
    }
    if (this._globalApiKeyAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalApiKeyAwsSecretsManager = this._globalApiKeyAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionCloudflareGlobalApiToken | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authEmail = undefined;
      this._authEmailAwsSecretsManager.internalValue = undefined;
      this._globalApiKey = undefined;
      this._globalApiKeyAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authEmail = value.authEmail;
      this._authEmailAwsSecretsManager.internalValue = value.authEmailAwsSecretsManager;
      this._globalApiKey = value.globalApiKey;
      this._globalApiKeyAwsSecretsManager.internalValue = value.globalApiKeyAwsSecretsManager;
    }
  }

  // auth_email - computed: false, optional: true, required: false
  private _authEmail?: string; 
  public get authEmail() {
    return this.getStringAttribute('auth_email');
  }
  public set authEmail(value: string) {
    this._authEmail = value;
  }
  public resetAuthEmail() {
    this._authEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEmailInput() {
    return this._authEmail;
  }

  // auth_email_aws_secrets_manager - computed: false, optional: true, required: false
  private _authEmailAwsSecretsManager = new ActionConnectionCloudflareGlobalApiTokenAuthEmailAwsSecretsManagerOutputReference(this, "auth_email_aws_secrets_manager");
  public get authEmailAwsSecretsManager() {
    return this._authEmailAwsSecretsManager;
  }
  public putAuthEmailAwsSecretsManager(value: ActionConnectionCloudflareGlobalApiTokenAuthEmailAwsSecretsManager) {
    this._authEmailAwsSecretsManager.internalValue = value;
  }
  public resetAuthEmailAwsSecretsManager() {
    this._authEmailAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authEmailAwsSecretsManagerInput() {
    return this._authEmailAwsSecretsManager.internalValue;
  }

  // global_api_key - computed: false, optional: true, required: false
  private _globalApiKey?: string; 
  public get globalApiKey() {
    return this.getStringAttribute('global_api_key');
  }
  public set globalApiKey(value: string) {
    this._globalApiKey = value;
  }
  public resetGlobalApiKey() {
    this._globalApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalApiKeyInput() {
    return this._globalApiKey;
  }

  // global_api_key_aws_secrets_manager - computed: false, optional: true, required: false
  private _globalApiKeyAwsSecretsManager = new ActionConnectionCloudflareGlobalApiTokenGlobalApiKeyAwsSecretsManagerOutputReference(this, "global_api_key_aws_secrets_manager");
  public get globalApiKeyAwsSecretsManager() {
    return this._globalApiKeyAwsSecretsManager;
  }
  public putGlobalApiKeyAwsSecretsManager(value: ActionConnectionCloudflareGlobalApiTokenGlobalApiKeyAwsSecretsManager) {
    this._globalApiKeyAwsSecretsManager.internalValue = value;
  }
  public resetGlobalApiKeyAwsSecretsManager() {
    this._globalApiKeyAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalApiKeyAwsSecretsManagerInput() {
    return this._globalApiKeyAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionCloudflare {
  /**
  * api_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token ActionConnection#api_token}
  */
  readonly apiToken?: ActionConnectionCloudflareApiToken;
  /**
  * global_api_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#global_api_token ActionConnection#global_api_token}
  */
  readonly globalApiToken?: ActionConnectionCloudflareGlobalApiToken;
}

export function actionConnectionCloudflareToTerraform(struct?: ActionConnectionCloudflare | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token: actionConnectionCloudflareApiTokenToTerraform(struct!.apiToken),
    global_api_token: actionConnectionCloudflareGlobalApiTokenToTerraform(struct!.globalApiToken),
  }
}


export function actionConnectionCloudflareToHclTerraform(struct?: ActionConnectionCloudflare | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token: {
      value: actionConnectionCloudflareApiTokenToHclTerraform(struct!.apiToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionCloudflareApiToken",
    },
    global_api_token: {
      value: actionConnectionCloudflareGlobalApiTokenToHclTerraform(struct!.globalApiToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionCloudflareGlobalApiToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionCloudflareOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionCloudflare | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken?.internalValue;
    }
    if (this._globalApiToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalApiToken = this._globalApiToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionCloudflare | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken.internalValue = undefined;
      this._globalApiToken.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken.internalValue = value.apiToken;
      this._globalApiToken.internalValue = value.globalApiToken;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken = new ActionConnectionCloudflareApiTokenOutputReference(this, "api_token");
  public get apiToken() {
    return this._apiToken;
  }
  public putApiToken(value: ActionConnectionCloudflareApiToken) {
    this._apiToken.internalValue = value;
  }
  public resetApiToken() {
    this._apiToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken.internalValue;
  }

  // global_api_token - computed: false, optional: true, required: false
  private _globalApiToken = new ActionConnectionCloudflareGlobalApiTokenOutputReference(this, "global_api_token");
  public get globalApiToken() {
    return this._globalApiToken;
  }
  public putGlobalApiToken(value: ActionConnectionCloudflareGlobalApiToken) {
    this._globalApiToken.internalValue = value;
  }
  public resetGlobalApiToken() {
    this._globalApiToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalApiTokenInput() {
    return this._globalApiToken.internalValue;
  }
}
export interface ActionConnectionConfigCatSdkKeyApiPasswordAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionConfigCatSdkKeyApiPasswordAwsSecretsManagerToTerraform(struct?: ActionConnectionConfigCatSdkKeyApiPasswordAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionConfigCatSdkKeyApiPasswordAwsSecretsManagerToHclTerraform(struct?: ActionConnectionConfigCatSdkKeyApiPasswordAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionConfigCatSdkKeyApiPasswordAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionConfigCatSdkKeyApiPasswordAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionConfigCatSdkKeyApiPasswordAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionConfigCatSdkKeyApiUsernameAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionConfigCatSdkKeyApiUsernameAwsSecretsManagerToTerraform(struct?: ActionConnectionConfigCatSdkKeyApiUsernameAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionConfigCatSdkKeyApiUsernameAwsSecretsManagerToHclTerraform(struct?: ActionConnectionConfigCatSdkKeyApiUsernameAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionConfigCatSdkKeyApiUsernameAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionConfigCatSdkKeyApiUsernameAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionConfigCatSdkKeyApiUsernameAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionConfigCatSdkKeySdkKeyAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionConfigCatSdkKeySdkKeyAwsSecretsManagerToTerraform(struct?: ActionConnectionConfigCatSdkKeySdkKeyAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionConfigCatSdkKeySdkKeyAwsSecretsManagerToHclTerraform(struct?: ActionConnectionConfigCatSdkKeySdkKeyAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionConfigCatSdkKeySdkKeyAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionConfigCatSdkKeySdkKeyAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionConfigCatSdkKeySdkKeyAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionConfigCatSdkKey {
  /**
  * ConfigCat Public Management API password. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_password ActionConnection#api_password}
  */
  readonly apiPassword?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_password_aws_secrets_manager ActionConnection#api_password_aws_secrets_manager}
  */
  readonly apiPasswordAwsSecretsManager?: ActionConnectionConfigCatSdkKeyApiPasswordAwsSecretsManager;
  /**
  * ConfigCat Public Management API username. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_username ActionConnection#api_username}
  */
  readonly apiUsername?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_username_aws_secrets_manager ActionConnection#api_username_aws_secrets_manager}
  */
  readonly apiUsernameAwsSecretsManager?: ActionConnectionConfigCatSdkKeyApiUsernameAwsSecretsManager;
  /**
  * ConfigCat SDK key. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#sdk_key ActionConnection#sdk_key}
  */
  readonly sdkKey?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#sdk_key_aws_secrets_manager ActionConnection#sdk_key_aws_secrets_manager}
  */
  readonly sdkKeyAwsSecretsManager?: ActionConnectionConfigCatSdkKeySdkKeyAwsSecretsManager;
}

export function actionConnectionConfigCatSdkKeyToTerraform(struct?: ActionConnectionConfigCatSdkKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_password: cdktn.stringToTerraform(struct!.apiPassword),
    api_password_aws_secrets_manager: actionConnectionConfigCatSdkKeyApiPasswordAwsSecretsManagerToTerraform(struct!.apiPasswordAwsSecretsManager),
    api_username: cdktn.stringToTerraform(struct!.apiUsername),
    api_username_aws_secrets_manager: actionConnectionConfigCatSdkKeyApiUsernameAwsSecretsManagerToTerraform(struct!.apiUsernameAwsSecretsManager),
    sdk_key: cdktn.stringToTerraform(struct!.sdkKey),
    sdk_key_aws_secrets_manager: actionConnectionConfigCatSdkKeySdkKeyAwsSecretsManagerToTerraform(struct!.sdkKeyAwsSecretsManager),
  }
}


export function actionConnectionConfigCatSdkKeyToHclTerraform(struct?: ActionConnectionConfigCatSdkKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_password: {
      value: cdktn.stringToHclTerraform(struct!.apiPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_password_aws_secrets_manager: {
      value: actionConnectionConfigCatSdkKeyApiPasswordAwsSecretsManagerToHclTerraform(struct!.apiPasswordAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionConfigCatSdkKeyApiPasswordAwsSecretsManager",
    },
    api_username: {
      value: cdktn.stringToHclTerraform(struct!.apiUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_username_aws_secrets_manager: {
      value: actionConnectionConfigCatSdkKeyApiUsernameAwsSecretsManagerToHclTerraform(struct!.apiUsernameAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionConfigCatSdkKeyApiUsernameAwsSecretsManager",
    },
    sdk_key: {
      value: cdktn.stringToHclTerraform(struct!.sdkKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdk_key_aws_secrets_manager: {
      value: actionConnectionConfigCatSdkKeySdkKeyAwsSecretsManagerToHclTerraform(struct!.sdkKeyAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionConfigCatSdkKeySdkKeyAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionConfigCatSdkKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionConfigCatSdkKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiPassword = this._apiPassword;
    }
    if (this._apiPasswordAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiPasswordAwsSecretsManager = this._apiPasswordAwsSecretsManager?.internalValue;
    }
    if (this._apiUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUsername = this._apiUsername;
    }
    if (this._apiUsernameAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUsernameAwsSecretsManager = this._apiUsernameAwsSecretsManager?.internalValue;
    }
    if (this._sdkKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdkKey = this._sdkKey;
    }
    if (this._sdkKeyAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdkKeyAwsSecretsManager = this._sdkKeyAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionConfigCatSdkKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiPassword = undefined;
      this._apiPasswordAwsSecretsManager.internalValue = undefined;
      this._apiUsername = undefined;
      this._apiUsernameAwsSecretsManager.internalValue = undefined;
      this._sdkKey = undefined;
      this._sdkKeyAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiPassword = value.apiPassword;
      this._apiPasswordAwsSecretsManager.internalValue = value.apiPasswordAwsSecretsManager;
      this._apiUsername = value.apiUsername;
      this._apiUsernameAwsSecretsManager.internalValue = value.apiUsernameAwsSecretsManager;
      this._sdkKey = value.sdkKey;
      this._sdkKeyAwsSecretsManager.internalValue = value.sdkKeyAwsSecretsManager;
    }
  }

  // api_password - computed: false, optional: true, required: false
  private _apiPassword?: string; 
  public get apiPassword() {
    return this.getStringAttribute('api_password');
  }
  public set apiPassword(value: string) {
    this._apiPassword = value;
  }
  public resetApiPassword() {
    this._apiPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPasswordInput() {
    return this._apiPassword;
  }

  // api_password_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiPasswordAwsSecretsManager = new ActionConnectionConfigCatSdkKeyApiPasswordAwsSecretsManagerOutputReference(this, "api_password_aws_secrets_manager");
  public get apiPasswordAwsSecretsManager() {
    return this._apiPasswordAwsSecretsManager;
  }
  public putApiPasswordAwsSecretsManager(value: ActionConnectionConfigCatSdkKeyApiPasswordAwsSecretsManager) {
    this._apiPasswordAwsSecretsManager.internalValue = value;
  }
  public resetApiPasswordAwsSecretsManager() {
    this._apiPasswordAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPasswordAwsSecretsManagerInput() {
    return this._apiPasswordAwsSecretsManager.internalValue;
  }

  // api_username - computed: false, optional: true, required: false
  private _apiUsername?: string; 
  public get apiUsername() {
    return this.getStringAttribute('api_username');
  }
  public set apiUsername(value: string) {
    this._apiUsername = value;
  }
  public resetApiUsername() {
    this._apiUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUsernameInput() {
    return this._apiUsername;
  }

  // api_username_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiUsernameAwsSecretsManager = new ActionConnectionConfigCatSdkKeyApiUsernameAwsSecretsManagerOutputReference(this, "api_username_aws_secrets_manager");
  public get apiUsernameAwsSecretsManager() {
    return this._apiUsernameAwsSecretsManager;
  }
  public putApiUsernameAwsSecretsManager(value: ActionConnectionConfigCatSdkKeyApiUsernameAwsSecretsManager) {
    this._apiUsernameAwsSecretsManager.internalValue = value;
  }
  public resetApiUsernameAwsSecretsManager() {
    this._apiUsernameAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUsernameAwsSecretsManagerInput() {
    return this._apiUsernameAwsSecretsManager.internalValue;
  }

  // sdk_key - computed: false, optional: true, required: false
  private _sdkKey?: string; 
  public get sdkKey() {
    return this.getStringAttribute('sdk_key');
  }
  public set sdkKey(value: string) {
    this._sdkKey = value;
  }
  public resetSdkKey() {
    this._sdkKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdkKeyInput() {
    return this._sdkKey;
  }

  // sdk_key_aws_secrets_manager - computed: false, optional: true, required: false
  private _sdkKeyAwsSecretsManager = new ActionConnectionConfigCatSdkKeySdkKeyAwsSecretsManagerOutputReference(this, "sdk_key_aws_secrets_manager");
  public get sdkKeyAwsSecretsManager() {
    return this._sdkKeyAwsSecretsManager;
  }
  public putSdkKeyAwsSecretsManager(value: ActionConnectionConfigCatSdkKeySdkKeyAwsSecretsManager) {
    this._sdkKeyAwsSecretsManager.internalValue = value;
  }
  public resetSdkKeyAwsSecretsManager() {
    this._sdkKeyAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdkKeyAwsSecretsManagerInput() {
    return this._sdkKeyAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionConfigCat {
  /**
  * sdk_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#sdk_key ActionConnection#sdk_key}
  */
  readonly sdkKey?: ActionConnectionConfigCatSdkKey;
}

export function actionConnectionConfigCatToTerraform(struct?: ActionConnectionConfigCat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sdk_key: actionConnectionConfigCatSdkKeyToTerraform(struct!.sdkKey),
  }
}


export function actionConnectionConfigCatToHclTerraform(struct?: ActionConnectionConfigCat | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sdk_key: {
      value: actionConnectionConfigCatSdkKeyToHclTerraform(struct!.sdkKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionConfigCatSdkKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionConfigCatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionConfigCat | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sdkKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdkKey = this._sdkKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionConfigCat | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sdkKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sdkKey.internalValue = value.sdkKey;
    }
  }

  // sdk_key - computed: false, optional: true, required: false
  private _sdkKey = new ActionConnectionConfigCatSdkKeyOutputReference(this, "sdk_key");
  public get sdkKey() {
    return this._sdkKey;
  }
  public putSdkKey(value: ActionConnectionConfigCatSdkKey) {
    this._sdkKey.internalValue = value;
  }
  public resetSdkKey() {
    this._sdkKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdkKeyInput() {
    return this._sdkKey.internalValue;
  }
}
export interface ActionConnectionDatadogApiKeyApiKeyAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionDatadogApiKeyApiKeyAwsSecretsManagerToTerraform(struct?: ActionConnectionDatadogApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionDatadogApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct?: ActionConnectionDatadogApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionDatadogApiKeyApiKeyAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionDatadogApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionDatadogApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionDatadogApiKeyAppKeyAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionDatadogApiKeyAppKeyAwsSecretsManagerToTerraform(struct?: ActionConnectionDatadogApiKeyAppKeyAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionDatadogApiKeyAppKeyAwsSecretsManagerToHclTerraform(struct?: ActionConnectionDatadogApiKeyAppKeyAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionDatadogApiKeyAppKeyAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionDatadogApiKeyAppKeyAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionDatadogApiKeyAppKeyAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionDatadogApiKeyDatacenterAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionDatadogApiKeyDatacenterAwsSecretsManagerToTerraform(struct?: ActionConnectionDatadogApiKeyDatacenterAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionDatadogApiKeyDatacenterAwsSecretsManagerToHclTerraform(struct?: ActionConnectionDatadogApiKeyDatacenterAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionDatadogApiKeyDatacenterAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionDatadogApiKeyDatacenterAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionDatadogApiKeyDatacenterAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionDatadogApiKeySubdomainAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionDatadogApiKeySubdomainAwsSecretsManagerToTerraform(struct?: ActionConnectionDatadogApiKeySubdomainAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionDatadogApiKeySubdomainAwsSecretsManagerToHclTerraform(struct?: ActionConnectionDatadogApiKeySubdomainAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionDatadogApiKeySubdomainAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionDatadogApiKeySubdomainAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionDatadogApiKeySubdomainAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionDatadogApiKey {
  /**
  * Datadog API key. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key_aws_secrets_manager ActionConnection#api_key_aws_secrets_manager}
  */
  readonly apiKeyAwsSecretsManager?: ActionConnectionDatadogApiKeyApiKeyAwsSecretsManager;
  /**
  * Datadog application key. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#app_key ActionConnection#app_key}
  */
  readonly appKey?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#app_key_aws_secrets_manager ActionConnection#app_key_aws_secrets_manager}
  */
  readonly appKeyAwsSecretsManager?: ActionConnectionDatadogApiKeyAppKeyAwsSecretsManager;
  /**
  * Datadog site data center. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#datacenter ActionConnection#datacenter}
  */
  readonly datacenter?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#datacenter_aws_secrets_manager ActionConnection#datacenter_aws_secrets_manager}
  */
  readonly datacenterAwsSecretsManager?: ActionConnectionDatadogApiKeyDatacenterAwsSecretsManager;
  /**
  * Custom subdomain used for URLs generated with this connection. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#subdomain ActionConnection#subdomain}
  */
  readonly subdomain?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#subdomain_aws_secrets_manager ActionConnection#subdomain_aws_secrets_manager}
  */
  readonly subdomainAwsSecretsManager?: ActionConnectionDatadogApiKeySubdomainAwsSecretsManager;
}

export function actionConnectionDatadogApiKeyToTerraform(struct?: ActionConnectionDatadogApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    api_key_aws_secrets_manager: actionConnectionDatadogApiKeyApiKeyAwsSecretsManagerToTerraform(struct!.apiKeyAwsSecretsManager),
    app_key: cdktn.stringToTerraform(struct!.appKey),
    app_key_aws_secrets_manager: actionConnectionDatadogApiKeyAppKeyAwsSecretsManagerToTerraform(struct!.appKeyAwsSecretsManager),
    datacenter: cdktn.stringToTerraform(struct!.datacenter),
    datacenter_aws_secrets_manager: actionConnectionDatadogApiKeyDatacenterAwsSecretsManagerToTerraform(struct!.datacenterAwsSecretsManager),
    subdomain: cdktn.stringToTerraform(struct!.subdomain),
    subdomain_aws_secrets_manager: actionConnectionDatadogApiKeySubdomainAwsSecretsManagerToTerraform(struct!.subdomainAwsSecretsManager),
  }
}


export function actionConnectionDatadogApiKeyToHclTerraform(struct?: ActionConnectionDatadogApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_aws_secrets_manager: {
      value: actionConnectionDatadogApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct!.apiKeyAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionDatadogApiKeyApiKeyAwsSecretsManager",
    },
    app_key: {
      value: cdktn.stringToHclTerraform(struct!.appKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_key_aws_secrets_manager: {
      value: actionConnectionDatadogApiKeyAppKeyAwsSecretsManagerToHclTerraform(struct!.appKeyAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionDatadogApiKeyAppKeyAwsSecretsManager",
    },
    datacenter: {
      value: cdktn.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter_aws_secrets_manager: {
      value: actionConnectionDatadogApiKeyDatacenterAwsSecretsManagerToHclTerraform(struct!.datacenterAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionDatadogApiKeyDatacenterAwsSecretsManager",
    },
    subdomain: {
      value: cdktn.stringToHclTerraform(struct!.subdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdomain_aws_secrets_manager: {
      value: actionConnectionDatadogApiKeySubdomainAwsSecretsManagerToHclTerraform(struct!.subdomainAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionDatadogApiKeySubdomainAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionDatadogApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionDatadogApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiKeyAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAwsSecretsManager = this._apiKeyAwsSecretsManager?.internalValue;
    }
    if (this._appKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.appKey = this._appKey;
    }
    if (this._appKeyAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appKeyAwsSecretsManager = this._appKeyAwsSecretsManager?.internalValue;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._datacenterAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterAwsSecretsManager = this._datacenterAwsSecretsManager?.internalValue;
    }
    if (this._subdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdomain = this._subdomain;
    }
    if (this._subdomainAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdomainAwsSecretsManager = this._subdomainAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionDatadogApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiKeyAwsSecretsManager.internalValue = undefined;
      this._appKey = undefined;
      this._appKeyAwsSecretsManager.internalValue = undefined;
      this._datacenter = undefined;
      this._datacenterAwsSecretsManager.internalValue = undefined;
      this._subdomain = undefined;
      this._subdomainAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiKeyAwsSecretsManager.internalValue = value.apiKeyAwsSecretsManager;
      this._appKey = value.appKey;
      this._appKeyAwsSecretsManager.internalValue = value.appKeyAwsSecretsManager;
      this._datacenter = value.datacenter;
      this._datacenterAwsSecretsManager.internalValue = value.datacenterAwsSecretsManager;
      this._subdomain = value.subdomain;
      this._subdomainAwsSecretsManager.internalValue = value.subdomainAwsSecretsManager;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiKeyAwsSecretsManager = new ActionConnectionDatadogApiKeyApiKeyAwsSecretsManagerOutputReference(this, "api_key_aws_secrets_manager");
  public get apiKeyAwsSecretsManager() {
    return this._apiKeyAwsSecretsManager;
  }
  public putApiKeyAwsSecretsManager(value: ActionConnectionDatadogApiKeyApiKeyAwsSecretsManager) {
    this._apiKeyAwsSecretsManager.internalValue = value;
  }
  public resetApiKeyAwsSecretsManager() {
    this._apiKeyAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAwsSecretsManagerInput() {
    return this._apiKeyAwsSecretsManager.internalValue;
  }

  // app_key - computed: false, optional: true, required: false
  private _appKey?: string; 
  public get appKey() {
    return this.getStringAttribute('app_key');
  }
  public set appKey(value: string) {
    this._appKey = value;
  }
  public resetAppKey() {
    this._appKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appKeyInput() {
    return this._appKey;
  }

  // app_key_aws_secrets_manager - computed: false, optional: true, required: false
  private _appKeyAwsSecretsManager = new ActionConnectionDatadogApiKeyAppKeyAwsSecretsManagerOutputReference(this, "app_key_aws_secrets_manager");
  public get appKeyAwsSecretsManager() {
    return this._appKeyAwsSecretsManager;
  }
  public putAppKeyAwsSecretsManager(value: ActionConnectionDatadogApiKeyAppKeyAwsSecretsManager) {
    this._appKeyAwsSecretsManager.internalValue = value;
  }
  public resetAppKeyAwsSecretsManager() {
    this._appKeyAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appKeyAwsSecretsManagerInput() {
    return this._appKeyAwsSecretsManager.internalValue;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datacenter_aws_secrets_manager - computed: false, optional: true, required: false
  private _datacenterAwsSecretsManager = new ActionConnectionDatadogApiKeyDatacenterAwsSecretsManagerOutputReference(this, "datacenter_aws_secrets_manager");
  public get datacenterAwsSecretsManager() {
    return this._datacenterAwsSecretsManager;
  }
  public putDatacenterAwsSecretsManager(value: ActionConnectionDatadogApiKeyDatacenterAwsSecretsManager) {
    this._datacenterAwsSecretsManager.internalValue = value;
  }
  public resetDatacenterAwsSecretsManager() {
    this._datacenterAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterAwsSecretsManagerInput() {
    return this._datacenterAwsSecretsManager.internalValue;
  }

  // subdomain - computed: false, optional: true, required: false
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  public resetSubdomain() {
    this._subdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }

  // subdomain_aws_secrets_manager - computed: false, optional: true, required: false
  private _subdomainAwsSecretsManager = new ActionConnectionDatadogApiKeySubdomainAwsSecretsManagerOutputReference(this, "subdomain_aws_secrets_manager");
  public get subdomainAwsSecretsManager() {
    return this._subdomainAwsSecretsManager;
  }
  public putSubdomainAwsSecretsManager(value: ActionConnectionDatadogApiKeySubdomainAwsSecretsManager) {
    this._subdomainAwsSecretsManager.internalValue = value;
  }
  public resetSubdomainAwsSecretsManager() {
    this._subdomainAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainAwsSecretsManagerInput() {
    return this._subdomainAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionDatadog {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionDatadogApiKey;
}

export function actionConnectionDatadogToTerraform(struct?: ActionConnectionDatadog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionDatadogApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionDatadogToHclTerraform(struct?: ActionConnectionDatadog | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionDatadogApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionDatadogApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionDatadogOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionDatadog | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionDatadog | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionDatadogApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionDatadogApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ActionConnectionFastlyApiKeyApiKeyAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionFastlyApiKeyApiKeyAwsSecretsManagerToTerraform(struct?: ActionConnectionFastlyApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionFastlyApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct?: ActionConnectionFastlyApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionFastlyApiKeyApiKeyAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionFastlyApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionFastlyApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionFastlyApiKey {
  /**
  * Fastly API key. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key_aws_secrets_manager ActionConnection#api_key_aws_secrets_manager}
  */
  readonly apiKeyAwsSecretsManager?: ActionConnectionFastlyApiKeyApiKeyAwsSecretsManager;
}

export function actionConnectionFastlyApiKeyToTerraform(struct?: ActionConnectionFastlyApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    api_key_aws_secrets_manager: actionConnectionFastlyApiKeyApiKeyAwsSecretsManagerToTerraform(struct!.apiKeyAwsSecretsManager),
  }
}


export function actionConnectionFastlyApiKeyToHclTerraform(struct?: ActionConnectionFastlyApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_aws_secrets_manager: {
      value: actionConnectionFastlyApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct!.apiKeyAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionFastlyApiKeyApiKeyAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionFastlyApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionFastlyApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiKeyAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAwsSecretsManager = this._apiKeyAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionFastlyApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiKeyAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiKeyAwsSecretsManager.internalValue = value.apiKeyAwsSecretsManager;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiKeyAwsSecretsManager = new ActionConnectionFastlyApiKeyApiKeyAwsSecretsManagerOutputReference(this, "api_key_aws_secrets_manager");
  public get apiKeyAwsSecretsManager() {
    return this._apiKeyAwsSecretsManager;
  }
  public putApiKeyAwsSecretsManager(value: ActionConnectionFastlyApiKeyApiKeyAwsSecretsManager) {
    this._apiKeyAwsSecretsManager.internalValue = value;
  }
  public resetApiKeyAwsSecretsManager() {
    this._apiKeyAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAwsSecretsManagerInput() {
    return this._apiKeyAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionFastly {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionFastlyApiKey;
}

export function actionConnectionFastlyToTerraform(struct?: ActionConnectionFastly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionFastlyApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionFastlyToHclTerraform(struct?: ActionConnectionFastly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionFastlyApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionFastlyApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionFastlyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionFastly | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionFastly | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionFastlyApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionFastlyApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ActionConnectionFreshserviceApiKeyApiKeyAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionFreshserviceApiKeyApiKeyAwsSecretsManagerToTerraform(struct?: ActionConnectionFreshserviceApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionFreshserviceApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct?: ActionConnectionFreshserviceApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionFreshserviceApiKeyApiKeyAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionFreshserviceApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionFreshserviceApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionFreshserviceApiKeyDomainAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionFreshserviceApiKeyDomainAwsSecretsManagerToTerraform(struct?: ActionConnectionFreshserviceApiKeyDomainAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionFreshserviceApiKeyDomainAwsSecretsManagerToHclTerraform(struct?: ActionConnectionFreshserviceApiKeyDomainAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionFreshserviceApiKeyDomainAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionFreshserviceApiKeyDomainAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionFreshserviceApiKeyDomainAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionFreshserviceApiKey {
  /**
  * Freshservice API key. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key_aws_secrets_manager ActionConnection#api_key_aws_secrets_manager}
  */
  readonly apiKeyAwsSecretsManager?: ActionConnectionFreshserviceApiKeyApiKeyAwsSecretsManager;
  /**
  * Freshservice domain. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#domain ActionConnection#domain}
  */
  readonly domain?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#domain_aws_secrets_manager ActionConnection#domain_aws_secrets_manager}
  */
  readonly domainAwsSecretsManager?: ActionConnectionFreshserviceApiKeyDomainAwsSecretsManager;
}

export function actionConnectionFreshserviceApiKeyToTerraform(struct?: ActionConnectionFreshserviceApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    api_key_aws_secrets_manager: actionConnectionFreshserviceApiKeyApiKeyAwsSecretsManagerToTerraform(struct!.apiKeyAwsSecretsManager),
    domain: cdktn.stringToTerraform(struct!.domain),
    domain_aws_secrets_manager: actionConnectionFreshserviceApiKeyDomainAwsSecretsManagerToTerraform(struct!.domainAwsSecretsManager),
  }
}


export function actionConnectionFreshserviceApiKeyToHclTerraform(struct?: ActionConnectionFreshserviceApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_aws_secrets_manager: {
      value: actionConnectionFreshserviceApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct!.apiKeyAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionFreshserviceApiKeyApiKeyAwsSecretsManager",
    },
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_aws_secrets_manager: {
      value: actionConnectionFreshserviceApiKeyDomainAwsSecretsManagerToHclTerraform(struct!.domainAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionFreshserviceApiKeyDomainAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionFreshserviceApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionFreshserviceApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiKeyAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAwsSecretsManager = this._apiKeyAwsSecretsManager?.internalValue;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._domainAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainAwsSecretsManager = this._domainAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionFreshserviceApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiKeyAwsSecretsManager.internalValue = undefined;
      this._domain = undefined;
      this._domainAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiKeyAwsSecretsManager.internalValue = value.apiKeyAwsSecretsManager;
      this._domain = value.domain;
      this._domainAwsSecretsManager.internalValue = value.domainAwsSecretsManager;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiKeyAwsSecretsManager = new ActionConnectionFreshserviceApiKeyApiKeyAwsSecretsManagerOutputReference(this, "api_key_aws_secrets_manager");
  public get apiKeyAwsSecretsManager() {
    return this._apiKeyAwsSecretsManager;
  }
  public putApiKeyAwsSecretsManager(value: ActionConnectionFreshserviceApiKeyApiKeyAwsSecretsManager) {
    this._apiKeyAwsSecretsManager.internalValue = value;
  }
  public resetApiKeyAwsSecretsManager() {
    this._apiKeyAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAwsSecretsManagerInput() {
    return this._apiKeyAwsSecretsManager.internalValue;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_aws_secrets_manager - computed: false, optional: true, required: false
  private _domainAwsSecretsManager = new ActionConnectionFreshserviceApiKeyDomainAwsSecretsManagerOutputReference(this, "domain_aws_secrets_manager");
  public get domainAwsSecretsManager() {
    return this._domainAwsSecretsManager;
  }
  public putDomainAwsSecretsManager(value: ActionConnectionFreshserviceApiKeyDomainAwsSecretsManager) {
    this._domainAwsSecretsManager.internalValue = value;
  }
  public resetDomainAwsSecretsManager() {
    this._domainAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAwsSecretsManagerInput() {
    return this._domainAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionFreshservice {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionFreshserviceApiKey;
}

export function actionConnectionFreshserviceToTerraform(struct?: ActionConnectionFreshservice | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionFreshserviceApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionFreshserviceToHclTerraform(struct?: ActionConnectionFreshservice | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionFreshserviceApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionFreshserviceApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionFreshserviceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionFreshservice | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionFreshservice | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionFreshserviceApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionFreshserviceApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ActionConnectionGcpServiceAccountPrivateKeyAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionGcpServiceAccountPrivateKeyAwsSecretsManagerToTerraform(struct?: ActionConnectionGcpServiceAccountPrivateKeyAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionGcpServiceAccountPrivateKeyAwsSecretsManagerToHclTerraform(struct?: ActionConnectionGcpServiceAccountPrivateKeyAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionGcpServiceAccountPrivateKeyAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionGcpServiceAccountPrivateKeyAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionGcpServiceAccountPrivateKeyAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionGcpServiceAccountServiceAccountEmailAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionGcpServiceAccountServiceAccountEmailAwsSecretsManagerToTerraform(struct?: ActionConnectionGcpServiceAccountServiceAccountEmailAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionGcpServiceAccountServiceAccountEmailAwsSecretsManagerToHclTerraform(struct?: ActionConnectionGcpServiceAccountServiceAccountEmailAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionGcpServiceAccountServiceAccountEmailAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionGcpServiceAccountServiceAccountEmailAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionGcpServiceAccountServiceAccountEmailAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionGcpServiceAccount {
  /**
  * Google Cloud service account private key. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#private_key ActionConnection#private_key}
  */
  readonly privateKey?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#private_key_aws_secrets_manager ActionConnection#private_key_aws_secrets_manager}
  */
  readonly privateKeyAwsSecretsManager?: ActionConnectionGcpServiceAccountPrivateKeyAwsSecretsManager;
  /**
  * Google Cloud service account email. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#service_account_email ActionConnection#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#service_account_email_aws_secrets_manager ActionConnection#service_account_email_aws_secrets_manager}
  */
  readonly serviceAccountEmailAwsSecretsManager?: ActionConnectionGcpServiceAccountServiceAccountEmailAwsSecretsManager;
}

export function actionConnectionGcpServiceAccountToTerraform(struct?: ActionConnectionGcpServiceAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    private_key: cdktn.stringToTerraform(struct!.privateKey),
    private_key_aws_secrets_manager: actionConnectionGcpServiceAccountPrivateKeyAwsSecretsManagerToTerraform(struct!.privateKeyAwsSecretsManager),
    service_account_email: cdktn.stringToTerraform(struct!.serviceAccountEmail),
    service_account_email_aws_secrets_manager: actionConnectionGcpServiceAccountServiceAccountEmailAwsSecretsManagerToTerraform(struct!.serviceAccountEmailAwsSecretsManager),
  }
}


export function actionConnectionGcpServiceAccountToHclTerraform(struct?: ActionConnectionGcpServiceAccount | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_aws_secrets_manager: {
      value: actionConnectionGcpServiceAccountPrivateKeyAwsSecretsManagerToHclTerraform(struct!.privateKeyAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionGcpServiceAccountPrivateKeyAwsSecretsManager",
    },
    service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email_aws_secrets_manager: {
      value: actionConnectionGcpServiceAccountServiceAccountEmailAwsSecretsManagerToHclTerraform(struct!.serviceAccountEmailAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionGcpServiceAccountServiceAccountEmailAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionGcpServiceAccountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionGcpServiceAccount | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyAwsSecretsManager = this._privateKeyAwsSecretsManager?.internalValue;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._serviceAccountEmailAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmailAwsSecretsManager = this._serviceAccountEmailAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionGcpServiceAccount | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privateKey = undefined;
      this._privateKeyAwsSecretsManager.internalValue = undefined;
      this._serviceAccountEmail = undefined;
      this._serviceAccountEmailAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privateKey = value.privateKey;
      this._privateKeyAwsSecretsManager.internalValue = value.privateKeyAwsSecretsManager;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._serviceAccountEmailAwsSecretsManager.internalValue = value.serviceAccountEmailAwsSecretsManager;
    }
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_aws_secrets_manager - computed: false, optional: true, required: false
  private _privateKeyAwsSecretsManager = new ActionConnectionGcpServiceAccountPrivateKeyAwsSecretsManagerOutputReference(this, "private_key_aws_secrets_manager");
  public get privateKeyAwsSecretsManager() {
    return this._privateKeyAwsSecretsManager;
  }
  public putPrivateKeyAwsSecretsManager(value: ActionConnectionGcpServiceAccountPrivateKeyAwsSecretsManager) {
    this._privateKeyAwsSecretsManager.internalValue = value;
  }
  public resetPrivateKeyAwsSecretsManager() {
    this._privateKeyAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyAwsSecretsManagerInput() {
    return this._privateKeyAwsSecretsManager.internalValue;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // service_account_email_aws_secrets_manager - computed: false, optional: true, required: false
  private _serviceAccountEmailAwsSecretsManager = new ActionConnectionGcpServiceAccountServiceAccountEmailAwsSecretsManagerOutputReference(this, "service_account_email_aws_secrets_manager");
  public get serviceAccountEmailAwsSecretsManager() {
    return this._serviceAccountEmailAwsSecretsManager;
  }
  public putServiceAccountEmailAwsSecretsManager(value: ActionConnectionGcpServiceAccountServiceAccountEmailAwsSecretsManager) {
    this._serviceAccountEmailAwsSecretsManager.internalValue = value;
  }
  public resetServiceAccountEmailAwsSecretsManager() {
    this._serviceAccountEmailAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailAwsSecretsManagerInput() {
    return this._serviceAccountEmailAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionGcp {
  /**
  * service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#service_account ActionConnection#service_account}
  */
  readonly serviceAccount?: ActionConnectionGcpServiceAccount;
}

export function actionConnectionGcpToTerraform(struct?: ActionConnectionGcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    service_account: actionConnectionGcpServiceAccountToTerraform(struct!.serviceAccount),
  }
}


export function actionConnectionGcpToHclTerraform(struct?: ActionConnectionGcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    service_account: {
      value: actionConnectionGcpServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionGcpServiceAccount",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionGcpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionGcp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionGcp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccount.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccount.internalValue = value.serviceAccount;
    }
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new ActionConnectionGcpServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: ActionConnectionGcpServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }
}
export interface ActionConnectionGeminiApiKeyApiKeyAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionGeminiApiKeyApiKeyAwsSecretsManagerToTerraform(struct?: ActionConnectionGeminiApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionGeminiApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct?: ActionConnectionGeminiApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionGeminiApiKeyApiKeyAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionGeminiApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionGeminiApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionGeminiApiKey {
  /**
  * Gemini API key. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key_aws_secrets_manager ActionConnection#api_key_aws_secrets_manager}
  */
  readonly apiKeyAwsSecretsManager?: ActionConnectionGeminiApiKeyApiKeyAwsSecretsManager;
}

export function actionConnectionGeminiApiKeyToTerraform(struct?: ActionConnectionGeminiApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    api_key_aws_secrets_manager: actionConnectionGeminiApiKeyApiKeyAwsSecretsManagerToTerraform(struct!.apiKeyAwsSecretsManager),
  }
}


export function actionConnectionGeminiApiKeyToHclTerraform(struct?: ActionConnectionGeminiApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_aws_secrets_manager: {
      value: actionConnectionGeminiApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct!.apiKeyAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionGeminiApiKeyApiKeyAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionGeminiApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionGeminiApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiKeyAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAwsSecretsManager = this._apiKeyAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionGeminiApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiKeyAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiKeyAwsSecretsManager.internalValue = value.apiKeyAwsSecretsManager;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiKeyAwsSecretsManager = new ActionConnectionGeminiApiKeyApiKeyAwsSecretsManagerOutputReference(this, "api_key_aws_secrets_manager");
  public get apiKeyAwsSecretsManager() {
    return this._apiKeyAwsSecretsManager;
  }
  public putApiKeyAwsSecretsManager(value: ActionConnectionGeminiApiKeyApiKeyAwsSecretsManager) {
    this._apiKeyAwsSecretsManager.internalValue = value;
  }
  public resetApiKeyAwsSecretsManager() {
    this._apiKeyAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAwsSecretsManagerInput() {
    return this._apiKeyAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionGemini {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionGeminiApiKey;
}

export function actionConnectionGeminiToTerraform(struct?: ActionConnectionGemini | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionGeminiApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionGeminiToHclTerraform(struct?: ActionConnectionGemini | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionGeminiApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionGeminiApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionGeminiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionGemini | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionGemini | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionGeminiApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionGeminiApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ActionConnectionGitlabApiKeyApiTokenAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionGitlabApiKeyApiTokenAwsSecretsManagerToTerraform(struct?: ActionConnectionGitlabApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionGitlabApiKeyApiTokenAwsSecretsManagerToHclTerraform(struct?: ActionConnectionGitlabApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionGitlabApiKeyApiTokenAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionGitlabApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionGitlabApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionGitlabApiKey {
  /**
  * GitLab API token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token ActionConnection#api_token}
  */
  readonly apiToken?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token_aws_secrets_manager ActionConnection#api_token_aws_secrets_manager}
  */
  readonly apiTokenAwsSecretsManager?: ActionConnectionGitlabApiKeyApiTokenAwsSecretsManager;
}

export function actionConnectionGitlabApiKeyToTerraform(struct?: ActionConnectionGitlabApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token: cdktn.stringToTerraform(struct!.apiToken),
    api_token_aws_secrets_manager: actionConnectionGitlabApiKeyApiTokenAwsSecretsManagerToTerraform(struct!.apiTokenAwsSecretsManager),
  }
}


export function actionConnectionGitlabApiKeyToHclTerraform(struct?: ActionConnectionGitlabApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token: {
      value: cdktn.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token_aws_secrets_manager: {
      value: actionConnectionGitlabApiKeyApiTokenAwsSecretsManagerToHclTerraform(struct!.apiTokenAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionGitlabApiKeyApiTokenAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionGitlabApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionGitlabApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._apiTokenAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTokenAwsSecretsManager = this._apiTokenAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionGitlabApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._apiTokenAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._apiTokenAwsSecretsManager.internalValue = value.apiTokenAwsSecretsManager;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // api_token_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiTokenAwsSecretsManager = new ActionConnectionGitlabApiKeyApiTokenAwsSecretsManagerOutputReference(this, "api_token_aws_secrets_manager");
  public get apiTokenAwsSecretsManager() {
    return this._apiTokenAwsSecretsManager;
  }
  public putApiTokenAwsSecretsManager(value: ActionConnectionGitlabApiKeyApiTokenAwsSecretsManager) {
    this._apiTokenAwsSecretsManager.internalValue = value;
  }
  public resetApiTokenAwsSecretsManager() {
    this._apiTokenAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenAwsSecretsManagerInput() {
    return this._apiTokenAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionGitlab {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionGitlabApiKey;
}

export function actionConnectionGitlabToTerraform(struct?: ActionConnectionGitlab | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionGitlabApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionGitlabToHclTerraform(struct?: ActionConnectionGitlab | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionGitlabApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionGitlabApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionGitlabOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionGitlab | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionGitlab | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionGitlabApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionGitlabApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ActionConnectionGreyNoiseApiKeyApiKeyAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionGreyNoiseApiKeyApiKeyAwsSecretsManagerToTerraform(struct?: ActionConnectionGreyNoiseApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionGreyNoiseApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct?: ActionConnectionGreyNoiseApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionGreyNoiseApiKeyApiKeyAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionGreyNoiseApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionGreyNoiseApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionGreyNoiseApiKey {
  /**
  * GreyNoise API key. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key_aws_secrets_manager ActionConnection#api_key_aws_secrets_manager}
  */
  readonly apiKeyAwsSecretsManager?: ActionConnectionGreyNoiseApiKeyApiKeyAwsSecretsManager;
}

export function actionConnectionGreyNoiseApiKeyToTerraform(struct?: ActionConnectionGreyNoiseApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    api_key_aws_secrets_manager: actionConnectionGreyNoiseApiKeyApiKeyAwsSecretsManagerToTerraform(struct!.apiKeyAwsSecretsManager),
  }
}


export function actionConnectionGreyNoiseApiKeyToHclTerraform(struct?: ActionConnectionGreyNoiseApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_aws_secrets_manager: {
      value: actionConnectionGreyNoiseApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct!.apiKeyAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionGreyNoiseApiKeyApiKeyAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionGreyNoiseApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionGreyNoiseApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiKeyAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAwsSecretsManager = this._apiKeyAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionGreyNoiseApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiKeyAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiKeyAwsSecretsManager.internalValue = value.apiKeyAwsSecretsManager;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiKeyAwsSecretsManager = new ActionConnectionGreyNoiseApiKeyApiKeyAwsSecretsManagerOutputReference(this, "api_key_aws_secrets_manager");
  public get apiKeyAwsSecretsManager() {
    return this._apiKeyAwsSecretsManager;
  }
  public putApiKeyAwsSecretsManager(value: ActionConnectionGreyNoiseApiKeyApiKeyAwsSecretsManager) {
    this._apiKeyAwsSecretsManager.internalValue = value;
  }
  public resetApiKeyAwsSecretsManager() {
    this._apiKeyAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAwsSecretsManagerInput() {
    return this._apiKeyAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionGreyNoise {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionGreyNoiseApiKey;
}

export function actionConnectionGreyNoiseToTerraform(struct?: ActionConnectionGreyNoise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionGreyNoiseApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionGreyNoiseToHclTerraform(struct?: ActionConnectionGreyNoise | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionGreyNoiseApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionGreyNoiseApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionGreyNoiseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionGreyNoise | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionGreyNoise | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionGreyNoiseApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionGreyNoiseApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ActionConnectionHttpTokenAuthBody {
  /**
  * Serialized body content. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#content ActionConnection#content}
  */
  readonly content?: string;
  /**
  * Content type of the body. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#content_type ActionConnection#content_type}
  */
  readonly contentType?: string;
}

export function actionConnectionHttpTokenAuthBodyToTerraform(struct?: ActionConnectionHttpTokenAuthBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    content_type: cdktn.stringToTerraform(struct!.contentType),
  }
}


export function actionConnectionHttpTokenAuthBodyToHclTerraform(struct?: ActionConnectionHttpTokenAuthBody | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktn.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionHttpTokenAuthBodyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionHttpTokenAuthBody | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionHttpTokenAuthBody | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._contentType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._contentType = value.contentType;
    }
  }

  // content - computed: false, optional: true, required: false
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

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }
}
export interface ActionConnectionHttpTokenAuthHeader {
  /**
  * Header name. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#name ActionConnection#name}
  */
  readonly name?: string;
  /**
  *  String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#value ActionConnection#value}
  */
  readonly value?: string;
}

export function actionConnectionHttpTokenAuthHeaderToTerraform(struct?: ActionConnectionHttpTokenAuthHeader | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function actionConnectionHttpTokenAuthHeaderToHclTerraform(struct?: ActionConnectionHttpTokenAuthHeader | cdktn.IResolvable): any {
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

export class ActionConnectionHttpTokenAuthHeaderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ActionConnectionHttpTokenAuthHeader | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ActionConnectionHttpTokenAuthHeader | cdktn.IResolvable | undefined) {
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

export class ActionConnectionHttpTokenAuthHeaderList extends cdktn.ComplexList {
  public internalValue? : ActionConnectionHttpTokenAuthHeader[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ActionConnectionHttpTokenAuthHeaderOutputReference {
    return new ActionConnectionHttpTokenAuthHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionConnectionHttpTokenAuthTokenValueAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionHttpTokenAuthTokenValueAwsSecretsManagerToTerraform(struct?: ActionConnectionHttpTokenAuthTokenValueAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionHttpTokenAuthTokenValueAwsSecretsManagerToHclTerraform(struct?: ActionConnectionHttpTokenAuthTokenValueAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionHttpTokenAuthTokenValueAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionHttpTokenAuthTokenValueAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionHttpTokenAuthTokenValueAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionHttpTokenAuthToken {
  /**
  * Token name. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#name ActionConnection#name}
  */
  readonly name?: string;
  /**
  * Token type Valid values are `SECRET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#type ActionConnection#type}
  */
  readonly type?: string;
  /**
  * Token value. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#value ActionConnection#value}
  */
  readonly value?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#value_aws_secrets_manager ActionConnection#value_aws_secrets_manager}
  */
  readonly valueAwsSecretsManager?: ActionConnectionHttpTokenAuthTokenValueAwsSecretsManager;
}

export function actionConnectionHttpTokenAuthTokenToTerraform(struct?: ActionConnectionHttpTokenAuthToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
    value_aws_secrets_manager: actionConnectionHttpTokenAuthTokenValueAwsSecretsManagerToTerraform(struct!.valueAwsSecretsManager),
  }
}


export function actionConnectionHttpTokenAuthTokenToHclTerraform(struct?: ActionConnectionHttpTokenAuthToken | cdktn.IResolvable): any {
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
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
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
    value_aws_secrets_manager: {
      value: actionConnectionHttpTokenAuthTokenValueAwsSecretsManagerToHclTerraform(struct!.valueAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionHttpTokenAuthTokenValueAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionHttpTokenAuthTokenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ActionConnectionHttpTokenAuthToken | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueAwsSecretsManager = this._valueAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionHttpTokenAuthToken | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
      this._valueAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
      this._valueAwsSecretsManager.internalValue = value.valueAwsSecretsManager;
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

  // type - computed: false, optional: true, required: false
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

  // value_aws_secrets_manager - computed: false, optional: true, required: false
  private _valueAwsSecretsManager = new ActionConnectionHttpTokenAuthTokenValueAwsSecretsManagerOutputReference(this, "value_aws_secrets_manager");
  public get valueAwsSecretsManager() {
    return this._valueAwsSecretsManager;
  }
  public putValueAwsSecretsManager(value: ActionConnectionHttpTokenAuthTokenValueAwsSecretsManager) {
    this._valueAwsSecretsManager.internalValue = value;
  }
  public resetValueAwsSecretsManager() {
    this._valueAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueAwsSecretsManagerInput() {
    return this._valueAwsSecretsManager.internalValue;
  }
}

export class ActionConnectionHttpTokenAuthTokenList extends cdktn.ComplexList {
  public internalValue? : ActionConnectionHttpTokenAuthToken[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ActionConnectionHttpTokenAuthTokenOutputReference {
    return new ActionConnectionHttpTokenAuthTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionConnectionHttpTokenAuthUrlParameter {
  /**
  * URL parameter name. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#name ActionConnection#name}
  */
  readonly name?: string;
  /**
  * URL parameter value. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#value ActionConnection#value}
  */
  readonly value?: string;
}

export function actionConnectionHttpTokenAuthUrlParameterToTerraform(struct?: ActionConnectionHttpTokenAuthUrlParameter | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function actionConnectionHttpTokenAuthUrlParameterToHclTerraform(struct?: ActionConnectionHttpTokenAuthUrlParameter | cdktn.IResolvable): any {
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

export class ActionConnectionHttpTokenAuthUrlParameterOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ActionConnectionHttpTokenAuthUrlParameter | cdktn.IResolvable | undefined {
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

  public set internalValue(value: ActionConnectionHttpTokenAuthUrlParameter | cdktn.IResolvable | undefined) {
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

export class ActionConnectionHttpTokenAuthUrlParameterList extends cdktn.ComplexList {
  public internalValue? : ActionConnectionHttpTokenAuthUrlParameter[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ActionConnectionHttpTokenAuthUrlParameterOutputReference {
    return new ActionConnectionHttpTokenAuthUrlParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ActionConnectionHttpTokenAuth {
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#body ActionConnection#body}
  */
  readonly body?: ActionConnectionHttpTokenAuthBody;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#header ActionConnection#header}
  */
  readonly header?: ActionConnectionHttpTokenAuthHeader[] | cdktn.IResolvable;
  /**
  * token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#token ActionConnection#token}
  */
  readonly token?: ActionConnectionHttpTokenAuthToken[] | cdktn.IResolvable;
  /**
  * url_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#url_parameter ActionConnection#url_parameter}
  */
  readonly urlParameter?: ActionConnectionHttpTokenAuthUrlParameter[] | cdktn.IResolvable;
}

export function actionConnectionHttpTokenAuthToTerraform(struct?: ActionConnectionHttpTokenAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    body: actionConnectionHttpTokenAuthBodyToTerraform(struct!.body),
    header: cdktn.listMapper(actionConnectionHttpTokenAuthHeaderToTerraform, true)(struct!.header),
    token: cdktn.listMapper(actionConnectionHttpTokenAuthTokenToTerraform, true)(struct!.token),
    url_parameter: cdktn.listMapper(actionConnectionHttpTokenAuthUrlParameterToTerraform, true)(struct!.urlParameter),
  }
}


export function actionConnectionHttpTokenAuthToHclTerraform(struct?: ActionConnectionHttpTokenAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    body: {
      value: actionConnectionHttpTokenAuthBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionHttpTokenAuthBody",
    },
    header: {
      value: cdktn.listMapperHcl(actionConnectionHttpTokenAuthHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ActionConnectionHttpTokenAuthHeaderList",
    },
    token: {
      value: cdktn.listMapperHcl(actionConnectionHttpTokenAuthTokenToHclTerraform, true)(struct!.token),
      isBlock: true,
      type: "list",
      storageClassType: "ActionConnectionHttpTokenAuthTokenList",
    },
    url_parameter: {
      value: cdktn.listMapperHcl(actionConnectionHttpTokenAuthUrlParameterToHclTerraform, true)(struct!.urlParameter),
      isBlock: true,
      type: "list",
      storageClassType: "ActionConnectionHttpTokenAuthUrlParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionHttpTokenAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionHttpTokenAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._token?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token?.internalValue;
    }
    if (this._urlParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlParameter = this._urlParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionHttpTokenAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body.internalValue = undefined;
      this._header.internalValue = undefined;
      this._token.internalValue = undefined;
      this._urlParameter.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body.internalValue = value.body;
      this._header.internalValue = value.header;
      this._token.internalValue = value.token;
      this._urlParameter.internalValue = value.urlParameter;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body = new ActionConnectionHttpTokenAuthBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: ActionConnectionHttpTokenAuthBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ActionConnectionHttpTokenAuthHeaderList(this, "header", false);
  public get header() {
    return this._header;
  }
  public putHeader(value: ActionConnectionHttpTokenAuthHeader[] | cdktn.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // token - computed: false, optional: true, required: false
  private _token = new ActionConnectionHttpTokenAuthTokenList(this, "token", false);
  public get token() {
    return this._token;
  }
  public putToken(value: ActionConnectionHttpTokenAuthToken[] | cdktn.IResolvable) {
    this._token.internalValue = value;
  }
  public resetToken() {
    this._token.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token.internalValue;
  }

  // url_parameter - computed: false, optional: true, required: false
  private _urlParameter = new ActionConnectionHttpTokenAuthUrlParameterList(this, "url_parameter", false);
  public get urlParameter() {
    return this._urlParameter;
  }
  public putUrlParameter(value: ActionConnectionHttpTokenAuthUrlParameter[] | cdktn.IResolvable) {
    this._urlParameter.internalValue = value;
  }
  public resetUrlParameter() {
    this._urlParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlParameterInput() {
    return this._urlParameter.internalValue;
  }
}
export interface ActionConnectionHttp {
  /**
  * Base HTTP url for the integration. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#base_url ActionConnection#base_url}
  */
  readonly baseUrl?: string;
  /**
  * token_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#token_auth ActionConnection#token_auth}
  */
  readonly tokenAuth?: ActionConnectionHttpTokenAuth;
}

export function actionConnectionHttpToTerraform(struct?: ActionConnectionHttp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    base_url: cdktn.stringToTerraform(struct!.baseUrl),
    token_auth: actionConnectionHttpTokenAuthToTerraform(struct!.tokenAuth),
  }
}


export function actionConnectionHttpToHclTerraform(struct?: ActionConnectionHttp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    base_url: {
      value: cdktn.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_auth: {
      value: actionConnectionHttpTokenAuthToHclTerraform(struct!.tokenAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionHttpTokenAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionHttpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionHttp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._tokenAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuth = this._tokenAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionHttp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
      this._tokenAuth.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
      this._tokenAuth.internalValue = value.tokenAuth;
    }
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // token_auth - computed: false, optional: true, required: false
  private _tokenAuth = new ActionConnectionHttpTokenAuthOutputReference(this, "token_auth");
  public get tokenAuth() {
    return this._tokenAuth;
  }
  public putTokenAuth(value: ActionConnectionHttpTokenAuth) {
    this._tokenAuth.internalValue = value;
  }
  public resetTokenAuth() {
    this._tokenAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthInput() {
    return this._tokenAuth.internalValue;
  }
}
export interface ActionConnectionLaunchDarklyApiKeyApiTokenAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionLaunchDarklyApiKeyApiTokenAwsSecretsManagerToTerraform(struct?: ActionConnectionLaunchDarklyApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionLaunchDarklyApiKeyApiTokenAwsSecretsManagerToHclTerraform(struct?: ActionConnectionLaunchDarklyApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionLaunchDarklyApiKeyApiTokenAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionLaunchDarklyApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionLaunchDarklyApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionLaunchDarklyApiKey {
  /**
  * LaunchDarkly API token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token ActionConnection#api_token}
  */
  readonly apiToken?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token_aws_secrets_manager ActionConnection#api_token_aws_secrets_manager}
  */
  readonly apiTokenAwsSecretsManager?: ActionConnectionLaunchDarklyApiKeyApiTokenAwsSecretsManager;
}

export function actionConnectionLaunchDarklyApiKeyToTerraform(struct?: ActionConnectionLaunchDarklyApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token: cdktn.stringToTerraform(struct!.apiToken),
    api_token_aws_secrets_manager: actionConnectionLaunchDarklyApiKeyApiTokenAwsSecretsManagerToTerraform(struct!.apiTokenAwsSecretsManager),
  }
}


export function actionConnectionLaunchDarklyApiKeyToHclTerraform(struct?: ActionConnectionLaunchDarklyApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token: {
      value: cdktn.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token_aws_secrets_manager: {
      value: actionConnectionLaunchDarklyApiKeyApiTokenAwsSecretsManagerToHclTerraform(struct!.apiTokenAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionLaunchDarklyApiKeyApiTokenAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionLaunchDarklyApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionLaunchDarklyApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._apiTokenAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTokenAwsSecretsManager = this._apiTokenAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionLaunchDarklyApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._apiTokenAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._apiTokenAwsSecretsManager.internalValue = value.apiTokenAwsSecretsManager;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // api_token_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiTokenAwsSecretsManager = new ActionConnectionLaunchDarklyApiKeyApiTokenAwsSecretsManagerOutputReference(this, "api_token_aws_secrets_manager");
  public get apiTokenAwsSecretsManager() {
    return this._apiTokenAwsSecretsManager;
  }
  public putApiTokenAwsSecretsManager(value: ActionConnectionLaunchDarklyApiKeyApiTokenAwsSecretsManager) {
    this._apiTokenAwsSecretsManager.internalValue = value;
  }
  public resetApiTokenAwsSecretsManager() {
    this._apiTokenAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenAwsSecretsManagerInput() {
    return this._apiTokenAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionLaunchDarkly {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionLaunchDarklyApiKey;
}

export function actionConnectionLaunchDarklyToTerraform(struct?: ActionConnectionLaunchDarkly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionLaunchDarklyApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionLaunchDarklyToHclTerraform(struct?: ActionConnectionLaunchDarkly | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionLaunchDarklyApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionLaunchDarklyApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionLaunchDarklyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionLaunchDarkly | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionLaunchDarkly | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionLaunchDarklyApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionLaunchDarklyApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ActionConnectionNotionApiKeyApiTokenAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionNotionApiKeyApiTokenAwsSecretsManagerToTerraform(struct?: ActionConnectionNotionApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionNotionApiKeyApiTokenAwsSecretsManagerToHclTerraform(struct?: ActionConnectionNotionApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionNotionApiKeyApiTokenAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionNotionApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionNotionApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionNotionApiKey {
  /**
  * Notion API token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token ActionConnection#api_token}
  */
  readonly apiToken?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token_aws_secrets_manager ActionConnection#api_token_aws_secrets_manager}
  */
  readonly apiTokenAwsSecretsManager?: ActionConnectionNotionApiKeyApiTokenAwsSecretsManager;
}

export function actionConnectionNotionApiKeyToTerraform(struct?: ActionConnectionNotionApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token: cdktn.stringToTerraform(struct!.apiToken),
    api_token_aws_secrets_manager: actionConnectionNotionApiKeyApiTokenAwsSecretsManagerToTerraform(struct!.apiTokenAwsSecretsManager),
  }
}


export function actionConnectionNotionApiKeyToHclTerraform(struct?: ActionConnectionNotionApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token: {
      value: cdktn.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token_aws_secrets_manager: {
      value: actionConnectionNotionApiKeyApiTokenAwsSecretsManagerToHclTerraform(struct!.apiTokenAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionNotionApiKeyApiTokenAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionNotionApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionNotionApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._apiTokenAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTokenAwsSecretsManager = this._apiTokenAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionNotionApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._apiTokenAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._apiTokenAwsSecretsManager.internalValue = value.apiTokenAwsSecretsManager;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // api_token_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiTokenAwsSecretsManager = new ActionConnectionNotionApiKeyApiTokenAwsSecretsManagerOutputReference(this, "api_token_aws_secrets_manager");
  public get apiTokenAwsSecretsManager() {
    return this._apiTokenAwsSecretsManager;
  }
  public putApiTokenAwsSecretsManager(value: ActionConnectionNotionApiKeyApiTokenAwsSecretsManager) {
    this._apiTokenAwsSecretsManager.internalValue = value;
  }
  public resetApiTokenAwsSecretsManager() {
    this._apiTokenAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenAwsSecretsManagerInput() {
    return this._apiTokenAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionNotion {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionNotionApiKey;
}

export function actionConnectionNotionToTerraform(struct?: ActionConnectionNotion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionNotionApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionNotionToHclTerraform(struct?: ActionConnectionNotion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionNotionApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionNotionApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionNotionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionNotion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionNotion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionNotionApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionNotionApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ActionConnectionOktaApiTokenApiTokenAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionOktaApiTokenApiTokenAwsSecretsManagerToTerraform(struct?: ActionConnectionOktaApiTokenApiTokenAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionOktaApiTokenApiTokenAwsSecretsManagerToHclTerraform(struct?: ActionConnectionOktaApiTokenApiTokenAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionOktaApiTokenApiTokenAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionOktaApiTokenApiTokenAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionOktaApiTokenApiTokenAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionOktaApiTokenDomainAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionOktaApiTokenDomainAwsSecretsManagerToTerraform(struct?: ActionConnectionOktaApiTokenDomainAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionOktaApiTokenDomainAwsSecretsManagerToHclTerraform(struct?: ActionConnectionOktaApiTokenDomainAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionOktaApiTokenDomainAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionOktaApiTokenDomainAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionOktaApiTokenDomainAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionOktaApiToken {
  /**
  * Okta API token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token ActionConnection#api_token}
  */
  readonly apiToken?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token_aws_secrets_manager ActionConnection#api_token_aws_secrets_manager}
  */
  readonly apiTokenAwsSecretsManager?: ActionConnectionOktaApiTokenApiTokenAwsSecretsManager;
  /**
  * Okta domain. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#domain ActionConnection#domain}
  */
  readonly domain?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#domain_aws_secrets_manager ActionConnection#domain_aws_secrets_manager}
  */
  readonly domainAwsSecretsManager?: ActionConnectionOktaApiTokenDomainAwsSecretsManager;
}

export function actionConnectionOktaApiTokenToTerraform(struct?: ActionConnectionOktaApiToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token: cdktn.stringToTerraform(struct!.apiToken),
    api_token_aws_secrets_manager: actionConnectionOktaApiTokenApiTokenAwsSecretsManagerToTerraform(struct!.apiTokenAwsSecretsManager),
    domain: cdktn.stringToTerraform(struct!.domain),
    domain_aws_secrets_manager: actionConnectionOktaApiTokenDomainAwsSecretsManagerToTerraform(struct!.domainAwsSecretsManager),
  }
}


export function actionConnectionOktaApiTokenToHclTerraform(struct?: ActionConnectionOktaApiToken | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token: {
      value: cdktn.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token_aws_secrets_manager: {
      value: actionConnectionOktaApiTokenApiTokenAwsSecretsManagerToHclTerraform(struct!.apiTokenAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionOktaApiTokenApiTokenAwsSecretsManager",
    },
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_aws_secrets_manager: {
      value: actionConnectionOktaApiTokenDomainAwsSecretsManagerToHclTerraform(struct!.domainAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionOktaApiTokenDomainAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionOktaApiTokenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionOktaApiToken | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._apiTokenAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTokenAwsSecretsManager = this._apiTokenAwsSecretsManager?.internalValue;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._domainAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainAwsSecretsManager = this._domainAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionOktaApiToken | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._apiTokenAwsSecretsManager.internalValue = undefined;
      this._domain = undefined;
      this._domainAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._apiTokenAwsSecretsManager.internalValue = value.apiTokenAwsSecretsManager;
      this._domain = value.domain;
      this._domainAwsSecretsManager.internalValue = value.domainAwsSecretsManager;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // api_token_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiTokenAwsSecretsManager = new ActionConnectionOktaApiTokenApiTokenAwsSecretsManagerOutputReference(this, "api_token_aws_secrets_manager");
  public get apiTokenAwsSecretsManager() {
    return this._apiTokenAwsSecretsManager;
  }
  public putApiTokenAwsSecretsManager(value: ActionConnectionOktaApiTokenApiTokenAwsSecretsManager) {
    this._apiTokenAwsSecretsManager.internalValue = value;
  }
  public resetApiTokenAwsSecretsManager() {
    this._apiTokenAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenAwsSecretsManagerInput() {
    return this._apiTokenAwsSecretsManager.internalValue;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_aws_secrets_manager - computed: false, optional: true, required: false
  private _domainAwsSecretsManager = new ActionConnectionOktaApiTokenDomainAwsSecretsManagerOutputReference(this, "domain_aws_secrets_manager");
  public get domainAwsSecretsManager() {
    return this._domainAwsSecretsManager;
  }
  public putDomainAwsSecretsManager(value: ActionConnectionOktaApiTokenDomainAwsSecretsManager) {
    this._domainAwsSecretsManager.internalValue = value;
  }
  public resetDomainAwsSecretsManager() {
    this._domainAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAwsSecretsManagerInput() {
    return this._domainAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionOkta {
  /**
  * api_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token ActionConnection#api_token}
  */
  readonly apiToken?: ActionConnectionOktaApiToken;
}

export function actionConnectionOktaToTerraform(struct?: ActionConnectionOkta | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token: actionConnectionOktaApiTokenToTerraform(struct!.apiToken),
  }
}


export function actionConnectionOktaToHclTerraform(struct?: ActionConnectionOkta | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token: {
      value: actionConnectionOktaApiTokenToHclTerraform(struct!.apiToken),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionOktaApiToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionOktaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionOkta | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionOkta | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken.internalValue = value.apiToken;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken = new ActionConnectionOktaApiTokenOutputReference(this, "api_token");
  public get apiToken() {
    return this._apiToken;
  }
  public putApiToken(value: ActionConnectionOktaApiToken) {
    this._apiToken.internalValue = value;
  }
  public resetApiToken() {
    this._apiToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken.internalValue;
  }
}
export interface ActionConnectionOpenaiApiKeyApiTokenAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionOpenaiApiKeyApiTokenAwsSecretsManagerToTerraform(struct?: ActionConnectionOpenaiApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionOpenaiApiKeyApiTokenAwsSecretsManagerToHclTerraform(struct?: ActionConnectionOpenaiApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionOpenaiApiKeyApiTokenAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionOpenaiApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionOpenaiApiKeyApiTokenAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionOpenaiApiKey {
  /**
  * OpenAI API token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token ActionConnection#api_token}
  */
  readonly apiToken?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_token_aws_secrets_manager ActionConnection#api_token_aws_secrets_manager}
  */
  readonly apiTokenAwsSecretsManager?: ActionConnectionOpenaiApiKeyApiTokenAwsSecretsManager;
}

export function actionConnectionOpenaiApiKeyToTerraform(struct?: ActionConnectionOpenaiApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_token: cdktn.stringToTerraform(struct!.apiToken),
    api_token_aws_secrets_manager: actionConnectionOpenaiApiKeyApiTokenAwsSecretsManagerToTerraform(struct!.apiTokenAwsSecretsManager),
  }
}


export function actionConnectionOpenaiApiKeyToHclTerraform(struct?: ActionConnectionOpenaiApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_token: {
      value: cdktn.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token_aws_secrets_manager: {
      value: actionConnectionOpenaiApiKeyApiTokenAwsSecretsManagerToHclTerraform(struct!.apiTokenAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionOpenaiApiKeyApiTokenAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionOpenaiApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionOpenaiApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._apiTokenAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTokenAwsSecretsManager = this._apiTokenAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionOpenaiApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._apiTokenAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._apiTokenAwsSecretsManager.internalValue = value.apiTokenAwsSecretsManager;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // api_token_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiTokenAwsSecretsManager = new ActionConnectionOpenaiApiKeyApiTokenAwsSecretsManagerOutputReference(this, "api_token_aws_secrets_manager");
  public get apiTokenAwsSecretsManager() {
    return this._apiTokenAwsSecretsManager;
  }
  public putApiTokenAwsSecretsManager(value: ActionConnectionOpenaiApiKeyApiTokenAwsSecretsManager) {
    this._apiTokenAwsSecretsManager.internalValue = value;
  }
  public resetApiTokenAwsSecretsManager() {
    this._apiTokenAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenAwsSecretsManagerInput() {
    return this._apiTokenAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionOpenai {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionOpenaiApiKey;
}

export function actionConnectionOpenaiToTerraform(struct?: ActionConnectionOpenai | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionOpenaiApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionOpenaiToHclTerraform(struct?: ActionConnectionOpenai | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionOpenaiApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionOpenaiApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionOpenaiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionOpenai | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionOpenai | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionOpenaiApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionOpenaiApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ActionConnectionServiceNowBasicAuthInstanceAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionServiceNowBasicAuthInstanceAwsSecretsManagerToTerraform(struct?: ActionConnectionServiceNowBasicAuthInstanceAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionServiceNowBasicAuthInstanceAwsSecretsManagerToHclTerraform(struct?: ActionConnectionServiceNowBasicAuthInstanceAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionServiceNowBasicAuthInstanceAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionServiceNowBasicAuthInstanceAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionServiceNowBasicAuthInstanceAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionServiceNowBasicAuthPasswordAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionServiceNowBasicAuthPasswordAwsSecretsManagerToTerraform(struct?: ActionConnectionServiceNowBasicAuthPasswordAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionServiceNowBasicAuthPasswordAwsSecretsManagerToHclTerraform(struct?: ActionConnectionServiceNowBasicAuthPasswordAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionServiceNowBasicAuthPasswordAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionServiceNowBasicAuthPasswordAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionServiceNowBasicAuthPasswordAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionServiceNowBasicAuthUsernameAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionServiceNowBasicAuthUsernameAwsSecretsManagerToTerraform(struct?: ActionConnectionServiceNowBasicAuthUsernameAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionServiceNowBasicAuthUsernameAwsSecretsManagerToHclTerraform(struct?: ActionConnectionServiceNowBasicAuthUsernameAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionServiceNowBasicAuthUsernameAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionServiceNowBasicAuthUsernameAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionServiceNowBasicAuthUsernameAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionServiceNowBasicAuth {
  /**
  * ServiceNow instance. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#instance ActionConnection#instance}
  */
  readonly instance?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#instance_aws_secrets_manager ActionConnection#instance_aws_secrets_manager}
  */
  readonly instanceAwsSecretsManager?: ActionConnectionServiceNowBasicAuthInstanceAwsSecretsManager;
  /**
  * ServiceNow password. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#password ActionConnection#password}
  */
  readonly password?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#password_aws_secrets_manager ActionConnection#password_aws_secrets_manager}
  */
  readonly passwordAwsSecretsManager?: ActionConnectionServiceNowBasicAuthPasswordAwsSecretsManager;
  /**
  * ServiceNow username. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#username ActionConnection#username}
  */
  readonly username?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#username_aws_secrets_manager ActionConnection#username_aws_secrets_manager}
  */
  readonly usernameAwsSecretsManager?: ActionConnectionServiceNowBasicAuthUsernameAwsSecretsManager;
}

export function actionConnectionServiceNowBasicAuthToTerraform(struct?: ActionConnectionServiceNowBasicAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    instance: cdktn.stringToTerraform(struct!.instance),
    instance_aws_secrets_manager: actionConnectionServiceNowBasicAuthInstanceAwsSecretsManagerToTerraform(struct!.instanceAwsSecretsManager),
    password: cdktn.stringToTerraform(struct!.password),
    password_aws_secrets_manager: actionConnectionServiceNowBasicAuthPasswordAwsSecretsManagerToTerraform(struct!.passwordAwsSecretsManager),
    username: cdktn.stringToTerraform(struct!.username),
    username_aws_secrets_manager: actionConnectionServiceNowBasicAuthUsernameAwsSecretsManagerToTerraform(struct!.usernameAwsSecretsManager),
  }
}


export function actionConnectionServiceNowBasicAuthToHclTerraform(struct?: ActionConnectionServiceNowBasicAuth | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    instance: {
      value: cdktn.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_aws_secrets_manager: {
      value: actionConnectionServiceNowBasicAuthInstanceAwsSecretsManagerToHclTerraform(struct!.instanceAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionServiceNowBasicAuthInstanceAwsSecretsManager",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_aws_secrets_manager: {
      value: actionConnectionServiceNowBasicAuthPasswordAwsSecretsManagerToHclTerraform(struct!.passwordAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionServiceNowBasicAuthPasswordAwsSecretsManager",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_aws_secrets_manager: {
      value: actionConnectionServiceNowBasicAuthUsernameAwsSecretsManagerToHclTerraform(struct!.usernameAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionServiceNowBasicAuthUsernameAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionServiceNowBasicAuthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionServiceNowBasicAuth | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._instanceAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceAwsSecretsManager = this._instanceAwsSecretsManager?.internalValue;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordAwsSecretsManager = this._passwordAwsSecretsManager?.internalValue;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameAwsSecretsManager = this._usernameAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionServiceNowBasicAuth | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instance = undefined;
      this._instanceAwsSecretsManager.internalValue = undefined;
      this._password = undefined;
      this._passwordAwsSecretsManager.internalValue = undefined;
      this._username = undefined;
      this._usernameAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instance = value.instance;
      this._instanceAwsSecretsManager.internalValue = value.instanceAwsSecretsManager;
      this._password = value.password;
      this._passwordAwsSecretsManager.internalValue = value.passwordAwsSecretsManager;
      this._username = value.username;
      this._usernameAwsSecretsManager.internalValue = value.usernameAwsSecretsManager;
    }
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // instance_aws_secrets_manager - computed: false, optional: true, required: false
  private _instanceAwsSecretsManager = new ActionConnectionServiceNowBasicAuthInstanceAwsSecretsManagerOutputReference(this, "instance_aws_secrets_manager");
  public get instanceAwsSecretsManager() {
    return this._instanceAwsSecretsManager;
  }
  public putInstanceAwsSecretsManager(value: ActionConnectionServiceNowBasicAuthInstanceAwsSecretsManager) {
    this._instanceAwsSecretsManager.internalValue = value;
  }
  public resetInstanceAwsSecretsManager() {
    this._instanceAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAwsSecretsManagerInput() {
    return this._instanceAwsSecretsManager.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_aws_secrets_manager - computed: false, optional: true, required: false
  private _passwordAwsSecretsManager = new ActionConnectionServiceNowBasicAuthPasswordAwsSecretsManagerOutputReference(this, "password_aws_secrets_manager");
  public get passwordAwsSecretsManager() {
    return this._passwordAwsSecretsManager;
  }
  public putPasswordAwsSecretsManager(value: ActionConnectionServiceNowBasicAuthPasswordAwsSecretsManager) {
    this._passwordAwsSecretsManager.internalValue = value;
  }
  public resetPasswordAwsSecretsManager() {
    this._passwordAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAwsSecretsManagerInput() {
    return this._passwordAwsSecretsManager.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // username_aws_secrets_manager - computed: false, optional: true, required: false
  private _usernameAwsSecretsManager = new ActionConnectionServiceNowBasicAuthUsernameAwsSecretsManagerOutputReference(this, "username_aws_secrets_manager");
  public get usernameAwsSecretsManager() {
    return this._usernameAwsSecretsManager;
  }
  public putUsernameAwsSecretsManager(value: ActionConnectionServiceNowBasicAuthUsernameAwsSecretsManager) {
    this._usernameAwsSecretsManager.internalValue = value;
  }
  public resetUsernameAwsSecretsManager() {
    this._usernameAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAwsSecretsManagerInput() {
    return this._usernameAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionServiceNow {
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#basic_auth ActionConnection#basic_auth}
  */
  readonly basicAuth?: ActionConnectionServiceNowBasicAuth;
}

export function actionConnectionServiceNowToTerraform(struct?: ActionConnectionServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    basic_auth: actionConnectionServiceNowBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function actionConnectionServiceNowToHclTerraform(struct?: ActionConnectionServiceNow | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    basic_auth: {
      value: actionConnectionServiceNowBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionServiceNowBasicAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionServiceNowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionServiceNow | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionServiceNow | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new ActionConnectionServiceNowBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: ActionConnectionServiceNowBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}
export interface ActionConnectionSplitApiKeyApiKeyAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionSplitApiKeyApiKeyAwsSecretsManagerToTerraform(struct?: ActionConnectionSplitApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionSplitApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct?: ActionConnectionSplitApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionSplitApiKeyApiKeyAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionSplitApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionSplitApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionSplitApiKey {
  /**
  * Split API key. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key_aws_secrets_manager ActionConnection#api_key_aws_secrets_manager}
  */
  readonly apiKeyAwsSecretsManager?: ActionConnectionSplitApiKeyApiKeyAwsSecretsManager;
}

export function actionConnectionSplitApiKeyToTerraform(struct?: ActionConnectionSplitApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    api_key_aws_secrets_manager: actionConnectionSplitApiKeyApiKeyAwsSecretsManagerToTerraform(struct!.apiKeyAwsSecretsManager),
  }
}


export function actionConnectionSplitApiKeyToHclTerraform(struct?: ActionConnectionSplitApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_aws_secrets_manager: {
      value: actionConnectionSplitApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct!.apiKeyAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionSplitApiKeyApiKeyAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionSplitApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionSplitApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiKeyAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAwsSecretsManager = this._apiKeyAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionSplitApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiKeyAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiKeyAwsSecretsManager.internalValue = value.apiKeyAwsSecretsManager;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiKeyAwsSecretsManager = new ActionConnectionSplitApiKeyApiKeyAwsSecretsManagerOutputReference(this, "api_key_aws_secrets_manager");
  public get apiKeyAwsSecretsManager() {
    return this._apiKeyAwsSecretsManager;
  }
  public putApiKeyAwsSecretsManager(value: ActionConnectionSplitApiKeyApiKeyAwsSecretsManager) {
    this._apiKeyAwsSecretsManager.internalValue = value;
  }
  public resetApiKeyAwsSecretsManager() {
    this._apiKeyAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAwsSecretsManagerInput() {
    return this._apiKeyAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionSplit {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionSplitApiKey;
}

export function actionConnectionSplitToTerraform(struct?: ActionConnectionSplit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionSplitApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionSplitToHclTerraform(struct?: ActionConnectionSplit | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionSplitApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionSplitApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionSplitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionSplit | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionSplit | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionSplitApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionSplitApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ActionConnectionStatsigApiKeyApiKeyAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionStatsigApiKeyApiKeyAwsSecretsManagerToTerraform(struct?: ActionConnectionStatsigApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionStatsigApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct?: ActionConnectionStatsigApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionStatsigApiKeyApiKeyAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionStatsigApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionStatsigApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionStatsigApiKey {
  /**
  * Statsig API key. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key_aws_secrets_manager ActionConnection#api_key_aws_secrets_manager}
  */
  readonly apiKeyAwsSecretsManager?: ActionConnectionStatsigApiKeyApiKeyAwsSecretsManager;
}

export function actionConnectionStatsigApiKeyToTerraform(struct?: ActionConnectionStatsigApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    api_key_aws_secrets_manager: actionConnectionStatsigApiKeyApiKeyAwsSecretsManagerToTerraform(struct!.apiKeyAwsSecretsManager),
  }
}


export function actionConnectionStatsigApiKeyToHclTerraform(struct?: ActionConnectionStatsigApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_aws_secrets_manager: {
      value: actionConnectionStatsigApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct!.apiKeyAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionStatsigApiKeyApiKeyAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionStatsigApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionStatsigApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiKeyAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAwsSecretsManager = this._apiKeyAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionStatsigApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiKeyAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiKeyAwsSecretsManager.internalValue = value.apiKeyAwsSecretsManager;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiKeyAwsSecretsManager = new ActionConnectionStatsigApiKeyApiKeyAwsSecretsManagerOutputReference(this, "api_key_aws_secrets_manager");
  public get apiKeyAwsSecretsManager() {
    return this._apiKeyAwsSecretsManager;
  }
  public putApiKeyAwsSecretsManager(value: ActionConnectionStatsigApiKeyApiKeyAwsSecretsManager) {
    this._apiKeyAwsSecretsManager.internalValue = value;
  }
  public resetApiKeyAwsSecretsManager() {
    this._apiKeyAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAwsSecretsManagerInput() {
    return this._apiKeyAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionStatsig {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionStatsigApiKey;
}

export function actionConnectionStatsigToTerraform(struct?: ActionConnectionStatsig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionStatsigApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionStatsigToHclTerraform(struct?: ActionConnectionStatsig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionStatsigApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionStatsigApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionStatsigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionStatsig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionStatsig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionStatsigApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionStatsigApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ActionConnectionVirusTotalApiKeyApiKeyAwsSecretsManager {
  /**
  * Top-level JSON key to extract. Omit to use the entire secret string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#key ActionConnection#key}
  */
  readonly key?: string;
  /**
  * Name or ARN of the secret. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#secret_id ActionConnection#secret_id}
  */
  readonly secretId: string;
  /**
  * Secret version ID. Can't be used with `version_stage`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_id ActionConnection#version_id}
  */
  readonly versionId?: string;
  /**
  * Secret version staging label. Can't be used with `version_id`. If neither is set, the current version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#version_stage ActionConnection#version_stage}
  */
  readonly versionStage?: string;
}

export function actionConnectionVirusTotalApiKeyApiKeyAwsSecretsManagerToTerraform(struct?: ActionConnectionVirusTotalApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    secret_id: cdktn.stringToTerraform(struct!.secretId),
    version_id: cdktn.stringToTerraform(struct!.versionId),
    version_stage: cdktn.stringToTerraform(struct!.versionStage),
  }
}


export function actionConnectionVirusTotalApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct?: ActionConnectionVirusTotalApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable): any {
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
    secret_id: {
      value: cdktn.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktn.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_stage: {
      value: cdktn.stringToHclTerraform(struct!.versionStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionVirusTotalApiKeyApiKeyAwsSecretsManagerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionVirusTotalApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._versionStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionStage = this._versionStage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionVirusTotalApiKeyApiKeyAwsSecretsManager | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretId = undefined;
      this._versionId = undefined;
      this._versionStage = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretId = value.secretId;
      this._versionId = value.versionId;
      this._versionStage = value.versionStage;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stage - computed: false, optional: true, required: false
  private _versionStage?: string; 
  public get versionStage() {
    return this.getStringAttribute('version_stage');
  }
  public set versionStage(value: string) {
    this._versionStage = value;
  }
  public resetVersionStage() {
    this._versionStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStageInput() {
    return this._versionStage;
  }
}
export interface ActionConnectionVirusTotalApiKey {
  /**
  * VirusTotal API key. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: string;
  /**
  * AWS Secrets Manager reference for this field. To use it, set `external_secrets_manager` on the connection and omit the literal field. Available only for supported credential tokens on connections that run in Datadog's cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key_aws_secrets_manager ActionConnection#api_key_aws_secrets_manager}
  */
  readonly apiKeyAwsSecretsManager?: ActionConnectionVirusTotalApiKeyApiKeyAwsSecretsManager;
}

export function actionConnectionVirusTotalApiKeyToTerraform(struct?: ActionConnectionVirusTotalApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: cdktn.stringToTerraform(struct!.apiKey),
    api_key_aws_secrets_manager: actionConnectionVirusTotalApiKeyApiKeyAwsSecretsManagerToTerraform(struct!.apiKeyAwsSecretsManager),
  }
}


export function actionConnectionVirusTotalApiKeyToHclTerraform(struct?: ActionConnectionVirusTotalApiKey | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: cdktn.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_aws_secrets_manager: {
      value: actionConnectionVirusTotalApiKeyApiKeyAwsSecretsManagerToHclTerraform(struct!.apiKeyAwsSecretsManager),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionVirusTotalApiKeyApiKeyAwsSecretsManager",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionVirusTotalApiKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionVirusTotalApiKey | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiKeyAwsSecretsManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyAwsSecretsManager = this._apiKeyAwsSecretsManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionVirusTotalApiKey | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiKeyAwsSecretsManager.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiKeyAwsSecretsManager.internalValue = value.apiKeyAwsSecretsManager;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_aws_secrets_manager - computed: false, optional: true, required: false
  private _apiKeyAwsSecretsManager = new ActionConnectionVirusTotalApiKeyApiKeyAwsSecretsManagerOutputReference(this, "api_key_aws_secrets_manager");
  public get apiKeyAwsSecretsManager() {
    return this._apiKeyAwsSecretsManager;
  }
  public putApiKeyAwsSecretsManager(value: ActionConnectionVirusTotalApiKeyApiKeyAwsSecretsManager) {
    this._apiKeyAwsSecretsManager.internalValue = value;
  }
  public resetApiKeyAwsSecretsManager() {
    this._apiKeyAwsSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyAwsSecretsManagerInput() {
    return this._apiKeyAwsSecretsManager.internalValue;
  }
}
export interface ActionConnectionVirusTotal {
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#api_key ActionConnection#api_key}
  */
  readonly apiKey?: ActionConnectionVirusTotalApiKey;
}

export function actionConnectionVirusTotalToTerraform(struct?: ActionConnectionVirusTotal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    api_key: actionConnectionVirusTotalApiKeyToTerraform(struct!.apiKey),
  }
}


export function actionConnectionVirusTotalToHclTerraform(struct?: ActionConnectionVirusTotal | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    api_key: {
      value: actionConnectionVirusTotalApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ActionConnectionVirusTotalApiKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ActionConnectionVirusTotalOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActionConnectionVirusTotal | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ActionConnectionVirusTotal | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new ActionConnectionVirusTotalApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ActionConnectionVirusTotalApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection datadog_action_connection}
*/
export class ActionConnection extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_action_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ActionConnection resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActionConnection to import
  * @param importFromId The id of the existing ActionConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActionConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_action_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/action_connection datadog_action_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActionConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ActionConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_action_connection',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.30.0',
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
    this._externalSecretsManager.internalValue = config.externalSecretsManager;
    this._name = config.name;
    this._tags = config.tags;
    this._anthropic.internalValue = config.anthropic;
    this._asana.internalValue = config.asana;
    this._aws.internalValue = config.aws;
    this._azure.internalValue = config.azure;
    this._circleCi.internalValue = config.circleCi;
    this._clickup.internalValue = config.clickup;
    this._cloudflare.internalValue = config.cloudflare;
    this._configCat.internalValue = config.configCat;
    this._datadog.internalValue = config.datadog;
    this._fastly.internalValue = config.fastly;
    this._freshservice.internalValue = config.freshservice;
    this._gcp.internalValue = config.gcp;
    this._gemini.internalValue = config.gemini;
    this._gitlab.internalValue = config.gitlab;
    this._greyNoise.internalValue = config.greyNoise;
    this._http.internalValue = config.http;
    this._launchDarkly.internalValue = config.launchDarkly;
    this._notion.internalValue = config.notion;
    this._okta.internalValue = config.okta;
    this._openai.internalValue = config.openai;
    this._serviceNow.internalValue = config.serviceNow;
    this._split.internalValue = config.split;
    this._statsig.internalValue = config.statsig;
    this._virusTotal.internalValue = config.virusTotal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // effective_tags - computed: true, optional: false, required: false
  public get effectiveTags() {
    return cdktn.Fn.tolist(this.getListAttribute('effective_tags'));
  }

  // external_secrets_manager - computed: false, optional: true, required: false
  private _externalSecretsManager = new ActionConnectionExternalSecretsManagerOutputReference(this, "external_secrets_manager");
  public get externalSecretsManager() {
    return this._externalSecretsManager;
  }
  public putExternalSecretsManager(value: ActionConnectionExternalSecretsManager) {
    this._externalSecretsManager.internalValue = value;
  }
  public resetExternalSecretsManager() {
    this._externalSecretsManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSecretsManagerInput() {
    return this._externalSecretsManager.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return cdktn.Fn.tolist(this.getListAttribute('tags'));
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

  // anthropic - computed: false, optional: true, required: false
  private _anthropic = new ActionConnectionAnthropicOutputReference(this, "anthropic");
  public get anthropic() {
    return this._anthropic;
  }
  public putAnthropic(value: ActionConnectionAnthropic) {
    this._anthropic.internalValue = value;
  }
  public resetAnthropic() {
    this._anthropic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicInput() {
    return this._anthropic.internalValue;
  }

  // asana - computed: false, optional: true, required: false
  private _asana = new ActionConnectionAsanaOutputReference(this, "asana");
  public get asana() {
    return this._asana;
  }
  public putAsana(value: ActionConnectionAsana) {
    this._asana.internalValue = value;
  }
  public resetAsana() {
    this._asana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asanaInput() {
    return this._asana.internalValue;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new ActionConnectionAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: ActionConnectionAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new ActionConnectionAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: ActionConnectionAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // circle_ci - computed: false, optional: true, required: false
  private _circleCi = new ActionConnectionCircleCiOutputReference(this, "circle_ci");
  public get circleCi() {
    return this._circleCi;
  }
  public putCircleCi(value: ActionConnectionCircleCi) {
    this._circleCi.internalValue = value;
  }
  public resetCircleCi() {
    this._circleCi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circleCiInput() {
    return this._circleCi.internalValue;
  }

  // clickup - computed: false, optional: true, required: false
  private _clickup = new ActionConnectionClickupOutputReference(this, "clickup");
  public get clickup() {
    return this._clickup;
  }
  public putClickup(value: ActionConnectionClickup) {
    this._clickup.internalValue = value;
  }
  public resetClickup() {
    this._clickup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickupInput() {
    return this._clickup.internalValue;
  }

  // cloudflare - computed: false, optional: true, required: false
  private _cloudflare = new ActionConnectionCloudflareOutputReference(this, "cloudflare");
  public get cloudflare() {
    return this._cloudflare;
  }
  public putCloudflare(value: ActionConnectionCloudflare) {
    this._cloudflare.internalValue = value;
  }
  public resetCloudflare() {
    this._cloudflare.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareInput() {
    return this._cloudflare.internalValue;
  }

  // config_cat - computed: false, optional: true, required: false
  private _configCat = new ActionConnectionConfigCatOutputReference(this, "config_cat");
  public get configCat() {
    return this._configCat;
  }
  public putConfigCat(value: ActionConnectionConfigCat) {
    this._configCat.internalValue = value;
  }
  public resetConfigCat() {
    this._configCat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configCatInput() {
    return this._configCat.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new ActionConnectionDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: ActionConnectionDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // fastly - computed: false, optional: true, required: false
  private _fastly = new ActionConnectionFastlyOutputReference(this, "fastly");
  public get fastly() {
    return this._fastly;
  }
  public putFastly(value: ActionConnectionFastly) {
    this._fastly.internalValue = value;
  }
  public resetFastly() {
    this._fastly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastlyInput() {
    return this._fastly.internalValue;
  }

  // freshservice - computed: false, optional: true, required: false
  private _freshservice = new ActionConnectionFreshserviceOutputReference(this, "freshservice");
  public get freshservice() {
    return this._freshservice;
  }
  public putFreshservice(value: ActionConnectionFreshservice) {
    this._freshservice.internalValue = value;
  }
  public resetFreshservice() {
    this._freshservice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freshserviceInput() {
    return this._freshservice.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new ActionConnectionGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: ActionConnectionGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // gemini - computed: false, optional: true, required: false
  private _gemini = new ActionConnectionGeminiOutputReference(this, "gemini");
  public get gemini() {
    return this._gemini;
  }
  public putGemini(value: ActionConnectionGemini) {
    this._gemini.internalValue = value;
  }
  public resetGemini() {
    this._gemini.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geminiInput() {
    return this._gemini.internalValue;
  }

  // gitlab - computed: false, optional: true, required: false
  private _gitlab = new ActionConnectionGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: ActionConnectionGitlab) {
    this._gitlab.internalValue = value;
  }
  public resetGitlab() {
    this._gitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabInput() {
    return this._gitlab.internalValue;
  }

  // grey_noise - computed: false, optional: true, required: false
  private _greyNoise = new ActionConnectionGreyNoiseOutputReference(this, "grey_noise");
  public get greyNoise() {
    return this._greyNoise;
  }
  public putGreyNoise(value: ActionConnectionGreyNoise) {
    this._greyNoise.internalValue = value;
  }
  public resetGreyNoise() {
    this._greyNoise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greyNoiseInput() {
    return this._greyNoise.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new ActionConnectionHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: ActionConnectionHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // launch_darkly - computed: false, optional: true, required: false
  private _launchDarkly = new ActionConnectionLaunchDarklyOutputReference(this, "launch_darkly");
  public get launchDarkly() {
    return this._launchDarkly;
  }
  public putLaunchDarkly(value: ActionConnectionLaunchDarkly) {
    this._launchDarkly.internalValue = value;
  }
  public resetLaunchDarkly() {
    this._launchDarkly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchDarklyInput() {
    return this._launchDarkly.internalValue;
  }

  // notion - computed: false, optional: true, required: false
  private _notion = new ActionConnectionNotionOutputReference(this, "notion");
  public get notion() {
    return this._notion;
  }
  public putNotion(value: ActionConnectionNotion) {
    this._notion.internalValue = value;
  }
  public resetNotion() {
    this._notion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notionInput() {
    return this._notion.internalValue;
  }

  // okta - computed: false, optional: true, required: false
  private _okta = new ActionConnectionOktaOutputReference(this, "okta");
  public get okta() {
    return this._okta;
  }
  public putOkta(value: ActionConnectionOkta) {
    this._okta.internalValue = value;
  }
  public resetOkta() {
    this._okta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaInput() {
    return this._okta.internalValue;
  }

  // openai - computed: false, optional: true, required: false
  private _openai = new ActionConnectionOpenaiOutputReference(this, "openai");
  public get openai() {
    return this._openai;
  }
  public putOpenai(value: ActionConnectionOpenai) {
    this._openai.internalValue = value;
  }
  public resetOpenai() {
    this._openai.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiInput() {
    return this._openai.internalValue;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow = new ActionConnectionServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: ActionConnectionServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // split - computed: false, optional: true, required: false
  private _split = new ActionConnectionSplitOutputReference(this, "split");
  public get split() {
    return this._split;
  }
  public putSplit(value: ActionConnectionSplit) {
    this._split.internalValue = value;
  }
  public resetSplit() {
    this._split.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitInput() {
    return this._split.internalValue;
  }

  // statsig - computed: false, optional: true, required: false
  private _statsig = new ActionConnectionStatsigOutputReference(this, "statsig");
  public get statsig() {
    return this._statsig;
  }
  public putStatsig(value: ActionConnectionStatsig) {
    this._statsig.internalValue = value;
  }
  public resetStatsig() {
    this._statsig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsigInput() {
    return this._statsig.internalValue;
  }

  // virus_total - computed: false, optional: true, required: false
  private _virusTotal = new ActionConnectionVirusTotalOutputReference(this, "virus_total");
  public get virusTotal() {
    return this._virusTotal;
  }
  public putVirusTotal(value: ActionConnectionVirusTotal) {
    this._virusTotal.internalValue = value;
  }
  public resetVirusTotal() {
    this._virusTotal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virusTotalInput() {
    return this._virusTotal.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_secrets_manager: actionConnectionExternalSecretsManagerToTerraform(this._externalSecretsManager.internalValue),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tags),
      anthropic: actionConnectionAnthropicToTerraform(this._anthropic.internalValue),
      asana: actionConnectionAsanaToTerraform(this._asana.internalValue),
      aws: actionConnectionAwsToTerraform(this._aws.internalValue),
      azure: actionConnectionAzureToTerraform(this._azure.internalValue),
      circle_ci: actionConnectionCircleCiToTerraform(this._circleCi.internalValue),
      clickup: actionConnectionClickupToTerraform(this._clickup.internalValue),
      cloudflare: actionConnectionCloudflareToTerraform(this._cloudflare.internalValue),
      config_cat: actionConnectionConfigCatToTerraform(this._configCat.internalValue),
      datadog: actionConnectionDatadogToTerraform(this._datadog.internalValue),
      fastly: actionConnectionFastlyToTerraform(this._fastly.internalValue),
      freshservice: actionConnectionFreshserviceToTerraform(this._freshservice.internalValue),
      gcp: actionConnectionGcpToTerraform(this._gcp.internalValue),
      gemini: actionConnectionGeminiToTerraform(this._gemini.internalValue),
      gitlab: actionConnectionGitlabToTerraform(this._gitlab.internalValue),
      grey_noise: actionConnectionGreyNoiseToTerraform(this._greyNoise.internalValue),
      http: actionConnectionHttpToTerraform(this._http.internalValue),
      launch_darkly: actionConnectionLaunchDarklyToTerraform(this._launchDarkly.internalValue),
      notion: actionConnectionNotionToTerraform(this._notion.internalValue),
      okta: actionConnectionOktaToTerraform(this._okta.internalValue),
      openai: actionConnectionOpenaiToTerraform(this._openai.internalValue),
      service_now: actionConnectionServiceNowToTerraform(this._serviceNow.internalValue),
      split: actionConnectionSplitToTerraform(this._split.internalValue),
      statsig: actionConnectionStatsigToTerraform(this._statsig.internalValue),
      virus_total: actionConnectionVirusTotalToTerraform(this._virusTotal.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_secrets_manager: {
        value: actionConnectionExternalSecretsManagerToHclTerraform(this._externalSecretsManager.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionExternalSecretsManager",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      anthropic: {
        value: actionConnectionAnthropicToHclTerraform(this._anthropic.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionAnthropic",
      },
      asana: {
        value: actionConnectionAsanaToHclTerraform(this._asana.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionAsana",
      },
      aws: {
        value: actionConnectionAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionAws",
      },
      azure: {
        value: actionConnectionAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionAzure",
      },
      circle_ci: {
        value: actionConnectionCircleCiToHclTerraform(this._circleCi.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionCircleCi",
      },
      clickup: {
        value: actionConnectionClickupToHclTerraform(this._clickup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionClickup",
      },
      cloudflare: {
        value: actionConnectionCloudflareToHclTerraform(this._cloudflare.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionCloudflare",
      },
      config_cat: {
        value: actionConnectionConfigCatToHclTerraform(this._configCat.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionConfigCat",
      },
      datadog: {
        value: actionConnectionDatadogToHclTerraform(this._datadog.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionDatadog",
      },
      fastly: {
        value: actionConnectionFastlyToHclTerraform(this._fastly.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionFastly",
      },
      freshservice: {
        value: actionConnectionFreshserviceToHclTerraform(this._freshservice.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionFreshservice",
      },
      gcp: {
        value: actionConnectionGcpToHclTerraform(this._gcp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionGcp",
      },
      gemini: {
        value: actionConnectionGeminiToHclTerraform(this._gemini.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionGemini",
      },
      gitlab: {
        value: actionConnectionGitlabToHclTerraform(this._gitlab.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionGitlab",
      },
      grey_noise: {
        value: actionConnectionGreyNoiseToHclTerraform(this._greyNoise.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionGreyNoise",
      },
      http: {
        value: actionConnectionHttpToHclTerraform(this._http.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionHttp",
      },
      launch_darkly: {
        value: actionConnectionLaunchDarklyToHclTerraform(this._launchDarkly.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionLaunchDarkly",
      },
      notion: {
        value: actionConnectionNotionToHclTerraform(this._notion.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionNotion",
      },
      okta: {
        value: actionConnectionOktaToHclTerraform(this._okta.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionOkta",
      },
      openai: {
        value: actionConnectionOpenaiToHclTerraform(this._openai.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionOpenai",
      },
      service_now: {
        value: actionConnectionServiceNowToHclTerraform(this._serviceNow.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionServiceNow",
      },
      split: {
        value: actionConnectionSplitToHclTerraform(this._split.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionSplit",
      },
      statsig: {
        value: actionConnectionStatsigToHclTerraform(this._statsig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionStatsig",
      },
      virus_total: {
        value: actionConnectionVirusTotalToHclTerraform(this._virusTotal.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActionConnectionVirusTotal",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
