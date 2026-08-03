# `dataDatadogOrganizationSettings` Submodule <a name="`dataDatadogOrganizationSettings` Submodule" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogOrganizationSettings <a name="DataDatadogOrganizationSettings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/organization_settings datadog_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettings(Construct Scope, string Id, DataDatadogOrganizationSettingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig">DataDatadogOrganizationSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig">DataDatadogOrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.putSettings"></a>

```csharp
private void PutSettings(IResolvable|DataDatadogOrganizationSettingsSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.putSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>[]

---

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.resetSettings"></a>

```csharp
private void ResetSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogOrganizationSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogOrganizationSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogOrganizationSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogOrganizationSettings.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogOrganizationSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatadogOrganizationSettings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogOrganizationSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.publicId">PublicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList">DataDatadogOrganizationSettingsSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicId`<sup>Required</sup> <a name="PublicId" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.publicId"></a>

```csharp
public string PublicId { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.settings"></a>

```csharp
public DataDatadogOrganizationSettingsSettingsList Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList">DataDatadogOrganizationSettingsSettingsList</a>

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.settingsInput"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettings[] SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogOrganizationSettingsConfig <a name="DataDatadogOrganizationSettingsConfig" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DataDatadogOrganizationSettingsSettings[] Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.settings">Settings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>[]</code> | settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.settings"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettings[] Settings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>[]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/organization_settings#settings DataDatadogOrganizationSettings#settings}

---

### DataDatadogOrganizationSettingsSettings <a name="DataDatadogOrganizationSettingsSettings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettings {
    IResolvable|DataDatadogOrganizationSettingsSettingsSaml[] Saml = null,
    IResolvable|DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains[] SamlAutocreateUsersDomains = null,
    IResolvable|DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin[] SamlIdpInitiatedLogin = null,
    IResolvable|DataDatadogOrganizationSettingsSettingsSamlStrictMode[] SamlStrictMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.saml">Saml</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>[]</code> | saml block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlAutocreateUsersDomains">SamlAutocreateUsersDomains</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>[]</code> | saml_autocreate_users_domains block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlIdpInitiatedLogin">SamlIdpInitiatedLogin</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>[]</code> | saml_idp_initiated_login block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlStrictMode">SamlStrictMode</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>[]</code> | saml_strict_mode block. |

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.saml"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSaml[] Saml { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>[]

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/organization_settings#saml DataDatadogOrganizationSettings#saml}

---

##### `SamlAutocreateUsersDomains`<sup>Optional</sup> <a name="SamlAutocreateUsersDomains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlAutocreateUsersDomains"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains[] SamlAutocreateUsersDomains { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>[]

saml_autocreate_users_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/organization_settings#saml_autocreate_users_domains DataDatadogOrganizationSettings#saml_autocreate_users_domains}

---

##### `SamlIdpInitiatedLogin`<sup>Optional</sup> <a name="SamlIdpInitiatedLogin" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlIdpInitiatedLogin"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin[] SamlIdpInitiatedLogin { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>[]

saml_idp_initiated_login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/organization_settings#saml_idp_initiated_login DataDatadogOrganizationSettings#saml_idp_initiated_login}

---

##### `SamlStrictMode`<sup>Optional</sup> <a name="SamlStrictMode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlStrictMode"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSamlStrictMode[] SamlStrictMode { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>[]

saml_strict_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/data-sources/organization_settings#saml_strict_mode DataDatadogOrganizationSettings#saml_strict_mode}

---

### DataDatadogOrganizationSettingsSettingsSaml <a name="DataDatadogOrganizationSettingsSettingsSaml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettingsSaml {

};
```


### DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains <a name="DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains {

};
```


### DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin <a name="DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin {

};
```


### DataDatadogOrganizationSettingsSettingsSamlStrictMode <a name="DataDatadogOrganizationSettingsSettingsSamlStrictMode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettingsSamlStrictMode {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogOrganizationSettingsSettingsList <a name="DataDatadogOrganizationSettingsSettingsList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.get"></a>

```csharp
private DataDatadogOrganizationSettingsSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>[]

---


### DataDatadogOrganizationSettingsSettingsOutputReference <a name="DataDatadogOrganizationSettingsSettingsOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains">PutSamlAutocreateUsersDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin">PutSamlIdpInitiatedLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlStrictMode">PutSamlStrictMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlAutocreateUsersDomains">ResetSamlAutocreateUsersDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlIdpInitiatedLogin">ResetSamlIdpInitiatedLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlStrictMode">ResetSamlStrictMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSaml` <a name="PutSaml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSaml"></a>

```csharp
private void PutSaml(IResolvable|DataDatadogOrganizationSettingsSettingsSaml[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSaml.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>[]

---

##### `PutSamlAutocreateUsersDomains` <a name="PutSamlAutocreateUsersDomains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains"></a>

```csharp
private void PutSamlAutocreateUsersDomains(IResolvable|DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>[]

---

##### `PutSamlIdpInitiatedLogin` <a name="PutSamlIdpInitiatedLogin" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin"></a>

```csharp
private void PutSamlIdpInitiatedLogin(IResolvable|DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>[]

---

##### `PutSamlStrictMode` <a name="PutSamlStrictMode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlStrictMode"></a>

```csharp
private void PutSamlStrictMode(IResolvable|DataDatadogOrganizationSettingsSettingsSamlStrictMode[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlStrictMode.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>[]

---

##### `ResetSaml` <a name="ResetSaml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSaml"></a>

```csharp
private void ResetSaml()
```

##### `ResetSamlAutocreateUsersDomains` <a name="ResetSamlAutocreateUsersDomains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlAutocreateUsersDomains"></a>

```csharp
private void ResetSamlAutocreateUsersDomains()
```

##### `ResetSamlIdpInitiatedLogin` <a name="ResetSamlIdpInitiatedLogin" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlIdpInitiatedLogin"></a>

```csharp
private void ResetSamlIdpInitiatedLogin()
```

##### `ResetSamlStrictMode` <a name="ResetSamlStrictMode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlStrictMode"></a>

```csharp
private void ResetSamlStrictMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.privateWidgetShare">PrivateWidgetShare</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList">DataDatadogOrganizationSettingsSettingsSamlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRole">SamlAutocreateAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomains">SamlAutocreateUsersDomains</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlCanBeEnabled">SamlCanBeEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpEndpoint">SamlIdpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLogin">SamlIdpInitiatedLogin</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpMetadataUploaded">SamlIdpMetadataUploaded</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlLoginUrl">SamlLoginUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlStrictMode">SamlStrictMode</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList">DataDatadogOrganizationSettingsSettingsSamlStrictModeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomainsInput">SamlAutocreateUsersDomainsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLoginInput">SamlIdpInitiatedLoginInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlInput">SamlInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlStrictModeInput">SamlStrictModeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateWidgetShare`<sup>Required</sup> <a name="PrivateWidgetShare" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.privateWidgetShare"></a>

```csharp
public IResolvable PrivateWidgetShare { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.saml"></a>

```csharp
public DataDatadogOrganizationSettingsSettingsSamlList Saml { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList">DataDatadogOrganizationSettingsSettingsSamlList</a>

---

##### `SamlAutocreateAccessRole`<sup>Required</sup> <a name="SamlAutocreateAccessRole" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRole"></a>

```csharp
public string SamlAutocreateAccessRole { get; }
```

- *Type:* string

---

##### `SamlAutocreateUsersDomains`<sup>Required</sup> <a name="SamlAutocreateUsersDomains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomains"></a>

```csharp
public DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList SamlAutocreateUsersDomains { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList</a>

---

##### `SamlCanBeEnabled`<sup>Required</sup> <a name="SamlCanBeEnabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlCanBeEnabled"></a>

```csharp
public IResolvable SamlCanBeEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SamlIdpEndpoint`<sup>Required</sup> <a name="SamlIdpEndpoint" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpEndpoint"></a>

```csharp
public string SamlIdpEndpoint { get; }
```

- *Type:* string

---

##### `SamlIdpInitiatedLogin`<sup>Required</sup> <a name="SamlIdpInitiatedLogin" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLogin"></a>

```csharp
public DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList SamlIdpInitiatedLogin { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList</a>

---

##### `SamlIdpMetadataUploaded`<sup>Required</sup> <a name="SamlIdpMetadataUploaded" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpMetadataUploaded"></a>

```csharp
public IResolvable SamlIdpMetadataUploaded { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SamlLoginUrl`<sup>Required</sup> <a name="SamlLoginUrl" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlLoginUrl"></a>

```csharp
public string SamlLoginUrl { get; }
```

- *Type:* string

---

##### `SamlStrictMode`<sup>Required</sup> <a name="SamlStrictMode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlStrictMode"></a>

```csharp
public DataDatadogOrganizationSettingsSettingsSamlStrictModeList SamlStrictMode { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList">DataDatadogOrganizationSettingsSettingsSamlStrictModeList</a>

---

##### `SamlAutocreateUsersDomainsInput`<sup>Optional</sup> <a name="SamlAutocreateUsersDomainsInput" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomainsInput"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains[] SamlAutocreateUsersDomainsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>[]

---

##### `SamlIdpInitiatedLoginInput`<sup>Optional</sup> <a name="SamlIdpInitiatedLoginInput" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLoginInput"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin[] SamlIdpInitiatedLoginInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>[]

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlInput"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSaml[] SamlInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>[]

---

##### `SamlStrictModeInput`<sup>Optional</sup> <a name="SamlStrictModeInput" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlStrictModeInput"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSamlStrictMode[] SamlStrictModeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>

---


### DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList <a name="DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.get"></a>

```csharp
private DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>[]

---


### DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference <a name="DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---


### DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList <a name="DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.get"></a>

```csharp
private DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>[]

---


### DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference <a name="DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---


### DataDatadogOrganizationSettingsSettingsSamlList <a name="DataDatadogOrganizationSettingsSettingsSamlList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettingsSamlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.get"></a>

```csharp
private DataDatadogOrganizationSettingsSettingsSamlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSaml[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>[]

---


### DataDatadogOrganizationSettingsSettingsSamlOutputReference <a name="DataDatadogOrganizationSettingsSettingsSamlOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettingsSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSaml InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>

---


### DataDatadogOrganizationSettingsSettingsSamlStrictModeList <a name="DataDatadogOrganizationSettingsSettingsSamlStrictModeList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettingsSamlStrictModeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.get"></a>

```csharp
private DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSamlStrictMode[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>[]

---


### DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference <a name="DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogOrganizationSettingsSettingsSamlStrictMode InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>

---



