/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/workflow_automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface WorkflowAutomationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Description of the workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/workflow_automation#description WorkflowAutomation#description}
  */
  readonly description: string;
  /**
  * Name of the workflow. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/workflow_automation#name WorkflowAutomation#name}
  */
  readonly name: string;
  /**
  * Set the workflow to published or unpublished. Workflows in an unpublished state are only executable through manual runs. Automatic triggers such as Schedule do not execute the workflow until it is published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/workflow_automation#published WorkflowAutomation#published}
  */
  readonly published: boolean | cdktn.IResolvable;
  /**
  * Identity used to run the workflow. When omitted, the server-managed value is preserved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/workflow_automation#run_as WorkflowAutomation#run_as}
  */
  readonly runAs?: WorkflowAutomationRunAs;
  /**
  * Whether the workflow requires sensitive privileges to run. When omitted, the server-managed value is preserved. Only the workflow owner can update this field. This allows it to run actions that use [Execution Policies](https://docs.datadoghq.com/actions/private_actions/execution_policies/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/workflow_automation#sensitive_privileges WorkflowAutomation#sensitive_privileges}
  */
  readonly sensitivePrivileges?: boolean | cdktn.IResolvable;
  /**
  * The spec defines what the workflow does.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/workflow_automation#spec_json WorkflowAutomation#spec_json}
  */
  readonly specJson: string;
  /**
  * Tags of the workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/workflow_automation#tags WorkflowAutomation#tags}
  */
  readonly tags: string[];
  /**
  * If a webhook trigger is defined on this workflow, a webhookSecret is required and should be provided here. String length must be at least 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/workflow_automation#webhook_secret WorkflowAutomation#webhook_secret}
  */
  readonly webhookSecret?: string;
}
export interface WorkflowAutomationRunAs {
  /**
  * Service account identifier. Required when `type` is `service_account` and omitted otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/workflow_automation#id WorkflowAutomation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of identity used to run the workflow. `owner` uses the workflow owner, `initiator` uses the user who starts the execution, and `service_account` uses the account specified by `id`. Required when `run_as` is configured. Valid values are `owner`, `service_account`, `initiator`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/workflow_automation#type WorkflowAutomation#type}
  */
  readonly type?: string;
}

export function workflowAutomationRunAsToTerraform(struct?: WorkflowAutomationRunAs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function workflowAutomationRunAsToHclTerraform(struct?: WorkflowAutomationRunAs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowAutomationRunAsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowAutomationRunAs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowAutomationRunAs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/workflow_automation datadog_workflow_automation}
*/
export class WorkflowAutomation extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_workflow_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a WorkflowAutomation resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowAutomation to import
  * @param importFromId The id of the existing WorkflowAutomation that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/workflow_automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowAutomation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_workflow_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.22.0/docs/resources/workflow_automation datadog_workflow_automation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowAutomationConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowAutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_workflow_automation',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.22.0',
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
    this._description = config.description;
    this._name = config.name;
    this._published = config.published;
    this._runAs.internalValue = config.runAs;
    this._sensitivePrivileges = config.sensitivePrivileges;
    this._specJson = config.specJson;
    this._tags = config.tags;
    this._webhookSecret = config.webhookSecret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // published - computed: false, optional: false, required: true
  private _published?: boolean | cdktn.IResolvable; 
  public get published() {
    return this.getBooleanAttribute('published');
  }
  public set published(value: boolean | cdktn.IResolvable) {
    this._published = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published;
  }

  // run_as - computed: true, optional: true, required: false
  private _runAs = new WorkflowAutomationRunAsOutputReference(this, "run_as");
  public get runAs() {
    return this._runAs;
  }
  public putRunAs(value: WorkflowAutomationRunAs) {
    this._runAs.internalValue = value;
  }
  public resetRunAs() {
    this._runAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsInput() {
    return this._runAs.internalValue;
  }

  // sensitive_privileges - computed: true, optional: true, required: false
  private _sensitivePrivileges?: boolean | cdktn.IResolvable; 
  public get sensitivePrivileges() {
    return this.getBooleanAttribute('sensitive_privileges');
  }
  public set sensitivePrivileges(value: boolean | cdktn.IResolvable) {
    this._sensitivePrivileges = value;
  }
  public resetSensitivePrivileges() {
    this._sensitivePrivileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivePrivilegesInput() {
    return this._sensitivePrivileges;
  }

  // spec_json - computed: false, optional: false, required: true
  private _specJson?: string; 
  public get specJson() {
    return this.getStringAttribute('spec_json');
  }
  public set specJson(value: string) {
    this._specJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specJsonInput() {
    return this._specJson;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return cdktn.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // webhook_secret - computed: false, optional: true, required: false
  private _webhookSecret?: string; 
  public get webhookSecret() {
    return this.getStringAttribute('webhook_secret');
  }
  public set webhookSecret(value: string) {
    this._webhookSecret = value;
  }
  public resetWebhookSecret() {
    this._webhookSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSecretInput() {
    return this._webhookSecret;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktn.stringToTerraform(this._description),
      name: cdktn.stringToTerraform(this._name),
      published: cdktn.booleanToTerraform(this._published),
      run_as: workflowAutomationRunAsToTerraform(this._runAs.internalValue),
      sensitive_privileges: cdktn.booleanToTerraform(this._sensitivePrivileges),
      spec_json: cdktn.stringToTerraform(this._specJson),
      tags: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tags),
      webhook_secret: cdktn.stringToTerraform(this._webhookSecret),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      published: {
        value: cdktn.booleanToHclTerraform(this._published),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_as: {
        value: workflowAutomationRunAsToHclTerraform(this._runAs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkflowAutomationRunAs",
      },
      sensitive_privileges: {
        value: cdktn.booleanToHclTerraform(this._sensitivePrivileges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spec_json: {
        value: cdktn.stringToHclTerraform(this._specJson),
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
      webhook_secret: {
        value: cdktn.stringToHclTerraform(this._webhookSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
