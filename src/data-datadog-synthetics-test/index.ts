/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/synthetics_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatadogSyntheticsTestConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/synthetics_test#id DataDatadogSyntheticsTest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The synthetic test id or URL to search for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/synthetics_test#test_id DataDatadogSyntheticsTest#test_id}
  */
  readonly testId: string;
}
export interface DataDatadogSyntheticsTestMobileOptionsListBindings {
}

export function dataDatadogSyntheticsTestMobileOptionsListBindingsToTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListBindings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestMobileOptionsListBindingsToHclTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListBindings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestMobileOptionsListBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestMobileOptionsListBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // principals - computed: true, optional: false, required: false
  public get principals() {
    return this.getListAttribute('principals');
  }

  // relation - computed: true, optional: false, required: false
  public get relation() {
    return this.getStringAttribute('relation');
  }
}

export class DataDatadogSyntheticsTestMobileOptionsListBindingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference {
    return new DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSyntheticsTestMobileOptionsListCi {
}

export function dataDatadogSyntheticsTestMobileOptionsListCiToTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListCi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestMobileOptionsListCiToHclTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListCi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestMobileOptionsListCiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestMobileOptionsListCi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestMobileOptionsListCi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_rule - computed: true, optional: false, required: false
  public get executionRule() {
    return this.getStringAttribute('execution_rule');
  }
}

export class DataDatadogSyntheticsTestMobileOptionsListCiList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestMobileOptionsListCiOutputReference {
    return new DataDatadogSyntheticsTestMobileOptionsListCiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSyntheticsTestMobileOptionsListMobileApplication {
}

export function dataDatadogSyntheticsTestMobileOptionsListMobileApplicationToTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListMobileApplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestMobileOptionsListMobileApplicationToHclTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListMobileApplication): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestMobileOptionsListMobileApplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestMobileOptionsListMobileApplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // reference_id - computed: true, optional: false, required: false
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }

  // reference_type - computed: true, optional: false, required: false
  public get referenceType() {
    return this.getStringAttribute('reference_type');
  }
}

export class DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference {
    return new DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSyntheticsTestMobileOptionsListMonitorOptions {
}

export function dataDatadogSyntheticsTestMobileOptionsListMonitorOptionsToTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListMonitorOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestMobileOptionsListMonitorOptionsToHclTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListMonitorOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestMobileOptionsListMonitorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestMobileOptionsListMonitorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // escalation_message - computed: true, optional: false, required: false
  public get escalationMessage() {
    return this.getStringAttribute('escalation_message');
  }

  // notification_preset_name - computed: true, optional: false, required: false
  public get notificationPresetName() {
    return this.getStringAttribute('notification_preset_name');
  }

  // renotify_interval - computed: true, optional: false, required: false
  public get renotifyInterval() {
    return this.getNumberAttribute('renotify_interval');
  }

  // renotify_occurrences - computed: true, optional: false, required: false
  public get renotifyOccurrences() {
    return this.getNumberAttribute('renotify_occurrences');
  }
}

export class DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference {
    return new DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSyntheticsTestMobileOptionsListRetry {
}

export function dataDatadogSyntheticsTestMobileOptionsListRetryToTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListRetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestMobileOptionsListRetryToHclTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListRetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestMobileOptionsListRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestMobileOptionsListRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }
}

export class DataDatadogSyntheticsTestMobileOptionsListRetryList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference {
    return new DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes {
}

export function dataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesToTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesToHclTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getNumberAttribute('day');
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference {
    return new DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSyntheticsTestMobileOptionsListScheduling {
}

export function dataDatadogSyntheticsTestMobileOptionsListSchedulingToTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListScheduling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestMobileOptionsListSchedulingToHclTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListScheduling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestMobileOptionsListScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestMobileOptionsListScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timeframes - computed: true, optional: false, required: false
  private _timeframes = new DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList(this, "timeframes", false);
  public get timeframes() {
    return this._timeframes;
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export class DataDatadogSyntheticsTestMobileOptionsListSchedulingList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference {
    return new DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSyntheticsTestMobileOptionsListStruct {
}

export function dataDatadogSyntheticsTestMobileOptionsListStructToTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestMobileOptionsListStructToHclTerraform(struct?: DataDatadogSyntheticsTestMobileOptionsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestMobileOptionsListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestMobileOptionsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestMobileOptionsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_application_crash - computed: true, optional: false, required: false
  public get allowApplicationCrash() {
    return this.getBooleanAttribute('allow_application_crash');
  }

  // bindings - computed: true, optional: false, required: false
  private _bindings = new DataDatadogSyntheticsTestMobileOptionsListBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }

  // ci - computed: true, optional: false, required: false
  private _ci = new DataDatadogSyntheticsTestMobileOptionsListCiList(this, "ci", false);
  public get ci() {
    return this._ci;
  }

  // default_step_timeout - computed: true, optional: false, required: false
  public get defaultStepTimeout() {
    return this.getNumberAttribute('default_step_timeout');
  }

  // device_ids - computed: true, optional: false, required: false
  public get deviceIds() {
    return this.getListAttribute('device_ids');
  }

  // disable_auto_accept_alert - computed: true, optional: false, required: false
  public get disableAutoAcceptAlert() {
    return this.getBooleanAttribute('disable_auto_accept_alert');
  }

  // min_failure_duration - computed: true, optional: false, required: false
  public get minFailureDuration() {
    return this.getNumberAttribute('min_failure_duration');
  }

  // mobile_application - computed: true, optional: false, required: false
  private _mobileApplication = new DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList(this, "mobile_application", false);
  public get mobileApplication() {
    return this._mobileApplication;
  }

  // monitor_name - computed: true, optional: false, required: false
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }

  // monitor_options - computed: true, optional: false, required: false
  private _monitorOptions = new DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList(this, "monitor_options", false);
  public get monitorOptions() {
    return this._monitorOptions;
  }

  // monitor_priority - computed: true, optional: false, required: false
  public get monitorPriority() {
    return this.getNumberAttribute('monitor_priority');
  }

  // no_screenshot - computed: true, optional: false, required: false
  public get noScreenshot() {
    return this.getBooleanAttribute('no_screenshot');
  }

  // restricted_roles - computed: true, optional: false, required: false
  public get restrictedRoles() {
    return cdktn.Fn.tolist(this.getListAttribute('restricted_roles'));
  }

  // retry - computed: true, optional: false, required: false
  private _retry = new DataDatadogSyntheticsTestMobileOptionsListRetryList(this, "retry", false);
  public get retry() {
    return this._retry;
  }

  // scheduling - computed: true, optional: false, required: false
  private _scheduling = new DataDatadogSyntheticsTestMobileOptionsListSchedulingList(this, "scheduling", false);
  public get scheduling() {
    return this._scheduling;
  }

  // tick_every - computed: true, optional: false, required: false
  public get tickEvery() {
    return this.getNumberAttribute('tick_every');
  }
}

export class DataDatadogSyntheticsTestMobileOptionsListStructList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestMobileOptionsListStructOutputReference {
    return new DataDatadogSyntheticsTestMobileOptionsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSyntheticsTestOptionsListCi {
}

export function dataDatadogSyntheticsTestOptionsListCiToTerraform(struct?: DataDatadogSyntheticsTestOptionsListCi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestOptionsListCiToHclTerraform(struct?: DataDatadogSyntheticsTestOptionsListCi): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestOptionsListCiOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestOptionsListCi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestOptionsListCi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_rule - computed: true, optional: false, required: false
  public get executionRule() {
    return this.getStringAttribute('execution_rule');
  }
}

export class DataDatadogSyntheticsTestOptionsListCiList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestOptionsListCiOutputReference {
    return new DataDatadogSyntheticsTestOptionsListCiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSyntheticsTestOptionsListMonitorOptions {
}

export function dataDatadogSyntheticsTestOptionsListMonitorOptionsToTerraform(struct?: DataDatadogSyntheticsTestOptionsListMonitorOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestOptionsListMonitorOptionsToHclTerraform(struct?: DataDatadogSyntheticsTestOptionsListMonitorOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestOptionsListMonitorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestOptionsListMonitorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // escalation_message - computed: true, optional: false, required: false
  public get escalationMessage() {
    return this.getStringAttribute('escalation_message');
  }

  // notification_preset_name - computed: true, optional: false, required: false
  public get notificationPresetName() {
    return this.getStringAttribute('notification_preset_name');
  }

  // renotify_interval - computed: true, optional: false, required: false
  public get renotifyInterval() {
    return this.getNumberAttribute('renotify_interval');
  }

  // renotify_occurrences - computed: true, optional: false, required: false
  public get renotifyOccurrences() {
    return this.getNumberAttribute('renotify_occurrences');
  }
}

export class DataDatadogSyntheticsTestOptionsListMonitorOptionsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference {
    return new DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSyntheticsTestOptionsListRetry {
}

export function dataDatadogSyntheticsTestOptionsListRetryToTerraform(struct?: DataDatadogSyntheticsTestOptionsListRetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestOptionsListRetryToHclTerraform(struct?: DataDatadogSyntheticsTestOptionsListRetry): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestOptionsListRetryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestOptionsListRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestOptionsListRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }
}

export class DataDatadogSyntheticsTestOptionsListRetryList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestOptionsListRetryOutputReference {
    return new DataDatadogSyntheticsTestOptionsListRetryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSyntheticsTestOptionsListRumSettings {
}

export function dataDatadogSyntheticsTestOptionsListRumSettingsToTerraform(struct?: DataDatadogSyntheticsTestOptionsListRumSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestOptionsListRumSettingsToHclTerraform(struct?: DataDatadogSyntheticsTestOptionsListRumSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestOptionsListRumSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestOptionsListRumSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // client_token_id - computed: true, optional: false, required: false
  public get clientTokenId() {
    return this.getNumberAttribute('client_token_id');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}

export class DataDatadogSyntheticsTestOptionsListRumSettingsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference {
    return new DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSyntheticsTestOptionsListSchedulingTimeframes {
}

export function dataDatadogSyntheticsTestOptionsListSchedulingTimeframesToTerraform(struct?: DataDatadogSyntheticsTestOptionsListSchedulingTimeframes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestOptionsListSchedulingTimeframesToHclTerraform(struct?: DataDatadogSyntheticsTestOptionsListSchedulingTimeframes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestOptionsListSchedulingTimeframes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestOptionsListSchedulingTimeframes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getNumberAttribute('day');
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference {
    return new DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSyntheticsTestOptionsListScheduling {
}

export function dataDatadogSyntheticsTestOptionsListSchedulingToTerraform(struct?: DataDatadogSyntheticsTestOptionsListScheduling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestOptionsListSchedulingToHclTerraform(struct?: DataDatadogSyntheticsTestOptionsListScheduling): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestOptionsListSchedulingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestOptionsListScheduling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestOptionsListScheduling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timeframes - computed: true, optional: false, required: false
  private _timeframes = new DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList(this, "timeframes", false);
  public get timeframes() {
    return this._timeframes;
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export class DataDatadogSyntheticsTestOptionsListSchedulingList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestOptionsListSchedulingOutputReference {
    return new DataDatadogSyntheticsTestOptionsListSchedulingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogSyntheticsTestOptionsListStruct {
}

export function dataDatadogSyntheticsTestOptionsListStructToTerraform(struct?: DataDatadogSyntheticsTestOptionsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogSyntheticsTestOptionsListStructToHclTerraform(struct?: DataDatadogSyntheticsTestOptionsListStruct): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogSyntheticsTestOptionsListStructOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogSyntheticsTestOptionsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogSyntheticsTestOptionsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accept_self_signed - computed: true, optional: false, required: false
  public get acceptSelfSigned() {
    return this.getBooleanAttribute('accept_self_signed');
  }

  // allow_insecure - computed: true, optional: false, required: false
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }

  // blocked_request_patterns - computed: true, optional: false, required: false
  public get blockedRequestPatterns() {
    return this.getListAttribute('blocked_request_patterns');
  }

  // capture_network_payloads - computed: true, optional: false, required: false
  public get captureNetworkPayloads() {
    return this.getBooleanAttribute('capture_network_payloads');
  }

  // check_certificate_revocation - computed: true, optional: false, required: false
  public get checkCertificateRevocation() {
    return this.getBooleanAttribute('check_certificate_revocation');
  }

  // ci - computed: true, optional: false, required: false
  private _ci = new DataDatadogSyntheticsTestOptionsListCiList(this, "ci", false);
  public get ci() {
    return this._ci;
  }

  // disable_aia_intermediate_fetching - computed: true, optional: false, required: false
  public get disableAiaIntermediateFetching() {
    return this.getBooleanAttribute('disable_aia_intermediate_fetching');
  }

  // disable_cors - computed: true, optional: false, required: false
  public get disableCors() {
    return this.getBooleanAttribute('disable_cors');
  }

  // disable_csp - computed: true, optional: false, required: false
  public get disableCsp() {
    return this.getBooleanAttribute('disable_csp');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // http_version - computed: true, optional: false, required: false
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }

  // ignore_certificate_validation - computed: true, optional: false, required: false
  public get ignoreCertificateValidation() {
    return this.getBooleanAttribute('ignore_certificate_validation');
  }

  // ignore_server_certificate_error - computed: true, optional: false, required: false
  public get ignoreServerCertificateError() {
    return this.getBooleanAttribute('ignore_server_certificate_error');
  }

  // initial_navigation_timeout - computed: true, optional: false, required: false
  public get initialNavigationTimeout() {
    return this.getNumberAttribute('initial_navigation_timeout');
  }

  // min_failure_duration - computed: true, optional: false, required: false
  public get minFailureDuration() {
    return this.getNumberAttribute('min_failure_duration');
  }

  // min_location_failed - computed: true, optional: false, required: false
  public get minLocationFailed() {
    return this.getNumberAttribute('min_location_failed');
  }

  // monitor_name - computed: true, optional: false, required: false
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }

  // monitor_options - computed: true, optional: false, required: false
  private _monitorOptions = new DataDatadogSyntheticsTestOptionsListMonitorOptionsList(this, "monitor_options", false);
  public get monitorOptions() {
    return this._monitorOptions;
  }

  // monitor_priority - computed: true, optional: false, required: false
  public get monitorPriority() {
    return this.getNumberAttribute('monitor_priority');
  }

  // no_screenshot - computed: true, optional: false, required: false
  public get noScreenshot() {
    return this.getBooleanAttribute('no_screenshot');
  }

  // restricted_roles - computed: true, optional: false, required: false
  public get restrictedRoles() {
    return cdktn.Fn.tolist(this.getListAttribute('restricted_roles'));
  }

  // retry - computed: true, optional: false, required: false
  private _retry = new DataDatadogSyntheticsTestOptionsListRetryList(this, "retry", false);
  public get retry() {
    return this._retry;
  }

  // rum_settings - computed: true, optional: false, required: false
  private _rumSettings = new DataDatadogSyntheticsTestOptionsListRumSettingsList(this, "rum_settings", false);
  public get rumSettings() {
    return this._rumSettings;
  }

  // scheduling - computed: true, optional: false, required: false
  private _scheduling = new DataDatadogSyntheticsTestOptionsListSchedulingList(this, "scheduling", false);
  public get scheduling() {
    return this._scheduling;
  }

  // tick_every - computed: true, optional: false, required: false
  public get tickEvery() {
    return this.getNumberAttribute('tick_every');
  }
}

export class DataDatadogSyntheticsTestOptionsListStructList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogSyntheticsTestOptionsListStructOutputReference {
    return new DataDatadogSyntheticsTestOptionsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/synthetics_test datadog_synthetics_test}
*/
export class DataDatadogSyntheticsTest extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_synthetics_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatadogSyntheticsTest resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogSyntheticsTest to import
  * @param importFromId The id of the existing DataDatadogSyntheticsTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/synthetics_test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogSyntheticsTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_synthetics_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/synthetics_test datadog_synthetics_test} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogSyntheticsTestConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogSyntheticsTestConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_synthetics_test',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.20.0',
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
    this._id = config.id;
    this._testId = config.testId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_ids - computed: true, optional: false, required: false
  public get deviceIds() {
    return this.getListAttribute('device_ids');
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

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return cdktn.Fn.tolist(this.getListAttribute('locations'));
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // mobile_options_list - computed: true, optional: false, required: false
  private _mobileOptionsList = new DataDatadogSyntheticsTestMobileOptionsListStructList(this, "mobile_options_list", false);
  public get mobileOptionsList() {
    return this._mobileOptionsList;
  }

  // monitor_id - computed: true, optional: false, required: false
  public get monitorId() {
    return this.getNumberAttribute('monitor_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options_list - computed: true, optional: false, required: false
  private _optionsList = new DataDatadogSyntheticsTestOptionsListStructList(this, "options_list", false);
  public get optionsList() {
    return this._optionsList;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subtype - computed: true, optional: false, required: false
  public get subtype() {
    return this.getStringAttribute('subtype');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // test_id - computed: false, optional: false, required: true
  private _testId?: string; 
  public get testId() {
    return this.getStringAttribute('test_id');
  }
  public set testId(value: string) {
    this._testId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testIdInput() {
    return this._testId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      test_id: cdktn.stringToTerraform(this._testId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_id: {
        value: cdktn.stringToHclTerraform(this._testId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
