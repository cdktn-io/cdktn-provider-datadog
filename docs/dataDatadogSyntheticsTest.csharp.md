# `dataDatadogSyntheticsTest` Submodule <a name="`dataDatadogSyntheticsTest` Submodule" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSyntheticsTest <a name="DataDatadogSyntheticsTest" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test datadog_synthetics_test}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTest(Construct Scope, string Id, DataDatadogSyntheticsTestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig">DataDatadogSyntheticsTestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig">DataDatadogSyntheticsTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogSyntheticsTest resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogSyntheticsTest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogSyntheticsTest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogSyntheticsTest.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogSyntheticsTest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatadogSyntheticsTest resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogSyntheticsTest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogSyntheticsTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogSyntheticsTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.deviceIds">DeviceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.mobileOptionsList">MobileOptionsList</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList">DataDatadogSyntheticsTestMobileOptionsListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.monitorId">MonitorId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.optionsList">OptionsList</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList">DataDatadogSyntheticsTestOptionsListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.subtype">Subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.testIdInput">TestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.testId">TestId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DeviceIds`<sup>Required</sup> <a name="DeviceIds" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.deviceIds"></a>

```csharp
public string[] DeviceIds { get; }
```

- *Type:* string[]

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `MobileOptionsList`<sup>Required</sup> <a name="MobileOptionsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.mobileOptionsList"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListStructList MobileOptionsList { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList">DataDatadogSyntheticsTestMobileOptionsListStructList</a>

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.monitorId"></a>

```csharp
public double MonitorId { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OptionsList`<sup>Required</sup> <a name="OptionsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.optionsList"></a>

```csharp
public DataDatadogSyntheticsTestOptionsListStructList OptionsList { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList">DataDatadogSyntheticsTestOptionsListStructList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.subtype"></a>

```csharp
public string Subtype { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TestIdInput`<sup>Optional</sup> <a name="TestIdInput" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.testIdInput"></a>

```csharp
public string TestIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TestId`<sup>Required</sup> <a name="TestId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.testId"></a>

```csharp
public string TestId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSyntheticsTestConfig <a name="DataDatadogSyntheticsTestConfig" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string TestId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.testId">TestId</a></code> | <code>string</code> | The synthetic test id or URL to search for. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#id DataDatadogSyntheticsTest#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TestId`<sup>Required</sup> <a name="TestId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.testId"></a>

```csharp
public string TestId { get; set; }
```

- *Type:* string

The synthetic test id or URL to search for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#test_id DataDatadogSyntheticsTest#test_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/data-sources/synthetics_test#id DataDatadogSyntheticsTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataDatadogSyntheticsTestMobileOptionsListBindings <a name="DataDatadogSyntheticsTestMobileOptionsListBindings" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListBindings {

};
```


### DataDatadogSyntheticsTestMobileOptionsListCi <a name="DataDatadogSyntheticsTestMobileOptionsListCi" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListCi {

};
```


### DataDatadogSyntheticsTestMobileOptionsListMobileApplication <a name="DataDatadogSyntheticsTestMobileOptionsListMobileApplication" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListMobileApplication {

};
```


### DataDatadogSyntheticsTestMobileOptionsListMonitorOptions <a name="DataDatadogSyntheticsTestMobileOptionsListMonitorOptions" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListMonitorOptions {

};
```


### DataDatadogSyntheticsTestMobileOptionsListRetry <a name="DataDatadogSyntheticsTestMobileOptionsListRetry" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListRetry {

};
```


### DataDatadogSyntheticsTestMobileOptionsListScheduling <a name="DataDatadogSyntheticsTestMobileOptionsListScheduling" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListScheduling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListScheduling {

};
```


### DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes {

};
```


### DataDatadogSyntheticsTestMobileOptionsListStruct <a name="DataDatadogSyntheticsTestMobileOptionsListStruct" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListStruct {

};
```


### DataDatadogSyntheticsTestOptionsListCi <a name="DataDatadogSyntheticsTestOptionsListCi" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListCi {

};
```


### DataDatadogSyntheticsTestOptionsListMonitorOptions <a name="DataDatadogSyntheticsTestOptionsListMonitorOptions" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListMonitorOptions {

};
```


### DataDatadogSyntheticsTestOptionsListRetry <a name="DataDatadogSyntheticsTestOptionsListRetry" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListRetry {

};
```


### DataDatadogSyntheticsTestOptionsListRumSettings <a name="DataDatadogSyntheticsTestOptionsListRumSettings" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListRumSettings {

};
```


### DataDatadogSyntheticsTestOptionsListScheduling <a name="DataDatadogSyntheticsTestOptionsListScheduling" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListScheduling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListScheduling {

};
```


### DataDatadogSyntheticsTestOptionsListSchedulingTimeframes <a name="DataDatadogSyntheticsTestOptionsListSchedulingTimeframes" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListSchedulingTimeframes {

};
```


### DataDatadogSyntheticsTestOptionsListStruct <a name="DataDatadogSyntheticsTestOptionsListStruct" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListStruct {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSyntheticsTestMobileOptionsListBindingsList <a name="DataDatadogSyntheticsTestMobileOptionsListBindingsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListBindingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.get"></a>

```csharp
private DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.relation">Relation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindings">DataDatadogSyntheticsTestMobileOptionsListBindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `Relation`<sup>Required</sup> <a name="Relation" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.relation"></a>

```csharp
public string Relation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListBindings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindings">DataDatadogSyntheticsTestMobileOptionsListBindings</a>

---


### DataDatadogSyntheticsTestMobileOptionsListCiList <a name="DataDatadogSyntheticsTestMobileOptionsListCiList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListCiList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.get"></a>

```csharp
private DataDatadogSyntheticsTestMobileOptionsListCiOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestMobileOptionsListCiOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListCiOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListCiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.executionRule">ExecutionRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCi">DataDatadogSyntheticsTestMobileOptionsListCi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionRule`<sup>Required</sup> <a name="ExecutionRule" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.executionRule"></a>

```csharp
public string ExecutionRule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListCi InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCi">DataDatadogSyntheticsTestMobileOptionsListCi</a>

---


### DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList <a name="DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.get"></a>

```csharp
private DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.referenceId">ReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.referenceType">ReferenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplication">DataDatadogSyntheticsTestMobileOptionsListMobileApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ReferenceId`<sup>Required</sup> <a name="ReferenceId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.referenceId"></a>

```csharp
public string ReferenceId { get; }
```

- *Type:* string

---

##### `ReferenceType`<sup>Required</sup> <a name="ReferenceType" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.referenceType"></a>

```csharp
public string ReferenceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListMobileApplication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplication">DataDatadogSyntheticsTestMobileOptionsListMobileApplication</a>

---


### DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList <a name="DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.get"></a>

```csharp
private DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.escalationMessage">EscalationMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.notificationPresetName">NotificationPresetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.renotifyInterval">RenotifyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.renotifyOccurrences">RenotifyOccurrences</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptions">DataDatadogSyntheticsTestMobileOptionsListMonitorOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EscalationMessage`<sup>Required</sup> <a name="EscalationMessage" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.escalationMessage"></a>

```csharp
public string EscalationMessage { get; }
```

- *Type:* string

---

##### `NotificationPresetName`<sup>Required</sup> <a name="NotificationPresetName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.notificationPresetName"></a>

```csharp
public string NotificationPresetName { get; }
```

- *Type:* string

---

##### `RenotifyInterval`<sup>Required</sup> <a name="RenotifyInterval" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.renotifyInterval"></a>

```csharp
public double RenotifyInterval { get; }
```

- *Type:* double

---

##### `RenotifyOccurrences`<sup>Required</sup> <a name="RenotifyOccurrences" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.renotifyOccurrences"></a>

```csharp
public double RenotifyOccurrences { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListMonitorOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptions">DataDatadogSyntheticsTestMobileOptionsListMonitorOptions</a>

---


### DataDatadogSyntheticsTestMobileOptionsListRetryList <a name="DataDatadogSyntheticsTestMobileOptionsListRetryList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListRetryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.get"></a>

```csharp
private DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetry">DataDatadogSyntheticsTestMobileOptionsListRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListRetry InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetry">DataDatadogSyntheticsTestMobileOptionsListRetry</a>

---


### DataDatadogSyntheticsTestMobileOptionsListSchedulingList <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListSchedulingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.get"></a>

```csharp
private DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.timeframes">Timeframes</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList">DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListScheduling">DataDatadogSyntheticsTestMobileOptionsListScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Timeframes`<sup>Required</sup> <a name="Timeframes" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.timeframes"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList Timeframes { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList">DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList</a>

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListScheduling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListScheduling">DataDatadogSyntheticsTestMobileOptionsListScheduling</a>

---


### DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.get"></a>

```csharp
private DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes">DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframesOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes">DataDatadogSyntheticsTestMobileOptionsListSchedulingTimeframes</a>

---


### DataDatadogSyntheticsTestMobileOptionsListStructList <a name="DataDatadogSyntheticsTestMobileOptionsListStructList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.get"></a>

```csharp
private DataDatadogSyntheticsTestMobileOptionsListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestMobileOptionsListStructOutputReference <a name="DataDatadogSyntheticsTestMobileOptionsListStructOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestMobileOptionsListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.allowApplicationCrash">AllowApplicationCrash</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.bindings">Bindings</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList">DataDatadogSyntheticsTestMobileOptionsListBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.ci">Ci</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList">DataDatadogSyntheticsTestMobileOptionsListCiList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.defaultStepTimeout">DefaultStepTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.deviceIds">DeviceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.disableAutoAcceptAlert">DisableAutoAcceptAlert</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.minFailureDuration">MinFailureDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.mobileApplication">MobileApplication</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList">DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorName">MonitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorOptions">MonitorOptions</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList">DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorPriority">MonitorPriority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.noScreenshot">NoScreenshot</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.restrictedRoles">RestrictedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList">DataDatadogSyntheticsTestMobileOptionsListRetryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList">DataDatadogSyntheticsTestMobileOptionsListSchedulingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.tickEvery">TickEvery</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStruct">DataDatadogSyntheticsTestMobileOptionsListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowApplicationCrash`<sup>Required</sup> <a name="AllowApplicationCrash" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.allowApplicationCrash"></a>

```csharp
public IResolvable AllowApplicationCrash { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Bindings`<sup>Required</sup> <a name="Bindings" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.bindings"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListBindingsList Bindings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListBindingsList">DataDatadogSyntheticsTestMobileOptionsListBindingsList</a>

---

##### `Ci`<sup>Required</sup> <a name="Ci" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.ci"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListCiList Ci { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListCiList">DataDatadogSyntheticsTestMobileOptionsListCiList</a>

---

##### `DefaultStepTimeout`<sup>Required</sup> <a name="DefaultStepTimeout" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.defaultStepTimeout"></a>

```csharp
public double DefaultStepTimeout { get; }
```

- *Type:* double

---

##### `DeviceIds`<sup>Required</sup> <a name="DeviceIds" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.deviceIds"></a>

```csharp
public string[] DeviceIds { get; }
```

- *Type:* string[]

---

##### `DisableAutoAcceptAlert`<sup>Required</sup> <a name="DisableAutoAcceptAlert" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.disableAutoAcceptAlert"></a>

```csharp
public IResolvable DisableAutoAcceptAlert { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MinFailureDuration`<sup>Required</sup> <a name="MinFailureDuration" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.minFailureDuration"></a>

```csharp
public double MinFailureDuration { get; }
```

- *Type:* double

---

##### `MobileApplication`<sup>Required</sup> <a name="MobileApplication" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.mobileApplication"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList MobileApplication { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList">DataDatadogSyntheticsTestMobileOptionsListMobileApplicationList</a>

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorName"></a>

```csharp
public string MonitorName { get; }
```

- *Type:* string

---

##### `MonitorOptions`<sup>Required</sup> <a name="MonitorOptions" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorOptions"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList MonitorOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList">DataDatadogSyntheticsTestMobileOptionsListMonitorOptionsList</a>

---

##### `MonitorPriority`<sup>Required</sup> <a name="MonitorPriority" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.monitorPriority"></a>

```csharp
public double MonitorPriority { get; }
```

- *Type:* double

---

##### `NoScreenshot`<sup>Required</sup> <a name="NoScreenshot" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.noScreenshot"></a>

```csharp
public IResolvable NoScreenshot { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RestrictedRoles`<sup>Required</sup> <a name="RestrictedRoles" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.restrictedRoles"></a>

```csharp
public string[] RestrictedRoles { get; }
```

- *Type:* string[]

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.retry"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListRetryList Retry { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListRetryList">DataDatadogSyntheticsTestMobileOptionsListRetryList</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.scheduling"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListSchedulingList Scheduling { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListSchedulingList">DataDatadogSyntheticsTestMobileOptionsListSchedulingList</a>

---

##### `TickEvery`<sup>Required</sup> <a name="TickEvery" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.tickEvery"></a>

```csharp
public double TickEvery { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStructOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestMobileOptionsListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestMobileOptionsListStruct">DataDatadogSyntheticsTestMobileOptionsListStruct</a>

---


### DataDatadogSyntheticsTestOptionsListCiList <a name="DataDatadogSyntheticsTestOptionsListCiList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListCiList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.get"></a>

```csharp
private DataDatadogSyntheticsTestOptionsListCiOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestOptionsListCiOutputReference <a name="DataDatadogSyntheticsTestOptionsListCiOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListCiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.executionRule">ExecutionRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCi">DataDatadogSyntheticsTestOptionsListCi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionRule`<sup>Required</sup> <a name="ExecutionRule" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.executionRule"></a>

```csharp
public string ExecutionRule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestOptionsListCi InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCi">DataDatadogSyntheticsTestOptionsListCi</a>

---


### DataDatadogSyntheticsTestOptionsListMonitorOptionsList <a name="DataDatadogSyntheticsTestOptionsListMonitorOptionsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListMonitorOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.get"></a>

```csharp
private DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference <a name="DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.escalationMessage">EscalationMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.notificationPresetName">NotificationPresetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyInterval">RenotifyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyOccurrences">RenotifyOccurrences</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptions">DataDatadogSyntheticsTestOptionsListMonitorOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EscalationMessage`<sup>Required</sup> <a name="EscalationMessage" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.escalationMessage"></a>

```csharp
public string EscalationMessage { get; }
```

- *Type:* string

---

##### `NotificationPresetName`<sup>Required</sup> <a name="NotificationPresetName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.notificationPresetName"></a>

```csharp
public string NotificationPresetName { get; }
```

- *Type:* string

---

##### `RenotifyInterval`<sup>Required</sup> <a name="RenotifyInterval" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyInterval"></a>

```csharp
public double RenotifyInterval { get; }
```

- *Type:* double

---

##### `RenotifyOccurrences`<sup>Required</sup> <a name="RenotifyOccurrences" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyOccurrences"></a>

```csharp
public double RenotifyOccurrences { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestOptionsListMonitorOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptions">DataDatadogSyntheticsTestOptionsListMonitorOptions</a>

---


### DataDatadogSyntheticsTestOptionsListRetryList <a name="DataDatadogSyntheticsTestOptionsListRetryList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListRetryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.get"></a>

```csharp
private DataDatadogSyntheticsTestOptionsListRetryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestOptionsListRetryOutputReference <a name="DataDatadogSyntheticsTestOptionsListRetryOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListRetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetry">DataDatadogSyntheticsTestOptionsListRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestOptionsListRetry InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetry">DataDatadogSyntheticsTestOptionsListRetry</a>

---


### DataDatadogSyntheticsTestOptionsListRumSettingsList <a name="DataDatadogSyntheticsTestOptionsListRumSettingsList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListRumSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.get"></a>

```csharp
private DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference <a name="DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenId">ClientTokenId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettings">DataDatadogSyntheticsTestOptionsListRumSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ClientTokenId`<sup>Required</sup> <a name="ClientTokenId" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenId"></a>

```csharp
public double ClientTokenId { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestOptionsListRumSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettings">DataDatadogSyntheticsTestOptionsListRumSettings</a>

---


### DataDatadogSyntheticsTestOptionsListSchedulingList <a name="DataDatadogSyntheticsTestOptionsListSchedulingList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListSchedulingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.get"></a>

```csharp
private DataDatadogSyntheticsTestOptionsListSchedulingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestOptionsListSchedulingOutputReference <a name="DataDatadogSyntheticsTestOptionsListSchedulingOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListSchedulingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.timeframes">Timeframes</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList">DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListScheduling">DataDatadogSyntheticsTestOptionsListScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Timeframes`<sup>Required</sup> <a name="Timeframes" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.timeframes"></a>

```csharp
public DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList Timeframes { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList">DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList</a>

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestOptionsListScheduling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListScheduling">DataDatadogSyntheticsTestOptionsListScheduling</a>

---


### DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList <a name="DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.get"></a>

```csharp
private DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference <a name="DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframes">DataDatadogSyntheticsTestOptionsListSchedulingTimeframes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframesOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestOptionsListSchedulingTimeframes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingTimeframes">DataDatadogSyntheticsTestOptionsListSchedulingTimeframes</a>

---


### DataDatadogSyntheticsTestOptionsListStructList <a name="DataDatadogSyntheticsTestOptionsListStructList" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.get"></a>

```csharp
private DataDatadogSyntheticsTestOptionsListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSyntheticsTestOptionsListStructOutputReference <a name="DataDatadogSyntheticsTestOptionsListStructOutputReference" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSyntheticsTestOptionsListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.acceptSelfSigned">AcceptSelfSigned</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.allowInsecure">AllowInsecure</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.blockedRequestPatterns">BlockedRequestPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.captureNetworkPayloads">CaptureNetworkPayloads</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.checkCertificateRevocation">CheckCertificateRevocation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ci">Ci</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList">DataDatadogSyntheticsTestOptionsListCiList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableAiaIntermediateFetching">DisableAiaIntermediateFetching</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableCors">DisableCors</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableCsp">DisableCsp</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.followRedirects">FollowRedirects</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.httpVersion">HttpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ignoreCertificateValidation">IgnoreCertificateValidation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ignoreServerCertificateError">IgnoreServerCertificateError</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.initialNavigationTimeout">InitialNavigationTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.minFailureDuration">MinFailureDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.minLocationFailed">MinLocationFailed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorName">MonitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorOptions">MonitorOptions</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList">DataDatadogSyntheticsTestOptionsListMonitorOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorPriority">MonitorPriority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.noScreenshot">NoScreenshot</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.restrictedRoles">RestrictedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.retry">Retry</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList">DataDatadogSyntheticsTestOptionsListRetryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.rumSettings">RumSettings</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList">DataDatadogSyntheticsTestOptionsListRumSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList">DataDatadogSyntheticsTestOptionsListSchedulingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.tickEvery">TickEvery</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStruct">DataDatadogSyntheticsTestOptionsListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceptSelfSigned`<sup>Required</sup> <a name="AcceptSelfSigned" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.acceptSelfSigned"></a>

```csharp
public IResolvable AcceptSelfSigned { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AllowInsecure`<sup>Required</sup> <a name="AllowInsecure" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.allowInsecure"></a>

```csharp
public IResolvable AllowInsecure { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `BlockedRequestPatterns`<sup>Required</sup> <a name="BlockedRequestPatterns" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.blockedRequestPatterns"></a>

```csharp
public string[] BlockedRequestPatterns { get; }
```

- *Type:* string[]

---

##### `CaptureNetworkPayloads`<sup>Required</sup> <a name="CaptureNetworkPayloads" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.captureNetworkPayloads"></a>

```csharp
public IResolvable CaptureNetworkPayloads { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CheckCertificateRevocation`<sup>Required</sup> <a name="CheckCertificateRevocation" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.checkCertificateRevocation"></a>

```csharp
public IResolvable CheckCertificateRevocation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Ci`<sup>Required</sup> <a name="Ci" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ci"></a>

```csharp
public DataDatadogSyntheticsTestOptionsListCiList Ci { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListCiList">DataDatadogSyntheticsTestOptionsListCiList</a>

---

##### `DisableAiaIntermediateFetching`<sup>Required</sup> <a name="DisableAiaIntermediateFetching" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableAiaIntermediateFetching"></a>

```csharp
public IResolvable DisableAiaIntermediateFetching { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DisableCors`<sup>Required</sup> <a name="DisableCors" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableCors"></a>

```csharp
public IResolvable DisableCors { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DisableCsp`<sup>Required</sup> <a name="DisableCsp" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.disableCsp"></a>

```csharp
public IResolvable DisableCsp { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `FollowRedirects`<sup>Required</sup> <a name="FollowRedirects" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.followRedirects"></a>

```csharp
public IResolvable FollowRedirects { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `HttpVersion`<sup>Required</sup> <a name="HttpVersion" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.httpVersion"></a>

```csharp
public string HttpVersion { get; }
```

- *Type:* string

---

##### `IgnoreCertificateValidation`<sup>Required</sup> <a name="IgnoreCertificateValidation" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ignoreCertificateValidation"></a>

```csharp
public IResolvable IgnoreCertificateValidation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IgnoreServerCertificateError`<sup>Required</sup> <a name="IgnoreServerCertificateError" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.ignoreServerCertificateError"></a>

```csharp
public IResolvable IgnoreServerCertificateError { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InitialNavigationTimeout`<sup>Required</sup> <a name="InitialNavigationTimeout" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.initialNavigationTimeout"></a>

```csharp
public double InitialNavigationTimeout { get; }
```

- *Type:* double

---

##### `MinFailureDuration`<sup>Required</sup> <a name="MinFailureDuration" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.minFailureDuration"></a>

```csharp
public double MinFailureDuration { get; }
```

- *Type:* double

---

##### `MinLocationFailed`<sup>Required</sup> <a name="MinLocationFailed" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.minLocationFailed"></a>

```csharp
public double MinLocationFailed { get; }
```

- *Type:* double

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorName"></a>

```csharp
public string MonitorName { get; }
```

- *Type:* string

---

##### `MonitorOptions`<sup>Required</sup> <a name="MonitorOptions" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorOptions"></a>

```csharp
public DataDatadogSyntheticsTestOptionsListMonitorOptionsList MonitorOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListMonitorOptionsList">DataDatadogSyntheticsTestOptionsListMonitorOptionsList</a>

---

##### `MonitorPriority`<sup>Required</sup> <a name="MonitorPriority" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.monitorPriority"></a>

```csharp
public double MonitorPriority { get; }
```

- *Type:* double

---

##### `NoScreenshot`<sup>Required</sup> <a name="NoScreenshot" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.noScreenshot"></a>

```csharp
public IResolvable NoScreenshot { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RestrictedRoles`<sup>Required</sup> <a name="RestrictedRoles" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.restrictedRoles"></a>

```csharp
public string[] RestrictedRoles { get; }
```

- *Type:* string[]

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.retry"></a>

```csharp
public DataDatadogSyntheticsTestOptionsListRetryList Retry { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRetryList">DataDatadogSyntheticsTestOptionsListRetryList</a>

---

##### `RumSettings`<sup>Required</sup> <a name="RumSettings" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.rumSettings"></a>

```csharp
public DataDatadogSyntheticsTestOptionsListRumSettingsList RumSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListRumSettingsList">DataDatadogSyntheticsTestOptionsListRumSettingsList</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.scheduling"></a>

```csharp
public DataDatadogSyntheticsTestOptionsListSchedulingList Scheduling { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListSchedulingList">DataDatadogSyntheticsTestOptionsListSchedulingList</a>

---

##### `TickEvery`<sup>Required</sup> <a name="TickEvery" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.tickEvery"></a>

```csharp
public double TickEvery { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStructOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSyntheticsTestOptionsListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSyntheticsTest.DataDatadogSyntheticsTestOptionsListStruct">DataDatadogSyntheticsTestOptionsListStruct</a>

---



