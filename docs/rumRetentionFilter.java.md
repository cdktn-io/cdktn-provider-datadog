# `rumRetentionFilter` Submodule <a name="`rumRetentionFilter` Submodule" id="@cdktn/provider-datadog.rumRetentionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumRetentionFilter <a name="RumRetentionFilter" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/rum_retention_filter datadog_rum_retention_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer"></a>

```java
import io.cdktn.providers.datadog.rum_retention_filter.RumRetentionFilter;

RumRetentionFilter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .eventType(java.lang.String)
    .name(java.lang.String)
    .sampleRate(java.lang.Number)
//  .enabled(java.lang.Boolean|IResolvable)
//  .query(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | RUM application ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.eventType">eventType</a></code> | <code>java.lang.String</code> | The type of RUM events to filter on. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of a RUM retention filter. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | The sample rate for a RUM retention filter, between 0.1 and 100. Supports one decimal place (for example, 50.5). |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the retention filter is to be enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | The Query string for a RUM retention filter. Defaults to `""`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

RUM application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/rum_retention_filter#application_id RumRetentionFilter#application_id}

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.eventType"></a>

- *Type:* java.lang.String

The type of RUM events to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/rum_retention_filter#event_type RumRetentionFilter#event_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of a RUM retention filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/rum_retention_filter#name RumRetentionFilter#name}

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.sampleRate"></a>

- *Type:* java.lang.Number

The sample rate for a RUM retention filter, between 0.1 and 100. Supports one decimal place (for example, 50.5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/rum_retention_filter#sample_rate RumRetentionFilter#sample_rate}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the retention filter is to be enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/rum_retention_filter#enabled RumRetentionFilter#enabled}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.Initializer.parameter.query"></a>

- *Type:* java.lang.String

The Query string for a RUM retention filter. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/rum_retention_filter#query RumRetentionFilter#query}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.resetQuery"></a>

```java
public void resetQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RumRetentionFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isConstruct"></a>

```java
import io.cdktn.providers.datadog.rum_retention_filter.RumRetentionFilter;

RumRetentionFilter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.rum_retention_filter.RumRetentionFilter;

RumRetentionFilter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.rum_retention_filter.RumRetentionFilter;

RumRetentionFilter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.rum_retention_filter.RumRetentionFilter;

RumRetentionFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RumRetentionFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RumRetentionFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RumRetentionFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RumRetentionFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/rum_retention_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RumRetentionFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.eventTypeInput">eventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.sampleRateInput">sampleRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.eventType">eventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.eventTypeInput"></a>

```java
public java.lang.String getEventTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.sampleRateInput"></a>

```java
public java.lang.Number getSampleRateInput();
```

- *Type:* java.lang.Number

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RumRetentionFilterConfig <a name="RumRetentionFilterConfig" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.rum_retention_filter.RumRetentionFilterConfig;

RumRetentionFilterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .eventType(java.lang.String)
    .name(java.lang.String)
    .sampleRate(java.lang.Number)
//  .enabled(java.lang.Boolean|IResolvable)
//  .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | RUM application ID. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.eventType">eventType</a></code> | <code>java.lang.String</code> | The type of RUM events to filter on. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of a RUM retention filter. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | The sample rate for a RUM retention filter, between 0.1 and 100. Supports one decimal place (for example, 50.5). |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the retention filter is to be enabled. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.query">query</a></code> | <code>java.lang.String</code> | The Query string for a RUM retention filter. Defaults to `""`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

RUM application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/rum_retention_filter#application_id RumRetentionFilter#application_id}

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.eventType"></a>

```java
public java.lang.String getEventType();
```

- *Type:* java.lang.String

The type of RUM events to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/rum_retention_filter#event_type RumRetentionFilter#event_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of a RUM retention filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/rum_retention_filter#name RumRetentionFilter#name}

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

The sample rate for a RUM retention filter, between 0.1 and 100. Supports one decimal place (for example, 50.5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/rum_retention_filter#sample_rate RumRetentionFilter#sample_rate}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the retention filter is to be enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/rum_retention_filter#enabled RumRetentionFilter#enabled}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.rumRetentionFilter.RumRetentionFilterConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The Query string for a RUM retention filter. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/rum_retention_filter#query RumRetentionFilter#query}

---



