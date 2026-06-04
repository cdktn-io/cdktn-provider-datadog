# `dataDatadogActionConnection` Submodule <a name="`dataDatadogActionConnection` Submodule" id="@cdktn/provider-datadog.dataDatadogActionConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogActionConnection <a name="DataDatadogActionConnection" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/action_connection datadog_action_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnection(Construct Scope, string Id, DataDatadogActionConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig">DataDatadogActionConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig">DataDatadogActionConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.putHttp">PutHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.resetHttp">ResetHttp</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutHttp` <a name="PutHttp" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.putHttp"></a>

```csharp
private void PutHttp(DataDatadogActionConnectionHttp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a>

---

##### `ResetHttp` <a name="ResetHttp" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.resetHttp"></a>

```csharp
private void ResetHttp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogActionConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogActionConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogActionConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogActionConnection.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

DataDatadogActionConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatadogActionConnection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogActionConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogActionConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/action_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogActionConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.aws">Aws</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference">DataDatadogActionConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.http">Http</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference">DataDatadogActionConnectionHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.httpInput">HttpInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.aws"></a>

```csharp
public DataDatadogActionConnectionAwsOutputReference Aws { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference">DataDatadogActionConnectionAwsOutputReference</a>

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.http"></a>

```csharp
public DataDatadogActionConnectionHttpOutputReference Http { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference">DataDatadogActionConnectionHttpOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.httpInput"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttp HttpInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogActionConnectionAws <a name="DataDatadogActionConnectionAws" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAws.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionAws {

};
```


### DataDatadogActionConnectionAwsAssumeRole <a name="DataDatadogActionConnectionAwsAssumeRole" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionAwsAssumeRole {

};
```


### DataDatadogActionConnectionConfig <a name="DataDatadogActionConnectionConfig" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id,
    DataDatadogActionConnectionHttp Http = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.id">Id</a></code> | <code>string</code> | ID for Connection. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.http">Http</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a></code> | http block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

ID for Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/action_connection#id DataDatadogActionConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Http`<sup>Optional</sup> <a name="Http" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionConfig.property.http"></a>

```csharp
public DataDatadogActionConnectionHttp Http { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/action_connection#http DataDatadogActionConnection#http}

---

### DataDatadogActionConnectionHttp <a name="DataDatadogActionConnectionHttp" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttp {
    DataDatadogActionConnectionHttpTokenAuth TokenAuth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp.property.tokenAuth">TokenAuth</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a></code> | token_auth block. |

---

##### `TokenAuth`<sup>Optional</sup> <a name="TokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp.property.tokenAuth"></a>

```csharp
public DataDatadogActionConnectionHttpTokenAuth TokenAuth { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a>

token_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/action_connection#token_auth DataDatadogActionConnection#token_auth}

---

### DataDatadogActionConnectionHttpTokenAuth <a name="DataDatadogActionConnectionHttpTokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttpTokenAuth {
    IResolvable|DataDatadogActionConnectionHttpTokenAuthHeader[] Header = null,
    IResolvable|DataDatadogActionConnectionHttpTokenAuthToken[] Token = null,
    IResolvable|DataDatadogActionConnectionHttpTokenAuthUrlParameter[] UrlParameter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.header">Header</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>[]</code> | header block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.token">Token</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>[]</code> | token block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.urlParameter">UrlParameter</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>[]</code> | url_parameter block. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.header"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuthHeader[] Header { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/action_connection#header DataDatadogActionConnection#header}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.token"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuthToken[] Token { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>[]

token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/action_connection#token DataDatadogActionConnection#token}

---

##### `UrlParameter`<sup>Optional</sup> <a name="UrlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth.property.urlParameter"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuthUrlParameter[] UrlParameter { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>[]

url_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.0/docs/data-sources/action_connection#url_parameter DataDatadogActionConnection#url_parameter}

---

### DataDatadogActionConnectionHttpTokenAuthBody <a name="DataDatadogActionConnectionHttpTokenAuthBody" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBody.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttpTokenAuthBody {

};
```


### DataDatadogActionConnectionHttpTokenAuthHeader <a name="DataDatadogActionConnectionHttpTokenAuthHeader" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttpTokenAuthHeader {

};
```


### DataDatadogActionConnectionHttpTokenAuthToken <a name="DataDatadogActionConnectionHttpTokenAuthToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttpTokenAuthToken {

};
```


### DataDatadogActionConnectionHttpTokenAuthUrlParameter <a name="DataDatadogActionConnectionHttpTokenAuthUrlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttpTokenAuthUrlParameter {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogActionConnectionAwsAssumeRoleOutputReference <a name="DataDatadogActionConnectionAwsAssumeRoleOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionAwsAssumeRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRole">DataDatadogActionConnectionAwsAssumeRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogActionConnectionAwsAssumeRole InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRole">DataDatadogActionConnectionAwsAssumeRole</a>

---


### DataDatadogActionConnectionAwsOutputReference <a name="DataDatadogActionConnectionAwsOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionAwsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.assumeRole">AssumeRole</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference">DataDatadogActionConnectionAwsAssumeRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAws">DataDatadogActionConnectionAws</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssumeRole`<sup>Required</sup> <a name="AssumeRole" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.assumeRole"></a>

```csharp
public DataDatadogActionConnectionAwsAssumeRoleOutputReference AssumeRole { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsAssumeRoleOutputReference">DataDatadogActionConnectionAwsAssumeRoleOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAwsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogActionConnectionAws InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionAws">DataDatadogActionConnectionAws</a>

---


### DataDatadogActionConnectionHttpOutputReference <a name="DataDatadogActionConnectionHttpOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.putTokenAuth">PutTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resetTokenAuth">ResetTokenAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTokenAuth` <a name="PutTokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.putTokenAuth"></a>

```csharp
private void PutTokenAuth(DataDatadogActionConnectionHttpTokenAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.putTokenAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a>

---

##### `ResetTokenAuth` <a name="ResetTokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.resetTokenAuth"></a>

```csharp
private void ResetTokenAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.tokenAuth">TokenAuth</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference">DataDatadogActionConnectionHttpTokenAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.tokenAuthInput">TokenAuthInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `TokenAuth`<sup>Required</sup> <a name="TokenAuth" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.tokenAuth"></a>

```csharp
public DataDatadogActionConnectionHttpTokenAuthOutputReference TokenAuth { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference">DataDatadogActionConnectionHttpTokenAuthOutputReference</a>

---

##### `TokenAuthInput`<sup>Optional</sup> <a name="TokenAuthInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.tokenAuthInput"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuth TokenAuthInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttp">DataDatadogActionConnectionHttp</a>

---


### DataDatadogActionConnectionHttpTokenAuthBodyOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthBodyOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttpTokenAuthBodyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBody">DataDatadogActionConnectionHttpTokenAuthBody</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuthBody InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBody">DataDatadogActionConnectionHttpTokenAuthBody</a>

---


### DataDatadogActionConnectionHttpTokenAuthHeaderList <a name="DataDatadogActionConnectionHttpTokenAuthHeaderList" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttpTokenAuthHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.get"></a>

```csharp
private DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuthHeader[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>[]

---


### DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuthHeader InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>

---


### DataDatadogActionConnectionHttpTokenAuthOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttpTokenAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putToken">PutToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putUrlParameter">PutUrlParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetUrlParameter">ResetUrlParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putHeader"></a>

```csharp
private void PutHeader(IResolvable|DataDatadogActionConnectionHttpTokenAuthHeader[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putHeader.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>[]

---

##### `PutToken` <a name="PutToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putToken"></a>

```csharp
private void PutToken(IResolvable|DataDatadogActionConnectionHttpTokenAuthToken[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putToken.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>[]

---

##### `PutUrlParameter` <a name="PutUrlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putUrlParameter"></a>

```csharp
private void PutUrlParameter(IResolvable|DataDatadogActionConnectionHttpTokenAuthUrlParameter[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.putUrlParameter.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>[]

---

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetUrlParameter` <a name="ResetUrlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.resetUrlParameter"></a>

```csharp
private void ResetUrlParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.body">Body</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference">DataDatadogActionConnectionHttpTokenAuthBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.header">Header</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList">DataDatadogActionConnectionHttpTokenAuthHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.token">Token</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList">DataDatadogActionConnectionHttpTokenAuthTokenList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.urlParameter">UrlParameter</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList">DataDatadogActionConnectionHttpTokenAuthUrlParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.headerInput">HeaderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.tokenInput">TokenInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.urlParameterInput">UrlParameterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.body"></a>

```csharp
public DataDatadogActionConnectionHttpTokenAuthBodyOutputReference Body { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthBodyOutputReference">DataDatadogActionConnectionHttpTokenAuthBodyOutputReference</a>

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.header"></a>

```csharp
public DataDatadogActionConnectionHttpTokenAuthHeaderList Header { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeaderList">DataDatadogActionConnectionHttpTokenAuthHeaderList</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.token"></a>

```csharp
public DataDatadogActionConnectionHttpTokenAuthTokenList Token { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList">DataDatadogActionConnectionHttpTokenAuthTokenList</a>

---

##### `UrlParameter`<sup>Required</sup> <a name="UrlParameter" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.urlParameter"></a>

```csharp
public DataDatadogActionConnectionHttpTokenAuthUrlParameterList UrlParameter { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList">DataDatadogActionConnectionHttpTokenAuthUrlParameterList</a>

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.headerInput"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuthHeader[] HeaderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthHeader">DataDatadogActionConnectionHttpTokenAuthHeader</a>[]

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.tokenInput"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuthToken[] TokenInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>[]

---

##### `UrlParameterInput`<sup>Optional</sup> <a name="UrlParameterInput" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.urlParameterInput"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuthUrlParameter[] UrlParameterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuth InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuth">DataDatadogActionConnectionHttpTokenAuth</a>

---


### DataDatadogActionConnectionHttpTokenAuthTokenList <a name="DataDatadogActionConnectionHttpTokenAuthTokenList" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttpTokenAuthTokenList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.get"></a>

```csharp
private DataDatadogActionConnectionHttpTokenAuthTokenOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuthToken[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>[]

---


### DataDatadogActionConnectionHttpTokenAuthTokenOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthTokenOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttpTokenAuthTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthTokenOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuthToken InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthToken">DataDatadogActionConnectionHttpTokenAuthToken</a>

---


### DataDatadogActionConnectionHttpTokenAuthUrlParameterList <a name="DataDatadogActionConnectionHttpTokenAuthUrlParameterList" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttpTokenAuthUrlParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.get"></a>

```csharp
private DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterList.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuthUrlParameter[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>[]

---


### DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference <a name="DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatadogActionConnectionHttpTokenAuthUrlParameter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.dataDatadogActionConnection.DataDatadogActionConnectionHttpTokenAuthUrlParameter">DataDatadogActionConnectionHttpTokenAuthUrlParameter</a>

---



