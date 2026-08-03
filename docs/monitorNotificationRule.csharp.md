# `monitorNotificationRule` Submodule <a name="`monitorNotificationRule` Submodule" id="@cdktn/provider-datadog.monitorNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorNotificationRule <a name="MonitorNotificationRule" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/monitor_notification_rule datadog_monitor_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new MonitorNotificationRule(Construct Scope, string Id, MonitorNotificationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig">MonitorNotificationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig">MonitorNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putConditionalRecipients">PutConditionalRecipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetConditionalRecipients">ResetConditionalRecipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetRecipients">ResetRecipients</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConditionalRecipients` <a name="PutConditionalRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putConditionalRecipients"></a>

```csharp
private void PutConditionalRecipients(MonitorNotificationRuleConditionalRecipients Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putConditionalRecipients.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putFilter"></a>

```csharp
private void PutFilter(MonitorNotificationRuleFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a>

---

##### `ResetConditionalRecipients` <a name="ResetConditionalRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetConditionalRecipients"></a>

```csharp
private void ResetConditionalRecipients()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.resetRecipients"></a>

```csharp
private void ResetRecipients()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MonitorNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

MonitorNotificationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

MonitorNotificationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

MonitorNotificationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

MonitorNotificationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MonitorNotificationRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorNotificationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/monitor_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MonitorNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.conditionalRecipients">ConditionalRecipients</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference">MonitorNotificationRuleConditionalRecipientsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference">MonitorNotificationRuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.conditionalRecipientsInput">ConditionalRecipientsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.recipientsInput">RecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.recipients">Recipients</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConditionalRecipients`<sup>Required</sup> <a name="ConditionalRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.conditionalRecipients"></a>

```csharp
public MonitorNotificationRuleConditionalRecipientsOutputReference ConditionalRecipients { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference">MonitorNotificationRuleConditionalRecipientsOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.filter"></a>

```csharp
public MonitorNotificationRuleFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference">MonitorNotificationRuleFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ConditionalRecipientsInput`<sup>Optional</sup> <a name="ConditionalRecipientsInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.conditionalRecipientsInput"></a>

```csharp
public IResolvable|MonitorNotificationRuleConditionalRecipients ConditionalRecipientsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.filterInput"></a>

```csharp
public IResolvable|MonitorNotificationRuleFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.recipientsInput"></a>

```csharp
public string[] RecipientsInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.recipients"></a>

```csharp
public string[] Recipients { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorNotificationRuleConditionalRecipients <a name="MonitorNotificationRuleConditionalRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new MonitorNotificationRuleConditionalRecipients {
    IResolvable|MonitorNotificationRuleConditionalRecipientsConditions[] Conditions = null,
    string[] FallbackRecipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.property.fallbackRecipients">FallbackRecipients</a></code> | <code>string[]</code> | If none of the `conditions` applied, `fallback_recipients` will get notified. |

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.property.conditions"></a>

```csharp
public IResolvable|MonitorNotificationRuleConditionalRecipientsConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/monitor_notification_rule#conditions MonitorNotificationRule#conditions}

---

##### `FallbackRecipients`<sup>Optional</sup> <a name="FallbackRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients.property.fallbackRecipients"></a>

```csharp
public string[] FallbackRecipients { get; set; }
```

- *Type:* string[]

If none of the `conditions` applied, `fallback_recipients` will get notified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/monitor_notification_rule#fallback_recipients MonitorNotificationRule#fallback_recipients}

---

### MonitorNotificationRuleConditionalRecipientsConditions <a name="MonitorNotificationRuleConditionalRecipientsConditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new MonitorNotificationRuleConditionalRecipientsConditions {
    string[] Recipients,
    string Scope
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.property.recipients">Recipients</a></code> | <code>string[]</code> | A list of recipients to notify. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.property.scope">Scope</a></code> | <code>string</code> | Defines the condition under which the recipients are notified. |

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.property.recipients"></a>

```csharp
public string[] Recipients { get; set; }
```

- *Type:* string[]

A list of recipients to notify.

Uses the same format as the monitor message field. Must not start with an '@'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/monitor_notification_rule#recipients MonitorNotificationRule#recipients}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Defines the condition under which the recipients are notified.

Supported formats: Monitor status condition using `transition_type:<status>` (for example `transition_type:is_alert`) or a single tag `key:value pair` (for example `env:prod`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/monitor_notification_rule#scope MonitorNotificationRule#scope}

---

### MonitorNotificationRuleConfig <a name="MonitorNotificationRuleConfig" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new MonitorNotificationRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    MonitorNotificationRuleConditionalRecipients ConditionalRecipients = null,
    MonitorNotificationRuleFilter Filter = null,
    string[] Recipients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the monitor notification rule. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.conditionalRecipients">ConditionalRecipients</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a></code> | conditional_recipients block. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a></code> | filter block. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.recipients">Recipients</a></code> | <code>string[]</code> | List of recipients to notify. Cannot be used with `conditional_recipients`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the monitor notification rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/monitor_notification_rule#name MonitorNotificationRule#name}

---

##### `ConditionalRecipients`<sup>Optional</sup> <a name="ConditionalRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.conditionalRecipients"></a>

```csharp
public MonitorNotificationRuleConditionalRecipients ConditionalRecipients { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a>

conditional_recipients block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/monitor_notification_rule#conditional_recipients MonitorNotificationRule#conditional_recipients}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.filter"></a>

```csharp
public MonitorNotificationRuleFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/monitor_notification_rule#filter MonitorNotificationRule#filter}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConfig.property.recipients"></a>

```csharp
public string[] Recipients { get; set; }
```

- *Type:* string[]

List of recipients to notify. Cannot be used with `conditional_recipients`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/monitor_notification_rule#recipients MonitorNotificationRule#recipients}

---

### MonitorNotificationRuleFilter <a name="MonitorNotificationRuleFilter" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new MonitorNotificationRuleFilter {
    string Scope = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.property.scope">Scope</a></code> | <code>string</code> | A scope expression composed of `key:value` pairs (such as `env:prod`) with boolean operators (AND, OR, NOT) and parentheses for grouping. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.property.tags">Tags</a></code> | <code>string[]</code> | A list of tag key:value pairs (e.g. team:product). All tags must match (AND semantics). |

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

A scope expression composed of `key:value` pairs (such as `env:prod`) with boolean operators (AND, OR, NOT) and parentheses for grouping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/monitor_notification_rule#scope MonitorNotificationRule#scope}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tag key:value pairs (e.g. team:product). All tags must match (AND semantics).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/monitor_notification_rule#tags MonitorNotificationRule#tags}

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorNotificationRuleConditionalRecipientsConditionsList <a name="MonitorNotificationRuleConditionalRecipientsConditionsList" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new MonitorNotificationRuleConditionalRecipientsConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.get"></a>

```csharp
private MonitorNotificationRuleConditionalRecipientsConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList.property.internalValue"></a>

```csharp
public IResolvable|MonitorNotificationRuleConditionalRecipientsConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>[]

---


### MonitorNotificationRuleConditionalRecipientsConditionsOutputReference <a name="MonitorNotificationRuleConditionalRecipientsConditionsOutputReference" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new MonitorNotificationRuleConditionalRecipientsConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.recipientsInput">RecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.recipients">Recipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.recipientsInput"></a>

```csharp
public string[] RecipientsInput { get; }
```

- *Type:* string[]

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.recipients"></a>

```csharp
public string[] Recipients { get; }
```

- *Type:* string[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MonitorNotificationRuleConditionalRecipientsConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>

---


### MonitorNotificationRuleConditionalRecipientsOutputReference <a name="MonitorNotificationRuleConditionalRecipientsOutputReference" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new MonitorNotificationRuleConditionalRecipientsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resetFallbackRecipients">ResetFallbackRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.putConditions"></a>

```csharp
private void PutConditions(IResolvable|MonitorNotificationRuleConditionalRecipientsConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>[]

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetFallbackRecipients` <a name="ResetFallbackRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.resetFallbackRecipients"></a>

```csharp
private void ResetFallbackRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList">MonitorNotificationRuleConditionalRecipientsConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fallbackRecipientsInput">FallbackRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fallbackRecipients">FallbackRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.conditions"></a>

```csharp
public MonitorNotificationRuleConditionalRecipientsConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditionsList">MonitorNotificationRuleConditionalRecipientsConditionsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.conditionsInput"></a>

```csharp
public IResolvable|MonitorNotificationRuleConditionalRecipientsConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsConditions">MonitorNotificationRuleConditionalRecipientsConditions</a>[]

---

##### `FallbackRecipientsInput`<sup>Optional</sup> <a name="FallbackRecipientsInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fallbackRecipientsInput"></a>

```csharp
public string[] FallbackRecipientsInput { get; }
```

- *Type:* string[]

---

##### `FallbackRecipients`<sup>Required</sup> <a name="FallbackRecipients" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.fallbackRecipients"></a>

```csharp
public string[] FallbackRecipients { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipientsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MonitorNotificationRuleConditionalRecipients InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleConditionalRecipients">MonitorNotificationRuleConditionalRecipients</a>

---


### MonitorNotificationRuleFilterOutputReference <a name="MonitorNotificationRuleFilterOutputReference" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new MonitorNotificationRuleFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MonitorNotificationRuleFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.monitorNotificationRule.MonitorNotificationRuleFilter">MonitorNotificationRuleFilter</a>

---



