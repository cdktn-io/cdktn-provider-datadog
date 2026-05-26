# `onCallUserNotificationRule` Submodule <a name="`onCallUserNotificationRule` Submodule" id="@cdktn/provider-datadog.onCallUserNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallUserNotificationRule <a name="OnCallUserNotificationRule" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_user_notification_rule datadog_on_call_user_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallUserNotificationRule(Construct Scope, string Id, OnCallUserNotificationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig">OnCallUserNotificationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig">OnCallUserNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.putPhone">PutPhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetPhone">ResetPhone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPhone` <a name="PutPhone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.putPhone"></a>

```csharp
private void PutPhone(OnCallUserNotificationRulePhone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.putPhone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

---

##### `ResetPhone` <a name="ResetPhone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.resetPhone"></a>

```csharp
private void ResetPhone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OnCallUserNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

OnCallUserNotificationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

OnCallUserNotificationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

OnCallUserNotificationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

OnCallUserNotificationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OnCallUserNotificationRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OnCallUserNotificationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OnCallUserNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_user_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OnCallUserNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phone">Phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference">OnCallUserNotificationRulePhoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelIdInput">ChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutesInput">DelayMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phoneInput">PhoneInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutes">DelayMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phone"></a>

```csharp
public OnCallUserNotificationRulePhoneOutputReference Phone { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference">OnCallUserNotificationRulePhoneOutputReference</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelIdInput"></a>

```csharp
public string ChannelIdInput { get; }
```

- *Type:* string

---

##### `DelayMinutesInput`<sup>Optional</sup> <a name="DelayMinutesInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutesInput"></a>

```csharp
public double DelayMinutesInput { get; }
```

- *Type:* double

---

##### `PhoneInput`<sup>Optional</sup> <a name="PhoneInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.phoneInput"></a>

```csharp
public IResolvable|OnCallUserNotificationRulePhone PhoneInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `DelayMinutes`<sup>Required</sup> <a name="DelayMinutes" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.delayMinutes"></a>

```csharp
public double DelayMinutes { get; }
```

- *Type:* double

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallUserNotificationRuleConfig <a name="OnCallUserNotificationRuleConfig" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallUserNotificationRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Category,
    string ChannelId,
    double DelayMinutes,
    string UserId,
    OnCallUserNotificationRulePhone Phone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.category">Category</a></code> | <code>string</code> | Notification category to associate the rule with. Valid values are `high_urgency`, `low_urgency`. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.channelId">ChannelId</a></code> | <code>string</code> | ID of the notification channel to associate the notification rule with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.delayMinutes">DelayMinutes</a></code> | <code>double</code> | Number of minutes to elapse before this rule is evaluated.  `0` indicates immediate evaluation. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.userId">UserId</a></code> | <code>string</code> | ID of the user to associate the notification rule with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.phone">Phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a></code> | phone block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Notification category to associate the rule with. Valid values are `high_urgency`, `low_urgency`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_user_notification_rule#category OnCallUserNotificationRule#category}

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.channelId"></a>

```csharp
public string ChannelId { get; set; }
```

- *Type:* string

ID of the notification channel to associate the notification rule with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_user_notification_rule#channel_id OnCallUserNotificationRule#channel_id}

---

##### `DelayMinutes`<sup>Required</sup> <a name="DelayMinutes" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.delayMinutes"></a>

```csharp
public double DelayMinutes { get; set; }
```

- *Type:* double

Number of minutes to elapse before this rule is evaluated.  `0` indicates immediate evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_user_notification_rule#delay_minutes OnCallUserNotificationRule#delay_minutes}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

ID of the user to associate the notification rule with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_user_notification_rule#user_id OnCallUserNotificationRule#user_id}

---

##### `Phone`<sup>Optional</sup> <a name="Phone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRuleConfig.property.phone"></a>

```csharp
public OnCallUserNotificationRulePhone Phone { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

phone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_user_notification_rule#phone OnCallUserNotificationRule#phone}

---

### OnCallUserNotificationRulePhone <a name="OnCallUserNotificationRulePhone" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallUserNotificationRulePhone {
    string Method = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone.property.method">Method</a></code> | <code>string</code> | Specifies the method in which a phone is used in a notification rule. Valid values are `sms`, `voice`. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Specifies the method in which a phone is used in a notification rule. Valid values are `sms`, `voice`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.10.0/docs/resources/on_call_user_notification_rule#method OnCallUserNotificationRule#method}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallUserNotificationRulePhoneOutputReference <a name="OnCallUserNotificationRulePhoneOutputReference" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallUserNotificationRulePhoneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhoneOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OnCallUserNotificationRulePhone InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallUserNotificationRule.OnCallUserNotificationRulePhone">OnCallUserNotificationRulePhone</a>

---



