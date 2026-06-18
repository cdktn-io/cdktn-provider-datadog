# `apmRetentionFilter` Submodule <a name="`apmRetentionFilter` Submodule" id="@cdktn/provider-datadog.apmRetentionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmRetentionFilter <a name="ApmRetentionFilter" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter datadog_apm_retention_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer"></a>

```java
import io.cdktn.providers.datadog.apm_retention_filter.ApmRetentionFilter;

ApmRetentionFilter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enabled(java.lang.Boolean|IResolvable)
    .filterType(java.lang.String)
    .name(java.lang.String)
    .rate(java.lang.String)
//  .filter(ApmRetentionFilterFilter)
//  .traceRate(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | the status of the retention filter. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.filterType">filterType</a></code> | <code>java.lang.String</code> | The type of the retention filter, currently only spans-processing-sampling is available. Valid values are `spans-sampling-processor`. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the retention filter. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.rate">rate</a></code> | <code>java.lang.String</code> | Sample rate to apply to spans going through this retention filter as a string; |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a></code> | filter block. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.traceRate">traceRate</a></code> | <code>java.lang.String</code> | Sample rate to apply to traces with spans going through this retention filter as a string; |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

the status of the retention filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter#enabled ApmRetentionFilter#enabled}

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.filterType"></a>

- *Type:* java.lang.String

The type of the retention filter, currently only spans-processing-sampling is available. Valid values are `spans-sampling-processor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter#filter_type ApmRetentionFilter#filter_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the retention filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter#name ApmRetentionFilter#name}

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.rate"></a>

- *Type:* java.lang.String

Sample rate to apply to spans going through this retention filter as a string;

a value of 1.0 keeps all spans matching the query. Value must be between 0.00 and 1.00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter#rate ApmRetentionFilter#rate}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter#filter ApmRetentionFilter#filter}

---

##### `traceRate`<sup>Optional</sup> <a name="traceRate" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.Initializer.parameter.traceRate"></a>

- *Type:* java.lang.String

Sample rate to apply to traces with spans going through this retention filter as a string;

a value of 1.0 keeps all traces matching the query. Value must be between 0.00 and 1.00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter#trace_rate ApmRetentionFilter#trace_rate}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetTraceRate">resetTraceRate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.putFilter"></a>

```java
public void putFilter(ApmRetentionFilterFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetTraceRate` <a name="resetTraceRate" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.resetTraceRate"></a>

```java
public void resetTraceRate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApmRetentionFilter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isConstruct"></a>

```java
import io.cdktn.providers.datadog.apm_retention_filter.ApmRetentionFilter;

ApmRetentionFilter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.apm_retention_filter.ApmRetentionFilter;

ApmRetentionFilter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.apm_retention_filter.ApmRetentionFilter;

ApmRetentionFilter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.apm_retention_filter.ApmRetentionFilter;

ApmRetentionFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApmRetentionFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApmRetentionFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApmRetentionFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApmRetentionFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApmRetentionFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference">ApmRetentionFilterFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.rateInput">rateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.traceRateInput">traceRateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.rate">rate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.traceRate">traceRate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filter"></a>

```java
public ApmRetentionFilterFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference">ApmRetentionFilterFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterInput"></a>

```java
public IResolvable|ApmRetentionFilterFilter getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rateInput`<sup>Optional</sup> <a name="rateInput" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.rateInput"></a>

```java
public java.lang.String getRateInput();
```

- *Type:* java.lang.String

---

##### `traceRateInput`<sup>Optional</sup> <a name="traceRateInput" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.traceRateInput"></a>

```java
public java.lang.String getTraceRateInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.rate"></a>

```java
public java.lang.String getRate();
```

- *Type:* java.lang.String

---

##### `traceRate`<sup>Required</sup> <a name="traceRate" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.traceRate"></a>

```java
public java.lang.String getTraceRate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApmRetentionFilterConfig <a name="ApmRetentionFilterConfig" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.apm_retention_filter.ApmRetentionFilterConfig;

ApmRetentionFilterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enabled(java.lang.Boolean|IResolvable)
    .filterType(java.lang.String)
    .name(java.lang.String)
    .rate(java.lang.String)
//  .filter(ApmRetentionFilterFilter)
//  .traceRate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | the status of the retention filter. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.filterType">filterType</a></code> | <code>java.lang.String</code> | The type of the retention filter, currently only spans-processing-sampling is available. Valid values are `spans-sampling-processor`. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the retention filter. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.rate">rate</a></code> | <code>java.lang.String</code> | Sample rate to apply to spans going through this retention filter as a string; |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a></code> | filter block. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.traceRate">traceRate</a></code> | <code>java.lang.String</code> | Sample rate to apply to traces with spans going through this retention filter as a string; |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

the status of the retention filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter#enabled ApmRetentionFilter#enabled}

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

The type of the retention filter, currently only spans-processing-sampling is available. Valid values are `spans-sampling-processor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter#filter_type ApmRetentionFilter#filter_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the retention filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter#name ApmRetentionFilter#name}

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.rate"></a>

```java
public java.lang.String getRate();
```

- *Type:* java.lang.String

Sample rate to apply to spans going through this retention filter as a string;

a value of 1.0 keeps all spans matching the query. Value must be between 0.00 and 1.00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter#rate ApmRetentionFilter#rate}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.filter"></a>

```java
public ApmRetentionFilterFilter getFilter();
```

- *Type:* <a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter#filter ApmRetentionFilter#filter}

---

##### `traceRate`<sup>Optional</sup> <a name="traceRate" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterConfig.property.traceRate"></a>

```java
public java.lang.String getTraceRate();
```

- *Type:* java.lang.String

Sample rate to apply to traces with spans going through this retention filter as a string;

a value of 1.0 keeps all traces matching the query. Value must be between 0.00 and 1.00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter#trace_rate ApmRetentionFilter#trace_rate}

---

### ApmRetentionFilterFilter <a name="ApmRetentionFilterFilter" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter.Initializer"></a>

```java
import io.cdktn.providers.datadog.apm_retention_filter.ApmRetentionFilterFilter;

ApmRetentionFilterFilter.builder()
//  .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter.property.query">query</a></code> | <code>java.lang.String</code> | The search query - follow the span search syntax, use `AND` between tags and `\` to escape special characters, use nanosecond for duration. |

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The search query - follow the span search syntax, use `AND` between tags and `\` to escape special characters, use nanosecond for duration.

Defaults to `"*"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.13.0/docs/resources/apm_retention_filter#query ApmRetentionFilter#query}

---

## Classes <a name="Classes" id="Classes"></a>

### ApmRetentionFilterFilterOutputReference <a name="ApmRetentionFilterFilterOutputReference" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.apm_retention_filter.ApmRetentionFilterFilterOutputReference;

new ApmRetentionFilterFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.resetQuery"></a>

```java
public void resetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|ApmRetentionFilterFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.apmRetentionFilter.ApmRetentionFilterFilter">ApmRetentionFilterFilter</a>

---



