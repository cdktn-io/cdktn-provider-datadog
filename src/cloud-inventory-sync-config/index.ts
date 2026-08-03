/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CloudInventorySyncConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * The cloud provider type. Valid values are `aws`, `azure`, `gcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#cloud_provider CloudInventorySyncConfig#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#aws CloudInventorySyncConfig#aws}
  */
  readonly aws?: CloudInventorySyncConfigAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#azure CloudInventorySyncConfig#azure}
  */
  readonly azure?: CloudInventorySyncConfigAzure;
  /**
  * gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#gcp CloudInventorySyncConfig#gcp}
  */
  readonly gcp?: CloudInventorySyncConfigGcp;
}
export interface CloudInventorySyncConfigAws {
  /**
  * AWS Account ID of the account holding the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#aws_account_id CloudInventorySyncConfig#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Name of the S3 bucket holding the inventory files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_bucket_name CloudInventorySyncConfig#destination_bucket_name}
  */
  readonly destinationBucketName?: string;
  /**
  * AWS Region of the bucket holding the inventory files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_bucket_region CloudInventorySyncConfig#destination_bucket_region}
  */
  readonly destinationBucketRegion?: string;
  /**
  * Prefix path within the bucket for inventory files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_prefix CloudInventorySyncConfig#destination_prefix}
  */
  readonly destinationPrefix?: string;
}

export function cloudInventorySyncConfigAwsToTerraform(struct?: CloudInventorySyncConfigAws | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_account_id: cdktn.stringToTerraform(struct!.awsAccountId),
    destination_bucket_name: cdktn.stringToTerraform(struct!.destinationBucketName),
    destination_bucket_region: cdktn.stringToTerraform(struct!.destinationBucketRegion),
    destination_prefix: cdktn.stringToTerraform(struct!.destinationPrefix),
  }
}


export function cloudInventorySyncConfigAwsToHclTerraform(struct?: CloudInventorySyncConfigAws | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_account_id: {
      value: cdktn.stringToHclTerraform(struct!.awsAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.destinationBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_bucket_region: {
      value: cdktn.stringToHclTerraform(struct!.destinationBucketRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_prefix: {
      value: cdktn.stringToHclTerraform(struct!.destinationPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudInventorySyncConfigAwsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudInventorySyncConfigAws | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId;
    }
    if (this._destinationBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationBucketName = this._destinationBucketName;
    }
    if (this._destinationBucketRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationBucketRegion = this._destinationBucketRegion;
    }
    if (this._destinationPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefix = this._destinationPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudInventorySyncConfigAws | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccountId = undefined;
      this._destinationBucketName = undefined;
      this._destinationBucketRegion = undefined;
      this._destinationPrefix = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccountId = value.awsAccountId;
      this._destinationBucketName = value.destinationBucketName;
      this._destinationBucketRegion = value.destinationBucketRegion;
      this._destinationPrefix = value.destinationPrefix;
    }
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // destination_bucket_name - computed: false, optional: true, required: false
  private _destinationBucketName?: string; 
  public get destinationBucketName() {
    return this.getStringAttribute('destination_bucket_name');
  }
  public set destinationBucketName(value: string) {
    this._destinationBucketName = value;
  }
  public resetDestinationBucketName() {
    this._destinationBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationBucketNameInput() {
    return this._destinationBucketName;
  }

  // destination_bucket_region - computed: false, optional: true, required: false
  private _destinationBucketRegion?: string; 
  public get destinationBucketRegion() {
    return this.getStringAttribute('destination_bucket_region');
  }
  public set destinationBucketRegion(value: string) {
    this._destinationBucketRegion = value;
  }
  public resetDestinationBucketRegion() {
    this._destinationBucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationBucketRegionInput() {
    return this._destinationBucketRegion;
  }

  // destination_prefix - computed: false, optional: true, required: false
  private _destinationPrefix?: string; 
  public get destinationPrefix() {
    return this.getStringAttribute('destination_prefix');
  }
  public set destinationPrefix(value: string) {
    this._destinationPrefix = value;
  }
  public resetDestinationPrefix() {
    this._destinationPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixInput() {
    return this._destinationPrefix;
  }
}
export interface CloudInventorySyncConfigAzure {
  /**
  * Azure Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#client_id CloudInventorySyncConfig#client_id}
  */
  readonly clientId?: string;
  /**
  * Azure Storage Container name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#container CloudInventorySyncConfig#container}
  */
  readonly container?: string;
  /**
  * Azure Resource Group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#resource_group CloudInventorySyncConfig#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Azure Storage Account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#storage_account CloudInventorySyncConfig#storage_account}
  */
  readonly storageAccount?: string;
  /**
  * Azure Subscription ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#subscription_id CloudInventorySyncConfig#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Azure Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#tenant_id CloudInventorySyncConfig#tenant_id}
  */
  readonly tenantId?: string;
}

export function cloudInventorySyncConfigAzureToTerraform(struct?: CloudInventorySyncConfigAzure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_id: cdktn.stringToTerraform(struct!.clientId),
    container: cdktn.stringToTerraform(struct!.container),
    resource_group: cdktn.stringToTerraform(struct!.resourceGroup),
    storage_account: cdktn.stringToTerraform(struct!.storageAccount),
    subscription_id: cdktn.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
  }
}


export function cloudInventorySyncConfigAzureToHclTerraform(struct?: CloudInventorySyncConfigAzure | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_id: {
      value: cdktn.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container: {
      value: cdktn.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktn.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account: {
      value: cdktn.stringToHclTerraform(struct!.storageAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktn.stringToHclTerraform(struct!.subscriptionId),
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

export class CloudInventorySyncConfigAzureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudInventorySyncConfigAzure | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._storageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccount = this._storageAccount;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudInventorySyncConfigAzure | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._container = undefined;
      this._resourceGroup = undefined;
      this._storageAccount = undefined;
      this._subscriptionId = undefined;
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
      this._container = value.container;
      this._resourceGroup = value.resourceGroup;
      this._storageAccount = value.storageAccount;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
    }
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

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: string; 
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }
  public set storageAccount(value: string) {
    this._storageAccount = value;
  }
  public resetStorageAccount() {
    this._storageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
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
export interface CloudInventorySyncConfigGcp {
  /**
  * Name of the GCS bucket holding the inventory files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#destination_bucket_name CloudInventorySyncConfig#destination_bucket_name}
  */
  readonly destinationBucketName?: string;
  /**
  * GCP Project ID of the project holding the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#project_id CloudInventorySyncConfig#project_id}
  */
  readonly projectId?: string;
  /**
  * Service account email used for reading the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#service_account_email CloudInventorySyncConfig#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * Name of the source bucket the inventory report is generated for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#source_bucket_name CloudInventorySyncConfig#source_bucket_name}
  */
  readonly sourceBucketName?: string;
}

export function cloudInventorySyncConfigGcpToTerraform(struct?: CloudInventorySyncConfigGcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    destination_bucket_name: cdktn.stringToTerraform(struct!.destinationBucketName),
    project_id: cdktn.stringToTerraform(struct!.projectId),
    service_account_email: cdktn.stringToTerraform(struct!.serviceAccountEmail),
    source_bucket_name: cdktn.stringToTerraform(struct!.sourceBucketName),
  }
}


export function cloudInventorySyncConfigGcpToHclTerraform(struct?: CloudInventorySyncConfigGcp | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    destination_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.destinationBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_bucket_name: {
      value: cdktn.stringToHclTerraform(struct!.sourceBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudInventorySyncConfigGcpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudInventorySyncConfigGcp | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationBucketName = this._destinationBucketName;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._sourceBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceBucketName = this._sourceBucketName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudInventorySyncConfigGcp | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationBucketName = undefined;
      this._projectId = undefined;
      this._serviceAccountEmail = undefined;
      this._sourceBucketName = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationBucketName = value.destinationBucketName;
      this._projectId = value.projectId;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._sourceBucketName = value.sourceBucketName;
    }
  }

  // destination_bucket_name - computed: false, optional: true, required: false
  private _destinationBucketName?: string; 
  public get destinationBucketName() {
    return this.getStringAttribute('destination_bucket_name');
  }
  public set destinationBucketName(value: string) {
    this._destinationBucketName = value;
  }
  public resetDestinationBucketName() {
    this._destinationBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationBucketNameInput() {
    return this._destinationBucketName;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // source_bucket_name - computed: false, optional: true, required: false
  private _sourceBucketName?: string; 
  public get sourceBucketName() {
    return this.getStringAttribute('source_bucket_name');
  }
  public set sourceBucketName(value: string) {
    this._sourceBucketName = value;
  }
  public resetSourceBucketName() {
    this._sourceBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBucketNameInput() {
    return this._sourceBucketName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config datadog_cloud_inventory_sync_config}
*/
export class CloudInventorySyncConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_cloud_inventory_sync_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CloudInventorySyncConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudInventorySyncConfig to import
  * @param importFromId The id of the existing CloudInventorySyncConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudInventorySyncConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_cloud_inventory_sync_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/cloud_inventory_sync_config datadog_cloud_inventory_sync_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudInventorySyncConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CloudInventorySyncConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_cloud_inventory_sync_config',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.17.0',
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
    this._cloudProvider = config.cloudProvider;
    this._aws.internalValue = config.aws;
    this._azure.internalValue = config.azure;
    this._gcp.internalValue = config.gcp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new CloudInventorySyncConfigAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: CloudInventorySyncConfigAws) {
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
  private _azure = new CloudInventorySyncConfigAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: CloudInventorySyncConfigAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new CloudInventorySyncConfigGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: CloudInventorySyncConfigGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktn.stringToTerraform(this._cloudProvider),
      aws: cloudInventorySyncConfigAwsToTerraform(this._aws.internalValue),
      azure: cloudInventorySyncConfigAzureToTerraform(this._azure.internalValue),
      gcp: cloudInventorySyncConfigGcpToTerraform(this._gcp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktn.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws: {
        value: cloudInventorySyncConfigAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudInventorySyncConfigAws",
      },
      azure: {
        value: cloudInventorySyncConfigAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudInventorySyncConfigAzure",
      },
      gcp: {
        value: cloudInventorySyncConfigGcpToHclTerraform(this._gcp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudInventorySyncConfigGcp",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
