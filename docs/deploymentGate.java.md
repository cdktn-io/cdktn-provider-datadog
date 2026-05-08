# `deploymentGate` Submodule <a name="`deploymentGate` Submodule" id="@cdktn/provider-datadog.deploymentGate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeploymentGate <a name="DeploymentGate" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate datadog_deployment_gate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer"></a>

```java
import io.cdktn.providers.datadog.deployment_gate.DeploymentGate;

DeploymentGate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .env(java.lang.String)
    .service(java.lang.String)
//  .dryRun(java.lang.Boolean|IResolvable)
//  .identifier(java.lang.String)
//  .rule(IResolvable|java.util.List<DeploymentGateRule>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.env">env</a></code> | <code>java.lang.String</code> | The target environment (example: dev). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | The service name (example: transaction-backend). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.dryRun">dryRun</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable Dry Run to test gate behavior without impacting deployments. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.identifier">identifier</a></code> | <code>java.lang.String</code> | Unique name for multiple gates on the same service/environment. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>></code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.env"></a>

- *Type:* java.lang.String

The target environment (example: dev).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#env DeploymentGate#env}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.service"></a>

- *Type:* java.lang.String

The service name (example: transaction-backend).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#service DeploymentGate#service}

---

##### `dryRun`<sup>Optional</sup> <a name="dryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.dryRun"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable Dry Run to test gate behavior without impacting deployments.

The evaluation of a dry run gate always responds with a pass status, but the in-app result is the real status based on rules evaluation. This is particularly useful when performing an initial evaluation of the gate behavior without impacting the deployment pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#dry_run DeploymentGate#dry_run}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.identifier"></a>

- *Type:* java.lang.String

Unique name for multiple gates on the same service/environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#identifier DeploymentGate#identifier}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.Initializer.parameter.rule"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#rule DeploymentGate#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetDryRun">resetDryRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetRule">resetRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule"></a>

```java
public void putRule(IResolvable|java.util.List<DeploymentGateRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.putRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>>

---

##### `resetDryRun` <a name="resetDryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetDryRun"></a>

```java
public void resetDryRun()
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetIdentifier"></a>

```java
public void resetIdentifier()
```

##### `resetRule` <a name="resetRule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.resetRule"></a>

```java
public void resetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DeploymentGate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct"></a>

```java
import io.cdktn.providers.datadog.deployment_gate.DeploymentGate;

DeploymentGate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.deployment_gate.DeploymentGate;

DeploymentGate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.deployment_gate.DeploymentGate;

DeploymentGate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.deployment_gate.DeploymentGate;

DeploymentGate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DeploymentGate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DeploymentGate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DeploymentGate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DeploymentGate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DeploymentGate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList">DeploymentGateRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRunInput">dryRunInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.envInput">envInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRun">dryRun</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.env">env</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.rule"></a>

```java
public DeploymentGateRuleList getRule();
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList">DeploymentGateRuleList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `dryRunInput`<sup>Optional</sup> <a name="dryRunInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRunInput"></a>

```java
public java.lang.Boolean|IResolvable getDryRunInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.envInput"></a>

```java
public java.lang.String getEnvInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.ruleInput"></a>

```java
public IResolvable|java.util.List<DeploymentGateRule> getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `dryRun`<sup>Required</sup> <a name="dryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.dryRun"></a>

```java
public java.lang.Boolean|IResolvable getDryRun();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.env"></a>

```java
public java.lang.String getEnv();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.deploymentGate.DeploymentGate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DeploymentGateConfig <a name="DeploymentGateConfig" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.deployment_gate.DeploymentGateConfig;

DeploymentGateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .env(java.lang.String)
    .service(java.lang.String)
//  .dryRun(java.lang.Boolean|IResolvable)
//  .identifier(java.lang.String)
//  .rule(IResolvable|java.util.List<DeploymentGateRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.env">env</a></code> | <code>java.lang.String</code> | The target environment (example: dev). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.service">service</a></code> | <code>java.lang.String</code> | The service name (example: transaction-backend). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dryRun">dryRun</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enable Dry Run to test gate behavior without impacting deployments. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Unique name for multiple gates on the same service/environment. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>></code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.env"></a>

```java
public java.lang.String getEnv();
```

- *Type:* java.lang.String

The target environment (example: dev).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#env DeploymentGate#env}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The service name (example: transaction-backend).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#service DeploymentGate#service}

---

##### `dryRun`<sup>Optional</sup> <a name="dryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.dryRun"></a>

```java
public java.lang.Boolean|IResolvable getDryRun();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enable Dry Run to test gate behavior without impacting deployments.

The evaluation of a dry run gate always responds with a pass status, but the in-app result is the real status based on rules evaluation. This is particularly useful when performing an initial evaluation of the gate behavior without impacting the deployment pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#dry_run DeploymentGate#dry_run}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Unique name for multiple gates on the same service/environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#identifier DeploymentGate#identifier}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateConfig.property.rule"></a>

```java
public IResolvable|java.util.List<DeploymentGateRule> getRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#rule DeploymentGate#rule}

---

### DeploymentGateRule <a name="DeploymentGateRule" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.deployment_gate.DeploymentGateRule;

DeploymentGateRule.builder()
    .name(java.lang.String)
    .type(java.lang.String)
//  .dryRun(java.lang.Boolean|IResolvable)
//  .options(DeploymentGateRuleOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.name">name</a></code> | <code>java.lang.String</code> | The rule name. Must be unique within the deployment gate. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.type">type</a></code> | <code>java.lang.String</code> | The rule type (e.g., 'faulty_deployment_detection', 'monitor'). |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.dryRun">dryRun</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the rule is in dry run mode. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a></code> | options block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The rule name. Must be unique within the deployment gate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#name DeploymentGate#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The rule type (e.g., 'faulty_deployment_detection', 'monitor').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#type DeploymentGate#type}

---

##### `dryRun`<sup>Optional</sup> <a name="dryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.dryRun"></a>

```java
public java.lang.Boolean|IResolvable getDryRun();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the rule is in dry run mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#dry_run DeploymentGate#dry_run}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRule.property.options"></a>

```java
public DeploymentGateRuleOptions getOptions();
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#options DeploymentGate#options}

---

### DeploymentGateRuleOptions <a name="DeploymentGateRuleOptions" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.Initializer"></a>

```java
import io.cdktn.providers.datadog.deployment_gate.DeploymentGateRuleOptions;

DeploymentGateRuleOptions.builder()
//  .duration(java.lang.Number)
//  .excludedResources(java.util.List<java.lang.String>)
//  .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.duration">duration</a></code> | <code>java.lang.Number</code> | The duration for the rule. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.excludedResources">excludedResources</a></code> | <code>java.util.List<java.lang.String></code> | Resources to exclude from faulty deployment detection. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.query">query</a></code> | <code>java.lang.String</code> | The query for monitor rules. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

The duration for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#duration DeploymentGate#duration}

---

##### `excludedResources`<sup>Optional</sup> <a name="excludedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.excludedResources"></a>

```java
public java.util.List<java.lang.String> getExcludedResources();
```

- *Type:* java.util.List<java.lang.String>

Resources to exclude from faulty deployment detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#excluded_resources DeploymentGate#excluded_resources}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The query for monitor rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/deployment_gate#query DeploymentGate#query}

---

## Classes <a name="Classes" id="Classes"></a>

### DeploymentGateRuleList <a name="DeploymentGateRuleList" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer"></a>

```java
import io.cdktn.providers.datadog.deployment_gate.DeploymentGateRuleList;

new DeploymentGateRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get"></a>

```java
public DeploymentGateRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DeploymentGateRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>>

---


### DeploymentGateRuleOptionsOutputReference <a name="DeploymentGateRuleOptionsOutputReference" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.deployment_gate.DeploymentGateRuleOptionsOutputReference;

new DeploymentGateRuleOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetExcludedResources">resetExcludedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetExcludedResources` <a name="resetExcludedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetExcludedResources"></a>

```java
public void resetExcludedResources()
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.resetQuery"></a>

```java
public void resetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResourcesInput">excludedResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResources">excludedResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `excludedResourcesInput`<sup>Optional</sup> <a name="excludedResourcesInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResourcesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `excludedResources`<sup>Required</sup> <a name="excludedResources" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.excludedResources"></a>

```java
public java.util.List<java.lang.String> getExcludedResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DeploymentGateRuleOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

---


### DeploymentGateRuleOutputReference <a name="DeploymentGateRuleOutputReference" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.deployment_gate.DeploymentGateRuleOutputReference;

new DeploymentGateRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetDryRun">resetDryRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetOptions">resetOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOptions` <a name="putOptions" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions"></a>

```java
public void putOptions(DeploymentGateRuleOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

---

##### `resetDryRun` <a name="resetDryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetDryRun"></a>

```java
public void resetDryRun()
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.resetOptions"></a>

```java
public void resetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference">DeploymentGateRuleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRunInput">dryRunInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.optionsInput">optionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRun">dryRun</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.options"></a>

```java
public DeploymentGateRuleOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptionsOutputReference">DeploymentGateRuleOptionsOutputReference</a>

---

##### `dryRunInput`<sup>Optional</sup> <a name="dryRunInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRunInput"></a>

```java
public java.lang.Boolean|IResolvable getDryRunInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.optionsInput"></a>

```java
public IResolvable|DeploymentGateRuleOptions getOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOptions">DeploymentGateRuleOptions</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `dryRun`<sup>Required</sup> <a name="dryRun" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.dryRun"></a>

```java
public java.lang.Boolean|IResolvable getDryRun();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.deploymentGate.DeploymentGateRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|DeploymentGateRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.deploymentGate.DeploymentGateRule">DeploymentGateRule</a>

---



