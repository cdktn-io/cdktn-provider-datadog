/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GithubOidcIntakeMappingConfig extends cdktn.TerraformMetaArguments {
  /**
  * claim_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#claim_matchers GithubOidcIntakeMapping#claim_matchers}
  */
  readonly claimMatchers?: GithubOidcIntakeMappingClaimMatchers;
}
export interface GithubOidcIntakeMappingClaimMatchers {
  /**
  * Regular expression matched against the `actor` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#actor GithubOidcIntakeMapping#actor}
  */
  readonly actor?: string;
  /**
  * Regular expression matched against the `actor_id` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#actor_id GithubOidcIntakeMapping#actor_id}
  */
  readonly actorId?: string;
  /**
  * Regular expression matched against the `enterprise` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#enterprise GithubOidcIntakeMapping#enterprise}
  */
  readonly enterprise?: string;
  /**
  * Regular expression matched against the `enterprise_id` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#enterprise_id GithubOidcIntakeMapping#enterprise_id}
  */
  readonly enterpriseId?: string;
  /**
  * Regular expression matched against the `environment` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#environment GithubOidcIntakeMapping#environment}
  */
  readonly environment?: string;
  /**
  * Regular expression matched against the `event_name` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#event_name GithubOidcIntakeMapping#event_name}
  */
  readonly eventName?: string;
  /**
  * Regular expression matched against the `job_workflow_ref` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#job_workflow_ref GithubOidcIntakeMapping#job_workflow_ref}
  */
  readonly jobWorkflowRef?: string;
  /**
  * Regular expression matched against the `ref` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#ref GithubOidcIntakeMapping#ref}
  */
  readonly ref?: string;
  /**
  * Regular expression matched against the `ref_type` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#ref_type GithubOidcIntakeMapping#ref_type}
  */
  readonly refType?: string;
  /**
  * Regular expression matched against the `repository` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository GithubOidcIntakeMapping#repository}
  */
  readonly repository?: string;
  /**
  * Regular expression matched against the `repository_id` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_id GithubOidcIntakeMapping#repository_id}
  */
  readonly repositoryId?: string;
  /**
  * Regular expression matched against the `repository_owner` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_owner GithubOidcIntakeMapping#repository_owner}
  */
  readonly repositoryOwner?: string;
  /**
  * Regular expression matched against the `repository_owner_id` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_owner_id GithubOidcIntakeMapping#repository_owner_id}
  */
  readonly repositoryOwnerId?: string;
  /**
  * Regular expression matched against the `repository_visibility` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#repository_visibility GithubOidcIntakeMapping#repository_visibility}
  */
  readonly repositoryVisibility?: string;
  /**
  * Regular expression matched against the `runner_environment` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#runner_environment GithubOidcIntakeMapping#runner_environment}
  */
  readonly runnerEnvironment?: string;
  /**
  * Regular expression matched against the required `sub` claim of the GitHub Actions OIDC token. It must start with the literal `repo:<OWNER>/` prefix; the owner cannot be a regex. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#sub GithubOidcIntakeMapping#sub}
  */
  readonly sub: string;
  /**
  * Regular expression matched against the `workflow` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#workflow GithubOidcIntakeMapping#workflow}
  */
  readonly workflow?: string;
  /**
  * Regular expression matched against the `workflow_ref` claim of the GitHub Actions OIDC token. String length must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#workflow_ref GithubOidcIntakeMapping#workflow_ref}
  */
  readonly workflowRef?: string;
}

export function githubOidcIntakeMappingClaimMatchersToTerraform(struct?: GithubOidcIntakeMappingClaimMatchers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    actor: cdktn.stringToTerraform(struct!.actor),
    actor_id: cdktn.stringToTerraform(struct!.actorId),
    enterprise: cdktn.stringToTerraform(struct!.enterprise),
    enterprise_id: cdktn.stringToTerraform(struct!.enterpriseId),
    environment: cdktn.stringToTerraform(struct!.environment),
    event_name: cdktn.stringToTerraform(struct!.eventName),
    job_workflow_ref: cdktn.stringToTerraform(struct!.jobWorkflowRef),
    ref: cdktn.stringToTerraform(struct!.ref),
    ref_type: cdktn.stringToTerraform(struct!.refType),
    repository: cdktn.stringToTerraform(struct!.repository),
    repository_id: cdktn.stringToTerraform(struct!.repositoryId),
    repository_owner: cdktn.stringToTerraform(struct!.repositoryOwner),
    repository_owner_id: cdktn.stringToTerraform(struct!.repositoryOwnerId),
    repository_visibility: cdktn.stringToTerraform(struct!.repositoryVisibility),
    runner_environment: cdktn.stringToTerraform(struct!.runnerEnvironment),
    sub: cdktn.stringToTerraform(struct!.sub),
    workflow: cdktn.stringToTerraform(struct!.workflow),
    workflow_ref: cdktn.stringToTerraform(struct!.workflowRef),
  }
}


export function githubOidcIntakeMappingClaimMatchersToHclTerraform(struct?: GithubOidcIntakeMappingClaimMatchers | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    actor: {
      value: cdktn.stringToHclTerraform(struct!.actor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actor_id: {
      value: cdktn.stringToHclTerraform(struct!.actorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enterprise: {
      value: cdktn.stringToHclTerraform(struct!.enterprise),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enterprise_id: {
      value: cdktn.stringToHclTerraform(struct!.enterpriseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktn.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_name: {
      value: cdktn.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_workflow_ref: {
      value: cdktn.stringToHclTerraform(struct!.jobWorkflowRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktn.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_type: {
      value: cdktn.stringToHclTerraform(struct!.refType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktn.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_id: {
      value: cdktn.stringToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_owner: {
      value: cdktn.stringToHclTerraform(struct!.repositoryOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_owner_id: {
      value: cdktn.stringToHclTerraform(struct!.repositoryOwnerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_visibility: {
      value: cdktn.stringToHclTerraform(struct!.repositoryVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runner_environment: {
      value: cdktn.stringToHclTerraform(struct!.runnerEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub: {
      value: cdktn.stringToHclTerraform(struct!.sub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow: {
      value: cdktn.stringToHclTerraform(struct!.workflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_ref: {
      value: cdktn.stringToHclTerraform(struct!.workflowRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GithubOidcIntakeMappingClaimMatchersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GithubOidcIntakeMappingClaimMatchers | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actor !== undefined) {
      hasAnyValues = true;
      internalValueResult.actor = this._actor;
    }
    if (this._actorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actorId = this._actorId;
    }
    if (this._enterprise !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterprise = this._enterprise;
    }
    if (this._enterpriseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseId = this._enterpriseId;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._jobWorkflowRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobWorkflowRef = this._jobWorkflowRef;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._refType !== undefined) {
      hasAnyValues = true;
      internalValueResult.refType = this._refType;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    if (this._repositoryOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryOwner = this._repositoryOwner;
    }
    if (this._repositoryOwnerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryOwnerId = this._repositoryOwnerId;
    }
    if (this._repositoryVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryVisibility = this._repositoryVisibility;
    }
    if (this._runnerEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.runnerEnvironment = this._runnerEnvironment;
    }
    if (this._sub !== undefined) {
      hasAnyValues = true;
      internalValueResult.sub = this._sub;
    }
    if (this._workflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow;
    }
    if (this._workflowRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowRef = this._workflowRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GithubOidcIntakeMappingClaimMatchers | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actor = undefined;
      this._actorId = undefined;
      this._enterprise = undefined;
      this._enterpriseId = undefined;
      this._environment = undefined;
      this._eventName = undefined;
      this._jobWorkflowRef = undefined;
      this._ref = undefined;
      this._refType = undefined;
      this._repository = undefined;
      this._repositoryId = undefined;
      this._repositoryOwner = undefined;
      this._repositoryOwnerId = undefined;
      this._repositoryVisibility = undefined;
      this._runnerEnvironment = undefined;
      this._sub = undefined;
      this._workflow = undefined;
      this._workflowRef = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actor = value.actor;
      this._actorId = value.actorId;
      this._enterprise = value.enterprise;
      this._enterpriseId = value.enterpriseId;
      this._environment = value.environment;
      this._eventName = value.eventName;
      this._jobWorkflowRef = value.jobWorkflowRef;
      this._ref = value.ref;
      this._refType = value.refType;
      this._repository = value.repository;
      this._repositoryId = value.repositoryId;
      this._repositoryOwner = value.repositoryOwner;
      this._repositoryOwnerId = value.repositoryOwnerId;
      this._repositoryVisibility = value.repositoryVisibility;
      this._runnerEnvironment = value.runnerEnvironment;
      this._sub = value.sub;
      this._workflow = value.workflow;
      this._workflowRef = value.workflowRef;
    }
  }

  // actor - computed: false, optional: true, required: false
  private _actor?: string; 
  public get actor() {
    return this.getStringAttribute('actor');
  }
  public set actor(value: string) {
    this._actor = value;
  }
  public resetActor() {
    this._actor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorInput() {
    return this._actor;
  }

  // actor_id - computed: false, optional: true, required: false
  private _actorId?: string; 
  public get actorId() {
    return this.getStringAttribute('actor_id');
  }
  public set actorId(value: string) {
    this._actorId = value;
  }
  public resetActorId() {
    this._actorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorIdInput() {
    return this._actorId;
  }

  // enterprise - computed: false, optional: true, required: false
  private _enterprise?: string; 
  public get enterprise() {
    return this.getStringAttribute('enterprise');
  }
  public set enterprise(value: string) {
    this._enterprise = value;
  }
  public resetEnterprise() {
    this._enterprise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseInput() {
    return this._enterprise;
  }

  // enterprise_id - computed: false, optional: true, required: false
  private _enterpriseId?: string; 
  public get enterpriseId() {
    return this.getStringAttribute('enterprise_id');
  }
  public set enterpriseId(value: string) {
    this._enterpriseId = value;
  }
  public resetEnterpriseId() {
    this._enterpriseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseIdInput() {
    return this._enterpriseId;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // event_name - computed: false, optional: true, required: false
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // job_workflow_ref - computed: false, optional: true, required: false
  private _jobWorkflowRef?: string; 
  public get jobWorkflowRef() {
    return this.getStringAttribute('job_workflow_ref');
  }
  public set jobWorkflowRef(value: string) {
    this._jobWorkflowRef = value;
  }
  public resetJobWorkflowRef() {
    this._jobWorkflowRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobWorkflowRefInput() {
    return this._jobWorkflowRef;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // ref_type - computed: false, optional: true, required: false
  private _refType?: string; 
  public get refType() {
    return this.getStringAttribute('ref_type');
  }
  public set refType(value: string) {
    this._refType = value;
  }
  public resetRefType() {
    this._refType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refTypeInput() {
    return this._refType;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // repository_id - computed: false, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // repository_owner - computed: false, optional: true, required: false
  private _repositoryOwner?: string; 
  public get repositoryOwner() {
    return this.getStringAttribute('repository_owner');
  }
  public set repositoryOwner(value: string) {
    this._repositoryOwner = value;
  }
  public resetRepositoryOwner() {
    this._repositoryOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryOwnerInput() {
    return this._repositoryOwner;
  }

  // repository_owner_id - computed: false, optional: true, required: false
  private _repositoryOwnerId?: string; 
  public get repositoryOwnerId() {
    return this.getStringAttribute('repository_owner_id');
  }
  public set repositoryOwnerId(value: string) {
    this._repositoryOwnerId = value;
  }
  public resetRepositoryOwnerId() {
    this._repositoryOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryOwnerIdInput() {
    return this._repositoryOwnerId;
  }

  // repository_visibility - computed: false, optional: true, required: false
  private _repositoryVisibility?: string; 
  public get repositoryVisibility() {
    return this.getStringAttribute('repository_visibility');
  }
  public set repositoryVisibility(value: string) {
    this._repositoryVisibility = value;
  }
  public resetRepositoryVisibility() {
    this._repositoryVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryVisibilityInput() {
    return this._repositoryVisibility;
  }

  // runner_environment - computed: false, optional: true, required: false
  private _runnerEnvironment?: string; 
  public get runnerEnvironment() {
    return this.getStringAttribute('runner_environment');
  }
  public set runnerEnvironment(value: string) {
    this._runnerEnvironment = value;
  }
  public resetRunnerEnvironment() {
    this._runnerEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerEnvironmentInput() {
    return this._runnerEnvironment;
  }

  // sub - computed: false, optional: false, required: true
  private _sub?: string; 
  public get sub() {
    return this.getStringAttribute('sub');
  }
  public set sub(value: string) {
    this._sub = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subInput() {
    return this._sub;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow?: string; 
  public get workflow() {
    return this.getStringAttribute('workflow');
  }
  public set workflow(value: string) {
    this._workflow = value;
  }
  public resetWorkflow() {
    this._workflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow;
  }

  // workflow_ref - computed: false, optional: true, required: false
  private _workflowRef?: string; 
  public get workflowRef() {
    return this.getStringAttribute('workflow_ref');
  }
  public set workflowRef(value: string) {
    this._workflowRef = value;
  }
  public resetWorkflowRef() {
    this._workflowRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowRefInput() {
    return this._workflowRef;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping datadog_github_oidc_intake_mapping}
*/
export class GithubOidcIntakeMapping extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_github_oidc_intake_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GithubOidcIntakeMapping resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GithubOidcIntakeMapping to import
  * @param importFromId The id of the existing GithubOidcIntakeMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GithubOidcIntakeMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_github_oidc_intake_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.30.0/docs/resources/github_oidc_intake_mapping datadog_github_oidc_intake_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GithubOidcIntakeMappingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GithubOidcIntakeMappingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_github_oidc_intake_mapping',
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
    this._claimMatchers.internalValue = config.claimMatchers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // claim_matchers - computed: false, optional: true, required: false
  private _claimMatchers = new GithubOidcIntakeMappingClaimMatchersOutputReference(this, "claim_matchers");
  public get claimMatchers() {
    return this._claimMatchers;
  }
  public putClaimMatchers(value: GithubOidcIntakeMappingClaimMatchers) {
    this._claimMatchers.internalValue = value;
  }
  public resetClaimMatchers() {
    this._claimMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimMatchersInput() {
    return this._claimMatchers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      claim_matchers: githubOidcIntakeMappingClaimMatchersToTerraform(this._claimMatchers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      claim_matchers: {
        value: githubOidcIntakeMappingClaimMatchersToHclTerraform(this._claimMatchers.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GithubOidcIntakeMappingClaimMatchers",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
