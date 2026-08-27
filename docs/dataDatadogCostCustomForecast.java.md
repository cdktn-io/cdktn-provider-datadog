# `dataDatadogCostCustomForecast` Submodule <a name="`dataDatadogCostCustomForecast` Submodule" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCostCustomForecast <a name="DataDatadogCostCustomForecast" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_custom_forecast datadog_cost_custom_forecast}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_custom_forecast.DataDatadogCostCustomForecast;

DataDatadogCostCustomForecast.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .budgetUid(java.lang.String)
//  .entries(IResolvable|java.util.List<DataDatadogCostCustomForecastEntries>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.budgetUid">budgetUid</a></code> | <code>java.lang.String</code> | The UUID of the budget that this custom forecast belongs to. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.entries">entries</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>></code> | entries block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `budgetUid`<sup>Required</sup> <a name="budgetUid" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.budgetUid"></a>

- *Type:* java.lang.String

The UUID of the budget that this custom forecast belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_custom_forecast#budget_uid DataDatadogCostCustomForecast#budget_uid}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.Initializer.parameter.entries"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>>

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_custom_forecast#entries DataDatadogCostCustomForecast#entries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.resetEntries">resetEntries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEntries` <a name="putEntries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.putEntries"></a>

```java
public void putEntries(IResolvable|java.util.List<DataDatadogCostCustomForecastEntries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.putEntries.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>>

---

##### `resetEntries` <a name="resetEntries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.resetEntries"></a>

```java
public void resetEntries()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogCostCustomForecast resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isConstruct"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_custom_forecast.DataDatadogCostCustomForecast;

DataDatadogCostCustomForecast.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_custom_forecast.DataDatadogCostCustomForecast;

DataDatadogCostCustomForecast.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformDataSource"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_custom_forecast.DataDatadogCostCustomForecast;

DataDatadogCostCustomForecast.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_custom_forecast.DataDatadogCostCustomForecast;

DataDatadogCostCustomForecast.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogCostCustomForecast.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatadogCostCustomForecast resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogCostCustomForecast to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogCostCustomForecast that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_custom_forecast#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogCostCustomForecast to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.createdAt">createdAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList">DataDatadogCostCustomForecastEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.updatedAt">updatedAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.updatedBy">updatedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.budgetUidInput">budgetUidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.entriesInput">entriesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.budgetUid">budgetUid</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.createdAt"></a>

```java
public java.lang.Number getCreatedAt();
```

- *Type:* java.lang.Number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.entries"></a>

```java
public DataDatadogCostCustomForecastEntriesList getEntries();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList">DataDatadogCostCustomForecastEntriesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.updatedAt"></a>

```java
public java.lang.Number getUpdatedAt();
```

- *Type:* java.lang.Number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.updatedBy"></a>

```java
public java.lang.String getUpdatedBy();
```

- *Type:* java.lang.String

---

##### `budgetUidInput`<sup>Optional</sup> <a name="budgetUidInput" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.budgetUidInput"></a>

```java
public java.lang.String getBudgetUidInput();
```

- *Type:* java.lang.String

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.entriesInput"></a>

```java
public IResolvable|java.util.List<DataDatadogCostCustomForecastEntries> getEntriesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>>

---

##### `budgetUid`<sup>Required</sup> <a name="budgetUid" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.budgetUid"></a>

```java
public java.lang.String getBudgetUid();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecast.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCostCustomForecastConfig <a name="DataDatadogCostCustomForecastConfig" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_custom_forecast.DataDatadogCostCustomForecastConfig;

DataDatadogCostCustomForecastConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .budgetUid(java.lang.String)
//  .entries(IResolvable|java.util.List<DataDatadogCostCustomForecastEntries>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.budgetUid">budgetUid</a></code> | <code>java.lang.String</code> | The UUID of the budget that this custom forecast belongs to. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.entries">entries</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>></code> | entries block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `budgetUid`<sup>Required</sup> <a name="budgetUid" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.budgetUid"></a>

```java
public java.lang.String getBudgetUid();
```

- *Type:* java.lang.String

The UUID of the budget that this custom forecast belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_custom_forecast#budget_uid DataDatadogCostCustomForecast#budget_uid}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastConfig.property.entries"></a>

```java
public IResolvable|java.util.List<DataDatadogCostCustomForecastEntries> getEntries();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>>

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_custom_forecast#entries DataDatadogCostCustomForecast#entries}

---

### DataDatadogCostCustomForecastEntries <a name="DataDatadogCostCustomForecastEntries" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_custom_forecast.DataDatadogCostCustomForecastEntries;

DataDatadogCostCustomForecastEntries.builder()
//  .tagFilters(IResolvable|java.util.List<DataDatadogCostCustomForecastEntriesTagFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries.property.tagFilters">tagFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>></code> | tag_filters block. |

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries.property.tagFilters"></a>

```java
public IResolvable|java.util.List<DataDatadogCostCustomForecastEntriesTagFilters> getTagFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>>

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_custom_forecast#tag_filters DataDatadogCostCustomForecast#tag_filters}

---

### DataDatadogCostCustomForecastEntriesTagFilters <a name="DataDatadogCostCustomForecastEntriesTagFilters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_custom_forecast.DataDatadogCostCustomForecastEntriesTagFilters;

DataDatadogCostCustomForecastEntriesTagFilters.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCostCustomForecastEntriesList <a name="DataDatadogCostCustomForecastEntriesList" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_custom_forecast.DataDatadogCostCustomForecastEntriesList;

new DataDatadogCostCustomForecastEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.get"></a>

```java
public DataDatadogCostCustomForecastEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogCostCustomForecastEntries> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>>

---


### DataDatadogCostCustomForecastEntriesOutputReference <a name="DataDatadogCostCustomForecastEntriesOutputReference" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_custom_forecast.DataDatadogCostCustomForecastEntriesOutputReference;

new DataDatadogCostCustomForecastEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resetTagFilters">resetTagFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagFilters` <a name="putTagFilters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.putTagFilters"></a>

```java
public void putTagFilters(IResolvable|java.util.List<DataDatadogCostCustomForecastEntriesTagFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.putTagFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>>

---

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.resetTagFilters"></a>

```java
public void resetTagFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.amount">amount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList">DataDatadogCostCustomForecastEntriesTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.tagFiltersInput">tagFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.tagFilters"></a>

```java
public DataDatadogCostCustomForecastEntriesTagFiltersList getTagFilters();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList">DataDatadogCostCustomForecastEntriesTagFiltersList</a>

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.tagFiltersInput"></a>

```java
public IResolvable|java.util.List<DataDatadogCostCustomForecastEntriesTagFilters> getTagFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCostCustomForecastEntries getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntries">DataDatadogCostCustomForecastEntries</a>

---


### DataDatadogCostCustomForecastEntriesTagFiltersList <a name="DataDatadogCostCustomForecastEntriesTagFiltersList" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_custom_forecast.DataDatadogCostCustomForecastEntriesTagFiltersList;

new DataDatadogCostCustomForecastEntriesTagFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.get"></a>

```java
public DataDatadogCostCustomForecastEntriesTagFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogCostCustomForecastEntriesTagFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>>

---


### DataDatadogCostCustomForecastEntriesTagFiltersOutputReference <a name="DataDatadogCostCustomForecastEntriesTagFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_custom_forecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference;

new DataDatadogCostCustomForecastEntriesTagFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCostCustomForecastEntriesTagFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogCostCustomForecast.DataDatadogCostCustomForecastEntriesTagFilters">DataDatadogCostCustomForecastEntriesTagFilters</a>

---



