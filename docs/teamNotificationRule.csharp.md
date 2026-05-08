# `teamNotificationRule` Submodule <a name="`teamNotificationRule` Submodule" id="@cdktn/provider-datadog.teamNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamNotificationRule <a name="TeamNotificationRule" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/team_notification_rule datadog_team_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TeamNotificationRule(Construct Scope, string Id, TeamNotificationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig">TeamNotificationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig">TeamNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putEmail">PutEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putMsTeams">PutMsTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putPagerduty">PutPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putSlack">PutSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetMsTeams">ResetMsTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetPagerduty">ResetPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetSlack">ResetSlack</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmail` <a name="PutEmail" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putEmail"></a>

```csharp
private void PutEmail(TeamNotificationRuleEmail Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a>

---

##### `PutMsTeams` <a name="PutMsTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putMsTeams"></a>

```csharp
private void PutMsTeams(TeamNotificationRuleMsTeams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putMsTeams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a>

---

##### `PutPagerduty` <a name="PutPagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putPagerduty"></a>

```csharp
private void PutPagerduty(TeamNotificationRulePagerduty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putPagerduty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a>

---

##### `PutSlack` <a name="PutSlack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putSlack"></a>

```csharp
private void PutSlack(TeamNotificationRuleSlack Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a>

---

##### `ResetEmail` <a name="ResetEmail" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetMsTeams` <a name="ResetMsTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetMsTeams"></a>

```csharp
private void ResetMsTeams()
```

##### `ResetPagerduty` <a name="ResetPagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetPagerduty"></a>

```csharp
private void ResetPagerduty()
```

##### `ResetSlack` <a name="ResetSlack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.resetSlack"></a>

```csharp
private void ResetSlack()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TeamNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

TeamNotificationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

TeamNotificationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

TeamNotificationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

TeamNotificationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TeamNotificationRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TeamNotificationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TeamNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/team_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TeamNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.email">Email</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference">TeamNotificationRuleEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeams">MsTeams</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference">TeamNotificationRuleMsTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerduty">Pagerduty</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference">TeamNotificationRulePagerdutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference">TeamNotificationRuleSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.emailInput">EmailInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeamsInput">MsTeamsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerdutyInput">PagerdutyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slackInput">SlackInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.email"></a>

```csharp
public TeamNotificationRuleEmailOutputReference Email { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference">TeamNotificationRuleEmailOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MsTeams`<sup>Required</sup> <a name="MsTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeams"></a>

```csharp
public TeamNotificationRuleMsTeamsOutputReference MsTeams { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference">TeamNotificationRuleMsTeamsOutputReference</a>

---

##### `Pagerduty`<sup>Required</sup> <a name="Pagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerduty"></a>

```csharp
public TeamNotificationRulePagerdutyOutputReference Pagerduty { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference">TeamNotificationRulePagerdutyOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slack"></a>

```csharp
public TeamNotificationRuleSlackOutputReference Slack { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference">TeamNotificationRuleSlackOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.emailInput"></a>

```csharp
public IResolvable|TeamNotificationRuleEmail EmailInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a>

---

##### `MsTeamsInput`<sup>Optional</sup> <a name="MsTeamsInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.msTeamsInput"></a>

```csharp
public IResolvable|TeamNotificationRuleMsTeams MsTeamsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a>

---

##### `PagerdutyInput`<sup>Optional</sup> <a name="PagerdutyInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.pagerdutyInput"></a>

```csharp
public IResolvable|TeamNotificationRulePagerduty PagerdutyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a>

---

##### `SlackInput`<sup>Optional</sup> <a name="SlackInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.slackInput"></a>

```csharp
public IResolvable|TeamNotificationRuleSlack SlackInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a>

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamNotificationRuleConfig <a name="TeamNotificationRuleConfig" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TeamNotificationRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string TeamId,
    TeamNotificationRuleEmail Email = null,
    TeamNotificationRuleMsTeams MsTeams = null,
    TeamNotificationRulePagerduty Pagerduty = null,
    TeamNotificationRuleSlack Slack = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.teamId">TeamId</a></code> | <code>string</code> | The ID of the team that this notification rule belongs to. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.email">Email</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a></code> | email block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.msTeams">MsTeams</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a></code> | ms_teams block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.pagerduty">Pagerduty</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a></code> | pagerduty block. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a></code> | slack block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

The ID of the team that this notification rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/team_notification_rule#team_id TeamNotificationRule#team_id}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.email"></a>

```csharp
public TeamNotificationRuleEmail Email { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/team_notification_rule#email TeamNotificationRule#email}

---

##### `MsTeams`<sup>Optional</sup> <a name="MsTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.msTeams"></a>

```csharp
public TeamNotificationRuleMsTeams MsTeams { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a>

ms_teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/team_notification_rule#ms_teams TeamNotificationRule#ms_teams}

---

##### `Pagerduty`<sup>Optional</sup> <a name="Pagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.pagerduty"></a>

```csharp
public TeamNotificationRulePagerduty Pagerduty { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a>

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/team_notification_rule#pagerduty TeamNotificationRule#pagerduty}

---

##### `Slack`<sup>Optional</sup> <a name="Slack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleConfig.property.slack"></a>

```csharp
public TeamNotificationRuleSlack Slack { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/team_notification_rule#slack TeamNotificationRule#slack}

---

### TeamNotificationRuleEmail <a name="TeamNotificationRuleEmail" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TeamNotificationRuleEmail {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to send email notifications to team members when alerts are triggered. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to send email notifications to team members when alerts are triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/team_notification_rule#enabled TeamNotificationRule#enabled}

---

### TeamNotificationRuleMsTeams <a name="TeamNotificationRuleMsTeams" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TeamNotificationRuleMsTeams {
    string ConnectorName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams.property.connectorName">ConnectorName</a></code> | <code>string</code> | MS Teams connector name used to route notifications to the appropriate channel. |

---

##### `ConnectorName`<sup>Optional</sup> <a name="ConnectorName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams.property.connectorName"></a>

```csharp
public string ConnectorName { get; set; }
```

- *Type:* string

MS Teams connector name used to route notifications to the appropriate channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/team_notification_rule#connector_name TeamNotificationRule#connector_name}

---

### TeamNotificationRulePagerduty <a name="TeamNotificationRulePagerduty" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TeamNotificationRulePagerduty {
    string ServiceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty.property.serviceName">ServiceName</a></code> | <code>string</code> | PagerDuty service name to send incident notifications to. The service name can be found in your PagerDuty service settings. |

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

PagerDuty service name to send incident notifications to. The service name can be found in your PagerDuty service settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/team_notification_rule#service_name TeamNotificationRule#service_name}

---

### TeamNotificationRuleSlack <a name="TeamNotificationRuleSlack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TeamNotificationRuleSlack {
    string Channel = null,
    string Workspace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.channel">Channel</a></code> | <code>string</code> | Slack channel name for notifications (for example, #alerts or #team-notifications). |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.workspace">Workspace</a></code> | <code>string</code> | Slack workspace name where the channel is located. |

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

Slack channel name for notifications (for example, #alerts or #team-notifications).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/team_notification_rule#channel TeamNotificationRule#channel}

---

##### `Workspace`<sup>Optional</sup> <a name="Workspace" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack.property.workspace"></a>

```csharp
public string Workspace { get; set; }
```

- *Type:* string

Slack workspace name where the channel is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.91.0/docs/resources/team_notification_rule#workspace TeamNotificationRule#workspace}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamNotificationRuleEmailOutputReference <a name="TeamNotificationRuleEmailOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TeamNotificationRuleEmailOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmailOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TeamNotificationRuleEmail InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleEmail">TeamNotificationRuleEmail</a>

---


### TeamNotificationRuleMsTeamsOutputReference <a name="TeamNotificationRuleMsTeamsOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TeamNotificationRuleMsTeamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resetConnectorName">ResetConnectorName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectorName` <a name="ResetConnectorName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.resetConnectorName"></a>

```csharp
private void ResetConnectorName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorNameInput">ConnectorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorName">ConnectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorNameInput`<sup>Optional</sup> <a name="ConnectorNameInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorNameInput"></a>

```csharp
public string ConnectorNameInput { get; }
```

- *Type:* string

---

##### `ConnectorName`<sup>Required</sup> <a name="ConnectorName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.connectorName"></a>

```csharp
public string ConnectorName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeamsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TeamNotificationRuleMsTeams InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleMsTeams">TeamNotificationRuleMsTeams</a>

---


### TeamNotificationRulePagerdutyOutputReference <a name="TeamNotificationRulePagerdutyOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TeamNotificationRulePagerdutyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerdutyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TeamNotificationRulePagerduty InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRulePagerduty">TeamNotificationRulePagerduty</a>

---


### TeamNotificationRuleSlackOutputReference <a name="TeamNotificationRuleSlackOutputReference" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new TeamNotificationRuleSlackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetWorkspace">ResetWorkspace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannel` <a name="ResetChannel" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetChannel"></a>

```csharp
private void ResetChannel()
```

##### `ResetWorkspace` <a name="ResetWorkspace" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.resetWorkspace"></a>

```csharp
private void ResetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspace">Workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspaceInput"></a>

```csharp
public string WorkspaceInput { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.workspace"></a>

```csharp
public string Workspace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlackOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TeamNotificationRuleSlack InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.teamNotificationRule.TeamNotificationRuleSlack">TeamNotificationRuleSlack</a>

---



