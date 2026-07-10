/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_suite
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SyntheticsSuiteConfig extends cdktn.TerraformMetaArguments {
  /**
  * Message of the Synthetics suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_suite#message SyntheticsSuite#message}
  */
  readonly message?: string;
  /**
  * Name of the Synthetics suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_suite#name SyntheticsSuite#name}
  */
  readonly name: string;
  /**
  * A set of tags to associate with your synthetics suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_suite#tags SyntheticsSuite#tags}
  */
  readonly tags?: string[];
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_suite#options SyntheticsSuite#options}
  */
  readonly options?: SyntheticsSuiteOptions[] | cdktn.IResolvable;
  /**
  * tests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_suite#tests SyntheticsSuite#tests}
  */
  readonly tests?: SyntheticsSuiteTests[] | cdktn.IResolvable;
}
export interface SyntheticsSuiteOptions {
  /**
  * Alerting threshold for the suite. Value must be between 0.000000 and 1.000000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_suite#alerting_threshold SyntheticsSuite#alerting_threshold}
  */
  readonly alertingThreshold: number;
}

export function syntheticsSuiteOptionsToTerraform(struct?: SyntheticsSuiteOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alerting_threshold: cdktn.numberToTerraform(struct!.alertingThreshold),
  }
}


export function syntheticsSuiteOptionsToHclTerraform(struct?: SyntheticsSuiteOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alerting_threshold: {
      value: cdktn.numberToHclTerraform(struct!.alertingThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsSuiteOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsSuiteOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertingThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingThreshold = this._alertingThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsSuiteOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertingThreshold = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertingThreshold = value.alertingThreshold;
    }
  }

  // alerting_threshold - computed: false, optional: false, required: true
  private _alertingThreshold?: number; 
  public get alertingThreshold() {
    return this.getNumberAttribute('alerting_threshold');
  }
  public set alertingThreshold(value: number) {
    this._alertingThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingThresholdInput() {
    return this._alertingThreshold;
  }
}

export class SyntheticsSuiteOptionsList extends cdktn.ComplexList {
  public internalValue? : SyntheticsSuiteOptions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsSuiteOptionsOutputReference {
    return new SyntheticsSuiteOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SyntheticsSuiteTests {
  /**
  * Alerting criticality for the test. Valid values are `ignore`, `critical`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_suite#alerting_criticality SyntheticsSuite#alerting_criticality}
  */
  readonly alertingCriticality?: string;
  /**
  * Public ID of the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_suite#public_id SyntheticsSuite#public_id}
  */
  readonly publicId: string;
}

export function syntheticsSuiteTestsToTerraform(struct?: SyntheticsSuiteTests | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alerting_criticality: cdktn.stringToTerraform(struct!.alertingCriticality),
    public_id: cdktn.stringToTerraform(struct!.publicId),
  }
}


export function syntheticsSuiteTestsToHclTerraform(struct?: SyntheticsSuiteTests | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alerting_criticality: {
      value: cdktn.stringToHclTerraform(struct!.alertingCriticality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_id: {
      value: cdktn.stringToHclTerraform(struct!.publicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticsSuiteTestsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SyntheticsSuiteTests | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertingCriticality !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertingCriticality = this._alertingCriticality;
    }
    if (this._publicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicId = this._publicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticsSuiteTests | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertingCriticality = undefined;
      this._publicId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertingCriticality = value.alertingCriticality;
      this._publicId = value.publicId;
    }
  }

  // alerting_criticality - computed: false, optional: true, required: false
  private _alertingCriticality?: string; 
  public get alertingCriticality() {
    return this.getStringAttribute('alerting_criticality');
  }
  public set alertingCriticality(value: string) {
    this._alertingCriticality = value;
  }
  public resetAlertingCriticality() {
    this._alertingCriticality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingCriticalityInput() {
    return this._alertingCriticality;
  }

  // public_id - computed: false, optional: false, required: true
  private _publicId?: string; 
  public get publicId() {
    return this.getStringAttribute('public_id');
  }
  public set publicId(value: string) {
    this._publicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIdInput() {
    return this._publicId;
  }
}

export class SyntheticsSuiteTestsList extends cdktn.ComplexList {
  public internalValue? : SyntheticsSuiteTests[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SyntheticsSuiteTestsOutputReference {
    return new SyntheticsSuiteTestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_suite datadog_synthetics_suite}
*/
export class SyntheticsSuite extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_synthetics_suite";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SyntheticsSuite resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticsSuite to import
  * @param importFromId The id of the existing SyntheticsSuite that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_suite#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticsSuite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_synthetics_suite", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_suite datadog_synthetics_suite} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsSuiteConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsSuiteConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_synthetics_suite',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.15.0',
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
    this._message = config.message;
    this._name = config.name;
    this._tags = config.tags;
    this._options.internalValue = config.options;
    this._tests.internalValue = config.tests;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // options - computed: false, optional: true, required: false
  private _options = new SyntheticsSuiteOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: SyntheticsSuiteOptions[] | cdktn.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // tests - computed: false, optional: true, required: false
  private _tests = new SyntheticsSuiteTestsList(this, "tests", false);
  public get tests() {
    return this._tests;
  }
  public putTests(value: SyntheticsSuiteTests[] | cdktn.IResolvable) {
    this._tests.internalValue = value;
  }
  public resetTests() {
    this._tests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testsInput() {
    return this._tests.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      message: cdktn.stringToTerraform(this._message),
      name: cdktn.stringToTerraform(this._name),
      tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tags),
      options: cdktn.listMapper(syntheticsSuiteOptionsToTerraform, true)(this._options.internalValue),
      tests: cdktn.listMapper(syntheticsSuiteTestsToTerraform, true)(this._tests.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      tags: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      options: {
        value: cdktn.listMapperHcl(syntheticsSuiteOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsSuiteOptionsList",
      },
      tests: {
        value: cdktn.listMapperHcl(syntheticsSuiteTestsToHclTerraform, true)(this._tests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticsSuiteTestsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
