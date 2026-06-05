/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_aws_account_ccm_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IntegrationAwsAccountCcmConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Unique Datadog ID of the AWS Account Integration Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_aws_account_ccm_config#aws_account_config_id IntegrationAwsAccountCcmConfig#aws_account_config_id}
  */
  readonly awsAccountConfigId: string;
  /**
  * ccm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_aws_account_ccm_config#ccm_config IntegrationAwsAccountCcmConfig#ccm_config}
  */
  readonly ccmConfig?: IntegrationAwsAccountCcmConfigCcmConfig;
}
export interface IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs {
  /**
  * Name of the S3 bucket where the Cost and Usage Report is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_aws_account_ccm_config#bucket_name IntegrationAwsAccountCcmConfig#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * AWS region of the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_aws_account_ccm_config#bucket_region IntegrationAwsAccountCcmConfig#bucket_region}
  */
  readonly bucketRegion?: string;
  /**
  * Name of the Cost and Usage Report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_aws_account_ccm_config#report_name IntegrationAwsAccountCcmConfig#report_name}
  */
  readonly reportName?: string;
  /**
  * S3 prefix where the Cost and Usage Report is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_aws_account_ccm_config#report_prefix IntegrationAwsAccountCcmConfig#report_prefix}
  */
  readonly reportPrefix?: string;
  /**
  * Type of the Cost and Usage Report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_aws_account_ccm_config#report_type IntegrationAwsAccountCcmConfig#report_type}
  */
  readonly reportType?: string;
}

export function integrationAwsAccountCcmConfigCcmConfigDataExportConfigsToTerraform(struct?: IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktn.stringToTerraform(struct!.bucketName),
    bucket_region: cdktn.stringToTerraform(struct!.bucketRegion),
    report_name: cdktn.stringToTerraform(struct!.reportName),
    report_prefix: cdktn.stringToTerraform(struct!.reportPrefix),
    report_type: cdktn.stringToTerraform(struct!.reportType),
  }
}


export function integrationAwsAccountCcmConfigCcmConfigDataExportConfigsToHclTerraform(struct?: IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_region: {
      value: cdktn.stringToHclTerraform(struct!.bucketRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_name: {
      value: cdktn.stringToHclTerraform(struct!.reportName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_prefix: {
      value: cdktn.stringToHclTerraform(struct!.reportPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_type: {
      value: cdktn.stringToHclTerraform(struct!.reportType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketRegion = this._bucketRegion;
    }
    if (this._reportName !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportName = this._reportName;
    }
    if (this._reportPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportPrefix = this._reportPrefix;
    }
    if (this._reportType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportType = this._reportType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._bucketRegion = undefined;
      this._reportName = undefined;
      this._reportPrefix = undefined;
      this._reportType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._bucketRegion = value.bucketRegion;
      this._reportName = value.reportName;
      this._reportPrefix = value.reportPrefix;
      this._reportType = value.reportType;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_region - computed: false, optional: true, required: false
  private _bucketRegion?: string; 
  public get bucketRegion() {
    return this.getStringAttribute('bucket_region');
  }
  public set bucketRegion(value: string) {
    this._bucketRegion = value;
  }
  public resetBucketRegion() {
    this._bucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketRegionInput() {
    return this._bucketRegion;
  }

  // report_name - computed: false, optional: true, required: false
  private _reportName?: string; 
  public get reportName() {
    return this.getStringAttribute('report_name');
  }
  public set reportName(value: string) {
    this._reportName = value;
  }
  public resetReportName() {
    this._reportName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportNameInput() {
    return this._reportName;
  }

  // report_prefix - computed: false, optional: true, required: false
  private _reportPrefix?: string; 
  public get reportPrefix() {
    return this.getStringAttribute('report_prefix');
  }
  public set reportPrefix(value: string) {
    this._reportPrefix = value;
  }
  public resetReportPrefix() {
    this._reportPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportPrefixInput() {
    return this._reportPrefix;
  }

  // report_type - computed: false, optional: true, required: false
  private _reportType?: string; 
  public get reportType() {
    return this.getStringAttribute('report_type');
  }
  public set reportType(value: string) {
    this._reportType = value;
  }
  public resetReportType() {
    this._reportType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportTypeInput() {
    return this._reportType;
  }
}

export class IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList extends cdktn.ComplexList {
  public internalValue? : IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference {
    return new IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationAwsAccountCcmConfigCcmConfig {
  /**
  * data_export_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_aws_account_ccm_config#data_export_configs IntegrationAwsAccountCcmConfig#data_export_configs}
  */
  readonly dataExportConfigs?: IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs[] | cdktn.IResolvable;
}

export function integrationAwsAccountCcmConfigCcmConfigToTerraform(struct?: IntegrationAwsAccountCcmConfigCcmConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_export_configs: cdktn.listMapper(integrationAwsAccountCcmConfigCcmConfigDataExportConfigsToTerraform, true)(struct!.dataExportConfigs),
  }
}


export function integrationAwsAccountCcmConfigCcmConfigToHclTerraform(struct?: IntegrationAwsAccountCcmConfigCcmConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_export_configs: {
      value: cdktn.listMapperHcl(integrationAwsAccountCcmConfigCcmConfigDataExportConfigsToHclTerraform, true)(struct!.dataExportConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationAwsAccountCcmConfigCcmConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationAwsAccountCcmConfigCcmConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataExportConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataExportConfigs = this._dataExportConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationAwsAccountCcmConfigCcmConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataExportConfigs.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataExportConfigs.internalValue = value.dataExportConfigs;
    }
  }

  // data_export_configs - computed: false, optional: true, required: false
  private _dataExportConfigs = new IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigsList(this, "data_export_configs", false);
  public get dataExportConfigs() {
    return this._dataExportConfigs;
  }
  public putDataExportConfigs(value: IntegrationAwsAccountCcmConfigCcmConfigDataExportConfigs[] | cdktn.IResolvable) {
    this._dataExportConfigs.internalValue = value;
  }
  public resetDataExportConfigs() {
    this._dataExportConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExportConfigsInput() {
    return this._dataExportConfigs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_aws_account_ccm_config datadog_integration_aws_account_ccm_config}
*/
export class IntegrationAwsAccountCcmConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_integration_aws_account_ccm_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IntegrationAwsAccountCcmConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationAwsAccountCcmConfig to import
  * @param importFromId The id of the existing IntegrationAwsAccountCcmConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_aws_account_ccm_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationAwsAccountCcmConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_integration_aws_account_ccm_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_aws_account_ccm_config datadog_integration_aws_account_ccm_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationAwsAccountCcmConfigConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationAwsAccountCcmConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_aws_account_ccm_config',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.12.1',
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
    this._awsAccountConfigId = config.awsAccountConfigId;
    this._ccmConfig.internalValue = config.ccmConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_config_id - computed: false, optional: false, required: true
  private _awsAccountConfigId?: string; 
  public get awsAccountConfigId() {
    return this.getStringAttribute('aws_account_config_id');
  }
  public set awsAccountConfigId(value: string) {
    this._awsAccountConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountConfigIdInput() {
    return this._awsAccountConfigId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ccm_config - computed: false, optional: true, required: false
  private _ccmConfig = new IntegrationAwsAccountCcmConfigCcmConfigOutputReference(this, "ccm_config");
  public get ccmConfig() {
    return this._ccmConfig;
  }
  public putCcmConfig(value: IntegrationAwsAccountCcmConfigCcmConfig) {
    this._ccmConfig.internalValue = value;
  }
  public resetCcmConfig() {
    this._ccmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccmConfigInput() {
    return this._ccmConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_config_id: cdktn.stringToTerraform(this._awsAccountConfigId),
      ccm_config: integrationAwsAccountCcmConfigCcmConfigToTerraform(this._ccmConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_config_id: {
        value: cdktn.stringToHclTerraform(this._awsAccountConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ccm_config: {
        value: integrationAwsAccountCcmConfigCcmConfigToHclTerraform(this._ccmConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationAwsAccountCcmConfigCcmConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
