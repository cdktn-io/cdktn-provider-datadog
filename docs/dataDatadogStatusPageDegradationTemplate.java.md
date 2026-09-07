# `dataDatadogStatusPageDegradationTemplate` Submodule <a name="`dataDatadogStatusPageDegradationTemplate` Submodule" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogStatusPageDegradationTemplate <a name="DataDatadogStatusPageDegradationTemplate" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_template datadog_status_page_degradation_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_template.DataDatadogStatusPageDegradationTemplate;

DataDatadogStatusPageDegradationTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
    .pageId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The ID of the degradation template. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.pageId">pageId</a></code> | <code>java.lang.String</code> | The ID of the status page this degradation template belongs to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The ID of the degradation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_template#id DataDatadogStatusPageDegradationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.pageId"></a>

- *Type:* java.lang.String

The ID of the status page this degradation template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_template#page_id DataDatadogStatusPageDegradationTemplate#page_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogStatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isConstruct"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_template.DataDatadogStatusPageDegradationTemplate;

DataDatadogStatusPageDegradationTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_template.DataDatadogStatusPageDegradationTemplate;

DataDatadogStatusPageDegradationTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isTerraformDataSource"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_template.DataDatadogStatusPageDegradationTemplate;

DataDatadogStatusPageDegradationTemplate.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_template.DataDatadogStatusPageDegradationTemplate;

DataDatadogStatusPageDegradationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogStatusPageDegradationTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatadogStatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogStatusPageDegradationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogStatusPageDegradationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogStatusPageDegradationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.componentsAffected">componentsAffected</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList">DataDatadogStatusPageDegradationTemplateComponentsAffectedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.degradationTitle">degradationTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.updates">updates</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList">DataDatadogStatusPageDegradationTemplateUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.pageIdInput">pageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.pageId">pageId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `componentsAffected`<sup>Required</sup> <a name="componentsAffected" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.componentsAffected"></a>

```java
public DataDatadogStatusPageDegradationTemplateComponentsAffectedList getComponentsAffected();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList">DataDatadogStatusPageDegradationTemplateComponentsAffectedList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `degradationTitle`<sup>Required</sup> <a name="degradationTitle" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.degradationTitle"></a>

```java
public java.lang.String getDegradationTitle();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `updates`<sup>Required</sup> <a name="updates" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.updates"></a>

```java
public DataDatadogStatusPageDegradationTemplateUpdatesList getUpdates();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList">DataDatadogStatusPageDegradationTemplateUpdatesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `pageIdInput`<sup>Optional</sup> <a name="pageIdInput" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.pageIdInput"></a>

```java
public java.lang.String getPageIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.pageId"></a>

```java
public java.lang.String getPageId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogStatusPageDegradationTemplateComponentsAffected <a name="DataDatadogStatusPageDegradationTemplateComponentsAffected" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffected"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffected.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_template.DataDatadogStatusPageDegradationTemplateComponentsAffected;

DataDatadogStatusPageDegradationTemplateComponentsAffected.builder()
    .build();
```


### DataDatadogStatusPageDegradationTemplateConfig <a name="DataDatadogStatusPageDegradationTemplateConfig" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_template.DataDatadogStatusPageDegradationTemplateConfig;

DataDatadogStatusPageDegradationTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
    .pageId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the degradation template. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.pageId">pageId</a></code> | <code>java.lang.String</code> | The ID of the status page this degradation template belongs to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the degradation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_template#id DataDatadogStatusPageDegradationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.pageId"></a>

```java
public java.lang.String getPageId();
```

- *Type:* java.lang.String

The ID of the status page this degradation template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_template#page_id DataDatadogStatusPageDegradationTemplate#page_id}

---

### DataDatadogStatusPageDegradationTemplateUpdates <a name="DataDatadogStatusPageDegradationTemplateUpdates" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdates.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_template.DataDatadogStatusPageDegradationTemplateUpdates;

DataDatadogStatusPageDegradationTemplateUpdates.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogStatusPageDegradationTemplateComponentsAffectedList <a name="DataDatadogStatusPageDegradationTemplateComponentsAffectedList" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_template.DataDatadogStatusPageDegradationTemplateComponentsAffectedList;

new DataDatadogStatusPageDegradationTemplateComponentsAffectedList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.get"></a>

```java
public DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference <a name="DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_template.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference;

new DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffected">DataDatadogStatusPageDegradationTemplateComponentsAffected</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.internalValue"></a>

```java
public DataDatadogStatusPageDegradationTemplateComponentsAffected getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffected">DataDatadogStatusPageDegradationTemplateComponentsAffected</a>

---


### DataDatadogStatusPageDegradationTemplateUpdatesList <a name="DataDatadogStatusPageDegradationTemplateUpdatesList" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_template.DataDatadogStatusPageDegradationTemplateUpdatesList;

new DataDatadogStatusPageDegradationTemplateUpdatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.get"></a>

```java
public DataDatadogStatusPageDegradationTemplateUpdatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataDatadogStatusPageDegradationTemplateUpdatesOutputReference <a name="DataDatadogStatusPageDegradationTemplateUpdatesOutputReference" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_status_page_degradation_template.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference;

new DataDatadogStatusPageDegradationTemplateUpdatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdates">DataDatadogStatusPageDegradationTemplateUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.internalValue"></a>

```java
public DataDatadogStatusPageDegradationTemplateUpdates getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdates">DataDatadogStatusPageDegradationTemplateUpdates</a>

---



