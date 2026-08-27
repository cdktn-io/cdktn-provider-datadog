# `dataDatadogSyntheticsTest` Submodule <a name="`dataDatadogSyntheticsTest` Submodule" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSyntheticsTest <a name="DataDatadogSyntheticsTest" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test datadog_synthetics_test}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTest;

DataDatadogSyntheticsTest.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .testId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.testId">testId</a></code> | <code>java.lang.String</code> | The synthetic test id or URL to search for. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#id DataDatadogSyntheticsTest#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `testId`<sup>Required</sup> <a name="testId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.testId"></a>

- *Type:* java.lang.String

The synthetic test id or URL to search for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#test_id DataDatadogSyntheticsTest#test_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#id DataDatadogSyntheticsTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogSyntheticsTest resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isConstruct"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTest;

DataDatadogSyntheticsTest.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTest;

DataDatadogSyntheticsTest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformDataSource"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTest;

DataDatadogSyntheticsTest.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTest;

DataDatadogSyntheticsTest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogSyntheticsTest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatadogSyntheticsTest resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogSyntheticsTest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogSyntheticsTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogSyntheticsTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.deviceIds">deviceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.mobileOptionsList">mobileOptionsList</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList">DataDatadogSyntheticsTestMobileOptionsListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.monitorId">monitorId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.optionsList">optionsList</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList">DataDatadogSyntheticsTestOptionsListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.subtype">subtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.testIdInput">testIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.testId">testId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `deviceIds`<sup>Required</sup> <a name="deviceIds" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.deviceIds"></a>

```java
public java.util.List<java.lang.String> getDeviceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `mobileOptionsList`<sup>Required</sup> <a name="mobileOptionsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.mobileOptionsList"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListStructList getMobileOptionsList();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList">DataDatadogSyntheticsTestMobileOptionsListStructList</a>

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.monitorId"></a>

```java
public java.lang.Number getMonitorId();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `optionsList`<sup>Required</sup> <a name="optionsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.optionsList"></a>

```java
public DataDatadogSyntheticsTestOptionsListStructList getOptionsList();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList">DataDatadogSyntheticsTestOptionsListStructList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.subtype"></a>

```java
public java.lang.String getSubtype();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `testIdInput`<sup>Optional</sup> <a name="testIdInput" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.testIdInput"></a>

```java
public java.lang.String getTestIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `testId`<sup>Required</sup> <a name="testId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.testId"></a>

```java
public java.lang.String getTestId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSyntheticsTestConfig <a name="DataDatadogSyntheticsTestConfig" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestConfig;

DataDatadogSyntheticsTestConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .testId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.testId">testId</a></code> | <code>java.lang.String</code> | The synthetic test id or URL to search for. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#id DataDatadogSyntheticsTest#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `testId`<sup>Required</sup> <a name="testId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.testId"></a>

```java
public java.lang.String getTestId();
```

- *Type:* java.lang.String

The synthetic test id or URL to search for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#test_id DataDatadogSyntheticsTest#test_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#id DataDatadogSyntheticsTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatadogSyntheticsTestMobileOptionsListBindings <a name="DataDatadogSyntheticsTestMobileOptionsListBindings" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindings.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListBindings;

DataDatadogSyntheticsTestMobileOptionsListBindings.builder()
    .build();
```


### DataDatadogSyntheticsTestMobileOptionsListCi <a name="DataDatadogSyntheticsTestMobileOptionsListCi" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCi.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListCi;

DataDatadogSyntheticsTestMobileOptionsListCi.builder()
    .build();
```


### DataDatadogSyntheticsTestMobileOptionsListMobileApplication <a name="DataDatadogSyntheticsTestMobileOptionsListMobileApplication" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplication.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListMobileApplication;

DataDatadogSyntheticsTestMobileOptionsListMobileApplication.builder()
    .build();
```


### DataDatadogSyntheticsTestMobileOptionsListMonitorOptions <a name="DataDatadogSyntheticsTestMobileOptionsListMonitorOptions" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptions.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListMonitorOptions;

DataDatadogSyntheticsTestMobileOptionsListMonitorOptions.builder()
    .build();
```


### DataDatadogSyntheticsTestMobileOptionsListRetry <a name="DataDatadogSyntheticsTestMobileOptionsListRetry" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetry.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListRetry;

DataDatadogSyntheticsTestMobileOptionsListRetry.builder()
    .build();
```


### DataDatadogSyntheticsTestMobileOptionsListScheduling <a name="DataDatadogSyntheticsTestMobileOptionsListScheduling" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListScheduling.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListScheduling;

DataDatadogSyntheticsTestMobileOptionsListScheduling.builder()
    .build();
```


### DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes;

DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes.builder()
    .build();
```


### DataDatadogSyntheticsTestMobileOptionsListStruct <a name="DataDatadogSyntheticsTestMobileOptionsListStruct" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStruct.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListStruct;

DataDatadogSyntheticsTestMobileOptionsListStruct.builder()
    .build();
```


### DataDatadogSyntheticsTestOptionsListCi <a name="DataDatadogSyntheticsTestOptionsListCi" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCi.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListCi;

DataDatadogSyntheticsTestOptionsListCi.builder()
    .build();
```


### DataDatadogSyntheticsTestOptionsListMonitorOptions <a name="DataDatadogSyntheticsTestOptionsListMonitorOptions" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptions.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListMonitorOptions;

DataDatadogSyntheticsTestOptionsListMonitorOptions.builder()
    .build();
```


### DataDatadogSyntheticsTestOptionsListRetry <a name="DataDatadogSyntheticsTestOptionsListRetry" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetry.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListRetry;

DataDatadogSyntheticsTestOptionsListRetry.builder()
    .build();
```


### DataDatadogSyntheticsTestOptionsListRumSettings <a name="DataDatadogSyntheticsTestOptionsListRumSettings" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettings.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListRumSettings;

DataDatadogSyntheticsTestOptionsListRumSettings.builder()
    .build();
```


### DataDatadogSyntheticsTestOptionsListScheduling <a name="DataDatadogSyntheticsTestOptionsListScheduling" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListScheduling.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListScheduling;

DataDatadogSyntheticsTestOptionsListScheduling.builder()
    .build();
```


### DataDatadogSyntheticsTestOptionsListSchedulingTimeframes <a name="DataDatadogSyntheticsTestOptionsListSchedulingTimeframes" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframes.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListSchedulingTimeframes;

DataDatadogSyntheticsTestOptionsListSchedulingTimeframes.builder()
    .build();
```


### DataDatadogSyntheticsTestOptionsListStruct <a name="DataDatadogSyntheticsTestOptionsListStruct" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStruct.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListStruct;

DataDatadogSyntheticsTestOptionsListStruct.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSyntheticsTestMobileOptionsListBindingsList <a name="DataDatadogSyntheticsTestMobileOptionsListBindingsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListBindingsList;

new DataDatadogSyntheticsTestMobileOptionsListBindingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.get"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference;

new DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.principals">principals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.relation">relation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindings">DataDatadogSyntheticsTestMobileOptionsListBindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.principals"></a>

```java
public java.util.List<java.lang.String> getPrincipals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `relation`<sup>Required</sup> <a name="relation" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.relation"></a>

```java
public java.lang.String getRelation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListBindings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindings">DataDatadogSyntheticsTestMobileOptionsListBindings</a>

---


### DataDatadogSyntheticsTestMobileOptionsListCiList <a name="DataDatadogSyntheticsTestMobileOptionsListCiList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListCiList;

new DataDatadogSyntheticsTestMobileOptionsListCiList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.get"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListCiOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestMobileOptionsListCiOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListCiOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference;

new DataDatadogSyntheticsTestMobileOptionsListCiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.executionRule">executionRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCi">DataDatadogSyntheticsTestMobileOptionsListCi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionRule`<sup>Required</sup> <a name="executionRule" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.executionRule"></a>

```java
public java.lang.String getExecutionRule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListCi getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCi">DataDatadogSyntheticsTestMobileOptionsListCi</a>

---


### DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList <a name="DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList;

new DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.get"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference;

new DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.referenceId">referenceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.referenceType">referenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplication">DataDatadogSyntheticsTestMobileOptionsListMobileApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.referenceId"></a>

```java
public java.lang.String getReferenceId();
```

- *Type:* java.lang.String

---

##### `referenceType`<sup>Required</sup> <a name="referenceType" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.referenceType"></a>

```java
public java.lang.String getReferenceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListMobileApplication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplication">DataDatadogSyntheticsTestMobileOptionsListMobileApplication</a>

---


### DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList <a name="DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList;

new DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.get"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference;

new DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.escalationMessage">escalationMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.notificationPresetName">notificationPresetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.renotifyInterval">renotifyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.renotifyOccurrences">renotifyOccurrences</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptions">DataDatadogSyntheticsTestMobileOptionsListMonitorOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `escalationMessage`<sup>Required</sup> <a name="escalationMessage" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.escalationMessage"></a>

```java
public java.lang.String getEscalationMessage();
```

- *Type:* java.lang.String

---

##### `notificationPresetName`<sup>Required</sup> <a name="notificationPresetName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.notificationPresetName"></a>

```java
public java.lang.String getNotificationPresetName();
```

- *Type:* java.lang.String

---

##### `renotifyInterval`<sup>Required</sup> <a name="renotifyInterval" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.renotifyInterval"></a>

```java
public java.lang.Number getRenotifyInterval();
```

- *Type:* java.lang.Number

---

##### `renotifyOccurrences`<sup>Required</sup> <a name="renotifyOccurrences" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.renotifyOccurrences"></a>

```java
public java.lang.Number getRenotifyOccurrences();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListMonitorOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptions">DataDatadogSyntheticsTestMobileOptionsListMonitorOptions</a>

---


### DataDatadogSyntheticsTestMobileOptionsListRetryList <a name="DataDatadogSyntheticsTestMobileOptionsListRetryList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListRetryList;

new DataDatadogSyntheticsTestMobileOptionsListRetryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.get"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference;

new DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetry">DataDatadogSyntheticsTestMobileOptionsListRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListRetry getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetry">DataDatadogSyntheticsTestMobileOptionsListRetry</a>

---


### DataDatadogSyntheticsTestMobileOptionsListSchedulingList <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListSchedulingList;

new DataDatadogSyntheticsTestMobileOptionsListSchedulingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.get"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference;

new DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.timeframes">timeframes</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList">DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListScheduling">DataDatadogSyntheticsTestMobileOptionsListScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeframes`<sup>Required</sup> <a name="timeframes" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.timeframes"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList getTimeframes();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList">DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListScheduling getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListScheduling">DataDatadogSyntheticsTestMobileOptionsListScheduling</a>

---


### DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList;

new DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.get"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference;

new DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes">DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes">DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes</a>

---


### DataDatadogSyntheticsTestMobileOptionsListStructList <a name="DataDatadogSyntheticsTestMobileOptionsListStructList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListStructList;

new DataDatadogSyntheticsTestMobileOptionsListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.get"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestMobileOptionsListStructOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListStructOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference;

new DataDatadogSyntheticsTestMobileOptionsListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.allowApplicationCrash">allowApplicationCrash</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.bindings">bindings</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList">DataDatadogSyntheticsTestMobileOptionsListBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.ci">ci</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList">DataDatadogSyntheticsTestMobileOptionsListCiList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.defaultStepTimeout">defaultStepTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.deviceIds">deviceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.disableAutoAcceptAlert">disableAutoAcceptAlert</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.minFailureDuration">minFailureDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.mobileApplication">mobileApplication</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList">DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorName">monitorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorOptions">monitorOptions</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList">DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorPriority">monitorPriority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.noScreenshot">noScreenshot</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.restrictedRoles">restrictedRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList">DataDatadogSyntheticsTestMobileOptionsListRetryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.scheduling">scheduling</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList">DataDatadogSyntheticsTestMobileOptionsListSchedulingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.tickEvery">tickEvery</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStruct">DataDatadogSyntheticsTestMobileOptionsListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowApplicationCrash`<sup>Required</sup> <a name="allowApplicationCrash" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.allowApplicationCrash"></a>

```java
public IResolvable getAllowApplicationCrash();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.bindings"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListBindingsList getBindings();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList">DataDatadogSyntheticsTestMobileOptionsListBindingsList</a>

---

##### `ci`<sup>Required</sup> <a name="ci" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.ci"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListCiList getCi();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList">DataDatadogSyntheticsTestMobileOptionsListCiList</a>

---

##### `defaultStepTimeout`<sup>Required</sup> <a name="defaultStepTimeout" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.defaultStepTimeout"></a>

```java
public java.lang.Number getDefaultStepTimeout();
```

- *Type:* java.lang.Number

---

##### `deviceIds`<sup>Required</sup> <a name="deviceIds" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.deviceIds"></a>

```java
public java.util.List<java.lang.String> getDeviceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disableAutoAcceptAlert`<sup>Required</sup> <a name="disableAutoAcceptAlert" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.disableAutoAcceptAlert"></a>

```java
public IResolvable getDisableAutoAcceptAlert();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `minFailureDuration`<sup>Required</sup> <a name="minFailureDuration" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.minFailureDuration"></a>

```java
public java.lang.Number getMinFailureDuration();
```

- *Type:* java.lang.Number

---

##### `mobileApplication`<sup>Required</sup> <a name="mobileApplication" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.mobileApplication"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList getMobileApplication();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList">DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList</a>

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorName"></a>

```java
public java.lang.String getMonitorName();
```

- *Type:* java.lang.String

---

##### `monitorOptions`<sup>Required</sup> <a name="monitorOptions" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorOptions"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList getMonitorOptions();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList">DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList</a>

---

##### `monitorPriority`<sup>Required</sup> <a name="monitorPriority" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorPriority"></a>

```java
public java.lang.Number getMonitorPriority();
```

- *Type:* java.lang.Number

---

##### `noScreenshot`<sup>Required</sup> <a name="noScreenshot" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.noScreenshot"></a>

```java
public IResolvable getNoScreenshot();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `restrictedRoles`<sup>Required</sup> <a name="restrictedRoles" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.restrictedRoles"></a>

```java
public java.util.List<java.lang.String> getRestrictedRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.retry"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListRetryList getRetry();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList">DataDatadogSyntheticsTestMobileOptionsListRetryList</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.scheduling"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListSchedulingList getScheduling();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList">DataDatadogSyntheticsTestMobileOptionsListSchedulingList</a>

---

##### `tickEvery`<sup>Required</sup> <a name="tickEvery" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.tickEvery"></a>

```java
public java.lang.Number getTickEvery();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestMobileOptionsListStruct getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStruct">DataDatadogSyntheticsTestMobileOptionsListStruct</a>

---


### DataDatadogSyntheticsTestOptionsListCiList <a name="DataDatadogSyntheticsTestOptionsListCiList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListCiList;

new DataDatadogSyntheticsTestOptionsListCiList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.get"></a>

```java
public DataDatadogSyntheticsTestOptionsListCiOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestOptionsListCiOutputReference <a name="DataDatadogSyntheticsTestOptionsListCiOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListCiOutputReference;

new DataDatadogSyntheticsTestOptionsListCiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.executionRule">executionRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCi">DataDatadogSyntheticsTestOptionsListCi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `executionRule`<sup>Required</sup> <a name="executionRule" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.executionRule"></a>

```java
public java.lang.String getExecutionRule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestOptionsListCi getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCi">DataDatadogSyntheticsTestOptionsListCi</a>

---


### DataDatadogSyntheticsTestOptionsListMonitorOptionsList <a name="DataDatadogSyntheticsTestOptionsListMonitorOptionsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListMonitorOptionsList;

new DataDatadogSyntheticsTestOptionsListMonitorOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.get"></a>

```java
public DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference <a name="DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference;

new DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.escalationMessage">escalationMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.notificationPresetName">notificationPresetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyInterval">renotifyInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyOccurrences">renotifyOccurrences</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptions">DataDatadogSyntheticsTestOptionsListMonitorOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `escalationMessage`<sup>Required</sup> <a name="escalationMessage" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.escalationMessage"></a>

```java
public java.lang.String getEscalationMessage();
```

- *Type:* java.lang.String

---

##### `notificationPresetName`<sup>Required</sup> <a name="notificationPresetName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.notificationPresetName"></a>

```java
public java.lang.String getNotificationPresetName();
```

- *Type:* java.lang.String

---

##### `renotifyInterval`<sup>Required</sup> <a name="renotifyInterval" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyInterval"></a>

```java
public java.lang.Number getRenotifyInterval();
```

- *Type:* java.lang.Number

---

##### `renotifyOccurrences`<sup>Required</sup> <a name="renotifyOccurrences" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyOccurrences"></a>

```java
public java.lang.Number getRenotifyOccurrences();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestOptionsListMonitorOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptions">DataDatadogSyntheticsTestOptionsListMonitorOptions</a>

---


### DataDatadogSyntheticsTestOptionsListRetryList <a name="DataDatadogSyntheticsTestOptionsListRetryList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListRetryList;

new DataDatadogSyntheticsTestOptionsListRetryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.get"></a>

```java
public DataDatadogSyntheticsTestOptionsListRetryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestOptionsListRetryOutputReference <a name="DataDatadogSyntheticsTestOptionsListRetryOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListRetryOutputReference;

new DataDatadogSyntheticsTestOptionsListRetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetry">DataDatadogSyntheticsTestOptionsListRetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestOptionsListRetry getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetry">DataDatadogSyntheticsTestOptionsListRetry</a>

---


### DataDatadogSyntheticsTestOptionsListRumSettingsList <a name="DataDatadogSyntheticsTestOptionsListRumSettingsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListRumSettingsList;

new DataDatadogSyntheticsTestOptionsListRumSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.get"></a>

```java
public DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference <a name="DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference;

new DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenId">clientTokenId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabled">isEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettings">DataDatadogSyntheticsTestOptionsListRumSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `clientTokenId`<sup>Required</sup> <a name="clientTokenId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenId"></a>

```java
public java.lang.Number getClientTokenId();
```

- *Type:* java.lang.Number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabled"></a>

```java
public IResolvable getIsEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestOptionsListRumSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettings">DataDatadogSyntheticsTestOptionsListRumSettings</a>

---


### DataDatadogSyntheticsTestOptionsListSchedulingList <a name="DataDatadogSyntheticsTestOptionsListSchedulingList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListSchedulingList;

new DataDatadogSyntheticsTestOptionsListSchedulingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.get"></a>

```java
public DataDatadogSyntheticsTestOptionsListSchedulingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestOptionsListSchedulingOutputReference <a name="DataDatadogSyntheticsTestOptionsListSchedulingOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference;

new DataDatadogSyntheticsTestOptionsListSchedulingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.timeframes">timeframes</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList">DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListScheduling">DataDatadogSyntheticsTestOptionsListScheduling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeframes`<sup>Required</sup> <a name="timeframes" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.timeframes"></a>

```java
public DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList getTimeframes();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList">DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestOptionsListScheduling getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListScheduling">DataDatadogSyntheticsTestOptionsListScheduling</a>

---


### DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList <a name="DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList;

new DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.get"></a>

```java
public DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference <a name="DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference;

new DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.to">to</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframes">DataDatadogSyntheticsTestOptionsListSchedulingTimeframes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.to"></a>

```java
public java.lang.String getTo();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestOptionsListSchedulingTimeframes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframes">DataDatadogSyntheticsTestOptionsListSchedulingTimeframes</a>

---


### DataDatadogSyntheticsTestOptionsListStructList <a name="DataDatadogSyntheticsTestOptionsListStructList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListStructList;

new DataDatadogSyntheticsTestOptionsListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.get"></a>

```java
public DataDatadogSyntheticsTestOptionsListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogSyntheticsTestOptionsListStructOutputReference <a name="DataDatadogSyntheticsTestOptionsListStructOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_synthetics_test.DataDatadogSyntheticsTestOptionsListStructOutputReference;

new DataDatadogSyntheticsTestOptionsListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.acceptSelfSigned">acceptSelfSigned</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.allowInsecure">allowInsecure</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.blockedRequestPatterns">blockedRequestPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.captureNetworkPayloads">captureNetworkPayloads</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.checkCertificateRevocation">checkCertificateRevocation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ci">ci</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList">DataDatadogSyntheticsTestOptionsListCiList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableAiaIntermediateFetching">disableAiaIntermediateFetching</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableCors">disableCors</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableCsp">disableCsp</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.followRedirects">followRedirects</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.httpVersion">httpVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ignoreCertificateValidation">ignoreCertificateValidation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ignoreServerCertificateError">ignoreServerCertificateError</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.initialNavigationTimeout">initialNavigationTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.minFailureDuration">minFailureDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.minLocationFailed">minLocationFailed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorName">monitorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorOptions">monitorOptions</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList">DataDatadogSyntheticsTestOptionsListMonitorOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorPriority">monitorPriority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.noScreenshot">noScreenshot</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.restrictedRoles">restrictedRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.retry">retry</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList">DataDatadogSyntheticsTestOptionsListRetryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.rumSettings">rumSettings</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList">DataDatadogSyntheticsTestOptionsListRumSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.scheduling">scheduling</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList">DataDatadogSyntheticsTestOptionsListSchedulingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.tickEvery">tickEvery</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStruct">DataDatadogSyntheticsTestOptionsListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceptSelfSigned`<sup>Required</sup> <a name="acceptSelfSigned" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.acceptSelfSigned"></a>

```java
public IResolvable getAcceptSelfSigned();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `allowInsecure`<sup>Required</sup> <a name="allowInsecure" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.allowInsecure"></a>

```java
public IResolvable getAllowInsecure();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `blockedRequestPatterns`<sup>Required</sup> <a name="blockedRequestPatterns" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.blockedRequestPatterns"></a>

```java
public java.util.List<java.lang.String> getBlockedRequestPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `captureNetworkPayloads`<sup>Required</sup> <a name="captureNetworkPayloads" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.captureNetworkPayloads"></a>

```java
public IResolvable getCaptureNetworkPayloads();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `checkCertificateRevocation`<sup>Required</sup> <a name="checkCertificateRevocation" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.checkCertificateRevocation"></a>

```java
public IResolvable getCheckCertificateRevocation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ci`<sup>Required</sup> <a name="ci" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ci"></a>

```java
public DataDatadogSyntheticsTestOptionsListCiList getCi();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList">DataDatadogSyntheticsTestOptionsListCiList</a>

---

##### `disableAiaIntermediateFetching`<sup>Required</sup> <a name="disableAiaIntermediateFetching" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableAiaIntermediateFetching"></a>

```java
public IResolvable getDisableAiaIntermediateFetching();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `disableCors`<sup>Required</sup> <a name="disableCors" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableCors"></a>

```java
public IResolvable getDisableCors();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `disableCsp`<sup>Required</sup> <a name="disableCsp" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableCsp"></a>

```java
public IResolvable getDisableCsp();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `followRedirects`<sup>Required</sup> <a name="followRedirects" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.followRedirects"></a>

```java
public IResolvable getFollowRedirects();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `httpVersion`<sup>Required</sup> <a name="httpVersion" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.httpVersion"></a>

```java
public java.lang.String getHttpVersion();
```

- *Type:* java.lang.String

---

##### `ignoreCertificateValidation`<sup>Required</sup> <a name="ignoreCertificateValidation" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ignoreCertificateValidation"></a>

```java
public IResolvable getIgnoreCertificateValidation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ignoreServerCertificateError`<sup>Required</sup> <a name="ignoreServerCertificateError" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ignoreServerCertificateError"></a>

```java
public IResolvable getIgnoreServerCertificateError();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `initialNavigationTimeout`<sup>Required</sup> <a name="initialNavigationTimeout" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.initialNavigationTimeout"></a>

```java
public java.lang.Number getInitialNavigationTimeout();
```

- *Type:* java.lang.Number

---

##### `minFailureDuration`<sup>Required</sup> <a name="minFailureDuration" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.minFailureDuration"></a>

```java
public java.lang.Number getMinFailureDuration();
```

- *Type:* java.lang.Number

---

##### `minLocationFailed`<sup>Required</sup> <a name="minLocationFailed" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.minLocationFailed"></a>

```java
public java.lang.Number getMinLocationFailed();
```

- *Type:* java.lang.Number

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorName"></a>

```java
public java.lang.String getMonitorName();
```

- *Type:* java.lang.String

---

##### `monitorOptions`<sup>Required</sup> <a name="monitorOptions" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorOptions"></a>

```java
public DataDatadogSyntheticsTestOptionsListMonitorOptionsList getMonitorOptions();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList">DataDatadogSyntheticsTestOptionsListMonitorOptionsList</a>

---

##### `monitorPriority`<sup>Required</sup> <a name="monitorPriority" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorPriority"></a>

```java
public java.lang.Number getMonitorPriority();
```

- *Type:* java.lang.Number

---

##### `noScreenshot`<sup>Required</sup> <a name="noScreenshot" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.noScreenshot"></a>

```java
public IResolvable getNoScreenshot();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `restrictedRoles`<sup>Required</sup> <a name="restrictedRoles" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.restrictedRoles"></a>

```java
public java.util.List<java.lang.String> getRestrictedRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.retry"></a>

```java
public DataDatadogSyntheticsTestOptionsListRetryList getRetry();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList">DataDatadogSyntheticsTestOptionsListRetryList</a>

---

##### `rumSettings`<sup>Required</sup> <a name="rumSettings" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.rumSettings"></a>

```java
public DataDatadogSyntheticsTestOptionsListRumSettingsList getRumSettings();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList">DataDatadogSyntheticsTestOptionsListRumSettingsList</a>

---

##### `scheduling`<sup>Required</sup> <a name="scheduling" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.scheduling"></a>

```java
public DataDatadogSyntheticsTestOptionsListSchedulingList getScheduling();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList">DataDatadogSyntheticsTestOptionsListSchedulingList</a>

---

##### `tickEvery`<sup>Required</sup> <a name="tickEvery" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.tickEvery"></a>

```java
public java.lang.Number getTickEvery();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.internalValue"></a>

```java
public DataDatadogSyntheticsTestOptionsListStruct getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStruct">DataDatadogSyntheticsTestOptionsListStruct</a>

---



