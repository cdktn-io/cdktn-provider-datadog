# `dataDatadogStatusPageMaintenanceTemplates` Submodule <a name="`dataDatadogStatusPageMaintenanceTemplates` Submodule" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogStatusPageMaintenanceTemplates <a name="DataDatadogStatusPageMaintenanceTemplates" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates datadog_status_page_maintenance_templates}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_maintenance_templates.DataDatadogStatusPageMaintenanceTemplates;

DataDatadogStatusPageMaintenanceTemplates.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .pageId(java.lang.String)
//  .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.pageId">pageId</a></code> | <code>java.lang.String</code> | The ID of the status page whose maintenance templates to list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Filter the results to templates with this exact name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.pageId"></a>

- *Type:* java.lang.String

The ID of the status page whose maintenance templates to list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates#page_id DataDatadogStatusPageMaintenanceTemplates#page_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Filter the results to templates with this exact name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates#name DataDatadogStatusPageMaintenanceTemplates#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetName` <a name="resetName" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogStatusPageMaintenanceTemplates resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isConstruct"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_maintenance_templates.DataDatadogStatusPageMaintenanceTemplates;

DataDatadogStatusPageMaintenanceTemplates.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_maintenance_templates.DataDatadogStatusPageMaintenanceTemplates;

DataDatadogStatusPageMaintenanceTemplates.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformDataSource"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_maintenance_templates.DataDatadogStatusPageMaintenanceTemplates;

DataDatadogStatusPageMaintenanceTemplates.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_maintenance_templates.DataDatadogStatusPageMaintenanceTemplates;

DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatadogStatusPageMaintenanceTemplates resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogStatusPageMaintenanceTemplates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogStatusPageMaintenanceTemplates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogStatusPageMaintenanceTemplates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.maintenanceTemplates">maintenanceTemplates</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList">DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.pageIdInput">pageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.pageId">pageId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintenanceTemplates`<sup>Required</sup> <a name="maintenanceTemplates" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.maintenanceTemplates"></a>

```java
public DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList getMaintenanceTemplates();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList">DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pageIdInput`<sup>Optional</sup> <a name="pageIdInput" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.pageIdInput"></a>

```java
public java.lang.String getPageIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.pageId"></a>

```java
public java.lang.String getPageId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogStatusPageMaintenanceTemplatesConfig <a name="DataDatadogStatusPageMaintenanceTemplatesConfig" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_maintenance_templates.DataDatadogStatusPageMaintenanceTemplatesConfig;

DataDatadogStatusPageMaintenanceTemplatesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .pageId(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.pageId">pageId</a></code> | <code>java.lang.String</code> | The ID of the status page whose maintenance templates to list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Filter the results to templates with this exact name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.pageId"></a>

```java
public java.lang.String getPageId();
```

- *Type:* java.lang.String

The ID of the status page whose maintenance templates to list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates#page_id DataDatadogStatusPageMaintenanceTemplates#page_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Filter the results to templates with this exact name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates#name DataDatadogStatusPageMaintenanceTemplates#name}

---

### DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates <a name="DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_maintenance_templates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates;

DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList <a name="DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_maintenance_templates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList;

new DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.get"></a>

```java
public DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference <a name="DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_maintenance_templates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference;

new DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.maintenanceTitle">maintenanceTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates">DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintenanceTitle`<sup>Required</sup> <a name="maintenanceTitle" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.maintenanceTitle"></a>

```java
public java.lang.String getMaintenanceTitle();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.internalValue"></a>

```java
public DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates">DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates</a>

---



