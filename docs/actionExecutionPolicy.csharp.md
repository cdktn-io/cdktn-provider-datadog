# `actionExecutionPolicy` Submodule <a name="`actionExecutionPolicy` Submodule" id="@cdktn/provider-datadog.actionExecutionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionExecutionPolicy <a name="ActionExecutionPolicy" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy datadog_action_execution_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicy(Construct Scope, string Id, ActionExecutionPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig">ActionExecutionPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig">ActionExecutionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern">PutActionPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionPattern` <a name="PutActionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern"></a>

```csharp
private void PutActionPattern(ActionExecutionPolicyActionPattern Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putActionPattern.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope"></a>

```csharp
private void PutScope(ActionExecutionPolicyScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget"></a>

```csharp
private void PutTarget(IResolvable|ActionExecutionPolicyTarget[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.putTarget.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>[]

---

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.resetTarget"></a>

```csharp
private void ResetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ActionExecutionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

ActionExecutionPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

ActionExecutionPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

ActionExecutionPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

ActionExecutionPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ActionExecutionPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionExecutionPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionExecutionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ActionExecutionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPattern">ActionPattern</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference">ActionExecutionPolicyActionPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference">ActionExecutionPolicyScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.target">Target</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList">ActionExecutionPolicyTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPatternInput">ActionPatternInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scopeInput">ScopeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.targetInput">TargetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActionPattern`<sup>Required</sup> <a name="ActionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPattern"></a>

```csharp
public ActionExecutionPolicyActionPatternOutputReference ActionPattern { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference">ActionExecutionPolicyActionPatternOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scope"></a>

```csharp
public ActionExecutionPolicyScopeOutputReference Scope { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference">ActionExecutionPolicyScopeOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.target"></a>

```csharp
public ActionExecutionPolicyTargetList Target { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList">ActionExecutionPolicyTargetList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `ActionPatternInput`<sup>Optional</sup> <a name="ActionPatternInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.actionPatternInput"></a>

```csharp
public IResolvable|ActionExecutionPolicyActionPattern ActionPatternInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.scopeInput"></a>

```csharp
public IResolvable|ActionExecutionPolicyScope ScopeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.targetInput"></a>

```csharp
public IResolvable|ActionExecutionPolicyTarget[] TargetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>[]

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionExecutionPolicyActionPattern <a name="ActionExecutionPolicyActionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyActionPattern {
    string[] ActionFqns,
    string Integration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.actionFqns">ActionFqns</a></code> | <code>string[]</code> | The fully qualified action names this policy matches. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.integration">Integration</a></code> | <code>string</code> | The integration the actions belong to. Valid values are `INTEGRATION_KUBERNETES`, `INTEGRATION_SCRIPT`, `INTEGRATION_REMOTE_ACTION`. |

---

##### `ActionFqns`<sup>Required</sup> <a name="ActionFqns" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.actionFqns"></a>

```csharp
public string[] ActionFqns { get; set; }
```

- *Type:* string[]

The fully qualified action names this policy matches.

Use `*` to match all actions of the integration, or a fully qualified name prefixed with the integration's action namespace (for example `com.datadoghq.script.*` for the Script integration).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_fqns ActionExecutionPolicy#action_fqns}

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern.property.integration"></a>

```csharp
public string Integration { get; set; }
```

- *Type:* string

The integration the actions belong to. Valid values are `INTEGRATION_KUBERNETES`, `INTEGRATION_SCRIPT`, `INTEGRATION_REMOTE_ACTION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#integration ActionExecutionPolicy#integration}

---

### ActionExecutionPolicyConfig <a name="ActionExecutionPolicyConfig" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ActionExecutionPolicyActionPattern ActionPattern,
    string Effect,
    string Name,
    ActionExecutionPolicyScope Scope = null,
    IResolvable|ActionExecutionPolicyTarget[] Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.actionPattern">ActionPattern</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | action_pattern block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.effect">Effect</a></code> | <code>string</code> | Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.name">Name</a></code> | <code>string</code> | The name of the execution policy. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.target">Target</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>[]</code> | target block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActionPattern`<sup>Required</sup> <a name="ActionPattern" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.actionPattern"></a>

```csharp
public ActionExecutionPolicyActionPattern ActionPattern { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

action_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#action_pattern ActionExecutionPolicy#action_pattern}

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

Whether the policy allows or denies the matched actions. Valid values are `allow`, `deny`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#effect ActionExecutionPolicy#effect}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the execution policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#name ActionExecutionPolicy#name}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.scope"></a>

```csharp
public ActionExecutionPolicyScope Scope { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scope ActionExecutionPolicy#scope}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyConfig.property.target"></a>

```csharp
public IResolvable|ActionExecutionPolicyTarget[] Target { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>[]

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target ActionExecutionPolicy#target}

---

### ActionExecutionPolicyScope <a name="ActionExecutionPolicyScope" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScope {
    ActionExecutionPolicyScopeKubernetes Kubernetes = null,
    ActionExecutionPolicyScopeRemoteActionRshell RemoteActionRshell = null,
    ActionExecutionPolicyScopeScripts Scripts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.remoteActionRshell">RemoteActionRshell</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a></code> | remote_action_rshell block. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.scripts">Scripts</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a></code> | scripts block. |

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.kubernetes"></a>

```csharp
public ActionExecutionPolicyScopeKubernetes Kubernetes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#kubernetes ActionExecutionPolicy#kubernetes}

---

##### `RemoteActionRshell`<sup>Optional</sup> <a name="RemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.remoteActionRshell"></a>

```csharp
public ActionExecutionPolicyScopeRemoteActionRshell RemoteActionRshell { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

remote_action_rshell block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#remote_action_rshell ActionExecutionPolicy#remote_action_rshell}

---

##### `Scripts`<sup>Optional</sup> <a name="Scripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope.property.scripts"></a>

```csharp
public ActionExecutionPolicyScopeScripts Scripts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#scripts ActionExecutionPolicy#scripts}

---

### ActionExecutionPolicyScopeKubernetes <a name="ActionExecutionPolicyScopeKubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeKubernetes {
    IResolvable|ActionExecutionPolicyScopeKubernetesRule[] Rule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.property.rule">Rule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>[]</code> | rule block. |

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes.property.rule"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeKubernetesRule[] Rule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeKubernetesRule <a name="ActionExecutionPolicyScopeKubernetesRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeKubernetesRule {
    string[] TargetNamespaces
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.property.targetNamespaces">TargetNamespaces</a></code> | <code>string[]</code> | The Kubernetes namespaces this rule applies to. |

---

##### `TargetNamespaces`<sup>Required</sup> <a name="TargetNamespaces" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule.property.targetNamespaces"></a>

```csharp
public string[] TargetNamespaces { get; set; }
```

- *Type:* string[]

The Kubernetes namespaces this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_namespaces ActionExecutionPolicy#target_namespaces}

---

### ActionExecutionPolicyScopeRemoteActionRshell <a name="ActionExecutionPolicyScopeRemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeRemoteActionRshell {
    IResolvable|ActionExecutionPolicyScopeRemoteActionRshellRule[] Rule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.property.rule">Rule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>[]</code> | rule block. |

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell.property.rule"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeRemoteActionRshellRule[] Rule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeRemoteActionRshellRule <a name="ActionExecutionPolicyScopeRemoteActionRshellRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeRemoteActionRshellRule {
    string Access,
    string[] TargetPaths
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.access">Access</a></code> | <code>string</code> | The level of remote shell access granted for the target paths. Valid values are `read_only`, `read_write`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.targetPaths">TargetPaths</a></code> | <code>string[]</code> | The filesystem paths this rule applies to. |

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.access"></a>

```csharp
public string Access { get; set; }
```

- *Type:* string

The level of remote shell access granted for the target paths. Valid values are `read_only`, `read_write`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#access ActionExecutionPolicy#access}

---

##### `TargetPaths`<sup>Required</sup> <a name="TargetPaths" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule.property.targetPaths"></a>

```csharp
public string[] TargetPaths { get; set; }
```

- *Type:* string[]

The filesystem paths this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_paths ActionExecutionPolicy#target_paths}

---

### ActionExecutionPolicyScopeScripts <a name="ActionExecutionPolicyScopeScripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeScripts {
    IResolvable|ActionExecutionPolicyScopeScriptsRule[] Rule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.property.rule">Rule</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>[]</code> | rule block. |

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts.property.rule"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeScriptsRule[] Rule { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#rule ActionExecutionPolicy#rule}

---

### ActionExecutionPolicyScopeScriptsRule <a name="ActionExecutionPolicyScopeScriptsRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeScriptsRule {
    string[] TargetScriptNames
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.property.targetScriptNames">TargetScriptNames</a></code> | <code>string[]</code> | The script names this rule applies to. |

---

##### `TargetScriptNames`<sup>Required</sup> <a name="TargetScriptNames" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule.property.targetScriptNames"></a>

```csharp
public string[] TargetScriptNames { get; set; }
```

- *Type:* string[]

The script names this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#target_script_names ActionExecutionPolicy#target_script_names}

---

### ActionExecutionPolicyTarget <a name="ActionExecutionPolicyTarget" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyTarget {
    string[] AgentTags,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.agentTags">AgentTags</a></code> | <code>string[]</code> | The Agent tags identifying the target, for example `env:prod`. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.name">Name</a></code> | <code>string</code> | A human-readable name for the target. |

---

##### `AgentTags`<sup>Required</sup> <a name="AgentTags" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.agentTags"></a>

```csharp
public string[] AgentTags { get; set; }
```

- *Type:* string[]

The Agent tags identifying the target, for example `env:prod`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#agent_tags ActionExecutionPolicy#agent_tags}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A human-readable name for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/action_execution_policy#name ActionExecutionPolicy#name}

---

## Classes <a name="Classes" id="Classes"></a>

### ActionExecutionPolicyActionPatternOutputReference <a name="ActionExecutionPolicyActionPatternOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyActionPatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqnsInput">ActionFqnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integrationInput">IntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqns">ActionFqns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integration">Integration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionFqnsInput`<sup>Optional</sup> <a name="ActionFqnsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqnsInput"></a>

```csharp
public string[] ActionFqnsInput { get; }
```

- *Type:* string[]

---

##### `IntegrationInput`<sup>Optional</sup> <a name="IntegrationInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integrationInput"></a>

```csharp
public string IntegrationInput { get; }
```

- *Type:* string

---

##### `ActionFqns`<sup>Required</sup> <a name="ActionFqns" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.actionFqns"></a>

```csharp
public string[] ActionFqns { get; }
```

- *Type:* string[]

---

##### `Integration`<sup>Required</sup> <a name="Integration" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.integration"></a>

```csharp
public string Integration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPatternOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ActionExecutionPolicyActionPattern InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyActionPattern">ActionExecutionPolicyActionPattern</a>

---


### ActionExecutionPolicyScopeKubernetesOutputReference <a name="ActionExecutionPolicyScopeKubernetesOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeKubernetesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule"></a>

```csharp
private void PutRule(IResolvable|ActionExecutionPolicyScopeKubernetesRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.putRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>[]

---

##### `ResetRule` <a name="ResetRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.resetRule"></a>

```csharp
private void ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList">ActionExecutionPolicyScopeKubernetesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.rule"></a>

```csharp
public ActionExecutionPolicyScopeKubernetesRuleList Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList">ActionExecutionPolicyScopeKubernetesRuleList</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.ruleInput"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeKubernetesRule[] RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeKubernetes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

---


### ActionExecutionPolicyScopeKubernetesRuleList <a name="ActionExecutionPolicyScopeKubernetesRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeKubernetesRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get"></a>

```csharp
private ActionExecutionPolicyScopeKubernetesRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleList.property.internalValue"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeKubernetesRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>[]

---


### ActionExecutionPolicyScopeKubernetesRuleOutputReference <a name="ActionExecutionPolicyScopeKubernetesRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeKubernetesRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespacesInput">TargetNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespaces">TargetNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetNamespacesInput`<sup>Optional</sup> <a name="TargetNamespacesInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespacesInput"></a>

```csharp
public string[] TargetNamespacesInput { get; }
```

- *Type:* string[]

---

##### `TargetNamespaces`<sup>Required</sup> <a name="TargetNamespaces" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.targetNamespaces"></a>

```csharp
public string[] TargetNamespaces { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeKubernetesRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesRule">ActionExecutionPolicyScopeKubernetesRule</a>

---


### ActionExecutionPolicyScopeOutputReference <a name="ActionExecutionPolicyScopeOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes">PutKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell">PutRemoteActionRshell</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts">PutScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetKubernetes">ResetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetRemoteActionRshell">ResetRemoteActionRshell</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetScripts">ResetScripts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKubernetes` <a name="PutKubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes"></a>

```csharp
private void PutKubernetes(ActionExecutionPolicyScopeKubernetes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

---

##### `PutRemoteActionRshell` <a name="PutRemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell"></a>

```csharp
private void PutRemoteActionRshell(ActionExecutionPolicyScopeRemoteActionRshell Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putRemoteActionRshell.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

---

##### `PutScripts` <a name="PutScripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts"></a>

```csharp
private void PutScripts(ActionExecutionPolicyScopeScripts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.putScripts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

---

##### `ResetKubernetes` <a name="ResetKubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetKubernetes"></a>

```csharp
private void ResetKubernetes()
```

##### `ResetRemoteActionRshell` <a name="ResetRemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetRemoteActionRshell"></a>

```csharp
private void ResetRemoteActionRshell()
```

##### `ResetScripts` <a name="ResetScripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.resetScripts"></a>

```csharp
private void ResetScripts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference">ActionExecutionPolicyScopeKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshell">RemoteActionRshell</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference">ActionExecutionPolicyScopeRemoteActionRshellOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scripts">Scripts</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference">ActionExecutionPolicyScopeScriptsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetesInput">KubernetesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshellInput">RemoteActionRshellInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scriptsInput">ScriptsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Kubernetes`<sup>Required</sup> <a name="Kubernetes" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetes"></a>

```csharp
public ActionExecutionPolicyScopeKubernetesOutputReference Kubernetes { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetesOutputReference">ActionExecutionPolicyScopeKubernetesOutputReference</a>

---

##### `RemoteActionRshell`<sup>Required</sup> <a name="RemoteActionRshell" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshell"></a>

```csharp
public ActionExecutionPolicyScopeRemoteActionRshellOutputReference RemoteActionRshell { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference">ActionExecutionPolicyScopeRemoteActionRshellOutputReference</a>

---

##### `Scripts`<sup>Required</sup> <a name="Scripts" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scripts"></a>

```csharp
public ActionExecutionPolicyScopeScriptsOutputReference Scripts { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference">ActionExecutionPolicyScopeScriptsOutputReference</a>

---

##### `KubernetesInput`<sup>Optional</sup> <a name="KubernetesInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.kubernetesInput"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeKubernetes KubernetesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeKubernetes">ActionExecutionPolicyScopeKubernetes</a>

---

##### `RemoteActionRshellInput`<sup>Optional</sup> <a name="RemoteActionRshellInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.remoteActionRshellInput"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeRemoteActionRshell RemoteActionRshellInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

---

##### `ScriptsInput`<sup>Optional</sup> <a name="ScriptsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.scriptsInput"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeScripts ScriptsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ActionExecutionPolicyScope InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScope">ActionExecutionPolicyScope</a>

---


### ActionExecutionPolicyScopeRemoteActionRshellOutputReference <a name="ActionExecutionPolicyScopeRemoteActionRshellOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeRemoteActionRshellOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule"></a>

```csharp
private void PutRule(IResolvable|ActionExecutionPolicyScopeRemoteActionRshellRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.putRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>[]

---

##### `ResetRule` <a name="ResetRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.resetRule"></a>

```csharp
private void ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList">ActionExecutionPolicyScopeRemoteActionRshellRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.rule"></a>

```csharp
public ActionExecutionPolicyScopeRemoteActionRshellRuleList Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList">ActionExecutionPolicyScopeRemoteActionRshellRuleList</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.ruleInput"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeRemoteActionRshellRule[] RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeRemoteActionRshell InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshell">ActionExecutionPolicyScopeRemoteActionRshell</a>

---


### ActionExecutionPolicyScopeRemoteActionRshellRuleList <a name="ActionExecutionPolicyScopeRemoteActionRshellRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeRemoteActionRshellRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get"></a>

```csharp
private ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleList.property.internalValue"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeRemoteActionRshellRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>[]

---


### ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference <a name="ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.accessInput">AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPathsInput">TargetPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.access">Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPaths">TargetPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.accessInput"></a>

```csharp
public string AccessInput { get; }
```

- *Type:* string

---

##### `TargetPathsInput`<sup>Optional</sup> <a name="TargetPathsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPathsInput"></a>

```csharp
public string[] TargetPathsInput { get; }
```

- *Type:* string[]

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.access"></a>

```csharp
public string Access { get; }
```

- *Type:* string

---

##### `TargetPaths`<sup>Required</sup> <a name="TargetPaths" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.targetPaths"></a>

```csharp
public string[] TargetPaths { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeRemoteActionRshellRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeRemoteActionRshellRule">ActionExecutionPolicyScopeRemoteActionRshellRule</a>

---


### ActionExecutionPolicyScopeScriptsOutputReference <a name="ActionExecutionPolicyScopeScriptsOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeScriptsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule"></a>

```csharp
private void PutRule(IResolvable|ActionExecutionPolicyScopeScriptsRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.putRule.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>[]

---

##### `ResetRule` <a name="ResetRule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.resetRule"></a>

```csharp
private void ResetRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList">ActionExecutionPolicyScopeScriptsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.rule"></a>

```csharp
public ActionExecutionPolicyScopeScriptsRuleList Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList">ActionExecutionPolicyScopeScriptsRuleList</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.ruleInput"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeScriptsRule[] RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeScripts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScripts">ActionExecutionPolicyScopeScripts</a>

---


### ActionExecutionPolicyScopeScriptsRuleList <a name="ActionExecutionPolicyScopeScriptsRuleList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeScriptsRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get"></a>

```csharp
private ActionExecutionPolicyScopeScriptsRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleList.property.internalValue"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeScriptsRule[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>[]

---


### ActionExecutionPolicyScopeScriptsRuleOutputReference <a name="ActionExecutionPolicyScopeScriptsRuleOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyScopeScriptsRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNamesInput">TargetScriptNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNames">TargetScriptNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetScriptNamesInput`<sup>Optional</sup> <a name="TargetScriptNamesInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNamesInput"></a>

```csharp
public string[] TargetScriptNamesInput { get; }
```

- *Type:* string[]

---

##### `TargetScriptNames`<sup>Required</sup> <a name="TargetScriptNames" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.targetScriptNames"></a>

```csharp
public string[] TargetScriptNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ActionExecutionPolicyScopeScriptsRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyScopeScriptsRule">ActionExecutionPolicyScopeScriptsRule</a>

---


### ActionExecutionPolicyTargetList <a name="ActionExecutionPolicyTargetList" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get"></a>

```csharp
private ActionExecutionPolicyTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetList.property.internalValue"></a>

```csharp
public IResolvable|ActionExecutionPolicyTarget[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>[]

---


### ActionExecutionPolicyTargetOutputReference <a name="ActionExecutionPolicyTargetOutputReference" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new ActionExecutionPolicyTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTagsInput">AgentTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTags">AgentTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentTagsInput`<sup>Optional</sup> <a name="AgentTagsInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTagsInput"></a>

```csharp
public string[] AgentTagsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AgentTags`<sup>Required</sup> <a name="AgentTags" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.agentTags"></a>

```csharp
public string[] AgentTags { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTargetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ActionExecutionPolicyTarget InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.actionExecutionPolicy.ActionExecutionPolicyTarget">ActionExecutionPolicyTarget</a>

---



