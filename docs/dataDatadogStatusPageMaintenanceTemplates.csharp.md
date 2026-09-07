# `dataDatadogStatusPageMaintenanceTemplates` Submodule <a name="`dataDatadogStatusPageMaintenanceTemplates` Submodule" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogStatusPageMaintenanceTemplates <a name="DataDatadogStatusPageMaintenanceTemplates" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates datadog_status_page_maintenance_templates}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogStatusPageMaintenanceTemplates(Construct Scope, string Id, DataDatadogStatusPageMaintenanceTemplatesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig">DataDatadogStatusPageMaintenanceTemplatesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig">DataDatadogStatusPageMaintenanceTemplatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogStatusPageMaintenanceTemplates resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogStatusPageMaintenanceTemplates.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogStatusPageMaintenanceTemplates.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogStatusPageMaintenanceTemplates.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogStatusPageMaintenanceTemplates.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatadogStatusPageMaintenanceTemplates resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogStatusPageMaintenanceTemplates to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogStatusPageMaintenanceTemplates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogStatusPageMaintenanceTemplates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.maintenanceTemplates">MaintenanceTemplates</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList">DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.pageIdInput">PageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.pageId">PageId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaintenanceTemplates`<sup>Required</sup> <a name="MaintenanceTemplates" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.maintenanceTemplates"></a>

```csharp
public DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList MaintenanceTemplates { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList">DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PageIdInput`<sup>Optional</sup> <a name="PageIdInput" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.pageIdInput"></a>

```csharp
public string PageIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PageId`<sup>Required</sup> <a name="PageId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.pageId"></a>

```csharp
public string PageId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplates.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogStatusPageMaintenanceTemplatesConfig <a name="DataDatadogStatusPageMaintenanceTemplatesConfig" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogStatusPageMaintenanceTemplatesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PageId,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.pageId">PageId</a></code> | <code>string</code> | The ID of the status page whose maintenance templates to list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.name">Name</a></code> | <code>string</code> | Filter the results to templates with this exact name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PageId`<sup>Required</sup> <a name="PageId" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.pageId"></a>

```csharp
public string PageId { get; set; }
```

- *Type:* string

The ID of the status page whose maintenance templates to list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates#page_id DataDatadogStatusPageMaintenanceTemplates#page_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Filter the results to templates with this exact name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_maintenance_templates#name DataDatadogStatusPageMaintenanceTemplates#name}

---

### DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates <a name="DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList <a name="DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.get"></a>

```csharp
private DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference <a name="DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.maintenanceTitle">MaintenanceTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates">DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaintenanceTitle`<sup>Required</sup> <a name="MaintenanceTitle" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.maintenanceTitle"></a>

```csharp
public string MaintenanceTitle { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplatesOutputReference.property.internalValue"></a>

```csharp
public DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageMaintenanceTemplates.DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates">DataDatadogStatusPageMaintenanceTemplatesMaintenanceTemplates</a>

---



