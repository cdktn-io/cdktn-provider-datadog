# `incidentType` Submodule <a name="`incidentType` Submodule" id="@cdktn/provider-datadog.incidentType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentType <a name="IncidentType" id="@cdktn/provider-datadog.incidentType.IncidentType"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type datadog_incident_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentType(Construct Scope, string Id, IncidentTypeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig">IncidentTypeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.incidentType.IncidentType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig">IncidentTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.resetIsDefault">ResetIsDefault</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentType.IncidentType.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.incidentType.IncidentType.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.incidentType.IncidentType.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.incidentType.IncidentType.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.incidentType.IncidentType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.incidentType.IncidentType.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.incidentType.IncidentType.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.incidentType.IncidentType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.incidentType.IncidentType.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.incidentType.IncidentType.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.incidentType.IncidentType.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.incidentType.IncidentType.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.incidentType.IncidentType.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.incidentType.IncidentType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.incidentType.IncidentType.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.incidentType.IncidentType.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentType.IncidentType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentType.IncidentType.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.incidentType.IncidentType.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentType.IncidentType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.incidentType.IncidentType.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.incidentType.IncidentType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.incidentType.IncidentType.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.incidentType.IncidentType.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentType.IncidentType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration"></a>

```csharp
private void PutConfiguration(IncidentTypeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.incidentType.IncidentType.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-datadog.incidentType.IncidentType.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-datadog.incidentType.IncidentType.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIsDefault` <a name="ResetIsDefault" id="@cdktn/provider-datadog.incidentType.IncidentType.resetIsDefault"></a>

```csharp
private void ResetIsDefault()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IncidentType resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.incidentType.IncidentType.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentType.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.incidentType.IncidentType.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentType.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentType.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.incidentType.IncidentType.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentType.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IncidentType resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentType to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentType.IncidentType.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IncidentType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference">IncidentTypeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.isDefaultInput">IsDefaultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.isDefault">IsDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.incidentType.IncidentType.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.incidentType.IncidentType.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentType.IncidentType.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.incidentType.IncidentType.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.incidentType.IncidentType.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.incidentType.IncidentType.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.incidentType.IncidentType.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.incidentType.IncidentType.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.incidentType.IncidentType.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.incidentType.IncidentType.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.incidentType.IncidentType.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.incidentType.IncidentType.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentType.IncidentType.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.incidentType.IncidentType.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-datadog.incidentType.IncidentType.property.configuration"></a>

```csharp
public IncidentTypeConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference">IncidentTypeConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentType.IncidentType.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-datadog.incidentType.IncidentType.property.configurationInput"></a>

```csharp
public IResolvable|IncidentTypeConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-datadog.incidentType.IncidentType.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktn/provider-datadog.incidentType.IncidentType.property.isDefaultInput"></a>

```csharp
public bool|IResolvable IsDefaultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.incidentType.IncidentType.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.incidentType.IncidentType.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-datadog.incidentType.IncidentType.property.isDefault"></a>

```csharp
public bool|IResolvable IsDefault { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.incidentType.IncidentType.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentType.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.incidentType.IncidentType.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentTypeConfig <a name="IncidentTypeConfig" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentTypeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IncidentTypeConfiguration Configuration = null,
    string Description = null,
    bool|IResolvable IsDefault = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.name">Name</a></code> | <code>string</code> | Name of the incident type. Must be between 1 and 50 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a></code> | The incident type's behavior settings. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.description">Description</a></code> | <code>string</code> | Description of the incident type. The description can have a maximum of 512 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.isDefault">IsDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this incident type is the default type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the incident type. Must be between 1 and 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#name IncidentType#name}

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.configuration"></a>

```csharp
public IncidentTypeConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

The incident type's behavior settings.

Any field left unset takes its server-side default. This block is applied in a separate call after the incident type is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#configuration IncidentType#configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the incident type. The description can have a maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#description IncidentType#description}

---

##### `IsDefault`<sup>Optional</sup> <a name="IsDefault" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfig.property.isDefault"></a>

```csharp
public bool|IResolvable IsDefault { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this incident type is the default type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#is_default IncidentType#is_default}

---

### IncidentTypeConfiguration <a name="IncidentTypeConfiguration" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentTypeConfiguration {
    bool|IResolvable AllowIncidentDeletion = null,
    bool|IResolvable AllowWorkflows = null,
    string CreateMessage = null,
    bool|IResolvable EditableTimestamps = null,
    bool|IResolvable PrivateIncidents = null,
    bool|IResolvable PrivateIncidentsByDefault = null,
    string SlugSource = null,
    bool|IResolvable TestIncidents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowIncidentDeletion">AllowIncidentDeletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether incidents of this type can be deleted. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowWorkflows">AllowWorkflows</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether users can manually run a workflow from an incident of this type. Defaults to `true`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.createMessage">CreateMessage</a></code> | <code>string</code> | An optional message shown to users when they declare an incident of this type. Defaults to an empty string. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.editableTimestamps">EditableTimestamps</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether responders can edit incident timestamps for incidents of this type. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidents">PrivateIncidents</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether responders can create private incidents of this type. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidentsByDefault">PrivateIncidentsByDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the private toggle is enabled by default in the incident creation modal for this type. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.slugSource">SlugSource</a></code> | <code>string</code> | The source used to derive the incident slug. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.testIncidents">TestIncidents</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether test incidents of this type can be created. Defaults to `true`. |

---

##### `AllowIncidentDeletion`<sup>Optional</sup> <a name="AllowIncidentDeletion" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowIncidentDeletion"></a>

```csharp
public bool|IResolvable AllowIncidentDeletion { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether incidents of this type can be deleted. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#allow_incident_deletion IncidentType#allow_incident_deletion}

---

##### `AllowWorkflows`<sup>Optional</sup> <a name="AllowWorkflows" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.allowWorkflows"></a>

```csharp
public bool|IResolvable AllowWorkflows { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether users can manually run a workflow from an incident of this type. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#allow_workflows IncidentType#allow_workflows}

---

##### `CreateMessage`<sup>Optional</sup> <a name="CreateMessage" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.createMessage"></a>

```csharp
public string CreateMessage { get; set; }
```

- *Type:* string

An optional message shown to users when they declare an incident of this type. Defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#create_message IncidentType#create_message}

---

##### `EditableTimestamps`<sup>Optional</sup> <a name="EditableTimestamps" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.editableTimestamps"></a>

```csharp
public bool|IResolvable EditableTimestamps { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether responders can edit incident timestamps for incidents of this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#editable_timestamps IncidentType#editable_timestamps}

---

##### `PrivateIncidents`<sup>Optional</sup> <a name="PrivateIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidents"></a>

```csharp
public bool|IResolvable PrivateIncidents { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether responders can create private incidents of this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#private_incidents IncidentType#private_incidents}

---

##### `PrivateIncidentsByDefault`<sup>Optional</sup> <a name="PrivateIncidentsByDefault" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.privateIncidentsByDefault"></a>

```csharp
public bool|IResolvable PrivateIncidentsByDefault { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the private toggle is enabled by default in the incident creation modal for this type. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#private_incidents_by_default IncidentType#private_incidents_by_default}

---

##### `SlugSource`<sup>Optional</sup> <a name="SlugSource" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.slugSource"></a>

```csharp
public string SlugSource { get; set; }
```

- *Type:* string

The source used to derive the incident slug.

When set to `servicenow`, incidents display the ServiceNow record ID instead of the public ID. If no ServiceNow integration exists, the public ID is displayed. Defaults to `default`. Valid values are `default`, `servicenow`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#slug_source IncidentType#slug_source}

---

##### `TestIncidents`<sup>Optional</sup> <a name="TestIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration.property.testIncidents"></a>

```csharp
public bool|IResolvable TestIncidents { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether test incidents of this type can be created. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_type#test_incidents IncidentType#test_incidents}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentTypeConfigurationOutputReference <a name="IncidentTypeConfigurationOutputReference" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentTypeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowIncidentDeletion">ResetAllowIncidentDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowWorkflows">ResetAllowWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetCreateMessage">ResetCreateMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetEditableTimestamps">ResetEditableTimestamps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidents">ResetPrivateIncidents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidentsByDefault">ResetPrivateIncidentsByDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetSlugSource">ResetSlugSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetTestIncidents">ResetTestIncidents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowIncidentDeletion` <a name="ResetAllowIncidentDeletion" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowIncidentDeletion"></a>

```csharp
private void ResetAllowIncidentDeletion()
```

##### `ResetAllowWorkflows` <a name="ResetAllowWorkflows" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetAllowWorkflows"></a>

```csharp
private void ResetAllowWorkflows()
```

##### `ResetCreateMessage` <a name="ResetCreateMessage" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetCreateMessage"></a>

```csharp
private void ResetCreateMessage()
```

##### `ResetEditableTimestamps` <a name="ResetEditableTimestamps" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetEditableTimestamps"></a>

```csharp
private void ResetEditableTimestamps()
```

##### `ResetPrivateIncidents` <a name="ResetPrivateIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidents"></a>

```csharp
private void ResetPrivateIncidents()
```

##### `ResetPrivateIncidentsByDefault` <a name="ResetPrivateIncidentsByDefault" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetPrivateIncidentsByDefault"></a>

```csharp
private void ResetPrivateIncidentsByDefault()
```

##### `ResetSlugSource` <a name="ResetSlugSource" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetSlugSource"></a>

```csharp
private void ResetSlugSource()
```

##### `ResetTestIncidents` <a name="ResetTestIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.resetTestIncidents"></a>

```csharp
private void ResetTestIncidents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletionInput">AllowIncidentDeletionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflowsInput">AllowWorkflowsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessageInput">CreateMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestampsInput">EditableTimestampsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefaultInput">PrivateIncidentsByDefaultInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsInput">PrivateIncidentsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSourceInput">SlugSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidentsInput">TestIncidentsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletion">AllowIncidentDeletion</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflows">AllowWorkflows</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessage">CreateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestamps">EditableTimestamps</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidents">PrivateIncidents</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefault">PrivateIncidentsByDefault</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSource">SlugSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidents">TestIncidents</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowIncidentDeletionInput`<sup>Optional</sup> <a name="AllowIncidentDeletionInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletionInput"></a>

```csharp
public bool|IResolvable AllowIncidentDeletionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowWorkflowsInput`<sup>Optional</sup> <a name="AllowWorkflowsInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflowsInput"></a>

```csharp
public bool|IResolvable AllowWorkflowsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreateMessageInput`<sup>Optional</sup> <a name="CreateMessageInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessageInput"></a>

```csharp
public string CreateMessageInput { get; }
```

- *Type:* string

---

##### `EditableTimestampsInput`<sup>Optional</sup> <a name="EditableTimestampsInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestampsInput"></a>

```csharp
public bool|IResolvable EditableTimestampsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrivateIncidentsByDefaultInput`<sup>Optional</sup> <a name="PrivateIncidentsByDefaultInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefaultInput"></a>

```csharp
public bool|IResolvable PrivateIncidentsByDefaultInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrivateIncidentsInput`<sup>Optional</sup> <a name="PrivateIncidentsInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsInput"></a>

```csharp
public bool|IResolvable PrivateIncidentsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SlugSourceInput`<sup>Optional</sup> <a name="SlugSourceInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSourceInput"></a>

```csharp
public string SlugSourceInput { get; }
```

- *Type:* string

---

##### `TestIncidentsInput`<sup>Optional</sup> <a name="TestIncidentsInput" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidentsInput"></a>

```csharp
public bool|IResolvable TestIncidentsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowIncidentDeletion`<sup>Required</sup> <a name="AllowIncidentDeletion" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowIncidentDeletion"></a>

```csharp
public bool|IResolvable AllowIncidentDeletion { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowWorkflows`<sup>Required</sup> <a name="AllowWorkflows" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.allowWorkflows"></a>

```csharp
public bool|IResolvable AllowWorkflows { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreateMessage`<sup>Required</sup> <a name="CreateMessage" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.createMessage"></a>

```csharp
public string CreateMessage { get; }
```

- *Type:* string

---

##### `EditableTimestamps`<sup>Required</sup> <a name="EditableTimestamps" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.editableTimestamps"></a>

```csharp
public bool|IResolvable EditableTimestamps { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrivateIncidents`<sup>Required</sup> <a name="PrivateIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidents"></a>

```csharp
public bool|IResolvable PrivateIncidents { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrivateIncidentsByDefault`<sup>Required</sup> <a name="PrivateIncidentsByDefault" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.privateIncidentsByDefault"></a>

```csharp
public bool|IResolvable PrivateIncidentsByDefault { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SlugSource`<sup>Required</sup> <a name="SlugSource" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.slugSource"></a>

```csharp
public string SlugSource { get; }
```

- *Type:* string

---

##### `TestIncidents`<sup>Required</sup> <a name="TestIncidents" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.testIncidents"></a>

```csharp
public bool|IResolvable TestIncidents { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.incidentType.IncidentTypeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IncidentTypeConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentType.IncidentTypeConfiguration">IncidentTypeConfiguration</a>

---



