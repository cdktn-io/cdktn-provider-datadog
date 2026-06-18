# `syntheticsSuite` Submodule <a name="`syntheticsSuite` Submodule" id="@cdktn/provider-datadog.syntheticsSuite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsSuite <a name="SyntheticsSuite" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite datadog_synthetics_suite}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer"></a>

```java
import io.cdktn.providers.datadog.synthetics_suite.SyntheticsSuite;

SyntheticsSuite.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .message(java.lang.String)
//  .options(IResolvable|java.util.List<SyntheticsSuiteOptions>)
//  .tags(java.util.List<java.lang.String>)
//  .tests(IResolvable|java.util.List<SyntheticsSuiteTests>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.message">message</a></code> | <code>java.lang.String</code> | Message of the Synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.options">options</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>></code> | options block. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A set of tags to associate with your synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.tests">tests</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>></code> | tests block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite#name SyntheticsSuite#name}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.message"></a>

- *Type:* java.lang.String

Message of the Synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite#message SyntheticsSuite#message}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.options"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite#options SyntheticsSuite#options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

A set of tags to associate with your synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite#tags SyntheticsSuite#tags}

---

##### `tests`<sup>Optional</sup> <a name="tests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.Initializer.parameter.tests"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>>

tests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite#tests SyntheticsSuite#tests}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests">putTests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTests">resetTests</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions"></a>

```java
public void putOptions(IResolvable|java.util.List<SyntheticsSuiteOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putOptions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>>

---

##### `putTests` <a name="putTests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests"></a>

```java
public void putTests(IResolvable|java.util.List<SyntheticsSuiteTests> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.putTests.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>>

---

##### `resetMessage` <a name="resetMessage" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTags"></a>

```java
public void resetTags()
```

##### `resetTests` <a name="resetTests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.resetTests"></a>

```java
public void resetTests()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SyntheticsSuite resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct"></a>

```java
import io.cdktn.providers.datadog.synthetics_suite.SyntheticsSuite;

SyntheticsSuite.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.synthetics_suite.SyntheticsSuite;

SyntheticsSuite.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.synthetics_suite.SyntheticsSuite;

SyntheticsSuite.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.synthetics_suite.SyntheticsSuite;

SyntheticsSuite.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SyntheticsSuite.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SyntheticsSuite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SyntheticsSuite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SyntheticsSuite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SyntheticsSuite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.options">options</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList">SyntheticsSuiteOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tests">tests</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList">SyntheticsSuiteTestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.optionsInput">optionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.testsInput">testsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.options"></a>

```java
public SyntheticsSuiteOptionsList getOptions();
```

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList">SyntheticsSuiteOptionsList</a>

---

##### `tests`<sup>Required</sup> <a name="tests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tests"></a>

```java
public SyntheticsSuiteTestsList getTests();
```

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList">SyntheticsSuiteTestsList</a>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.optionsInput"></a>

```java
public IResolvable|java.util.List<SyntheticsSuiteOptions> getOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `testsInput`<sup>Optional</sup> <a name="testsInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.testsInput"></a>

```java
public IResolvable|java.util.List<SyntheticsSuiteTests> getTestsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuite.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsSuiteConfig <a name="SyntheticsSuiteConfig" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.synthetics_suite.SyntheticsSuiteConfig;

SyntheticsSuiteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .message(java.lang.String)
//  .options(IResolvable|java.util.List<SyntheticsSuiteOptions>)
//  .tags(java.util.List<java.lang.String>)
//  .tests(IResolvable|java.util.List<SyntheticsSuiteTests>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.message">message</a></code> | <code>java.lang.String</code> | Message of the Synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.options">options</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>></code> | options block. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | A set of tags to associate with your synthetics suite. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tests">tests</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>></code> | tests block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite#name SyntheticsSuite#name}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Message of the Synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite#message SyntheticsSuite#message}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.options"></a>

```java
public IResolvable|java.util.List<SyntheticsSuiteOptions> getOptions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite#options SyntheticsSuite#options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

A set of tags to associate with your synthetics suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite#tags SyntheticsSuite#tags}

---

##### `tests`<sup>Optional</sup> <a name="tests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteConfig.property.tests"></a>

```java
public IResolvable|java.util.List<SyntheticsSuiteTests> getTests();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>>

tests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite#tests SyntheticsSuite#tests}

---

### SyntheticsSuiteOptions <a name="SyntheticsSuiteOptions" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.Initializer"></a>

```java
import io.cdktn.providers.datadog.synthetics_suite.SyntheticsSuiteOptions;

SyntheticsSuiteOptions.builder()
    .alertingThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.property.alertingThreshold">alertingThreshold</a></code> | <code>java.lang.Number</code> | Alerting threshold for the suite. Value must be between 0.000000 and 1.000000. |

---

##### `alertingThreshold`<sup>Required</sup> <a name="alertingThreshold" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions.property.alertingThreshold"></a>

```java
public java.lang.Number getAlertingThreshold();
```

- *Type:* java.lang.Number

Alerting threshold for the suite. Value must be between 0.000000 and 1.000000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite#alerting_threshold SyntheticsSuite#alerting_threshold}

---

### SyntheticsSuiteTests <a name="SyntheticsSuiteTests" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.Initializer"></a>

```java
import io.cdktn.providers.datadog.synthetics_suite.SyntheticsSuiteTests;

SyntheticsSuiteTests.builder()
    .publicId(java.lang.String)
//  .alertingCriticality(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.publicId">publicId</a></code> | <code>java.lang.String</code> | Public ID of the test. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.alertingCriticality">alertingCriticality</a></code> | <code>java.lang.String</code> | Alerting criticality for the test. Valid values are `ignore`, `critical`. |

---

##### `publicId`<sup>Required</sup> <a name="publicId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.publicId"></a>

```java
public java.lang.String getPublicId();
```

- *Type:* java.lang.String

Public ID of the test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite#public_id SyntheticsSuite#public_id}

---

##### `alertingCriticality`<sup>Optional</sup> <a name="alertingCriticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests.property.alertingCriticality"></a>

```java
public java.lang.String getAlertingCriticality();
```

- *Type:* java.lang.String

Alerting criticality for the test. Valid values are `ignore`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/synthetics_suite#alerting_criticality SyntheticsSuite#alerting_criticality}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsSuiteOptionsList <a name="SyntheticsSuiteOptionsList" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer"></a>

```java
import io.cdktn.providers.datadog.synthetics_suite.SyntheticsSuiteOptionsList;

new SyntheticsSuiteOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get"></a>

```java
public SyntheticsSuiteOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SyntheticsSuiteOptions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>>

---


### SyntheticsSuiteOptionsOutputReference <a name="SyntheticsSuiteOptionsOutputReference" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.synthetics_suite.SyntheticsSuiteOptionsOutputReference;

new SyntheticsSuiteOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThresholdInput">alertingThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThreshold">alertingThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alertingThresholdInput`<sup>Optional</sup> <a name="alertingThresholdInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThresholdInput"></a>

```java
public java.lang.Number getAlertingThresholdInput();
```

- *Type:* java.lang.Number

---

##### `alertingThreshold`<sup>Required</sup> <a name="alertingThreshold" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.alertingThreshold"></a>

```java
public java.lang.Number getAlertingThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsSuiteOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteOptions">SyntheticsSuiteOptions</a>

---


### SyntheticsSuiteTestsList <a name="SyntheticsSuiteTestsList" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer"></a>

```java
import io.cdktn.providers.datadog.synthetics_suite.SyntheticsSuiteTestsList;

new SyntheticsSuiteTestsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get"></a>

```java
public SyntheticsSuiteTestsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SyntheticsSuiteTests> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>>

---


### SyntheticsSuiteTestsOutputReference <a name="SyntheticsSuiteTestsOutputReference" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.synthetics_suite.SyntheticsSuiteTestsOutputReference;

new SyntheticsSuiteTestsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resetAlertingCriticality">resetAlertingCriticality</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlertingCriticality` <a name="resetAlertingCriticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.resetAlertingCriticality"></a>

```java
public void resetAlertingCriticality()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticalityInput">alertingCriticalityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicIdInput">publicIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticality">alertingCriticality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicId">publicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alertingCriticalityInput`<sup>Optional</sup> <a name="alertingCriticalityInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticalityInput"></a>

```java
public java.lang.String getAlertingCriticalityInput();
```

- *Type:* java.lang.String

---

##### `publicIdInput`<sup>Optional</sup> <a name="publicIdInput" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicIdInput"></a>

```java
public java.lang.String getPublicIdInput();
```

- *Type:* java.lang.String

---

##### `alertingCriticality`<sup>Required</sup> <a name="alertingCriticality" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.alertingCriticality"></a>

```java
public java.lang.String getAlertingCriticality();
```

- *Type:* java.lang.String

---

##### `publicId`<sup>Required</sup> <a name="publicId" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.publicId"></a>

```java
public java.lang.String getPublicId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTestsOutputReference.property.internalValue"></a>

```java
public IResolvable|SyntheticsSuiteTests getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsSuite.SyntheticsSuiteTests">SyntheticsSuiteTests</a>

---



