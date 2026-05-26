# `onCallTeamRoutingRules` Submodule <a name="`onCallTeamRoutingRules` Submodule" id="@cdktn/provider-datadog.onCallTeamRoutingRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallTeamRoutingRules <a name="OnCallTeamRoutingRules" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules datadog_on_call_team_routing_rules}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRules(Construct Scope, string Id, OnCallTeamRoutingRulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig">OnCallTeamRoutingRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig">OnCallTeamRoutingRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.putRule"></a>

```csharp
private void PutRule(IResolvable|OnCallTeamRoutingRulesRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.putRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>[]

---

##### `ResetRule` <a name="ResetRule" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.resetRule"></a>

```csharp
private void ResetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OnCallTeamRoutingRules resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

OnCallTeamRoutingRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

OnCallTeamRoutingRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

OnCallTeamRoutingRules.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

OnCallTeamRoutingRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OnCallTeamRoutingRules resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OnCallTeamRoutingRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OnCallTeamRoutingRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OnCallTeamRoutingRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList">OnCallTeamRoutingRulesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.rule"></a>

```csharp
public OnCallTeamRoutingRulesRuleList Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList">OnCallTeamRoutingRulesRuleList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.ruleInput"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRule[] RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallTeamRoutingRulesConfig <a name="OnCallTeamRoutingRulesConfig" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id,
    IResolvable|OnCallTeamRoutingRulesRule[] Rule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.id">Id</a></code> | <code>string</code> | ID of the team to associate the routing rules with. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.rule">Rule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>[]</code> | rule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

ID of the team to associate the routing rules with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#id OnCallTeamRoutingRules#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesConfig.property.rule"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRule[] Rule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#rule OnCallTeamRoutingRules#rule}

---

### OnCallTeamRoutingRulesRule <a name="OnCallTeamRoutingRulesRule" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRule {
    IResolvable|OnCallTeamRoutingRulesRuleAction[] Action = null,
    string EscalationPolicy = null,
    string Query = null,
    OnCallTeamRoutingRulesRuleTimeRestrictions TimeRestrictions = null,
    string Urgency = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.action">Action</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>[]</code> | action block. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.escalationPolicy">EscalationPolicy</a></code> | <code>string</code> | ID of the policy to be applied when this routing rule matches. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.query">Query</a></code> | <code>string</code> | Defines the query or condition that triggers this routing rule. Defaults to `""`. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.timeRestrictions">TimeRestrictions</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a></code> | time_restrictions block. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.urgency">Urgency</a></code> | <code>string</code> | Defines the urgency for pages created via this rule. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.action"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleAction[] Action { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#action OnCallTeamRoutingRules#action}

---

##### `EscalationPolicy`<sup>Optional</sup> <a name="EscalationPolicy" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.escalationPolicy"></a>

```csharp
public string EscalationPolicy { get; set; }
```

- *Type:* string

ID of the policy to be applied when this routing rule matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#escalation_policy OnCallTeamRoutingRules#escalation_policy}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Defines the query or condition that triggers this routing rule. Defaults to `""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#query OnCallTeamRoutingRules#query}

---

##### `TimeRestrictions`<sup>Optional</sup> <a name="TimeRestrictions" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.timeRestrictions"></a>

```csharp
public OnCallTeamRoutingRulesRuleTimeRestrictions TimeRestrictions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a>

time_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#time_restrictions OnCallTeamRoutingRules#time_restrictions}

---

##### `Urgency`<sup>Optional</sup> <a name="Urgency" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule.property.urgency"></a>

```csharp
public string Urgency { get; set; }
```

- *Type:* string

Defines the urgency for pages created via this rule.

Only valid if `escalation_policy` is set. Valid values are `high`, `low`, `dynamic`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#urgency OnCallTeamRoutingRules#urgency}

---

### OnCallTeamRoutingRulesRuleAction <a name="OnCallTeamRoutingRulesRuleAction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleAction {
    OnCallTeamRoutingRulesRuleActionSendSlackMessage SendSlackMessage = null,
    OnCallTeamRoutingRulesRuleActionSendTeamsMessage SendTeamsMessage = null,
    OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation TriggerWorkflowAutomation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendSlackMessage">SendSlackMessage</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a></code> | send_slack_message block. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendTeamsMessage">SendTeamsMessage</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a></code> | send_teams_message block. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.triggerWorkflowAutomation">TriggerWorkflowAutomation</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation</a></code> | trigger_workflow_automation block. |

---

##### `SendSlackMessage`<sup>Optional</sup> <a name="SendSlackMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendSlackMessage"></a>

```csharp
public OnCallTeamRoutingRulesRuleActionSendSlackMessage SendSlackMessage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a>

send_slack_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#send_slack_message OnCallTeamRoutingRules#send_slack_message}

---

##### `SendTeamsMessage`<sup>Optional</sup> <a name="SendTeamsMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.sendTeamsMessage"></a>

```csharp
public OnCallTeamRoutingRulesRuleActionSendTeamsMessage SendTeamsMessage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a>

send_teams_message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#send_teams_message OnCallTeamRoutingRules#send_teams_message}

---

##### `TriggerWorkflowAutomation`<sup>Optional</sup> <a name="TriggerWorkflowAutomation" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction.property.triggerWorkflowAutomation"></a>

```csharp
public OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation TriggerWorkflowAutomation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation</a>

trigger_workflow_automation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#trigger_workflow_automation OnCallTeamRoutingRules#trigger_workflow_automation}

---

### OnCallTeamRoutingRulesRuleActionSendSlackMessage <a name="OnCallTeamRoutingRulesRuleActionSendSlackMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleActionSendSlackMessage {
    string Channel = null,
    string Workspace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.channel">Channel</a></code> | <code>string</code> | Slack channel ID. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.workspace">Workspace</a></code> | <code>string</code> | Slack workspace ID. |

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

Slack channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#channel OnCallTeamRoutingRules#channel}

---

##### `Workspace`<sup>Optional</sup> <a name="Workspace" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage.property.workspace"></a>

```csharp
public string Workspace { get; set; }
```

- *Type:* string

Slack workspace ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#workspace OnCallTeamRoutingRules#workspace}

---

### OnCallTeamRoutingRulesRuleActionSendTeamsMessage <a name="OnCallTeamRoutingRulesRuleActionSendTeamsMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleActionSendTeamsMessage {
    string Channel = null,
    string Team = null,
    string Tenant = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.channel">Channel</a></code> | <code>string</code> | Teams channel ID. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.team">Team</a></code> | <code>string</code> | Teams team ID. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.tenant">Tenant</a></code> | <code>string</code> | Teams tenant ID. |

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

Teams channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#channel OnCallTeamRoutingRules#channel}

---

##### `Team`<sup>Optional</sup> <a name="Team" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.team"></a>

```csharp
public string Team { get; set; }
```

- *Type:* string

Teams team ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#team OnCallTeamRoutingRules#team}

---

##### `Tenant`<sup>Optional</sup> <a name="Tenant" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage.property.tenant"></a>

```csharp
public string Tenant { get; set; }
```

- *Type:* string

Teams tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#tenant OnCallTeamRoutingRules#tenant}

---

### OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation <a name="OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation {
    string Handle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation.property.handle">Handle</a></code> | <code>string</code> | The handle of the Workflow Automation to trigger. |

---

##### `Handle`<sup>Optional</sup> <a name="Handle" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation.property.handle"></a>

```csharp
public string Handle { get; set; }
```

- *Type:* string

The handle of the Workflow Automation to trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#handle OnCallTeamRoutingRules#handle}

---

### OnCallTeamRoutingRulesRuleTimeRestrictions <a name="OnCallTeamRoutingRulesRuleTimeRestrictions" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleTimeRestrictions {
    IResolvable|OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction[] Restriction = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.restriction">Restriction</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>[]</code> | restriction block. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.timeZone">TimeZone</a></code> | <code>string</code> | Specifies the time zone applicable to the restrictions, e.g. `America/New_York`. |

---

##### `Restriction`<sup>Optional</sup> <a name="Restriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.restriction"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction[] Restriction { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>[]

restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#restriction OnCallTeamRoutingRules#restriction}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Specifies the time zone applicable to the restrictions, e.g. `America/New_York`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#time_zone OnCallTeamRoutingRules#time_zone}

---

### OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction {
    string EndDay = null,
    string EndTime = null,
    string StartDay = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endDay">EndDay</a></code> | <code>string</code> | The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endTime">EndTime</a></code> | <code>string</code> | The time of day when the restriction ends (hh:mm:ss). |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startDay">StartDay</a></code> | <code>string</code> | The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startTime">StartTime</a></code> | <code>string</code> | The time of day when the restriction begins (hh:mm:ss). |

---

##### `EndDay`<sup>Optional</sup> <a name="EndDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endDay"></a>

```csharp
public string EndDay { get; set; }
```

- *Type:* string

The weekday when the restriction period ends. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#end_day OnCallTeamRoutingRules#end_day}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The time of day when the restriction ends (hh:mm:ss).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#end_time OnCallTeamRoutingRules#end_time}

---

##### `StartDay`<sup>Optional</sup> <a name="StartDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startDay"></a>

```csharp
public string StartDay { get; set; }
```

- *Type:* string

The weekday when the restriction period starts. Valid values are `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#start_day OnCallTeamRoutingRules#start_day}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The time of day when the restriction begins (hh:mm:ss).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_team_routing_rules#start_time OnCallTeamRoutingRules#start_time}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallTeamRoutingRulesRuleActionList <a name="OnCallTeamRoutingRulesRuleActionList" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.get"></a>

```csharp
private OnCallTeamRoutingRulesRuleActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList.property.internalValue"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleAction[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>[]

---


### OnCallTeamRoutingRulesRuleActionOutputReference <a name="OnCallTeamRoutingRulesRuleActionOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendSlackMessage">PutSendSlackMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendTeamsMessage">PutSendTeamsMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putTriggerWorkflowAutomation">PutTriggerWorkflowAutomation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendSlackMessage">ResetSendSlackMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendTeamsMessage">ResetSendTeamsMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetTriggerWorkflowAutomation">ResetTriggerWorkflowAutomation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSendSlackMessage` <a name="PutSendSlackMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendSlackMessage"></a>

```csharp
private void PutSendSlackMessage(OnCallTeamRoutingRulesRuleActionSendSlackMessage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendSlackMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a>

---

##### `PutSendTeamsMessage` <a name="PutSendTeamsMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendTeamsMessage"></a>

```csharp
private void PutSendTeamsMessage(OnCallTeamRoutingRulesRuleActionSendTeamsMessage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putSendTeamsMessage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a>

---

##### `PutTriggerWorkflowAutomation` <a name="PutTriggerWorkflowAutomation" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putTriggerWorkflowAutomation"></a>

```csharp
private void PutTriggerWorkflowAutomation(OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.putTriggerWorkflowAutomation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation</a>

---

##### `ResetSendSlackMessage` <a name="ResetSendSlackMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendSlackMessage"></a>

```csharp
private void ResetSendSlackMessage()
```

##### `ResetSendTeamsMessage` <a name="ResetSendTeamsMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetSendTeamsMessage"></a>

```csharp
private void ResetSendTeamsMessage()
```

##### `ResetTriggerWorkflowAutomation` <a name="ResetTriggerWorkflowAutomation" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.resetTriggerWorkflowAutomation"></a>

```csharp
private void ResetTriggerWorkflowAutomation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessage">SendSlackMessage</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessage">SendTeamsMessage</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.triggerWorkflowAutomation">TriggerWorkflowAutomation</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessageInput">SendSlackMessageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessageInput">SendTeamsMessageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.triggerWorkflowAutomationInput">TriggerWorkflowAutomationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SendSlackMessage`<sup>Required</sup> <a name="SendSlackMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessage"></a>

```csharp
public OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference SendSlackMessage { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference</a>

---

##### `SendTeamsMessage`<sup>Required</sup> <a name="SendTeamsMessage" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessage"></a>

```csharp
public OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference SendTeamsMessage { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference">OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference</a>

---

##### `TriggerWorkflowAutomation`<sup>Required</sup> <a name="TriggerWorkflowAutomation" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.triggerWorkflowAutomation"></a>

```csharp
public OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference TriggerWorkflowAutomation { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference</a>

---

##### `SendSlackMessageInput`<sup>Optional</sup> <a name="SendSlackMessageInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendSlackMessageInput"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleActionSendSlackMessage SendSlackMessageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a>

---

##### `SendTeamsMessageInput`<sup>Optional</sup> <a name="SendTeamsMessageInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.sendTeamsMessageInput"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleActionSendTeamsMessage SendTeamsMessageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a>

---

##### `TriggerWorkflowAutomationInput`<sup>Optional</sup> <a name="TriggerWorkflowAutomationInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.triggerWorkflowAutomationInput"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation TriggerWorkflowAutomationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>

---


### OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference <a name="OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetWorkspace">ResetWorkspace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannel` <a name="ResetChannel" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetChannel"></a>

```csharp
private void ResetChannel()
```

##### `ResetWorkspace` <a name="ResetWorkspace" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.resetWorkspace"></a>

```csharp
private void ResetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspace">Workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspaceInput"></a>

```csharp
public string WorkspaceInput { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.workspace"></a>

```csharp
public string Workspace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleActionSendSlackMessage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendSlackMessage">OnCallTeamRoutingRulesRuleActionSendSlackMessage</a>

---


### OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference <a name="OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTeam">ResetTeam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTenant">ResetTenant</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannel` <a name="ResetChannel" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetChannel"></a>

```csharp
private void ResetChannel()
```

##### `ResetTeam` <a name="ResetTeam" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTeam"></a>

```csharp
private void ResetTeam()
```

##### `ResetTenant` <a name="ResetTenant" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.resetTenant"></a>

```csharp
private void ResetTenant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.teamInput">TeamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenantInput">TenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.team">Team</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenant">Tenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `TeamInput`<sup>Optional</sup> <a name="TeamInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.teamInput"></a>

```csharp
public string TeamInput { get; }
```

- *Type:* string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenantInput"></a>

```csharp
public string TenantInput { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `Team`<sup>Required</sup> <a name="Team" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.team"></a>

```csharp
public string Team { get; }
```

- *Type:* string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.tenant"></a>

```csharp
public string Tenant { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleActionSendTeamsMessage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionSendTeamsMessage">OnCallTeamRoutingRulesRuleActionSendTeamsMessage</a>

---


### OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference <a name="OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.resetHandle">ResetHandle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHandle` <a name="ResetHandle" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.resetHandle"></a>

```csharp
private void ResetHandle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.handleInput">HandleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.handle">Handle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HandleInput`<sup>Optional</sup> <a name="HandleInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.handleInput"></a>

```csharp
public string HandleInput { get; }
```

- *Type:* string

---

##### `Handle`<sup>Required</sup> <a name="Handle" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.handle"></a>

```csharp
public string Handle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation">OnCallTeamRoutingRulesRuleActionTriggerWorkflowAutomation</a>

---


### OnCallTeamRoutingRulesRuleList <a name="OnCallTeamRoutingRulesRuleList" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.get"></a>

```csharp
private OnCallTeamRoutingRulesRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleList.property.internalValue"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>[]

---


### OnCallTeamRoutingRulesRuleOutputReference <a name="OnCallTeamRoutingRulesRuleOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putTimeRestrictions">PutTimeRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetEscalationPolicy">ResetEscalationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetTimeRestrictions">ResetTimeRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetUrgency">ResetUrgency</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putAction"></a>

```csharp
private void PutAction(IResolvable|OnCallTeamRoutingRulesRuleAction[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putAction.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>[]

---

##### `PutTimeRestrictions` <a name="PutTimeRestrictions" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putTimeRestrictions"></a>

```csharp
private void PutTimeRestrictions(OnCallTeamRoutingRulesRuleTimeRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.putTimeRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetEscalationPolicy` <a name="ResetEscalationPolicy" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetEscalationPolicy"></a>

```csharp
private void ResetEscalationPolicy()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```

##### `ResetTimeRestrictions` <a name="ResetTimeRestrictions" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetTimeRestrictions"></a>

```csharp
private void ResetTimeRestrictions()
```

##### `ResetUrgency` <a name="ResetUrgency" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.resetUrgency"></a>

```csharp
private void ResetUrgency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList">OnCallTeamRoutingRulesRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictions">TimeRestrictions</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference">OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicyInput">EscalationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictionsInput">TimeRestrictionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgencyInput">UrgencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicy">EscalationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgency">Urgency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.action"></a>

```csharp
public OnCallTeamRoutingRulesRuleActionList Action { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleActionList">OnCallTeamRoutingRulesRuleActionList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TimeRestrictions`<sup>Required</sup> <a name="TimeRestrictions" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictions"></a>

```csharp
public OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference TimeRestrictions { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference">OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.actionInput"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleAction[] ActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleAction">OnCallTeamRoutingRulesRuleAction</a>[]

---

##### `EscalationPolicyInput`<sup>Optional</sup> <a name="EscalationPolicyInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicyInput"></a>

```csharp
public string EscalationPolicyInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `TimeRestrictionsInput`<sup>Optional</sup> <a name="TimeRestrictionsInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.timeRestrictionsInput"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleTimeRestrictions TimeRestrictionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a>

---

##### `UrgencyInput`<sup>Optional</sup> <a name="UrgencyInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgencyInput"></a>

```csharp
public string UrgencyInput { get; }
```

- *Type:* string

---

##### `EscalationPolicy`<sup>Required</sup> <a name="EscalationPolicy" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.escalationPolicy"></a>

```csharp
public string EscalationPolicy { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `Urgency`<sup>Required</sup> <a name="Urgency" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.urgency"></a>

```csharp
public string Urgency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRule">OnCallTeamRoutingRulesRule</a>

---


### OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.putRestriction">PutRestriction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetRestriction">ResetRestriction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRestriction` <a name="PutRestriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.putRestriction"></a>

```csharp
private void PutRestriction(IResolvable|OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.putRestriction.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>[]

---

##### `ResetRestriction` <a name="ResetRestriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetRestriction"></a>

```csharp
private void ResetRestriction()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restriction">Restriction</a></code> | <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList">OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restrictionInput">RestrictionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Restriction`<sup>Required</sup> <a name="Restriction" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restriction"></a>

```csharp
public OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList Restriction { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList">OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList</a>

---

##### `RestrictionInput`<sup>Optional</sup> <a name="RestrictionInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.restrictionInput"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction[] RestrictionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>[]

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleTimeRestrictions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictions">OnCallTeamRoutingRulesRuleTimeRestrictions</a>

---


### OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.get"></a>

```csharp
private OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionList.property.internalValue"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>[]

---


### OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference <a name="OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndDay">ResetEndDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartDay">ResetStartDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndDay` <a name="ResetEndDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndDay"></a>

```csharp
private void ResetEndDay()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartDay` <a name="ResetStartDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartDay"></a>

```csharp
private void ResetStartDay()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDayInput">EndDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDayInput">StartDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDay">EndDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDay">StartDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndDayInput`<sup>Optional</sup> <a name="EndDayInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDayInput"></a>

```csharp
public string EndDayInput { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartDayInput`<sup>Optional</sup> <a name="StartDayInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDayInput"></a>

```csharp
public string StartDayInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndDay`<sup>Required</sup> <a name="EndDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endDay"></a>

```csharp
public string EndDay { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartDay`<sup>Required</sup> <a name="StartDay" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startDay"></a>

```csharp
public string StartDay { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestrictionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallTeamRoutingRules.OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction">OnCallTeamRoutingRulesRuleTimeRestrictionsRestriction</a>

---



