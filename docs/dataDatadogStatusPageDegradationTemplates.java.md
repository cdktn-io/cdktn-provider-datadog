# `dataDatadogStatusPageDegradationTemplates` Submodule <a name="`dataDatadogStatusPageDegradationTemplates` Submodule" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogStatusPageDegradationTemplates <a name="DataDatadogStatusPageDegradationTemplates" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_templates datadog_status_page_degradation_templates}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_templates.DataDatadogStatusPageDegradationTemplates;

DataDatadogStatusPageDegradationTemplates.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.pageId">pageId</a></code> | <code>java.lang.String</code> | The ID of the status page whose degradation templates to list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Filter the results to templates with this exact name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.pageId"></a>

- *Type:* java.lang.String

The ID of the status page whose degradation templates to list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_templates#page_id DataDatadogStatusPageDegradationTemplates#page_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Filter the results to templates with this exact name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_templates#name DataDatadogStatusPageDegradationTemplates#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetName` <a name="resetName" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.resetName"></a>

```java
public void resetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogStatusPageDegradationTemplates resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.isConstruct"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_templates.DataDatadogStatusPageDegradationTemplates;

DataDatadogStatusPageDegradationTemplates.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_templates.DataDatadogStatusPageDegradationTemplates;

DataDatadogStatusPageDegradationTemplates.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.isTerraformDataSource"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_templates.DataDatadogStatusPageDegradationTemplates;

DataDatadogStatusPageDegradationTemplates.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_templates.DataDatadogStatusPageDegradationTemplates;

DataDatadogStatusPageDegradationTemplates.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogStatusPageDegradationTemplates.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatadogStatusPageDegradationTemplates resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogStatusPageDegradationTemplates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogStatusPageDegradationTemplates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_templates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogStatusPageDegradationTemplates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.degradationTemplates">degradationTemplates</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList">DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.pageIdInput">pageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.pageId">pageId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `degradationTemplates`<sup>Required</sup> <a name="degradationTemplates" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.degradationTemplates"></a>

```java
public DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList getDegradationTemplates();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList">DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pageIdInput`<sup>Optional</sup> <a name="pageIdInput" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.pageIdInput"></a>

```java
public java.lang.String getPageIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.pageId"></a>

```java
public java.lang.String getPageId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplates.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogStatusPageDegradationTemplatesConfig <a name="DataDatadogStatusPageDegradationTemplatesConfig" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_templates.DataDatadogStatusPageDegradationTemplatesConfig;

DataDatadogStatusPageDegradationTemplatesConfig.builder()
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
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.pageId">pageId</a></code> | <code>java.lang.String</code> | The ID of the status page whose degradation templates to list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Filter the results to templates with this exact name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.pageId"></a>

```java
public java.lang.String getPageId();
```

- *Type:* java.lang.String

The ID of the status page whose degradation templates to list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_templates#page_id DataDatadogStatusPageDegradationTemplates#page_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Filter the results to templates with this exact name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_templates#name DataDatadogStatusPageDegradationTemplates#name}

---

### DataDatadogStatusPageDegradationTemplatesDegradationTemplates <a name="DataDatadogStatusPageDegradationTemplatesDegradationTemplates" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplates.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_templates.DataDatadogStatusPageDegradationTemplatesDegradationTemplates;

DataDatadogStatusPageDegradationTemplatesDegradationTemplates.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList <a name="DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_templates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList;

new DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.get"></a>

```java
public DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference <a name="DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_templates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference;

new DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.property.degradationTitle">degradationTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplates">DataDatadogStatusPageDegradationTemplatesDegradationTemplates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `degradationTitle`<sup>Required</sup> <a name="degradationTitle" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.property.degradationTitle"></a>

```java
public java.lang.String getDegradationTitle();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference.property.internalValue"></a>

```java
public DataDatadogStatusPageDegradationTemplatesDegradationTemplates getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplates.DataDatadogStatusPageDegradationTemplatesDegradationTemplates">DataDatadogStatusPageDegradationTemplatesDegradationTemplates</a>

---



