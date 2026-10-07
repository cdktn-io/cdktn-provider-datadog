# `workflowAutomation` Submodule <a name="`workflowAutomation` Submodule" id="@cdktn/provider-datadog.workflowAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkflowAutomation <a name="WorkflowAutomation" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation datadog_workflow_automation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer"></a>

```java
import io.cdktn.providers.datadog.workflow_automation.WorkflowAutomation;

WorkflowAutomation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .name(java.lang.String)
    .published(java.lang.Boolean|IResolvable)
    .specJson(java.lang.String)
    .tags(java.util.List<java.lang.String>)
//  .runAs(WorkflowAutomationRunAs)
//  .sensitivePrivileges(java.lang.Boolean|IResolvable)
//  .webhookSecret(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the workflow. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the workflow. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.published">published</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set the workflow to published or unpublished. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.specJson">specJson</a></code> | <code>java.lang.String</code> | The spec defines what the workflow does. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags of the workflow. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.runAs">runAs</a></code> | <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs">WorkflowAutomationRunAs</a></code> | Identity used to run the workflow. When omitted, the server-managed value is preserved. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.sensitivePrivileges">sensitivePrivileges</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the workflow requires sensitive privileges to run. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.webhookSecret">webhookSecret</a></code> | <code>java.lang.String</code> | If a webhook trigger is defined on this workflow, a webhookSecret is required and should be provided here. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#description WorkflowAutomation#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the workflow. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#name WorkflowAutomation#name}

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.published"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set the workflow to published or unpublished.

Workflows in an unpublished state are only executable through manual runs. Automatic triggers such as Schedule do not execute the workflow until it is published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#published WorkflowAutomation#published}

---

##### `specJson`<sup>Required</sup> <a name="specJson" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.specJson"></a>

- *Type:* java.lang.String

The spec defines what the workflow does.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#spec_json WorkflowAutomation#spec_json}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Tags of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#tags WorkflowAutomation#tags}

---

##### `runAs`<sup>Optional</sup> <a name="runAs" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.runAs"></a>

- *Type:* <a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs">WorkflowAutomationRunAs</a>

Identity used to run the workflow. When omitted, the server-managed value is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#run_as WorkflowAutomation#run_as}

---

##### `sensitivePrivileges`<sup>Optional</sup> <a name="sensitivePrivileges" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.sensitivePrivileges"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the workflow requires sensitive privileges to run.

When omitted, the server-managed value is preserved. Only the workflow owner can update this field. This allows it to run actions that use [Execution Policies](https://docs.datadoghq.com/actions/private_actions/execution_policies/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#sensitive_privileges WorkflowAutomation#sensitive_privileges}

---

##### `webhookSecret`<sup>Optional</sup> <a name="webhookSecret" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.Initializer.parameter.webhookSecret"></a>

- *Type:* java.lang.String

If a webhook trigger is defined on this workflow, a webhookSecret is required and should be provided here.

String length must be at least 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#webhook_secret WorkflowAutomation#webhook_secret}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.putRunAs">putRunAs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.resetRunAs">resetRunAs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.resetSensitivePrivileges">resetSensitivePrivileges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.resetWebhookSecret">resetWebhookSecret</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRunAs` <a name="putRunAs" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.putRunAs"></a>

```java
public void putRunAs(WorkflowAutomationRunAs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.putRunAs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs">WorkflowAutomationRunAs</a>

---

##### `resetRunAs` <a name="resetRunAs" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.resetRunAs"></a>

```java
public void resetRunAs()
```

##### `resetSensitivePrivileges` <a name="resetSensitivePrivileges" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.resetSensitivePrivileges"></a>

```java
public void resetSensitivePrivileges()
```

##### `resetWebhookSecret` <a name="resetWebhookSecret" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.resetWebhookSecret"></a>

```java
public void resetWebhookSecret()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkflowAutomation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.isConstruct"></a>

```java
import io.cdktn.providers.datadog.workflow_automation.WorkflowAutomation;

WorkflowAutomation.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.workflow_automation.WorkflowAutomation;

WorkflowAutomation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.workflow_automation.WorkflowAutomation;

WorkflowAutomation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.workflow_automation.WorkflowAutomation;

WorkflowAutomation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WorkflowAutomation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WorkflowAutomation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WorkflowAutomation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WorkflowAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WorkflowAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.runAs">runAs</a></code> | <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference">WorkflowAutomationRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.publishedInput">publishedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.runAsInput">runAsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs">WorkflowAutomationRunAs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.sensitivePrivilegesInput">sensitivePrivilegesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.specJsonInput">specJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.webhookSecretInput">webhookSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.published">published</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.sensitivePrivileges">sensitivePrivileges</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.specJson">specJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.webhookSecret">webhookSecret</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `runAs`<sup>Required</sup> <a name="runAs" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.runAs"></a>

```java
public WorkflowAutomationRunAsOutputReference getRunAs();
```

- *Type:* <a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference">WorkflowAutomationRunAsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publishedInput`<sup>Optional</sup> <a name="publishedInput" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.publishedInput"></a>

```java
public java.lang.Boolean|IResolvable getPublishedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `runAsInput`<sup>Optional</sup> <a name="runAsInput" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.runAsInput"></a>

```java
public IResolvable|WorkflowAutomationRunAs getRunAsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs">WorkflowAutomationRunAs</a>

---

##### `sensitivePrivilegesInput`<sup>Optional</sup> <a name="sensitivePrivilegesInput" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.sensitivePrivilegesInput"></a>

```java
public java.lang.Boolean|IResolvable getSensitivePrivilegesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `specJsonInput`<sup>Optional</sup> <a name="specJsonInput" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.specJsonInput"></a>

```java
public java.lang.String getSpecJsonInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `webhookSecretInput`<sup>Optional</sup> <a name="webhookSecretInput" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.webhookSecretInput"></a>

```java
public java.lang.String getWebhookSecretInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.published"></a>

```java
public java.lang.Boolean|IResolvable getPublished();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sensitivePrivileges`<sup>Required</sup> <a name="sensitivePrivileges" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.sensitivePrivileges"></a>

```java
public java.lang.Boolean|IResolvable getSensitivePrivileges();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `specJson`<sup>Required</sup> <a name="specJson" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.specJson"></a>

```java
public java.lang.String getSpecJson();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `webhookSecret`<sup>Required</sup> <a name="webhookSecret" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.webhookSecret"></a>

```java
public java.lang.String getWebhookSecret();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WorkflowAutomationConfig <a name="WorkflowAutomationConfig" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.workflow_automation.WorkflowAutomationConfig;

WorkflowAutomationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .name(java.lang.String)
    .published(java.lang.Boolean|IResolvable)
    .specJson(java.lang.String)
    .tags(java.util.List<java.lang.String>)
//  .runAs(WorkflowAutomationRunAs)
//  .sensitivePrivileges(java.lang.Boolean|IResolvable)
//  .webhookSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the workflow. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the workflow. String length must be at least 1. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.published">published</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set the workflow to published or unpublished. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.specJson">specJson</a></code> | <code>java.lang.String</code> | The spec defines what the workflow does. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Tags of the workflow. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.runAs">runAs</a></code> | <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs">WorkflowAutomationRunAs</a></code> | Identity used to run the workflow. When omitted, the server-managed value is preserved. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.sensitivePrivileges">sensitivePrivileges</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the workflow requires sensitive privileges to run. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.webhookSecret">webhookSecret</a></code> | <code>java.lang.String</code> | If a webhook trigger is defined on this workflow, a webhookSecret is required and should be provided here. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#description WorkflowAutomation#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the workflow. String length must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#name WorkflowAutomation#name}

---

##### `published`<sup>Required</sup> <a name="published" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.published"></a>

```java
public java.lang.Boolean|IResolvable getPublished();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set the workflow to published or unpublished.

Workflows in an unpublished state are only executable through manual runs. Automatic triggers such as Schedule do not execute the workflow until it is published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#published WorkflowAutomation#published}

---

##### `specJson`<sup>Required</sup> <a name="specJson" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.specJson"></a>

```java
public java.lang.String getSpecJson();
```

- *Type:* java.lang.String

The spec defines what the workflow does.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#spec_json WorkflowAutomation#spec_json}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Tags of the workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#tags WorkflowAutomation#tags}

---

##### `runAs`<sup>Optional</sup> <a name="runAs" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.runAs"></a>

```java
public WorkflowAutomationRunAs getRunAs();
```

- *Type:* <a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs">WorkflowAutomationRunAs</a>

Identity used to run the workflow. When omitted, the server-managed value is preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#run_as WorkflowAutomation#run_as}

---

##### `sensitivePrivileges`<sup>Optional</sup> <a name="sensitivePrivileges" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.sensitivePrivileges"></a>

```java
public java.lang.Boolean|IResolvable getSensitivePrivileges();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the workflow requires sensitive privileges to run.

When omitted, the server-managed value is preserved. Only the workflow owner can update this field. This allows it to run actions that use [Execution Policies](https://docs.datadoghq.com/actions/private_actions/execution_policies/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#sensitive_privileges WorkflowAutomation#sensitive_privileges}

---

##### `webhookSecret`<sup>Optional</sup> <a name="webhookSecret" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationConfig.property.webhookSecret"></a>

```java
public java.lang.String getWebhookSecret();
```

- *Type:* java.lang.String

If a webhook trigger is defined on this workflow, a webhookSecret is required and should be provided here.

String length must be at least 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#webhook_secret WorkflowAutomation#webhook_secret}

---

### WorkflowAutomationRunAs <a name="WorkflowAutomationRunAs" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs.Initializer"></a>

```java
import io.cdktn.providers.datadog.workflow_automation.WorkflowAutomationRunAs;

WorkflowAutomationRunAs.builder()
//  .id(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs.property.id">id</a></code> | <code>java.lang.String</code> | Service account identifier. Required when `type` is `service_account` and omitted otherwise. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs.property.type">type</a></code> | <code>java.lang.String</code> | Type of identity used to run the workflow. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Service account identifier. Required when `type` is `service_account` and omitted otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#id WorkflowAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type of identity used to run the workflow.

`owner` uses the workflow owner, `initiator` uses the user who starts the execution, and `service_account` uses the account specified by `id`. Required when `run_as` is configured. Valid values are `owner`, `service_account`, `initiator`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.24.0/docs/resources/workflow_automation#type WorkflowAutomation#type}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkflowAutomationRunAsOutputReference <a name="WorkflowAutomationRunAsOutputReference" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.workflow_automation.WorkflowAutomationRunAsOutputReference;

new WorkflowAutomationRunAsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs">WorkflowAutomationRunAs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAsOutputReference.property.internalValue"></a>

```java
public IResolvable|WorkflowAutomationRunAs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.workflowAutomation.WorkflowAutomationRunAs">WorkflowAutomationRunAs</a>

---



