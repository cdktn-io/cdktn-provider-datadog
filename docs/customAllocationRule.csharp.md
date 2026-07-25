# `customAllocationRule` Submodule <a name="`customAllocationRule` Submodule" id="@cdktn/provider-datadog.customAllocationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomAllocationRule <a name="CustomAllocationRule" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule datadog_custom_allocation_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRule(Construct Scope, string Id, CustomAllocationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig">CustomAllocationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig">CustomAllocationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.putCostsToAllocate">PutCostsToAllocate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy">PutStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.resetCostsToAllocate">ResetCostsToAllocate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.resetStrategy">ResetStrategy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCostsToAllocate` <a name="PutCostsToAllocate" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.putCostsToAllocate"></a>

```csharp
private void PutCostsToAllocate(IResolvable|CustomAllocationRuleCostsToAllocate[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.putCostsToAllocate.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>[]

---

##### `PutStrategy` <a name="PutStrategy" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy"></a>

```csharp
private void PutStrategy(CustomAllocationRuleStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.putStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a>

---

##### `ResetCostsToAllocate` <a name="ResetCostsToAllocate" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.resetCostsToAllocate"></a>

```csharp
private void ResetCostsToAllocate()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.resetStrategy"></a>

```csharp
private void ResetStrategy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CustomAllocationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

CustomAllocationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

CustomAllocationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

CustomAllocationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

CustomAllocationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CustomAllocationRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomAllocationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomAllocationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CustomAllocationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocate">CostsToAllocate</a></code> | <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList">CustomAllocationRuleCostsToAllocateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.lastModifiedUserUuid">LastModifiedUserUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.orderId">OrderId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.rejected">Rejected</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategy">Strategy</a></code> | <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference">CustomAllocationRuleStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.updated">Updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocateInput">CostsToAllocateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernamesInput">ProvidernamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategyInput">StrategyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernames">Providernames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CostsToAllocate`<sup>Required</sup> <a name="CostsToAllocate" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocate"></a>

```csharp
public CustomAllocationRuleCostsToAllocateList CostsToAllocate { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList">CustomAllocationRuleCostsToAllocateList</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedUserUuid`<sup>Required</sup> <a name="LastModifiedUserUuid" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.lastModifiedUserUuid"></a>

```csharp
public string LastModifiedUserUuid { get; }
```

- *Type:* string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.orderId"></a>

```csharp
public double OrderId { get; }
```

- *Type:* double

---

##### `Rejected`<sup>Required</sup> <a name="Rejected" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.rejected"></a>

```csharp
public IResolvable Rejected { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategy"></a>

```csharp
public CustomAllocationRuleStrategyOutputReference Strategy { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference">CustomAllocationRuleStrategyOutputReference</a>

---

##### `Updated`<sup>Required</sup> <a name="Updated" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.updated"></a>

```csharp
public string Updated { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `CostsToAllocateInput`<sup>Optional</sup> <a name="CostsToAllocateInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.costsToAllocateInput"></a>

```csharp
public IResolvable|CustomAllocationRuleCostsToAllocate[] CostsToAllocateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProvidernamesInput`<sup>Optional</sup> <a name="ProvidernamesInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernamesInput"></a>

```csharp
public string[] ProvidernamesInput { get; }
```

- *Type:* string[]

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.strategyInput"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategy StrategyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Providernames`<sup>Required</sup> <a name="Providernames" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.providernames"></a>

```csharp
public string[] Providernames { get; }
```

- *Type:* string[]

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomAllocationRuleConfig <a name="CustomAllocationRuleConfig" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable Enabled,
    string[] Providernames,
    string RuleName,
    IResolvable|CustomAllocationRuleCostsToAllocate[] CostsToAllocate = null,
    CustomAllocationRuleStrategy Strategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the custom allocation rule is enabled. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.providernames">Providernames</a></code> | <code>string[]</code> | List of cloud providers the rule applies to. Valid values include `aws`, `azure`, and `gcp`. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.ruleName">RuleName</a></code> | <code>string</code> | The name of the custom allocation rule. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.costsToAllocate">CostsToAllocate</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>[]</code> | costs_to_allocate block. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.strategy">Strategy</a></code> | <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a></code> | strategy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the custom allocation rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#enabled CustomAllocationRule#enabled}

---

##### `Providernames`<sup>Required</sup> <a name="Providernames" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.providernames"></a>

```csharp
public string[] Providernames { get; set; }
```

- *Type:* string[]

List of cloud providers the rule applies to. Valid values include `aws`, `azure`, and `gcp`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#providernames CustomAllocationRule#providernames}

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

The name of the custom allocation rule.

This field is immutable - changing it will force replacement of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#rule_name CustomAllocationRule#rule_name}

---

##### `CostsToAllocate`<sup>Optional</sup> <a name="CostsToAllocate" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.costsToAllocate"></a>

```csharp
public IResolvable|CustomAllocationRuleCostsToAllocate[] CostsToAllocate { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>[]

costs_to_allocate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#costs_to_allocate CustomAllocationRule#costs_to_allocate}

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleConfig.property.strategy"></a>

```csharp
public CustomAllocationRuleStrategy Strategy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#strategy CustomAllocationRule#strategy}

---

### CustomAllocationRuleCostsToAllocate <a name="CustomAllocationRuleCostsToAllocate" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleCostsToAllocate {
    string Condition = null,
    string Tag = null,
    string Value = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.condition">Condition</a></code> | <code>string</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.tag">Tag</a></code> | <code>string</code> | The tag key to filter on (e.g., `aws_product`, `team`, `environment`). |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.value">Value</a></code> | <code>string</code> | The single tag value to match. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.values">Values</a></code> | <code>string[]</code> | A list of tag values to match. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

The tag key to filter on (e.g., `aws_product`, `team`, `environment`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The single tag value to match.

Use this field for conditions like `=`, `!=`, `is`, `is not`, `like`. Do not use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

A list of tag values to match.

Use this field for `in` or `not in` conditions only. Do not use with single-value conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

### CustomAllocationRuleStrategy <a name="CustomAllocationRuleStrategy" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategy {
    IResolvable|CustomAllocationRuleStrategyAllocatedBy[] AllocatedBy = null,
    IResolvable|CustomAllocationRuleStrategyAllocatedByFilters[] AllocatedByFilters = null,
    string[] AllocatedByTagKeys = null,
    IResolvable|CustomAllocationRuleStrategyBasedOnCosts[] BasedOnCosts = null,
    CustomAllocationRuleStrategyBasedOnTimeseries BasedOnTimeseries = null,
    IResolvable|CustomAllocationRuleStrategyEvaluateGroupedByFilters[] EvaluateGroupedByFilters = null,
    string[] EvaluateGroupedByTagKeys = null,
    string Granularity = null,
    string Method = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedBy">AllocatedBy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>[]</code> | allocated_by block. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByFilters">AllocatedByFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>[]</code> | allocated_by_filters block. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByTagKeys">AllocatedByTagKeys</a></code> | <code>string[]</code> | List of tag keys used to allocate costs (e.g., `["team", "project"]`). Costs will be distributed across unique values of these tags. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnCosts">BasedOnCosts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>[]</code> | based_on_costs block. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnTimeseries">BasedOnTimeseries</a></code> | <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a></code> | based_on_timeseries block. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByFilters">EvaluateGroupedByFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]</code> | evaluate_grouped_by_filters block. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByTagKeys">EvaluateGroupedByTagKeys</a></code> | <code>string[]</code> | List of tag keys used to group costs before allocation. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.granularity">Granularity</a></code> | <code>string</code> | The granularity level for cost allocation. Valid values are `daily` or `monthly`. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.method">Method</a></code> | <code>string</code> | The allocation method. Valid values are `even`, `proportional`, `proportional_timeseries`, or `percent`. |

---

##### `AllocatedBy`<sup>Optional</sup> <a name="AllocatedBy" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedBy"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyAllocatedBy[] AllocatedBy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>[]

allocated_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#allocated_by CustomAllocationRule#allocated_by}

---

##### `AllocatedByFilters`<sup>Optional</sup> <a name="AllocatedByFilters" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByFilters"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyAllocatedByFilters[] AllocatedByFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>[]

allocated_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#allocated_by_filters CustomAllocationRule#allocated_by_filters}

---

##### `AllocatedByTagKeys`<sup>Optional</sup> <a name="AllocatedByTagKeys" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.allocatedByTagKeys"></a>

```csharp
public string[] AllocatedByTagKeys { get; set; }
```

- *Type:* string[]

List of tag keys used to allocate costs (e.g., `["team", "project"]`). Costs will be distributed across unique values of these tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#allocated_by_tag_keys CustomAllocationRule#allocated_by_tag_keys}

---

##### `BasedOnCosts`<sup>Optional</sup> <a name="BasedOnCosts" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnCosts"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyBasedOnCosts[] BasedOnCosts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>[]

based_on_costs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#based_on_costs CustomAllocationRule#based_on_costs}

---

##### `BasedOnTimeseries`<sup>Optional</sup> <a name="BasedOnTimeseries" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.basedOnTimeseries"></a>

```csharp
public CustomAllocationRuleStrategyBasedOnTimeseries BasedOnTimeseries { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a>

based_on_timeseries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#based_on_timeseries CustomAllocationRule#based_on_timeseries}

---

##### `EvaluateGroupedByFilters`<sup>Optional</sup> <a name="EvaluateGroupedByFilters" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByFilters"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyEvaluateGroupedByFilters[] EvaluateGroupedByFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]

evaluate_grouped_by_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#evaluate_grouped_by_filters CustomAllocationRule#evaluate_grouped_by_filters}

---

##### `EvaluateGroupedByTagKeys`<sup>Optional</sup> <a name="EvaluateGroupedByTagKeys" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.evaluateGroupedByTagKeys"></a>

```csharp
public string[] EvaluateGroupedByTagKeys { get; set; }
```

- *Type:* string[]

List of tag keys used to group costs before allocation.

Costs are grouped by these tag values before applying the allocation strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#evaluate_grouped_by_tag_keys CustomAllocationRule#evaluate_grouped_by_tag_keys}

---

##### `Granularity`<sup>Optional</sup> <a name="Granularity" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.granularity"></a>

```csharp
public string Granularity { get; set; }
```

- *Type:* string

The granularity level for cost allocation. Valid values are `daily` or `monthly`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#granularity CustomAllocationRule#granularity}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

The allocation method. Valid values are `even`, `proportional`, `proportional_timeseries`, or `percent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#method CustomAllocationRule#method}

---

### CustomAllocationRuleStrategyAllocatedBy <a name="CustomAllocationRuleStrategyAllocatedBy" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyAllocatedBy {
    IResolvable|CustomAllocationRuleStrategyAllocatedByAllocatedTags[] AllocatedTags = null,
    double Percentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.allocatedTags">AllocatedTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]</code> | allocated_tags block. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.percentage">Percentage</a></code> | <code>double</code> | The percentage of costs to allocate to this target as a decimal (e.g., 0.33 for 33%). Used when `method` is `percent`. |

---

##### `AllocatedTags`<sup>Optional</sup> <a name="AllocatedTags" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.allocatedTags"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyAllocatedByAllocatedTags[] AllocatedTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]

allocated_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#allocated_tags CustomAllocationRule#allocated_tags}

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy.property.percentage"></a>

```csharp
public double Percentage { get; set; }
```

- *Type:* double

The percentage of costs to allocate to this target as a decimal (e.g., 0.33 for 33%). Used when `method` is `percent`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#percentage CustomAllocationRule#percentage}

---

### CustomAllocationRuleStrategyAllocatedByAllocatedTags <a name="CustomAllocationRuleStrategyAllocatedByAllocatedTags" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyAllocatedByAllocatedTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.key">Key</a></code> | <code>string</code> | The tag key to allocate costs to (e.g., `team`, `environment`). |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.value">Value</a></code> | <code>string</code> | The tag value to allocate costs to (e.g., `backend`, `production`). |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key to allocate costs to (e.g., `team`, `environment`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#key CustomAllocationRule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value to allocate costs to (e.g., `backend`, `production`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

### CustomAllocationRuleStrategyAllocatedByFilters <a name="CustomAllocationRuleStrategyAllocatedByFilters" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyAllocatedByFilters {
    string Condition = null,
    string Tag = null,
    string Value = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.condition">Condition</a></code> | <code>string</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.tag">Tag</a></code> | <code>string</code> | The tag key to filter on for allocation targets. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.value">Value</a></code> | <code>string</code> | The single tag value to match for allocation. Use with conditions like `=`, `!=`, `is`, `is not`, `like`. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.values">Values</a></code> | <code>string[]</code> | A list of tag values to match for allocation. Use with `in` or `not in` conditions. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

The tag key to filter on for allocation targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The single tag value to match for allocation. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

A list of tag values to match for allocation. Use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

### CustomAllocationRuleStrategyBasedOnCosts <a name="CustomAllocationRuleStrategyBasedOnCosts" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyBasedOnCosts {
    string Condition = null,
    string Tag = null,
    string Value = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.condition">Condition</a></code> | <code>string</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.tag">Tag</a></code> | <code>string</code> | The tag key to use as the basis for cost allocation calculations. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.value">Value</a></code> | <code>string</code> | The single tag value to use for cost calculations. Use with conditions like `=`, `!=`, `is`, `is not`, `like`. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.values">Values</a></code> | <code>string[]</code> | A list of tag values to use for cost calculations. Use with `in` or `not in` conditions. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

The tag key to use as the basis for cost allocation calculations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The single tag value to use for cost calculations. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

A list of tag values to use for cost calculations. Use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

### CustomAllocationRuleStrategyBasedOnTimeseries <a name="CustomAllocationRuleStrategyBasedOnTimeseries" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyBasedOnTimeseries {

};
```


### CustomAllocationRuleStrategyEvaluateGroupedByFilters <a name="CustomAllocationRuleStrategyEvaluateGroupedByFilters" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyEvaluateGroupedByFilters {
    string Condition = null,
    string Tag = null,
    string Value = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.condition">Condition</a></code> | <code>string</code> | The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.tag">Tag</a></code> | <code>string</code> | The tag key to filter on when grouping costs for evaluation. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.value">Value</a></code> | <code>string</code> | The single tag value to match when grouping. Use with conditions like `=`, `!=`, `is`, `is not`, `like`. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.values">Values</a></code> | <code>string[]</code> | A list of tag values to match when grouping. Use with `in` or `not in` conditions. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

The condition to match. Valid values are `=`, `!=`, `is`, `is not`, `like`, `in`, `not in`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#condition CustomAllocationRule#condition}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

The tag key to filter on when grouping costs for evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#tag CustomAllocationRule#tag}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The single tag value to match when grouping. Use with conditions like `=`, `!=`, `is`, `is not`, `like`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#value CustomAllocationRule#value}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

A list of tag values to match when grouping. Use with `in` or `not in` conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/custom_allocation_rule#values CustomAllocationRule#values}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomAllocationRuleCostsToAllocateList <a name="CustomAllocationRuleCostsToAllocateList" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleCostsToAllocateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.get"></a>

```csharp
private CustomAllocationRuleCostsToAllocateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateList.property.internalValue"></a>

```csharp
public IResolvable|CustomAllocationRuleCostsToAllocate[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>[]

---


### CustomAllocationRuleCostsToAllocateOutputReference <a name="CustomAllocationRuleCostsToAllocateOutputReference" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleCostsToAllocateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetTag` <a name="ResetTag" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomAllocationRuleCostsToAllocate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleCostsToAllocate">CustomAllocationRuleCostsToAllocate</a>

---


### CustomAllocationRuleStrategyAllocatedByAllocatedTagsList <a name="CustomAllocationRuleStrategyAllocatedByAllocatedTagsList" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyAllocatedByAllocatedTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get"></a>

```csharp
private CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList.property.internalValue"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyAllocatedByAllocatedTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]

---


### CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference <a name="CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyAllocatedByAllocatedTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>

---


### CustomAllocationRuleStrategyAllocatedByFiltersList <a name="CustomAllocationRuleStrategyAllocatedByFiltersList" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyAllocatedByFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.get"></a>

```csharp
private CustomAllocationRuleStrategyAllocatedByFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList.property.internalValue"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyAllocatedByFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>[]

---


### CustomAllocationRuleStrategyAllocatedByFiltersOutputReference <a name="CustomAllocationRuleStrategyAllocatedByFiltersOutputReference" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyAllocatedByFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetTag` <a name="ResetTag" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyAllocatedByFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>

---


### CustomAllocationRuleStrategyAllocatedByList <a name="CustomAllocationRuleStrategyAllocatedByList" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyAllocatedByList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.get"></a>

```csharp
private CustomAllocationRuleStrategyAllocatedByOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList.property.internalValue"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyAllocatedBy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>[]

---


### CustomAllocationRuleStrategyAllocatedByOutputReference <a name="CustomAllocationRuleStrategyAllocatedByOutputReference" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyAllocatedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags">PutAllocatedTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags">ResetAllocatedTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllocatedTags` <a name="PutAllocatedTags" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags"></a>

```csharp
private void PutAllocatedTags(IResolvable|CustomAllocationRuleStrategyAllocatedByAllocatedTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.putAllocatedTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]

---

##### `ResetAllocatedTags` <a name="ResetAllocatedTags" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetAllocatedTags"></a>

```csharp
private void ResetAllocatedTags()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.resetPercentage"></a>

```csharp
private void ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags">AllocatedTags</a></code> | <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList">CustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput">AllocatedTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentageInput">PercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocatedTags`<sup>Required</sup> <a name="AllocatedTags" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTags"></a>

```csharp
public CustomAllocationRuleStrategyAllocatedByAllocatedTagsList AllocatedTags { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTagsList">CustomAllocationRuleStrategyAllocatedByAllocatedTagsList</a>

---

##### `AllocatedTagsInput`<sup>Optional</sup> <a name="AllocatedTagsInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.allocatedTagsInput"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyAllocatedByAllocatedTags[] AllocatedTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByAllocatedTags">CustomAllocationRuleStrategyAllocatedByAllocatedTags</a>[]

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentageInput"></a>

```csharp
public double PercentageInput { get; }
```

- *Type:* double

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyAllocatedBy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>

---


### CustomAllocationRuleStrategyBasedOnCostsList <a name="CustomAllocationRuleStrategyBasedOnCostsList" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyBasedOnCostsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.get"></a>

```csharp
private CustomAllocationRuleStrategyBasedOnCostsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList.property.internalValue"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyBasedOnCosts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>[]

---


### CustomAllocationRuleStrategyBasedOnCostsOutputReference <a name="CustomAllocationRuleStrategyBasedOnCostsOutputReference" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyBasedOnCostsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetTag` <a name="ResetTag" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyBasedOnCosts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>

---


### CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference <a name="CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyBasedOnTimeseries InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a>

---


### CustomAllocationRuleStrategyEvaluateGroupedByFiltersList <a name="CustomAllocationRuleStrategyEvaluateGroupedByFiltersList" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyEvaluateGroupedByFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get"></a>

```csharp
private CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList.property.internalValue"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyEvaluateGroupedByFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]

---


### CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference <a name="CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetTag">ResetTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetTag` <a name="ResetTag" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyEvaluateGroupedByFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>

---


### CustomAllocationRuleStrategyOutputReference <a name="CustomAllocationRuleStrategyOutputReference" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new CustomAllocationRuleStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedBy">PutAllocatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedByFilters">PutAllocatedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnCosts">PutBasedOnCosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries">PutBasedOnTimeseries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters">PutEvaluateGroupedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedBy">ResetAllocatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters">ResetAllocatedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByTagKeys">ResetAllocatedByTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetBasedOnCosts">ResetBasedOnCosts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters">ResetEvaluateGroupedByFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByTagKeys">ResetEvaluateGroupedByTagKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetGranularity">ResetGranularity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllocatedBy` <a name="PutAllocatedBy" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedBy"></a>

```csharp
private void PutAllocatedBy(IResolvable|CustomAllocationRuleStrategyAllocatedBy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedBy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>[]

---

##### `PutAllocatedByFilters` <a name="PutAllocatedByFilters" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedByFilters"></a>

```csharp
private void PutAllocatedByFilters(IResolvable|CustomAllocationRuleStrategyAllocatedByFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putAllocatedByFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>[]

---

##### `PutBasedOnCosts` <a name="PutBasedOnCosts" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnCosts"></a>

```csharp
private void PutBasedOnCosts(IResolvable|CustomAllocationRuleStrategyBasedOnCosts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnCosts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>[]

---

##### `PutBasedOnTimeseries` <a name="PutBasedOnTimeseries" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries"></a>

```csharp
private void PutBasedOnTimeseries(CustomAllocationRuleStrategyBasedOnTimeseries Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putBasedOnTimeseries.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a>

---

##### `PutEvaluateGroupedByFilters` <a name="PutEvaluateGroupedByFilters" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters"></a>

```csharp
private void PutEvaluateGroupedByFilters(IResolvable|CustomAllocationRuleStrategyEvaluateGroupedByFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.putEvaluateGroupedByFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]

---

##### `ResetAllocatedBy` <a name="ResetAllocatedBy" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedBy"></a>

```csharp
private void ResetAllocatedBy()
```

##### `ResetAllocatedByFilters` <a name="ResetAllocatedByFilters" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByFilters"></a>

```csharp
private void ResetAllocatedByFilters()
```

##### `ResetAllocatedByTagKeys` <a name="ResetAllocatedByTagKeys" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetAllocatedByTagKeys"></a>

```csharp
private void ResetAllocatedByTagKeys()
```

##### `ResetBasedOnCosts` <a name="ResetBasedOnCosts" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetBasedOnCosts"></a>

```csharp
private void ResetBasedOnCosts()
```

##### `ResetEvaluateGroupedByFilters` <a name="ResetEvaluateGroupedByFilters" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByFilters"></a>

```csharp
private void ResetEvaluateGroupedByFilters()
```

##### `ResetEvaluateGroupedByTagKeys` <a name="ResetEvaluateGroupedByTagKeys" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetEvaluateGroupedByTagKeys"></a>

```csharp
private void ResetEvaluateGroupedByTagKeys()
```

##### `ResetGranularity` <a name="ResetGranularity" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetGranularity"></a>

```csharp
private void ResetGranularity()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedBy">AllocatedBy</a></code> | <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList">CustomAllocationRuleStrategyAllocatedByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFilters">AllocatedByFilters</a></code> | <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList">CustomAllocationRuleStrategyAllocatedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCosts">BasedOnCosts</a></code> | <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList">CustomAllocationRuleStrategyBasedOnCostsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries">BasedOnTimeseries</a></code> | <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters">EvaluateGroupedByFilters</a></code> | <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList">CustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput">AllocatedByFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByInput">AllocatedByInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeysInput">AllocatedByTagKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput">BasedOnCostsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput">BasedOnTimeseriesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput">EvaluateGroupedByFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeysInput">EvaluateGroupedByTagKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularityInput">GranularityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys">AllocatedByTagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys">EvaluateGroupedByTagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularity">Granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocatedBy`<sup>Required</sup> <a name="AllocatedBy" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedBy"></a>

```csharp
public CustomAllocationRuleStrategyAllocatedByList AllocatedBy { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByList">CustomAllocationRuleStrategyAllocatedByList</a>

---

##### `AllocatedByFilters`<sup>Required</sup> <a name="AllocatedByFilters" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFilters"></a>

```csharp
public CustomAllocationRuleStrategyAllocatedByFiltersList AllocatedByFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFiltersList">CustomAllocationRuleStrategyAllocatedByFiltersList</a>

---

##### `BasedOnCosts`<sup>Required</sup> <a name="BasedOnCosts" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCosts"></a>

```csharp
public CustomAllocationRuleStrategyBasedOnCostsList BasedOnCosts { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCostsList">CustomAllocationRuleStrategyBasedOnCostsList</a>

---

##### `BasedOnTimeseries`<sup>Required</sup> <a name="BasedOnTimeseries" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseries"></a>

```csharp
public CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference BasedOnTimeseries { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference">CustomAllocationRuleStrategyBasedOnTimeseriesOutputReference</a>

---

##### `EvaluateGroupedByFilters`<sup>Required</sup> <a name="EvaluateGroupedByFilters" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFilters"></a>

```csharp
public CustomAllocationRuleStrategyEvaluateGroupedByFiltersList EvaluateGroupedByFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFiltersList">CustomAllocationRuleStrategyEvaluateGroupedByFiltersList</a>

---

##### `AllocatedByFiltersInput`<sup>Optional</sup> <a name="AllocatedByFiltersInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByFiltersInput"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyAllocatedByFilters[] AllocatedByFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedByFilters">CustomAllocationRuleStrategyAllocatedByFilters</a>[]

---

##### `AllocatedByInput`<sup>Optional</sup> <a name="AllocatedByInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByInput"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyAllocatedBy[] AllocatedByInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyAllocatedBy">CustomAllocationRuleStrategyAllocatedBy</a>[]

---

##### `AllocatedByTagKeysInput`<sup>Optional</sup> <a name="AllocatedByTagKeysInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeysInput"></a>

```csharp
public string[] AllocatedByTagKeysInput { get; }
```

- *Type:* string[]

---

##### `BasedOnCostsInput`<sup>Optional</sup> <a name="BasedOnCostsInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnCostsInput"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyBasedOnCosts[] BasedOnCostsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnCosts">CustomAllocationRuleStrategyBasedOnCosts</a>[]

---

##### `BasedOnTimeseriesInput`<sup>Optional</sup> <a name="BasedOnTimeseriesInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.basedOnTimeseriesInput"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyBasedOnTimeseries BasedOnTimeseriesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyBasedOnTimeseries">CustomAllocationRuleStrategyBasedOnTimeseries</a>

---

##### `EvaluateGroupedByFiltersInput`<sup>Optional</sup> <a name="EvaluateGroupedByFiltersInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByFiltersInput"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategyEvaluateGroupedByFilters[] EvaluateGroupedByFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyEvaluateGroupedByFilters">CustomAllocationRuleStrategyEvaluateGroupedByFilters</a>[]

---

##### `EvaluateGroupedByTagKeysInput`<sup>Optional</sup> <a name="EvaluateGroupedByTagKeysInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeysInput"></a>

```csharp
public string[] EvaluateGroupedByTagKeysInput { get; }
```

- *Type:* string[]

---

##### `GranularityInput`<sup>Optional</sup> <a name="GranularityInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularityInput"></a>

```csharp
public string GranularityInput { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `AllocatedByTagKeys`<sup>Required</sup> <a name="AllocatedByTagKeys" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.allocatedByTagKeys"></a>

```csharp
public string[] AllocatedByTagKeys { get; }
```

- *Type:* string[]

---

##### `EvaluateGroupedByTagKeys`<sup>Required</sup> <a name="EvaluateGroupedByTagKeys" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.evaluateGroupedByTagKeys"></a>

```csharp
public string[] EvaluateGroupedByTagKeys { get; }
```

- *Type:* string[]

---

##### `Granularity`<sup>Required</sup> <a name="Granularity" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.granularity"></a>

```csharp
public string Granularity { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomAllocationRuleStrategy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.customAllocationRule.CustomAllocationRuleStrategy">CustomAllocationRuleStrategy</a>

---



