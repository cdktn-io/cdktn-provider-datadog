# `dataDatadogApiKey` Submodule <a name="`dataDatadogApiKey` Submodule" id="@cdktn/provider-datadog.dataDatadogApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogApiKey <a name="DataDatadogApiKey" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/api_key datadog_api_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogApiKey(Construct Scope, string Id, DataDatadogApiKeyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig">DataDatadogApiKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig">DataDatadogApiKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.resetExactMatch">ResetExactMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetExactMatch` <a name="ResetExactMatch" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.resetExactMatch"></a>

```csharp
private void ResetExactMatch()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogApiKey resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogApiKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogApiKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogApiKey.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogApiKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatadogApiKey resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogApiKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/api_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.remoteConfigReadEnabled">RemoteConfigReadEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.exactMatchInput">ExactMatchInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.exactMatch">ExactMatch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `RemoteConfigReadEnabled`<sup>Required</sup> <a name="RemoteConfigReadEnabled" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.remoteConfigReadEnabled"></a>

```csharp
public IResolvable RemoteConfigReadEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ExactMatchInput`<sup>Optional</sup> <a name="ExactMatchInput" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.exactMatchInput"></a>

```csharp
public bool|IResolvable ExactMatchInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ExactMatch`<sup>Required</sup> <a name="ExactMatch" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.exactMatch"></a>

```csharp
public bool|IResolvable ExactMatch { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogApiKeyConfig <a name="DataDatadogApiKeyConfig" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogApiKeyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable ExactMatch = null,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.exactMatch">ExactMatch</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to use exact match when searching by name. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.id">Id</a></code> | <code>string</code> | The ID of this resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.name">Name</a></code> | <code>string</code> | Name for API Key. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExactMatch`<sup>Optional</sup> <a name="ExactMatch" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.exactMatch"></a>

```csharp
public bool|IResolvable ExactMatch { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to use exact match when searching by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/api_key#exact_match DataDatadogApiKey#exact_match}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/api_key#id DataDatadogApiKey#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogApiKey.DataDatadogApiKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name for API Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/data-sources/api_key#name DataDatadogApiKey#name}

---



