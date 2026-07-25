# `dataDatadogSecurityMonitoringCriticalAssets` Submodule <a name="`dataDatadogSecurityMonitoringCriticalAssets` Submodule" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSecurityMonitoringCriticalAssets <a name="DataDatadogSecurityMonitoringCriticalAssets" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/security_monitoring_critical_assets datadog_security_monitoring_critical_assets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSecurityMonitoringCriticalAssets(Construct Scope, string Id, DataDatadogSecurityMonitoringCriticalAssetsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig">DataDatadogSecurityMonitoringCriticalAssetsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig">DataDatadogSecurityMonitoringCriticalAssetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogSecurityMonitoringCriticalAssets resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogSecurityMonitoringCriticalAssets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogSecurityMonitoringCriticalAssets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogSecurityMonitoringCriticalAssets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogSecurityMonitoringCriticalAssets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatadogSecurityMonitoringCriticalAssets resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogSecurityMonitoringCriticalAssets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogSecurityMonitoringCriticalAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/security_monitoring_critical_assets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogSecurityMonitoringCriticalAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.criticalAssets">CriticalAssets</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList">DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CriticalAssets`<sup>Required</sup> <a name="CriticalAssets" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.criticalAssets"></a>

```csharp
public DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList CriticalAssets { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList">DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSecurityMonitoringCriticalAssetsConfig <a name="DataDatadogSecurityMonitoringCriticalAssetsConfig" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSecurityMonitoringCriticalAssetsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

### DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets <a name="DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList <a name="DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.get"></a>

```csharp
private DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference <a name="DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.ruleQuery">RuleQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets">DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RuleQuery`<sup>Required</sup> <a name="RuleQuery" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.ruleQuery"></a>

```csharp
public string RuleQuery { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssetsOutputReference.property.internalValue"></a>

```csharp
public DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogSecurityMonitoringCriticalAssets.DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets">DataDatadogSecurityMonitoringCriticalAssetsCriticalAssets</a>

---



