# `rumRetentionQuota` Submodule <a name="`rumRetentionQuota` Submodule" id="@cdktn/provider-datadog.rumRetentionQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumRetentionQuota <a name="RumRetentionQuota" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota datadog_rum_retention_quota}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer"></a>

```java
import io.cdktn.providers.datadog.rum_retention_quota.RumRetentionQuota;

RumRetentionQuota.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .custom(RumRetentionQuotaCustom)
    .mode(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | RUM application ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.custom">custom</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | custom block. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | The retention quota mode. Valid values are `custom`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

RUM application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#application_id RumRetentionQuota#application_id}

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.custom"></a>

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#custom RumRetentionQuota#custom}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

The retention quota mode. Valid values are `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#mode RumRetentionQuota#mode}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom">putCustom</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustom` <a name="putCustom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom"></a>

```java
public void putCustom(RumRetentionQuotaCustom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RumRetentionQuota resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct"></a>

```java
import io.cdktn.providers.datadog.rum_retention_quota.RumRetentionQuota;

RumRetentionQuota.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.rum_retention_quota.RumRetentionQuota;

RumRetentionQuota.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.rum_retention_quota.RumRetentionQuota;

RumRetentionQuota.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.rum_retention_quota.RumRetentionQuota;

RumRetentionQuota.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RumRetentionQuota.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RumRetentionQuota resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RumRetentionQuota to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RumRetentionQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RumRetentionQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference">RumRetentionQuotaCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.customInput">customInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.custom"></a>

```java
public RumRetentionQuotaCustomOutputReference getCustom();
```

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference">RumRetentionQuotaCustomOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.customInput"></a>

```java
public IResolvable|RumRetentionQuotaCustom getCustomInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuota.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RumRetentionQuotaConfig <a name="RumRetentionQuotaConfig" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.rum_retention_quota.RumRetentionQuotaConfig;

RumRetentionQuotaConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .custom(RumRetentionQuotaCustom)
    .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | RUM application ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | custom block. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | The retention quota mode. Valid values are `custom`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

RUM application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#application_id RumRetentionQuota#application_id}

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.custom"></a>

```java
public RumRetentionQuotaCustom getCustom();
```

- *Type:* <a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#custom RumRetentionQuota#custom}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The retention quota mode. Valid values are `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#mode RumRetentionQuota#mode}

---

### RumRetentionQuotaCustom <a name="RumRetentionQuotaCustom" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.Initializer"></a>

```java
import io.cdktn.providers.datadog.rum_retention_quota.RumRetentionQuotaCustom;

RumRetentionQuotaCustom.builder()
    .dailyResetTime(java.lang.String)
    .dailyResetTimezone(java.lang.String)
    .quotaReachedAction(java.lang.String)
    .sessionLimit(java.lang.Number)
    .windowType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTime">dailyResetTime</a></code> | <code>java.lang.String</code> | The time of day the quota resets, in `HH:MM` format. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTimezone">dailyResetTimezone</a></code> | <code>java.lang.String</code> | The UTC offset for `daily_reset_time`, in `±HH:MM` format. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.quotaReachedAction">quotaReachedAction</a></code> | <code>java.lang.String</code> | The action taken after the quota is reached. Valid values are `stop`, `slowdown`. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.sessionLimit">sessionLimit</a></code> | <code>java.lang.Number</code> | The maximum number of sessions to retain within the window. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.windowType">windowType</a></code> | <code>java.lang.String</code> | The window over which the quota resets. Valid values are `daily`. |

---

##### `dailyResetTime`<sup>Required</sup> <a name="dailyResetTime" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTime"></a>

```java
public java.lang.String getDailyResetTime();
```

- *Type:* java.lang.String

The time of day the quota resets, in `HH:MM` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#daily_reset_time RumRetentionQuota#daily_reset_time}

---

##### `dailyResetTimezone`<sup>Required</sup> <a name="dailyResetTimezone" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.dailyResetTimezone"></a>

```java
public java.lang.String getDailyResetTimezone();
```

- *Type:* java.lang.String

The UTC offset for `daily_reset_time`, in `±HH:MM` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#daily_reset_timezone RumRetentionQuota#daily_reset_timezone}

---

##### `quotaReachedAction`<sup>Required</sup> <a name="quotaReachedAction" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.quotaReachedAction"></a>

```java
public java.lang.String getQuotaReachedAction();
```

- *Type:* java.lang.String

The action taken after the quota is reached. Valid values are `stop`, `slowdown`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#quota_reached_action RumRetentionQuota#quota_reached_action}

---

##### `sessionLimit`<sup>Required</sup> <a name="sessionLimit" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.sessionLimit"></a>

```java
public java.lang.Number getSessionLimit();
```

- *Type:* java.lang.Number

The maximum number of sessions to retain within the window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#session_limit RumRetentionQuota#session_limit}

---

##### `windowType`<sup>Required</sup> <a name="windowType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom.property.windowType"></a>

```java
public java.lang.String getWindowType();
```

- *Type:* java.lang.String

The window over which the quota resets. Valid values are `daily`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/rum_retention_quota#window_type RumRetentionQuota#window_type}

---

## Classes <a name="Classes" id="Classes"></a>

### RumRetentionQuotaCustomOutputReference <a name="RumRetentionQuotaCustomOutputReference" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.rum_retention_quota.RumRetentionQuotaCustomOutputReference;

new RumRetentionQuotaCustomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimeInput">dailyResetTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezoneInput">dailyResetTimezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedActionInput">quotaReachedActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimitInput">sessionLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowTypeInput">windowTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTime">dailyResetTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezone">dailyResetTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedAction">quotaReachedAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimit">sessionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowType">windowType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dailyResetTimeInput`<sup>Optional</sup> <a name="dailyResetTimeInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimeInput"></a>

```java
public java.lang.String getDailyResetTimeInput();
```

- *Type:* java.lang.String

---

##### `dailyResetTimezoneInput`<sup>Optional</sup> <a name="dailyResetTimezoneInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezoneInput"></a>

```java
public java.lang.String getDailyResetTimezoneInput();
```

- *Type:* java.lang.String

---

##### `quotaReachedActionInput`<sup>Optional</sup> <a name="quotaReachedActionInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedActionInput"></a>

```java
public java.lang.String getQuotaReachedActionInput();
```

- *Type:* java.lang.String

---

##### `sessionLimitInput`<sup>Optional</sup> <a name="sessionLimitInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimitInput"></a>

```java
public java.lang.Number getSessionLimitInput();
```

- *Type:* java.lang.Number

---

##### `windowTypeInput`<sup>Optional</sup> <a name="windowTypeInput" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowTypeInput"></a>

```java
public java.lang.String getWindowTypeInput();
```

- *Type:* java.lang.String

---

##### `dailyResetTime`<sup>Required</sup> <a name="dailyResetTime" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTime"></a>

```java
public java.lang.String getDailyResetTime();
```

- *Type:* java.lang.String

---

##### `dailyResetTimezone`<sup>Required</sup> <a name="dailyResetTimezone" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.dailyResetTimezone"></a>

```java
public java.lang.String getDailyResetTimezone();
```

- *Type:* java.lang.String

---

##### `quotaReachedAction`<sup>Required</sup> <a name="quotaReachedAction" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.quotaReachedAction"></a>

```java
public java.lang.String getQuotaReachedAction();
```

- *Type:* java.lang.String

---

##### `sessionLimit`<sup>Required</sup> <a name="sessionLimit" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.sessionLimit"></a>

```java
public java.lang.Number getSessionLimit();
```

- *Type:* java.lang.Number

---

##### `windowType`<sup>Required</sup> <a name="windowType" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.windowType"></a>

```java
public java.lang.String getWindowType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustomOutputReference.property.internalValue"></a>

```java
public IResolvable|RumRetentionQuotaCustom getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.rumRetentionQuota.RumRetentionQuotaCustom">RumRetentionQuotaCustom</a>

---



