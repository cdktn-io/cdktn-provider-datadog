# `incidentUserDefinedRole` Submodule <a name="`incidentUserDefinedRole` Submodule" id="@cdktn/provider-datadog.incidentUserDefinedRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentUserDefinedRole <a name="IncidentUserDefinedRole" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role datadog_incident_user_defined_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentUserDefinedRole(Construct Scope, string Id, IncidentUserDefinedRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig">IncidentUserDefinedRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig">IncidentUserDefinedRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.resetPolicy">ResetPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicy` <a name="PutPolicy" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.putPolicy"></a>

```csharp
private void PutPolicy(IncidentUserDefinedRolePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.putPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IncidentUserDefinedRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentUserDefinedRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentUserDefinedRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentUserDefinedRole.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentUserDefinedRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IncidentUserDefinedRole resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentUserDefinedRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentUserDefinedRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IncidentUserDefinedRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.modified">Modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference">IncidentUserDefinedRolePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.incidentTypeInput">IncidentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.policyInput">PolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.incidentType">IncidentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.modified"></a>

```csharp
public string Modified { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.policy"></a>

```csharp
public IncidentUserDefinedRolePolicyOutputReference Policy { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference">IncidentUserDefinedRolePolicyOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IncidentTypeInput`<sup>Optional</sup> <a name="IncidentTypeInput" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.incidentTypeInput"></a>

```csharp
public string IncidentTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.policyInput"></a>

```csharp
public IResolvable|IncidentUserDefinedRolePolicy PolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.incidentType"></a>

```csharp
public string IncidentType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentUserDefinedRoleConfig <a name="IncidentUserDefinedRoleConfig" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentUserDefinedRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IncidentType,
    string Name,
    string Description = null,
    IncidentUserDefinedRolePolicy Policy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.incidentType">IncidentType</a></code> | <code>string</code> | The ID of the incident type this user-defined role is associated with. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.name">Name</a></code> | <code>string</code> | The name of the user-defined role. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.description">Description</a></code> | <code>string</code> | A description of the user-defined role. At most 1024 characters. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a></code> | Policy configuration for the user-defined role. Defaults to a multi-assignee policy when omitted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.incidentType"></a>

```csharp
public string IncidentType { get; set; }
```

- *Type:* string

The ID of the incident type this user-defined role is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#incident_type IncidentUserDefinedRole#incident_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the user-defined role.

Cannot be a reserved name ("Incident Commander" or "Responder") and must be at most 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#name IncidentUserDefinedRole#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the user-defined role. At most 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#description IncidentUserDefinedRole#description}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRoleConfig.property.policy"></a>

```csharp
public IncidentUserDefinedRolePolicy Policy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a>

Policy configuration for the user-defined role. Defaults to a multi-assignee policy when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#policy IncidentUserDefinedRole#policy}

---

### IncidentUserDefinedRolePolicy <a name="IncidentUserDefinedRolePolicy" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentUserDefinedRolePolicy {
    bool|IResolvable IsSingle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy.property.isSingle">IsSingle</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this role can only be assigned to one responder at a time. Defaults to `false`. |

---

##### `IsSingle`<sup>Optional</sup> <a name="IsSingle" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy.property.isSingle"></a>

```csharp
public bool|IResolvable IsSingle { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this role can only be assigned to one responder at a time. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_user_defined_role#is_single IncidentUserDefinedRole#is_single}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentUserDefinedRolePolicyOutputReference <a name="IncidentUserDefinedRolePolicyOutputReference" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentUserDefinedRolePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.resetIsSingle">ResetIsSingle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsSingle` <a name="ResetIsSingle" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.resetIsSingle"></a>

```csharp
private void ResetIsSingle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.isSingleInput">IsSingleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.isSingle">IsSingle</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsSingleInput`<sup>Optional</sup> <a name="IsSingleInput" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.isSingleInput"></a>

```csharp
public bool|IResolvable IsSingleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsSingle`<sup>Required</sup> <a name="IsSingle" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.isSingle"></a>

```csharp
public bool|IResolvable IsSingle { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IncidentUserDefinedRolePolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentUserDefinedRole.IncidentUserDefinedRolePolicy">IncidentUserDefinedRolePolicy</a>

---



