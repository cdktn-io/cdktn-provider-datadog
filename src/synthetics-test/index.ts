/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SyntheticsTestConfig extends cdktn.TerraformMetaArguments {
  /**
  * Initial application arguments for the mobile test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#config_initial_application_arguments SyntheticsTest#config_initial_application_arguments}
  */
  readonly configInitialApplicationArguments?: { [key: string]: string };
  /**
  * Required if `type = "browser"`. Array with the different device IDs used to run the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#device_ids SyntheticsTest#device_ids}
  */
  readonly deviceIds?: string[];
  /**
  * A boolean indicating whether this synthetics test can be deleted even if it's referenced by other resources (for example, SLOs and composite monitors).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#force_delete_dependencies SyntheticsTest#force_delete_dependencies}
  */
  readonly forceDeleteDependencies?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#id SyntheticsTest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Array of locations used to run the test. Refer to [the Datadog Synthetics location data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/synthetics_locations) to retrieve the list of locations or find the possible values listed in [this API response](https://app.datadoghq.com/api/v1/synthetics/locations?only_public=true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#locations SyntheticsTest#locations}
  */
  readonly locations: string[];
  /**
  * A message to include with notifications for this synthetics test. Email notifications can be sent to specific users by using the same `@username` notation as events. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#message SyntheticsTest#message}
  */
  readonly message?: string;
  /**
  * Name of Datadog synthetics test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Header name and value map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_headers SyntheticsTest#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Metadata to include when performing the gRPC request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_metadata SyntheticsTest#request_metadata}
  */
  readonly requestMetadata?: { [key: string]: string };
  /**
  * Query arguments name and value map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_query SyntheticsTest#request_query}
  */
  readonly requestQuery?: { [key: string]: string };
  /**
  * Cookies to be used for a browser test request, using the [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#set_cookie SyntheticsTest#set_cookie}
  */
  readonly setCookie?: string;
  /**
  * Define whether you want to start (`live`) or pause (`paused`) a Synthetic test. Valid values are `live`, `paused`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#status SyntheticsTest#status}
  */
  readonly status: string;
  /**
  * The subtype for API or Network Path tests. For API tests, defaults to `http`. For Network Path tests, only `tcp`, `udp`, `icmp` are available. Valid values are `http`, `ssl`, `tcp`, `dns`, `multi`, `icmp`, `udp`, `websocket`, `grpc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#subtype SyntheticsTest#subtype}
  */
  readonly subtype?: string;
  /**
  * A list of tags to associate with your synthetics test. This can help you categorize and filter tests in the manage synthetics page of the UI. Default is an empty list (`[]`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#tags SyntheticsTest#tags}
  */
  readonly tags?: string[];
  /**
  * The type of Synthetics test. Valid values are `api`, `browser`, `mobile`, `network`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * Variables defined from JavaScript code for API HTTP tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#variables_from_script SyntheticsTest#variables_from_script}
  */
  readonly variablesFromScript?: string;
  /**
  * api_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#api_step SyntheticsTest#api_step}
  */
  readonly apiStep?: SyntheticsTestApiStep[] | cdktn.IResolvable;
  /**
  * assertion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#assertion SyntheticsTest#assertion}
  */
  readonly assertion?: SyntheticsTestAssertion[] | cdktn.IResolvable;
  /**
  * browser_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#browser_step SyntheticsTest#browser_step}
  */
  readonly browserStep?: SyntheticsTestBrowserStep[] | cdktn.IResolvable;
  /**
  * browser_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#browser_variable SyntheticsTest#browser_variable}
  */
  readonly browserVariable?: SyntheticsTestBrowserVariable[] | cdktn.IResolvable;
  /**
  * config_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#config_variable SyntheticsTest#config_variable}
  */
  readonly configVariable?: SyntheticsTestConfigVariable[] | cdktn.IResolvable;
  /**
  * mobile_options_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#mobile_options_list SyntheticsTest#mobile_options_list}
  */
  readonly mobileOptionsList?: SyntheticsTestMobileOptionsListStruct;
  /**
  * mobile_step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#mobile_step SyntheticsTest#mobile_step}
  */
  readonly mobileStep?: SyntheticsTestMobileStep[] | cdktn.IResolvable;
  /**
  * options_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#options_list SyntheticsTest#options_list}
  */
  readonly optionsList?: SyntheticsTestOptionsListStruct;
  /**
  * request_basicauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_basicauth SyntheticsTest#request_basicauth}
  */
  readonly requestBasicauth?: SyntheticsTestRequestBasicauth;
  /**
  * request_client_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_client_certificate SyntheticsTest#request_client_certificate}
  */
  readonly requestClientCertificate?: SyntheticsTestRequestClientCertificate;
  /**
  * request_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_definition SyntheticsTest#request_definition}
  */
  readonly requestDefinition?: SyntheticsTestRequestDefinition;
  /**
  * request_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_file SyntheticsTest#request_file}
  */
  readonly requestFile?: SyntheticsTestRequestFile[] | cdktn.IResolvable;
  /**
  * request_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_proxy SyntheticsTest#request_proxy}
  */
  readonly requestProxy?: SyntheticsTestRequestProxy;
}
export interface SyntheticsTestApiStepAssertionTargetMcpCapabilities {
  /**
  * List of MCP server capabilities to assert against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#capabilities SyntheticsTest#capabilities}
  */
  readonly capabilities: string[];
}

export function syntheticsTestApiStepAssertionTargetMcpCapabilitiesToTerraform(struct?: SyntheticsTestApiStepAssertionTargetMcpCapabilitiesOutputReference | SyntheticsTestApiStepAssertionTargetMcpCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.capabilities),
  }
}


export function syntheticsTestApiStepAssertionTargetMcpCapabilitiesToHclTerraform(struct?: SyntheticsTestApiStepAssertionTargetMcpCapabilitiesOutputReference | SyntheticsTestApiStepAssertionTargetMcpCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestApiStepAssertionTargetMcpCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestApiStepAssertionTargetMcpCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepAssertionTargetMcpCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capabilities = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capabilities = value.capabilities;
    }
  }

  // capabilities - computed: false, optional: false, required: true
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }
}
export interface SyntheticsTestApiStepAssertionTargetjsonpath {
  /**
  * The element from the list of results to assert on. Select from `firstElementMatches` (the first element in the list), `everyElementMatches` (every element in the list), `atLeastOneElementMatches` (at least one element in the list), or `serializationMatches` (the serialized value of the list). Defaults to `"firstElementMatches"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#elementsoperator SyntheticsTest#elementsoperator}
  */
  readonly elementsoperator?: string;
  /**
  * The JSON path to assert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#jsonpath SyntheticsTest#jsonpath}
  */
  readonly jsonpath: string;
  /**
  * The specific operator to use on the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#operator SyntheticsTest#operator}
  */
  readonly operator: string;
  /**
  * Expected matching value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#targetvalue SyntheticsTest#targetvalue}
  */
  readonly targetvalue?: string;
}

export function syntheticsTestApiStepAssertionTargetjsonpathToTerraform(struct?: SyntheticsTestApiStepAssertionTargetjsonpathOutputReference | SyntheticsTestApiStepAssertionTargetjsonpath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elementsoperator: cdktn.stringToTerraform(struct!.elementsoperator),
    jsonpath: cdktn.stringToTerraform(struct!.jsonpath),
    operator: cdktn.stringToTerraform(struct!.operator),
    targetvalue: cdktn.stringToTerraform(struct!.targetvalue),
  }
}


export function syntheticsTestApiStepAssertionTargetjsonpathToHclTerraform(struct?: SyntheticsTestApiStepAssertionTargetjsonpathOutputReference | SyntheticsTestApiStepAssertionTargetjsonpath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elementsoperator: {
      value: cdktn.stringToHclTerraform(struct!.elementsoperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jsonpath: {
      value: cdktn.stringToHclTerraform(struct!.jsonpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targetvalue: {
      value: cdktn.stringToHclTerraform(struct!.targetvalue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestApiStepAssertionTargetjsonpathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestApiStepAssertionTargetjsonpath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementsoperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementsoperator = this._elementsoperator;
    }
    if (this._jsonpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonpath = this._jsonpath;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._targetvalue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetvalue = this._targetvalue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepAssertionTargetjsonpath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elementsoperator = undefined;
      this._jsonpath = undefined;
      this._operator = undefined;
      this._targetvalue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elementsoperator = value.elementsoperator;
      this._jsonpath = value.jsonpath;
      this._operator = value.operator;
      this._targetvalue = value.targetvalue;
    }
  }

  // elementsoperator - computed: false, optional: true, required: false
  private _elementsoperator?: string; 
  public get elementsoperator() {
    return this.getStringAttribute('elementsoperator');
  }
  public set elementsoperator(value: string) {
    this._elementsoperator = value;
  }
  public resetElementsoperator() {
    this._elementsoperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsoperatorInput() {
    return this._elementsoperator;
  }

  // jsonpath - computed: false, optional: false, required: true
  private _jsonpath?: string; 
  public get jsonpath() {
    return this.getStringAttribute('jsonpath');
  }
  public set jsonpath(value: string) {
    this._jsonpath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonpathInput() {
    return this._jsonpath;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // targetvalue - computed: false, optional: true, required: false
  private _targetvalue?: string; 
  public get targetvalue() {
    return this.getStringAttribute('targetvalue');
  }
  public set targetvalue(value: string) {
    this._targetvalue = value;
  }
  public resetTargetvalue() {
    this._targetvalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetvalueInput() {
    return this._targetvalue;
  }
}
export interface SyntheticsTestApiStepAssertionTargetjsonschema {
  /**
  * The JSON Schema to validate the body against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#jsonschema SyntheticsTest#jsonschema}
  */
  readonly jsonschema: string;
  /**
  * The meta schema to use for the JSON Schema. Defaults to `"draft-07"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#metaschema SyntheticsTest#metaschema}
  */
  readonly metaschema?: string;
}

export function syntheticsTestApiStepAssertionTargetjsonschemaToTerraform(struct?: SyntheticsTestApiStepAssertionTargetjsonschemaOutputReference | SyntheticsTestApiStepAssertionTargetjsonschema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktn.stringToTerraform(struct!.jsonschema),
    metaschema: cdktn.stringToTerraform(struct!.metaschema),
  }
}


export function syntheticsTestApiStepAssertionTargetjsonschemaToHclTerraform(struct?: SyntheticsTestApiStepAssertionTargetjsonschemaOutputReference | SyntheticsTestApiStepAssertionTargetjsonschema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktn.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metaschema: {
      value: cdktn.stringToHclTerraform(struct!.metaschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestApiStepAssertionTargetjsonschemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestApiStepAssertionTargetjsonschema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._metaschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaschema = this._metaschema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepAssertionTargetjsonschema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._metaschema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._metaschema = value.metaschema;
    }
  }

  // jsonschema - computed: false, optional: false, required: true
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // metaschema - computed: false, optional: true, required: false
  private _metaschema?: string; 
  public get metaschema() {
    return this.getStringAttribute('metaschema');
  }
  public set metaschema(value: string) {
    this._metaschema = value;
  }
  public resetMetaschema() {
    this._metaschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaschemaInput() {
    return this._metaschema;
  }
}
export interface SyntheticsTestApiStepAssertionTargetxpath {
  /**
  * The specific operator to use on the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#operator SyntheticsTest#operator}
  */
  readonly operator: string;
  /**
  * Expected matching value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#targetvalue SyntheticsTest#targetvalue}
  */
  readonly targetvalue?: string;
  /**
  * The xpath to assert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#xpath SyntheticsTest#xpath}
  */
  readonly xpath: string;
}

export function syntheticsTestApiStepAssertionTargetxpathToTerraform(struct?: SyntheticsTestApiStepAssertionTargetxpathOutputReference | SyntheticsTestApiStepAssertionTargetxpath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    targetvalue: cdktn.stringToTerraform(struct!.targetvalue),
    xpath: cdktn.stringToTerraform(struct!.xpath),
  }
}


export function syntheticsTestApiStepAssertionTargetxpathToHclTerraform(struct?: SyntheticsTestApiStepAssertionTargetxpathOutputReference | SyntheticsTestApiStepAssertionTargetxpath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targetvalue: {
      value: cdktn.stringToHclTerraform(struct!.targetvalue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xpath: {
      value: cdktn.stringToHclTerraform(struct!.xpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestApiStepAssertionTargetxpathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestApiStepAssertionTargetxpath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._targetvalue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetvalue = this._targetvalue;
    }
    if (this._xpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.xpath = this._xpath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepAssertionTargetxpath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._targetvalue = undefined;
      this._xpath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._targetvalue = value.targetvalue;
      this._xpath = value.xpath;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // targetvalue - computed: false, optional: true, required: false
  private _targetvalue?: string; 
  public get targetvalue() {
    return this.getStringAttribute('targetvalue');
  }
  public set targetvalue(value: string) {
    this._targetvalue = value;
  }
  public resetTargetvalue() {
    this._targetvalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetvalueInput() {
    return this._targetvalue;
  }

  // xpath - computed: false, optional: false, required: true
  private _xpath?: string; 
  public get xpath() {
    return this.getStringAttribute('xpath');
  }
  public set xpath(value: string) {
    this._xpath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xpathInput() {
    return this._xpath;
  }
}
export interface SyntheticsTestApiStepAssertion {
  /**
  * If assertion type is `javascript`, this is the JavaScript code that performs the assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#code SyntheticsTest#code}
  */
  readonly code?: string;
  /**
  * Assertion operator. **Note:** Only some combinations of `type` and `operator` are valid. Refer to `config.assertions` in the [Datadog API reference](https://docs.datadoghq.com/api/latest/synthetics/#create-an-api-test). Valid values are `contains`, `doesNotContain`, `is`, `isNot`, `lessThan`, `lessThanOrEqual`, `moreThan`, `moreThanOrEqual`, `matches`, `doesNotMatch`, `validates`, `isInMoreThan`, `isInLessThan`, `doesNotExist`, `isUndefined`, `validatesJSONPath`, `validatesJSONSchema`, `validatesXPath`, `md5`, `sha1`, `sha256`, `is`, `isNot`, `lessThan`, `lessThanOrEqual`, `moreThan`, `moreThanOrEqual`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#operator SyntheticsTest#operator}
  */
  readonly operator?: string;
  /**
  * If assertion type is `header` or `grpcMetadata`, this is the header name. For other assertion types, this is an aggregation property: `avg`, `min`, `max`, or `stddev`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#property SyntheticsTest#property}
  */
  readonly property?: string;
  /**
  * Expected value. **Note:** Depends on the assertion type. Refer to `config.assertions` in the [Datadog API reference](https://docs.datadoghq.com/api/latest/synthetics/#create-an-api-test).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#target SyntheticsTest#target}
  */
  readonly target?: string;
  /**
  * Timings scope for response time assertions. Valid values are `all`, `withoutDNS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#timings_scope SyntheticsTest#timings_scope}
  */
  readonly timingsScope?: string;
  /**
  * Type of assertion. **Note:** Only some combinations of `type` and `operator` are valid. For API tests, refer to `config.assertions` in the [Datadog API reference](https://docs.datadoghq.com/api/latest/synthetics/#create-an-api-test). For Network Path tests, refer to `config.assertions` in the [Datadog API reference](https://docs.datadoghq.com/api/latest/synthetics/#create-a-network-path-test). Valid values are `body`, `header`, `statusCode`, `certificate`, `responseTime`, `property`, `recordEvery`, `recordSome`, `tlsVersion`, `minTlsVersion`, `latency`, `packetLossPercentage`, `packetsReceived`, `networkHop`, `receivedMessage`, `grpcHealthcheckStatus`, `grpcMetadata`, `grpcProto`, `connection`, `multiNetworkHop`, `jitter`, `mcpToolNameLength`, `mcpToolCount`, `bodyHash`, `javascript`, `mcpRespectsSpecification`, `mcpServerCapabilities`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * target_mcp_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#target_mcp_capabilities SyntheticsTest#target_mcp_capabilities}
  */
  readonly targetMcpCapabilities?: SyntheticsTestApiStepAssertionTargetMcpCapabilities;
  /**
  * targetjsonpath block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#targetjsonpath SyntheticsTest#targetjsonpath}
  */
  readonly targetjsonpath?: SyntheticsTestApiStepAssertionTargetjsonpath;
  /**
  * targetjsonschema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#targetjsonschema SyntheticsTest#targetjsonschema}
  */
  readonly targetjsonschema?: SyntheticsTestApiStepAssertionTargetjsonschema;
  /**
  * targetxpath block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#targetxpath SyntheticsTest#targetxpath}
  */
  readonly targetxpath?: SyntheticsTestApiStepAssertionTargetxpath;
}

export function syntheticsTestApiStepAssertionToTerraform(struct?: SyntheticsTestApiStepAssertion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktn.stringToTerraform(struct!.code),
    operator: cdktn.stringToTerraform(struct!.operator),
    property: cdktn.stringToTerraform(struct!.property),
    target: cdktn.stringToTerraform(struct!.target),
    timings_scope: cdktn.stringToTerraform(struct!.timingsScope),
    type: cdktn.stringToTerraform(struct!.type),
    target_mcp_capabilities: syntheticsTestApiStepAssertionTargetMcpCapabilitiesToTerraform(struct!.targetMcpCapabilities),
    targetjsonpath: syntheticsTestApiStepAssertionTargetjsonpathToTerraform(struct!.targetjsonpath),
    targetjsonschema: syntheticsTestApiStepAssertionTargetjsonschemaToTerraform(struct!.targetjsonschema),
    targetxpath: syntheticsTestApiStepAssertionTargetxpathToTerraform(struct!.targetxpath),
  }
}


export function syntheticsTestApiStepAssertionToHclTerraform(struct?: SyntheticsTestApiStepAssertion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktn.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktn.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timings_scope: {
      value: cdktn.stringToHclTerraform(struct!.timingsScope),
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
    target_mcp_capabilities: {
      value: syntheticsTestApiStepAssertionTargetMcpCapabilitiesToHclTerraform(struct!.targetMcpCapabilities),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepAssertionTargetMcpCapabilitiesList",
    },
    targetjsonpath: {
      value: syntheticsTestApiStepAssertionTargetjsonpathToHclTerraform(struct!.targetjsonpath),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepAssertionTargetjsonpathList",
    },
    targetjsonschema: {
      value: syntheticsTestApiStepAssertionTargetjsonschemaToHclTerraform(struct!.targetjsonschema),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepAssertionTargetjsonschemaList",
    },
    targetxpath: {
      value: syntheticsTestApiStepAssertionTargetxpathToHclTerraform(struct!.targetxpath),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepAssertionTargetxpathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestApiStepAssertionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestApiStepAssertion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timingsScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.timingsScope = this._timingsScope;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._targetMcpCapabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMcpCapabilities = this._targetMcpCapabilities?.internalValue;
    }
    if (this._targetjsonpath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetjsonpath = this._targetjsonpath?.internalValue;
    }
    if (this._targetjsonschema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetjsonschema = this._targetjsonschema?.internalValue;
    }
    if (this._targetxpath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetxpath = this._targetxpath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepAssertion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._operator = undefined;
      this._property = undefined;
      this._target = undefined;
      this._timingsScope = undefined;
      this._type = undefined;
      this._targetMcpCapabilities.internalValue = undefined;
      this._targetjsonpath.internalValue = undefined;
      this._targetjsonschema.internalValue = undefined;
      this._targetxpath.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._operator = value.operator;
      this._property = value.property;
      this._target = value.target;
      this._timingsScope = value.timingsScope;
      this._type = value.type;
      this._targetMcpCapabilities.internalValue = value.targetMcpCapabilities;
      this._targetjsonpath.internalValue = value.targetjsonpath;
      this._targetjsonschema.internalValue = value.targetjsonschema;
      this._targetxpath.internalValue = value.targetxpath;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timings_scope - computed: false, optional: true, required: false
  private _timingsScope?: string; 
  public get timingsScope() {
    return this.getStringAttribute('timings_scope');
  }
  public set timingsScope(value: string) {
    this._timingsScope = value;
  }
  public resetTimingsScope() {
    this._timingsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timingsScopeInput() {
    return this._timingsScope;
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

  // target_mcp_capabilities - computed: false, optional: true, required: false
  private _targetMcpCapabilities = new SyntheticsTestApiStepAssertionTargetMcpCapabilitiesOutputReference(this, "target_mcp_capabilities");
  public get targetMcpCapabilities() {
    return this._targetMcpCapabilities;
  }
  public putTargetMcpCapabilities(value: SyntheticsTestApiStepAssertionTargetMcpCapabilities) {
    this._targetMcpCapabilities.internalValue = value;
  }
  public resetTargetMcpCapabilities() {
    this._targetMcpCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMcpCapabilitiesInput() {
    return this._targetMcpCapabilities.internalValue;
  }

  // targetjsonpath - computed: false, optional: true, required: false
  private _targetjsonpath = new SyntheticsTestApiStepAssertionTargetjsonpathOutputReference(this, "targetjsonpath");
  public get targetjsonpath() {
    return this._targetjsonpath;
  }
  public putTargetjsonpath(value: SyntheticsTestApiStepAssertionTargetjsonpath) {
    this._targetjsonpath.internalValue = value;
  }
  public resetTargetjsonpath() {
    this._targetjsonpath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetjsonpathInput() {
    return this._targetjsonpath.internalValue;
  }

  // targetjsonschema - computed: false, optional: true, required: false
  private _targetjsonschema = new SyntheticsTestApiStepAssertionTargetjsonschemaOutputReference(this, "targetjsonschema");
  public get targetjsonschema() {
    return this._targetjsonschema;
  }
  public putTargetjsonschema(value: SyntheticsTestApiStepAssertionTargetjsonschema) {
    this._targetjsonschema.internalValue = value;
  }
  public resetTargetjsonschema() {
    this._targetjsonschema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetjsonschemaInput() {
    return this._targetjsonschema.internalValue;
  }

  // targetxpath - computed: false, optional: true, required: false
  private _targetxpath = new SyntheticsTestApiStepAssertionTargetxpathOutputReference(this, "targetxpath");
  public get targetxpath() {
    return this._targetxpath;
  }
  public putTargetxpath(value: SyntheticsTestApiStepAssertionTargetxpath) {
    this._targetxpath.internalValue = value;
  }
  public resetTargetxpath() {
    this._targetxpath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetxpathInput() {
    return this._targetxpath.internalValue;
  }
}

export class SyntheticsTestApiStepAssertionList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestApiStepAssertion[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestApiStepAssertionOutputReference {
    return new SyntheticsTestApiStepAssertionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestApiStepExtractedValueParser {
  /**
  * Type of parser for a Synthetics global variable from a synthetics test. Valid values are `raw`, `json_path`, `regex`, `x_path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * Regex or JSON path used for the parser. Not used with type `raw`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#value SyntheticsTest#value}
  */
  readonly value?: string;
}

export function syntheticsTestApiStepExtractedValueParserToTerraform(struct?: SyntheticsTestApiStepExtractedValueParserOutputReference | SyntheticsTestApiStepExtractedValueParser): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function syntheticsTestApiStepExtractedValueParserToHclTerraform(struct?: SyntheticsTestApiStepExtractedValueParserOutputReference | SyntheticsTestApiStepExtractedValueParser): any {
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

export class SyntheticsTestApiStepExtractedValueParserOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestApiStepExtractedValueParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepExtractedValueParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
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
export interface SyntheticsTestApiStepExtractedValue {
  /**
  * When type is `http_header` or `grpc_metadata`, name of the header or metadatum to extract.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#field SyntheticsTest#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Determines whether or not the extracted value will be obfuscated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#secure SyntheticsTest#secure}
  */
  readonly secure?: boolean | cdktn.IResolvable;
  /**
  * Property of the Synthetics Test Response to use for the variable. Valid values are `grpc_message`, `grpc_metadata`, `http_body`, `http_header`, `http_status_code`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#parser SyntheticsTest#parser}
  */
  readonly parser: SyntheticsTestApiStepExtractedValueParser;
}

export function syntheticsTestApiStepExtractedValueToTerraform(struct?: SyntheticsTestApiStepExtractedValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktn.stringToTerraform(struct!.field),
    name: cdktn.stringToTerraform(struct!.name),
    secure: cdktn.booleanToTerraform(struct!.secure),
    type: cdktn.stringToTerraform(struct!.type),
    parser: syntheticsTestApiStepExtractedValueParserToTerraform(struct!.parser),
  }
}


export function syntheticsTestApiStepExtractedValueToHclTerraform(struct?: SyntheticsTestApiStepExtractedValue | cdktn.IResolvable): any {
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
    secure: {
      value: cdktn.booleanToHclTerraform(struct!.secure),
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
    parser: {
      value: syntheticsTestApiStepExtractedValueParserToHclTerraform(struct!.parser),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepExtractedValueParserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestApiStepExtractedValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestApiStepExtractedValue | cdktn.IResolvable | undefined {
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
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepExtractedValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._name = undefined;
      this._secure = undefined;
      this._type = undefined;
      this._parser.internalValue = undefined;
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
      this._secure = value.secure;
      this._type = value.type;
      this._parser.internalValue = value.parser;
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

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktn.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktn.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
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

  // parser - computed: false, optional: false, required: true
  private _parser = new SyntheticsTestApiStepExtractedValueParserOutputReference(this, "parser");
  public get parser() {
    return this._parser;
  }
  public putParser(value: SyntheticsTestApiStepExtractedValueParser) {
    this._parser.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser.internalValue;
  }
}

export class SyntheticsTestApiStepExtractedValueList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestApiStepExtractedValue[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestApiStepExtractedValueOutputReference {
    return new SyntheticsTestApiStepExtractedValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestApiStepRequestBasicauth {
  /**
  * Access key for `SIGV4` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#access_key SyntheticsTest#access_key}
  */
  readonly accessKey?: string;
  /**
  * Access token url for `oauth-client` or `oauth-rop` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#access_token_url SyntheticsTest#access_token_url}
  */
  readonly accessTokenUrl?: string;
  /**
  * Audience for `oauth-client` or `oauth-rop` authentication. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#audience SyntheticsTest#audience}
  */
  readonly audience?: string;
  /**
  * Client ID for `oauth-client` or `oauth-rop` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#client_id SyntheticsTest#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret for `oauth-client` or `oauth-rop` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#client_secret SyntheticsTest#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Domain for `ntlm` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#domain SyntheticsTest#domain}
  */
  readonly domain?: string;
  /**
  * Password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#password SyntheticsTest#password}
  */
  readonly password?: string;
  /**
  * Region for `SIGV4` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#region SyntheticsTest#region}
  */
  readonly region?: string;
  /**
  * Resource for `oauth-client` or `oauth-rop` authentication. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#resource SyntheticsTest#resource}
  */
  readonly resource?: string;
  /**
  * Scope for `oauth-client` or `oauth-rop` authentication. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#scope SyntheticsTest#scope}
  */
  readonly scope?: string;
  /**
  * Secret key for `SIGV4` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#secret_key SyntheticsTest#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Service name for `SIGV4` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#service_name SyntheticsTest#service_name}
  */
  readonly serviceName?: string;
  /**
  * Session token for `SIGV4` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#session_token SyntheticsTest#session_token}
  */
  readonly sessionToken?: string;
  /**
  * Token API Authentication for `oauth-client` or `oauth-rop` authentication. Valid values are `header`, `body`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#token_api_authentication SyntheticsTest#token_api_authentication}
  */
  readonly tokenApiAuthentication?: string;
  /**
  * Type of basic authentication to use when performing the test. Defaults to `"web"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type?: string;
  /**
  * Username for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#username SyntheticsTest#username}
  */
  readonly username?: string;
  /**
  * Workstation for `ntlm` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#workstation SyntheticsTest#workstation}
  */
  readonly workstation?: string;
}

export function syntheticsTestApiStepRequestBasicauthToTerraform(struct?: SyntheticsTestApiStepRequestBasicauthOutputReference | SyntheticsTestApiStepRequestBasicauth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktn.stringToTerraform(struct!.accessKey),
    access_token_url: cdktn.stringToTerraform(struct!.accessTokenUrl),
    audience: cdktn.stringToTerraform(struct!.audience),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    domain: cdktn.stringToTerraform(struct!.domain),
    password: cdktn.stringToTerraform(struct!.password),
    region: cdktn.stringToTerraform(struct!.region),
    resource: cdktn.stringToTerraform(struct!.resource),
    scope: cdktn.stringToTerraform(struct!.scope),
    secret_key: cdktn.stringToTerraform(struct!.secretKey),
    service_name: cdktn.stringToTerraform(struct!.serviceName),
    session_token: cdktn.stringToTerraform(struct!.sessionToken),
    token_api_authentication: cdktn.stringToTerraform(struct!.tokenApiAuthentication),
    type: cdktn.stringToTerraform(struct!.type),
    username: cdktn.stringToTerraform(struct!.username),
    workstation: cdktn.stringToTerraform(struct!.workstation),
  }
}


export function syntheticsTestApiStepRequestBasicauthToHclTerraform(struct?: SyntheticsTestApiStepRequestBasicauthOutputReference | SyntheticsTestApiStepRequestBasicauth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktn.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_url: {
      value: cdktn.stringToHclTerraform(struct!.accessTokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
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
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
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
    resource: {
      value: cdktn.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktn.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_token: {
      value: cdktn.stringToHclTerraform(struct!.sessionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_api_authentication: {
      value: cdktn.stringToHclTerraform(struct!.tokenApiAuthentication),
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
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workstation: {
      value: cdktn.stringToHclTerraform(struct!.workstation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestApiStepRequestBasicauthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestApiStepRequestBasicauth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._accessTokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenUrl = this._accessTokenUrl;
    }
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._sessionToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionToken = this._sessionToken;
    }
    if (this._tokenApiAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenApiAuthentication = this._tokenApiAuthentication;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._workstation !== undefined) {
      hasAnyValues = true;
      internalValueResult.workstation = this._workstation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepRequestBasicauth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._accessTokenUrl = undefined;
      this._audience = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._domain = undefined;
      this._password = undefined;
      this._region = undefined;
      this._resource = undefined;
      this._scope = undefined;
      this._secretKey = undefined;
      this._serviceName = undefined;
      this._sessionToken = undefined;
      this._tokenApiAuthentication = undefined;
      this._type = undefined;
      this._username = undefined;
      this._workstation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._accessTokenUrl = value.accessTokenUrl;
      this._audience = value.audience;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._domain = value.domain;
      this._password = value.password;
      this._region = value.region;
      this._resource = value.resource;
      this._scope = value.scope;
      this._secretKey = value.secretKey;
      this._serviceName = value.serviceName;
      this._sessionToken = value.sessionToken;
      this._tokenApiAuthentication = value.tokenApiAuthentication;
      this._type = value.type;
      this._username = value.username;
      this._workstation = value.workstation;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // access_token_url - computed: false, optional: true, required: false
  private _accessTokenUrl?: string; 
  public get accessTokenUrl() {
    return this.getStringAttribute('access_token_url');
  }
  public set accessTokenUrl(value: string) {
    this._accessTokenUrl = value;
  }
  public resetAccessTokenUrl() {
    this._accessTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenUrlInput() {
    return this._accessTokenUrl;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // session_token - computed: false, optional: true, required: false
  private _sessionToken?: string; 
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }
  public set sessionToken(value: string) {
    this._sessionToken = value;
  }
  public resetSessionToken() {
    this._sessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTokenInput() {
    return this._sessionToken;
  }

  // token_api_authentication - computed: false, optional: true, required: false
  private _tokenApiAuthentication?: string; 
  public get tokenApiAuthentication() {
    return this.getStringAttribute('token_api_authentication');
  }
  public set tokenApiAuthentication(value: string) {
    this._tokenApiAuthentication = value;
  }
  public resetTokenApiAuthentication() {
    this._tokenApiAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenApiAuthenticationInput() {
    return this._tokenApiAuthentication;
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

  // workstation - computed: false, optional: true, required: false
  private _workstation?: string; 
  public get workstation() {
    return this.getStringAttribute('workstation');
  }
  public set workstation(value: string) {
    this._workstation = value;
  }
  public resetWorkstation() {
    this._workstation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workstationInput() {
    return this._workstation;
  }
}
export interface SyntheticsTestApiStepRequestClientCertificateCert {
  /**
  * Content of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#content SyntheticsTest#content}
  */
  readonly content?: string;
  /**
  * File name for the certificate. Defaults to `"Provided in Terraform config"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#filename SyntheticsTest#filename}
  */
  readonly filename?: string;
}

export function syntheticsTestApiStepRequestClientCertificateCertToTerraform(struct?: SyntheticsTestApiStepRequestClientCertificateCertOutputReference | SyntheticsTestApiStepRequestClientCertificateCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    filename: cdktn.stringToTerraform(struct!.filename),
  }
}


export function syntheticsTestApiStepRequestClientCertificateCertToHclTerraform(struct?: SyntheticsTestApiStepRequestClientCertificateCertOutputReference | SyntheticsTestApiStepRequestClientCertificateCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktn.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestApiStepRequestClientCertificateCertOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestApiStepRequestClientCertificateCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepRequestClientCertificateCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._filename = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._filename = value.filename;
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

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}
export interface SyntheticsTestApiStepRequestClientCertificateKey {
  /**
  * Content of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#content SyntheticsTest#content}
  */
  readonly content?: string;
  /**
  * File name for the certificate. Defaults to `"Provided in Terraform config"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#filename SyntheticsTest#filename}
  */
  readonly filename?: string;
}

export function syntheticsTestApiStepRequestClientCertificateKeyToTerraform(struct?: SyntheticsTestApiStepRequestClientCertificateKeyOutputReference | SyntheticsTestApiStepRequestClientCertificateKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    filename: cdktn.stringToTerraform(struct!.filename),
  }
}


export function syntheticsTestApiStepRequestClientCertificateKeyToHclTerraform(struct?: SyntheticsTestApiStepRequestClientCertificateKeyOutputReference | SyntheticsTestApiStepRequestClientCertificateKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktn.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestApiStepRequestClientCertificateKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestApiStepRequestClientCertificateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepRequestClientCertificateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._filename = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._filename = value.filename;
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

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}
export interface SyntheticsTestApiStepRequestClientCertificate {
  /**
  * cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#cert SyntheticsTest#cert}
  */
  readonly cert: SyntheticsTestApiStepRequestClientCertificateCert;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#key SyntheticsTest#key}
  */
  readonly key: SyntheticsTestApiStepRequestClientCertificateKey;
}

export function syntheticsTestApiStepRequestClientCertificateToTerraform(struct?: SyntheticsTestApiStepRequestClientCertificateOutputReference | SyntheticsTestApiStepRequestClientCertificate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: syntheticsTestApiStepRequestClientCertificateCertToTerraform(struct!.cert),
    key: syntheticsTestApiStepRequestClientCertificateKeyToTerraform(struct!.key),
  }
}


export function syntheticsTestApiStepRequestClientCertificateToHclTerraform(struct?: SyntheticsTestApiStepRequestClientCertificateOutputReference | SyntheticsTestApiStepRequestClientCertificate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: syntheticsTestApiStepRequestClientCertificateCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepRequestClientCertificateCertList",
    },
    key: {
      value: syntheticsTestApiStepRequestClientCertificateKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepRequestClientCertificateKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestApiStepRequestClientCertificateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestApiStepRequestClientCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepRequestClientCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert.internalValue = undefined;
      this._key.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert.internalValue = value.cert;
      this._key.internalValue = value.key;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert = new SyntheticsTestApiStepRequestClientCertificateCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: SyntheticsTestApiStepRequestClientCertificateCert) {
    this._cert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // key - computed: false, optional: false, required: true
  private _key = new SyntheticsTestApiStepRequestClientCertificateKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: SyntheticsTestApiStepRequestClientCertificateKey) {
    this._key.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}
export interface SyntheticsTestApiStepRequestDefinition {
  /**
  * For SSL tests, whether or not the test should allow self signed certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#accept_self_signed SyntheticsTest#accept_self_signed}
  */
  readonly acceptSelfSigned?: boolean | cdktn.IResolvable;
  /**
  * Allows loading insecure content for a request in an API test or in a multistep API test step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#allow_insecure SyntheticsTest#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktn.IResolvable;
  /**
  * The request body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#body SyntheticsTest#body}
  */
  readonly body?: string;
  /**
  * Type of the request body. Valid values are `text/plain`, `application/json`, `text/xml`, `text/html`, `application/x-www-form-urlencoded`, `graphql`, `application/octet-stream`, `multipart/form-data`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#body_type SyntheticsTest#body_type}
  */
  readonly bodyType?: string;
  /**
  * The type of gRPC call to perform, or the MCP step call (`init`, `tool_list`, `tool_call`). Valid values are `healthcheck`, `unary`, `init`, `tool_list`, `tool_call`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#call_type SyntheticsTest#call_type}
  */
  readonly callType?: string;
  /**
  * By default, the client certificate is applied on the domain of the starting URL for browser tests. If you want your client certificate to be applied on other domains instead, add them in `certificate_domains`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#certificate_domains SyntheticsTest#certificate_domains}
  */
  readonly certificateDomains?: string[];
  /**
  * For SSL tests, whether or not the test should fail on revoked certificate in stapled OCSP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#check_certificate_revocation SyntheticsTest#check_certificate_revocation}
  */
  readonly checkCertificateRevocation?: boolean | cdktn.IResolvable;
  /**
  * For Network Path tests, an optional label displayed for the destination host in the Network Path visualization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#destination_service SyntheticsTest#destination_service}
  */
  readonly destinationService?: string;
  /**
  * For SSL tests, whether or not the test should disable fetching intermediate certificates from AIA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#disable_aia_intermediate_fetching SyntheticsTest#disable_aia_intermediate_fetching}
  */
  readonly disableAiaIntermediateFetching?: boolean | cdktn.IResolvable;
  /**
  * DNS server to use for DNS tests (`subtype = "dns"`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#dns_server SyntheticsTest#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * DNS server port to use for DNS tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#dns_server_port SyntheticsTest#dns_server_port}
  */
  readonly dnsServerPort?: string;
  /**
  * For Network Path tests, the number of packets sent to probe the destination to measure packet loss, latency, and jitter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#e2e_queries SyntheticsTest#e2e_queries}
  */
  readonly e2EQueries?: number;
  /**
  * Determines whether or not the API HTTP test should follow redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#follow_redirects SyntheticsTest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktn.IResolvable;
  /**
  * Form data to be sent when `body_type` is `multipart/form-data`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#form SyntheticsTest#form}
  */
  readonly form?: { [key: string]: string };
  /**
  * Host name to perform the test with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#host SyntheticsTest#host}
  */
  readonly host?: string;
  /**
  * HTTP version to use for an HTTP request in an API test or step. Valid values are `http1`, `http2`, `any`. Defaults to `"any"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#http_version SyntheticsTest#http_version}
  */
  readonly httpVersion?: string;
  /**
  * For Websocket tests, whether the message is treated as a base64-encoded string in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#is_message_base64_encoded SyntheticsTest#is_message_base64_encoded}
  */
  readonly isMessageBase64Encoded?: boolean | cdktn.IResolvable;
  /**
  * For Network Path tests, the maximum time-to-live (max number of hops) used in outgoing probe packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#max_ttl SyntheticsTest#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * For MCP API steps, the MCP protocol version used by the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#mcp_protocol_version SyntheticsTest#mcp_protocol_version}
  */
  readonly mcpProtocolVersion?: string;
  /**
  * For gRPC, UDP, and Websocket tests, message to send with the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#message SyntheticsTest#message}
  */
  readonly message?: string;
  /**
  * Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field. Required if `subtype` is `HTTP` or if `subtype` is `grpc` and `callType` is `unary`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#method SyntheticsTest#method}
  */
  readonly method?: string;
  /**
  * Determines whether or not to save the response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#no_saving_response_body SyntheticsTest#no_saving_response_body}
  */
  readonly noSavingResponseBody?: boolean | cdktn.IResolvable;
  /**
  * Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#number_of_packets SyntheticsTest#number_of_packets}
  */
  readonly numberOfPackets?: number;
  /**
  * Persist cookies across redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#persist_cookies SyntheticsTest#persist_cookies}
  */
  readonly persistCookies?: boolean | cdktn.IResolvable;
  /**
  * The content of a proto file as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#plain_proto_file SyntheticsTest#plain_proto_file}
  */
  readonly plainProtoFile?: string;
  /**
  * Port to use when performing the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#port SyntheticsTest#port}
  */
  readonly port?: string;
  /**
  * A protobuf JSON descriptor. **Deprecated.** Use `plain_proto_file` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#proto_json_descriptor SyntheticsTest#proto_json_descriptor}
  */
  readonly protoJsonDescriptor?: string;
  /**
  * For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#servername SyntheticsTest#servername}
  */
  readonly servername?: string;
  /**
  * The gRPC service on which you want to perform the gRPC call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#service SyntheticsTest#service}
  */
  readonly service?: string;
  /**
  * This will turn on a traceroute probe to discover all gateways along the path to the host destination. For ICMP tests (`subtype = "icmp"`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#should_track_hops SyntheticsTest#should_track_hops}
  */
  readonly shouldTrackHops?: boolean | cdktn.IResolvable;
  /**
  * For Network Path tests, an optional label displayed for the source host in the Network Path visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#source_service SyntheticsTest#source_service}
  */
  readonly sourceService?: string;
  /**
  * For TCP Network Path tests, the TCP traceroute strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#tcp_method SyntheticsTest#tcp_method}
  */
  readonly tcpMethod?: string;
  /**
  * Timeout in seconds for the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#timeout SyntheticsTest#timeout}
  */
  readonly timeout?: number;
  /**
  * For MCP API steps, the JSON-encoded arguments to pass to the tool when `call_type` is `tool_call`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#tool_args SyntheticsTest#tool_args}
  */
  readonly toolArgs?: string;
  /**
  * For MCP API steps, the name of the tool to call. Required when `call_type` is `tool_call`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#tool_name SyntheticsTest#tool_name}
  */
  readonly toolName?: string;
  /**
  * For Network Path tests, the number of traceroute path tracings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#traceroute_queries SyntheticsTest#traceroute_queries}
  */
  readonly tracerouteQueries?: number;
  /**
  * The URL to send the request to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#url SyntheticsTest#url}
  */
  readonly url?: string;
}

export function syntheticsTestApiStepRequestDefinitionToTerraform(struct?: SyntheticsTestApiStepRequestDefinitionOutputReference | SyntheticsTestApiStepRequestDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_self_signed: cdktn.booleanToTerraform(struct!.acceptSelfSigned),
    allow_insecure: cdktn.booleanToTerraform(struct!.allowInsecure),
    body: cdktn.stringToTerraform(struct!.body),
    body_type: cdktn.stringToTerraform(struct!.bodyType),
    call_type: cdktn.stringToTerraform(struct!.callType),
    certificate_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.certificateDomains),
    check_certificate_revocation: cdktn.booleanToTerraform(struct!.checkCertificateRevocation),
    destination_service: cdktn.stringToTerraform(struct!.destinationService),
    disable_aia_intermediate_fetching: cdktn.booleanToTerraform(struct!.disableAiaIntermediateFetching),
    dns_server: cdktn.stringToTerraform(struct!.dnsServer),
    dns_server_port: cdktn.stringToTerraform(struct!.dnsServerPort),
    e2e_queries: cdktn.numberToTerraform(struct!.e2EQueries),
    follow_redirects: cdktn.booleanToTerraform(struct!.followRedirects),
    form: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.form),
    host: cdktn.stringToTerraform(struct!.host),
    http_version: cdktn.stringToTerraform(struct!.httpVersion),
    is_message_base64_encoded: cdktn.booleanToTerraform(struct!.isMessageBase64Encoded),
    max_ttl: cdktn.numberToTerraform(struct!.maxTtl),
    mcp_protocol_version: cdktn.stringToTerraform(struct!.mcpProtocolVersion),
    message: cdktn.stringToTerraform(struct!.message),
    method: cdktn.stringToTerraform(struct!.method),
    no_saving_response_body: cdktn.booleanToTerraform(struct!.noSavingResponseBody),
    number_of_packets: cdktn.numberToTerraform(struct!.numberOfPackets),
    persist_cookies: cdktn.booleanToTerraform(struct!.persistCookies),
    plain_proto_file: cdktn.stringToTerraform(struct!.plainProtoFile),
    port: cdktn.stringToTerraform(struct!.port),
    proto_json_descriptor: cdktn.stringToTerraform(struct!.protoJsonDescriptor),
    servername: cdktn.stringToTerraform(struct!.servername),
    service: cdktn.stringToTerraform(struct!.service),
    should_track_hops: cdktn.booleanToTerraform(struct!.shouldTrackHops),
    source_service: cdktn.stringToTerraform(struct!.sourceService),
    tcp_method: cdktn.stringToTerraform(struct!.tcpMethod),
    timeout: cdktn.numberToTerraform(struct!.timeout),
    tool_args: cdktn.stringToTerraform(struct!.toolArgs),
    tool_name: cdktn.stringToTerraform(struct!.toolName),
    traceroute_queries: cdktn.numberToTerraform(struct!.tracerouteQueries),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function syntheticsTestApiStepRequestDefinitionToHclTerraform(struct?: SyntheticsTestApiStepRequestDefinitionOutputReference | SyntheticsTestApiStepRequestDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_self_signed: {
      value: cdktn.booleanToHclTerraform(struct!.acceptSelfSigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_insecure: {
      value: cdktn.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    body: {
      value: cdktn.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_type: {
      value: cdktn.stringToHclTerraform(struct!.bodyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    call_type: {
      value: cdktn.stringToHclTerraform(struct!.callType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_domains: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.certificateDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    check_certificate_revocation: {
      value: cdktn.booleanToHclTerraform(struct!.checkCertificateRevocation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_service: {
      value: cdktn.stringToHclTerraform(struct!.destinationService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_aia_intermediate_fetching: {
      value: cdktn.booleanToHclTerraform(struct!.disableAiaIntermediateFetching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_server: {
      value: cdktn.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server_port: {
      value: cdktn.stringToHclTerraform(struct!.dnsServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e2e_queries: {
      value: cdktn.numberToHclTerraform(struct!.e2EQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    follow_redirects: {
      value: cdktn.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    form: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.form),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_version: {
      value: cdktn.stringToHclTerraform(struct!.httpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_message_base64_encoded: {
      value: cdktn.booleanToHclTerraform(struct!.isMessageBase64Encoded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_ttl: {
      value: cdktn.numberToHclTerraform(struct!.maxTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mcp_protocol_version: {
      value: cdktn.stringToHclTerraform(struct!.mcpProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktn.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_saving_response_body: {
      value: cdktn.booleanToHclTerraform(struct!.noSavingResponseBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_of_packets: {
      value: cdktn.numberToHclTerraform(struct!.numberOfPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_cookies: {
      value: cdktn.booleanToHclTerraform(struct!.persistCookies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    plain_proto_file: {
      value: cdktn.stringToHclTerraform(struct!.plainProtoFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto_json_descriptor: {
      value: cdktn.stringToHclTerraform(struct!.protoJsonDescriptor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servername: {
      value: cdktn.stringToHclTerraform(struct!.servername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_track_hops: {
      value: cdktn.booleanToHclTerraform(struct!.shouldTrackHops),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_service: {
      value: cdktn.stringToHclTerraform(struct!.sourceService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_method: {
      value: cdktn.stringToHclTerraform(struct!.tcpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktn.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tool_args: {
      value: cdktn.stringToHclTerraform(struct!.toolArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool_name: {
      value: cdktn.stringToHclTerraform(struct!.toolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traceroute_queries: {
      value: cdktn.numberToHclTerraform(struct!.tracerouteQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestApiStepRequestDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestApiStepRequestDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptSelfSigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptSelfSigned = this._acceptSelfSigned;
    }
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._bodyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyType = this._bodyType;
    }
    if (this._callType !== undefined) {
      hasAnyValues = true;
      internalValueResult.callType = this._callType;
    }
    if (this._certificateDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateDomains = this._certificateDomains;
    }
    if (this._checkCertificateRevocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkCertificateRevocation = this._checkCertificateRevocation;
    }
    if (this._destinationService !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationService = this._destinationService;
    }
    if (this._disableAiaIntermediateFetching !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAiaIntermediateFetching = this._disableAiaIntermediateFetching;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._dnsServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerPort = this._dnsServerPort;
    }
    if (this._e2EQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.e2EQueries = this._e2EQueries;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._form !== undefined) {
      hasAnyValues = true;
      internalValueResult.form = this._form;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._isMessageBase64Encoded !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMessageBase64Encoded = this._isMessageBase64Encoded;
    }
    if (this._maxTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl;
    }
    if (this._mcpProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpProtocolVersion = this._mcpProtocolVersion;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._noSavingResponseBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSavingResponseBody = this._noSavingResponseBody;
    }
    if (this._numberOfPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfPackets = this._numberOfPackets;
    }
    if (this._persistCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistCookies = this._persistCookies;
    }
    if (this._plainProtoFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainProtoFile = this._plainProtoFile;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protoJsonDescriptor !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoJsonDescriptor = this._protoJsonDescriptor;
    }
    if (this._servername !== undefined) {
      hasAnyValues = true;
      internalValueResult.servername = this._servername;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._shouldTrackHops !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTrackHops = this._shouldTrackHops;
    }
    if (this._sourceService !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceService = this._sourceService;
    }
    if (this._tcpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpMethod = this._tcpMethod;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._toolArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolArgs = this._toolArgs;
    }
    if (this._toolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolName = this._toolName;
    }
    if (this._tracerouteQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracerouteQueries = this._tracerouteQueries;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepRequestDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptSelfSigned = undefined;
      this._allowInsecure = undefined;
      this._body = undefined;
      this._bodyType = undefined;
      this._callType = undefined;
      this._certificateDomains = undefined;
      this._checkCertificateRevocation = undefined;
      this._destinationService = undefined;
      this._disableAiaIntermediateFetching = undefined;
      this._dnsServer = undefined;
      this._dnsServerPort = undefined;
      this._e2EQueries = undefined;
      this._followRedirects = undefined;
      this._form = undefined;
      this._host = undefined;
      this._httpVersion = undefined;
      this._isMessageBase64Encoded = undefined;
      this._maxTtl = undefined;
      this._mcpProtocolVersion = undefined;
      this._message = undefined;
      this._method = undefined;
      this._noSavingResponseBody = undefined;
      this._numberOfPackets = undefined;
      this._persistCookies = undefined;
      this._plainProtoFile = undefined;
      this._port = undefined;
      this._protoJsonDescriptor = undefined;
      this._servername = undefined;
      this._service = undefined;
      this._shouldTrackHops = undefined;
      this._sourceService = undefined;
      this._tcpMethod = undefined;
      this._timeout = undefined;
      this._toolArgs = undefined;
      this._toolName = undefined;
      this._tracerouteQueries = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptSelfSigned = value.acceptSelfSigned;
      this._allowInsecure = value.allowInsecure;
      this._body = value.body;
      this._bodyType = value.bodyType;
      this._callType = value.callType;
      this._certificateDomains = value.certificateDomains;
      this._checkCertificateRevocation = value.checkCertificateRevocation;
      this._destinationService = value.destinationService;
      this._disableAiaIntermediateFetching = value.disableAiaIntermediateFetching;
      this._dnsServer = value.dnsServer;
      this._dnsServerPort = value.dnsServerPort;
      this._e2EQueries = value.e2EQueries;
      this._followRedirects = value.followRedirects;
      this._form = value.form;
      this._host = value.host;
      this._httpVersion = value.httpVersion;
      this._isMessageBase64Encoded = value.isMessageBase64Encoded;
      this._maxTtl = value.maxTtl;
      this._mcpProtocolVersion = value.mcpProtocolVersion;
      this._message = value.message;
      this._method = value.method;
      this._noSavingResponseBody = value.noSavingResponseBody;
      this._numberOfPackets = value.numberOfPackets;
      this._persistCookies = value.persistCookies;
      this._plainProtoFile = value.plainProtoFile;
      this._port = value.port;
      this._protoJsonDescriptor = value.protoJsonDescriptor;
      this._servername = value.servername;
      this._service = value.service;
      this._shouldTrackHops = value.shouldTrackHops;
      this._sourceService = value.sourceService;
      this._tcpMethod = value.tcpMethod;
      this._timeout = value.timeout;
      this._toolArgs = value.toolArgs;
      this._toolName = value.toolName;
      this._tracerouteQueries = value.tracerouteQueries;
      this._url = value.url;
    }
  }

  // accept_self_signed - computed: false, optional: true, required: false
  private _acceptSelfSigned?: boolean | cdktn.IResolvable; 
  public get acceptSelfSigned() {
    return this.getBooleanAttribute('accept_self_signed');
  }
  public set acceptSelfSigned(value: boolean | cdktn.IResolvable) {
    this._acceptSelfSigned = value;
  }
  public resetAcceptSelfSigned() {
    this._acceptSelfSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptSelfSignedInput() {
    return this._acceptSelfSigned;
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktn.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktn.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // body_type - computed: false, optional: true, required: false
  private _bodyType?: string; 
  public get bodyType() {
    return this.getStringAttribute('body_type');
  }
  public set bodyType(value: string) {
    this._bodyType = value;
  }
  public resetBodyType() {
    this._bodyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTypeInput() {
    return this._bodyType;
  }

  // call_type - computed: false, optional: true, required: false
  private _callType?: string; 
  public get callType() {
    return this.getStringAttribute('call_type');
  }
  public set callType(value: string) {
    this._callType = value;
  }
  public resetCallType() {
    this._callType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callTypeInput() {
    return this._callType;
  }

  // certificate_domains - computed: false, optional: true, required: false
  private _certificateDomains?: string[]; 
  public get certificateDomains() {
    return this.getListAttribute('certificate_domains');
  }
  public set certificateDomains(value: string[]) {
    this._certificateDomains = value;
  }
  public resetCertificateDomains() {
    this._certificateDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDomainsInput() {
    return this._certificateDomains;
  }

  // check_certificate_revocation - computed: false, optional: true, required: false
  private _checkCertificateRevocation?: boolean | cdktn.IResolvable; 
  public get checkCertificateRevocation() {
    return this.getBooleanAttribute('check_certificate_revocation');
  }
  public set checkCertificateRevocation(value: boolean | cdktn.IResolvable) {
    this._checkCertificateRevocation = value;
  }
  public resetCheckCertificateRevocation() {
    this._checkCertificateRevocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkCertificateRevocationInput() {
    return this._checkCertificateRevocation;
  }

  // destination_service - computed: false, optional: true, required: false
  private _destinationService?: string; 
  public get destinationService() {
    return this.getStringAttribute('destination_service');
  }
  public set destinationService(value: string) {
    this._destinationService = value;
  }
  public resetDestinationService() {
    this._destinationService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationServiceInput() {
    return this._destinationService;
  }

  // disable_aia_intermediate_fetching - computed: false, optional: true, required: false
  private _disableAiaIntermediateFetching?: boolean | cdktn.IResolvable; 
  public get disableAiaIntermediateFetching() {
    return this.getBooleanAttribute('disable_aia_intermediate_fetching');
  }
  public set disableAiaIntermediateFetching(value: boolean | cdktn.IResolvable) {
    this._disableAiaIntermediateFetching = value;
  }
  public resetDisableAiaIntermediateFetching() {
    this._disableAiaIntermediateFetching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAiaIntermediateFetchingInput() {
    return this._disableAiaIntermediateFetching;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // dns_server_port - computed: false, optional: true, required: false
  private _dnsServerPort?: string; 
  public get dnsServerPort() {
    return this.getStringAttribute('dns_server_port');
  }
  public set dnsServerPort(value: string) {
    this._dnsServerPort = value;
  }
  public resetDnsServerPort() {
    this._dnsServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerPortInput() {
    return this._dnsServerPort;
  }

  // e2e_queries - computed: false, optional: true, required: false
  private _e2EQueries?: number; 
  public get e2EQueries() {
    return this.getNumberAttribute('e2e_queries');
  }
  public set e2EQueries(value: number) {
    this._e2EQueries = value;
  }
  public resetE2EQueries() {
    this._e2EQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e2EQueriesInput() {
    return this._e2EQueries;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktn.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktn.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // form - computed: false, optional: true, required: false
  private _form?: { [key: string]: string }; 
  public get form() {
    return this.getStringMapAttribute('form');
  }
  public set form(value: { [key: string]: string }) {
    this._form = value;
  }
  public resetForm() {
    this._form = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formInput() {
    return this._form;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // is_message_base64_encoded - computed: false, optional: true, required: false
  private _isMessageBase64Encoded?: boolean | cdktn.IResolvable; 
  public get isMessageBase64Encoded() {
    return this.getBooleanAttribute('is_message_base64_encoded');
  }
  public set isMessageBase64Encoded(value: boolean | cdktn.IResolvable) {
    this._isMessageBase64Encoded = value;
  }
  public resetIsMessageBase64Encoded() {
    this._isMessageBase64Encoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMessageBase64EncodedInput() {
    return this._isMessageBase64Encoded;
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // mcp_protocol_version - computed: false, optional: true, required: false
  private _mcpProtocolVersion?: string; 
  public get mcpProtocolVersion() {
    return this.getStringAttribute('mcp_protocol_version');
  }
  public set mcpProtocolVersion(value: string) {
    this._mcpProtocolVersion = value;
  }
  public resetMcpProtocolVersion() {
    this._mcpProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpProtocolVersionInput() {
    return this._mcpProtocolVersion;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // no_saving_response_body - computed: false, optional: true, required: false
  private _noSavingResponseBody?: boolean | cdktn.IResolvable; 
  public get noSavingResponseBody() {
    return this.getBooleanAttribute('no_saving_response_body');
  }
  public set noSavingResponseBody(value: boolean | cdktn.IResolvable) {
    this._noSavingResponseBody = value;
  }
  public resetNoSavingResponseBody() {
    this._noSavingResponseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSavingResponseBodyInput() {
    return this._noSavingResponseBody;
  }

  // number_of_packets - computed: false, optional: true, required: false
  private _numberOfPackets?: number; 
  public get numberOfPackets() {
    return this.getNumberAttribute('number_of_packets');
  }
  public set numberOfPackets(value: number) {
    this._numberOfPackets = value;
  }
  public resetNumberOfPackets() {
    this._numberOfPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfPacketsInput() {
    return this._numberOfPackets;
  }

  // persist_cookies - computed: false, optional: true, required: false
  private _persistCookies?: boolean | cdktn.IResolvable; 
  public get persistCookies() {
    return this.getBooleanAttribute('persist_cookies');
  }
  public set persistCookies(value: boolean | cdktn.IResolvable) {
    this._persistCookies = value;
  }
  public resetPersistCookies() {
    this._persistCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCookiesInput() {
    return this._persistCookies;
  }

  // plain_proto_file - computed: false, optional: true, required: false
  private _plainProtoFile?: string; 
  public get plainProtoFile() {
    return this.getStringAttribute('plain_proto_file');
  }
  public set plainProtoFile(value: string) {
    this._plainProtoFile = value;
  }
  public resetPlainProtoFile() {
    this._plainProtoFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainProtoFileInput() {
    return this._plainProtoFile;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto_json_descriptor - computed: false, optional: true, required: false
  private _protoJsonDescriptor?: string; 
  public get protoJsonDescriptor() {
    return this.getStringAttribute('proto_json_descriptor');
  }
  public set protoJsonDescriptor(value: string) {
    this._protoJsonDescriptor = value;
  }
  public resetProtoJsonDescriptor() {
    this._protoJsonDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoJsonDescriptorInput() {
    return this._protoJsonDescriptor;
  }

  // servername - computed: false, optional: true, required: false
  private _servername?: string; 
  public get servername() {
    return this.getStringAttribute('servername');
  }
  public set servername(value: string) {
    this._servername = value;
  }
  public resetServername() {
    this._servername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // should_track_hops - computed: false, optional: true, required: false
  private _shouldTrackHops?: boolean | cdktn.IResolvable; 
  public get shouldTrackHops() {
    return this.getBooleanAttribute('should_track_hops');
  }
  public set shouldTrackHops(value: boolean | cdktn.IResolvable) {
    this._shouldTrackHops = value;
  }
  public resetShouldTrackHops() {
    this._shouldTrackHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTrackHopsInput() {
    return this._shouldTrackHops;
  }

  // source_service - computed: false, optional: true, required: false
  private _sourceService?: string; 
  public get sourceService() {
    return this.getStringAttribute('source_service');
  }
  public set sourceService(value: string) {
    this._sourceService = value;
  }
  public resetSourceService() {
    this._sourceService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceInput() {
    return this._sourceService;
  }

  // tcp_method - computed: false, optional: true, required: false
  private _tcpMethod?: string; 
  public get tcpMethod() {
    return this.getStringAttribute('tcp_method');
  }
  public set tcpMethod(value: string) {
    this._tcpMethod = value;
  }
  public resetTcpMethod() {
    this._tcpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMethodInput() {
    return this._tcpMethod;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tool_args - computed: false, optional: true, required: false
  private _toolArgs?: string; 
  public get toolArgs() {
    return this.getStringAttribute('tool_args');
  }
  public set toolArgs(value: string) {
    this._toolArgs = value;
  }
  public resetToolArgs() {
    this._toolArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolArgsInput() {
    return this._toolArgs;
  }

  // tool_name - computed: false, optional: true, required: false
  private _toolName?: string; 
  public get toolName() {
    return this.getStringAttribute('tool_name');
  }
  public set toolName(value: string) {
    this._toolName = value;
  }
  public resetToolName() {
    this._toolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolNameInput() {
    return this._toolName;
  }

  // traceroute_queries - computed: false, optional: true, required: false
  private _tracerouteQueries?: number; 
  public get tracerouteQueries() {
    return this.getNumberAttribute('traceroute_queries');
  }
  public set tracerouteQueries(value: number) {
    this._tracerouteQueries = value;
  }
  public resetTracerouteQueries() {
    this._tracerouteQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracerouteQueriesInput() {
    return this._tracerouteQueries;
  }

  // url - computed: false, optional: true, required: false
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
}
export interface SyntheticsTestApiStepRequestFile {
  /**
  * Content of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#content SyntheticsTest#content}
  */
  readonly content?: string;
  /**
  * Encoding of the file content. Must be `base64` when content contains base64-encoded data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#encoding SyntheticsTest#encoding}
  */
  readonly encoding?: string;
  /**
  * Name of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Original name of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#original_file_name SyntheticsTest#original_file_name}
  */
  readonly originalFileName?: string;
  /**
  * Size of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#size SyntheticsTest#size}
  */
  readonly size: number;
  /**
  * Type of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type: string;
}

export function syntheticsTestApiStepRequestFileToTerraform(struct?: SyntheticsTestApiStepRequestFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    name: cdktn.stringToTerraform(struct!.name),
    original_file_name: cdktn.stringToTerraform(struct!.originalFileName),
    size: cdktn.numberToTerraform(struct!.size),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function syntheticsTestApiStepRequestFileToHclTerraform(struct?: SyntheticsTestApiStepRequestFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original_file_name: {
      value: cdktn.stringToHclTerraform(struct!.originalFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SyntheticsTestApiStepRequestFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestApiStepRequestFile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._originalFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalFileName = this._originalFileName;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepRequestFile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._encoding = undefined;
      this._name = undefined;
      this._originalFileName = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._encoding = value.encoding;
      this._name = value.name;
      this._originalFileName = value.originalFileName;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // bucket_key - computed: true, optional: false, required: false
  public get bucketKey() {
    return this.getStringAttribute('bucket_key');
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

  // original_file_name - computed: false, optional: true, required: false
  private _originalFileName?: string; 
  public get originalFileName() {
    return this.getStringAttribute('original_file_name');
  }
  public set originalFileName(value: string) {
    this._originalFileName = value;
  }
  public resetOriginalFileName() {
    this._originalFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalFileNameInput() {
    return this._originalFileName;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

export class SyntheticsTestApiStepRequestFileList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestApiStepRequestFile[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestApiStepRequestFileOutputReference {
    return new SyntheticsTestApiStepRequestFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestApiStepRequestProxy {
  /**
  * Header name and value map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#headers SyntheticsTest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * URL of the proxy to perform the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#url SyntheticsTest#url}
  */
  readonly url: string;
}

export function syntheticsTestApiStepRequestProxyToTerraform(struct?: SyntheticsTestApiStepRequestProxyOutputReference | SyntheticsTestApiStepRequestProxy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.headers),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function syntheticsTestApiStepRequestProxyToHclTerraform(struct?: SyntheticsTestApiStepRequestProxyOutputReference | SyntheticsTestApiStepRequestProxy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestApiStepRequestProxyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestApiStepRequestProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepRequestProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._url = value.url;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface SyntheticsTestApiStepRetry {
  /**
  * Number of retries needed to consider a location as failed before sending a notification alert. Maximum value: `3` for `api` tests, `2` for `browser` and `mobile` tests. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#count SyntheticsTest#count}
  */
  readonly count?: number;
  /**
  * Interval between a failed test and the next retry in milliseconds. Maximum value: `5000`. Defaults to `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#interval SyntheticsTest#interval}
  */
  readonly interval?: number;
}

export function syntheticsTestApiStepRetryToTerraform(struct?: SyntheticsTestApiStepRetryOutputReference | SyntheticsTestApiStepRetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function syntheticsTestApiStepRetryToHclTerraform(struct?: SyntheticsTestApiStepRetryOutputReference | SyntheticsTestApiStepRetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestApiStepRetryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestApiStepRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStepRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._interval = value.interval;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface SyntheticsTestApiStep {
  /**
  * Determines whether or not to continue with test if this step fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#allow_failure SyntheticsTest#allow_failure}
  */
  readonly allowFailure?: boolean | cdktn.IResolvable;
  /**
  * Determines whether or not to exit the test if the step succeeds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#exit_if_succeed SyntheticsTest#exit_if_succeed}
  */
  readonly exitIfSucceed?: boolean | cdktn.IResolvable;
  /**
  * Generate variables using JavaScript.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#extracted_values_from_script SyntheticsTest#extracted_values_from_script}
  */
  readonly extractedValuesFromScript?: string;
  /**
  * Determines whether or not to consider the entire test as failed if this step fails. Can be used only if `allow_failure` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#is_critical SyntheticsTest#is_critical}
  */
  readonly isCritical?: boolean | cdktn.IResolvable;
  /**
  * The name of the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Header name and value map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_headers SyntheticsTest#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * Metadata to include when performing the gRPC request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_metadata SyntheticsTest#request_metadata}
  */
  readonly requestMetadata?: { [key: string]: string };
  /**
  * Query arguments name and value map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_query SyntheticsTest#request_query}
  */
  readonly requestQuery?: { [key: string]: string };
  /**
  * Public ID of the test to be played as part of a `playSubTest` step type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#subtest_public_id SyntheticsTest#subtest_public_id}
  */
  readonly subtestPublicId?: string;
  /**
  * The subtype of the Synthetic multistep API test step. Valid values are `http`, `grpc`, `ssl`, `dns`, `tcp`, `udp`, `icmp`, `websocket`, `mcp`, `wait`, `playSubTest`. Defaults to `"http"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#subtype SyntheticsTest#subtype}
  */
  readonly subtype?: string;
  /**
  * The time to wait in seconds. Minimum value: 0. Maximum value: 180.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#value SyntheticsTest#value}
  */
  readonly value?: number;
  /**
  * assertion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#assertion SyntheticsTest#assertion}
  */
  readonly assertion?: SyntheticsTestApiStepAssertion[] | cdktn.IResolvable;
  /**
  * extracted_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#extracted_value SyntheticsTest#extracted_value}
  */
  readonly extractedValue?: SyntheticsTestApiStepExtractedValue[] | cdktn.IResolvable;
  /**
  * request_basicauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_basicauth SyntheticsTest#request_basicauth}
  */
  readonly requestBasicauth?: SyntheticsTestApiStepRequestBasicauth;
  /**
  * request_client_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_client_certificate SyntheticsTest#request_client_certificate}
  */
  readonly requestClientCertificate?: SyntheticsTestApiStepRequestClientCertificate;
  /**
  * request_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_definition SyntheticsTest#request_definition}
  */
  readonly requestDefinition?: SyntheticsTestApiStepRequestDefinition;
  /**
  * request_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_file SyntheticsTest#request_file}
  */
  readonly requestFile?: SyntheticsTestApiStepRequestFile[] | cdktn.IResolvable;
  /**
  * request_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request_proxy SyntheticsTest#request_proxy}
  */
  readonly requestProxy?: SyntheticsTestApiStepRequestProxy;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#retry SyntheticsTest#retry}
  */
  readonly retry?: SyntheticsTestApiStepRetry;
}

export function syntheticsTestApiStepToTerraform(struct?: SyntheticsTestApiStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_failure: cdktn.booleanToTerraform(struct!.allowFailure),
    exit_if_succeed: cdktn.booleanToTerraform(struct!.exitIfSucceed),
    extracted_values_from_script: cdktn.stringToTerraform(struct!.extractedValuesFromScript),
    is_critical: cdktn.booleanToTerraform(struct!.isCritical),
    name: cdktn.stringToTerraform(struct!.name),
    request_headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.requestHeaders),
    request_metadata: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.requestMetadata),
    request_query: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.requestQuery),
    subtest_public_id: cdktn.stringToTerraform(struct!.subtestPublicId),
    subtype: cdktn.stringToTerraform(struct!.subtype),
    value: cdktn.numberToTerraform(struct!.value),
    assertion: cdktn.listMapper(syntheticsTestApiStepAssertionToTerraform, true)(struct!.assertion),
    extracted_value: cdktn.listMapper(syntheticsTestApiStepExtractedValueToTerraform, true)(struct!.extractedValue),
    request_basicauth: syntheticsTestApiStepRequestBasicauthToTerraform(struct!.requestBasicauth),
    request_client_certificate: syntheticsTestApiStepRequestClientCertificateToTerraform(struct!.requestClientCertificate),
    request_definition: syntheticsTestApiStepRequestDefinitionToTerraform(struct!.requestDefinition),
    request_file: cdktn.listMapper(syntheticsTestApiStepRequestFileToTerraform, true)(struct!.requestFile),
    request_proxy: syntheticsTestApiStepRequestProxyToTerraform(struct!.requestProxy),
    retry: syntheticsTestApiStepRetryToTerraform(struct!.retry),
  }
}


export function syntheticsTestApiStepToHclTerraform(struct?: SyntheticsTestApiStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_failure: {
      value: cdktn.booleanToHclTerraform(struct!.allowFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exit_if_succeed: {
      value: cdktn.booleanToHclTerraform(struct!.exitIfSucceed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extracted_values_from_script: {
      value: cdktn.stringToHclTerraform(struct!.extractedValuesFromScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_critical: {
      value: cdktn.booleanToHclTerraform(struct!.isCritical),
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
    request_headers: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_metadata: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.requestMetadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_query: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.requestQuery),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    subtest_public_id: {
      value: cdktn.stringToHclTerraform(struct!.subtestPublicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtype: {
      value: cdktn.stringToHclTerraform(struct!.subtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    assertion: {
      value: cdktn.listMapperHcl(syntheticsTestApiStepAssertionToHclTerraform, true)(struct!.assertion),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepAssertionList",
    },
    extracted_value: {
      value: cdktn.listMapperHcl(syntheticsTestApiStepExtractedValueToHclTerraform, true)(struct!.extractedValue),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepExtractedValueList",
    },
    request_basicauth: {
      value: syntheticsTestApiStepRequestBasicauthToHclTerraform(struct!.requestBasicauth),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepRequestBasicauthList",
    },
    request_client_certificate: {
      value: syntheticsTestApiStepRequestClientCertificateToHclTerraform(struct!.requestClientCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepRequestClientCertificateList",
    },
    request_definition: {
      value: syntheticsTestApiStepRequestDefinitionToHclTerraform(struct!.requestDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepRequestDefinitionList",
    },
    request_file: {
      value: cdktn.listMapperHcl(syntheticsTestApiStepRequestFileToHclTerraform, true)(struct!.requestFile),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepRequestFileList",
    },
    request_proxy: {
      value: syntheticsTestApiStepRequestProxyToHclTerraform(struct!.requestProxy),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepRequestProxyList",
    },
    retry: {
      value: syntheticsTestApiStepRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestApiStepRetryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestApiStepOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestApiStep | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFailure = this._allowFailure;
    }
    if (this._exitIfSucceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.exitIfSucceed = this._exitIfSucceed;
    }
    if (this._extractedValuesFromScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractedValuesFromScript = this._extractedValuesFromScript;
    }
    if (this._isCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCritical = this._isCritical;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._requestMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMetadata = this._requestMetadata;
    }
    if (this._requestQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestQuery = this._requestQuery;
    }
    if (this._subtestPublicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtestPublicId = this._subtestPublicId;
    }
    if (this._subtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtype = this._subtype;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._assertion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertion = this._assertion?.internalValue;
    }
    if (this._extractedValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractedValue = this._extractedValue?.internalValue;
    }
    if (this._requestBasicauth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBasicauth = this._requestBasicauth?.internalValue;
    }
    if (this._requestClientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestClientCertificate = this._requestClientCertificate?.internalValue;
    }
    if (this._requestDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestDefinition = this._requestDefinition?.internalValue;
    }
    if (this._requestFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestFile = this._requestFile?.internalValue;
    }
    if (this._requestProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestProxy = this._requestProxy?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestApiStep | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowFailure = undefined;
      this._exitIfSucceed = undefined;
      this._extractedValuesFromScript = undefined;
      this._isCritical = undefined;
      this._name = undefined;
      this._requestHeaders = undefined;
      this._requestMetadata = undefined;
      this._requestQuery = undefined;
      this._subtestPublicId = undefined;
      this._subtype = undefined;
      this._value = undefined;
      this._assertion.internalValue = undefined;
      this._extractedValue.internalValue = undefined;
      this._requestBasicauth.internalValue = undefined;
      this._requestClientCertificate.internalValue = undefined;
      this._requestDefinition.internalValue = undefined;
      this._requestFile.internalValue = undefined;
      this._requestProxy.internalValue = undefined;
      this._retry.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowFailure = value.allowFailure;
      this._exitIfSucceed = value.exitIfSucceed;
      this._extractedValuesFromScript = value.extractedValuesFromScript;
      this._isCritical = value.isCritical;
      this._name = value.name;
      this._requestHeaders = value.requestHeaders;
      this._requestMetadata = value.requestMetadata;
      this._requestQuery = value.requestQuery;
      this._subtestPublicId = value.subtestPublicId;
      this._subtype = value.subtype;
      this._value = value.value;
      this._assertion.internalValue = value.assertion;
      this._extractedValue.internalValue = value.extractedValue;
      this._requestBasicauth.internalValue = value.requestBasicauth;
      this._requestClientCertificate.internalValue = value.requestClientCertificate;
      this._requestDefinition.internalValue = value.requestDefinition;
      this._requestFile.internalValue = value.requestFile;
      this._requestProxy.internalValue = value.requestProxy;
      this._retry.internalValue = value.retry;
    }
  }

  // allow_failure - computed: false, optional: true, required: false
  private _allowFailure?: boolean | cdktn.IResolvable; 
  public get allowFailure() {
    return this.getBooleanAttribute('allow_failure');
  }
  public set allowFailure(value: boolean | cdktn.IResolvable) {
    this._allowFailure = value;
  }
  public resetAllowFailure() {
    this._allowFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFailureInput() {
    return this._allowFailure;
  }

  // exit_if_succeed - computed: false, optional: true, required: false
  private _exitIfSucceed?: boolean | cdktn.IResolvable; 
  public get exitIfSucceed() {
    return this.getBooleanAttribute('exit_if_succeed');
  }
  public set exitIfSucceed(value: boolean | cdktn.IResolvable) {
    this._exitIfSucceed = value;
  }
  public resetExitIfSucceed() {
    this._exitIfSucceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitIfSucceedInput() {
    return this._exitIfSucceed;
  }

  // extracted_values_from_script - computed: false, optional: true, required: false
  private _extractedValuesFromScript?: string; 
  public get extractedValuesFromScript() {
    return this.getStringAttribute('extracted_values_from_script');
  }
  public set extractedValuesFromScript(value: string) {
    this._extractedValuesFromScript = value;
  }
  public resetExtractedValuesFromScript() {
    this._extractedValuesFromScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractedValuesFromScriptInput() {
    return this._extractedValuesFromScript;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_critical - computed: false, optional: true, required: false
  private _isCritical?: boolean | cdktn.IResolvable; 
  public get isCritical() {
    return this.getBooleanAttribute('is_critical');
  }
  public set isCritical(value: boolean | cdktn.IResolvable) {
    this._isCritical = value;
  }
  public resetIsCritical() {
    this._isCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCriticalInput() {
    return this._isCritical;
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

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // request_metadata - computed: false, optional: true, required: false
  private _requestMetadata?: { [key: string]: string }; 
  public get requestMetadata() {
    return this.getStringMapAttribute('request_metadata');
  }
  public set requestMetadata(value: { [key: string]: string }) {
    this._requestMetadata = value;
  }
  public resetRequestMetadata() {
    this._requestMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMetadataInput() {
    return this._requestMetadata;
  }

  // request_query - computed: false, optional: true, required: false
  private _requestQuery?: { [key: string]: string }; 
  public get requestQuery() {
    return this.getStringMapAttribute('request_query');
  }
  public set requestQuery(value: { [key: string]: string }) {
    this._requestQuery = value;
  }
  public resetRequestQuery() {
    this._requestQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestQueryInput() {
    return this._requestQuery;
  }

  // subtest_public_id - computed: false, optional: true, required: false
  private _subtestPublicId?: string; 
  public get subtestPublicId() {
    return this.getStringAttribute('subtest_public_id');
  }
  public set subtestPublicId(value: string) {
    this._subtestPublicId = value;
  }
  public resetSubtestPublicId() {
    this._subtestPublicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtestPublicIdInput() {
    return this._subtestPublicId;
  }

  // subtype - computed: false, optional: true, required: false
  private _subtype?: string; 
  public get subtype() {
    return this.getStringAttribute('subtype');
  }
  public set subtype(value: string) {
    this._subtype = value;
  }
  public resetSubtype() {
    this._subtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtypeInput() {
    return this._subtype;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // assertion - computed: false, optional: true, required: false
  private _assertion = new SyntheticsTestApiStepAssertionList(this, "assertion", false);
  public get assertion() {
    return this._assertion;
  }
  public putAssertion(value: SyntheticsTestApiStepAssertion[] | cdktn.IResolvable) {
    this._assertion.internalValue = value;
  }
  public resetAssertion() {
    this._assertion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionInput() {
    return this._assertion.internalValue;
  }

  // extracted_value - computed: false, optional: true, required: false
  private _extractedValue = new SyntheticsTestApiStepExtractedValueList(this, "extracted_value", false);
  public get extractedValue() {
    return this._extractedValue;
  }
  public putExtractedValue(value: SyntheticsTestApiStepExtractedValue[] | cdktn.IResolvable) {
    this._extractedValue.internalValue = value;
  }
  public resetExtractedValue() {
    this._extractedValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractedValueInput() {
    return this._extractedValue.internalValue;
  }

  // request_basicauth - computed: false, optional: true, required: false
  private _requestBasicauth = new SyntheticsTestApiStepRequestBasicauthOutputReference(this, "request_basicauth");
  public get requestBasicauth() {
    return this._requestBasicauth;
  }
  public putRequestBasicauth(value: SyntheticsTestApiStepRequestBasicauth) {
    this._requestBasicauth.internalValue = value;
  }
  public resetRequestBasicauth() {
    this._requestBasicauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBasicauthInput() {
    return this._requestBasicauth.internalValue;
  }

  // request_client_certificate - computed: false, optional: true, required: false
  private _requestClientCertificate = new SyntheticsTestApiStepRequestClientCertificateOutputReference(this, "request_client_certificate");
  public get requestClientCertificate() {
    return this._requestClientCertificate;
  }
  public putRequestClientCertificate(value: SyntheticsTestApiStepRequestClientCertificate) {
    this._requestClientCertificate.internalValue = value;
  }
  public resetRequestClientCertificate() {
    this._requestClientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestClientCertificateInput() {
    return this._requestClientCertificate.internalValue;
  }

  // request_definition - computed: false, optional: true, required: false
  private _requestDefinition = new SyntheticsTestApiStepRequestDefinitionOutputReference(this, "request_definition");
  public get requestDefinition() {
    return this._requestDefinition;
  }
  public putRequestDefinition(value: SyntheticsTestApiStepRequestDefinition) {
    this._requestDefinition.internalValue = value;
  }
  public resetRequestDefinition() {
    this._requestDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDefinitionInput() {
    return this._requestDefinition.internalValue;
  }

  // request_file - computed: false, optional: true, required: false
  private _requestFile = new SyntheticsTestApiStepRequestFileList(this, "request_file", false);
  public get requestFile() {
    return this._requestFile;
  }
  public putRequestFile(value: SyntheticsTestApiStepRequestFile[] | cdktn.IResolvable) {
    this._requestFile.internalValue = value;
  }
  public resetRequestFile() {
    this._requestFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestFileInput() {
    return this._requestFile.internalValue;
  }

  // request_proxy - computed: false, optional: true, required: false
  private _requestProxy = new SyntheticsTestApiStepRequestProxyOutputReference(this, "request_proxy");
  public get requestProxy() {
    return this._requestProxy;
  }
  public putRequestProxy(value: SyntheticsTestApiStepRequestProxy) {
    this._requestProxy.internalValue = value;
  }
  public resetRequestProxy() {
    this._requestProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestProxyInput() {
    return this._requestProxy.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new SyntheticsTestApiStepRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: SyntheticsTestApiStepRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }
}

export class SyntheticsTestApiStepList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestApiStep[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestApiStepOutputReference {
    return new SyntheticsTestApiStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestAssertionTargetMcpCapabilities {
  /**
  * List of MCP server capabilities to assert against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#capabilities SyntheticsTest#capabilities}
  */
  readonly capabilities: string[];
}

export function syntheticsTestAssertionTargetMcpCapabilitiesToTerraform(struct?: SyntheticsTestAssertionTargetMcpCapabilitiesOutputReference | SyntheticsTestAssertionTargetMcpCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.capabilities),
  }
}


export function syntheticsTestAssertionTargetMcpCapabilitiesToHclTerraform(struct?: SyntheticsTestAssertionTargetMcpCapabilitiesOutputReference | SyntheticsTestAssertionTargetMcpCapabilities): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capabilities: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.capabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestAssertionTargetMcpCapabilitiesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestAssertionTargetMcpCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestAssertionTargetMcpCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capabilities = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capabilities = value.capabilities;
    }
  }

  // capabilities - computed: false, optional: false, required: true
  private _capabilities?: string[]; 
  public get capabilities() {
    return this.getListAttribute('capabilities');
  }
  public set capabilities(value: string[]) {
    this._capabilities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
  }
}
export interface SyntheticsTestAssertionTargetjsonpath {
  /**
  * The element from the list of results to assert on. Select from `firstElementMatches` (the first element in the list), `everyElementMatches` (every element in the list), `atLeastOneElementMatches` (at least one element in the list), or `serializationMatches` (the serialized value of the list). Defaults to `"firstElementMatches"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#elementsoperator SyntheticsTest#elementsoperator}
  */
  readonly elementsoperator?: string;
  /**
  * The JSON path to assert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#jsonpath SyntheticsTest#jsonpath}
  */
  readonly jsonpath: string;
  /**
  * The specific operator to use on the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#operator SyntheticsTest#operator}
  */
  readonly operator: string;
  /**
  * Expected matching value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#targetvalue SyntheticsTest#targetvalue}
  */
  readonly targetvalue?: string;
}

export function syntheticsTestAssertionTargetjsonpathToTerraform(struct?: SyntheticsTestAssertionTargetjsonpathOutputReference | SyntheticsTestAssertionTargetjsonpath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elementsoperator: cdktn.stringToTerraform(struct!.elementsoperator),
    jsonpath: cdktn.stringToTerraform(struct!.jsonpath),
    operator: cdktn.stringToTerraform(struct!.operator),
    targetvalue: cdktn.stringToTerraform(struct!.targetvalue),
  }
}


export function syntheticsTestAssertionTargetjsonpathToHclTerraform(struct?: SyntheticsTestAssertionTargetjsonpathOutputReference | SyntheticsTestAssertionTargetjsonpath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elementsoperator: {
      value: cdktn.stringToHclTerraform(struct!.elementsoperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jsonpath: {
      value: cdktn.stringToHclTerraform(struct!.jsonpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targetvalue: {
      value: cdktn.stringToHclTerraform(struct!.targetvalue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestAssertionTargetjsonpathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestAssertionTargetjsonpath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementsoperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementsoperator = this._elementsoperator;
    }
    if (this._jsonpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonpath = this._jsonpath;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._targetvalue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetvalue = this._targetvalue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestAssertionTargetjsonpath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elementsoperator = undefined;
      this._jsonpath = undefined;
      this._operator = undefined;
      this._targetvalue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elementsoperator = value.elementsoperator;
      this._jsonpath = value.jsonpath;
      this._operator = value.operator;
      this._targetvalue = value.targetvalue;
    }
  }

  // elementsoperator - computed: false, optional: true, required: false
  private _elementsoperator?: string; 
  public get elementsoperator() {
    return this.getStringAttribute('elementsoperator');
  }
  public set elementsoperator(value: string) {
    this._elementsoperator = value;
  }
  public resetElementsoperator() {
    this._elementsoperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsoperatorInput() {
    return this._elementsoperator;
  }

  // jsonpath - computed: false, optional: false, required: true
  private _jsonpath?: string; 
  public get jsonpath() {
    return this.getStringAttribute('jsonpath');
  }
  public set jsonpath(value: string) {
    this._jsonpath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonpathInput() {
    return this._jsonpath;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // targetvalue - computed: false, optional: true, required: false
  private _targetvalue?: string; 
  public get targetvalue() {
    return this.getStringAttribute('targetvalue');
  }
  public set targetvalue(value: string) {
    this._targetvalue = value;
  }
  public resetTargetvalue() {
    this._targetvalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetvalueInput() {
    return this._targetvalue;
  }
}
export interface SyntheticsTestAssertionTargetjsonschema {
  /**
  * The JSON Schema to validate the body against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#jsonschema SyntheticsTest#jsonschema}
  */
  readonly jsonschema: string;
  /**
  * The meta schema to use for the JSON Schema. Defaults to `"draft-07"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#metaschema SyntheticsTest#metaschema}
  */
  readonly metaschema?: string;
}

export function syntheticsTestAssertionTargetjsonschemaToTerraform(struct?: SyntheticsTestAssertionTargetjsonschemaOutputReference | SyntheticsTestAssertionTargetjsonschema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktn.stringToTerraform(struct!.jsonschema),
    metaschema: cdktn.stringToTerraform(struct!.metaschema),
  }
}


export function syntheticsTestAssertionTargetjsonschemaToHclTerraform(struct?: SyntheticsTestAssertionTargetjsonschemaOutputReference | SyntheticsTestAssertionTargetjsonschema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktn.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metaschema: {
      value: cdktn.stringToHclTerraform(struct!.metaschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestAssertionTargetjsonschemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestAssertionTargetjsonschema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._metaschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.metaschema = this._metaschema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestAssertionTargetjsonschema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._metaschema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._metaschema = value.metaschema;
    }
  }

  // jsonschema - computed: false, optional: false, required: true
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // metaschema - computed: false, optional: true, required: false
  private _metaschema?: string; 
  public get metaschema() {
    return this.getStringAttribute('metaschema');
  }
  public set metaschema(value: string) {
    this._metaschema = value;
  }
  public resetMetaschema() {
    this._metaschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaschemaInput() {
    return this._metaschema;
  }
}
export interface SyntheticsTestAssertionTargetxpath {
  /**
  * The specific operator to use on the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#operator SyntheticsTest#operator}
  */
  readonly operator: string;
  /**
  * Expected matching value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#targetvalue SyntheticsTest#targetvalue}
  */
  readonly targetvalue?: string;
  /**
  * The xpath to assert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#xpath SyntheticsTest#xpath}
  */
  readonly xpath: string;
}

export function syntheticsTestAssertionTargetxpathToTerraform(struct?: SyntheticsTestAssertionTargetxpathOutputReference | SyntheticsTestAssertionTargetxpath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktn.stringToTerraform(struct!.operator),
    targetvalue: cdktn.stringToTerraform(struct!.targetvalue),
    xpath: cdktn.stringToTerraform(struct!.xpath),
  }
}


export function syntheticsTestAssertionTargetxpathToHclTerraform(struct?: SyntheticsTestAssertionTargetxpathOutputReference | SyntheticsTestAssertionTargetxpath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    targetvalue: {
      value: cdktn.stringToHclTerraform(struct!.targetvalue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xpath: {
      value: cdktn.stringToHclTerraform(struct!.xpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestAssertionTargetxpathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestAssertionTargetxpath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._targetvalue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetvalue = this._targetvalue;
    }
    if (this._xpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.xpath = this._xpath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestAssertionTargetxpath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._targetvalue = undefined;
      this._xpath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._targetvalue = value.targetvalue;
      this._xpath = value.xpath;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // targetvalue - computed: false, optional: true, required: false
  private _targetvalue?: string; 
  public get targetvalue() {
    return this.getStringAttribute('targetvalue');
  }
  public set targetvalue(value: string) {
    this._targetvalue = value;
  }
  public resetTargetvalue() {
    this._targetvalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetvalueInput() {
    return this._targetvalue;
  }

  // xpath - computed: false, optional: false, required: true
  private _xpath?: string; 
  public get xpath() {
    return this.getStringAttribute('xpath');
  }
  public set xpath(value: string) {
    this._xpath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xpathInput() {
    return this._xpath;
  }
}
export interface SyntheticsTestAssertion {
  /**
  * If assertion type is `javascript`, this is the JavaScript code that performs the assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#code SyntheticsTest#code}
  */
  readonly code?: string;
  /**
  * Assertion operator. **Note:** Only some combinations of `type` and `operator` are valid. Refer to `config.assertions` in the [Datadog API reference](https://docs.datadoghq.com/api/latest/synthetics/#create-an-api-test). Valid values are `contains`, `doesNotContain`, `is`, `isNot`, `lessThan`, `lessThanOrEqual`, `moreThan`, `moreThanOrEqual`, `matches`, `doesNotMatch`, `validates`, `isInMoreThan`, `isInLessThan`, `doesNotExist`, `isUndefined`, `validatesJSONPath`, `validatesJSONSchema`, `validatesXPath`, `md5`, `sha1`, `sha256`, `is`, `isNot`, `lessThan`, `lessThanOrEqual`, `moreThan`, `moreThanOrEqual`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#operator SyntheticsTest#operator}
  */
  readonly operator?: string;
  /**
  * If assertion type is `header` or `grpcMetadata`, this is the header name. For other assertion types, this is an aggregation property: `avg`, `min`, `max`, or `stddev`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#property SyntheticsTest#property}
  */
  readonly property?: string;
  /**
  * Expected value. **Note:** Depends on the assertion type. Refer to `config.assertions` in the [Datadog API reference](https://docs.datadoghq.com/api/latest/synthetics/#create-an-api-test).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#target SyntheticsTest#target}
  */
  readonly target?: string;
  /**
  * Timings scope for response time assertions. Valid values are `all`, `withoutDNS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#timings_scope SyntheticsTest#timings_scope}
  */
  readonly timingsScope?: string;
  /**
  * Type of assertion. **Note:** Only some combinations of `type` and `operator` are valid. For API tests, refer to `config.assertions` in the [Datadog API reference](https://docs.datadoghq.com/api/latest/synthetics/#create-an-api-test). For Network Path tests, refer to `config.assertions` in the [Datadog API reference](https://docs.datadoghq.com/api/latest/synthetics/#create-a-network-path-test). Valid values are `body`, `header`, `statusCode`, `certificate`, `responseTime`, `property`, `recordEvery`, `recordSome`, `tlsVersion`, `minTlsVersion`, `latency`, `packetLossPercentage`, `packetsReceived`, `networkHop`, `receivedMessage`, `grpcHealthcheckStatus`, `grpcMetadata`, `grpcProto`, `connection`, `multiNetworkHop`, `jitter`, `mcpToolNameLength`, `mcpToolCount`, `bodyHash`, `javascript`, `mcpRespectsSpecification`, `mcpServerCapabilities`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * target_mcp_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#target_mcp_capabilities SyntheticsTest#target_mcp_capabilities}
  */
  readonly targetMcpCapabilities?: SyntheticsTestAssertionTargetMcpCapabilities;
  /**
  * targetjsonpath block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#targetjsonpath SyntheticsTest#targetjsonpath}
  */
  readonly targetjsonpath?: SyntheticsTestAssertionTargetjsonpath;
  /**
  * targetjsonschema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#targetjsonschema SyntheticsTest#targetjsonschema}
  */
  readonly targetjsonschema?: SyntheticsTestAssertionTargetjsonschema;
  /**
  * targetxpath block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#targetxpath SyntheticsTest#targetxpath}
  */
  readonly targetxpath?: SyntheticsTestAssertionTargetxpath;
}

export function syntheticsTestAssertionToTerraform(struct?: SyntheticsTestAssertion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktn.stringToTerraform(struct!.code),
    operator: cdktn.stringToTerraform(struct!.operator),
    property: cdktn.stringToTerraform(struct!.property),
    target: cdktn.stringToTerraform(struct!.target),
    timings_scope: cdktn.stringToTerraform(struct!.timingsScope),
    type: cdktn.stringToTerraform(struct!.type),
    target_mcp_capabilities: syntheticsTestAssertionTargetMcpCapabilitiesToTerraform(struct!.targetMcpCapabilities),
    targetjsonpath: syntheticsTestAssertionTargetjsonpathToTerraform(struct!.targetjsonpath),
    targetjsonschema: syntheticsTestAssertionTargetjsonschemaToTerraform(struct!.targetjsonschema),
    targetxpath: syntheticsTestAssertionTargetxpathToTerraform(struct!.targetxpath),
  }
}


export function syntheticsTestAssertionToHclTerraform(struct?: SyntheticsTestAssertion | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktn.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktn.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktn.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktn.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timings_scope: {
      value: cdktn.stringToHclTerraform(struct!.timingsScope),
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
    target_mcp_capabilities: {
      value: syntheticsTestAssertionTargetMcpCapabilitiesToHclTerraform(struct!.targetMcpCapabilities),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestAssertionTargetMcpCapabilitiesList",
    },
    targetjsonpath: {
      value: syntheticsTestAssertionTargetjsonpathToHclTerraform(struct!.targetjsonpath),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestAssertionTargetjsonpathList",
    },
    targetjsonschema: {
      value: syntheticsTestAssertionTargetjsonschemaToHclTerraform(struct!.targetjsonschema),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestAssertionTargetjsonschemaList",
    },
    targetxpath: {
      value: syntheticsTestAssertionTargetxpathToHclTerraform(struct!.targetxpath),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestAssertionTargetxpathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestAssertionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestAssertion | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timingsScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.timingsScope = this._timingsScope;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._targetMcpCapabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetMcpCapabilities = this._targetMcpCapabilities?.internalValue;
    }
    if (this._targetjsonpath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetjsonpath = this._targetjsonpath?.internalValue;
    }
    if (this._targetjsonschema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetjsonschema = this._targetjsonschema?.internalValue;
    }
    if (this._targetxpath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetxpath = this._targetxpath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestAssertion | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._operator = undefined;
      this._property = undefined;
      this._target = undefined;
      this._timingsScope = undefined;
      this._type = undefined;
      this._targetMcpCapabilities.internalValue = undefined;
      this._targetjsonpath.internalValue = undefined;
      this._targetjsonschema.internalValue = undefined;
      this._targetxpath.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._operator = value.operator;
      this._property = value.property;
      this._target = value.target;
      this._timingsScope = value.timingsScope;
      this._type = value.type;
      this._targetMcpCapabilities.internalValue = value.targetMcpCapabilities;
      this._targetjsonpath.internalValue = value.targetjsonpath;
      this._targetjsonschema.internalValue = value.targetjsonschema;
      this._targetxpath.internalValue = value.targetxpath;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // property - computed: false, optional: true, required: false
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  public resetProperty() {
    this._property = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timings_scope - computed: false, optional: true, required: false
  private _timingsScope?: string; 
  public get timingsScope() {
    return this.getStringAttribute('timings_scope');
  }
  public set timingsScope(value: string) {
    this._timingsScope = value;
  }
  public resetTimingsScope() {
    this._timingsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timingsScopeInput() {
    return this._timingsScope;
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

  // target_mcp_capabilities - computed: false, optional: true, required: false
  private _targetMcpCapabilities = new SyntheticsTestAssertionTargetMcpCapabilitiesOutputReference(this, "target_mcp_capabilities");
  public get targetMcpCapabilities() {
    return this._targetMcpCapabilities;
  }
  public putTargetMcpCapabilities(value: SyntheticsTestAssertionTargetMcpCapabilities) {
    this._targetMcpCapabilities.internalValue = value;
  }
  public resetTargetMcpCapabilities() {
    this._targetMcpCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMcpCapabilitiesInput() {
    return this._targetMcpCapabilities.internalValue;
  }

  // targetjsonpath - computed: false, optional: true, required: false
  private _targetjsonpath = new SyntheticsTestAssertionTargetjsonpathOutputReference(this, "targetjsonpath");
  public get targetjsonpath() {
    return this._targetjsonpath;
  }
  public putTargetjsonpath(value: SyntheticsTestAssertionTargetjsonpath) {
    this._targetjsonpath.internalValue = value;
  }
  public resetTargetjsonpath() {
    this._targetjsonpath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetjsonpathInput() {
    return this._targetjsonpath.internalValue;
  }

  // targetjsonschema - computed: false, optional: true, required: false
  private _targetjsonschema = new SyntheticsTestAssertionTargetjsonschemaOutputReference(this, "targetjsonschema");
  public get targetjsonschema() {
    return this._targetjsonschema;
  }
  public putTargetjsonschema(value: SyntheticsTestAssertionTargetjsonschema) {
    this._targetjsonschema.internalValue = value;
  }
  public resetTargetjsonschema() {
    this._targetjsonschema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetjsonschemaInput() {
    return this._targetjsonschema.internalValue;
  }

  // targetxpath - computed: false, optional: true, required: false
  private _targetxpath = new SyntheticsTestAssertionTargetxpathOutputReference(this, "targetxpath");
  public get targetxpath() {
    return this._targetxpath;
  }
  public putTargetxpath(value: SyntheticsTestAssertionTargetxpath) {
    this._targetxpath.internalValue = value;
  }
  public resetTargetxpath() {
    this._targetxpath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetxpathInput() {
    return this._targetxpath.internalValue;
  }
}

export class SyntheticsTestAssertionList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestAssertion[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestAssertionOutputReference {
    return new SyntheticsTestAssertionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestBrowserStepParamsDragDropOptionsOffset {
  /**
  * Horizontal offset in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#x SyntheticsTest#x}
  */
  readonly x?: number;
  /**
  * Vertical offset in pixels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#y SyntheticsTest#y}
  */
  readonly y?: number;
}

export function syntheticsTestBrowserStepParamsDragDropOptionsOffsetToTerraform(struct?: SyntheticsTestBrowserStepParamsDragDropOptionsOffsetOutputReference | SyntheticsTestBrowserStepParamsDragDropOptionsOffset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x: cdktn.numberToTerraform(struct!.x),
    y: cdktn.numberToTerraform(struct!.y),
  }
}


export function syntheticsTestBrowserStepParamsDragDropOptionsOffsetToHclTerraform(struct?: SyntheticsTestBrowserStepParamsDragDropOptionsOffsetOutputReference | SyntheticsTestBrowserStepParamsDragDropOptionsOffset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x: {
      value: cdktn.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktn.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestBrowserStepParamsDragDropOptionsOffsetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestBrowserStepParamsDragDropOptionsOffset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestBrowserStepParamsDragDropOptionsOffset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._x = undefined;
      this._y = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // x - computed: false, optional: true, required: false
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: true, required: false
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}
export interface SyntheticsTestBrowserStepParamsDragDropOptions {
  /**
  * Delay in milliseconds before performing the action (0–9999).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#delay SyntheticsTest#delay}
  */
  readonly delay?: number;
  /**
  * offset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#offset SyntheticsTest#offset}
  */
  readonly offset?: SyntheticsTestBrowserStepParamsDragDropOptionsOffset;
}

export function syntheticsTestBrowserStepParamsDragDropOptionsToTerraform(struct?: SyntheticsTestBrowserStepParamsDragDropOptionsOutputReference | SyntheticsTestBrowserStepParamsDragDropOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktn.numberToTerraform(struct!.delay),
    offset: syntheticsTestBrowserStepParamsDragDropOptionsOffsetToTerraform(struct!.offset),
  }
}


export function syntheticsTestBrowserStepParamsDragDropOptionsToHclTerraform(struct?: SyntheticsTestBrowserStepParamsDragDropOptionsOutputReference | SyntheticsTestBrowserStepParamsDragDropOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktn.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset: {
      value: syntheticsTestBrowserStepParamsDragDropOptionsOffsetToHclTerraform(struct!.offset),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestBrowserStepParamsDragDropOptionsOffsetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestBrowserStepParamsDragDropOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestBrowserStepParamsDragDropOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._offset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestBrowserStepParamsDragDropOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delay = undefined;
      this._offset.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delay = value.delay;
      this._offset.internalValue = value.offset;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // offset - computed: false, optional: true, required: false
  private _offset = new SyntheticsTestBrowserStepParamsDragDropOptionsOffsetOutputReference(this, "offset");
  public get offset() {
    return this._offset;
  }
  public putOffset(value: SyntheticsTestBrowserStepParamsDragDropOptionsOffset) {
    this._offset.internalValue = value;
  }
  public resetOffset() {
    this._offset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset.internalValue;
  }
}
export interface SyntheticsTestBrowserStepParamsElementUserLocatorValue {
  /**
  * Defaults to `"css"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#value SyntheticsTest#value}
  */
  readonly value: string;
}

export function syntheticsTestBrowserStepParamsElementUserLocatorValueToTerraform(struct?: SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference | SyntheticsTestBrowserStepParamsElementUserLocatorValue): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function syntheticsTestBrowserStepParamsElementUserLocatorValueToHclTerraform(struct?: SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference | SyntheticsTestBrowserStepParamsElementUserLocatorValue): any {
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

export class SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestBrowserStepParamsElementUserLocatorValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestBrowserStepParamsElementUserLocatorValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
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
export interface SyntheticsTestBrowserStepParamsElementUserLocator {
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#fail_test_on_cannot_locate SyntheticsTest#fail_test_on_cannot_locate}
  */
  readonly failTestOnCannotLocate?: boolean | cdktn.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#value SyntheticsTest#value}
  */
  readonly value: SyntheticsTestBrowserStepParamsElementUserLocatorValue;
}

export function syntheticsTestBrowserStepParamsElementUserLocatorToTerraform(struct?: SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference | SyntheticsTestBrowserStepParamsElementUserLocator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_test_on_cannot_locate: cdktn.booleanToTerraform(struct!.failTestOnCannotLocate),
    value: syntheticsTestBrowserStepParamsElementUserLocatorValueToTerraform(struct!.value),
  }
}


export function syntheticsTestBrowserStepParamsElementUserLocatorToHclTerraform(struct?: SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference | SyntheticsTestBrowserStepParamsElementUserLocator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_test_on_cannot_locate: {
      value: cdktn.booleanToHclTerraform(struct!.failTestOnCannotLocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: syntheticsTestBrowserStepParamsElementUserLocatorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestBrowserStepParamsElementUserLocatorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestBrowserStepParamsElementUserLocator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failTestOnCannotLocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.failTestOnCannotLocate = this._failTestOnCannotLocate;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestBrowserStepParamsElementUserLocator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failTestOnCannotLocate = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failTestOnCannotLocate = value.failTestOnCannotLocate;
      this._value.internalValue = value.value;
    }
  }

  // fail_test_on_cannot_locate - computed: false, optional: true, required: false
  private _failTestOnCannotLocate?: boolean | cdktn.IResolvable; 
  public get failTestOnCannotLocate() {
    return this.getBooleanAttribute('fail_test_on_cannot_locate');
  }
  public set failTestOnCannotLocate(value: boolean | cdktn.IResolvable) {
    this._failTestOnCannotLocate = value;
  }
  public resetFailTestOnCannotLocate() {
    this._failTestOnCannotLocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failTestOnCannotLocateInput() {
    return this._failTestOnCannotLocate;
  }

  // value - computed: false, optional: false, required: true
  private _value = new SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SyntheticsTestBrowserStepParamsElementUserLocatorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SyntheticsTestBrowserStepParamsPattern {
  /**
  * Type of pattern to use for the step. Valid values are `regex`, `x_path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type?: string;
  /**
  * Pattern to use for the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#value SyntheticsTest#value}
  */
  readonly value?: string;
}

export function syntheticsTestBrowserStepParamsPatternToTerraform(struct?: SyntheticsTestBrowserStepParamsPatternOutputReference | SyntheticsTestBrowserStepParamsPattern): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function syntheticsTestBrowserStepParamsPatternToHclTerraform(struct?: SyntheticsTestBrowserStepParamsPatternOutputReference | SyntheticsTestBrowserStepParamsPattern): any {
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

export class SyntheticsTestBrowserStepParamsPatternOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestBrowserStepParamsPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestBrowserStepParamsPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
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
}
export interface SyntheticsTestBrowserStepParamsVariable {
  /**
  * Example of the extracted variable. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#example SyntheticsTest#example}
  */
  readonly example?: string;
  /**
  * Name of the extracted variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#name SyntheticsTest#name}
  */
  readonly name?: string;
  /**
  * Whether the value of this variable will be obfuscated in test results. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#secure SyntheticsTest#secure}
  */
  readonly secure?: boolean | cdktn.IResolvable;
}

export function syntheticsTestBrowserStepParamsVariableToTerraform(struct?: SyntheticsTestBrowserStepParamsVariableOutputReference | SyntheticsTestBrowserStepParamsVariable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    example: cdktn.stringToTerraform(struct!.example),
    name: cdktn.stringToTerraform(struct!.name),
    secure: cdktn.booleanToTerraform(struct!.secure),
  }
}


export function syntheticsTestBrowserStepParamsVariableToHclTerraform(struct?: SyntheticsTestBrowserStepParamsVariableOutputReference | SyntheticsTestBrowserStepParamsVariable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    example: {
      value: cdktn.stringToHclTerraform(struct!.example),
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
    secure: {
      value: cdktn.booleanToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestBrowserStepParamsVariableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestBrowserStepParamsVariable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestBrowserStepParamsVariable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._example = undefined;
      this._name = undefined;
      this._secure = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._example = value.example;
      this._name = value.name;
      this._secure = value.secure;
    }
  }

  // example - computed: false, optional: true, required: false
  private _example?: string; 
  public get example() {
    return this.getStringAttribute('example');
  }
  public set example(value: string) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
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

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktn.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktn.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }
}
export interface SyntheticsTestBrowserStepParams {
  /**
  * Whether to append the `value` to existing text input content for a "typeText" step. By default, content is cleared before text input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#append_to_content SyntheticsTest#append_to_content}
  */
  readonly appendToContent?: boolean | cdktn.IResolvable;
  /**
  * Name of the attribute to use for an "assert attribute" step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#attribute SyntheticsTest#attribute}
  */
  readonly attribute?: string;
  /**
  * Check type to use for an assertion step. Valid values are `equals`, `notEquals`, `contains`, `notContains`, `startsWith`, `notStartsWith`, `greater`, `lower`, `greaterEquals`, `lowerEquals`, `matchRegex`, `between`, `isEmpty`, `notIsEmpty`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#check SyntheticsTest#check}
  */
  readonly check?: string;
  /**
  * Type of click to use for a "click" step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#click_type SyntheticsTest#click_type}
  */
  readonly clickType?: string;
  /**
  * Whether to use `element.click()` for a "click" step. This is a more reliable way to interact with elements but does not emulate a real user interaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#click_with_javascript SyntheticsTest#click_with_javascript}
  */
  readonly clickWithJavascript?: boolean | cdktn.IResolvable;
  /**
  * Javascript code to use for the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#code SyntheticsTest#code}
  */
  readonly code?: string;
  /**
  * Delay between each key stroke for a "type test" step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#delay SyntheticsTest#delay}
  */
  readonly delay?: number;
  /**
  * Element to use for the step, JSON encoded string. Refer to the examples for a usage example showing the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#element SyntheticsTest#element}
  */
  readonly element?: string;
  /**
  * Details of the email for an "assert email" step, JSON encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#email SyntheticsTest#email}
  */
  readonly email?: string;
  /**
  * JSON encoded string used for an "assert download" step. Refer to the examples for a usage example showing the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#file SyntheticsTest#file}
  */
  readonly file?: string;
  /**
  * Details of the files for an "upload files" step, JSON encoded string. Refer to the examples for a usage example showing the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#files SyntheticsTest#files}
  */
  readonly files?: string;
  /**
  * Modifier to use for a "press key" step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#modifiers SyntheticsTest#modifiers}
  */
  readonly modifiers?: string[];
  /**
  * ID of the tab to play the subtest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#playing_tab_id SyntheticsTest#playing_tab_id}
  */
  readonly playingTabId?: string;
  /**
  * Request for an API step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#request SyntheticsTest#request}
  */
  readonly request?: string;
  /**
  * Details of the requests for an "assert request" step, JSON encoded string. Refer to the examples for a usage example showing the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#requests SyntheticsTest#requests}
  */
  readonly requests?: string;
  /**
  * ID of the Synthetics test to use as subtest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#subtest_public_id SyntheticsTest#subtest_public_id}
  */
  readonly subtestPublicId?: string;
  /**
  * Value of the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#value SyntheticsTest#value}
  */
  readonly value?: string;
  /**
  * For "file upload" steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#with_click SyntheticsTest#with_click}
  */
  readonly withClick?: boolean | cdktn.IResolvable;
  /**
  * X coordinates for a "scroll step".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#x SyntheticsTest#x}
  */
  readonly x?: number;
  /**
  * Y coordinates for a "scroll step".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#y SyntheticsTest#y}
  */
  readonly y?: number;
  /**
  * drag_drop_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#drag_drop_options SyntheticsTest#drag_drop_options}
  */
  readonly dragDropOptions?: SyntheticsTestBrowserStepParamsDragDropOptions;
  /**
  * element_user_locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#element_user_locator SyntheticsTest#element_user_locator}
  */
  readonly elementUserLocator?: SyntheticsTestBrowserStepParamsElementUserLocator;
  /**
  * pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#pattern SyntheticsTest#pattern}
  */
  readonly pattern?: SyntheticsTestBrowserStepParamsPattern;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#variable SyntheticsTest#variable}
  */
  readonly variable?: SyntheticsTestBrowserStepParamsVariable;
}

export function syntheticsTestBrowserStepParamsToTerraform(struct?: SyntheticsTestBrowserStepParamsOutputReference | SyntheticsTestBrowserStepParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append_to_content: cdktn.booleanToTerraform(struct!.appendToContent),
    attribute: cdktn.stringToTerraform(struct!.attribute),
    check: cdktn.stringToTerraform(struct!.check),
    click_type: cdktn.stringToTerraform(struct!.clickType),
    click_with_javascript: cdktn.booleanToTerraform(struct!.clickWithJavascript),
    code: cdktn.stringToTerraform(struct!.code),
    delay: cdktn.numberToTerraform(struct!.delay),
    element: cdktn.stringToTerraform(struct!.element),
    email: cdktn.stringToTerraform(struct!.email),
    file: cdktn.stringToTerraform(struct!.file),
    files: cdktn.stringToTerraform(struct!.files),
    modifiers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.modifiers),
    playing_tab_id: cdktn.stringToTerraform(struct!.playingTabId),
    request: cdktn.stringToTerraform(struct!.request),
    requests: cdktn.stringToTerraform(struct!.requests),
    subtest_public_id: cdktn.stringToTerraform(struct!.subtestPublicId),
    value: cdktn.stringToTerraform(struct!.value),
    with_click: cdktn.booleanToTerraform(struct!.withClick),
    x: cdktn.numberToTerraform(struct!.x),
    y: cdktn.numberToTerraform(struct!.y),
    drag_drop_options: syntheticsTestBrowserStepParamsDragDropOptionsToTerraform(struct!.dragDropOptions),
    element_user_locator: syntheticsTestBrowserStepParamsElementUserLocatorToTerraform(struct!.elementUserLocator),
    pattern: syntheticsTestBrowserStepParamsPatternToTerraform(struct!.pattern),
    variable: syntheticsTestBrowserStepParamsVariableToTerraform(struct!.variable),
  }
}


export function syntheticsTestBrowserStepParamsToHclTerraform(struct?: SyntheticsTestBrowserStepParamsOutputReference | SyntheticsTestBrowserStepParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append_to_content: {
      value: cdktn.booleanToHclTerraform(struct!.appendToContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    attribute: {
      value: cdktn.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check: {
      value: cdktn.stringToHclTerraform(struct!.check),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    click_type: {
      value: cdktn.stringToHclTerraform(struct!.clickType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    click_with_javascript: {
      value: cdktn.booleanToHclTerraform(struct!.clickWithJavascript),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code: {
      value: cdktn.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay: {
      value: cdktn.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    element: {
      value: cdktn.stringToHclTerraform(struct!.element),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktn.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktn.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    files: {
      value: cdktn.stringToHclTerraform(struct!.files),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modifiers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.modifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    playing_tab_id: {
      value: cdktn.stringToHclTerraform(struct!.playingTabId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: cdktn.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests: {
      value: cdktn.stringToHclTerraform(struct!.requests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subtest_public_id: {
      value: cdktn.stringToHclTerraform(struct!.subtestPublicId),
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
    with_click: {
      value: cdktn.booleanToHclTerraform(struct!.withClick),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x: {
      value: cdktn.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktn.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drag_drop_options: {
      value: syntheticsTestBrowserStepParamsDragDropOptionsToHclTerraform(struct!.dragDropOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestBrowserStepParamsDragDropOptionsList",
    },
    element_user_locator: {
      value: syntheticsTestBrowserStepParamsElementUserLocatorToHclTerraform(struct!.elementUserLocator),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestBrowserStepParamsElementUserLocatorList",
    },
    pattern: {
      value: syntheticsTestBrowserStepParamsPatternToHclTerraform(struct!.pattern),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestBrowserStepParamsPatternList",
    },
    variable: {
      value: syntheticsTestBrowserStepParamsVariableToHclTerraform(struct!.variable),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestBrowserStepParamsVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestBrowserStepParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestBrowserStepParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendToContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendToContent = this._appendToContent;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._clickType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickType = this._clickType;
    }
    if (this._clickWithJavascript !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickWithJavascript = this._clickWithJavascript;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._element !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._modifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifiers = this._modifiers;
    }
    if (this._playingTabId !== undefined) {
      hasAnyValues = true;
      internalValueResult.playingTabId = this._playingTabId;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    if (this._subtestPublicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtestPublicId = this._subtestPublicId;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._withClick !== undefined) {
      hasAnyValues = true;
      internalValueResult.withClick = this._withClick;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    if (this._dragDropOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dragDropOptions = this._dragDropOptions?.internalValue;
    }
    if (this._elementUserLocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementUserLocator = this._elementUserLocator?.internalValue;
    }
    if (this._pattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern?.internalValue;
    }
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestBrowserStepParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appendToContent = undefined;
      this._attribute = undefined;
      this._check = undefined;
      this._clickType = undefined;
      this._clickWithJavascript = undefined;
      this._code = undefined;
      this._delay = undefined;
      this._element = undefined;
      this._email = undefined;
      this._file = undefined;
      this._files = undefined;
      this._modifiers = undefined;
      this._playingTabId = undefined;
      this._request = undefined;
      this._requests = undefined;
      this._subtestPublicId = undefined;
      this._value = undefined;
      this._withClick = undefined;
      this._x = undefined;
      this._y = undefined;
      this._dragDropOptions.internalValue = undefined;
      this._elementUserLocator.internalValue = undefined;
      this._pattern.internalValue = undefined;
      this._variable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appendToContent = value.appendToContent;
      this._attribute = value.attribute;
      this._check = value.check;
      this._clickType = value.clickType;
      this._clickWithJavascript = value.clickWithJavascript;
      this._code = value.code;
      this._delay = value.delay;
      this._element = value.element;
      this._email = value.email;
      this._file = value.file;
      this._files = value.files;
      this._modifiers = value.modifiers;
      this._playingTabId = value.playingTabId;
      this._request = value.request;
      this._requests = value.requests;
      this._subtestPublicId = value.subtestPublicId;
      this._value = value.value;
      this._withClick = value.withClick;
      this._x = value.x;
      this._y = value.y;
      this._dragDropOptions.internalValue = value.dragDropOptions;
      this._elementUserLocator.internalValue = value.elementUserLocator;
      this._pattern.internalValue = value.pattern;
      this._variable.internalValue = value.variable;
    }
  }

  // append_to_content - computed: false, optional: true, required: false
  private _appendToContent?: boolean | cdktn.IResolvable; 
  public get appendToContent() {
    return this.getBooleanAttribute('append_to_content');
  }
  public set appendToContent(value: boolean | cdktn.IResolvable) {
    this._appendToContent = value;
  }
  public resetAppendToContent() {
    this._appendToContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendToContentInput() {
    return this._appendToContent;
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // check - computed: false, optional: true, required: false
  private _check?: string; 
  public get check() {
    return this.getStringAttribute('check');
  }
  public set check(value: string) {
    this._check = value;
  }
  public resetCheck() {
    this._check = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // click_type - computed: false, optional: true, required: false
  private _clickType?: string; 
  public get clickType() {
    return this.getStringAttribute('click_type');
  }
  public set clickType(value: string) {
    this._clickType = value;
  }
  public resetClickType() {
    this._clickType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickTypeInput() {
    return this._clickType;
  }

  // click_with_javascript - computed: false, optional: true, required: false
  private _clickWithJavascript?: boolean | cdktn.IResolvable; 
  public get clickWithJavascript() {
    return this.getBooleanAttribute('click_with_javascript');
  }
  public set clickWithJavascript(value: boolean | cdktn.IResolvable) {
    this._clickWithJavascript = value;
  }
  public resetClickWithJavascript() {
    this._clickWithJavascript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickWithJavascriptInput() {
    return this._clickWithJavascript;
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // element - computed: false, optional: true, required: false
  private _element?: string; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string) {
    this._element = value;
  }
  public resetElement() {
    this._element = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // files - computed: false, optional: true, required: false
  private _files?: string; 
  public get files() {
    return this.getStringAttribute('files');
  }
  public set files(value: string) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // modifiers - computed: false, optional: true, required: false
  private _modifiers?: string[]; 
  public get modifiers() {
    return this.getListAttribute('modifiers');
  }
  public set modifiers(value: string[]) {
    this._modifiers = value;
  }
  public resetModifiers() {
    this._modifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiersInput() {
    return this._modifiers;
  }

  // playing_tab_id - computed: false, optional: true, required: false
  private _playingTabId?: string; 
  public get playingTabId() {
    return this.getStringAttribute('playing_tab_id');
  }
  public set playingTabId(value: string) {
    this._playingTabId = value;
  }
  public resetPlayingTabId() {
    this._playingTabId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playingTabIdInput() {
    return this._playingTabId;
  }

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: string; 
  public get requests() {
    return this.getStringAttribute('requests');
  }
  public set requests(value: string) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }

  // subtest_public_id - computed: false, optional: true, required: false
  private _subtestPublicId?: string; 
  public get subtestPublicId() {
    return this.getStringAttribute('subtest_public_id');
  }
  public set subtestPublicId(value: string) {
    this._subtestPublicId = value;
  }
  public resetSubtestPublicId() {
    this._subtestPublicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtestPublicIdInput() {
    return this._subtestPublicId;
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

  // with_click - computed: false, optional: true, required: false
  private _withClick?: boolean | cdktn.IResolvable; 
  public get withClick() {
    return this.getBooleanAttribute('with_click');
  }
  public set withClick(value: boolean | cdktn.IResolvable) {
    this._withClick = value;
  }
  public resetWithClick() {
    this._withClick = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withClickInput() {
    return this._withClick;
  }

  // x - computed: false, optional: true, required: false
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: true, required: false
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }

  // drag_drop_options - computed: false, optional: true, required: false
  private _dragDropOptions = new SyntheticsTestBrowserStepParamsDragDropOptionsOutputReference(this, "drag_drop_options");
  public get dragDropOptions() {
    return this._dragDropOptions;
  }
  public putDragDropOptions(value: SyntheticsTestBrowserStepParamsDragDropOptions) {
    this._dragDropOptions.internalValue = value;
  }
  public resetDragDropOptions() {
    this._dragDropOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dragDropOptionsInput() {
    return this._dragDropOptions.internalValue;
  }

  // element_user_locator - computed: false, optional: true, required: false
  private _elementUserLocator = new SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference(this, "element_user_locator");
  public get elementUserLocator() {
    return this._elementUserLocator;
  }
  public putElementUserLocator(value: SyntheticsTestBrowserStepParamsElementUserLocator) {
    this._elementUserLocator.internalValue = value;
  }
  public resetElementUserLocator() {
    this._elementUserLocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementUserLocatorInput() {
    return this._elementUserLocator.internalValue;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern = new SyntheticsTestBrowserStepParamsPatternOutputReference(this, "pattern");
  public get pattern() {
    return this._pattern;
  }
  public putPattern(value: SyntheticsTestBrowserStepParamsPattern) {
    this._pattern.internalValue = value;
  }
  public resetPattern() {
    this._pattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new SyntheticsTestBrowserStepParamsVariableOutputReference(this, "variable");
  public get variable() {
    return this._variable;
  }
  public putVariable(value: SyntheticsTestBrowserStepParamsVariable) {
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
export interface SyntheticsTestBrowserStep {
  /**
  * Determines if the step should be allowed to fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#allow_failure SyntheticsTest#allow_failure}
  */
  readonly allowFailure?: boolean | cdktn.IResolvable;
  /**
  * Determines whether or not to always execute this step even if the previous step failed or was skipped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#always_execute SyntheticsTest#always_execute}
  */
  readonly alwaysExecute?: boolean | cdktn.IResolvable;
  /**
  * Determines whether or not to exit the test if the step succeeds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#exit_if_succeed SyntheticsTest#exit_if_succeed}
  */
  readonly exitIfSucceed?: boolean | cdktn.IResolvable;
  /**
  * Force update of the "element" parameter for the step
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#force_element_update SyntheticsTest#force_element_update}
  */
  readonly forceElementUpdate?: boolean | cdktn.IResolvable;
  /**
  * Determines whether or not to consider the entire test as failed if this step fails. Can be used only if `allow_failure` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#is_critical SyntheticsTest#is_critical}
  */
  readonly isCritical?: boolean | cdktn.IResolvable;
  /**
  * A unique identifier used to track steps after reordering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#local_key SyntheticsTest#local_key}
  */
  readonly localKey?: string;
  /**
  * Name of the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Prevents saving screenshots of the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#no_screenshot SyntheticsTest#no_screenshot}
  */
  readonly noScreenshot?: boolean | cdktn.IResolvable;
  /**
  * Used to override the default timeout of a step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#timeout SyntheticsTest#timeout}
  */
  readonly timeout?: number;
  /**
  * Type of the step. Valid values are `assertCurrentUrl`, `assertElementAttribute`, `assertElementContent`, `assertElementPresent`, `assertEmail`, `assertFileDownload`, `assertFromJavascript`, `assertPageContains`, `assertPageLacks`, `assertRequests`, `click`, `drag`, `drop`, `extractFromJavascript`, `extractFromEmailBody`, `extractVariable`, `goToEmailLink`, `goToUrl`, `goToUrlAndMeasureTti`, `hover`, `playSubTest`, `pressKey`, `refresh`, `runApiTest`, `scroll`, `selectOption`, `typeText`, `uploadFiles`, `wait`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#params SyntheticsTest#params}
  */
  readonly params: SyntheticsTestBrowserStepParams;
}

export function syntheticsTestBrowserStepToTerraform(struct?: SyntheticsTestBrowserStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_failure: cdktn.booleanToTerraform(struct!.allowFailure),
    always_execute: cdktn.booleanToTerraform(struct!.alwaysExecute),
    exit_if_succeed: cdktn.booleanToTerraform(struct!.exitIfSucceed),
    force_element_update: cdktn.booleanToTerraform(struct!.forceElementUpdate),
    is_critical: cdktn.booleanToTerraform(struct!.isCritical),
    local_key: cdktn.stringToTerraform(struct!.localKey),
    name: cdktn.stringToTerraform(struct!.name),
    no_screenshot: cdktn.booleanToTerraform(struct!.noScreenshot),
    timeout: cdktn.numberToTerraform(struct!.timeout),
    type: cdktn.stringToTerraform(struct!.type),
    params: syntheticsTestBrowserStepParamsToTerraform(struct!.params),
  }
}


export function syntheticsTestBrowserStepToHclTerraform(struct?: SyntheticsTestBrowserStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_failure: {
      value: cdktn.booleanToHclTerraform(struct!.allowFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_execute: {
      value: cdktn.booleanToHclTerraform(struct!.alwaysExecute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exit_if_succeed: {
      value: cdktn.booleanToHclTerraform(struct!.exitIfSucceed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_element_update: {
      value: cdktn.booleanToHclTerraform(struct!.forceElementUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_critical: {
      value: cdktn.booleanToHclTerraform(struct!.isCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_key: {
      value: cdktn.stringToHclTerraform(struct!.localKey),
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
    no_screenshot: {
      value: cdktn.booleanToHclTerraform(struct!.noScreenshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktn.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: syntheticsTestBrowserStepParamsToHclTerraform(struct!.params),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestBrowserStepParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestBrowserStepOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestBrowserStep | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFailure = this._allowFailure;
    }
    if (this._alwaysExecute !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysExecute = this._alwaysExecute;
    }
    if (this._exitIfSucceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.exitIfSucceed = this._exitIfSucceed;
    }
    if (this._forceElementUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceElementUpdate = this._forceElementUpdate;
    }
    if (this._isCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCritical = this._isCritical;
    }
    if (this._localKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.localKey = this._localKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noScreenshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.noScreenshot = this._noScreenshot;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestBrowserStep | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowFailure = undefined;
      this._alwaysExecute = undefined;
      this._exitIfSucceed = undefined;
      this._forceElementUpdate = undefined;
      this._isCritical = undefined;
      this._localKey = undefined;
      this._name = undefined;
      this._noScreenshot = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._params.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowFailure = value.allowFailure;
      this._alwaysExecute = value.alwaysExecute;
      this._exitIfSucceed = value.exitIfSucceed;
      this._forceElementUpdate = value.forceElementUpdate;
      this._isCritical = value.isCritical;
      this._localKey = value.localKey;
      this._name = value.name;
      this._noScreenshot = value.noScreenshot;
      this._timeout = value.timeout;
      this._type = value.type;
      this._params.internalValue = value.params;
    }
  }

  // allow_failure - computed: false, optional: true, required: false
  private _allowFailure?: boolean | cdktn.IResolvable; 
  public get allowFailure() {
    return this.getBooleanAttribute('allow_failure');
  }
  public set allowFailure(value: boolean | cdktn.IResolvable) {
    this._allowFailure = value;
  }
  public resetAllowFailure() {
    this._allowFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFailureInput() {
    return this._allowFailure;
  }

  // always_execute - computed: false, optional: true, required: false
  private _alwaysExecute?: boolean | cdktn.IResolvable; 
  public get alwaysExecute() {
    return this.getBooleanAttribute('always_execute');
  }
  public set alwaysExecute(value: boolean | cdktn.IResolvable) {
    this._alwaysExecute = value;
  }
  public resetAlwaysExecute() {
    this._alwaysExecute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysExecuteInput() {
    return this._alwaysExecute;
  }

  // exit_if_succeed - computed: false, optional: true, required: false
  private _exitIfSucceed?: boolean | cdktn.IResolvable; 
  public get exitIfSucceed() {
    return this.getBooleanAttribute('exit_if_succeed');
  }
  public set exitIfSucceed(value: boolean | cdktn.IResolvable) {
    this._exitIfSucceed = value;
  }
  public resetExitIfSucceed() {
    this._exitIfSucceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitIfSucceedInput() {
    return this._exitIfSucceed;
  }

  // force_element_update - computed: false, optional: true, required: false
  private _forceElementUpdate?: boolean | cdktn.IResolvable; 
  public get forceElementUpdate() {
    return this.getBooleanAttribute('force_element_update');
  }
  public set forceElementUpdate(value: boolean | cdktn.IResolvable) {
    this._forceElementUpdate = value;
  }
  public resetForceElementUpdate() {
    this._forceElementUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceElementUpdateInput() {
    return this._forceElementUpdate;
  }

  // is_critical - computed: false, optional: true, required: false
  private _isCritical?: boolean | cdktn.IResolvable; 
  public get isCritical() {
    return this.getBooleanAttribute('is_critical');
  }
  public set isCritical(value: boolean | cdktn.IResolvable) {
    this._isCritical = value;
  }
  public resetIsCritical() {
    this._isCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCriticalInput() {
    return this._isCritical;
  }

  // local_key - computed: false, optional: true, required: false
  private _localKey?: string; 
  public get localKey() {
    return this.getStringAttribute('local_key');
  }
  public set localKey(value: string) {
    this._localKey = value;
  }
  public resetLocalKey() {
    this._localKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localKeyInput() {
    return this._localKey;
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

  // no_screenshot - computed: false, optional: true, required: false
  private _noScreenshot?: boolean | cdktn.IResolvable; 
  public get noScreenshot() {
    return this.getBooleanAttribute('no_screenshot');
  }
  public set noScreenshot(value: boolean | cdktn.IResolvable) {
    this._noScreenshot = value;
  }
  public resetNoScreenshot() {
    this._noScreenshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noScreenshotInput() {
    return this._noScreenshot;
  }

  // public_id - computed: true, optional: false, required: false
  public get publicId() {
    return this.getStringAttribute('public_id');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // params - computed: false, optional: false, required: true
  private _params = new SyntheticsTestBrowserStepParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: SyntheticsTestBrowserStepParams) {
    this._params.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}

export class SyntheticsTestBrowserStepList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestBrowserStep[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestBrowserStepOutputReference {
    return new SyntheticsTestBrowserStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestBrowserVariable {
  /**
  * Example for the variable. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#example SyntheticsTest#example}
  */
  readonly example?: string;
  /**
  * ID of the global variable to use. This is actually only used (and required) in the case of using a variable of type `global`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#id SyntheticsTest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Pattern of the variable. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#pattern SyntheticsTest#pattern}
  */
  readonly pattern?: string;
  /**
  * Determines whether or not the browser test variable is obfuscated. Can only be used with a browser variable of type `text`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#secure SyntheticsTest#secure}
  */
  readonly secure?: boolean | cdktn.IResolvable;
  /**
  * Type of browser test variable. Valid values are `element`, `email`, `global`, `text`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type: string;
}

export function syntheticsTestBrowserVariableToTerraform(struct?: SyntheticsTestBrowserVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    example: cdktn.stringToTerraform(struct!.example),
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
    pattern: cdktn.stringToTerraform(struct!.pattern),
    secure: cdktn.booleanToTerraform(struct!.secure),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function syntheticsTestBrowserVariableToHclTerraform(struct?: SyntheticsTestBrowserVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    example: {
      value: cdktn.stringToHclTerraform(struct!.example),
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktn.booleanToHclTerraform(struct!.secure),
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

export class SyntheticsTestBrowserVariableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestBrowserVariable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestBrowserVariable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._example = undefined;
      this._id = undefined;
      this._name = undefined;
      this._pattern = undefined;
      this._secure = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._example = value.example;
      this._id = value.id;
      this._name = value.name;
      this._pattern = value.pattern;
      this._secure = value.secure;
      this._type = value.type;
    }
  }

  // example - computed: false, optional: true, required: false
  private _example?: string; 
  public get example() {
    return this.getStringAttribute('example');
  }
  public set example(value: string) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktn.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktn.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
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

export class SyntheticsTestBrowserVariableList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestBrowserVariable[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestBrowserVariableOutputReference {
    return new SyntheticsTestBrowserVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestConfigVariable {
  /**
  * Example for the variable. This value is not returned by the API when `secure = true`. Avoid drift by only making updates to this value from within Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#example SyntheticsTest#example}
  */
  readonly example?: string;
  /**
  * When type = `global`, ID of the global variable to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#id SyntheticsTest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Pattern of the variable. This value is not returned by the API when `secure = true`. Avoid drift by only making updates to this value from within Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#pattern SyntheticsTest#pattern}
  */
  readonly pattern?: string;
  /**
  * Whether the value of this variable will be obfuscated in test results. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#secure SyntheticsTest#secure}
  */
  readonly secure?: boolean | cdktn.IResolvable;
  /**
  * Type of test configuration variable. Valid values are `global`, `text`, `email`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type: string;
}

export function syntheticsTestConfigVariableToTerraform(struct?: SyntheticsTestConfigVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    example: cdktn.stringToTerraform(struct!.example),
    id: cdktn.stringToTerraform(struct!.id),
    name: cdktn.stringToTerraform(struct!.name),
    pattern: cdktn.stringToTerraform(struct!.pattern),
    secure: cdktn.booleanToTerraform(struct!.secure),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function syntheticsTestConfigVariableToHclTerraform(struct?: SyntheticsTestConfigVariable | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    example: {
      value: cdktn.stringToHclTerraform(struct!.example),
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktn.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktn.booleanToHclTerraform(struct!.secure),
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

export class SyntheticsTestConfigVariableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestConfigVariable | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestConfigVariable | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._example = undefined;
      this._id = undefined;
      this._name = undefined;
      this._pattern = undefined;
      this._secure = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._example = value.example;
      this._id = value.id;
      this._name = value.name;
      this._pattern = value.pattern;
      this._secure = value.secure;
      this._type = value.type;
    }
  }

  // example - computed: false, optional: true, required: false
  private _example?: string; 
  public get example() {
    return this.getStringAttribute('example');
  }
  public set example(value: string) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktn.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktn.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
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

export class SyntheticsTestConfigVariableList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestConfigVariable[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestConfigVariableOutputReference {
    return new SyntheticsTestConfigVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestMobileOptionsListBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#principals SyntheticsTest#principals}
  */
  readonly principals?: string[];
  /**
  * Valid values are `editor`, `viewer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#relation SyntheticsTest#relation}
  */
  readonly relation?: string;
}

export function syntheticsTestMobileOptionsListBindingsToTerraform(struct?: SyntheticsTestMobileOptionsListBindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.principals),
    relation: cdktn.stringToTerraform(struct!.relation),
  }
}


export function syntheticsTestMobileOptionsListBindingsToHclTerraform(struct?: SyntheticsTestMobileOptionsListBindings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principals: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.principals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    relation: {
      value: cdktn.stringToHclTerraform(struct!.relation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestMobileOptionsListBindingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestMobileOptionsListBindings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    if (this._relation !== undefined) {
      hasAnyValues = true;
      internalValueResult.relation = this._relation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileOptionsListBindings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principals = undefined;
      this._relation = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principals = value.principals;
      this._relation = value.relation;
    }
  }

  // principals - computed: false, optional: true, required: false
  private _principals?: string[]; 
  public get principals() {
    return this.getListAttribute('principals');
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  public resetPrincipals() {
    this._principals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }

  // relation - computed: false, optional: true, required: false
  private _relation?: string; 
  public get relation() {
    return this.getStringAttribute('relation');
  }
  public set relation(value: string) {
    this._relation = value;
  }
  public resetRelation() {
    this._relation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInput() {
    return this._relation;
  }
}

export class SyntheticsTestMobileOptionsListBindingsList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestMobileOptionsListBindings[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestMobileOptionsListBindingsOutputReference {
    return new SyntheticsTestMobileOptionsListBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestMobileOptionsListCi {
  /**
  * Execution rule for a Synthetics test. Valid values are `blocking`, `non_blocking`, `skipped`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#execution_rule SyntheticsTest#execution_rule}
  */
  readonly executionRule: string;
}

export function syntheticsTestMobileOptionsListCiToTerraform(struct?: SyntheticsTestMobileOptionsListCiOutputReference | SyntheticsTestMobileOptionsListCi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_rule: cdktn.stringToTerraform(struct!.executionRule),
  }
}


export function syntheticsTestMobileOptionsListCiToHclTerraform(struct?: SyntheticsTestMobileOptionsListCiOutputReference | SyntheticsTestMobileOptionsListCi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_rule: {
      value: cdktn.stringToHclTerraform(struct!.executionRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestMobileOptionsListCiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestMobileOptionsListCi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRule = this._executionRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileOptionsListCi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionRule = value.executionRule;
    }
  }

  // execution_rule - computed: false, optional: false, required: true
  private _executionRule?: string; 
  public get executionRule() {
    return this.getStringAttribute('execution_rule');
  }
  public set executionRule(value: string) {
    this._executionRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRuleInput() {
    return this._executionRule;
  }
}
export interface SyntheticsTestMobileOptionsListMobileApplication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#application_id SyntheticsTest#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#reference_id SyntheticsTest#reference_id}
  */
  readonly referenceId: string;
  /**
  * Valid values are `latest`, `version`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#reference_type SyntheticsTest#reference_type}
  */
  readonly referenceType: string;
}

export function syntheticsTestMobileOptionsListMobileApplicationToTerraform(struct?: SyntheticsTestMobileOptionsListMobileApplicationOutputReference | SyntheticsTestMobileOptionsListMobileApplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktn.stringToTerraform(struct!.applicationId),
    reference_id: cdktn.stringToTerraform(struct!.referenceId),
    reference_type: cdktn.stringToTerraform(struct!.referenceType),
  }
}


export function syntheticsTestMobileOptionsListMobileApplicationToHclTerraform(struct?: SyntheticsTestMobileOptionsListMobileApplicationOutputReference | SyntheticsTestMobileOptionsListMobileApplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktn.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_id: {
      value: cdktn.stringToHclTerraform(struct!.referenceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_type: {
      value: cdktn.stringToHclTerraform(struct!.referenceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestMobileOptionsListMobileApplicationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestMobileOptionsListMobileApplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._referenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceId = this._referenceId;
    }
    if (this._referenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceType = this._referenceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileOptionsListMobileApplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationId = undefined;
      this._referenceId = undefined;
      this._referenceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationId = value.applicationId;
      this._referenceId = value.referenceId;
      this._referenceType = value.referenceType;
    }
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // reference_id - computed: false, optional: false, required: true
  private _referenceId?: string; 
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }
  public set referenceId(value: string) {
    this._referenceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceIdInput() {
    return this._referenceId;
  }

  // reference_type - computed: false, optional: false, required: true
  private _referenceType?: string; 
  public get referenceType() {
    return this.getStringAttribute('reference_type');
  }
  public set referenceType(value: string) {
    this._referenceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceTypeInput() {
    return this._referenceType;
  }
}
export interface SyntheticsTestMobileOptionsListMonitorOptions {
  /**
  * A message to include with a re-notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#escalation_message SyntheticsTest#escalation_message}
  */
  readonly escalationMessage?: string;
  /**
  * The name of the preset for the notification for the monitor. Valid values are `show_all`, `hide_all`, `hide_query`, `hide_handles`, `hide_query_and_handles`, `show_only_snapshot`, `hide_handles_and_footer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#notification_preset_name SyntheticsTest#notification_preset_name}
  */
  readonly notificationPresetName?: string;
  /**
  * Specify a renotification frequency in minutes. Values available by default are `0`, `10`, `20`, `30`, `40`, `50`, `60`, `90`, `120`, `180`, `240`, `300`, `360`, `720`, `1440`. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#renotify_interval SyntheticsTest#renotify_interval}
  */
  readonly renotifyInterval?: number;
  /**
  * The number of times a monitor renotifies. It can only be set if `renotify_interval` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#renotify_occurrences SyntheticsTest#renotify_occurrences}
  */
  readonly renotifyOccurrences?: number;
}

export function syntheticsTestMobileOptionsListMonitorOptionsToTerraform(struct?: SyntheticsTestMobileOptionsListMonitorOptionsOutputReference | SyntheticsTestMobileOptionsListMonitorOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_message: cdktn.stringToTerraform(struct!.escalationMessage),
    notification_preset_name: cdktn.stringToTerraform(struct!.notificationPresetName),
    renotify_interval: cdktn.numberToTerraform(struct!.renotifyInterval),
    renotify_occurrences: cdktn.numberToTerraform(struct!.renotifyOccurrences),
  }
}


export function syntheticsTestMobileOptionsListMonitorOptionsToHclTerraform(struct?: SyntheticsTestMobileOptionsListMonitorOptionsOutputReference | SyntheticsTestMobileOptionsListMonitorOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escalation_message: {
      value: cdktn.stringToHclTerraform(struct!.escalationMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_preset_name: {
      value: cdktn.stringToHclTerraform(struct!.notificationPresetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renotify_interval: {
      value: cdktn.numberToHclTerraform(struct!.renotifyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renotify_occurrences: {
      value: cdktn.numberToHclTerraform(struct!.renotifyOccurrences),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestMobileOptionsListMonitorOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestMobileOptionsListMonitorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escalationMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationMessage = this._escalationMessage;
    }
    if (this._notificationPresetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPresetName = this._notificationPresetName;
    }
    if (this._renotifyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.renotifyInterval = this._renotifyInterval;
    }
    if (this._renotifyOccurrences !== undefined) {
      hasAnyValues = true;
      internalValueResult.renotifyOccurrences = this._renotifyOccurrences;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileOptionsListMonitorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._escalationMessage = undefined;
      this._notificationPresetName = undefined;
      this._renotifyInterval = undefined;
      this._renotifyOccurrences = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._escalationMessage = value.escalationMessage;
      this._notificationPresetName = value.notificationPresetName;
      this._renotifyInterval = value.renotifyInterval;
      this._renotifyOccurrences = value.renotifyOccurrences;
    }
  }

  // escalation_message - computed: false, optional: true, required: false
  private _escalationMessage?: string; 
  public get escalationMessage() {
    return this.getStringAttribute('escalation_message');
  }
  public set escalationMessage(value: string) {
    this._escalationMessage = value;
  }
  public resetEscalationMessage() {
    this._escalationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationMessageInput() {
    return this._escalationMessage;
  }

  // notification_preset_name - computed: false, optional: true, required: false
  private _notificationPresetName?: string; 
  public get notificationPresetName() {
    return this.getStringAttribute('notification_preset_name');
  }
  public set notificationPresetName(value: string) {
    this._notificationPresetName = value;
  }
  public resetNotificationPresetName() {
    this._notificationPresetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPresetNameInput() {
    return this._notificationPresetName;
  }

  // renotify_interval - computed: false, optional: true, required: false
  private _renotifyInterval?: number; 
  public get renotifyInterval() {
    return this.getNumberAttribute('renotify_interval');
  }
  public set renotifyInterval(value: number) {
    this._renotifyInterval = value;
  }
  public resetRenotifyInterval() {
    this._renotifyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyIntervalInput() {
    return this._renotifyInterval;
  }

  // renotify_occurrences - computed: false, optional: true, required: false
  private _renotifyOccurrences?: number; 
  public get renotifyOccurrences() {
    return this.getNumberAttribute('renotify_occurrences');
  }
  public set renotifyOccurrences(value: number) {
    this._renotifyOccurrences = value;
  }
  public resetRenotifyOccurrences() {
    this._renotifyOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyOccurrencesInput() {
    return this._renotifyOccurrences;
  }
}
export interface SyntheticsTestMobileOptionsListRetry {
  /**
  * Number of retries needed to consider a location as failed before sending a notification alert. Maximum value: `3` for `api` tests, `2` for `browser` and `mobile` tests. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#count SyntheticsTest#count}
  */
  readonly count?: number;
  /**
  * Interval between a failed test and the next retry in milliseconds. Maximum value: `5000`. Defaults to `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#interval SyntheticsTest#interval}
  */
  readonly interval?: number;
}

export function syntheticsTestMobileOptionsListRetryToTerraform(struct?: SyntheticsTestMobileOptionsListRetryOutputReference | SyntheticsTestMobileOptionsListRetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function syntheticsTestMobileOptionsListRetryToHclTerraform(struct?: SyntheticsTestMobileOptionsListRetryOutputReference | SyntheticsTestMobileOptionsListRetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestMobileOptionsListRetryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestMobileOptionsListRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileOptionsListRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._interval = value.interval;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface SyntheticsTestMobileOptionsListSchedulingTimeframes {
  /**
  * Number representing the day of the week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#day SyntheticsTest#day}
  */
  readonly day: number;
  /**
  * The hour of the day on which scheduling starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#from SyntheticsTest#from}
  */
  readonly from: string;
  /**
  * The hour of the day on which scheduling ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#to SyntheticsTest#to}
  */
  readonly to: string;
}

export function syntheticsTestMobileOptionsListSchedulingTimeframesToTerraform(struct?: SyntheticsTestMobileOptionsListSchedulingTimeframes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktn.numberToTerraform(struct!.day),
    from: cdktn.stringToTerraform(struct!.from),
    to: cdktn.stringToTerraform(struct!.to),
  }
}


export function syntheticsTestMobileOptionsListSchedulingTimeframesToHclTerraform(struct?: SyntheticsTestMobileOptionsListSchedulingTimeframes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktn.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    from: {
      value: cdktn.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktn.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestMobileOptionsListSchedulingTimeframes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileOptionsListSchedulingTimeframes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class SyntheticsTestMobileOptionsListSchedulingTimeframesList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestMobileOptionsListSchedulingTimeframes[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference {
    return new SyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestMobileOptionsListScheduling {
  /**
  * Timezone in which the timeframe is based.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#timezone SyntheticsTest#timezone}
  */
  readonly timezone: string;
  /**
  * timeframes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#timeframes SyntheticsTest#timeframes}
  */
  readonly timeframes: SyntheticsTestMobileOptionsListSchedulingTimeframes[] | cdktn.IResolvable;
}

export function syntheticsTestMobileOptionsListSchedulingToTerraform(struct?: SyntheticsTestMobileOptionsListSchedulingOutputReference | SyntheticsTestMobileOptionsListScheduling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timezone: cdktn.stringToTerraform(struct!.timezone),
    timeframes: cdktn.listMapper(syntheticsTestMobileOptionsListSchedulingTimeframesToTerraform, true)(struct!.timeframes),
  }
}


export function syntheticsTestMobileOptionsListSchedulingToHclTerraform(struct?: SyntheticsTestMobileOptionsListSchedulingOutputReference | SyntheticsTestMobileOptionsListScheduling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timezone: {
      value: cdktn.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeframes: {
      value: cdktn.listMapperHcl(syntheticsTestMobileOptionsListSchedulingTimeframesToHclTerraform, true)(struct!.timeframes),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticsTestMobileOptionsListSchedulingTimeframesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestMobileOptionsListSchedulingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestMobileOptionsListScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._timeframes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframes = this._timeframes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileOptionsListScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timezone = undefined;
      this._timeframes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timezone = value.timezone;
      this._timeframes.internalValue = value.timeframes;
    }
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // timeframes - computed: false, optional: false, required: true
  private _timeframes = new SyntheticsTestMobileOptionsListSchedulingTimeframesList(this, "timeframes", true);
  public get timeframes() {
    return this._timeframes;
  }
  public putTimeframes(value: SyntheticsTestMobileOptionsListSchedulingTimeframes[] | cdktn.IResolvable) {
    this._timeframes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframesInput() {
    return this._timeframes.internalValue;
  }
}
export interface SyntheticsTestMobileOptionsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#allow_application_crash SyntheticsTest#allow_application_crash}
  */
  readonly allowApplicationCrash?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#default_step_timeout SyntheticsTest#default_step_timeout}
  */
  readonly defaultStepTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#device_ids SyntheticsTest#device_ids}
  */
  readonly deviceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#disable_auto_accept_alert SyntheticsTest#disable_auto_accept_alert}
  */
  readonly disableAutoAcceptAlert?: boolean | cdktn.IResolvable;
  /**
  * Minimum amount of time in failure required to trigger an alert (in seconds). Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#min_failure_duration SyntheticsTest#min_failure_duration}
  */
  readonly minFailureDuration?: number;
  /**
  * The monitor name is used for the alert title as well as for all monitor dashboard widgets and SLOs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#monitor_name SyntheticsTest#monitor_name}
  */
  readonly monitorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#monitor_priority SyntheticsTest#monitor_priority}
  */
  readonly monitorPriority?: number;
  /**
  * Prevents saving screenshots of the steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#no_screenshot SyntheticsTest#no_screenshot}
  */
  readonly noScreenshot?: boolean | cdktn.IResolvable;
  /**
  * A list of role identifiers pulled from the Roles API to restrict read and write access. **Deprecated.** This field is no longer supported by the Datadog API. Please use `datadog_restriction_policy` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#restricted_roles SyntheticsTest#restricted_roles}
  */
  readonly restrictedRoles?: string[];
  /**
  * How often the test should run (in seconds). Valid range is `300-604800` for mobile tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#tick_every SyntheticsTest#tick_every}
  */
  readonly tickEvery: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#verbosity SyntheticsTest#verbosity}
  */
  readonly verbosity?: number;
  /**
  * bindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#bindings SyntheticsTest#bindings}
  */
  readonly bindings?: SyntheticsTestMobileOptionsListBindings[] | cdktn.IResolvable;
  /**
  * ci block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#ci SyntheticsTest#ci}
  */
  readonly ci?: SyntheticsTestMobileOptionsListCi;
  /**
  * mobile_application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#mobile_application SyntheticsTest#mobile_application}
  */
  readonly mobileApplication: SyntheticsTestMobileOptionsListMobileApplication;
  /**
  * monitor_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#monitor_options SyntheticsTest#monitor_options}
  */
  readonly monitorOptions?: SyntheticsTestMobileOptionsListMonitorOptions;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#retry SyntheticsTest#retry}
  */
  readonly retry?: SyntheticsTestMobileOptionsListRetry;
  /**
  * scheduling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#scheduling SyntheticsTest#scheduling}
  */
  readonly scheduling?: SyntheticsTestMobileOptionsListScheduling;
}

export function syntheticsTestMobileOptionsListStructToTerraform(struct?: SyntheticsTestMobileOptionsListStructOutputReference | SyntheticsTestMobileOptionsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_application_crash: cdktn.booleanToTerraform(struct!.allowApplicationCrash),
    default_step_timeout: cdktn.numberToTerraform(struct!.defaultStepTimeout),
    device_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.deviceIds),
    disable_auto_accept_alert: cdktn.booleanToTerraform(struct!.disableAutoAcceptAlert),
    min_failure_duration: cdktn.numberToTerraform(struct!.minFailureDuration),
    monitor_name: cdktn.stringToTerraform(struct!.monitorName),
    monitor_priority: cdktn.numberToTerraform(struct!.monitorPriority),
    no_screenshot: cdktn.booleanToTerraform(struct!.noScreenshot),
    restricted_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.restrictedRoles),
    tick_every: cdktn.numberToTerraform(struct!.tickEvery),
    verbosity: cdktn.numberToTerraform(struct!.verbosity),
    bindings: cdktn.listMapper(syntheticsTestMobileOptionsListBindingsToTerraform, true)(struct!.bindings),
    ci: syntheticsTestMobileOptionsListCiToTerraform(struct!.ci),
    mobile_application: syntheticsTestMobileOptionsListMobileApplicationToTerraform(struct!.mobileApplication),
    monitor_options: syntheticsTestMobileOptionsListMonitorOptionsToTerraform(struct!.monitorOptions),
    retry: syntheticsTestMobileOptionsListRetryToTerraform(struct!.retry),
    scheduling: syntheticsTestMobileOptionsListSchedulingToTerraform(struct!.scheduling),
  }
}


export function syntheticsTestMobileOptionsListStructToHclTerraform(struct?: SyntheticsTestMobileOptionsListStructOutputReference | SyntheticsTestMobileOptionsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_application_crash: {
      value: cdktn.booleanToHclTerraform(struct!.allowApplicationCrash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_step_timeout: {
      value: cdktn.numberToHclTerraform(struct!.defaultStepTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.deviceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_auto_accept_alert: {
      value: cdktn.booleanToHclTerraform(struct!.disableAutoAcceptAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_failure_duration: {
      value: cdktn.numberToHclTerraform(struct!.minFailureDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_name: {
      value: cdktn.stringToHclTerraform(struct!.monitorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_priority: {
      value: cdktn.numberToHclTerraform(struct!.monitorPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_screenshot: {
      value: cdktn.booleanToHclTerraform(struct!.noScreenshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restricted_roles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.restrictedRoles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tick_every: {
      value: cdktn.numberToHclTerraform(struct!.tickEvery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verbosity: {
      value: cdktn.numberToHclTerraform(struct!.verbosity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bindings: {
      value: cdktn.listMapperHcl(syntheticsTestMobileOptionsListBindingsToHclTerraform, true)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestMobileOptionsListBindingsList",
    },
    ci: {
      value: syntheticsTestMobileOptionsListCiToHclTerraform(struct!.ci),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestMobileOptionsListCiList",
    },
    mobile_application: {
      value: syntheticsTestMobileOptionsListMobileApplicationToHclTerraform(struct!.mobileApplication),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestMobileOptionsListMobileApplicationList",
    },
    monitor_options: {
      value: syntheticsTestMobileOptionsListMonitorOptionsToHclTerraform(struct!.monitorOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestMobileOptionsListMonitorOptionsList",
    },
    retry: {
      value: syntheticsTestMobileOptionsListRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestMobileOptionsListRetryList",
    },
    scheduling: {
      value: syntheticsTestMobileOptionsListSchedulingToHclTerraform(struct!.scheduling),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestMobileOptionsListSchedulingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestMobileOptionsListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestMobileOptionsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowApplicationCrash !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowApplicationCrash = this._allowApplicationCrash;
    }
    if (this._defaultStepTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultStepTimeout = this._defaultStepTimeout;
    }
    if (this._deviceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIds = this._deviceIds;
    }
    if (this._disableAutoAcceptAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutoAcceptAlert = this._disableAutoAcceptAlert;
    }
    if (this._minFailureDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.minFailureDuration = this._minFailureDuration;
    }
    if (this._monitorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorName = this._monitorName;
    }
    if (this._monitorPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorPriority = this._monitorPriority;
    }
    if (this._noScreenshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.noScreenshot = this._noScreenshot;
    }
    if (this._restrictedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedRoles = this._restrictedRoles;
    }
    if (this._tickEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickEvery = this._tickEvery;
    }
    if (this._verbosity !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbosity = this._verbosity;
    }
    if (this._bindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindings = this._bindings?.internalValue;
    }
    if (this._ci?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ci = this._ci?.internalValue;
    }
    if (this._mobileApplication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileApplication = this._mobileApplication?.internalValue;
    }
    if (this._monitorOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorOptions = this._monitorOptions?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    if (this._scheduling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduling = this._scheduling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileOptionsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowApplicationCrash = undefined;
      this._defaultStepTimeout = undefined;
      this._deviceIds = undefined;
      this._disableAutoAcceptAlert = undefined;
      this._minFailureDuration = undefined;
      this._monitorName = undefined;
      this._monitorPriority = undefined;
      this._noScreenshot = undefined;
      this._restrictedRoles = undefined;
      this._tickEvery = undefined;
      this._verbosity = undefined;
      this._bindings.internalValue = undefined;
      this._ci.internalValue = undefined;
      this._mobileApplication.internalValue = undefined;
      this._monitorOptions.internalValue = undefined;
      this._retry.internalValue = undefined;
      this._scheduling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowApplicationCrash = value.allowApplicationCrash;
      this._defaultStepTimeout = value.defaultStepTimeout;
      this._deviceIds = value.deviceIds;
      this._disableAutoAcceptAlert = value.disableAutoAcceptAlert;
      this._minFailureDuration = value.minFailureDuration;
      this._monitorName = value.monitorName;
      this._monitorPriority = value.monitorPriority;
      this._noScreenshot = value.noScreenshot;
      this._restrictedRoles = value.restrictedRoles;
      this._tickEvery = value.tickEvery;
      this._verbosity = value.verbosity;
      this._bindings.internalValue = value.bindings;
      this._ci.internalValue = value.ci;
      this._mobileApplication.internalValue = value.mobileApplication;
      this._monitorOptions.internalValue = value.monitorOptions;
      this._retry.internalValue = value.retry;
      this._scheduling.internalValue = value.scheduling;
    }
  }

  // allow_application_crash - computed: false, optional: true, required: false
  private _allowApplicationCrash?: boolean | cdktn.IResolvable; 
  public get allowApplicationCrash() {
    return this.getBooleanAttribute('allow_application_crash');
  }
  public set allowApplicationCrash(value: boolean | cdktn.IResolvable) {
    this._allowApplicationCrash = value;
  }
  public resetAllowApplicationCrash() {
    this._allowApplicationCrash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowApplicationCrashInput() {
    return this._allowApplicationCrash;
  }

  // default_step_timeout - computed: false, optional: true, required: false
  private _defaultStepTimeout?: number; 
  public get defaultStepTimeout() {
    return this.getNumberAttribute('default_step_timeout');
  }
  public set defaultStepTimeout(value: number) {
    this._defaultStepTimeout = value;
  }
  public resetDefaultStepTimeout() {
    this._defaultStepTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStepTimeoutInput() {
    return this._defaultStepTimeout;
  }

  // device_ids - computed: false, optional: false, required: true
  private _deviceIds?: string[]; 
  public get deviceIds() {
    return this.getListAttribute('device_ids');
  }
  public set deviceIds(value: string[]) {
    this._deviceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdsInput() {
    return this._deviceIds;
  }

  // disable_auto_accept_alert - computed: false, optional: true, required: false
  private _disableAutoAcceptAlert?: boolean | cdktn.IResolvable; 
  public get disableAutoAcceptAlert() {
    return this.getBooleanAttribute('disable_auto_accept_alert');
  }
  public set disableAutoAcceptAlert(value: boolean | cdktn.IResolvable) {
    this._disableAutoAcceptAlert = value;
  }
  public resetDisableAutoAcceptAlert() {
    this._disableAutoAcceptAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoAcceptAlertInput() {
    return this._disableAutoAcceptAlert;
  }

  // min_failure_duration - computed: false, optional: true, required: false
  private _minFailureDuration?: number; 
  public get minFailureDuration() {
    return this.getNumberAttribute('min_failure_duration');
  }
  public set minFailureDuration(value: number) {
    this._minFailureDuration = value;
  }
  public resetMinFailureDuration() {
    this._minFailureDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFailureDurationInput() {
    return this._minFailureDuration;
  }

  // monitor_name - computed: false, optional: true, required: false
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  public resetMonitorName() {
    this._monitorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // monitor_priority - computed: false, optional: true, required: false
  private _monitorPriority?: number; 
  public get monitorPriority() {
    return this.getNumberAttribute('monitor_priority');
  }
  public set monitorPriority(value: number) {
    this._monitorPriority = value;
  }
  public resetMonitorPriority() {
    this._monitorPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPriorityInput() {
    return this._monitorPriority;
  }

  // no_screenshot - computed: false, optional: true, required: false
  private _noScreenshot?: boolean | cdktn.IResolvable; 
  public get noScreenshot() {
    return this.getBooleanAttribute('no_screenshot');
  }
  public set noScreenshot(value: boolean | cdktn.IResolvable) {
    this._noScreenshot = value;
  }
  public resetNoScreenshot() {
    this._noScreenshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noScreenshotInput() {
    return this._noScreenshot;
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

  // tick_every - computed: false, optional: false, required: true
  private _tickEvery?: number; 
  public get tickEvery() {
    return this.getNumberAttribute('tick_every');
  }
  public set tickEvery(value: number) {
    this._tickEvery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tickEveryInput() {
    return this._tickEvery;
  }

  // verbosity - computed: false, optional: true, required: false
  private _verbosity?: number; 
  public get verbosity() {
    return this.getNumberAttribute('verbosity');
  }
  public set verbosity(value: number) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity;
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new SyntheticsTestMobileOptionsListBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: SyntheticsTestMobileOptionsListBindings[] | cdktn.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
  }

  // ci - computed: false, optional: true, required: false
  private _ci = new SyntheticsTestMobileOptionsListCiOutputReference(this, "ci");
  public get ci() {
    return this._ci;
  }
  public putCi(value: SyntheticsTestMobileOptionsListCi) {
    this._ci.internalValue = value;
  }
  public resetCi() {
    this._ci.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciInput() {
    return this._ci.internalValue;
  }

  // mobile_application - computed: false, optional: false, required: true
  private _mobileApplication = new SyntheticsTestMobileOptionsListMobileApplicationOutputReference(this, "mobile_application");
  public get mobileApplication() {
    return this._mobileApplication;
  }
  public putMobileApplication(value: SyntheticsTestMobileOptionsListMobileApplication) {
    this._mobileApplication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileApplicationInput() {
    return this._mobileApplication.internalValue;
  }

  // monitor_options - computed: false, optional: true, required: false
  private _monitorOptions = new SyntheticsTestMobileOptionsListMonitorOptionsOutputReference(this, "monitor_options");
  public get monitorOptions() {
    return this._monitorOptions;
  }
  public putMonitorOptions(value: SyntheticsTestMobileOptionsListMonitorOptions) {
    this._monitorOptions.internalValue = value;
  }
  public resetMonitorOptions() {
    this._monitorOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorOptionsInput() {
    return this._monitorOptions.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new SyntheticsTestMobileOptionsListRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: SyntheticsTestMobileOptionsListRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new SyntheticsTestMobileOptionsListSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: SyntheticsTestMobileOptionsListScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }
}
export interface SyntheticsTestMobileStepParamsElementRelativePosition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#x SyntheticsTest#x}
  */
  readonly x?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#y SyntheticsTest#y}
  */
  readonly y?: number;
}

export function syntheticsTestMobileStepParamsElementRelativePositionToTerraform(struct?: SyntheticsTestMobileStepParamsElementRelativePositionOutputReference | SyntheticsTestMobileStepParamsElementRelativePosition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x: cdktn.numberToTerraform(struct!.x),
    y: cdktn.numberToTerraform(struct!.y),
  }
}


export function syntheticsTestMobileStepParamsElementRelativePositionToHclTerraform(struct?: SyntheticsTestMobileStepParamsElementRelativePositionOutputReference | SyntheticsTestMobileStepParamsElementRelativePosition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x: {
      value: cdktn.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktn.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestMobileStepParamsElementRelativePositionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestMobileStepParamsElementRelativePosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileStepParamsElementRelativePosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._x = undefined;
      this._y = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // x - computed: false, optional: true, required: false
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: true, required: false
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}
export interface SyntheticsTestMobileStepParamsElementUserLocatorValues {
  /**
  * Valid values are `accessibility-id`, `id`, `ios-predicate-string`, `ios-class-chain`, `xpath`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#value SyntheticsTest#value}
  */
  readonly value?: string;
}

export function syntheticsTestMobileStepParamsElementUserLocatorValuesToTerraform(struct?: SyntheticsTestMobileStepParamsElementUserLocatorValues | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktn.stringToTerraform(struct!.type),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function syntheticsTestMobileStepParamsElementUserLocatorValuesToHclTerraform(struct?: SyntheticsTestMobileStepParamsElementUserLocatorValues | cdktn.IResolvable): any {
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

export class SyntheticsTestMobileStepParamsElementUserLocatorValuesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestMobileStepParamsElementUserLocatorValues | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileStepParamsElementUserLocatorValues | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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
}

export class SyntheticsTestMobileStepParamsElementUserLocatorValuesList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestMobileStepParamsElementUserLocatorValues[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestMobileStepParamsElementUserLocatorValuesOutputReference {
    return new SyntheticsTestMobileStepParamsElementUserLocatorValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestMobileStepParamsElementUserLocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#fail_test_on_cannot_locate SyntheticsTest#fail_test_on_cannot_locate}
  */
  readonly failTestOnCannotLocate?: boolean | cdktn.IResolvable;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#values SyntheticsTest#values}
  */
  readonly values?: SyntheticsTestMobileStepParamsElementUserLocatorValues[] | cdktn.IResolvable;
}

export function syntheticsTestMobileStepParamsElementUserLocatorToTerraform(struct?: SyntheticsTestMobileStepParamsElementUserLocatorOutputReference | SyntheticsTestMobileStepParamsElementUserLocator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_test_on_cannot_locate: cdktn.booleanToTerraform(struct!.failTestOnCannotLocate),
    values: cdktn.listMapper(syntheticsTestMobileStepParamsElementUserLocatorValuesToTerraform, true)(struct!.values),
  }
}


export function syntheticsTestMobileStepParamsElementUserLocatorToHclTerraform(struct?: SyntheticsTestMobileStepParamsElementUserLocatorOutputReference | SyntheticsTestMobileStepParamsElementUserLocator): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_test_on_cannot_locate: {
      value: cdktn.booleanToHclTerraform(struct!.failTestOnCannotLocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktn.listMapperHcl(syntheticsTestMobileStepParamsElementUserLocatorValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestMobileStepParamsElementUserLocatorValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestMobileStepParamsElementUserLocatorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestMobileStepParamsElementUserLocator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failTestOnCannotLocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.failTestOnCannotLocate = this._failTestOnCannotLocate;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileStepParamsElementUserLocator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failTestOnCannotLocate = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failTestOnCannotLocate = value.failTestOnCannotLocate;
      this._values.internalValue = value.values;
    }
  }

  // fail_test_on_cannot_locate - computed: false, optional: true, required: false
  private _failTestOnCannotLocate?: boolean | cdktn.IResolvable; 
  public get failTestOnCannotLocate() {
    return this.getBooleanAttribute('fail_test_on_cannot_locate');
  }
  public set failTestOnCannotLocate(value: boolean | cdktn.IResolvable) {
    this._failTestOnCannotLocate = value;
  }
  public resetFailTestOnCannotLocate() {
    this._failTestOnCannotLocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failTestOnCannotLocateInput() {
    return this._failTestOnCannotLocate;
  }

  // values - computed: false, optional: true, required: false
  private _values = new SyntheticsTestMobileStepParamsElementUserLocatorValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: SyntheticsTestMobileStepParamsElementUserLocatorValues[] | cdktn.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface SyntheticsTestMobileStepParamsElement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#context SyntheticsTest#context}
  */
  readonly context?: string;
  /**
  * Valid values are `native`, `web`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#context_type SyntheticsTest#context_type}
  */
  readonly contextType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#element_description SyntheticsTest#element_description}
  */
  readonly elementDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#multi_locator SyntheticsTest#multi_locator}
  */
  readonly multiLocator?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#text_content SyntheticsTest#text_content}
  */
  readonly textContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#view_name SyntheticsTest#view_name}
  */
  readonly viewName?: string;
  /**
  * relative_position block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#relative_position SyntheticsTest#relative_position}
  */
  readonly relativePosition?: SyntheticsTestMobileStepParamsElementRelativePosition;
  /**
  * user_locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#user_locator SyntheticsTest#user_locator}
  */
  readonly userLocator?: SyntheticsTestMobileStepParamsElementUserLocator;
}

export function syntheticsTestMobileStepParamsElementToTerraform(struct?: SyntheticsTestMobileStepParamsElementOutputReference | SyntheticsTestMobileStepParamsElement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktn.stringToTerraform(struct!.context),
    context_type: cdktn.stringToTerraform(struct!.contextType),
    element_description: cdktn.stringToTerraform(struct!.elementDescription),
    multi_locator: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.multiLocator),
    text_content: cdktn.stringToTerraform(struct!.textContent),
    view_name: cdktn.stringToTerraform(struct!.viewName),
    relative_position: syntheticsTestMobileStepParamsElementRelativePositionToTerraform(struct!.relativePosition),
    user_locator: syntheticsTestMobileStepParamsElementUserLocatorToTerraform(struct!.userLocator),
  }
}


export function syntheticsTestMobileStepParamsElementToHclTerraform(struct?: SyntheticsTestMobileStepParamsElementOutputReference | SyntheticsTestMobileStepParamsElement): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktn.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_type: {
      value: cdktn.stringToHclTerraform(struct!.contextType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element_description: {
      value: cdktn.stringToHclTerraform(struct!.elementDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_locator: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.multiLocator),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    text_content: {
      value: cdktn.stringToHclTerraform(struct!.textContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_name: {
      value: cdktn.stringToHclTerraform(struct!.viewName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_position: {
      value: syntheticsTestMobileStepParamsElementRelativePositionToHclTerraform(struct!.relativePosition),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestMobileStepParamsElementRelativePositionList",
    },
    user_locator: {
      value: syntheticsTestMobileStepParamsElementUserLocatorToHclTerraform(struct!.userLocator),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestMobileStepParamsElementUserLocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestMobileStepParamsElementOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestMobileStepParamsElement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextType = this._contextType;
    }
    if (this._elementDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementDescription = this._elementDescription;
    }
    if (this._multiLocator !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLocator = this._multiLocator;
    }
    if (this._textContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.textContent = this._textContent;
    }
    if (this._viewName !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewName = this._viewName;
    }
    if (this._relativePosition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativePosition = this._relativePosition?.internalValue;
    }
    if (this._userLocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLocator = this._userLocator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileStepParamsElement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._contextType = undefined;
      this._elementDescription = undefined;
      this._multiLocator = undefined;
      this._textContent = undefined;
      this._viewName = undefined;
      this._relativePosition.internalValue = undefined;
      this._userLocator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._contextType = value.contextType;
      this._elementDescription = value.elementDescription;
      this._multiLocator = value.multiLocator;
      this._textContent = value.textContent;
      this._viewName = value.viewName;
      this._relativePosition.internalValue = value.relativePosition;
      this._userLocator.internalValue = value.userLocator;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_type - computed: false, optional: true, required: false
  private _contextType?: string; 
  public get contextType() {
    return this.getStringAttribute('context_type');
  }
  public set contextType(value: string) {
    this._contextType = value;
  }
  public resetContextType() {
    this._contextType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextTypeInput() {
    return this._contextType;
  }

  // element_description - computed: false, optional: true, required: false
  private _elementDescription?: string; 
  public get elementDescription() {
    return this.getStringAttribute('element_description');
  }
  public set elementDescription(value: string) {
    this._elementDescription = value;
  }
  public resetElementDescription() {
    this._elementDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementDescriptionInput() {
    return this._elementDescription;
  }

  // multi_locator - computed: false, optional: true, required: false
  private _multiLocator?: { [key: string]: string }; 
  public get multiLocator() {
    return this.getStringMapAttribute('multi_locator');
  }
  public set multiLocator(value: { [key: string]: string }) {
    this._multiLocator = value;
  }
  public resetMultiLocator() {
    this._multiLocator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLocatorInput() {
    return this._multiLocator;
  }

  // text_content - computed: false, optional: true, required: false
  private _textContent?: string; 
  public get textContent() {
    return this.getStringAttribute('text_content');
  }
  public set textContent(value: string) {
    this._textContent = value;
  }
  public resetTextContent() {
    this._textContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textContentInput() {
    return this._textContent;
  }

  // view_name - computed: false, optional: true, required: false
  private _viewName?: string; 
  public get viewName() {
    return this.getStringAttribute('view_name');
  }
  public set viewName(value: string) {
    this._viewName = value;
  }
  public resetViewName() {
    this._viewName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewNameInput() {
    return this._viewName;
  }

  // relative_position - computed: false, optional: true, required: false
  private _relativePosition = new SyntheticsTestMobileStepParamsElementRelativePositionOutputReference(this, "relative_position");
  public get relativePosition() {
    return this._relativePosition;
  }
  public putRelativePosition(value: SyntheticsTestMobileStepParamsElementRelativePosition) {
    this._relativePosition.internalValue = value;
  }
  public resetRelativePosition() {
    this._relativePosition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativePositionInput() {
    return this._relativePosition.internalValue;
  }

  // user_locator - computed: false, optional: true, required: false
  private _userLocator = new SyntheticsTestMobileStepParamsElementUserLocatorOutputReference(this, "user_locator");
  public get userLocator() {
    return this._userLocator;
  }
  public putUserLocator(value: SyntheticsTestMobileStepParamsElementUserLocator) {
    this._userLocator.internalValue = value;
  }
  public resetUserLocator() {
    this._userLocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLocatorInput() {
    return this._userLocator.internalValue;
  }
}
export interface SyntheticsTestMobileStepParamsPositions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#x SyntheticsTest#x}
  */
  readonly x?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#y SyntheticsTest#y}
  */
  readonly y?: number;
}

export function syntheticsTestMobileStepParamsPositionsToTerraform(struct?: SyntheticsTestMobileStepParamsPositions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x: cdktn.numberToTerraform(struct!.x),
    y: cdktn.numberToTerraform(struct!.y),
  }
}


export function syntheticsTestMobileStepParamsPositionsToHclTerraform(struct?: SyntheticsTestMobileStepParamsPositions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    x: {
      value: cdktn.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktn.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestMobileStepParamsPositionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestMobileStepParamsPositions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileStepParamsPositions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // x - computed: false, optional: true, required: false
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: true, required: false
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}

export class SyntheticsTestMobileStepParamsPositionsList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestMobileStepParamsPositions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestMobileStepParamsPositionsOutputReference {
    return new SyntheticsTestMobileStepParamsPositionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestMobileStepParamsVariable {
  /**
  * Example of the extracted variable. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#example SyntheticsTest#example}
  */
  readonly example?: string;
  /**
  * Name of the extracted variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#name SyntheticsTest#name}
  */
  readonly name: string;
}

export function syntheticsTestMobileStepParamsVariableToTerraform(struct?: SyntheticsTestMobileStepParamsVariableOutputReference | SyntheticsTestMobileStepParamsVariable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    example: cdktn.stringToTerraform(struct!.example),
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function syntheticsTestMobileStepParamsVariableToHclTerraform(struct?: SyntheticsTestMobileStepParamsVariableOutputReference | SyntheticsTestMobileStepParamsVariable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    example: {
      value: cdktn.stringToHclTerraform(struct!.example),
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

export class SyntheticsTestMobileStepParamsVariableOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestMobileStepParamsVariable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileStepParamsVariable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._example = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._example = value.example;
      this._name = value.name;
    }
  }

  // example - computed: false, optional: true, required: false
  private _example?: string; 
  public get example() {
    return this.getStringAttribute('example');
  }
  public set example(value: string) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
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
export interface SyntheticsTestMobileStepParams {
  /**
  * Check type to use for an assertion step. Valid values are `equals`, `notEquals`, `contains`, `notContains`, `startsWith`, `notStartsWith`, `greater`, `lower`, `greaterEquals`, `lowerEquals`, `matchRegex`, `between`, `isEmpty`, `notIsEmpty`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#check SyntheticsTest#check}
  */
  readonly check?: string;
  /**
  * Delay between each key stroke for a "type test" step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#delay SyntheticsTest#delay}
  */
  readonly delay?: number;
  /**
  * Valid values are `up`, `down`, `left`, `right`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#direction SyntheticsTest#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#enable SyntheticsTest#enable}
  */
  readonly enable?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#max_scrolls SyntheticsTest#max_scrolls}
  */
  readonly maxScrolls?: number;
  /**
  * ID of the Synthetics test to use as subtest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#subtest_public_id SyntheticsTest#subtest_public_id}
  */
  readonly subtestPublicId?: string;
  /**
  * Value of the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#value SyntheticsTest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#with_enter SyntheticsTest#with_enter}
  */
  readonly withEnter?: boolean | cdktn.IResolvable;
  /**
  * X coordinates for a "scroll step".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#x SyntheticsTest#x}
  */
  readonly x?: number;
  /**
  * Y coordinates for a "scroll step".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#y SyntheticsTest#y}
  */
  readonly y?: number;
  /**
  * element block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#element SyntheticsTest#element}
  */
  readonly element?: SyntheticsTestMobileStepParamsElement;
  /**
  * positions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#positions SyntheticsTest#positions}
  */
  readonly positions?: SyntheticsTestMobileStepParamsPositions[] | cdktn.IResolvable;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#variable SyntheticsTest#variable}
  */
  readonly variable?: SyntheticsTestMobileStepParamsVariable;
}

export function syntheticsTestMobileStepParamsToTerraform(struct?: SyntheticsTestMobileStepParamsOutputReference | SyntheticsTestMobileStepParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check: cdktn.stringToTerraform(struct!.check),
    delay: cdktn.numberToTerraform(struct!.delay),
    direction: cdktn.stringToTerraform(struct!.direction),
    enable: cdktn.booleanToTerraform(struct!.enable),
    max_scrolls: cdktn.numberToTerraform(struct!.maxScrolls),
    subtest_public_id: cdktn.stringToTerraform(struct!.subtestPublicId),
    value: cdktn.stringToTerraform(struct!.value),
    with_enter: cdktn.booleanToTerraform(struct!.withEnter),
    x: cdktn.numberToTerraform(struct!.x),
    y: cdktn.numberToTerraform(struct!.y),
    element: syntheticsTestMobileStepParamsElementToTerraform(struct!.element),
    positions: cdktn.listMapper(syntheticsTestMobileStepParamsPositionsToTerraform, true)(struct!.positions),
    variable: syntheticsTestMobileStepParamsVariableToTerraform(struct!.variable),
  }
}


export function syntheticsTestMobileStepParamsToHclTerraform(struct?: SyntheticsTestMobileStepParamsOutputReference | SyntheticsTestMobileStepParams): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check: {
      value: cdktn.stringToHclTerraform(struct!.check),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delay: {
      value: cdktn.numberToHclTerraform(struct!.delay),
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
    enable: {
      value: cdktn.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_scrolls: {
      value: cdktn.numberToHclTerraform(struct!.maxScrolls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subtest_public_id: {
      value: cdktn.stringToHclTerraform(struct!.subtestPublicId),
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
    with_enter: {
      value: cdktn.booleanToHclTerraform(struct!.withEnter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x: {
      value: cdktn.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktn.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    element: {
      value: syntheticsTestMobileStepParamsElementToHclTerraform(struct!.element),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestMobileStepParamsElementList",
    },
    positions: {
      value: cdktn.listMapperHcl(syntheticsTestMobileStepParamsPositionsToHclTerraform, true)(struct!.positions),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestMobileStepParamsPositionsList",
    },
    variable: {
      value: syntheticsTestMobileStepParamsVariableToHclTerraform(struct!.variable),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestMobileStepParamsVariableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestMobileStepParamsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestMobileStepParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._check !== undefined) {
      hasAnyValues = true;
      internalValueResult.check = this._check;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._maxScrolls !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScrolls = this._maxScrolls;
    }
    if (this._subtestPublicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtestPublicId = this._subtestPublicId;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._withEnter !== undefined) {
      hasAnyValues = true;
      internalValueResult.withEnter = this._withEnter;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    if (this._element?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element?.internalValue;
    }
    if (this._positions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.positions = this._positions?.internalValue;
    }
    if (this._variable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileStepParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._check = undefined;
      this._delay = undefined;
      this._direction = undefined;
      this._enable = undefined;
      this._maxScrolls = undefined;
      this._subtestPublicId = undefined;
      this._value = undefined;
      this._withEnter = undefined;
      this._x = undefined;
      this._y = undefined;
      this._element.internalValue = undefined;
      this._positions.internalValue = undefined;
      this._variable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._check = value.check;
      this._delay = value.delay;
      this._direction = value.direction;
      this._enable = value.enable;
      this._maxScrolls = value.maxScrolls;
      this._subtestPublicId = value.subtestPublicId;
      this._value = value.value;
      this._withEnter = value.withEnter;
      this._x = value.x;
      this._y = value.y;
      this._element.internalValue = value.element;
      this._positions.internalValue = value.positions;
      this._variable.internalValue = value.variable;
    }
  }

  // check - computed: false, optional: true, required: false
  private _check?: string; 
  public get check() {
    return this.getStringAttribute('check');
  }
  public set check(value: string) {
    this._check = value;
  }
  public resetCheck() {
    this._check = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktn.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktn.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // max_scrolls - computed: false, optional: true, required: false
  private _maxScrolls?: number; 
  public get maxScrolls() {
    return this.getNumberAttribute('max_scrolls');
  }
  public set maxScrolls(value: number) {
    this._maxScrolls = value;
  }
  public resetMaxScrolls() {
    this._maxScrolls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScrollsInput() {
    return this._maxScrolls;
  }

  // subtest_public_id - computed: false, optional: true, required: false
  private _subtestPublicId?: string; 
  public get subtestPublicId() {
    return this.getStringAttribute('subtest_public_id');
  }
  public set subtestPublicId(value: string) {
    this._subtestPublicId = value;
  }
  public resetSubtestPublicId() {
    this._subtestPublicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtestPublicIdInput() {
    return this._subtestPublicId;
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

  // with_enter - computed: false, optional: true, required: false
  private _withEnter?: boolean | cdktn.IResolvable; 
  public get withEnter() {
    return this.getBooleanAttribute('with_enter');
  }
  public set withEnter(value: boolean | cdktn.IResolvable) {
    this._withEnter = value;
  }
  public resetWithEnter() {
    this._withEnter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withEnterInput() {
    return this._withEnter;
  }

  // x - computed: false, optional: true, required: false
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: true, required: false
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }

  // element - computed: false, optional: true, required: false
  private _element = new SyntheticsTestMobileStepParamsElementOutputReference(this, "element");
  public get element() {
    return this._element;
  }
  public putElement(value: SyntheticsTestMobileStepParamsElement) {
    this._element.internalValue = value;
  }
  public resetElement() {
    this._element.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element.internalValue;
  }

  // positions - computed: false, optional: true, required: false
  private _positions = new SyntheticsTestMobileStepParamsPositionsList(this, "positions", false);
  public get positions() {
    return this._positions;
  }
  public putPositions(value: SyntheticsTestMobileStepParamsPositions[] | cdktn.IResolvable) {
    this._positions.internalValue = value;
  }
  public resetPositions() {
    this._positions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionsInput() {
    return this._positions.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new SyntheticsTestMobileStepParamsVariableOutputReference(this, "variable");
  public get variable() {
    return this._variable;
  }
  public putVariable(value: SyntheticsTestMobileStepParamsVariable) {
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
export interface SyntheticsTestMobileStep {
  /**
  * A boolean set to allow this step to fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#allow_failure SyntheticsTest#allow_failure}
  */
  readonly allowFailure?: boolean | cdktn.IResolvable;
  /**
  * A boolean set to determine if the step has a new step element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#has_new_step_element SyntheticsTest#has_new_step_element}
  */
  readonly hasNewStepElement?: boolean | cdktn.IResolvable;
  /**
  * A boolean to use in addition to `allowFailure` to determine if the test should be marked as failed when the step fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#is_critical SyntheticsTest#is_critical}
  */
  readonly isCritical?: boolean | cdktn.IResolvable;
  /**
  * The name of the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * A boolean set to not take a screenshot for the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#no_screenshot SyntheticsTest#no_screenshot}
  */
  readonly noScreenshot?: boolean | cdktn.IResolvable;
  /**
  * The public ID of the step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#public_id SyntheticsTest#public_id}
  */
  readonly publicId?: string;
  /**
  * The time before declaring a step failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#timeout SyntheticsTest#timeout}
  */
  readonly timeout?: number;
  /**
  * The type of the step. Valid values are `assertElementContent`, `assertScreenContains`, `assertScreenLacks`, `doubleTap`, `extractVariable`, `flick`, `openDeeplink`, `playSubTest`, `pressBack`, `restartApplication`, `rotate`, `scroll`, `scrollToElement`, `tap`, `toggleWiFi`, `typeText`, `wait`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#params SyntheticsTest#params}
  */
  readonly params: SyntheticsTestMobileStepParams;
}

export function syntheticsTestMobileStepToTerraform(struct?: SyntheticsTestMobileStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_failure: cdktn.booleanToTerraform(struct!.allowFailure),
    has_new_step_element: cdktn.booleanToTerraform(struct!.hasNewStepElement),
    is_critical: cdktn.booleanToTerraform(struct!.isCritical),
    name: cdktn.stringToTerraform(struct!.name),
    no_screenshot: cdktn.booleanToTerraform(struct!.noScreenshot),
    public_id: cdktn.stringToTerraform(struct!.publicId),
    timeout: cdktn.numberToTerraform(struct!.timeout),
    type: cdktn.stringToTerraform(struct!.type),
    params: syntheticsTestMobileStepParamsToTerraform(struct!.params),
  }
}


export function syntheticsTestMobileStepToHclTerraform(struct?: SyntheticsTestMobileStep | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_failure: {
      value: cdktn.booleanToHclTerraform(struct!.allowFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    has_new_step_element: {
      value: cdktn.booleanToHclTerraform(struct!.hasNewStepElement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_critical: {
      value: cdktn.booleanToHclTerraform(struct!.isCritical),
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
    no_screenshot: {
      value: cdktn.booleanToHclTerraform(struct!.noScreenshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_id: {
      value: cdktn.stringToHclTerraform(struct!.publicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktn.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: syntheticsTestMobileStepParamsToHclTerraform(struct!.params),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestMobileStepParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestMobileStepOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestMobileStep | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFailure = this._allowFailure;
    }
    if (this._hasNewStepElement !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasNewStepElement = this._hasNewStepElement;
    }
    if (this._isCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCritical = this._isCritical;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noScreenshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.noScreenshot = this._noScreenshot;
    }
    if (this._publicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicId = this._publicId;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestMobileStep | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowFailure = undefined;
      this._hasNewStepElement = undefined;
      this._isCritical = undefined;
      this._name = undefined;
      this._noScreenshot = undefined;
      this._publicId = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._params.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowFailure = value.allowFailure;
      this._hasNewStepElement = value.hasNewStepElement;
      this._isCritical = value.isCritical;
      this._name = value.name;
      this._noScreenshot = value.noScreenshot;
      this._publicId = value.publicId;
      this._timeout = value.timeout;
      this._type = value.type;
      this._params.internalValue = value.params;
    }
  }

  // allow_failure - computed: false, optional: true, required: false
  private _allowFailure?: boolean | cdktn.IResolvable; 
  public get allowFailure() {
    return this.getBooleanAttribute('allow_failure');
  }
  public set allowFailure(value: boolean | cdktn.IResolvable) {
    this._allowFailure = value;
  }
  public resetAllowFailure() {
    this._allowFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFailureInput() {
    return this._allowFailure;
  }

  // has_new_step_element - computed: false, optional: true, required: false
  private _hasNewStepElement?: boolean | cdktn.IResolvable; 
  public get hasNewStepElement() {
    return this.getBooleanAttribute('has_new_step_element');
  }
  public set hasNewStepElement(value: boolean | cdktn.IResolvable) {
    this._hasNewStepElement = value;
  }
  public resetHasNewStepElement() {
    this._hasNewStepElement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasNewStepElementInput() {
    return this._hasNewStepElement;
  }

  // is_critical - computed: false, optional: true, required: false
  private _isCritical?: boolean | cdktn.IResolvable; 
  public get isCritical() {
    return this.getBooleanAttribute('is_critical');
  }
  public set isCritical(value: boolean | cdktn.IResolvable) {
    this._isCritical = value;
  }
  public resetIsCritical() {
    this._isCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCriticalInput() {
    return this._isCritical;
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

  // no_screenshot - computed: false, optional: true, required: false
  private _noScreenshot?: boolean | cdktn.IResolvable; 
  public get noScreenshot() {
    return this.getBooleanAttribute('no_screenshot');
  }
  public set noScreenshot(value: boolean | cdktn.IResolvable) {
    this._noScreenshot = value;
  }
  public resetNoScreenshot() {
    this._noScreenshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noScreenshotInput() {
    return this._noScreenshot;
  }

  // public_id - computed: false, optional: true, required: false
  private _publicId?: string; 
  public get publicId() {
    return this.getStringAttribute('public_id');
  }
  public set publicId(value: string) {
    this._publicId = value;
  }
  public resetPublicId() {
    this._publicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIdInput() {
    return this._publicId;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // params - computed: false, optional: false, required: true
  private _params = new SyntheticsTestMobileStepParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: SyntheticsTestMobileStepParams) {
    this._params.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}

export class SyntheticsTestMobileStepList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestMobileStep[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestMobileStepOutputReference {
    return new SyntheticsTestMobileStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestOptionsListCi {
  /**
  * Execution rule for a Synthetics test. Valid values are `blocking`, `non_blocking`, `skipped`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#execution_rule SyntheticsTest#execution_rule}
  */
  readonly executionRule?: string;
}

export function syntheticsTestOptionsListCiToTerraform(struct?: SyntheticsTestOptionsListCiOutputReference | SyntheticsTestOptionsListCi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_rule: cdktn.stringToTerraform(struct!.executionRule),
  }
}


export function syntheticsTestOptionsListCiToHclTerraform(struct?: SyntheticsTestOptionsListCiOutputReference | SyntheticsTestOptionsListCi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_rule: {
      value: cdktn.stringToHclTerraform(struct!.executionRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestOptionsListCiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestOptionsListCi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRule = this._executionRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestOptionsListCi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionRule = value.executionRule;
    }
  }

  // execution_rule - computed: false, optional: true, required: false
  private _executionRule?: string; 
  public get executionRule() {
    return this.getStringAttribute('execution_rule');
  }
  public set executionRule(value: string) {
    this._executionRule = value;
  }
  public resetExecutionRule() {
    this._executionRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRuleInput() {
    return this._executionRule;
  }
}
export interface SyntheticsTestOptionsListMonitorOptions {
  /**
  * A message to include with a re-notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#escalation_message SyntheticsTest#escalation_message}
  */
  readonly escalationMessage?: string;
  /**
  * The name of the preset for the notification for the monitor. Valid values are `show_all`, `hide_all`, `hide_query`, `hide_handles`, `hide_query_and_handles`, `show_only_snapshot`, `hide_handles_and_footer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#notification_preset_name SyntheticsTest#notification_preset_name}
  */
  readonly notificationPresetName?: string;
  /**
  * Specify a renotification frequency in minutes. Values available by default are `0`, `10`, `20`, `30`, `40`, `50`, `60`, `90`, `120`, `180`, `240`, `300`, `360`, `720`, `1440`. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#renotify_interval SyntheticsTest#renotify_interval}
  */
  readonly renotifyInterval?: number;
  /**
  * The number of times a monitor renotifies. It can only be set if `renotify_interval` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#renotify_occurrences SyntheticsTest#renotify_occurrences}
  */
  readonly renotifyOccurrences?: number;
}

export function syntheticsTestOptionsListMonitorOptionsToTerraform(struct?: SyntheticsTestOptionsListMonitorOptionsOutputReference | SyntheticsTestOptionsListMonitorOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_message: cdktn.stringToTerraform(struct!.escalationMessage),
    notification_preset_name: cdktn.stringToTerraform(struct!.notificationPresetName),
    renotify_interval: cdktn.numberToTerraform(struct!.renotifyInterval),
    renotify_occurrences: cdktn.numberToTerraform(struct!.renotifyOccurrences),
  }
}


export function syntheticsTestOptionsListMonitorOptionsToHclTerraform(struct?: SyntheticsTestOptionsListMonitorOptionsOutputReference | SyntheticsTestOptionsListMonitorOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escalation_message: {
      value: cdktn.stringToHclTerraform(struct!.escalationMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_preset_name: {
      value: cdktn.stringToHclTerraform(struct!.notificationPresetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renotify_interval: {
      value: cdktn.numberToHclTerraform(struct!.renotifyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renotify_occurrences: {
      value: cdktn.numberToHclTerraform(struct!.renotifyOccurrences),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestOptionsListMonitorOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestOptionsListMonitorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escalationMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationMessage = this._escalationMessage;
    }
    if (this._notificationPresetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationPresetName = this._notificationPresetName;
    }
    if (this._renotifyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.renotifyInterval = this._renotifyInterval;
    }
    if (this._renotifyOccurrences !== undefined) {
      hasAnyValues = true;
      internalValueResult.renotifyOccurrences = this._renotifyOccurrences;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestOptionsListMonitorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._escalationMessage = undefined;
      this._notificationPresetName = undefined;
      this._renotifyInterval = undefined;
      this._renotifyOccurrences = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._escalationMessage = value.escalationMessage;
      this._notificationPresetName = value.notificationPresetName;
      this._renotifyInterval = value.renotifyInterval;
      this._renotifyOccurrences = value.renotifyOccurrences;
    }
  }

  // escalation_message - computed: false, optional: true, required: false
  private _escalationMessage?: string; 
  public get escalationMessage() {
    return this.getStringAttribute('escalation_message');
  }
  public set escalationMessage(value: string) {
    this._escalationMessage = value;
  }
  public resetEscalationMessage() {
    this._escalationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationMessageInput() {
    return this._escalationMessage;
  }

  // notification_preset_name - computed: false, optional: true, required: false
  private _notificationPresetName?: string; 
  public get notificationPresetName() {
    return this.getStringAttribute('notification_preset_name');
  }
  public set notificationPresetName(value: string) {
    this._notificationPresetName = value;
  }
  public resetNotificationPresetName() {
    this._notificationPresetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationPresetNameInput() {
    return this._notificationPresetName;
  }

  // renotify_interval - computed: false, optional: true, required: false
  private _renotifyInterval?: number; 
  public get renotifyInterval() {
    return this.getNumberAttribute('renotify_interval');
  }
  public set renotifyInterval(value: number) {
    this._renotifyInterval = value;
  }
  public resetRenotifyInterval() {
    this._renotifyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyIntervalInput() {
    return this._renotifyInterval;
  }

  // renotify_occurrences - computed: false, optional: true, required: false
  private _renotifyOccurrences?: number; 
  public get renotifyOccurrences() {
    return this.getNumberAttribute('renotify_occurrences');
  }
  public set renotifyOccurrences(value: number) {
    this._renotifyOccurrences = value;
  }
  public resetRenotifyOccurrences() {
    this._renotifyOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyOccurrencesInput() {
    return this._renotifyOccurrences;
  }
}
export interface SyntheticsTestOptionsListRetry {
  /**
  * Number of retries needed to consider a location as failed before sending a notification alert. Maximum value: `3` for `api` tests, `2` for `browser` and `mobile` tests. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#count SyntheticsTest#count}
  */
  readonly count?: number;
  /**
  * Interval between a failed test and the next retry in milliseconds. Maximum value: `5000`. Defaults to `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#interval SyntheticsTest#interval}
  */
  readonly interval?: number;
}

export function syntheticsTestOptionsListRetryToTerraform(struct?: SyntheticsTestOptionsListRetryOutputReference | SyntheticsTestOptionsListRetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktn.numberToTerraform(struct!.count),
    interval: cdktn.numberToTerraform(struct!.interval),
  }
}


export function syntheticsTestOptionsListRetryToHclTerraform(struct?: SyntheticsTestOptionsListRetryOutputReference | SyntheticsTestOptionsListRetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktn.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktn.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestOptionsListRetryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestOptionsListRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestOptionsListRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._interval = value.interval;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface SyntheticsTestOptionsListRumSettings {
  /**
  * RUM application ID used to collect RUM data for the browser test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#application_id SyntheticsTest#application_id}
  */
  readonly applicationId?: string;
  /**
  * RUM application API key ID used to collect RUM data for the browser test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#client_token_id SyntheticsTest#client_token_id}
  */
  readonly clientTokenId?: number;
  /**
  * Determines whether RUM data is collected during test runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#is_enabled SyntheticsTest#is_enabled}
  */
  readonly isEnabled: boolean | cdktn.IResolvable;
}

export function syntheticsTestOptionsListRumSettingsToTerraform(struct?: SyntheticsTestOptionsListRumSettingsOutputReference | SyntheticsTestOptionsListRumSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktn.stringToTerraform(struct!.applicationId),
    client_token_id: cdktn.numberToTerraform(struct!.clientTokenId),
    is_enabled: cdktn.booleanToTerraform(struct!.isEnabled),
  }
}


export function syntheticsTestOptionsListRumSettingsToHclTerraform(struct?: SyntheticsTestOptionsListRumSettingsOutputReference | SyntheticsTestOptionsListRumSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktn.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_token_id: {
      value: cdktn.numberToHclTerraform(struct!.clientTokenId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktn.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestOptionsListRumSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestOptionsListRumSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._clientTokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTokenId = this._clientTokenId;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestOptionsListRumSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationId = undefined;
      this._clientTokenId = undefined;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationId = value.applicationId;
      this._clientTokenId = value.clientTokenId;
      this._isEnabled = value.isEnabled;
    }
  }

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // client_token_id - computed: true, optional: true, required: false
  private _clientTokenId?: number; 
  public get clientTokenId() {
    return this.getNumberAttribute('client_token_id');
  }
  public set clientTokenId(value: number) {
    this._clientTokenId = value;
  }
  public resetClientTokenId() {
    this._clientTokenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTokenIdInput() {
    return this._clientTokenId;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktn.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktn.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface SyntheticsTestOptionsListSchedulingTimeframes {
  /**
  * Number representing the day of the week
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#day SyntheticsTest#day}
  */
  readonly day: number;
  /**
  * The hour of the day on which scheduling starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#from SyntheticsTest#from}
  */
  readonly from: string;
  /**
  * The hour of the day on which scheduling ends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#to SyntheticsTest#to}
  */
  readonly to: string;
}

export function syntheticsTestOptionsListSchedulingTimeframesToTerraform(struct?: SyntheticsTestOptionsListSchedulingTimeframes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktn.numberToTerraform(struct!.day),
    from: cdktn.stringToTerraform(struct!.from),
    to: cdktn.stringToTerraform(struct!.to),
  }
}


export function syntheticsTestOptionsListSchedulingTimeframesToHclTerraform(struct?: SyntheticsTestOptionsListSchedulingTimeframes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktn.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    from: {
      value: cdktn.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktn.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestOptionsListSchedulingTimeframesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestOptionsListSchedulingTimeframes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestOptionsListSchedulingTimeframes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class SyntheticsTestOptionsListSchedulingTimeframesList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestOptionsListSchedulingTimeframes[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestOptionsListSchedulingTimeframesOutputReference {
    return new SyntheticsTestOptionsListSchedulingTimeframesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestOptionsListScheduling {
  /**
  * Timezone in which the timeframe is based.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#timezone SyntheticsTest#timezone}
  */
  readonly timezone: string;
  /**
  * timeframes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#timeframes SyntheticsTest#timeframes}
  */
  readonly timeframes: SyntheticsTestOptionsListSchedulingTimeframes[] | cdktn.IResolvable;
}

export function syntheticsTestOptionsListSchedulingToTerraform(struct?: SyntheticsTestOptionsListSchedulingOutputReference | SyntheticsTestOptionsListScheduling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timezone: cdktn.stringToTerraform(struct!.timezone),
    timeframes: cdktn.listMapper(syntheticsTestOptionsListSchedulingTimeframesToTerraform, true)(struct!.timeframes),
  }
}


export function syntheticsTestOptionsListSchedulingToHclTerraform(struct?: SyntheticsTestOptionsListSchedulingOutputReference | SyntheticsTestOptionsListScheduling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timezone: {
      value: cdktn.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeframes: {
      value: cdktn.listMapperHcl(syntheticsTestOptionsListSchedulingTimeframesToHclTerraform, true)(struct!.timeframes),
      isBlock: true,
      type: "set",
      storageClassType: "SyntheticsTestOptionsListSchedulingTimeframesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestOptionsListSchedulingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestOptionsListScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._timeframes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframes = this._timeframes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestOptionsListScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timezone = undefined;
      this._timeframes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timezone = value.timezone;
      this._timeframes.internalValue = value.timeframes;
    }
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // timeframes - computed: false, optional: false, required: true
  private _timeframes = new SyntheticsTestOptionsListSchedulingTimeframesList(this, "timeframes", true);
  public get timeframes() {
    return this._timeframes;
  }
  public putTimeframes(value: SyntheticsTestOptionsListSchedulingTimeframes[] | cdktn.IResolvable) {
    this._timeframes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframesInput() {
    return this._timeframes.internalValue;
  }
}
export interface SyntheticsTestOptionsListStruct {
  /**
  * For SSL tests, whether or not the test should allow self signed certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#accept_self_signed SyntheticsTest#accept_self_signed}
  */
  readonly acceptSelfSigned?: boolean | cdktn.IResolvable;
  /**
  * Allows loading insecure content for a request in an API test or in a multistep API test step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#allow_insecure SyntheticsTest#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktn.IResolvable;
  /**
  * Blocked URL patterns. Requests made to URLs matching any of the patterns listed here will be blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#blocked_request_patterns SyntheticsTest#blocked_request_patterns}
  */
  readonly blockedRequestPatterns?: string[];
  /**
  * For SSL tests, whether or not the test should fail on revoked certificate in stapled OCSP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#check_certificate_revocation SyntheticsTest#check_certificate_revocation}
  */
  readonly checkCertificateRevocation?: boolean | cdktn.IResolvable;
  /**
  * For SSL tests, whether or not the test should disable fetching intermediate certificates from AIA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#disable_aia_intermediate_fetching SyntheticsTest#disable_aia_intermediate_fetching}
  */
  readonly disableAiaIntermediateFetching?: boolean | cdktn.IResolvable;
  /**
  * Disable Cross-Origin Resource Sharing for browser tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#disable_cors SyntheticsTest#disable_cors}
  */
  readonly disableCors?: boolean | cdktn.IResolvable;
  /**
  * Disable Content Security Policy for browser tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#disable_csp SyntheticsTest#disable_csp}
  */
  readonly disableCsp?: boolean | cdktn.IResolvable;
  /**
  * Determines whether or not the API HTTP test should follow redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#follow_redirects SyntheticsTest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktn.IResolvable;
  /**
  * HTTP version to use for an HTTP request in an API test or step. Valid values are `http1`, `http2`, `any`. Defaults to `"any"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#http_version SyntheticsTest#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Ignore server certificate error for browser tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#ignore_server_certificate_error SyntheticsTest#ignore_server_certificate_error}
  */
  readonly ignoreServerCertificateError?: boolean | cdktn.IResolvable;
  /**
  * Timeout before declaring the initial step as failed (in seconds) for browser tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#initial_navigation_timeout SyntheticsTest#initial_navigation_timeout}
  */
  readonly initialNavigationTimeout?: number;
  /**
  * Minimum amount of time in failure required to trigger an alert (in seconds). Default is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#min_failure_duration SyntheticsTest#min_failure_duration}
  */
  readonly minFailureDuration?: number;
  /**
  * Minimum number of locations in failure required to trigger an alert. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#min_location_failed SyntheticsTest#min_location_failed}
  */
  readonly minLocationFailed?: number;
  /**
  * The monitor name is used for the alert title as well as for all monitor dashboard widgets and SLOs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#monitor_name SyntheticsTest#monitor_name}
  */
  readonly monitorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#monitor_priority SyntheticsTest#monitor_priority}
  */
  readonly monitorPriority?: number;
  /**
  * Prevents saving screenshots of the steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#no_screenshot SyntheticsTest#no_screenshot}
  */
  readonly noScreenshot?: boolean | cdktn.IResolvable;
  /**
  * A list of role identifiers pulled from the Roles API to restrict read and write access. **Deprecated.** This field is no longer supported by the Datadog API. Please use `datadog_restriction_policy` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#restricted_roles SyntheticsTest#restricted_roles}
  */
  readonly restrictedRoles?: string[];
  /**
  * How often the test should run (in seconds). Valid range is `30-604800` for API tests and `60-604800` for browser tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#tick_every SyntheticsTest#tick_every}
  */
  readonly tickEvery: number;
  /**
  * ci block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#ci SyntheticsTest#ci}
  */
  readonly ci?: SyntheticsTestOptionsListCi;
  /**
  * monitor_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#monitor_options SyntheticsTest#monitor_options}
  */
  readonly monitorOptions?: SyntheticsTestOptionsListMonitorOptions;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#retry SyntheticsTest#retry}
  */
  readonly retry?: SyntheticsTestOptionsListRetry;
  /**
  * rum_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#rum_settings SyntheticsTest#rum_settings}
  */
  readonly rumSettings?: SyntheticsTestOptionsListRumSettings;
  /**
  * scheduling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#scheduling SyntheticsTest#scheduling}
  */
  readonly scheduling?: SyntheticsTestOptionsListScheduling;
}

export function syntheticsTestOptionsListStructToTerraform(struct?: SyntheticsTestOptionsListStructOutputReference | SyntheticsTestOptionsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_self_signed: cdktn.booleanToTerraform(struct!.acceptSelfSigned),
    allow_insecure: cdktn.booleanToTerraform(struct!.allowInsecure),
    blocked_request_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.blockedRequestPatterns),
    check_certificate_revocation: cdktn.booleanToTerraform(struct!.checkCertificateRevocation),
    disable_aia_intermediate_fetching: cdktn.booleanToTerraform(struct!.disableAiaIntermediateFetching),
    disable_cors: cdktn.booleanToTerraform(struct!.disableCors),
    disable_csp: cdktn.booleanToTerraform(struct!.disableCsp),
    follow_redirects: cdktn.booleanToTerraform(struct!.followRedirects),
    http_version: cdktn.stringToTerraform(struct!.httpVersion),
    ignore_server_certificate_error: cdktn.booleanToTerraform(struct!.ignoreServerCertificateError),
    initial_navigation_timeout: cdktn.numberToTerraform(struct!.initialNavigationTimeout),
    min_failure_duration: cdktn.numberToTerraform(struct!.minFailureDuration),
    min_location_failed: cdktn.numberToTerraform(struct!.minLocationFailed),
    monitor_name: cdktn.stringToTerraform(struct!.monitorName),
    monitor_priority: cdktn.numberToTerraform(struct!.monitorPriority),
    no_screenshot: cdktn.booleanToTerraform(struct!.noScreenshot),
    restricted_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.restrictedRoles),
    tick_every: cdktn.numberToTerraform(struct!.tickEvery),
    ci: syntheticsTestOptionsListCiToTerraform(struct!.ci),
    monitor_options: syntheticsTestOptionsListMonitorOptionsToTerraform(struct!.monitorOptions),
    retry: syntheticsTestOptionsListRetryToTerraform(struct!.retry),
    rum_settings: syntheticsTestOptionsListRumSettingsToTerraform(struct!.rumSettings),
    scheduling: syntheticsTestOptionsListSchedulingToTerraform(struct!.scheduling),
  }
}


export function syntheticsTestOptionsListStructToHclTerraform(struct?: SyntheticsTestOptionsListStructOutputReference | SyntheticsTestOptionsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_self_signed: {
      value: cdktn.booleanToHclTerraform(struct!.acceptSelfSigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_insecure: {
      value: cdktn.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    blocked_request_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.blockedRequestPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    check_certificate_revocation: {
      value: cdktn.booleanToHclTerraform(struct!.checkCertificateRevocation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_aia_intermediate_fetching: {
      value: cdktn.booleanToHclTerraform(struct!.disableAiaIntermediateFetching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_cors: {
      value: cdktn.booleanToHclTerraform(struct!.disableCors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_csp: {
      value: cdktn.booleanToHclTerraform(struct!.disableCsp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    follow_redirects: {
      value: cdktn.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_version: {
      value: cdktn.stringToHclTerraform(struct!.httpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_server_certificate_error: {
      value: cdktn.booleanToHclTerraform(struct!.ignoreServerCertificateError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initial_navigation_timeout: {
      value: cdktn.numberToHclTerraform(struct!.initialNavigationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_failure_duration: {
      value: cdktn.numberToHclTerraform(struct!.minFailureDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_location_failed: {
      value: cdktn.numberToHclTerraform(struct!.minLocationFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_name: {
      value: cdktn.stringToHclTerraform(struct!.monitorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_priority: {
      value: cdktn.numberToHclTerraform(struct!.monitorPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_screenshot: {
      value: cdktn.booleanToHclTerraform(struct!.noScreenshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restricted_roles: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.restrictedRoles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tick_every: {
      value: cdktn.numberToHclTerraform(struct!.tickEvery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ci: {
      value: syntheticsTestOptionsListCiToHclTerraform(struct!.ci),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestOptionsListCiList",
    },
    monitor_options: {
      value: syntheticsTestOptionsListMonitorOptionsToHclTerraform(struct!.monitorOptions),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestOptionsListMonitorOptionsList",
    },
    retry: {
      value: syntheticsTestOptionsListRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestOptionsListRetryList",
    },
    rum_settings: {
      value: syntheticsTestOptionsListRumSettingsToHclTerraform(struct!.rumSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestOptionsListRumSettingsList",
    },
    scheduling: {
      value: syntheticsTestOptionsListSchedulingToHclTerraform(struct!.scheduling),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestOptionsListSchedulingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestOptionsListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestOptionsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptSelfSigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptSelfSigned = this._acceptSelfSigned;
    }
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._blockedRequestPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedRequestPatterns = this._blockedRequestPatterns;
    }
    if (this._checkCertificateRevocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkCertificateRevocation = this._checkCertificateRevocation;
    }
    if (this._disableAiaIntermediateFetching !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAiaIntermediateFetching = this._disableAiaIntermediateFetching;
    }
    if (this._disableCors !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCors = this._disableCors;
    }
    if (this._disableCsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCsp = this._disableCsp;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._ignoreServerCertificateError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreServerCertificateError = this._ignoreServerCertificateError;
    }
    if (this._initialNavigationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialNavigationTimeout = this._initialNavigationTimeout;
    }
    if (this._minFailureDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.minFailureDuration = this._minFailureDuration;
    }
    if (this._minLocationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLocationFailed = this._minLocationFailed;
    }
    if (this._monitorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorName = this._monitorName;
    }
    if (this._monitorPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorPriority = this._monitorPriority;
    }
    if (this._noScreenshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.noScreenshot = this._noScreenshot;
    }
    if (this._restrictedRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedRoles = this._restrictedRoles;
    }
    if (this._tickEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickEvery = this._tickEvery;
    }
    if (this._ci?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ci = this._ci?.internalValue;
    }
    if (this._monitorOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorOptions = this._monitorOptions?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    if (this._rumSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rumSettings = this._rumSettings?.internalValue;
    }
    if (this._scheduling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduling = this._scheduling?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestOptionsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptSelfSigned = undefined;
      this._allowInsecure = undefined;
      this._blockedRequestPatterns = undefined;
      this._checkCertificateRevocation = undefined;
      this._disableAiaIntermediateFetching = undefined;
      this._disableCors = undefined;
      this._disableCsp = undefined;
      this._followRedirects = undefined;
      this._httpVersion = undefined;
      this._ignoreServerCertificateError = undefined;
      this._initialNavigationTimeout = undefined;
      this._minFailureDuration = undefined;
      this._minLocationFailed = undefined;
      this._monitorName = undefined;
      this._monitorPriority = undefined;
      this._noScreenshot = undefined;
      this._restrictedRoles = undefined;
      this._tickEvery = undefined;
      this._ci.internalValue = undefined;
      this._monitorOptions.internalValue = undefined;
      this._retry.internalValue = undefined;
      this._rumSettings.internalValue = undefined;
      this._scheduling.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptSelfSigned = value.acceptSelfSigned;
      this._allowInsecure = value.allowInsecure;
      this._blockedRequestPatterns = value.blockedRequestPatterns;
      this._checkCertificateRevocation = value.checkCertificateRevocation;
      this._disableAiaIntermediateFetching = value.disableAiaIntermediateFetching;
      this._disableCors = value.disableCors;
      this._disableCsp = value.disableCsp;
      this._followRedirects = value.followRedirects;
      this._httpVersion = value.httpVersion;
      this._ignoreServerCertificateError = value.ignoreServerCertificateError;
      this._initialNavigationTimeout = value.initialNavigationTimeout;
      this._minFailureDuration = value.minFailureDuration;
      this._minLocationFailed = value.minLocationFailed;
      this._monitorName = value.monitorName;
      this._monitorPriority = value.monitorPriority;
      this._noScreenshot = value.noScreenshot;
      this._restrictedRoles = value.restrictedRoles;
      this._tickEvery = value.tickEvery;
      this._ci.internalValue = value.ci;
      this._monitorOptions.internalValue = value.monitorOptions;
      this._retry.internalValue = value.retry;
      this._rumSettings.internalValue = value.rumSettings;
      this._scheduling.internalValue = value.scheduling;
    }
  }

  // accept_self_signed - computed: false, optional: true, required: false
  private _acceptSelfSigned?: boolean | cdktn.IResolvable; 
  public get acceptSelfSigned() {
    return this.getBooleanAttribute('accept_self_signed');
  }
  public set acceptSelfSigned(value: boolean | cdktn.IResolvable) {
    this._acceptSelfSigned = value;
  }
  public resetAcceptSelfSigned() {
    this._acceptSelfSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptSelfSignedInput() {
    return this._acceptSelfSigned;
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktn.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktn.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // blocked_request_patterns - computed: false, optional: true, required: false
  private _blockedRequestPatterns?: string[]; 
  public get blockedRequestPatterns() {
    return this.getListAttribute('blocked_request_patterns');
  }
  public set blockedRequestPatterns(value: string[]) {
    this._blockedRequestPatterns = value;
  }
  public resetBlockedRequestPatterns() {
    this._blockedRequestPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedRequestPatternsInput() {
    return this._blockedRequestPatterns;
  }

  // check_certificate_revocation - computed: false, optional: true, required: false
  private _checkCertificateRevocation?: boolean | cdktn.IResolvable; 
  public get checkCertificateRevocation() {
    return this.getBooleanAttribute('check_certificate_revocation');
  }
  public set checkCertificateRevocation(value: boolean | cdktn.IResolvable) {
    this._checkCertificateRevocation = value;
  }
  public resetCheckCertificateRevocation() {
    this._checkCertificateRevocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkCertificateRevocationInput() {
    return this._checkCertificateRevocation;
  }

  // disable_aia_intermediate_fetching - computed: false, optional: true, required: false
  private _disableAiaIntermediateFetching?: boolean | cdktn.IResolvable; 
  public get disableAiaIntermediateFetching() {
    return this.getBooleanAttribute('disable_aia_intermediate_fetching');
  }
  public set disableAiaIntermediateFetching(value: boolean | cdktn.IResolvable) {
    this._disableAiaIntermediateFetching = value;
  }
  public resetDisableAiaIntermediateFetching() {
    this._disableAiaIntermediateFetching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAiaIntermediateFetchingInput() {
    return this._disableAiaIntermediateFetching;
  }

  // disable_cors - computed: false, optional: true, required: false
  private _disableCors?: boolean | cdktn.IResolvable; 
  public get disableCors() {
    return this.getBooleanAttribute('disable_cors');
  }
  public set disableCors(value: boolean | cdktn.IResolvable) {
    this._disableCors = value;
  }
  public resetDisableCors() {
    this._disableCors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCorsInput() {
    return this._disableCors;
  }

  // disable_csp - computed: false, optional: true, required: false
  private _disableCsp?: boolean | cdktn.IResolvable; 
  public get disableCsp() {
    return this.getBooleanAttribute('disable_csp');
  }
  public set disableCsp(value: boolean | cdktn.IResolvable) {
    this._disableCsp = value;
  }
  public resetDisableCsp() {
    this._disableCsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCspInput() {
    return this._disableCsp;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktn.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktn.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // ignore_server_certificate_error - computed: false, optional: true, required: false
  private _ignoreServerCertificateError?: boolean | cdktn.IResolvable; 
  public get ignoreServerCertificateError() {
    return this.getBooleanAttribute('ignore_server_certificate_error');
  }
  public set ignoreServerCertificateError(value: boolean | cdktn.IResolvable) {
    this._ignoreServerCertificateError = value;
  }
  public resetIgnoreServerCertificateError() {
    this._ignoreServerCertificateError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreServerCertificateErrorInput() {
    return this._ignoreServerCertificateError;
  }

  // initial_navigation_timeout - computed: false, optional: true, required: false
  private _initialNavigationTimeout?: number; 
  public get initialNavigationTimeout() {
    return this.getNumberAttribute('initial_navigation_timeout');
  }
  public set initialNavigationTimeout(value: number) {
    this._initialNavigationTimeout = value;
  }
  public resetInitialNavigationTimeout() {
    this._initialNavigationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialNavigationTimeoutInput() {
    return this._initialNavigationTimeout;
  }

  // min_failure_duration - computed: false, optional: true, required: false
  private _minFailureDuration?: number; 
  public get minFailureDuration() {
    return this.getNumberAttribute('min_failure_duration');
  }
  public set minFailureDuration(value: number) {
    this._minFailureDuration = value;
  }
  public resetMinFailureDuration() {
    this._minFailureDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFailureDurationInput() {
    return this._minFailureDuration;
  }

  // min_location_failed - computed: false, optional: true, required: false
  private _minLocationFailed?: number; 
  public get minLocationFailed() {
    return this.getNumberAttribute('min_location_failed');
  }
  public set minLocationFailed(value: number) {
    this._minLocationFailed = value;
  }
  public resetMinLocationFailed() {
    this._minLocationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLocationFailedInput() {
    return this._minLocationFailed;
  }

  // monitor_name - computed: false, optional: true, required: false
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  public resetMonitorName() {
    this._monitorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // monitor_priority - computed: false, optional: true, required: false
  private _monitorPriority?: number; 
  public get monitorPriority() {
    return this.getNumberAttribute('monitor_priority');
  }
  public set monitorPriority(value: number) {
    this._monitorPriority = value;
  }
  public resetMonitorPriority() {
    this._monitorPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPriorityInput() {
    return this._monitorPriority;
  }

  // no_screenshot - computed: false, optional: true, required: false
  private _noScreenshot?: boolean | cdktn.IResolvable; 
  public get noScreenshot() {
    return this.getBooleanAttribute('no_screenshot');
  }
  public set noScreenshot(value: boolean | cdktn.IResolvable) {
    this._noScreenshot = value;
  }
  public resetNoScreenshot() {
    this._noScreenshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noScreenshotInput() {
    return this._noScreenshot;
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

  // tick_every - computed: false, optional: false, required: true
  private _tickEvery?: number; 
  public get tickEvery() {
    return this.getNumberAttribute('tick_every');
  }
  public set tickEvery(value: number) {
    this._tickEvery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tickEveryInput() {
    return this._tickEvery;
  }

  // ci - computed: false, optional: true, required: false
  private _ci = new SyntheticsTestOptionsListCiOutputReference(this, "ci");
  public get ci() {
    return this._ci;
  }
  public putCi(value: SyntheticsTestOptionsListCi) {
    this._ci.internalValue = value;
  }
  public resetCi() {
    this._ci.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciInput() {
    return this._ci.internalValue;
  }

  // monitor_options - computed: false, optional: true, required: false
  private _monitorOptions = new SyntheticsTestOptionsListMonitorOptionsOutputReference(this, "monitor_options");
  public get monitorOptions() {
    return this._monitorOptions;
  }
  public putMonitorOptions(value: SyntheticsTestOptionsListMonitorOptions) {
    this._monitorOptions.internalValue = value;
  }
  public resetMonitorOptions() {
    this._monitorOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorOptionsInput() {
    return this._monitorOptions.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new SyntheticsTestOptionsListRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: SyntheticsTestOptionsListRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // rum_settings - computed: false, optional: true, required: false
  private _rumSettings = new SyntheticsTestOptionsListRumSettingsOutputReference(this, "rum_settings");
  public get rumSettings() {
    return this._rumSettings;
  }
  public putRumSettings(value: SyntheticsTestOptionsListRumSettings) {
    this._rumSettings.internalValue = value;
  }
  public resetRumSettings() {
    this._rumSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rumSettingsInput() {
    return this._rumSettings.internalValue;
  }

  // scheduling - computed: false, optional: true, required: false
  private _scheduling = new SyntheticsTestOptionsListSchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: SyntheticsTestOptionsListScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }
}
export interface SyntheticsTestRequestBasicauth {
  /**
  * Access key for `SIGV4` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#access_key SyntheticsTest#access_key}
  */
  readonly accessKey?: string;
  /**
  * Access token url for `oauth-client` or `oauth-rop` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#access_token_url SyntheticsTest#access_token_url}
  */
  readonly accessTokenUrl?: string;
  /**
  * Audience for `oauth-client` or `oauth-rop` authentication. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#audience SyntheticsTest#audience}
  */
  readonly audience?: string;
  /**
  * Client ID for `oauth-client` or `oauth-rop` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#client_id SyntheticsTest#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret for `oauth-client` or `oauth-rop` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#client_secret SyntheticsTest#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Domain for `ntlm` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#domain SyntheticsTest#domain}
  */
  readonly domain?: string;
  /**
  * Password for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#password SyntheticsTest#password}
  */
  readonly password?: string;
  /**
  * Region for `SIGV4` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#region SyntheticsTest#region}
  */
  readonly region?: string;
  /**
  * Resource for `oauth-client` or `oauth-rop` authentication. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#resource SyntheticsTest#resource}
  */
  readonly resource?: string;
  /**
  * Scope for `oauth-client` or `oauth-rop` authentication. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#scope SyntheticsTest#scope}
  */
  readonly scope?: string;
  /**
  * Secret key for `SIGV4` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#secret_key SyntheticsTest#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Service name for `SIGV4` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#service_name SyntheticsTest#service_name}
  */
  readonly serviceName?: string;
  /**
  * Session token for `SIGV4` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#session_token SyntheticsTest#session_token}
  */
  readonly sessionToken?: string;
  /**
  * Token API Authentication for `oauth-client` or `oauth-rop` authentication. Valid values are `header`, `body`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#token_api_authentication SyntheticsTest#token_api_authentication}
  */
  readonly tokenApiAuthentication?: string;
  /**
  * Type of basic authentication to use when performing the test. Defaults to `"web"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type?: string;
  /**
  * Username for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#username SyntheticsTest#username}
  */
  readonly username?: string;
  /**
  * Workstation for `ntlm` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#workstation SyntheticsTest#workstation}
  */
  readonly workstation?: string;
}

export function syntheticsTestRequestBasicauthToTerraform(struct?: SyntheticsTestRequestBasicauthOutputReference | SyntheticsTestRequestBasicauth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktn.stringToTerraform(struct!.accessKey),
    access_token_url: cdktn.stringToTerraform(struct!.accessTokenUrl),
    audience: cdktn.stringToTerraform(struct!.audience),
    client_id: cdktn.stringToTerraform(struct!.clientId),
    client_secret: cdktn.stringToTerraform(struct!.clientSecret),
    domain: cdktn.stringToTerraform(struct!.domain),
    password: cdktn.stringToTerraform(struct!.password),
    region: cdktn.stringToTerraform(struct!.region),
    resource: cdktn.stringToTerraform(struct!.resource),
    scope: cdktn.stringToTerraform(struct!.scope),
    secret_key: cdktn.stringToTerraform(struct!.secretKey),
    service_name: cdktn.stringToTerraform(struct!.serviceName),
    session_token: cdktn.stringToTerraform(struct!.sessionToken),
    token_api_authentication: cdktn.stringToTerraform(struct!.tokenApiAuthentication),
    type: cdktn.stringToTerraform(struct!.type),
    username: cdktn.stringToTerraform(struct!.username),
    workstation: cdktn.stringToTerraform(struct!.workstation),
  }
}


export function syntheticsTestRequestBasicauthToHclTerraform(struct?: SyntheticsTestRequestBasicauthOutputReference | SyntheticsTestRequestBasicauth): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktn.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_url: {
      value: cdktn.stringToHclTerraform(struct!.accessTokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
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
    domain: {
      value: cdktn.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
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
    resource: {
      value: cdktn.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktn.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktn.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_token: {
      value: cdktn.stringToHclTerraform(struct!.sessionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_api_authentication: {
      value: cdktn.stringToHclTerraform(struct!.tokenApiAuthentication),
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
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workstation: {
      value: cdktn.stringToHclTerraform(struct!.workstation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestRequestBasicauthOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestRequestBasicauth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._accessTokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenUrl = this._accessTokenUrl;
    }
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._sessionToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionToken = this._sessionToken;
    }
    if (this._tokenApiAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenApiAuthentication = this._tokenApiAuthentication;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._workstation !== undefined) {
      hasAnyValues = true;
      internalValueResult.workstation = this._workstation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestRequestBasicauth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._accessTokenUrl = undefined;
      this._audience = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._domain = undefined;
      this._password = undefined;
      this._region = undefined;
      this._resource = undefined;
      this._scope = undefined;
      this._secretKey = undefined;
      this._serviceName = undefined;
      this._sessionToken = undefined;
      this._tokenApiAuthentication = undefined;
      this._type = undefined;
      this._username = undefined;
      this._workstation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._accessTokenUrl = value.accessTokenUrl;
      this._audience = value.audience;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._domain = value.domain;
      this._password = value.password;
      this._region = value.region;
      this._resource = value.resource;
      this._scope = value.scope;
      this._secretKey = value.secretKey;
      this._serviceName = value.serviceName;
      this._sessionToken = value.sessionToken;
      this._tokenApiAuthentication = value.tokenApiAuthentication;
      this._type = value.type;
      this._username = value.username;
      this._workstation = value.workstation;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // access_token_url - computed: false, optional: true, required: false
  private _accessTokenUrl?: string; 
  public get accessTokenUrl() {
    return this.getStringAttribute('access_token_url');
  }
  public set accessTokenUrl(value: string) {
    this._accessTokenUrl = value;
  }
  public resetAccessTokenUrl() {
    this._accessTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenUrlInput() {
    return this._accessTokenUrl;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // session_token - computed: false, optional: true, required: false
  private _sessionToken?: string; 
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }
  public set sessionToken(value: string) {
    this._sessionToken = value;
  }
  public resetSessionToken() {
    this._sessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTokenInput() {
    return this._sessionToken;
  }

  // token_api_authentication - computed: false, optional: true, required: false
  private _tokenApiAuthentication?: string; 
  public get tokenApiAuthentication() {
    return this.getStringAttribute('token_api_authentication');
  }
  public set tokenApiAuthentication(value: string) {
    this._tokenApiAuthentication = value;
  }
  public resetTokenApiAuthentication() {
    this._tokenApiAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenApiAuthenticationInput() {
    return this._tokenApiAuthentication;
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

  // workstation - computed: false, optional: true, required: false
  private _workstation?: string; 
  public get workstation() {
    return this.getStringAttribute('workstation');
  }
  public set workstation(value: string) {
    this._workstation = value;
  }
  public resetWorkstation() {
    this._workstation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workstationInput() {
    return this._workstation;
  }
}
export interface SyntheticsTestRequestClientCertificateCert {
  /**
  * Content of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#content SyntheticsTest#content}
  */
  readonly content?: string;
  /**
  * File name for the certificate. Defaults to `"Provided in Terraform config"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#filename SyntheticsTest#filename}
  */
  readonly filename?: string;
}

export function syntheticsTestRequestClientCertificateCertToTerraform(struct?: SyntheticsTestRequestClientCertificateCertOutputReference | SyntheticsTestRequestClientCertificateCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    filename: cdktn.stringToTerraform(struct!.filename),
  }
}


export function syntheticsTestRequestClientCertificateCertToHclTerraform(struct?: SyntheticsTestRequestClientCertificateCertOutputReference | SyntheticsTestRequestClientCertificateCert): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktn.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestRequestClientCertificateCertOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestRequestClientCertificateCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestRequestClientCertificateCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._filename = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._filename = value.filename;
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

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}
export interface SyntheticsTestRequestClientCertificateKey {
  /**
  * Content of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#content SyntheticsTest#content}
  */
  readonly content?: string;
  /**
  * File name for the certificate. Defaults to `"Provided in Terraform config"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#filename SyntheticsTest#filename}
  */
  readonly filename?: string;
}

export function syntheticsTestRequestClientCertificateKeyToTerraform(struct?: SyntheticsTestRequestClientCertificateKeyOutputReference | SyntheticsTestRequestClientCertificateKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    filename: cdktn.stringToTerraform(struct!.filename),
  }
}


export function syntheticsTestRequestClientCertificateKeyToHclTerraform(struct?: SyntheticsTestRequestClientCertificateKeyOutputReference | SyntheticsTestRequestClientCertificateKey): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktn.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestRequestClientCertificateKeyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestRequestClientCertificateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestRequestClientCertificateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._filename = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._filename = value.filename;
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

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }
}
export interface SyntheticsTestRequestClientCertificate {
  /**
  * cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#cert SyntheticsTest#cert}
  */
  readonly cert: SyntheticsTestRequestClientCertificateCert;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#key SyntheticsTest#key}
  */
  readonly key: SyntheticsTestRequestClientCertificateKey;
}

export function syntheticsTestRequestClientCertificateToTerraform(struct?: SyntheticsTestRequestClientCertificateOutputReference | SyntheticsTestRequestClientCertificate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: syntheticsTestRequestClientCertificateCertToTerraform(struct!.cert),
    key: syntheticsTestRequestClientCertificateKeyToTerraform(struct!.key),
  }
}


export function syntheticsTestRequestClientCertificateToHclTerraform(struct?: SyntheticsTestRequestClientCertificateOutputReference | SyntheticsTestRequestClientCertificate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: syntheticsTestRequestClientCertificateCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestRequestClientCertificateCertList",
    },
    key: {
      value: syntheticsTestRequestClientCertificateKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "SyntheticsTestRequestClientCertificateKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestRequestClientCertificateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestRequestClientCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestRequestClientCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert.internalValue = undefined;
      this._key.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert.internalValue = value.cert;
      this._key.internalValue = value.key;
    }
  }

  // cert - computed: false, optional: false, required: true
  private _cert = new SyntheticsTestRequestClientCertificateCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: SyntheticsTestRequestClientCertificateCert) {
    this._cert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // key - computed: false, optional: false, required: true
  private _key = new SyntheticsTestRequestClientCertificateKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: SyntheticsTestRequestClientCertificateKey) {
    this._key.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}
export interface SyntheticsTestRequestDefinition {
  /**
  * The request body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#body SyntheticsTest#body}
  */
  readonly body?: string;
  /**
  * Type of the request body. Valid values are `text/plain`, `application/json`, `text/xml`, `text/html`, `application/x-www-form-urlencoded`, `graphql`, `application/octet-stream`, `multipart/form-data`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#body_type SyntheticsTest#body_type}
  */
  readonly bodyType?: string;
  /**
  * The type of gRPC call to perform, or the MCP step call (`init`, `tool_list`, `tool_call`). Valid values are `healthcheck`, `unary`, `init`, `tool_list`, `tool_call`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#call_type SyntheticsTest#call_type}
  */
  readonly callType?: string;
  /**
  * By default, the client certificate is applied on the domain of the starting URL for browser tests. If you want your client certificate to be applied on other domains instead, add them in `certificate_domains`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#certificate_domains SyntheticsTest#certificate_domains}
  */
  readonly certificateDomains?: string[];
  /**
  * For Network Path tests, an optional label displayed for the destination host in the Network Path visualization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#destination_service SyntheticsTest#destination_service}
  */
  readonly destinationService?: string;
  /**
  * DNS server to use for DNS tests (`subtype = "dns"`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#dns_server SyntheticsTest#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * DNS server port to use for DNS tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#dns_server_port SyntheticsTest#dns_server_port}
  */
  readonly dnsServerPort?: string;
  /**
  * For Network Path tests, the number of packets sent to probe the destination to measure packet loss, latency, and jitter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#e2e_queries SyntheticsTest#e2e_queries}
  */
  readonly e2EQueries?: number;
  /**
  * Form data to be sent when `body_type` is `multipart/form-data`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#form SyntheticsTest#form}
  */
  readonly form?: { [key: string]: string };
  /**
  * Host name to perform the test with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#host SyntheticsTest#host}
  */
  readonly host?: string;
  /**
  * HTTP version to use for an HTTP request in an API test or step. **Deprecated.** Use `http_version` in the `options_list` field instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#http_version SyntheticsTest#http_version}
  */
  readonly httpVersion?: string;
  /**
  * For Websocket tests, whether the message is treated as a base64-encoded string in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#is_message_base64_encoded SyntheticsTest#is_message_base64_encoded}
  */
  readonly isMessageBase64Encoded?: boolean | cdktn.IResolvable;
  /**
  * For Network Path tests, the maximum time-to-live (max number of hops) used in outgoing probe packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#max_ttl SyntheticsTest#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * For MCP API steps, the MCP protocol version used by the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#mcp_protocol_version SyntheticsTest#mcp_protocol_version}
  */
  readonly mcpProtocolVersion?: string;
  /**
  * For gRPC, UDP, and Websocket tests, message to send with the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#message SyntheticsTest#message}
  */
  readonly message?: string;
  /**
  * Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field. Required if `subtype` is `HTTP` or if `subtype` is `grpc` and `callType` is `unary`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#method SyntheticsTest#method}
  */
  readonly method?: string;
  /**
  * Determines whether or not to save the response body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#no_saving_response_body SyntheticsTest#no_saving_response_body}
  */
  readonly noSavingResponseBody?: boolean | cdktn.IResolvable;
  /**
  * Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#number_of_packets SyntheticsTest#number_of_packets}
  */
  readonly numberOfPackets?: number;
  /**
  * Persist cookies across redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#persist_cookies SyntheticsTest#persist_cookies}
  */
  readonly persistCookies?: boolean | cdktn.IResolvable;
  /**
  * The content of a proto file as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#plain_proto_file SyntheticsTest#plain_proto_file}
  */
  readonly plainProtoFile?: string;
  /**
  * Port to use when performing the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#port SyntheticsTest#port}
  */
  readonly port?: string;
  /**
  * A protobuf JSON descriptor. **Deprecated.** Use `plain_proto_file` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#proto_json_descriptor SyntheticsTest#proto_json_descriptor}
  */
  readonly protoJsonDescriptor?: string;
  /**
  * For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#servername SyntheticsTest#servername}
  */
  readonly servername?: string;
  /**
  * The gRPC service on which you want to perform the gRPC call.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#service SyntheticsTest#service}
  */
  readonly service?: string;
  /**
  * This will turn on a traceroute probe to discover all gateways along the path to the host destination. For ICMP tests (`subtype = "icmp"`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#should_track_hops SyntheticsTest#should_track_hops}
  */
  readonly shouldTrackHops?: boolean | cdktn.IResolvable;
  /**
  * For Network Path tests, an optional label displayed for the source host in the Network Path visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#source_service SyntheticsTest#source_service}
  */
  readonly sourceService?: string;
  /**
  * For TCP Network Path tests, the TCP traceroute strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#tcp_method SyntheticsTest#tcp_method}
  */
  readonly tcpMethod?: string;
  /**
  * Timeout in seconds for the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#timeout SyntheticsTest#timeout}
  */
  readonly timeout?: number;
  /**
  * For MCP API steps, the JSON-encoded arguments to pass to the tool when `call_type` is `tool_call`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#tool_args SyntheticsTest#tool_args}
  */
  readonly toolArgs?: string;
  /**
  * For MCP API steps, the name of the tool to call. Required when `call_type` is `tool_call`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#tool_name SyntheticsTest#tool_name}
  */
  readonly toolName?: string;
  /**
  * For Network Path tests, the number of traceroute path tracings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#traceroute_queries SyntheticsTest#traceroute_queries}
  */
  readonly tracerouteQueries?: number;
  /**
  * The URL to send the request to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#url SyntheticsTest#url}
  */
  readonly url?: string;
}

export function syntheticsTestRequestDefinitionToTerraform(struct?: SyntheticsTestRequestDefinitionOutputReference | SyntheticsTestRequestDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktn.stringToTerraform(struct!.body),
    body_type: cdktn.stringToTerraform(struct!.bodyType),
    call_type: cdktn.stringToTerraform(struct!.callType),
    certificate_domains: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.certificateDomains),
    destination_service: cdktn.stringToTerraform(struct!.destinationService),
    dns_server: cdktn.stringToTerraform(struct!.dnsServer),
    dns_server_port: cdktn.stringToTerraform(struct!.dnsServerPort),
    e2e_queries: cdktn.numberToTerraform(struct!.e2EQueries),
    form: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.form),
    host: cdktn.stringToTerraform(struct!.host),
    http_version: cdktn.stringToTerraform(struct!.httpVersion),
    is_message_base64_encoded: cdktn.booleanToTerraform(struct!.isMessageBase64Encoded),
    max_ttl: cdktn.numberToTerraform(struct!.maxTtl),
    mcp_protocol_version: cdktn.stringToTerraform(struct!.mcpProtocolVersion),
    message: cdktn.stringToTerraform(struct!.message),
    method: cdktn.stringToTerraform(struct!.method),
    no_saving_response_body: cdktn.booleanToTerraform(struct!.noSavingResponseBody),
    number_of_packets: cdktn.numberToTerraform(struct!.numberOfPackets),
    persist_cookies: cdktn.booleanToTerraform(struct!.persistCookies),
    plain_proto_file: cdktn.stringToTerraform(struct!.plainProtoFile),
    port: cdktn.stringToTerraform(struct!.port),
    proto_json_descriptor: cdktn.stringToTerraform(struct!.protoJsonDescriptor),
    servername: cdktn.stringToTerraform(struct!.servername),
    service: cdktn.stringToTerraform(struct!.service),
    should_track_hops: cdktn.booleanToTerraform(struct!.shouldTrackHops),
    source_service: cdktn.stringToTerraform(struct!.sourceService),
    tcp_method: cdktn.stringToTerraform(struct!.tcpMethod),
    timeout: cdktn.numberToTerraform(struct!.timeout),
    tool_args: cdktn.stringToTerraform(struct!.toolArgs),
    tool_name: cdktn.stringToTerraform(struct!.toolName),
    traceroute_queries: cdktn.numberToTerraform(struct!.tracerouteQueries),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function syntheticsTestRequestDefinitionToHclTerraform(struct?: SyntheticsTestRequestDefinitionOutputReference | SyntheticsTestRequestDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktn.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_type: {
      value: cdktn.stringToHclTerraform(struct!.bodyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    call_type: {
      value: cdktn.stringToHclTerraform(struct!.callType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_domains: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.certificateDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_service: {
      value: cdktn.stringToHclTerraform(struct!.destinationService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktn.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server_port: {
      value: cdktn.stringToHclTerraform(struct!.dnsServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e2e_queries: {
      value: cdktn.numberToHclTerraform(struct!.e2EQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    form: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.form),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_version: {
      value: cdktn.stringToHclTerraform(struct!.httpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_message_base64_encoded: {
      value: cdktn.booleanToHclTerraform(struct!.isMessageBase64Encoded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_ttl: {
      value: cdktn.numberToHclTerraform(struct!.maxTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mcp_protocol_version: {
      value: cdktn.stringToHclTerraform(struct!.mcpProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktn.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktn.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_saving_response_body: {
      value: cdktn.booleanToHclTerraform(struct!.noSavingResponseBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_of_packets: {
      value: cdktn.numberToHclTerraform(struct!.numberOfPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_cookies: {
      value: cdktn.booleanToHclTerraform(struct!.persistCookies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    plain_proto_file: {
      value: cdktn.stringToHclTerraform(struct!.plainProtoFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto_json_descriptor: {
      value: cdktn.stringToHclTerraform(struct!.protoJsonDescriptor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servername: {
      value: cdktn.stringToHclTerraform(struct!.servername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktn.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_track_hops: {
      value: cdktn.booleanToHclTerraform(struct!.shouldTrackHops),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_service: {
      value: cdktn.stringToHclTerraform(struct!.sourceService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_method: {
      value: cdktn.stringToHclTerraform(struct!.tcpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktn.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tool_args: {
      value: cdktn.stringToHclTerraform(struct!.toolArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tool_name: {
      value: cdktn.stringToHclTerraform(struct!.toolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traceroute_queries: {
      value: cdktn.numberToHclTerraform(struct!.tracerouteQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestRequestDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestRequestDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._bodyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyType = this._bodyType;
    }
    if (this._callType !== undefined) {
      hasAnyValues = true;
      internalValueResult.callType = this._callType;
    }
    if (this._certificateDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateDomains = this._certificateDomains;
    }
    if (this._destinationService !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationService = this._destinationService;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._dnsServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerPort = this._dnsServerPort;
    }
    if (this._e2EQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.e2EQueries = this._e2EQueries;
    }
    if (this._form !== undefined) {
      hasAnyValues = true;
      internalValueResult.form = this._form;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._isMessageBase64Encoded !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMessageBase64Encoded = this._isMessageBase64Encoded;
    }
    if (this._maxTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl;
    }
    if (this._mcpProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpProtocolVersion = this._mcpProtocolVersion;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._noSavingResponseBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSavingResponseBody = this._noSavingResponseBody;
    }
    if (this._numberOfPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfPackets = this._numberOfPackets;
    }
    if (this._persistCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistCookies = this._persistCookies;
    }
    if (this._plainProtoFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.plainProtoFile = this._plainProtoFile;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protoJsonDescriptor !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoJsonDescriptor = this._protoJsonDescriptor;
    }
    if (this._servername !== undefined) {
      hasAnyValues = true;
      internalValueResult.servername = this._servername;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._shouldTrackHops !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTrackHops = this._shouldTrackHops;
    }
    if (this._sourceService !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceService = this._sourceService;
    }
    if (this._tcpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpMethod = this._tcpMethod;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._toolArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolArgs = this._toolArgs;
    }
    if (this._toolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolName = this._toolName;
    }
    if (this._tracerouteQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracerouteQueries = this._tracerouteQueries;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestRequestDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._bodyType = undefined;
      this._callType = undefined;
      this._certificateDomains = undefined;
      this._destinationService = undefined;
      this._dnsServer = undefined;
      this._dnsServerPort = undefined;
      this._e2EQueries = undefined;
      this._form = undefined;
      this._host = undefined;
      this._httpVersion = undefined;
      this._isMessageBase64Encoded = undefined;
      this._maxTtl = undefined;
      this._mcpProtocolVersion = undefined;
      this._message = undefined;
      this._method = undefined;
      this._noSavingResponseBody = undefined;
      this._numberOfPackets = undefined;
      this._persistCookies = undefined;
      this._plainProtoFile = undefined;
      this._port = undefined;
      this._protoJsonDescriptor = undefined;
      this._servername = undefined;
      this._service = undefined;
      this._shouldTrackHops = undefined;
      this._sourceService = undefined;
      this._tcpMethod = undefined;
      this._timeout = undefined;
      this._toolArgs = undefined;
      this._toolName = undefined;
      this._tracerouteQueries = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._bodyType = value.bodyType;
      this._callType = value.callType;
      this._certificateDomains = value.certificateDomains;
      this._destinationService = value.destinationService;
      this._dnsServer = value.dnsServer;
      this._dnsServerPort = value.dnsServerPort;
      this._e2EQueries = value.e2EQueries;
      this._form = value.form;
      this._host = value.host;
      this._httpVersion = value.httpVersion;
      this._isMessageBase64Encoded = value.isMessageBase64Encoded;
      this._maxTtl = value.maxTtl;
      this._mcpProtocolVersion = value.mcpProtocolVersion;
      this._message = value.message;
      this._method = value.method;
      this._noSavingResponseBody = value.noSavingResponseBody;
      this._numberOfPackets = value.numberOfPackets;
      this._persistCookies = value.persistCookies;
      this._plainProtoFile = value.plainProtoFile;
      this._port = value.port;
      this._protoJsonDescriptor = value.protoJsonDescriptor;
      this._servername = value.servername;
      this._service = value.service;
      this._shouldTrackHops = value.shouldTrackHops;
      this._sourceService = value.sourceService;
      this._tcpMethod = value.tcpMethod;
      this._timeout = value.timeout;
      this._toolArgs = value.toolArgs;
      this._toolName = value.toolName;
      this._tracerouteQueries = value.tracerouteQueries;
      this._url = value.url;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // body_type - computed: false, optional: true, required: false
  private _bodyType?: string; 
  public get bodyType() {
    return this.getStringAttribute('body_type');
  }
  public set bodyType(value: string) {
    this._bodyType = value;
  }
  public resetBodyType() {
    this._bodyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTypeInput() {
    return this._bodyType;
  }

  // call_type - computed: false, optional: true, required: false
  private _callType?: string; 
  public get callType() {
    return this.getStringAttribute('call_type');
  }
  public set callType(value: string) {
    this._callType = value;
  }
  public resetCallType() {
    this._callType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callTypeInput() {
    return this._callType;
  }

  // certificate_domains - computed: false, optional: true, required: false
  private _certificateDomains?: string[]; 
  public get certificateDomains() {
    return this.getListAttribute('certificate_domains');
  }
  public set certificateDomains(value: string[]) {
    this._certificateDomains = value;
  }
  public resetCertificateDomains() {
    this._certificateDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDomainsInput() {
    return this._certificateDomains;
  }

  // destination_service - computed: false, optional: true, required: false
  private _destinationService?: string; 
  public get destinationService() {
    return this.getStringAttribute('destination_service');
  }
  public set destinationService(value: string) {
    this._destinationService = value;
  }
  public resetDestinationService() {
    this._destinationService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationServiceInput() {
    return this._destinationService;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // dns_server_port - computed: false, optional: true, required: false
  private _dnsServerPort?: string; 
  public get dnsServerPort() {
    return this.getStringAttribute('dns_server_port');
  }
  public set dnsServerPort(value: string) {
    this._dnsServerPort = value;
  }
  public resetDnsServerPort() {
    this._dnsServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerPortInput() {
    return this._dnsServerPort;
  }

  // e2e_queries - computed: false, optional: true, required: false
  private _e2EQueries?: number; 
  public get e2EQueries() {
    return this.getNumberAttribute('e2e_queries');
  }
  public set e2EQueries(value: number) {
    this._e2EQueries = value;
  }
  public resetE2EQueries() {
    this._e2EQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e2EQueriesInput() {
    return this._e2EQueries;
  }

  // form - computed: false, optional: true, required: false
  private _form?: { [key: string]: string }; 
  public get form() {
    return this.getStringMapAttribute('form');
  }
  public set form(value: { [key: string]: string }) {
    this._form = value;
  }
  public resetForm() {
    this._form = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formInput() {
    return this._form;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_version - computed: true, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // is_message_base64_encoded - computed: false, optional: true, required: false
  private _isMessageBase64Encoded?: boolean | cdktn.IResolvable; 
  public get isMessageBase64Encoded() {
    return this.getBooleanAttribute('is_message_base64_encoded');
  }
  public set isMessageBase64Encoded(value: boolean | cdktn.IResolvable) {
    this._isMessageBase64Encoded = value;
  }
  public resetIsMessageBase64Encoded() {
    this._isMessageBase64Encoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMessageBase64EncodedInput() {
    return this._isMessageBase64Encoded;
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // mcp_protocol_version - computed: false, optional: true, required: false
  private _mcpProtocolVersion?: string; 
  public get mcpProtocolVersion() {
    return this.getStringAttribute('mcp_protocol_version');
  }
  public set mcpProtocolVersion(value: string) {
    this._mcpProtocolVersion = value;
  }
  public resetMcpProtocolVersion() {
    this._mcpProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpProtocolVersionInput() {
    return this._mcpProtocolVersion;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // no_saving_response_body - computed: false, optional: true, required: false
  private _noSavingResponseBody?: boolean | cdktn.IResolvable; 
  public get noSavingResponseBody() {
    return this.getBooleanAttribute('no_saving_response_body');
  }
  public set noSavingResponseBody(value: boolean | cdktn.IResolvable) {
    this._noSavingResponseBody = value;
  }
  public resetNoSavingResponseBody() {
    this._noSavingResponseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSavingResponseBodyInput() {
    return this._noSavingResponseBody;
  }

  // number_of_packets - computed: false, optional: true, required: false
  private _numberOfPackets?: number; 
  public get numberOfPackets() {
    return this.getNumberAttribute('number_of_packets');
  }
  public set numberOfPackets(value: number) {
    this._numberOfPackets = value;
  }
  public resetNumberOfPackets() {
    this._numberOfPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfPacketsInput() {
    return this._numberOfPackets;
  }

  // persist_cookies - computed: false, optional: true, required: false
  private _persistCookies?: boolean | cdktn.IResolvable; 
  public get persistCookies() {
    return this.getBooleanAttribute('persist_cookies');
  }
  public set persistCookies(value: boolean | cdktn.IResolvable) {
    this._persistCookies = value;
  }
  public resetPersistCookies() {
    this._persistCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCookiesInput() {
    return this._persistCookies;
  }

  // plain_proto_file - computed: false, optional: true, required: false
  private _plainProtoFile?: string; 
  public get plainProtoFile() {
    return this.getStringAttribute('plain_proto_file');
  }
  public set plainProtoFile(value: string) {
    this._plainProtoFile = value;
  }
  public resetPlainProtoFile() {
    this._plainProtoFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainProtoFileInput() {
    return this._plainProtoFile;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto_json_descriptor - computed: false, optional: true, required: false
  private _protoJsonDescriptor?: string; 
  public get protoJsonDescriptor() {
    return this.getStringAttribute('proto_json_descriptor');
  }
  public set protoJsonDescriptor(value: string) {
    this._protoJsonDescriptor = value;
  }
  public resetProtoJsonDescriptor() {
    this._protoJsonDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoJsonDescriptorInput() {
    return this._protoJsonDescriptor;
  }

  // servername - computed: false, optional: true, required: false
  private _servername?: string; 
  public get servername() {
    return this.getStringAttribute('servername');
  }
  public set servername(value: string) {
    this._servername = value;
  }
  public resetServername() {
    this._servername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // should_track_hops - computed: false, optional: true, required: false
  private _shouldTrackHops?: boolean | cdktn.IResolvable; 
  public get shouldTrackHops() {
    return this.getBooleanAttribute('should_track_hops');
  }
  public set shouldTrackHops(value: boolean | cdktn.IResolvable) {
    this._shouldTrackHops = value;
  }
  public resetShouldTrackHops() {
    this._shouldTrackHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTrackHopsInput() {
    return this._shouldTrackHops;
  }

  // source_service - computed: false, optional: true, required: false
  private _sourceService?: string; 
  public get sourceService() {
    return this.getStringAttribute('source_service');
  }
  public set sourceService(value: string) {
    this._sourceService = value;
  }
  public resetSourceService() {
    this._sourceService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceInput() {
    return this._sourceService;
  }

  // tcp_method - computed: false, optional: true, required: false
  private _tcpMethod?: string; 
  public get tcpMethod() {
    return this.getStringAttribute('tcp_method');
  }
  public set tcpMethod(value: string) {
    this._tcpMethod = value;
  }
  public resetTcpMethod() {
    this._tcpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMethodInput() {
    return this._tcpMethod;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tool_args - computed: false, optional: true, required: false
  private _toolArgs?: string; 
  public get toolArgs() {
    return this.getStringAttribute('tool_args');
  }
  public set toolArgs(value: string) {
    this._toolArgs = value;
  }
  public resetToolArgs() {
    this._toolArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolArgsInput() {
    return this._toolArgs;
  }

  // tool_name - computed: false, optional: true, required: false
  private _toolName?: string; 
  public get toolName() {
    return this.getStringAttribute('tool_name');
  }
  public set toolName(value: string) {
    this._toolName = value;
  }
  public resetToolName() {
    this._toolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolNameInput() {
    return this._toolName;
  }

  // traceroute_queries - computed: false, optional: true, required: false
  private _tracerouteQueries?: number; 
  public get tracerouteQueries() {
    return this.getNumberAttribute('traceroute_queries');
  }
  public set tracerouteQueries(value: number) {
    this._tracerouteQueries = value;
  }
  public resetTracerouteQueries() {
    this._tracerouteQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracerouteQueriesInput() {
    return this._tracerouteQueries;
  }

  // url - computed: false, optional: true, required: false
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
}
export interface SyntheticsTestRequestFile {
  /**
  * Content of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#content SyntheticsTest#content}
  */
  readonly content?: string;
  /**
  * Encoding of the file content. Must be `base64` when content contains base64-encoded data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#encoding SyntheticsTest#encoding}
  */
  readonly encoding?: string;
  /**
  * Name of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Original name of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#original_file_name SyntheticsTest#original_file_name}
  */
  readonly originalFileName?: string;
  /**
  * Size of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#size SyntheticsTest#size}
  */
  readonly size: number;
  /**
  * Type of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#type SyntheticsTest#type}
  */
  readonly type: string;
}

export function syntheticsTestRequestFileToTerraform(struct?: SyntheticsTestRequestFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    encoding: cdktn.stringToTerraform(struct!.encoding),
    name: cdktn.stringToTerraform(struct!.name),
    original_file_name: cdktn.stringToTerraform(struct!.originalFileName),
    size: cdktn.numberToTerraform(struct!.size),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function syntheticsTestRequestFileToHclTerraform(struct?: SyntheticsTestRequestFile | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
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
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original_file_name: {
      value: cdktn.stringToHclTerraform(struct!.originalFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktn.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SyntheticsTestRequestFileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsTestRequestFile | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._originalFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalFileName = this._originalFileName;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestRequestFile | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._encoding = undefined;
      this._name = undefined;
      this._originalFileName = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._encoding = value.encoding;
      this._name = value.name;
      this._originalFileName = value.originalFileName;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // bucket_key - computed: true, optional: false, required: false
  public get bucketKey() {
    return this.getStringAttribute('bucket_key');
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

  // original_file_name - computed: false, optional: true, required: false
  private _originalFileName?: string; 
  public get originalFileName() {
    return this.getStringAttribute('original_file_name');
  }
  public set originalFileName(value: string) {
    this._originalFileName = value;
  }
  public resetOriginalFileName() {
    this._originalFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalFileNameInput() {
    return this._originalFileName;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

export class SyntheticsTestRequestFileList extends cdktn.ComplexList {
  public internalValue? : SyntheticsTestRequestFile[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsTestRequestFileOutputReference {
    return new SyntheticsTestRequestFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsTestRequestProxy {
  /**
  * Header name and value map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#headers SyntheticsTest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * URL of the proxy to perform the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#url SyntheticsTest#url}
  */
  readonly url: string;
}

export function syntheticsTestRequestProxyToTerraform(struct?: SyntheticsTestRequestProxyOutputReference | SyntheticsTestRequestProxy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.headers),
    url: cdktn.stringToTerraform(struct!.url),
  }
}


export function syntheticsTestRequestProxyToHclTerraform(struct?: SyntheticsTestRequestProxyOutputReference | SyntheticsTestRequestProxy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsTestRequestProxyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticsTestRequestProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsTestRequestProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers = value.headers;
      this._url = value.url;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test datadog_synthetics_test}
*/
export class SyntheticsTest extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_synthetics_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SyntheticsTest resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticsTest to import
  * @param importFromId The id of the existing SyntheticsTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticsTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_synthetics_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/resources/synthetics_test datadog_synthetics_test} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsTestConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsTestConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_synthetics_test',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.12.0',
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
    this._configInitialApplicationArguments = config.configInitialApplicationArguments;
    this._deviceIds = config.deviceIds;
    this._forceDeleteDependencies = config.forceDeleteDependencies;
    this._id = config.id;
    this._locations = config.locations;
    this._message = config.message;
    this._name = config.name;
    this._requestHeaders = config.requestHeaders;
    this._requestMetadata = config.requestMetadata;
    this._requestQuery = config.requestQuery;
    this._setCookie = config.setCookie;
    this._status = config.status;
    this._subtype = config.subtype;
    this._tags = config.tags;
    this._type = config.type;
    this._variablesFromScript = config.variablesFromScript;
    this._apiStep.internalValue = config.apiStep;
    this._assertion.internalValue = config.assertion;
    this._browserStep.internalValue = config.browserStep;
    this._browserVariable.internalValue = config.browserVariable;
    this._configVariable.internalValue = config.configVariable;
    this._mobileOptionsList.internalValue = config.mobileOptionsList;
    this._mobileStep.internalValue = config.mobileStep;
    this._optionsList.internalValue = config.optionsList;
    this._requestBasicauth.internalValue = config.requestBasicauth;
    this._requestClientCertificate.internalValue = config.requestClientCertificate;
    this._requestDefinition.internalValue = config.requestDefinition;
    this._requestFile.internalValue = config.requestFile;
    this._requestProxy.internalValue = config.requestProxy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_initial_application_arguments - computed: false, optional: true, required: false
  private _configInitialApplicationArguments?: { [key: string]: string }; 
  public get configInitialApplicationArguments() {
    return this.getStringMapAttribute('config_initial_application_arguments');
  }
  public set configInitialApplicationArguments(value: { [key: string]: string }) {
    this._configInitialApplicationArguments = value;
  }
  public resetConfigInitialApplicationArguments() {
    this._configInitialApplicationArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInitialApplicationArgumentsInput() {
    return this._configInitialApplicationArguments;
  }

  // device_ids - computed: false, optional: true, required: false
  private _deviceIds?: string[]; 
  public get deviceIds() {
    return this.getListAttribute('device_ids');
  }
  public set deviceIds(value: string[]) {
    this._deviceIds = value;
  }
  public resetDeviceIds() {
    this._deviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdsInput() {
    return this._deviceIds;
  }

  // force_delete_dependencies - computed: false, optional: true, required: false
  private _forceDeleteDependencies?: boolean | cdktn.IResolvable; 
  public get forceDeleteDependencies() {
    return this.getBooleanAttribute('force_delete_dependencies');
  }
  public set forceDeleteDependencies(value: boolean | cdktn.IResolvable) {
    this._forceDeleteDependencies = value;
  }
  public resetForceDeleteDependencies() {
    this._forceDeleteDependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteDependenciesInput() {
    return this._forceDeleteDependencies;
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

  // locations - computed: false, optional: false, required: true
  private _locations?: string[]; 
  public get locations() {
    return cdktn.Fn.tolist(this.getListAttribute('locations'));
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // monitor_id - computed: true, optional: false, required: false
  public get monitorId() {
    return this.getNumberAttribute('monitor_id');
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

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // request_metadata - computed: false, optional: true, required: false
  private _requestMetadata?: { [key: string]: string }; 
  public get requestMetadata() {
    return this.getStringMapAttribute('request_metadata');
  }
  public set requestMetadata(value: { [key: string]: string }) {
    this._requestMetadata = value;
  }
  public resetRequestMetadata() {
    this._requestMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMetadataInput() {
    return this._requestMetadata;
  }

  // request_query - computed: false, optional: true, required: false
  private _requestQuery?: { [key: string]: string }; 
  public get requestQuery() {
    return this.getStringMapAttribute('request_query');
  }
  public set requestQuery(value: { [key: string]: string }) {
    this._requestQuery = value;
  }
  public resetRequestQuery() {
    this._requestQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestQueryInput() {
    return this._requestQuery;
  }

  // set_cookie - computed: false, optional: true, required: false
  private _setCookie?: string; 
  public get setCookie() {
    return this.getStringAttribute('set_cookie');
  }
  public set setCookie(value: string) {
    this._setCookie = value;
  }
  public resetSetCookie() {
    this._setCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCookieInput() {
    return this._setCookie;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // subtype - computed: false, optional: true, required: false
  private _subtype?: string; 
  public get subtype() {
    return this.getStringAttribute('subtype');
  }
  public set subtype(value: string) {
    this._subtype = value;
  }
  public resetSubtype() {
    this._subtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtypeInput() {
    return this._subtype;
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

  // variables_from_script - computed: false, optional: true, required: false
  private _variablesFromScript?: string; 
  public get variablesFromScript() {
    return this.getStringAttribute('variables_from_script');
  }
  public set variablesFromScript(value: string) {
    this._variablesFromScript = value;
  }
  public resetVariablesFromScript() {
    this._variablesFromScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesFromScriptInput() {
    return this._variablesFromScript;
  }

  // api_step - computed: false, optional: true, required: false
  private _apiStep = new SyntheticsTestApiStepList(this, "api_step", false);
  public get apiStep() {
    return this._apiStep;
  }
  public putApiStep(value: SyntheticsTestApiStep[] | cdktn.IResolvable) {
    this._apiStep.internalValue = value;
  }
  public resetApiStep() {
    this._apiStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiStepInput() {
    return this._apiStep.internalValue;
  }

  // assertion - computed: false, optional: true, required: false
  private _assertion = new SyntheticsTestAssertionList(this, "assertion", false);
  public get assertion() {
    return this._assertion;
  }
  public putAssertion(value: SyntheticsTestAssertion[] | cdktn.IResolvable) {
    this._assertion.internalValue = value;
  }
  public resetAssertion() {
    this._assertion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionInput() {
    return this._assertion.internalValue;
  }

  // browser_step - computed: false, optional: true, required: false
  private _browserStep = new SyntheticsTestBrowserStepList(this, "browser_step", false);
  public get browserStep() {
    return this._browserStep;
  }
  public putBrowserStep(value: SyntheticsTestBrowserStep[] | cdktn.IResolvable) {
    this._browserStep.internalValue = value;
  }
  public resetBrowserStep() {
    this._browserStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserStepInput() {
    return this._browserStep.internalValue;
  }

  // browser_variable - computed: false, optional: true, required: false
  private _browserVariable = new SyntheticsTestBrowserVariableList(this, "browser_variable", false);
  public get browserVariable() {
    return this._browserVariable;
  }
  public putBrowserVariable(value: SyntheticsTestBrowserVariable[] | cdktn.IResolvable) {
    this._browserVariable.internalValue = value;
  }
  public resetBrowserVariable() {
    this._browserVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserVariableInput() {
    return this._browserVariable.internalValue;
  }

  // config_variable - computed: false, optional: true, required: false
  private _configVariable = new SyntheticsTestConfigVariableList(this, "config_variable", false);
  public get configVariable() {
    return this._configVariable;
  }
  public putConfigVariable(value: SyntheticsTestConfigVariable[] | cdktn.IResolvable) {
    this._configVariable.internalValue = value;
  }
  public resetConfigVariable() {
    this._configVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configVariableInput() {
    return this._configVariable.internalValue;
  }

  // mobile_options_list - computed: false, optional: true, required: false
  private _mobileOptionsList = new SyntheticsTestMobileOptionsListStructOutputReference(this, "mobile_options_list");
  public get mobileOptionsList() {
    return this._mobileOptionsList;
  }
  public putMobileOptionsList(value: SyntheticsTestMobileOptionsListStruct) {
    this._mobileOptionsList.internalValue = value;
  }
  public resetMobileOptionsList() {
    this._mobileOptionsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileOptionsListInput() {
    return this._mobileOptionsList.internalValue;
  }

  // mobile_step - computed: false, optional: true, required: false
  private _mobileStep = new SyntheticsTestMobileStepList(this, "mobile_step", false);
  public get mobileStep() {
    return this._mobileStep;
  }
  public putMobileStep(value: SyntheticsTestMobileStep[] | cdktn.IResolvable) {
    this._mobileStep.internalValue = value;
  }
  public resetMobileStep() {
    this._mobileStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileStepInput() {
    return this._mobileStep.internalValue;
  }

  // options_list - computed: false, optional: true, required: false
  private _optionsList = new SyntheticsTestOptionsListStructOutputReference(this, "options_list");
  public get optionsList() {
    return this._optionsList;
  }
  public putOptionsList(value: SyntheticsTestOptionsListStruct) {
    this._optionsList.internalValue = value;
  }
  public resetOptionsList() {
    this._optionsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsListInput() {
    return this._optionsList.internalValue;
  }

  // request_basicauth - computed: false, optional: true, required: false
  private _requestBasicauth = new SyntheticsTestRequestBasicauthOutputReference(this, "request_basicauth");
  public get requestBasicauth() {
    return this._requestBasicauth;
  }
  public putRequestBasicauth(value: SyntheticsTestRequestBasicauth) {
    this._requestBasicauth.internalValue = value;
  }
  public resetRequestBasicauth() {
    this._requestBasicauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBasicauthInput() {
    return this._requestBasicauth.internalValue;
  }

  // request_client_certificate - computed: false, optional: true, required: false
  private _requestClientCertificate = new SyntheticsTestRequestClientCertificateOutputReference(this, "request_client_certificate");
  public get requestClientCertificate() {
    return this._requestClientCertificate;
  }
  public putRequestClientCertificate(value: SyntheticsTestRequestClientCertificate) {
    this._requestClientCertificate.internalValue = value;
  }
  public resetRequestClientCertificate() {
    this._requestClientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestClientCertificateInput() {
    return this._requestClientCertificate.internalValue;
  }

  // request_definition - computed: false, optional: true, required: false
  private _requestDefinition = new SyntheticsTestRequestDefinitionOutputReference(this, "request_definition");
  public get requestDefinition() {
    return this._requestDefinition;
  }
  public putRequestDefinition(value: SyntheticsTestRequestDefinition) {
    this._requestDefinition.internalValue = value;
  }
  public resetRequestDefinition() {
    this._requestDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDefinitionInput() {
    return this._requestDefinition.internalValue;
  }

  // request_file - computed: false, optional: true, required: false
  private _requestFile = new SyntheticsTestRequestFileList(this, "request_file", false);
  public get requestFile() {
    return this._requestFile;
  }
  public putRequestFile(value: SyntheticsTestRequestFile[] | cdktn.IResolvable) {
    this._requestFile.internalValue = value;
  }
  public resetRequestFile() {
    this._requestFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestFileInput() {
    return this._requestFile.internalValue;
  }

  // request_proxy - computed: false, optional: true, required: false
  private _requestProxy = new SyntheticsTestRequestProxyOutputReference(this, "request_proxy");
  public get requestProxy() {
    return this._requestProxy;
  }
  public putRequestProxy(value: SyntheticsTestRequestProxy) {
    this._requestProxy.internalValue = value;
  }
  public resetRequestProxy() {
    this._requestProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestProxyInput() {
    return this._requestProxy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_initial_application_arguments: cdktn.hashMapper(cdktn.stringToTerraform)(this._configInitialApplicationArguments),
      device_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._deviceIds),
      force_delete_dependencies: cdktn.booleanToTerraform(this._forceDeleteDependencies),
      id: cdktn.stringToTerraform(this._id),
      locations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._locations),
      message: cdktn.stringToTerraform(this._message),
      name: cdktn.stringToTerraform(this._name),
      request_headers: cdktn.hashMapper(cdktn.stringToTerraform)(this._requestHeaders),
      request_metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._requestMetadata),
      request_query: cdktn.hashMapper(cdktn.stringToTerraform)(this._requestQuery),
      set_cookie: cdktn.stringToTerraform(this._setCookie),
      status: cdktn.stringToTerraform(this._status),
      subtype: cdktn.stringToTerraform(this._subtype),
      tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tags),
      type: cdktn.stringToTerraform(this._type),
      variables_from_script: cdktn.stringToTerraform(this._variablesFromScript),
      api_step: cdktn.listMapper(syntheticsTestApiStepToTerraform, true)(this._apiStep.internalValue),
      assertion: cdktn.listMapper(syntheticsTestAssertionToTerraform, true)(this._assertion.internalValue),
      browser_step: cdktn.listMapper(syntheticsTestBrowserStepToTerraform, true)(this._browserStep.internalValue),
      browser_variable: cdktn.listMapper(syntheticsTestBrowserVariableToTerraform, true)(this._browserVariable.internalValue),
      config_variable: cdktn.listMapper(syntheticsTestConfigVariableToTerraform, true)(this._configVariable.internalValue),
      mobile_options_list: syntheticsTestMobileOptionsListStructToTerraform(this._mobileOptionsList.internalValue),
      mobile_step: cdktn.listMapper(syntheticsTestMobileStepToTerraform, true)(this._mobileStep.internalValue),
      options_list: syntheticsTestOptionsListStructToTerraform(this._optionsList.internalValue),
      request_basicauth: syntheticsTestRequestBasicauthToTerraform(this._requestBasicauth.internalValue),
      request_client_certificate: syntheticsTestRequestClientCertificateToTerraform(this._requestClientCertificate.internalValue),
      request_definition: syntheticsTestRequestDefinitionToTerraform(this._requestDefinition.internalValue),
      request_file: cdktn.listMapper(syntheticsTestRequestFileToTerraform, true)(this._requestFile.internalValue),
      request_proxy: syntheticsTestRequestProxyToTerraform(this._requestProxy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_initial_application_arguments: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._configInitialApplicationArguments),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      device_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._deviceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      force_delete_dependencies: {
        value: cdktn.booleanToHclTerraform(this._forceDeleteDependencies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._locations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      message: {
        value: cdktn.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_headers: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._requestHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      request_metadata: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._requestMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      request_query: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._requestQuery),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      set_cookie: {
        value: cdktn.stringToHclTerraform(this._setCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktn.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subtype: {
        value: cdktn.stringToHclTerraform(this._subtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variables_from_script: {
        value: cdktn.stringToHclTerraform(this._variablesFromScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_step: {
        value: cdktn.listMapperHcl(syntheticsTestApiStepToHclTerraform, true)(this._apiStep.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsTestApiStepList",
      },
      assertion: {
        value: cdktn.listMapperHcl(syntheticsTestAssertionToHclTerraform, true)(this._assertion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsTestAssertionList",
      },
      browser_step: {
        value: cdktn.listMapperHcl(syntheticsTestBrowserStepToHclTerraform, true)(this._browserStep.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsTestBrowserStepList",
      },
      browser_variable: {
        value: cdktn.listMapperHcl(syntheticsTestBrowserVariableToHclTerraform, true)(this._browserVariable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsTestBrowserVariableList",
      },
      config_variable: {
        value: cdktn.listMapperHcl(syntheticsTestConfigVariableToHclTerraform, true)(this._configVariable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsTestConfigVariableList",
      },
      mobile_options_list: {
        value: syntheticsTestMobileOptionsListStructToHclTerraform(this._mobileOptionsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsTestMobileOptionsListStructList",
      },
      mobile_step: {
        value: cdktn.listMapperHcl(syntheticsTestMobileStepToHclTerraform, true)(this._mobileStep.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsTestMobileStepList",
      },
      options_list: {
        value: syntheticsTestOptionsListStructToHclTerraform(this._optionsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsTestOptionsListStructList",
      },
      request_basicauth: {
        value: syntheticsTestRequestBasicauthToHclTerraform(this._requestBasicauth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsTestRequestBasicauthList",
      },
      request_client_certificate: {
        value: syntheticsTestRequestClientCertificateToHclTerraform(this._requestClientCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsTestRequestClientCertificateList",
      },
      request_definition: {
        value: syntheticsTestRequestDefinitionToHclTerraform(this._requestDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsTestRequestDefinitionList",
      },
      request_file: {
        value: cdktn.listMapperHcl(syntheticsTestRequestFileToHclTerraform, true)(this._requestFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsTestRequestFileList",
      },
      request_proxy: {
        value: syntheticsTestRequestProxyToHclTerraform(this._requestProxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsTestRequestProxyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
