# `actionExecutionPolicy` Submodule <a name="`actionExecutionPolicy` Submodule" id="@cdktn/provider-datadog.actionExecutionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionExecutionPolicy <a name="ActionExecutionPolicy" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy datadog_action_execution_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicy;

ActionExecutionPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actionPattern(ActionExecutionPolicyActionPattern)
    .effect(java.lang.String)
    .name(java.lang.String)
//  .scope(ActionExecutionPolicyScope)
//  .target(IResolvable|java.util.List<ActionExecutionPolicyTarget>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.actionPattern">actionPattern</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | action_pattern block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.effect">effect</a></code> | <code>java.lang.String</code> | Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the execution policy. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.target">target</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>></code> | target block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionPattern`<sup>Required</sup> <a name="actionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.actionPattern"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

action_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_pattern ActionExecutionPolicy#action_pattern}

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.effect"></a>

- *Type:* java.lang.String

Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#effect ActionExecutionPolicy#effect}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the execution policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#name ActionExecutionPolicy#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scope ActionExecutionPolicy#scope}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.target"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target ActionExecutionPolicy#target}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern">putActionPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionPattern` <a name="putActionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern"></a>

```java
public void putActionPattern(ActionExecutionPolicyActionPattern value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

---

##### `putScope` <a name="putScope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope"></a>

```java
public void putScope(ActionExecutionPolicyScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

---

##### `putTarget` <a name="putTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget"></a>

```java
public void putTarget(IResolvable|java.util.List<ActionExecutionPolicyTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>>

---

##### `resetScope` <a name="resetScope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetScope"></a>

```java
public void resetScope()
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetTarget"></a>

```java
public void resetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ActionExecutionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicy;

ActionExecutionPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicy;

ActionExecutionPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicy;

ActionExecutionPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicy;

ActionExecutionPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ActionExecutionPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ActionExecutionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ActionExecutionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ActionExecutionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ActionExecutionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPattern">actionPattern</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference">ActionExecutionPolicyActionPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference">ActionExecutionPolicyScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.target">target</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList">ActionExecutionPolicyTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPatternInput">actionPatternInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scopeInput">scopeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.targetInput">targetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionPattern`<sup>Required</sup> <a name="actionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPattern"></a>

```java
public ActionExecutionPolicyActionPatternOutputReference getActionPattern();
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference">ActionExecutionPolicyActionPatternOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scope"></a>

```java
public ActionExecutionPolicyScopeOutputReference getScope();
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference">ActionExecutionPolicyScopeOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.target"></a>

```java
public ActionExecutionPolicyTargetList getTarget();
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList">ActionExecutionPolicyTargetList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `actionPatternInput`<sup>Optional</sup> <a name="actionPatternInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPatternInput"></a>

```java
public IResolvable|ActionExecutionPolicyActionPattern getActionPatternInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scopeInput"></a>

```java
public IResolvable|ActionExecutionPolicyScope getScopeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.targetInput"></a>

```java
public IResolvable|java.util.List<ActionExecutionPolicyTarget> getTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>>

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ActionExecutionPolicyActionPattern <a name="ActionExecutionPolicyActionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyActionPattern;

ActionExecutionPolicyActionPattern.builder()
    .actionFqns(java.util.List<java.lang.String>)
    .integration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.actionFqns">actionFqns</a></code> | <code>java.util.List<java.lang.String></code> | The fully qualified action names this policy matches. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.integration">integration</a></code> | <code>java.lang.String</code> | The integration the actions belong to. Valid values are `INTEGRATION_KUBERNETES`, `INTEGRATION_SCRIPT`, `INTEGRATION_REMOTE_ACTION`. |

---

##### `actionFqns`<sup>Required</sup> <a name="actionFqns" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.actionFqns"></a>

```java
public java.util.List<java.lang.String> getActionFqns();
```

- *Type:* java.util.List<java.lang.String>

The fully qualified action names this policy matches.

Use `*` to match all actions of the integration, or a fully qualified name prefixed with the integration's action namespace (for example `com.datadoghq.script.*` for the Script integration).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_fqns ActionExecutionPolicy#action_fqns}

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.integration"></a>

```java
public java.lang.String getIntegration();
```

- *Type:* java.lang.String

The integration the actions belong to. Valid values are `INTEGRATION_KUBERNETES`, `INTEGRATION_SCRIPT`, `INTEGRATION_REMOTE_ACTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#integration ActionExecutionPolicy#integration}

---

### ActionExecutionPolicyConfig <a name="ActionExecutionPolicyConfig" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyConfig;

ActionExecutionPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .actionPattern(ActionExecutionPolicyActionPattern)
    .effect(java.lang.String)
    .name(java.lang.String)
//  .scope(ActionExecutionPolicyScope)
//  .target(IResolvable|java.util.List<ActionExecutionPolicyTarget>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.actionPattern">actionPattern</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | action_pattern block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.effect">effect</a></code> | <code>java.lang.String</code> | Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the execution policy. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.target">target</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>></code> | target block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actionPattern`<sup>Required</sup> <a name="actionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.actionPattern"></a>

```java
public ActionExecutionPolicyActionPattern getActionPattern();
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

action_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_pattern ActionExecutionPolicy#action_pattern}

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#effect ActionExecutionPolicy#effect}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the execution policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#name ActionExecutionPolicy#name}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.scope"></a>

```java
public ActionExecutionPolicyScope getScope();
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scope ActionExecutionPolicy#scope}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.target"></a>

```java
public IResolvable|java.util.List<ActionExecutionPolicyTarget> getTarget();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target ActionExecutionPolicy#target}

---

### ActionExecutionPolicyScope <a name="ActionExecutionPolicyScope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScope;

ActionExecutionPolicyScope.builder()
//  .kubernetes(ActionExecutionPolicyScopeKubernetes)
//  .remoteActionRshell(ActionExecutionPolicyScopeRemoteActionRshell)
//  .scripts(ActionExecutionPolicyScopeScripts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.remoteActionRshell">remoteActionRshell</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a></code> | remote_action_rshell block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.scripts">scripts</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a></code> | scripts block. |

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.kubernetes"></a>

```java
public ActionExecutionPolicyScopeKubernetes getKubernetes();
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#kubernetes ActionExecutionPolicy#kubernetes}

---

##### `remoteActionRshell`<sup>Optional</sup> <a name="remoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.remoteActionRshell"></a>

```java
public ActionExecutionPolicyScopeRemoteActionRshell getRemoteActionRshell();
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

remote_action_rshell block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#remote_action_rshell ActionExecutionPolicy#remote_action_rshell}

---

##### `scripts`<sup>Optional</sup> <a name="scripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.scripts"></a>

```java
public ActionExecutionPolicyScopeScripts getScripts();
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scripts ActionExecutionPolicy#scripts}

---

### ActionExecutionPolicyScopeKubernetes <a name="ActionExecutionPolicyScopeKubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeKubernetes;

ActionExecutionPolicyScopeKubernetes.builder()
//  .rule(IResolvable|java.util.List<ActionExecutionPolicyScopeKubernetesRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.property.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>></code> | rule block. |

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.property.rule"></a>

```java
public IResolvable|java.util.List<ActionExecutionPolicyScopeKubernetesRule> getRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeKubernetesRule <a name="ActionExecutionPolicyScopeKubernetesRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeKubernetesRule;

ActionExecutionPolicyScopeKubernetesRule.builder()
    .targetNamespaces(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.property.targetNamespaces">targetNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | The Kubernetes namespaces this rule applies to. |

---

##### `targetNamespaces`<sup>Required</sup> <a name="targetNamespaces" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.property.targetNamespaces"></a>

```java
public java.util.List<java.lang.String> getTargetNamespaces();
```

- *Type:* java.util.List<java.lang.String>

The Kubernetes namespaces this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_namespaces ActionExecutionPolicy#target_namespaces}

---

### ActionExecutionPolicyScopeRemoteActionRshell <a name="ActionExecutionPolicyScopeRemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeRemoteActionRshell;

ActionExecutionPolicyScopeRemoteActionRshell.builder()
//  .rule(IResolvable|java.util.List<ActionExecutionPolicyScopeRemoteActionRshellRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.property.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>></code> | rule block. |

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.property.rule"></a>

```java
public IResolvable|java.util.List<ActionExecutionPolicyScopeRemoteActionRshellRule> getRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeRemoteActionRshellRule <a name="ActionExecutionPolicyScopeRemoteActionRshellRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeRemoteActionRshellRule;

ActionExecutionPolicyScopeRemoteActionRshellRule.builder()
    .access(java.lang.String)
    .targetPaths(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.access">access</a></code> | <code>java.lang.String</code> | The level of remote shell access granted for the target paths. Valid values are `read_only`, `read_write`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.targetPaths">targetPaths</a></code> | <code>java.util.List<java.lang.String></code> | The filesystem paths this rule applies to. |

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

The level of remote shell access granted for the target paths. Valid values are `read_only`, `read_write`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#access ActionExecutionPolicy#access}

---

##### `targetPaths`<sup>Required</sup> <a name="targetPaths" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.targetPaths"></a>

```java
public java.util.List<java.lang.String> getTargetPaths();
```

- *Type:* java.util.List<java.lang.String>

The filesystem paths this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_paths ActionExecutionPolicy#target_paths}

---

### ActionExecutionPolicyScopeScripts <a name="ActionExecutionPolicyScopeScripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeScripts;

ActionExecutionPolicyScopeScripts.builder()
//  .rule(IResolvable|java.util.List<ActionExecutionPolicyScopeScriptsRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.property.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>></code> | rule block. |

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.property.rule"></a>

```java
public IResolvable|java.util.List<ActionExecutionPolicyScopeScriptsRule> getRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeScriptsRule <a name="ActionExecutionPolicyScopeScriptsRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeScriptsRule;

ActionExecutionPolicyScopeScriptsRule.builder()
    .targetScriptNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.property.targetScriptNames">targetScriptNames</a></code> | <code>java.util.List<java.lang.String></code> | The script names this rule applies to. |

---

##### `targetScriptNames`<sup>Required</sup> <a name="targetScriptNames" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.property.targetScriptNames"></a>

```java
public java.util.List<java.lang.String> getTargetScriptNames();
```

- *Type:* java.util.List<java.lang.String>

The script names this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_script_names ActionExecutionPolicy#target_script_names}

---

### ActionExecutionPolicyTarget <a name="ActionExecutionPolicyTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyTarget;

ActionExecutionPolicyTarget.builder()
    .agentTags(java.util.List<java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.agentTags">agentTags</a></code> | <code>java.util.List<java.lang.String></code> | The Agent tags identifying the target, for example `env:prod`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.name">name</a></code> | <code>java.lang.String</code> | A human-readable name for the target. |

---

##### `agentTags`<sup>Required</sup> <a name="agentTags" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.agentTags"></a>

```java
public java.util.List<java.lang.String> getAgentTags();
```

- *Type:* java.util.List<java.lang.String>

The Agent tags identifying the target, for example `env:prod`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#agent_tags ActionExecutionPolicy#agent_tags}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A human-readable name for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#name ActionExecutionPolicy#name}

---

## Classes <a name="Classes" id="Classes"></a>

### ActionExecutionPolicyActionPatternOutputReference <a name="ActionExecutionPolicyActionPatternOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyActionPatternOutputReference;

new ActionExecutionPolicyActionPatternOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqnsInput">actionFqnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integrationInput">integrationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqns">actionFqns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integration">integration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionFqnsInput`<sup>Optional</sup> <a name="actionFqnsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqnsInput"></a>

```java
public java.util.List<java.lang.String> getActionFqnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integrationInput`<sup>Optional</sup> <a name="integrationInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integrationInput"></a>

```java
public java.lang.String getIntegrationInput();
```

- *Type:* java.lang.String

---

##### `actionFqns`<sup>Required</sup> <a name="actionFqns" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqns"></a>

```java
public java.util.List<java.lang.String> getActionFqns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integration"></a>

```java
public java.lang.String getIntegration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.internalValue"></a>

```java
public IResolvable|ActionExecutionPolicyActionPattern getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

---


### ActionExecutionPolicyScopeKubernetesOutputReference <a name="ActionExecutionPolicyScopeKubernetesOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeKubernetesOutputReference;

new ActionExecutionPolicyScopeKubernetesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule"></a>

```java
public void putRule(IResolvable|java.util.List<ActionExecutionPolicyScopeKubernetesRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>>

---

##### `resetRule` <a name="resetRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resetRule"></a>

```java
public void resetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList">ActionExecutionPolicyScopeKubernetesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.rule"></a>

```java
public ActionExecutionPolicyScopeKubernetesRuleList getRule();
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList">ActionExecutionPolicyScopeKubernetesRuleList</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.ruleInput"></a>

```java
public IResolvable|java.util.List<ActionExecutionPolicyScopeKubernetesRule> getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.internalValue"></a>

```java
public IResolvable|ActionExecutionPolicyScopeKubernetes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

---


### ActionExecutionPolicyScopeKubernetesRuleList <a name="ActionExecutionPolicyScopeKubernetesRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeKubernetesRuleList;

new ActionExecutionPolicyScopeKubernetesRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get"></a>

```java
public ActionExecutionPolicyScopeKubernetesRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ActionExecutionPolicyScopeKubernetesRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>>

---


### ActionExecutionPolicyScopeKubernetesRuleOutputReference <a name="ActionExecutionPolicyScopeKubernetesRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeKubernetesRuleOutputReference;

new ActionExecutionPolicyScopeKubernetesRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespacesInput">targetNamespacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespaces">targetNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetNamespacesInput`<sup>Optional</sup> <a name="targetNamespacesInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespacesInput"></a>

```java
public java.util.List<java.lang.String> getTargetNamespacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetNamespaces`<sup>Required</sup> <a name="targetNamespaces" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespaces"></a>

```java
public java.util.List<java.lang.String> getTargetNamespaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|ActionExecutionPolicyScopeKubernetesRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>

---


### ActionExecutionPolicyScopeOutputReference <a name="ActionExecutionPolicyScopeOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeOutputReference;

new ActionExecutionPolicyScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes">putKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell">putRemoteActionRshell</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts">putScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetKubernetes">resetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetRemoteActionRshell">resetRemoteActionRshell</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetScripts">resetScripts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKubernetes` <a name="putKubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes"></a>

```java
public void putKubernetes(ActionExecutionPolicyScopeKubernetes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

---

##### `putRemoteActionRshell` <a name="putRemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell"></a>

```java
public void putRemoteActionRshell(ActionExecutionPolicyScopeRemoteActionRshell value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

---

##### `putScripts` <a name="putScripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts"></a>

```java
public void putScripts(ActionExecutionPolicyScopeScripts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

---

##### `resetKubernetes` <a name="resetKubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetKubernetes"></a>

```java
public void resetKubernetes()
```

##### `resetRemoteActionRshell` <a name="resetRemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetRemoteActionRshell"></a>

```java
public void resetRemoteActionRshell()
```

##### `resetScripts` <a name="resetScripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetScripts"></a>

```java
public void resetScripts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference">ActionExecutionPolicyScopeKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshell">remoteActionRshell</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference">ActionExecutionPolicyScopeRemoteActionRshellOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scripts">scripts</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference">ActionExecutionPolicyScopeScriptsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetesInput">kubernetesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshellInput">remoteActionRshellInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scriptsInput">scriptsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetes"></a>

```java
public ActionExecutionPolicyScopeKubernetesOutputReference getKubernetes();
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference">ActionExecutionPolicyScopeKubernetesOutputReference</a>

---

##### `remoteActionRshell`<sup>Required</sup> <a name="remoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshell"></a>

```java
public ActionExecutionPolicyScopeRemoteActionRshellOutputReference getRemoteActionRshell();
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference">ActionExecutionPolicyScopeRemoteActionRshellOutputReference</a>

---

##### `scripts`<sup>Required</sup> <a name="scripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scripts"></a>

```java
public ActionExecutionPolicyScopeScriptsOutputReference getScripts();
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference">ActionExecutionPolicyScopeScriptsOutputReference</a>

---

##### `kubernetesInput`<sup>Optional</sup> <a name="kubernetesInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetesInput"></a>

```java
public IResolvable|ActionExecutionPolicyScopeKubernetes getKubernetesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

---

##### `remoteActionRshellInput`<sup>Optional</sup> <a name="remoteActionRshellInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshellInput"></a>

```java
public IResolvable|ActionExecutionPolicyScopeRemoteActionRshell getRemoteActionRshellInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

---

##### `scriptsInput`<sup>Optional</sup> <a name="scriptsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scriptsInput"></a>

```java
public IResolvable|ActionExecutionPolicyScopeScripts getScriptsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.internalValue"></a>

```java
public IResolvable|ActionExecutionPolicyScope getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

---


### ActionExecutionPolicyScopeRemoteActionRshellOutputReference <a name="ActionExecutionPolicyScopeRemoteActionRshellOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference;

new ActionExecutionPolicyScopeRemoteActionRshellOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule"></a>

```java
public void putRule(IResolvable|java.util.List<ActionExecutionPolicyScopeRemoteActionRshellRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>>

---

##### `resetRule` <a name="resetRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resetRule"></a>

```java
public void resetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList">ActionExecutionPolicyScopeRemoteActionRshellRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.rule"></a>

```java
public ActionExecutionPolicyScopeRemoteActionRshellRuleList getRule();
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList">ActionExecutionPolicyScopeRemoteActionRshellRuleList</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.ruleInput"></a>

```java
public IResolvable|java.util.List<ActionExecutionPolicyScopeRemoteActionRshellRule> getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.internalValue"></a>

```java
public IResolvable|ActionExecutionPolicyScopeRemoteActionRshell getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

---


### ActionExecutionPolicyScopeRemoteActionRshellRuleList <a name="ActionExecutionPolicyScopeRemoteActionRshellRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeRemoteActionRshellRuleList;

new ActionExecutionPolicyScopeRemoteActionRshellRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get"></a>

```java
public ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ActionExecutionPolicyScopeRemoteActionRshellRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>>

---


### ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference <a name="ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference;

new ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.accessInput">accessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPathsInput">targetPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.access">access</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPaths">targetPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.accessInput"></a>

```java
public java.lang.String getAccessInput();
```

- *Type:* java.lang.String

---

##### `targetPathsInput`<sup>Optional</sup> <a name="targetPathsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPathsInput"></a>

```java
public java.util.List<java.lang.String> getTargetPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

---

##### `targetPaths`<sup>Required</sup> <a name="targetPaths" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPaths"></a>

```java
public java.util.List<java.lang.String> getTargetPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|ActionExecutionPolicyScopeRemoteActionRshellRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>

---


### ActionExecutionPolicyScopeScriptsOutputReference <a name="ActionExecutionPolicyScopeScriptsOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeScriptsOutputReference;

new ActionExecutionPolicyScopeScriptsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resetRule">resetRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule"></a>

```java
public void putRule(IResolvable|java.util.List<ActionExecutionPolicyScopeScriptsRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>>

---

##### `resetRule` <a name="resetRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resetRule"></a>

```java
public void resetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList">ActionExecutionPolicyScopeScriptsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.rule"></a>

```java
public ActionExecutionPolicyScopeScriptsRuleList getRule();
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList">ActionExecutionPolicyScopeScriptsRuleList</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.ruleInput"></a>

```java
public IResolvable|java.util.List<ActionExecutionPolicyScopeScriptsRule> getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.internalValue"></a>

```java
public IResolvable|ActionExecutionPolicyScopeScripts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

---


### ActionExecutionPolicyScopeScriptsRuleList <a name="ActionExecutionPolicyScopeScriptsRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeScriptsRuleList;

new ActionExecutionPolicyScopeScriptsRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get"></a>

```java
public ActionExecutionPolicyScopeScriptsRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ActionExecutionPolicyScopeScriptsRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>>

---


### ActionExecutionPolicyScopeScriptsRuleOutputReference <a name="ActionExecutionPolicyScopeScriptsRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyScopeScriptsRuleOutputReference;

new ActionExecutionPolicyScopeScriptsRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNamesInput">targetScriptNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNames">targetScriptNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetScriptNamesInput`<sup>Optional</sup> <a name="targetScriptNamesInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNamesInput"></a>

```java
public java.util.List<java.lang.String> getTargetScriptNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `targetScriptNames`<sup>Required</sup> <a name="targetScriptNames" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNames"></a>

```java
public java.util.List<java.lang.String> getTargetScriptNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|ActionExecutionPolicyScopeScriptsRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>

---


### ActionExecutionPolicyTargetList <a name="ActionExecutionPolicyTargetList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyTargetList;

new ActionExecutionPolicyTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get"></a>

```java
public ActionExecutionPolicyTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ActionExecutionPolicyTarget> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>>

---


### ActionExecutionPolicyTargetOutputReference <a name="ActionExecutionPolicyTargetOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.action_execution_policy.ActionExecutionPolicyTargetOutputReference;

new ActionExecutionPolicyTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTagsInput">agentTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTags">agentTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentTagsInput`<sup>Optional</sup> <a name="agentTagsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTagsInput"></a>

```java
public java.util.List<java.lang.String> getAgentTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `agentTags`<sup>Required</sup> <a name="agentTags" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTags"></a>

```java
public java.util.List<java.lang.String> getAgentTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|ActionExecutionPolicyTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>

---



