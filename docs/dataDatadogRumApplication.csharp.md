# `dataDatadogRumApplication` Submodule <a name="`dataDatadogRumApplication` Submodule" id="@cdktn/provider-datadog.dataDatadogRumApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogRumApplication <a name="DataDatadogRumApplication" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/rum_application datadog_rum_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogRumApplication(Construct Scope, string Id, DataDatadogRumApplicationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig">DataDatadogRumApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig">DataDatadogRumApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.resetNameFilter">ResetNameFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.resetTypeFilter">ResetTypeFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNameFilter` <a name="ResetNameFilter" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.resetNameFilter"></a>

```csharp
private void ResetNameFilter()
```

##### `ResetTypeFilter` <a name="ResetTypeFilter" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.resetTypeFilter"></a>

```csharp
private void ResetTypeFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogRumApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogRumApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogRumApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogRumApplication.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogRumApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatadogRumApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogRumApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogRumApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/rum_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogRumApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.apiKeyId">ApiKeyId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.nameFilterInput">NameFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.typeFilterInput">TypeFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.nameFilter">NameFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.typeFilter">TypeFilter</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApiKeyId`<sup>Required</sup> <a name="ApiKeyId" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.apiKeyId"></a>

```csharp
public double ApiKeyId { get; }
```

- *Type:* double

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameFilterInput`<sup>Optional</sup> <a name="NameFilterInput" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.nameFilterInput"></a>

```csharp
public string NameFilterInput { get; }
```

- *Type:* string

---

##### `TypeFilterInput`<sup>Optional</sup> <a name="TypeFilterInput" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.typeFilterInput"></a>

```csharp
public string TypeFilterInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NameFilter`<sup>Required</sup> <a name="NameFilter" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.nameFilter"></a>

```csharp
public string NameFilter { get; }
```

- *Type:* string

---

##### `TypeFilter`<sup>Required</sup> <a name="TypeFilter" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.typeFilter"></a>

```csharp
public string TypeFilter { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogRumApplicationConfig <a name="DataDatadogRumApplicationConfig" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogRumApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null,
    string NameFilter = null,
    string TypeFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.id">Id</a></code> | <code>string</code> | ID of the RUM application. Cannot be used with name and type filters. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.nameFilter">NameFilter</a></code> | <code>string</code> | The name used to search for a RUM application. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.typeFilter">TypeFilter</a></code> | <code>string</code> | The type used to search for a RUM application. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

ID of the RUM application. Cannot be used with name and type filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/rum_application#id DataDatadogRumApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NameFilter`<sup>Optional</sup> <a name="NameFilter" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.nameFilter"></a>

```csharp
public string NameFilter { get; set; }
```

- *Type:* string

The name used to search for a RUM application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/rum_application#name_filter DataDatadogRumApplication#name_filter}

---

##### `TypeFilter`<sup>Optional</sup> <a name="TypeFilter" id="@cdktn/provider-datadog.dataDatadogRumApplication.DataDatadogRumApplicationConfig.property.typeFilter"></a>

```csharp
public string TypeFilter { get; set; }
```

- *Type:* string

The type used to search for a RUM application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/rum_application#type_filter DataDatadogRumApplication#type_filter}

---



