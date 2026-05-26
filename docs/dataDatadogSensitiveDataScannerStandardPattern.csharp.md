# `dataDatadogSensitiveDataScannerStandardPattern` Submodule <a name="`dataDatadogSensitiveDataScannerStandardPattern` Submodule" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSensitiveDataScannerStandardPattern <a name="DataDatadogSensitiveDataScannerStandardPattern" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/sensitive_data_scanner_standard_pattern datadog_sensitive_data_scanner_standard_pattern}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSensitiveDataScannerStandardPattern(Construct Scope, string Id, DataDatadogSensitiveDataScannerStandardPatternConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig">DataDatadogSensitiveDataScannerStandardPatternConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig">DataDatadogSensitiveDataScannerStandardPatternConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetStandardPatternId">ResetStandardPatternId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStandardPatternId` <a name="ResetStandardPatternId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetStandardPatternId"></a>

```csharp
private void ResetStandardPatternId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogSensitiveDataScannerStandardPattern resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogSensitiveDataScannerStandardPattern.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogSensitiveDataScannerStandardPattern.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogSensitiveDataScannerStandardPattern.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogSensitiveDataScannerStandardPattern.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatadogSensitiveDataScannerStandardPattern resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogSensitiveDataScannerStandardPattern to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogSensitiveDataScannerStandardPattern that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/sensitive_data_scanner_standard_pattern#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogSensitiveDataScannerStandardPattern to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.includedKeywords">IncludedKeywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.standardPatternIdInput">StandardPatternIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.standardPatternId">StandardPatternId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IncludedKeywords`<sup>Required</sup> <a name="IncludedKeywords" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.includedKeywords"></a>

```csharp
public string[] IncludedKeywords { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StandardPatternIdInput`<sup>Optional</sup> <a name="StandardPatternIdInput" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.standardPatternIdInput"></a>

```csharp
public string StandardPatternIdInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StandardPatternId`<sup>Required</sup> <a name="StandardPatternId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.standardPatternId"></a>

```csharp
public string StandardPatternId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSensitiveDataScannerStandardPatternConfig <a name="DataDatadogSensitiveDataScannerStandardPatternConfig" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSensitiveDataScannerStandardPatternConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Filter = null,
    string Id = null,
    string StandardPatternId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.filter">Filter</a></code> | <code>string</code> | Filter all the Datadog standard patterns by name. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/sensitive_data_scanner_standard_pattern#id DataDatadogSensitiveDataScannerStandardPattern#id}. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.standardPatternId">StandardPatternId</a></code> | <code>string</code> | Stable ID of the Datadog standard pattern to retrieve. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Filter all the Datadog standard patterns by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/sensitive_data_scanner_standard_pattern#filter DataDatadogSensitiveDataScannerStandardPattern#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/sensitive_data_scanner_standard_pattern#id DataDatadogSensitiveDataScannerStandardPattern#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StandardPatternId`<sup>Optional</sup> <a name="StandardPatternId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.standardPatternId"></a>

```csharp
public string StandardPatternId { get; set; }
```

- *Type:* string

Stable ID of the Datadog standard pattern to retrieve.

This can be set directly to avoid Terraform configs breaking when Datadog renames a standard pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/sensitive_data_scanner_standard_pattern#standard_pattern_id DataDatadogSensitiveDataScannerStandardPattern#standard_pattern_id}

---



