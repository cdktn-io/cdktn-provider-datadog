# `dataDatadogFleetSchedule` Submodule <a name="`dataDatadogFleetSchedule` Submodule" id="@cdktn/provider-datadog.dataDatadogFleetSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogFleetSchedule <a name="DataDatadogFleetSchedule" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/data-sources/fleet_schedule datadog_fleet_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_fleet_schedule.DataDatadogFleetSchedule;

DataDatadogFleetSchedule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Unique identifier of the Fleet Automation schedule. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Unique identifier of the Fleet Automation schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/data-sources/fleet_schedule#id DataDatadogFleetSchedule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogFleetSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isConstruct"></a>

```java
import io.cdktn.providers.datadog.data_datadog_fleet_schedule.DataDatadogFleetSchedule;

DataDatadogFleetSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.data_datadog_fleet_schedule.DataDatadogFleetSchedule;

DataDatadogFleetSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isTerraformDataSource"></a>

```java
import io.cdktn.providers.datadog.data_datadog_fleet_schedule.DataDatadogFleetSchedule;

DataDatadogFleetSchedule.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.data_datadog_fleet_schedule.DataDatadogFleetSchedule;

DataDatadogFleetSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogFleetSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatadogFleetSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogFleetSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogFleetSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/data-sources/fleet_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogFleetSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.isDefault">isDefault</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.nextRun">nextRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.notificationRule">notificationRule</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference">DataDatadogFleetScheduleNotificationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference">DataDatadogFleetScheduleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.versionToLatest">versionToLatest</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.isDefault"></a>

```java
public IResolvable getIsDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nextRun`<sup>Required</sup> <a name="nextRun" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.nextRun"></a>

```java
public java.lang.String getNextRun();
```

- *Type:* java.lang.String

---

##### `notificationRule`<sup>Required</sup> <a name="notificationRule" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.notificationRule"></a>

```java
public DataDatadogFleetScheduleNotificationRuleOutputReference getNotificationRule();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference">DataDatadogFleetScheduleNotificationRuleOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.rule"></a>

```java
public DataDatadogFleetScheduleRuleOutputReference getRule();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference">DataDatadogFleetScheduleRuleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `versionToLatest`<sup>Required</sup> <a name="versionToLatest" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.versionToLatest"></a>

```java
public java.lang.Number getVersionToLatest();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogFleetScheduleConfig <a name="DataDatadogFleetScheduleConfig" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_fleet_schedule.DataDatadogFleetScheduleConfig;

DataDatadogFleetScheduleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier of the Fleet Automation schedule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier of the Fleet Automation schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/data-sources/fleet_schedule#id DataDatadogFleetSchedule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatadogFleetScheduleNotificationRule <a name="DataDatadogFleetScheduleNotificationRule" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_fleet_schedule.DataDatadogFleetScheduleNotificationRule;

DataDatadogFleetScheduleNotificationRule.builder()
    .build();
```


### DataDatadogFleetScheduleRule <a name="DataDatadogFleetScheduleRule" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRule.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_fleet_schedule.DataDatadogFleetScheduleRule;

DataDatadogFleetScheduleRule.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogFleetScheduleNotificationRuleOutputReference <a name="DataDatadogFleetScheduleNotificationRuleOutputReference" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_fleet_schedule.DataDatadogFleetScheduleNotificationRuleOutputReference;

new DataDatadogFleetScheduleNotificationRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.handles">handles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRule">DataDatadogFleetScheduleNotificationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `handles`<sup>Required</sup> <a name="handles" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.handles"></a>

```java
public java.util.List<java.lang.String> getHandles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRuleOutputReference.property.internalValue"></a>

```java
public DataDatadogFleetScheduleNotificationRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleNotificationRule">DataDatadogFleetScheduleNotificationRule</a>

---


### DataDatadogFleetScheduleRuleOutputReference <a name="DataDatadogFleetScheduleRuleOutputReference" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_fleet_schedule.DataDatadogFleetScheduleRuleOutputReference;

new DataDatadogFleetScheduleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.maintenanceWindowDuration">maintenanceWindowDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.startMaintenanceWindow">startMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRule">DataDatadogFleetScheduleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `maintenanceWindowDuration`<sup>Required</sup> <a name="maintenanceWindowDuration" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.maintenanceWindowDuration"></a>

```java
public java.lang.Number getMaintenanceWindowDuration();
```

- *Type:* java.lang.Number

---

##### `startMaintenanceWindow`<sup>Required</sup> <a name="startMaintenanceWindow" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.startMaintenanceWindow"></a>

```java
public java.lang.String getStartMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRuleOutputReference.property.internalValue"></a>

```java
public DataDatadogFleetScheduleRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogFleetSchedule.DataDatadogFleetScheduleRule">DataDatadogFleetScheduleRule</a>

---



