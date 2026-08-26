/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/organization_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatadogOrganizationSettingsConfig extends cdktn.TerraformMetaArguments {
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/organization_settings#settings DataDatadogOrganizationSettings#settings}
  */
  readonly settings?: DataDatadogOrganizationSettingsSettings[] | cdktn.IResolvable;
}
export interface DataDatadogOrganizationSettingsSettingsSaml {
}

export function dataDatadogOrganizationSettingsSettingsSamlToTerraform(struct?: DataDatadogOrganizationSettingsSettingsSaml | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogOrganizationSettingsSettingsSamlToHclTerraform(struct?: DataDatadogOrganizationSettingsSettingsSaml | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogOrganizationSettingsSettingsSamlOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogOrganizationSettingsSettingsSaml | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogOrganizationSettingsSettingsSaml | cdktn.IResolvable | undefined) {
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataDatadogOrganizationSettingsSettingsSamlList extends cdktn.ComplexList {
  public internalValue? : DataDatadogOrganizationSettingsSettingsSaml[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogOrganizationSettingsSettingsSamlOutputReference {
    return new DataDatadogOrganizationSettingsSettingsSamlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains {
}

export function dataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsToTerraform(struct?: DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsToHclTerraform(struct?: DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains | cdktn.IResolvable | undefined) {
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

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return this.getListAttribute('domains');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList extends cdktn.ComplexList {
  public internalValue? : DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference {
    return new DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin {
}

export function dataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginToTerraform(struct?: DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginToHclTerraform(struct?: DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin | cdktn.IResolvable | undefined) {
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList extends cdktn.ComplexList {
  public internalValue? : DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference {
    return new DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogOrganizationSettingsSettingsSamlStrictMode {
}

export function dataDatadogOrganizationSettingsSettingsSamlStrictModeToTerraform(struct?: DataDatadogOrganizationSettingsSettingsSamlStrictMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogOrganizationSettingsSettingsSamlStrictModeToHclTerraform(struct?: DataDatadogOrganizationSettingsSettingsSamlStrictMode | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogOrganizationSettingsSettingsSamlStrictMode | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogOrganizationSettingsSettingsSamlStrictMode | cdktn.IResolvable | undefined) {
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataDatadogOrganizationSettingsSettingsSamlStrictModeList extends cdktn.ComplexList {
  public internalValue? : DataDatadogOrganizationSettingsSettingsSamlStrictMode[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference {
    return new DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatadogOrganizationSettingsSettings {
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/organization_settings#saml DataDatadogOrganizationSettings#saml}
  */
  readonly saml?: DataDatadogOrganizationSettingsSettingsSaml[] | cdktn.IResolvable;
  /**
  * saml_autocreate_users_domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/organization_settings#saml_autocreate_users_domains DataDatadogOrganizationSettings#saml_autocreate_users_domains}
  */
  readonly samlAutocreateUsersDomains?: DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains[] | cdktn.IResolvable;
  /**
  * saml_idp_initiated_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/organization_settings#saml_idp_initiated_login DataDatadogOrganizationSettings#saml_idp_initiated_login}
  */
  readonly samlIdpInitiatedLogin?: DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin[] | cdktn.IResolvable;
  /**
  * saml_strict_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/organization_settings#saml_strict_mode DataDatadogOrganizationSettings#saml_strict_mode}
  */
  readonly samlStrictMode?: DataDatadogOrganizationSettingsSettingsSamlStrictMode[] | cdktn.IResolvable;
}

export function dataDatadogOrganizationSettingsSettingsToTerraform(struct?: DataDatadogOrganizationSettingsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    saml: cdktn.listMapper(dataDatadogOrganizationSettingsSettingsSamlToTerraform, true)(struct!.saml),
    saml_autocreate_users_domains: cdktn.listMapper(dataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsToTerraform, true)(struct!.samlAutocreateUsersDomains),
    saml_idp_initiated_login: cdktn.listMapper(dataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginToTerraform, true)(struct!.samlIdpInitiatedLogin),
    saml_strict_mode: cdktn.listMapper(dataDatadogOrganizationSettingsSettingsSamlStrictModeToTerraform, true)(struct!.samlStrictMode),
  }
}


export function dataDatadogOrganizationSettingsSettingsToHclTerraform(struct?: DataDatadogOrganizationSettingsSettings | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    saml: {
      value: cdktn.listMapperHcl(dataDatadogOrganizationSettingsSettingsSamlToHclTerraform, true)(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatadogOrganizationSettingsSettingsSamlList",
    },
    saml_autocreate_users_domains: {
      value: cdktn.listMapperHcl(dataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsToHclTerraform, true)(struct!.samlAutocreateUsersDomains),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList",
    },
    saml_idp_initiated_login: {
      value: cdktn.listMapperHcl(dataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginToHclTerraform, true)(struct!.samlIdpInitiatedLogin),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList",
    },
    saml_strict_mode: {
      value: cdktn.listMapperHcl(dataDatadogOrganizationSettingsSettingsSamlStrictModeToHclTerraform, true)(struct!.samlStrictMode),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatadogOrganizationSettingsSettingsSamlStrictModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatadogOrganizationSettingsSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogOrganizationSettingsSettings | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    if (this._samlAutocreateUsersDomains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlAutocreateUsersDomains = this._samlAutocreateUsersDomains?.internalValue;
    }
    if (this._samlIdpInitiatedLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlIdpInitiatedLogin = this._samlIdpInitiatedLogin?.internalValue;
    }
    if (this._samlStrictMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlStrictMode = this._samlStrictMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogOrganizationSettingsSettings | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._saml.internalValue = undefined;
      this._samlAutocreateUsersDomains.internalValue = undefined;
      this._samlIdpInitiatedLogin.internalValue = undefined;
      this._samlStrictMode.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._saml.internalValue = value.saml;
      this._samlAutocreateUsersDomains.internalValue = value.samlAutocreateUsersDomains;
      this._samlIdpInitiatedLogin.internalValue = value.samlIdpInitiatedLogin;
      this._samlStrictMode.internalValue = value.samlStrictMode;
    }
  }

  // private_widget_share - computed: true, optional: false, required: false
  public get privateWidgetShare() {
    return this.getBooleanAttribute('private_widget_share');
  }

  // saml_autocreate_access_role - computed: true, optional: false, required: false
  public get samlAutocreateAccessRole() {
    return this.getStringAttribute('saml_autocreate_access_role');
  }

  // saml_can_be_enabled - computed: true, optional: false, required: false
  public get samlCanBeEnabled() {
    return this.getBooleanAttribute('saml_can_be_enabled');
  }

  // saml_idp_endpoint - computed: true, optional: false, required: false
  public get samlIdpEndpoint() {
    return this.getStringAttribute('saml_idp_endpoint');
  }

  // saml_idp_metadata_uploaded - computed: true, optional: false, required: false
  public get samlIdpMetadataUploaded() {
    return this.getBooleanAttribute('saml_idp_metadata_uploaded');
  }

  // saml_login_url - computed: true, optional: false, required: false
  public get samlLoginUrl() {
    return this.getStringAttribute('saml_login_url');
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new DataDatadogOrganizationSettingsSettingsSamlList(this, "saml", false);
  public get saml() {
    return this._saml;
  }
  public putSaml(value: DataDatadogOrganizationSettingsSettingsSaml[] | cdktn.IResolvable) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // saml_autocreate_users_domains - computed: false, optional: true, required: false
  private _samlAutocreateUsersDomains = new DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList(this, "saml_autocreate_users_domains", false);
  public get samlAutocreateUsersDomains() {
    return this._samlAutocreateUsersDomains;
  }
  public putSamlAutocreateUsersDomains(value: DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains[] | cdktn.IResolvable) {
    this._samlAutocreateUsersDomains.internalValue = value;
  }
  public resetSamlAutocreateUsersDomains() {
    this._samlAutocreateUsersDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAutocreateUsersDomainsInput() {
    return this._samlAutocreateUsersDomains.internalValue;
  }

  // saml_idp_initiated_login - computed: false, optional: true, required: false
  private _samlIdpInitiatedLogin = new DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList(this, "saml_idp_initiated_login", false);
  public get samlIdpInitiatedLogin() {
    return this._samlIdpInitiatedLogin;
  }
  public putSamlIdpInitiatedLogin(value: DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin[] | cdktn.IResolvable) {
    this._samlIdpInitiatedLogin.internalValue = value;
  }
  public resetSamlIdpInitiatedLogin() {
    this._samlIdpInitiatedLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpInitiatedLoginInput() {
    return this._samlIdpInitiatedLogin.internalValue;
  }

  // saml_strict_mode - computed: false, optional: true, required: false
  private _samlStrictMode = new DataDatadogOrganizationSettingsSettingsSamlStrictModeList(this, "saml_strict_mode", false);
  public get samlStrictMode() {
    return this._samlStrictMode;
  }
  public putSamlStrictMode(value: DataDatadogOrganizationSettingsSettingsSamlStrictMode[] | cdktn.IResolvable) {
    this._samlStrictMode.internalValue = value;
  }
  public resetSamlStrictMode() {
    this._samlStrictMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlStrictModeInput() {
    return this._samlStrictMode.internalValue;
  }
}

export class DataDatadogOrganizationSettingsSettingsList extends cdktn.ComplexList {
  public internalValue? : DataDatadogOrganizationSettingsSettings[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogOrganizationSettingsSettingsOutputReference {
    return new DataDatadogOrganizationSettingsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/organization_settings datadog_organization_settings}
*/
export class DataDatadogOrganizationSettings extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_organization_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatadogOrganizationSettings resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogOrganizationSettings to import
  * @param importFromId The id of the existing DataDatadogOrganizationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/organization_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogOrganizationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_organization_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/organization_settings datadog_organization_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogOrganizationSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogOrganizationSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_organization_settings',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.19.0',
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
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public_id - computed: true, optional: false, required: false
  public get publicId() {
    return this.getStringAttribute('public_id');
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DataDatadogOrganizationSettingsSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataDatadogOrganizationSettingsSettings[] | cdktn.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      settings: cdktn.listMapper(dataDatadogOrganizationSettingsSettingsToTerraform, true)(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      settings: {
        value: cdktn.listMapperHcl(dataDatadogOrganizationSettingsSettingsToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatadogOrganizationSettingsSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
