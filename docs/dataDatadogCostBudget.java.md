# `dataDatadogCostBudget` Submodule <a name="`dataDatadogCostBudget` Submodule" id="@cdktn/provider-datadog.dataDatadogCostBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogCostBudget <a name="DataDatadogCostBudget" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_budget datadog_cost_budget}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudget;

DataDatadogCostBudget.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
//  .budgetLine(IResolvable|java.util.List<DataDatadogCostBudgetBudgetLine>)
//  .entries(IResolvable|java.util.List<DataDatadogCostBudgetEntries>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The ID of the budget. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.budgetLine">budgetLine</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>></code> | budget_line block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.entries">entries</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>></code> | entries block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The ID of the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_budget#id DataDatadogCostBudget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `budgetLine`<sup>Optional</sup> <a name="budgetLine" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.budgetLine"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>>

budget_line block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_budget#budget_line DataDatadogCostBudget#budget_line}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.Initializer.parameter.entries"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>>

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_budget#entries DataDatadogCostBudget#entries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.putBudgetLine">putBudgetLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.resetBudgetLine">resetBudgetLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.resetEntries">resetEntries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putBudgetLine` <a name="putBudgetLine" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.putBudgetLine"></a>

```java
public void putBudgetLine(IResolvable|java.util.List<DataDatadogCostBudgetBudgetLine> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.putBudgetLine.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>>

---

##### `putEntries` <a name="putEntries" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.putEntries"></a>

```java
public void putEntries(IResolvable|java.util.List<DataDatadogCostBudgetEntries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.putEntries.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>>

---

##### `resetBudgetLine` <a name="resetBudgetLine" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.resetBudgetLine"></a>

```java
public void resetBudgetLine()
```

##### `resetEntries` <a name="resetEntries" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.resetEntries"></a>

```java
public void resetEntries()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogCostBudget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isConstruct"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudget;

DataDatadogCostBudget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudget;

DataDatadogCostBudget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isTerraformDataSource"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudget;

DataDatadogCostBudget.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudget;

DataDatadogCostBudget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogCostBudget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatadogCostBudget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogCostBudget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogCostBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogCostBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.budgetLine">budgetLine</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList">DataDatadogCostBudgetBudgetLineList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.endMonth">endMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList">DataDatadogCostBudgetEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.metricsQuery">metricsQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.startMonth">startMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.totalAmount">totalAmount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.budgetLineInput">budgetLineInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.entriesInput">entriesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `budgetLine`<sup>Required</sup> <a name="budgetLine" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.budgetLine"></a>

```java
public DataDatadogCostBudgetBudgetLineList getBudgetLine();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList">DataDatadogCostBudgetBudgetLineList</a>

---

##### `endMonth`<sup>Required</sup> <a name="endMonth" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.endMonth"></a>

```java
public java.lang.Number getEndMonth();
```

- *Type:* java.lang.Number

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.entries"></a>

```java
public DataDatadogCostBudgetEntriesList getEntries();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList">DataDatadogCostBudgetEntriesList</a>

---

##### `metricsQuery`<sup>Required</sup> <a name="metricsQuery" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.metricsQuery"></a>

```java
public java.lang.String getMetricsQuery();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `startMonth`<sup>Required</sup> <a name="startMonth" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.startMonth"></a>

```java
public java.lang.Number getStartMonth();
```

- *Type:* java.lang.Number

---

##### `totalAmount`<sup>Required</sup> <a name="totalAmount" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.totalAmount"></a>

```java
public java.lang.Number getTotalAmount();
```

- *Type:* java.lang.Number

---

##### `budgetLineInput`<sup>Optional</sup> <a name="budgetLineInput" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.budgetLineInput"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetBudgetLine> getBudgetLineInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>>

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.entriesInput"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetEntries> getEntriesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogCostBudgetBudgetLine <a name="DataDatadogCostBudgetBudgetLine" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetBudgetLine;

DataDatadogCostBudgetBudgetLine.builder()
//  .childTagFilters(IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineChildTagFilters>)
//  .parentTagFilters(IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineParentTagFilters>)
//  .tagFilters(IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineTagFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine.property.childTagFilters">childTagFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>></code> | child_tag_filters block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine.property.parentTagFilters">parentTagFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>></code> | parent_tag_filters block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine.property.tagFilters">tagFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>></code> | tag_filters block. |

---

##### `childTagFilters`<sup>Optional</sup> <a name="childTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine.property.childTagFilters"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineChildTagFilters> getChildTagFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>>

child_tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_budget#child_tag_filters DataDatadogCostBudget#child_tag_filters}

---

##### `parentTagFilters`<sup>Optional</sup> <a name="parentTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine.property.parentTagFilters"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineParentTagFilters> getParentTagFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>>

parent_tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_budget#parent_tag_filters DataDatadogCostBudget#parent_tag_filters}

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine.property.tagFilters"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineTagFilters> getTagFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>>

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_budget#tag_filters DataDatadogCostBudget#tag_filters}

---

### DataDatadogCostBudgetBudgetLineChildTagFilters <a name="DataDatadogCostBudgetBudgetLineChildTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetBudgetLineChildTagFilters;

DataDatadogCostBudgetBudgetLineChildTagFilters.builder()
    .build();
```


### DataDatadogCostBudgetBudgetLineParentTagFilters <a name="DataDatadogCostBudgetBudgetLineParentTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetBudgetLineParentTagFilters;

DataDatadogCostBudgetBudgetLineParentTagFilters.builder()
    .build();
```


### DataDatadogCostBudgetBudgetLineTagFilters <a name="DataDatadogCostBudgetBudgetLineTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetBudgetLineTagFilters;

DataDatadogCostBudgetBudgetLineTagFilters.builder()
    .build();
```


### DataDatadogCostBudgetConfig <a name="DataDatadogCostBudgetConfig" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetConfig;

DataDatadogCostBudgetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
//  .budgetLine(IResolvable|java.util.List<DataDatadogCostBudgetBudgetLine>)
//  .entries(IResolvable|java.util.List<DataDatadogCostBudgetEntries>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the budget. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.budgetLine">budgetLine</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>></code> | budget_line block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.entries">entries</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>></code> | entries block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_budget#id DataDatadogCostBudget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `budgetLine`<sup>Optional</sup> <a name="budgetLine" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.budgetLine"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetBudgetLine> getBudgetLine();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>>

budget_line block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_budget#budget_line DataDatadogCostBudget#budget_line}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetConfig.property.entries"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetEntries> getEntries();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>>

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_budget#entries DataDatadogCostBudget#entries}

---

### DataDatadogCostBudgetEntries <a name="DataDatadogCostBudgetEntries" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetEntries;

DataDatadogCostBudgetEntries.builder()
//  .tagFilters(IResolvable|java.util.List<DataDatadogCostBudgetEntriesTagFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries.property.tagFilters">tagFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>></code> | tag_filters block. |

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries.property.tagFilters"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetEntriesTagFilters> getTagFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>>

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/cost_budget#tag_filters DataDatadogCostBudget#tag_filters}

---

### DataDatadogCostBudgetEntriesTagFilters <a name="DataDatadogCostBudgetEntriesTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetEntriesTagFilters;

DataDatadogCostBudgetEntriesTagFilters.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogCostBudgetBudgetLineChildTagFiltersList <a name="DataDatadogCostBudgetBudgetLineChildTagFiltersList" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetBudgetLineChildTagFiltersList;

new DataDatadogCostBudgetBudgetLineChildTagFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.get"></a>

```java
public DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineChildTagFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>>

---


### DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference <a name="DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference;

new DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCostBudgetBudgetLineChildTagFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>

---


### DataDatadogCostBudgetBudgetLineList <a name="DataDatadogCostBudgetBudgetLineList" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetBudgetLineList;

new DataDatadogCostBudgetBudgetLineList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.get"></a>

```java
public DataDatadogCostBudgetBudgetLineOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetBudgetLine> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>>

---


### DataDatadogCostBudgetBudgetLineOutputReference <a name="DataDatadogCostBudgetBudgetLineOutputReference" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetBudgetLineOutputReference;

new DataDatadogCostBudgetBudgetLineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putChildTagFilters">putChildTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putParentTagFilters">putParentTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resetChildTagFilters">resetChildTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resetParentTagFilters">resetParentTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resetTagFilters">resetTagFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChildTagFilters` <a name="putChildTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putChildTagFilters"></a>

```java
public void putChildTagFilters(IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineChildTagFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putChildTagFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>>

---

##### `putParentTagFilters` <a name="putParentTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putParentTagFilters"></a>

```java
public void putParentTagFilters(IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineParentTagFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putParentTagFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>>

---

##### `putTagFilters` <a name="putTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putTagFilters"></a>

```java
public void putTagFilters(IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineTagFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.putTagFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>>

---

##### `resetChildTagFilters` <a name="resetChildTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resetChildTagFilters"></a>

```java
public void resetChildTagFilters()
```

##### `resetParentTagFilters` <a name="resetParentTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resetParentTagFilters"></a>

```java
public void resetParentTagFilters()
```

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.resetTagFilters"></a>

```java
public void resetTagFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.amounts">amounts</a></code> | <code>io.cdktn.cdktn.NumberMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.childTagFilters">childTagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList">DataDatadogCostBudgetBudgetLineChildTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.parentTagFilters">parentTagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList">DataDatadogCostBudgetBudgetLineParentTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList">DataDatadogCostBudgetBudgetLineTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.childTagFiltersInput">childTagFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.parentTagFiltersInput">parentTagFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.tagFiltersInput">tagFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amounts`<sup>Required</sup> <a name="amounts" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.amounts"></a>

```java
public NumberMap getAmounts();
```

- *Type:* io.cdktn.cdktn.NumberMap

---

##### `childTagFilters`<sup>Required</sup> <a name="childTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.childTagFilters"></a>

```java
public DataDatadogCostBudgetBudgetLineChildTagFiltersList getChildTagFilters();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFiltersList">DataDatadogCostBudgetBudgetLineChildTagFiltersList</a>

---

##### `parentTagFilters`<sup>Required</sup> <a name="parentTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.parentTagFilters"></a>

```java
public DataDatadogCostBudgetBudgetLineParentTagFiltersList getParentTagFilters();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList">DataDatadogCostBudgetBudgetLineParentTagFiltersList</a>

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.tagFilters"></a>

```java
public DataDatadogCostBudgetBudgetLineTagFiltersList getTagFilters();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList">DataDatadogCostBudgetBudgetLineTagFiltersList</a>

---

##### `childTagFiltersInput`<sup>Optional</sup> <a name="childTagFiltersInput" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.childTagFiltersInput"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineChildTagFilters> getChildTagFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineChildTagFilters">DataDatadogCostBudgetBudgetLineChildTagFilters</a>>

---

##### `parentTagFiltersInput`<sup>Optional</sup> <a name="parentTagFiltersInput" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.parentTagFiltersInput"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineParentTagFilters> getParentTagFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>>

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.tagFiltersInput"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineTagFilters> getTagFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCostBudgetBudgetLine getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLine">DataDatadogCostBudgetBudgetLine</a>

---


### DataDatadogCostBudgetBudgetLineParentTagFiltersList <a name="DataDatadogCostBudgetBudgetLineParentTagFiltersList" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetBudgetLineParentTagFiltersList;

new DataDatadogCostBudgetBudgetLineParentTagFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.get"></a>

```java
public DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineParentTagFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>>

---


### DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference <a name="DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference;

new DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCostBudgetBudgetLineParentTagFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineParentTagFilters">DataDatadogCostBudgetBudgetLineParentTagFilters</a>

---


### DataDatadogCostBudgetBudgetLineTagFiltersList <a name="DataDatadogCostBudgetBudgetLineTagFiltersList" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetBudgetLineTagFiltersList;

new DataDatadogCostBudgetBudgetLineTagFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.get"></a>

```java
public DataDatadogCostBudgetBudgetLineTagFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetBudgetLineTagFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>>

---


### DataDatadogCostBudgetBudgetLineTagFiltersOutputReference <a name="DataDatadogCostBudgetBudgetLineTagFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference;

new DataDatadogCostBudgetBudgetLineTagFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCostBudgetBudgetLineTagFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetBudgetLineTagFilters">DataDatadogCostBudgetBudgetLineTagFilters</a>

---


### DataDatadogCostBudgetEntriesList <a name="DataDatadogCostBudgetEntriesList" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetEntriesList;

new DataDatadogCostBudgetEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.get"></a>

```java
public DataDatadogCostBudgetEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetEntries> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>>

---


### DataDatadogCostBudgetEntriesOutputReference <a name="DataDatadogCostBudgetEntriesOutputReference" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetEntriesOutputReference;

new DataDatadogCostBudgetEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.resetTagFilters">resetTagFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagFilters` <a name="putTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.putTagFilters"></a>

```java
public void putTagFilters(IResolvable|java.util.List<DataDatadogCostBudgetEntriesTagFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.putTagFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>>

---

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.resetTagFilters"></a>

```java
public void resetTagFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.amount">amount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList">DataDatadogCostBudgetEntriesTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.tagFiltersInput">tagFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.tagFilters"></a>

```java
public DataDatadogCostBudgetEntriesTagFiltersList getTagFilters();
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList">DataDatadogCostBudgetEntriesTagFiltersList</a>

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.tagFiltersInput"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetEntriesTagFilters> getTagFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCostBudgetEntries getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntries">DataDatadogCostBudgetEntries</a>

---


### DataDatadogCostBudgetEntriesTagFiltersList <a name="DataDatadogCostBudgetEntriesTagFiltersList" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetEntriesTagFiltersList;

new DataDatadogCostBudgetEntriesTagFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.get"></a>

```java
public DataDatadogCostBudgetEntriesTagFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataDatadogCostBudgetEntriesTagFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>>

---


### DataDatadogCostBudgetEntriesTagFiltersOutputReference <a name="DataDatadogCostBudgetEntriesTagFiltersOutputReference" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_cost_budget.DataDatadogCostBudgetEntriesTagFiltersOutputReference;

new DataDatadogCostBudgetEntriesTagFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|DataDatadogCostBudgetEntriesTagFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogCostBudget.DataDatadogCostBudgetEntriesTagFilters">DataDatadogCostBudgetEntriesTagFilters</a>

---



