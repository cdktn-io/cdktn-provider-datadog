# `dataDatadogAwsCurConfig` Submodule <a name="`dataDatadogAwsCurConfig` Submodule" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogAwsCurConfig <a name="DataDatadogAwsCurConfig" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/aws_cur_config datadog_aws_cur_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_aws_cur_config.DataDatadogAwsCurConfig;

DataDatadogAwsCurConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudAccountId(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.cloudAccountId">cloudAccountId</a></code> | <code>java.lang.Number</code> | The Datadog cloud account ID for the AWS CUR configuration you want to retrieve information about. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.Initializer.parameter.cloudAccountId"></a>

- *Type:* java.lang.Number

The Datadog cloud account ID for the AWS CUR configuration you want to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/aws_cur_config#cloud_account_id DataDatadogAwsCurConfig#cloud_account_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogAwsCurConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isConstruct"></a>

```java
import io.cdktn.providers.datadog.data_datadog_aws_cur_config.DataDatadogAwsCurConfig;

DataDatadogAwsCurConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.data_datadog_aws_cur_config.DataDatadogAwsCurConfig;

DataDatadogAwsCurConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformDataSource"></a>

```java
import io.cdktn.providers.datadog.data_datadog_aws_cur_config.DataDatadogAwsCurConfig;

DataDatadogAwsCurConfig.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.data_datadog_aws_cur_config.DataDatadogAwsCurConfig;

DataDatadogAwsCurConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogAwsCurConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatadogAwsCurConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogAwsCurConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogAwsCurConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/aws_cur_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogAwsCurConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.accountFilters">accountFilters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference">DataDatadogAwsCurConfigAccountFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.bucketRegion">bucketRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.errorMessages">errorMessages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.reportName">reportName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.reportPrefix">reportPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.statusUpdatedAt">statusUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cloudAccountIdInput">cloudAccountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cloudAccountId">cloudAccountId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accountFilters`<sup>Required</sup> <a name="accountFilters" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.accountFilters"></a>

```java
public DataDatadogAwsCurConfigAccountFiltersOutputReference getAccountFilters();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference">DataDatadogAwsCurConfigAccountFiltersOutputReference</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.bucketRegion"></a>

```java
public java.lang.String getBucketRegion();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.errorMessages"></a>

```java
public java.util.List<java.lang.String> getErrorMessages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.reportName"></a>

```java
public java.lang.String getReportName();
```

- *Type:* java.lang.String

---

##### `reportPrefix`<sup>Required</sup> <a name="reportPrefix" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.reportPrefix"></a>

```java
public java.lang.String getReportPrefix();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusUpdatedAt`<sup>Required</sup> <a name="statusUpdatedAt" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.statusUpdatedAt"></a>

```java
public java.lang.String getStatusUpdatedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `cloudAccountIdInput`<sup>Optional</sup> <a name="cloudAccountIdInput" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cloudAccountIdInput"></a>

```java
public java.lang.Number getCloudAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.cloudAccountId"></a>

```java
public java.lang.Number getCloudAccountId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogAwsCurConfigAccountFilters <a name="DataDatadogAwsCurConfigAccountFilters" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFilters.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_aws_cur_config.DataDatadogAwsCurConfigAccountFilters;

DataDatadogAwsCurConfigAccountFilters.builder()
    .build();
```


### DataDatadogAwsCurConfigConfig <a name="DataDatadogAwsCurConfigConfig" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_aws_cur_config.DataDatadogAwsCurConfigConfig;

DataDatadogAwsCurConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudAccountId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.cloudAccountId">cloudAccountId</a></code> | <code>java.lang.Number</code> | The Datadog cloud account ID for the AWS CUR configuration you want to retrieve information about. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigConfig.property.cloudAccountId"></a>

```java
public java.lang.Number getCloudAccountId();
```

- *Type:* java.lang.Number

The Datadog cloud account ID for the AWS CUR configuration you want to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/data-sources/aws_cur_config#cloud_account_id DataDatadogAwsCurConfig#cloud_account_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogAwsCurConfigAccountFiltersOutputReference <a name="DataDatadogAwsCurConfigAccountFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_aws_cur_config.DataDatadogAwsCurConfigAccountFiltersOutputReference;

new DataDatadogAwsCurConfigAccountFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.excludedAccounts">excludedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.includedAccounts">includedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.includeNewAccounts">includeNewAccounts</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFilters">DataDatadogAwsCurConfigAccountFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludedAccounts`<sup>Required</sup> <a name="excludedAccounts" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.excludedAccounts"></a>

```java
public java.util.List<java.lang.String> getExcludedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedAccounts`<sup>Required</sup> <a name="includedAccounts" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.includedAccounts"></a>

```java
public java.util.List<java.lang.String> getIncludedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeNewAccounts`<sup>Required</sup> <a name="includeNewAccounts" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.includeNewAccounts"></a>

```java
public IResolvable getIncludeNewAccounts();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogAwsCurConfigAccountFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogAwsCurConfig.DataDatadogAwsCurConfigAccountFilters">DataDatadogAwsCurConfigAccountFilters</a>

---



