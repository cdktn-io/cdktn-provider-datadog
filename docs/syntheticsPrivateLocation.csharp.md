# `syntheticsPrivateLocation` Submodule <a name="`syntheticsPrivateLocation` Submodule" id="@cdktn/provider-datadog.syntheticsPrivateLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsPrivateLocation <a name="SyntheticsPrivateLocation" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_private_location datadog_synthetics_private_location}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SyntheticsPrivateLocation(Construct Scope, string Id, SyntheticsPrivateLocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig">SyntheticsPrivateLocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig">SyntheticsPrivateLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.putMetadata"></a>

```csharp
private void PutMetadata(IResolvable|SyntheticsPrivateLocationMetadata[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.putMetadata.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>[]

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SyntheticsPrivateLocation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SyntheticsPrivateLocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SyntheticsPrivateLocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SyntheticsPrivateLocation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SyntheticsPrivateLocation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SyntheticsPrivateLocation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsPrivateLocation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsPrivateLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_private_location#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SyntheticsPrivateLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.config">Config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList">SyntheticsPrivateLocationMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.restrictionPolicyResourceId">RestrictionPolicyResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.metadataInput">MetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.config"></a>

```csharp
public string Config { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.metadata"></a>

```csharp
public SyntheticsPrivateLocationMetadataList Metadata { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList">SyntheticsPrivateLocationMetadataList</a>

---

##### `RestrictionPolicyResourceId`<sup>Required</sup> <a name="RestrictionPolicyResourceId" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.restrictionPolicyResourceId"></a>

```csharp
public string RestrictionPolicyResourceId { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.metadataInput"></a>

```csharp
public IResolvable|SyntheticsPrivateLocationMetadata[] MetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsPrivateLocationConfig <a name="SyntheticsPrivateLocationConfig" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SyntheticsPrivateLocationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ApiKey = null,
    string Description = null,
    IResolvable|SyntheticsPrivateLocationMetadata[] Metadata = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.name">Name</a></code> | <code>string</code> | Synthetics private location name. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | API key used to generate the private location configuration. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.description">Description</a></code> | <code>string</code> | Description of the private location. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.metadata">Metadata</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>[]</code> | metadata block. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tags to associate with your synthetics private location. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Synthetics private location name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_private_location#name SyntheticsPrivateLocation#name}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

API key used to generate the private location configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_private_location#api_key SyntheticsPrivateLocation#api_key}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the private location. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_private_location#description SyntheticsPrivateLocation#description}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.metadata"></a>

```csharp
public IResolvable|SyntheticsPrivateLocationMetadata[] Metadata { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>[]

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_private_location#metadata SyntheticsPrivateLocation#metadata}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tags to associate with your synthetics private location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_private_location#tags SyntheticsPrivateLocation#tags}

---

### SyntheticsPrivateLocationMetadata <a name="SyntheticsPrivateLocationMetadata" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SyntheticsPrivateLocationMetadata {
    string[] RestrictedRoles = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata.property.restrictedRoles">RestrictedRoles</a></code> | <code>string[]</code> | A set of role identifiers pulled from the Roles API to restrict read and write access. |

---

##### `RestrictedRoles`<sup>Optional</sup> <a name="RestrictedRoles" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata.property.restrictedRoles"></a>

```csharp
public string[] RestrictedRoles { get; set; }
```

- *Type:* string[]

A set of role identifiers pulled from the Roles API to restrict read and write access.

**Deprecated.** This field is no longer supported by the Datadog API. Please use `datadog_restriction_policy` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/synthetics_private_location#restricted_roles SyntheticsPrivateLocation#restricted_roles}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsPrivateLocationMetadataList <a name="SyntheticsPrivateLocationMetadataList" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SyntheticsPrivateLocationMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.get"></a>

```csharp
private SyntheticsPrivateLocationMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataList.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsPrivateLocationMetadata[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>[]

---


### SyntheticsPrivateLocationMetadataOutputReference <a name="SyntheticsPrivateLocationMetadataOutputReference" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SyntheticsPrivateLocationMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.resetRestrictedRoles">ResetRestrictedRoles</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRestrictedRoles` <a name="ResetRestrictedRoles" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.resetRestrictedRoles"></a>

```csharp
private void ResetRestrictedRoles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.restrictedRolesInput">RestrictedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.restrictedRoles">RestrictedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RestrictedRolesInput`<sup>Optional</sup> <a name="RestrictedRolesInput" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.restrictedRolesInput"></a>

```csharp
public string[] RestrictedRolesInput { get; }
```

- *Type:* string[]

---

##### `RestrictedRoles`<sup>Required</sup> <a name="RestrictedRoles" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.restrictedRoles"></a>

```csharp
public string[] RestrictedRoles { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SyntheticsPrivateLocationMetadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.syntheticsPrivateLocation.SyntheticsPrivateLocationMetadata">SyntheticsPrivateLocationMetadata</a>

---



