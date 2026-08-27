# `incidentUserDefinedField` Submodule <a name="`incidentUserDefinedField` Submodule" id="@cdktn/provider-datadog.incidentUserDefinedField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentUserDefinedField <a name="IncidentUserDefinedField" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field datadog_incident_user_defined_field}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentUserDefinedField(Construct Scope, string Id, IncidentUserDefinedFieldConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig">IncidentUserDefinedFieldConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig">IncidentUserDefinedFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue">PutValidValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOrdinal">ResetOrdinal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetValidValue">ResetValidValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutValidValue` <a name="PutValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue"></a>

```csharp
private void PutValidValue(IResolvable|IncidentUserDefinedFieldValidValue[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>[]

---

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetCategory"></a>

```csharp
private void ResetCategory()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDefaultValue"></a>

```csharp
private void ResetDefaultValue()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetOrdinal` <a name="ResetOrdinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOrdinal"></a>

```csharp
private void ResetOrdinal()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetTagKey"></a>

```csharp
private void ResetTagKey()
```

##### `ResetValidValue` <a name="ResetValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetValidValue"></a>

```csharp
private void ResetValidValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IncidentUserDefinedField resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentUserDefinedField.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentUserDefinedField.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentUserDefinedField.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

IncidentUserDefinedField.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IncidentUserDefinedField resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IncidentUserDefinedField to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IncidentUserDefinedField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IncidentUserDefinedField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.deleted">Deleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference">IncidentUserDefinedFieldMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.modified">Modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.reserved">Reserved</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValue">ValidValue</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList">IncidentUserDefinedFieldValidValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValueInput">DefaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentTypeInput">IncidentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinalInput">OrdinalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.requiredInput">RequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValueInput">ValidValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentType">IncidentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinal">Ordinal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.deleted"></a>

```csharp
public string Deleted { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.metadata"></a>

```csharp
public IncidentUserDefinedFieldMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference">IncidentUserDefinedFieldMetadataOutputReference</a>

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.modified"></a>

```csharp
public string Modified { get; }
```

- *Type:* string

---

##### `Reserved`<sup>Required</sup> <a name="Reserved" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.reserved"></a>

```csharp
public IResolvable Reserved { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ValidValue`<sup>Required</sup> <a name="ValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValue"></a>

```csharp
public IncidentUserDefinedFieldValidValueList ValidValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList">IncidentUserDefinedFieldValidValueList</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValueInput"></a>

```csharp
public string DefaultValueInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IncidentTypeInput`<sup>Optional</sup> <a name="IncidentTypeInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentTypeInput"></a>

```csharp
public string IncidentTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrdinalInput`<sup>Optional</sup> <a name="OrdinalInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinalInput"></a>

```csharp
public string OrdinalInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.requiredInput"></a>

```csharp
public bool|IResolvable RequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValidValueInput`<sup>Optional</sup> <a name="ValidValueInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValueInput"></a>

```csharp
public IResolvable|IncidentUserDefinedFieldValidValue[] ValidValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>[]

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentType"></a>

```csharp
public string IncidentType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ordinal`<sup>Required</sup> <a name="Ordinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinal"></a>

```csharp
public string Ordinal { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.required"></a>

```csharp
public bool|IResolvable Required { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentUserDefinedFieldConfig <a name="IncidentUserDefinedFieldConfig" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentUserDefinedFieldConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IncidentType,
    string Name,
    string Type,
    string Category = null,
    string DefaultValue = null,
    string DisplayName = null,
    string Ordinal = null,
    bool|IResolvable Required = null,
    string TagKey = null,
    IResolvable|IncidentUserDefinedFieldValidValue[] ValidValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.incidentType">IncidentType</a></code> | <code>string</code> | The ID of the incident type this field is associated with. Changing the incident type forces a new resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.name">Name</a></code> | <code>string</code> | The unique identifier of the field. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.type">Type</a></code> | <code>string</code> | The data type of the field. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.category">Category</a></code> | <code>string</code> | The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.defaultValue">DefaultValue</a></code> | <code>string</code> | The default value for the field. Must be one of the valid values when `valid_values` is set. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.ordinal">Ordinal</a></code> | <code>string</code> | A decimal string representing the field's display order in the UI. Assigned by the server when not provided. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, users must fill out this field on incidents. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.tagKey">TagKey</a></code> | <code>string</code> | For metric tag-type fields only, the metric tag key that powers the autocomplete options. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.validValue">ValidValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>[]</code> | valid_value block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.incidentType"></a>

```csharp
public string IncidentType { get; set; }
```

- *Type:* string

The ID of the incident type this field is associated with. Changing the incident type forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#incident_type IncidentUserDefinedField#incident_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The unique identifier of the field.

Must start with a letter or digit and contain only letters, digits, underscores, or periods. Changing the name forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#name IncidentUserDefinedField#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The data type of the field.

Changing the type forces a new resource. Valid values are `dropdown`, `multiselect`, `textbox`, `textarray`, `metrictag`, `autocomplete`, `number`, `datetime`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#type IncidentUserDefinedField#type}

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#category IncidentUserDefinedField#category}

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.defaultValue"></a>

```csharp
public string DefaultValue { get; set; }
```

- *Type:* string

The default value for the field. Must be one of the valid values when `valid_values` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#default_value IncidentUserDefinedField#default_value}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#display_name IncidentUserDefinedField#display_name}

---

##### `Ordinal`<sup>Optional</sup> <a name="Ordinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.ordinal"></a>

```csharp
public string Ordinal { get; set; }
```

- *Type:* string

A decimal string representing the field's display order in the UI. Assigned by the server when not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#ordinal IncidentUserDefinedField#ordinal}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.required"></a>

```csharp
public bool|IResolvable Required { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, users must fill out this field on incidents. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#required IncidentUserDefinedField#required}

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

For metric tag-type fields only, the metric tag key that powers the autocomplete options.

Changing the tag key forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#tag_key IncidentUserDefinedField#tag_key}

---

##### `ValidValue`<sup>Optional</sup> <a name="ValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.validValue"></a>

```csharp
public IResolvable|IncidentUserDefinedFieldValidValue[] ValidValue { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>[]

valid_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#valid_value IncidentUserDefinedField#valid_value}

---

### IncidentUserDefinedFieldMetadata <a name="IncidentUserDefinedFieldMetadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentUserDefinedFieldMetadata {

};
```


### IncidentUserDefinedFieldValidValue <a name="IncidentUserDefinedFieldValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentUserDefinedFieldValidValue {
    string DisplayName,
    string Value,
    string Description = null,
    string ShortDescription = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable display name for this value. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.value">Value</a></code> | <code>string</code> | The identifier that is stored when this option is selected. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.description">Description</a></code> | <code>string</code> | A detailed description of the valid value. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.shortDescription">ShortDescription</a></code> | <code>string</code> | A short description of the valid value. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable display name for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#display_name IncidentUserDefinedField#display_name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The identifier that is stored when this option is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#value IncidentUserDefinedField#value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A detailed description of the valid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#description IncidentUserDefinedField#description}

---

##### `ShortDescription`<sup>Optional</sup> <a name="ShortDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.shortDescription"></a>

```csharp
public string ShortDescription { get; set; }
```

- *Type:* string

A short description of the valid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.19.0/docs/resources/incident_user_defined_field#short_description IncidentUserDefinedField#short_description}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentUserDefinedFieldMetadataOutputReference <a name="IncidentUserDefinedFieldMetadataOutputReference" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentUserDefinedFieldMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchLimitParam">SearchLimitParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchParams">SearchParams</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchQueryParam">SearchQueryParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchResultPath">SearchResultPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchUrl">SearchUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata">IncidentUserDefinedFieldMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `SearchLimitParam`<sup>Required</sup> <a name="SearchLimitParam" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchLimitParam"></a>

```csharp
public string SearchLimitParam { get; }
```

- *Type:* string

---

##### `SearchParams`<sup>Required</sup> <a name="SearchParams" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchParams"></a>

```csharp
public StringMap SearchParams { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `SearchQueryParam`<sup>Required</sup> <a name="SearchQueryParam" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchQueryParam"></a>

```csharp
public string SearchQueryParam { get; }
```

- *Type:* string

---

##### `SearchResultPath`<sup>Required</sup> <a name="SearchResultPath" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchResultPath"></a>

```csharp
public string SearchResultPath { get; }
```

- *Type:* string

---

##### `SearchUrl`<sup>Required</sup> <a name="SearchUrl" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchUrl"></a>

```csharp
public string SearchUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.internalValue"></a>

```csharp
public IncidentUserDefinedFieldMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata">IncidentUserDefinedFieldMetadata</a>

---


### IncidentUserDefinedFieldValidValueList <a name="IncidentUserDefinedFieldValidValueList" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentUserDefinedFieldValidValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get"></a>

```csharp
private IncidentUserDefinedFieldValidValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.internalValue"></a>

```csharp
public IResolvable|IncidentUserDefinedFieldValidValue[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>[]

---


### IncidentUserDefinedFieldValidValueOutputReference <a name="IncidentUserDefinedFieldValidValueOutputReference" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new IncidentUserDefinedFieldValidValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetShortDescription">ResetShortDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetShortDescription` <a name="ResetShortDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetShortDescription"></a>

```csharp
private void ResetShortDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescriptionInput">ShortDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescription">ShortDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ShortDescriptionInput`<sup>Optional</sup> <a name="ShortDescriptionInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescriptionInput"></a>

```csharp
public string ShortDescriptionInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescription"></a>

```csharp
public string ShortDescription { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IncidentUserDefinedFieldValidValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue">IncidentUserDefinedFieldValidValue</a>

---



