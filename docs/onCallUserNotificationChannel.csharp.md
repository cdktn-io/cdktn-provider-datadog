# `onCallUserNotificationChannel` Submodule <a name="`onCallUserNotificationChannel` Submodule" id="@cdktn/provider-datadog.onCallUserNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnCallUserNotificationChannel <a name="OnCallUserNotificationChannel" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/on_call_user_notification_channel datadog_on_call_user_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallUserNotificationChannel(Construct Scope, string Id, OnCallUserNotificationChannelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig">OnCallUserNotificationChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig">OnCallUserNotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putEmail">PutEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putPhone">PutPhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetPhone">ResetPhone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmail` <a name="PutEmail" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putEmail"></a>

```csharp
private void PutEmail(OnCallUserNotificationChannelEmail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

---

##### `PutPhone` <a name="PutPhone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putPhone"></a>

```csharp
private void PutPhone(OnCallUserNotificationChannelPhone Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.putPhone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

---

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetPhone` <a name="ResetPhone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.resetPhone"></a>

```csharp
private void ResetPhone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OnCallUserNotificationChannel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

OnCallUserNotificationChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

OnCallUserNotificationChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

OnCallUserNotificationChannel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

OnCallUserNotificationChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OnCallUserNotificationChannel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OnCallUserNotificationChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OnCallUserNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/on_call_user_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OnCallUserNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.email">Email</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference">OnCallUserNotificationChannelEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phone">Phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference">OnCallUserNotificationChannelPhoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.emailInput">EmailInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phoneInput">PhoneInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.email"></a>

```csharp
public OnCallUserNotificationChannelEmailOutputReference Email { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference">OnCallUserNotificationChannelEmailOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phone"></a>

```csharp
public OnCallUserNotificationChannelPhoneOutputReference Phone { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference">OnCallUserNotificationChannelPhoneOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.emailInput"></a>

```csharp
public IResolvable|OnCallUserNotificationChannelEmail EmailInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

---

##### `PhoneInput`<sup>Optional</sup> <a name="PhoneInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.phoneInput"></a>

```csharp
public IResolvable|OnCallUserNotificationChannelPhone PhoneInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OnCallUserNotificationChannelConfig <a name="OnCallUserNotificationChannelConfig" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallUserNotificationChannelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string UserId,
    OnCallUserNotificationChannelEmail Email = null,
    OnCallUserNotificationChannelPhone Phone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.userId">UserId</a></code> | <code>string</code> | ID of the user to associate the notification channel with. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.email">Email</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a></code> | email block. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.phone">Phone</a></code> | <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a></code> | phone block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

ID of the user to associate the notification channel with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/on_call_user_notification_channel#user_id OnCallUserNotificationChannel#user_id}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.email"></a>

```csharp
public OnCallUserNotificationChannelEmail Email { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/on_call_user_notification_channel#email OnCallUserNotificationChannel#email}

---

##### `Phone`<sup>Optional</sup> <a name="Phone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelConfig.property.phone"></a>

```csharp
public OnCallUserNotificationChannelPhone Phone { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

phone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/on_call_user_notification_channel#phone OnCallUserNotificationChannel#phone}

---

### OnCallUserNotificationChannelEmail <a name="OnCallUserNotificationChannelEmail" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallUserNotificationChannelEmail {
    string Address = null,
    string[] Formats = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.address">Address</a></code> | <code>string</code> | The e-mail address to be notified. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.formats">Formats</a></code> | <code>string[]</code> | Preferred content formats for notifications. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The e-mail address to be notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/on_call_user_notification_channel#address OnCallUserNotificationChannel#address}

---

##### `Formats`<sup>Optional</sup> <a name="Formats" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail.property.formats"></a>

```csharp
public string[] Formats { get; set; }
```

- *Type:* string[]

Preferred content formats for notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/on_call_user_notification_channel#formats OnCallUserNotificationChannel#formats}

---

### OnCallUserNotificationChannelPhone <a name="OnCallUserNotificationChannelPhone" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallUserNotificationChannelPhone {
    string Number = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone.property.number">Number</a></code> | <code>string</code> | The E-164 formatted phone number (for example, +3371234567). |

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone.property.number"></a>

```csharp
public string Number { get; set; }
```

- *Type:* string

The E-164 formatted phone number (for example, +3371234567).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/on_call_user_notification_channel#number OnCallUserNotificationChannel#number}

---

## Classes <a name="Classes" id="Classes"></a>

### OnCallUserNotificationChannelEmailOutputReference <a name="OnCallUserNotificationChannelEmailOutputReference" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallUserNotificationChannelEmailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetFormats">ResetFormats</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetFormats` <a name="ResetFormats" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.resetFormats"></a>

```csharp
private void ResetFormats()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formatsInput">FormatsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formats">Formats</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `FormatsInput`<sup>Optional</sup> <a name="FormatsInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formatsInput"></a>

```csharp
public string[] FormatsInput { get; }
```

- *Type:* string[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Formats`<sup>Required</sup> <a name="Formats" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.formats"></a>

```csharp
public string[] Formats { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OnCallUserNotificationChannelEmail InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelEmail">OnCallUserNotificationChannelEmail</a>

---


### OnCallUserNotificationChannelPhoneOutputReference <a name="OnCallUserNotificationChannelPhoneOutputReference" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new OnCallUserNotificationChannelPhoneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resetNumber">ResetNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumber` <a name="ResetNumber" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.resetNumber"></a>

```csharp
private void ResetNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.numberInput">NumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.number">Number</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.numberInput"></a>

```csharp
public string NumberInput { get; }
```

- *Type:* string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.number"></a>

```csharp
public string Number { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhoneOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OnCallUserNotificationChannelPhone InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.onCallUserNotificationChannel.OnCallUserNotificationChannelPhone">OnCallUserNotificationChannelPhone</a>

---



