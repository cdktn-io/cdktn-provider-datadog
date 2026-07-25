# `costBudget` Submodule <a name="`costBudget` Submodule" id="@cdktn/provider-datadog.costBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CostBudget <a name="CostBudget" id="@cdktn/provider-datadog.costBudget.CostBudget"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget datadog_cost_budget}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudget;

CostBudget.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endMonth(java.lang.Number)
    .metricsQuery(java.lang.String)
    .name(java.lang.String)
    .startMonth(java.lang.Number)
//  .budgetLine(IResolvable|java.util.List<CostBudgetBudgetLine>)
//  .entries(IResolvable|java.util.List<CostBudgetEntries>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.endMonth">endMonth</a></code> | <code>java.lang.Number</code> | The month when the budget ends (YYYYMM). |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.metricsQuery">metricsQuery</a></code> | <code>java.lang.String</code> | The cost query used to track against the budget. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the budget. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.startMonth">startMonth</a></code> | <code>java.lang.Number</code> | The month when the budget starts (YYYYMM). |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.budgetLine">budgetLine</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>></code> | budget_line block. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.entries">entries</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>></code> | entries block. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The ID of the budget. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endMonth`<sup>Required</sup> <a name="endMonth" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.endMonth"></a>

- *Type:* java.lang.Number

The month when the budget ends (YYYYMM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#end_month CostBudget#end_month}

---

##### `metricsQuery`<sup>Required</sup> <a name="metricsQuery" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.metricsQuery"></a>

- *Type:* java.lang.String

The cost query used to track against the budget.

**Note:** For hierarchical budgets using `by {tag1,tag2}`, the order of tags determines the UI hierarchy (parent, child).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#metrics_query CostBudget#metrics_query}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#name CostBudget#name}

---

##### `startMonth`<sup>Required</sup> <a name="startMonth" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.startMonth"></a>

- *Type:* java.lang.Number

The month when the budget starts (YYYYMM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#start_month CostBudget#start_month}

---

##### `budgetLine`<sup>Optional</sup> <a name="budgetLine" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.budgetLine"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>>

budget_line block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#budget_line CostBudget#budget_line}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.entries"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>>

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#entries CostBudget#entries}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.costBudget.CostBudget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The ID of the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#id CostBudget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.putBudgetLine">putBudgetLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.resetBudgetLine">resetBudgetLine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.resetEntries">resetEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.costBudget.CostBudget.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.costBudget.CostBudget.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.costBudget.CostBudget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.costBudget.CostBudget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costBudget.CostBudget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.costBudget.CostBudget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.costBudget.CostBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.costBudget.CostBudget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.costBudget.CostBudget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.costBudget.CostBudget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.costBudget.CostBudget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-datadog.costBudget.CostBudget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.costBudget.CostBudget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-datadog.costBudget.CostBudget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-datadog.costBudget.CostBudget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costBudget.CostBudget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.costBudget.CostBudget.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-datadog.costBudget.CostBudget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costBudget.CostBudget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-datadog.costBudget.CostBudget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.costBudget.CostBudget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.costBudget.CostBudget.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-datadog.costBudget.CostBudget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costBudget.CostBudget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBudgetLine` <a name="putBudgetLine" id="@cdktn/provider-datadog.costBudget.CostBudget.putBudgetLine"></a>

```java
public void putBudgetLine(IResolvable|java.util.List<CostBudgetBudgetLine> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costBudget.CostBudget.putBudgetLine.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>>

---

##### `putEntries` <a name="putEntries" id="@cdktn/provider-datadog.costBudget.CostBudget.putEntries"></a>

```java
public void putEntries(IResolvable|java.util.List<CostBudgetEntries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costBudget.CostBudget.putEntries.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>>

---

##### `resetBudgetLine` <a name="resetBudgetLine" id="@cdktn/provider-datadog.costBudget.CostBudget.resetBudgetLine"></a>

```java
public void resetBudgetLine()
```

##### `resetEntries` <a name="resetEntries" id="@cdktn/provider-datadog.costBudget.CostBudget.resetEntries"></a>

```java
public void resetEntries()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.costBudget.CostBudget.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CostBudget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.costBudget.CostBudget.isConstruct"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudget;

CostBudget.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.costBudget.CostBudget.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.costBudget.CostBudget.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudget;

CostBudget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.costBudget.CostBudget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-datadog.costBudget.CostBudget.isTerraformResource"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudget;

CostBudget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.costBudget.CostBudget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.costBudget.CostBudget.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudget;

CostBudget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CostBudget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CostBudget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CostBudget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CostBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.costBudget.CostBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CostBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.budgetLine">budgetLine</a></code> | <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList">CostBudgetBudgetLineList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList">CostBudgetEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.totalAmount">totalAmount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.budgetLineInput">budgetLineInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.endMonthInput">endMonthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.entriesInput">entriesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.metricsQueryInput">metricsQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.startMonthInput">startMonthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.endMonth">endMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.metricsQuery">metricsQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.startMonth">startMonth</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.costBudget.CostBudget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.costBudget.CostBudget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.costBudget.CostBudget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.costBudget.CostBudget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.costBudget.CostBudget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.costBudget.CostBudget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.costBudget.CostBudget.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.costBudget.CostBudget.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.costBudget.CostBudget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.costBudget.CostBudget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.costBudget.CostBudget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.costBudget.CostBudget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.costBudget.CostBudget.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `budgetLine`<sup>Required</sup> <a name="budgetLine" id="@cdktn/provider-datadog.costBudget.CostBudget.property.budgetLine"></a>

```java
public CostBudgetBudgetLineList getBudgetLine();
```

- *Type:* <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList">CostBudgetBudgetLineList</a>

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-datadog.costBudget.CostBudget.property.entries"></a>

```java
public CostBudgetEntriesList getEntries();
```

- *Type:* <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList">CostBudgetEntriesList</a>

---

##### `totalAmount`<sup>Required</sup> <a name="totalAmount" id="@cdktn/provider-datadog.costBudget.CostBudget.property.totalAmount"></a>

```java
public java.lang.Number getTotalAmount();
```

- *Type:* java.lang.Number

---

##### `budgetLineInput`<sup>Optional</sup> <a name="budgetLineInput" id="@cdktn/provider-datadog.costBudget.CostBudget.property.budgetLineInput"></a>

```java
public IResolvable|java.util.List<CostBudgetBudgetLine> getBudgetLineInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>>

---

##### `endMonthInput`<sup>Optional</sup> <a name="endMonthInput" id="@cdktn/provider-datadog.costBudget.CostBudget.property.endMonthInput"></a>

```java
public java.lang.Number getEndMonthInput();
```

- *Type:* java.lang.Number

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktn/provider-datadog.costBudget.CostBudget.property.entriesInput"></a>

```java
public IResolvable|java.util.List<CostBudgetEntries> getEntriesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.costBudget.CostBudget.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricsQueryInput`<sup>Optional</sup> <a name="metricsQueryInput" id="@cdktn/provider-datadog.costBudget.CostBudget.property.metricsQueryInput"></a>

```java
public java.lang.String getMetricsQueryInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-datadog.costBudget.CostBudget.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `startMonthInput`<sup>Optional</sup> <a name="startMonthInput" id="@cdktn/provider-datadog.costBudget.CostBudget.property.startMonthInput"></a>

```java
public java.lang.Number getStartMonthInput();
```

- *Type:* java.lang.Number

---

##### `endMonth`<sup>Required</sup> <a name="endMonth" id="@cdktn/provider-datadog.costBudget.CostBudget.property.endMonth"></a>

```java
public java.lang.Number getEndMonth();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.costBudget.CostBudget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metricsQuery`<sup>Required</sup> <a name="metricsQuery" id="@cdktn/provider-datadog.costBudget.CostBudget.property.metricsQuery"></a>

```java
public java.lang.String getMetricsQuery();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.costBudget.CostBudget.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `startMonth`<sup>Required</sup> <a name="startMonth" id="@cdktn/provider-datadog.costBudget.CostBudget.property.startMonth"></a>

```java
public java.lang.Number getStartMonth();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.costBudget.CostBudget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CostBudgetBudgetLine <a name="CostBudgetBudgetLine" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetBudgetLine;

CostBudgetBudgetLine.builder()
    .amounts(java.util.Map<java.lang.String, java.lang.Number>)
//  .childTagFilters(IResolvable|java.util.List<CostBudgetBudgetLineChildTagFilters>)
//  .parentTagFilters(IResolvable|java.util.List<CostBudgetBudgetLineParentTagFilters>)
//  .tagFilters(IResolvable|java.util.List<CostBudgetBudgetLineTagFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.amounts">amounts</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | Map of month (YYYYMM) to budget amount. Example: {"202601": 1000.0, "202602": 1200.0}. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.childTagFilters">childTagFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>></code> | child_tag_filters block. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.parentTagFilters">parentTagFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>></code> | parent_tag_filters block. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.tagFilters">tagFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>></code> | tag_filters block. |

---

##### `amounts`<sup>Required</sup> <a name="amounts" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.amounts"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getAmounts();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

Map of month (YYYYMM) to budget amount. Example: {"202601": 1000.0, "202602": 1200.0}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#amounts CostBudget#amounts}

---

##### `childTagFilters`<sup>Optional</sup> <a name="childTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.childTagFilters"></a>

```java
public IResolvable|java.util.List<CostBudgetBudgetLineChildTagFilters> getChildTagFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>>

child_tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#child_tag_filters CostBudget#child_tag_filters}

---

##### `parentTagFilters`<sup>Optional</sup> <a name="parentTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.parentTagFilters"></a>

```java
public IResolvable|java.util.List<CostBudgetBudgetLineParentTagFilters> getParentTagFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>>

parent_tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#parent_tag_filters CostBudget#parent_tag_filters}

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine.property.tagFilters"></a>

```java
public IResolvable|java.util.List<CostBudgetBudgetLineTagFilters> getTagFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>>

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#tag_filters CostBudget#tag_filters}

---

### CostBudgetBudgetLineChildTagFilters <a name="CostBudgetBudgetLineChildTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetBudgetLineChildTagFilters;

CostBudgetBudgetLineChildTagFilters.builder()
    .tagKey(java.lang.String)
    .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Must be one of the tags from the `metrics_query`. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Must be one of the tags from the `metrics_query`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}.

---

### CostBudgetBudgetLineParentTagFilters <a name="CostBudgetBudgetLineParentTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetBudgetLineParentTagFilters;

CostBudgetBudgetLineParentTagFilters.builder()
    .tagKey(java.lang.String)
    .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Must be one of the tags from the `metrics_query`. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Must be one of the tags from the `metrics_query`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}.

---

### CostBudgetBudgetLineTagFilters <a name="CostBudgetBudgetLineTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetBudgetLineTagFilters;

CostBudgetBudgetLineTagFilters.builder()
    .tagKey(java.lang.String)
    .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Must be one of the tags from the `metrics_query`. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Must be one of the tags from the `metrics_query`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}.

---

### CostBudgetConfig <a name="CostBudgetConfig" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetConfig;

CostBudgetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endMonth(java.lang.Number)
    .metricsQuery(java.lang.String)
    .name(java.lang.String)
    .startMonth(java.lang.Number)
//  .budgetLine(IResolvable|java.util.List<CostBudgetBudgetLine>)
//  .entries(IResolvable|java.util.List<CostBudgetEntries>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.endMonth">endMonth</a></code> | <code>java.lang.Number</code> | The month when the budget ends (YYYYMM). |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.metricsQuery">metricsQuery</a></code> | <code>java.lang.String</code> | The cost query used to track against the budget. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the budget. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.startMonth">startMonth</a></code> | <code>java.lang.Number</code> | The month when the budget starts (YYYYMM). |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.budgetLine">budgetLine</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>></code> | budget_line block. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.entries">entries</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>></code> | entries block. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the budget. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endMonth`<sup>Required</sup> <a name="endMonth" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.endMonth"></a>

```java
public java.lang.Number getEndMonth();
```

- *Type:* java.lang.Number

The month when the budget ends (YYYYMM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#end_month CostBudget#end_month}

---

##### `metricsQuery`<sup>Required</sup> <a name="metricsQuery" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.metricsQuery"></a>

```java
public java.lang.String getMetricsQuery();
```

- *Type:* java.lang.String

The cost query used to track against the budget.

**Note:** For hierarchical budgets using `by {tag1,tag2}`, the order of tags determines the UI hierarchy (parent, child).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#metrics_query CostBudget#metrics_query}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#name CostBudget#name}

---

##### `startMonth`<sup>Required</sup> <a name="startMonth" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.startMonth"></a>

```java
public java.lang.Number getStartMonth();
```

- *Type:* java.lang.Number

The month when the budget starts (YYYYMM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#start_month CostBudget#start_month}

---

##### `budgetLine`<sup>Optional</sup> <a name="budgetLine" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.budgetLine"></a>

```java
public IResolvable|java.util.List<CostBudgetBudgetLine> getBudgetLine();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>>

budget_line block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#budget_line CostBudget#budget_line}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.entries"></a>

```java
public IResolvable|java.util.List<CostBudgetEntries> getEntries();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>>

entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#entries CostBudget#entries}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.costBudget.CostBudgetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#id CostBudget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CostBudgetEntries <a name="CostBudgetEntries" id="@cdktn/provider-datadog.costBudget.CostBudgetEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costBudget.CostBudgetEntries.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetEntries;

CostBudgetEntries.builder()
    .amount(java.lang.Number)
    .month(java.lang.Number)
//  .tagFilters(IResolvable|java.util.List<CostBudgetEntriesTagFilters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries.property.amount">amount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#amount CostBudget#amount}. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries.property.month">month</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#month CostBudget#month}. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries.property.tagFilters">tagFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>></code> | tag_filters block. |

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-datadog.costBudget.CostBudgetEntries.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#amount CostBudget#amount}.

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-datadog.costBudget.CostBudgetEntries.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#month CostBudget#month}.

---

##### `tagFilters`<sup>Optional</sup> <a name="tagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetEntries.property.tagFilters"></a>

```java
public IResolvable|java.util.List<CostBudgetEntriesTagFilters> getTagFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>>

tag_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#tag_filters CostBudget#tag_filters}

---

### CostBudgetEntriesTagFilters <a name="CostBudgetEntriesTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetEntriesTagFilters;

CostBudgetEntriesTagFilters.builder()
    .tagKey(java.lang.String)
    .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | **Note:** Must be one of the tags from the `metrics_query`. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

**Note:** Must be one of the tags from the `metrics_query`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#tag_key CostBudget#tag_key}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/cost_budget#tag_value CostBudget#tag_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CostBudgetBudgetLineChildTagFiltersList <a name="CostBudgetBudgetLineChildTagFiltersList" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetBudgetLineChildTagFiltersList;

new CostBudgetBudgetLineChildTagFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.get"></a>

```java
public CostBudgetBudgetLineChildTagFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CostBudgetBudgetLineChildTagFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>>

---


### CostBudgetBudgetLineChildTagFiltersOutputReference <a name="CostBudgetBudgetLineChildTagFiltersOutputReference" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetBudgetLineChildTagFiltersOutputReference;

new CostBudgetBudgetLineChildTagFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|CostBudgetBudgetLineChildTagFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>

---


### CostBudgetBudgetLineList <a name="CostBudgetBudgetLineList" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetBudgetLineList;

new CostBudgetBudgetLineList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.get"></a>

```java
public CostBudgetBudgetLineOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CostBudgetBudgetLine> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>>

---


### CostBudgetBudgetLineOutputReference <a name="CostBudgetBudgetLineOutputReference" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetBudgetLineOutputReference;

new CostBudgetBudgetLineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putChildTagFilters">putChildTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putParentTagFilters">putParentTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resetChildTagFilters">resetChildTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resetParentTagFilters">resetParentTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resetTagFilters">resetTagFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChildTagFilters` <a name="putChildTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putChildTagFilters"></a>

```java
public void putChildTagFilters(IResolvable|java.util.List<CostBudgetBudgetLineChildTagFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putChildTagFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>>

---

##### `putParentTagFilters` <a name="putParentTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putParentTagFilters"></a>

```java
public void putParentTagFilters(IResolvable|java.util.List<CostBudgetBudgetLineParentTagFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putParentTagFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>>

---

##### `putTagFilters` <a name="putTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putTagFilters"></a>

```java
public void putTagFilters(IResolvable|java.util.List<CostBudgetBudgetLineTagFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.putTagFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>>

---

##### `resetChildTagFilters` <a name="resetChildTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resetChildTagFilters"></a>

```java
public void resetChildTagFilters()
```

##### `resetParentTagFilters` <a name="resetParentTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resetParentTagFilters"></a>

```java
public void resetParentTagFilters()
```

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.resetTagFilters"></a>

```java
public void resetTagFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.childTagFilters">childTagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList">CostBudgetBudgetLineChildTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.parentTagFilters">parentTagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList">CostBudgetBudgetLineParentTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList">CostBudgetBudgetLineTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.amountsInput">amountsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.childTagFiltersInput">childTagFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.parentTagFiltersInput">parentTagFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.tagFiltersInput">tagFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.amounts">amounts</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `childTagFilters`<sup>Required</sup> <a name="childTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.childTagFilters"></a>

```java
public CostBudgetBudgetLineChildTagFiltersList getChildTagFilters();
```

- *Type:* <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFiltersList">CostBudgetBudgetLineChildTagFiltersList</a>

---

##### `parentTagFilters`<sup>Required</sup> <a name="parentTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.parentTagFilters"></a>

```java
public CostBudgetBudgetLineParentTagFiltersList getParentTagFilters();
```

- *Type:* <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList">CostBudgetBudgetLineParentTagFiltersList</a>

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.tagFilters"></a>

```java
public CostBudgetBudgetLineTagFiltersList getTagFilters();
```

- *Type:* <a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList">CostBudgetBudgetLineTagFiltersList</a>

---

##### `amountsInput`<sup>Optional</sup> <a name="amountsInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.amountsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getAmountsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `childTagFiltersInput`<sup>Optional</sup> <a name="childTagFiltersInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.childTagFiltersInput"></a>

```java
public IResolvable|java.util.List<CostBudgetBudgetLineChildTagFilters> getChildTagFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineChildTagFilters">CostBudgetBudgetLineChildTagFilters</a>>

---

##### `parentTagFiltersInput`<sup>Optional</sup> <a name="parentTagFiltersInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.parentTagFiltersInput"></a>

```java
public IResolvable|java.util.List<CostBudgetBudgetLineParentTagFilters> getParentTagFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>>

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.tagFiltersInput"></a>

```java
public IResolvable|java.util.List<CostBudgetBudgetLineTagFilters> getTagFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>>

---

##### `amounts`<sup>Required</sup> <a name="amounts" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.amounts"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getAmounts();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineOutputReference.property.internalValue"></a>

```java
public IResolvable|CostBudgetBudgetLine getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLine">CostBudgetBudgetLine</a>

---


### CostBudgetBudgetLineParentTagFiltersList <a name="CostBudgetBudgetLineParentTagFiltersList" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetBudgetLineParentTagFiltersList;

new CostBudgetBudgetLineParentTagFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.get"></a>

```java
public CostBudgetBudgetLineParentTagFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CostBudgetBudgetLineParentTagFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>>

---


### CostBudgetBudgetLineParentTagFiltersOutputReference <a name="CostBudgetBudgetLineParentTagFiltersOutputReference" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetBudgetLineParentTagFiltersOutputReference;

new CostBudgetBudgetLineParentTagFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|CostBudgetBudgetLineParentTagFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineParentTagFilters">CostBudgetBudgetLineParentTagFilters</a>

---


### CostBudgetBudgetLineTagFiltersList <a name="CostBudgetBudgetLineTagFiltersList" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetBudgetLineTagFiltersList;

new CostBudgetBudgetLineTagFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.get"></a>

```java
public CostBudgetBudgetLineTagFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CostBudgetBudgetLineTagFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>>

---


### CostBudgetBudgetLineTagFiltersOutputReference <a name="CostBudgetBudgetLineTagFiltersOutputReference" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetBudgetLineTagFiltersOutputReference;

new CostBudgetBudgetLineTagFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|CostBudgetBudgetLineTagFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.costBudget.CostBudgetBudgetLineTagFilters">CostBudgetBudgetLineTagFilters</a>

---


### CostBudgetEntriesList <a name="CostBudgetEntriesList" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetEntriesList;

new CostBudgetEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.get"></a>

```java
public CostBudgetEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CostBudgetEntries> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>>

---


### CostBudgetEntriesOutputReference <a name="CostBudgetEntriesOutputReference" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetEntriesOutputReference;

new CostBudgetEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.putTagFilters">putTagFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resetTagFilters">resetTagFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagFilters` <a name="putTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.putTagFilters"></a>

```java
public void putTagFilters(IResolvable|java.util.List<CostBudgetEntriesTagFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.putTagFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>>

---

##### `resetTagFilters` <a name="resetTagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.resetTagFilters"></a>

```java
public void resetTagFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFilters">tagFilters</a></code> | <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList">CostBudgetEntriesTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amountInput">amountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFiltersInput">tagFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amount">amount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagFilters`<sup>Required</sup> <a name="tagFilters" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFilters"></a>

```java
public CostBudgetEntriesTagFiltersList getTagFilters();
```

- *Type:* <a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList">CostBudgetEntriesTagFiltersList</a>

---

##### `amountInput`<sup>Optional</sup> <a name="amountInput" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amountInput"></a>

```java
public java.lang.Number getAmountInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `tagFiltersInput`<sup>Optional</sup> <a name="tagFiltersInput" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.tagFiltersInput"></a>

```java
public IResolvable|java.util.List<CostBudgetEntriesTagFilters> getTagFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.amount"></a>

```java
public java.lang.Number getAmount();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesOutputReference.property.internalValue"></a>

```java
public IResolvable|CostBudgetEntries getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntries">CostBudgetEntries</a>

---


### CostBudgetEntriesTagFiltersList <a name="CostBudgetEntriesTagFiltersList" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetEntriesTagFiltersList;

new CostBudgetEntriesTagFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.get"></a>

```java
public CostBudgetEntriesTagFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CostBudgetEntriesTagFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>>

---


### CostBudgetEntriesTagFiltersOutputReference <a name="CostBudgetEntriesTagFiltersOutputReference" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.datadog.cost_budget.CostBudgetEntriesTagFiltersOutputReference;

new CostBudgetEntriesTagFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|CostBudgetEntriesTagFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-datadog.costBudget.CostBudgetEntriesTagFilters">CostBudgetEntriesTagFilters</a>

---



