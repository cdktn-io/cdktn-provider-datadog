# `dataDatadogAzureUcConfig` Submodule <a name="`dataDatadogAzureUcConfig` Submodule" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogAzureUcConfig <a name="DataDatadogAzureUcConfig" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/azure_uc_config datadog_azure_uc_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfig;

DataDatadogAzureUcConfig.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.cloudAccountId">cloudAccountId</a></code> | <code>java.lang.Number</code> | The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.Initializer.parameter.cloudAccountId"></a>

- *Type:* java.lang.Number

The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/azure_uc_config#cloud_account_id DataDatadogAzureUcConfig#cloud_account_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogAzureUcConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isConstruct"></a>

```java
import io.cdktn.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfig;

DataDatadogAzureUcConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfig;

DataDatadogAzureUcConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformDataSource"></a>

```java
import io.cdktn.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfig;

DataDatadogAzureUcConfig.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfig;

DataDatadogAzureUcConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogAzureUcConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatadogAzureUcConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogAzureUcConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogAzureUcConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/azure_uc_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogAzureUcConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.actualBillConfig">actualBillConfig</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference">DataDatadogAzureUcConfigActualBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.amortizedBillConfig">amortizedBillConfig</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference">DataDatadogAzureUcConfigAmortizedBillConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.errorMessages">errorMessages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.statusUpdatedAt">statusUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountIdInput">cloudAccountIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountId">cloudAccountId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `actualBillConfig`<sup>Required</sup> <a name="actualBillConfig" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.actualBillConfig"></a>

```java
public DataDatadogAzureUcConfigActualBillConfigOutputReference getActualBillConfig();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference">DataDatadogAzureUcConfigActualBillConfigOutputReference</a>

---

##### `amortizedBillConfig`<sup>Required</sup> <a name="amortizedBillConfig" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.amortizedBillConfig"></a>

```java
public DataDatadogAzureUcConfigAmortizedBillConfigOutputReference getAmortizedBillConfig();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference">DataDatadogAzureUcConfigAmortizedBillConfigOutputReference</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.errorMessages"></a>

```java
public java.util.List<java.lang.String> getErrorMessages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusUpdatedAt`<sup>Required</sup> <a name="statusUpdatedAt" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.statusUpdatedAt"></a>

```java
public java.lang.String getStatusUpdatedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `cloudAccountIdInput`<sup>Optional</sup> <a name="cloudAccountIdInput" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountIdInput"></a>

```java
public java.lang.Number getCloudAccountIdInput();
```

- *Type:* java.lang.Number

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.cloudAccountId"></a>

```java
public java.lang.Number getCloudAccountId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogAzureUcConfigActualBillConfig <a name="DataDatadogAzureUcConfigActualBillConfig" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfigActualBillConfig;

DataDatadogAzureUcConfigActualBillConfig.builder()
    .build();
```


### DataDatadogAzureUcConfigAmortizedBillConfig <a name="DataDatadogAzureUcConfigAmortizedBillConfig" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfigAmortizedBillConfig;

DataDatadogAzureUcConfigAmortizedBillConfig.builder()
    .build();
```


### DataDatadogAzureUcConfigConfig <a name="DataDatadogAzureUcConfigConfig" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfigConfig;

DataDatadogAzureUcConfigConfig.builder()
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
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.cloudAccountId">cloudAccountId</a></code> | <code>java.lang.Number</code> | The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudAccountId`<sup>Required</sup> <a name="cloudAccountId" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigConfig.property.cloudAccountId"></a>

```java
public java.lang.Number getCloudAccountId();
```

- *Type:* java.lang.Number

The Datadog cloud account ID for the Azure Usage Cost configuration you want to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.9.0/docs/data-sources/azure_uc_config#cloud_account_id DataDatadogAzureUcConfig#cloud_account_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatadogAzureUcConfigActualBillConfigOutputReference <a name="DataDatadogAzureUcConfigActualBillConfigOutputReference" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfigActualBillConfigOutputReference;

new DataDatadogAzureUcConfigActualBillConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportName">exportName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportPath">exportPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageAccount">storageAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageContainer">storageContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig">DataDatadogAzureUcConfigActualBillConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportName"></a>

```java
public java.lang.String getExportName();
```

- *Type:* java.lang.String

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.exportPath"></a>

```java
public java.lang.String getExportPath();
```

- *Type:* java.lang.String

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageAccount"></a>

```java
public java.lang.String getStorageAccount();
```

- *Type:* java.lang.String

---

##### `storageContainer`<sup>Required</sup> <a name="storageContainer" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.storageContainer"></a>

```java
public java.lang.String getStorageContainer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogAzureUcConfigActualBillConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigActualBillConfig">DataDatadogAzureUcConfigActualBillConfig</a>

---


### DataDatadogAzureUcConfigAmortizedBillConfigOutputReference <a name="DataDatadogAzureUcConfigAmortizedBillConfigOutputReference" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_azure_uc_config.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference;

new DataDatadogAzureUcConfigAmortizedBillConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportName">exportName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportPath">exportPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount">storageAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer">storageContainer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig">DataDatadogAzureUcConfigAmortizedBillConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exportName`<sup>Required</sup> <a name="exportName" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportName"></a>

```java
public java.lang.String getExportName();
```

- *Type:* java.lang.String

---

##### `exportPath`<sup>Required</sup> <a name="exportPath" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.exportPath"></a>

```java
public java.lang.String getExportPath();
```

- *Type:* java.lang.String

---

##### `storageAccount`<sup>Required</sup> <a name="storageAccount" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageAccount"></a>

```java
public java.lang.String getStorageAccount();
```

- *Type:* java.lang.String

---

##### `storageContainer`<sup>Required</sup> <a name="storageContainer" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.storageContainer"></a>

```java
public java.lang.String getStorageContainer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogAzureUcConfigAmortizedBillConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogAzureUcConfig.DataDatadogAzureUcConfigAmortizedBillConfig">DataDatadogAzureUcConfigAmortizedBillConfig</a>

---



