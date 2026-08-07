# `appsecWafCustomRule` Submodule <a name="`appsecWafCustomRule` Submodule" id="@cdktn/provider-datadog.appsecWafCustomRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsecWafCustomRule <a name="AppsecWafCustomRule" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule datadog_appsec_waf_custom_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRule(Construct Scope, string Id, AppsecWafCustomRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig">AppsecWafCustomRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig">AppsecWafCustomRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetPathGlob">ResetPathGlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putAction"></a>

```csharp
private void PutAction(AppsecWafCustomRuleAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putCondition"></a>

```csharp
private void PutCondition(IResolvable|AppsecWafCustomRuleCondition[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putCondition.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>[]

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putScope"></a>

```csharp
private void PutScope(IResolvable|AppsecWafCustomRuleScope[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.putScope.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>[]

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetPathGlob` <a name="ResetPathGlob" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetPathGlob"></a>

```csharp
private void ResetPathGlob()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.resetScope"></a>

```csharp
private void ResetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppsecWafCustomRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AppsecWafCustomRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AppsecWafCustomRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AppsecWafCustomRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

AppsecWafCustomRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppsecWafCustomRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsecWafCustomRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsecWafCustomRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppsecWafCustomRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference">AppsecWafCustomRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList">AppsecWafCustomRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList">AppsecWafCustomRuleScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.actionInput">ActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blockingInput">BlockingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.conditionInput">ConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlobInput">PathGlobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scopeInput">ScopeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blocking">Blocking</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlob">PathGlob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.action"></a>

```csharp
public AppsecWafCustomRuleActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference">AppsecWafCustomRuleActionOutputReference</a>

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.condition"></a>

```csharp
public AppsecWafCustomRuleConditionList Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList">AppsecWafCustomRuleConditionList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scope"></a>

```csharp
public AppsecWafCustomRuleScopeList Scope { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList">AppsecWafCustomRuleScopeList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.actionInput"></a>

```csharp
public IResolvable|AppsecWafCustomRuleAction ActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>

---

##### `BlockingInput`<sup>Optional</sup> <a name="BlockingInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blockingInput"></a>

```csharp
public bool|IResolvable BlockingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.conditionInput"></a>

```csharp
public IResolvable|AppsecWafCustomRuleCondition[] ConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathGlobInput`<sup>Optional</sup> <a name="PathGlobInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlobInput"></a>

```csharp
public string PathGlobInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.scopeInput"></a>

```csharp
public IResolvable|AppsecWafCustomRuleScope[] ScopeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Blocking`<sup>Required</sup> <a name="Blocking" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.blocking"></a>

```csharp
public bool|IResolvable Blocking { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PathGlob`<sup>Required</sup> <a name="PathGlob" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.pathGlob"></a>

```csharp
public string PathGlob { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsecWafCustomRuleAction <a name="AppsecWafCustomRuleAction" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleAction {
    string Action = null,
    AppsecWafCustomRuleActionParameters Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.action">Action</a></code> | <code>string</code> | Override the default action to take when the WAF custom rule would block. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a></code> | parameters block. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Override the default action to take when the WAF custom rule would block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#action AppsecWafCustomRule#action}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction.property.parameters"></a>

```csharp
public AppsecWafCustomRuleActionParameters Parameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#parameters AppsecWafCustomRule#parameters}

---

### AppsecWafCustomRuleActionParameters <a name="AppsecWafCustomRuleActionParameters" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleActionParameters {
    string Location = null,
    double StatusCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.location">Location</a></code> | <code>string</code> | The location to redirect to when the WAF custom rule triggers. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.statusCode">StatusCode</a></code> | <code>double</code> | The status code to return when the WAF custom rule triggers. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location to redirect to when the WAF custom rule triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#location AppsecWafCustomRule#location}

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters.property.statusCode"></a>

```csharp
public double StatusCode { get; set; }
```

- *Type:* double

The status code to return when the WAF custom rule triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#status_code AppsecWafCustomRule#status_code}

---

### AppsecWafCustomRuleCondition <a name="AppsecWafCustomRuleCondition" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleCondition {
    string Operator = null,
    AppsecWafCustomRuleConditionParameters Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.operator">Operator</a></code> | <code>string</code> | Operator to use for the WAF Condition. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a></code> | parameters block. |

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Operator to use for the WAF Condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#operator AppsecWafCustomRule#operator}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition.property.parameters"></a>

```csharp
public AppsecWafCustomRuleConditionParameters Parameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#parameters AppsecWafCustomRule#parameters}

---

### AppsecWafCustomRuleConditionParameters <a name="AppsecWafCustomRuleConditionParameters" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleConditionParameters {
    string Data = null,
    IResolvable|AppsecWafCustomRuleConditionParametersInput[] Input = null,
    string[] List = null,
    AppsecWafCustomRuleConditionParametersOptions Options = null,
    string Regex = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.data">Data</a></code> | <code>string</code> | Identifier of a list of data from the denylist. Can only be used as substitution from the list parameter. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.input">Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>[]</code> | input block. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.list">List</a></code> | <code>string[]</code> | List of value to use with the condition. Only used with the phrase_match, !phrase_match, exact_match and !exact_match operator. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.options">Options</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a></code> | options block. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.regex">Regex</a></code> | <code>string</code> | Regex to use with the condition. Only used with match_regex and !match_regex operator. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.value">Value</a></code> | <code>string</code> | Store the captured value in the specified tag name. Only used with the capture_data operator. |

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

Identifier of a list of data from the denylist. Can only be used as substitution from the list parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#data AppsecWafCustomRule#data}

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.input"></a>

```csharp
public IResolvable|AppsecWafCustomRuleConditionParametersInput[] Input { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#input AppsecWafCustomRule#input}

---

##### `List`<sup>Optional</sup> <a name="List" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.list"></a>

```csharp
public string[] List { get; set; }
```

- *Type:* string[]

List of value to use with the condition. Only used with the phrase_match, !phrase_match, exact_match and !exact_match operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#list AppsecWafCustomRule#list}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.options"></a>

```csharp
public AppsecWafCustomRuleConditionParametersOptions Options { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#options AppsecWafCustomRule#options}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Regex to use with the condition. Only used with match_regex and !match_regex operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#regex AppsecWafCustomRule#regex}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Store the captured value in the specified tag name. Only used with the capture_data operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#value AppsecWafCustomRule#value}

---

### AppsecWafCustomRuleConditionParametersInput <a name="AppsecWafCustomRuleConditionParametersInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleConditionParametersInput {
    string Address = null,
    string[] KeyPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.address">Address</a></code> | <code>string</code> | Input from the request on which the condition should apply. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.keyPath">KeyPath</a></code> | <code>string[]</code> | Specific path for the input. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Input from the request on which the condition should apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#address AppsecWafCustomRule#address}

---

##### `KeyPath`<sup>Optional</sup> <a name="KeyPath" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput.property.keyPath"></a>

```csharp
public string[] KeyPath { get; set; }
```

- *Type:* string[]

Specific path for the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#key_path AppsecWafCustomRule#key_path}

---

### AppsecWafCustomRuleConditionParametersOptions <a name="AppsecWafCustomRuleConditionParametersOptions" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleConditionParametersOptions {
    bool|IResolvable CaseSensitive = null,
    double MinLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.caseSensitive">CaseSensitive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Evaluate the value as case sensitive. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.minLength">MinLength</a></code> | <code>double</code> | Only evaluate this condition if the value has a minimum amount of characters. |

---

##### `CaseSensitive`<sup>Optional</sup> <a name="CaseSensitive" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.caseSensitive"></a>

```csharp
public bool|IResolvable CaseSensitive { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Evaluate the value as case sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#case_sensitive AppsecWafCustomRule#case_sensitive}

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions.property.minLength"></a>

```csharp
public double MinLength { get; set; }
```

- *Type:* double

Only evaluate this condition if the value has a minimum amount of characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#min_length AppsecWafCustomRule#min_length}

---

### AppsecWafCustomRuleConfig <a name="AppsecWafCustomRuleConfig" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable Blocking,
    bool|IResolvable Enabled,
    string Name,
    System.Collections.Generic.IDictionary<string, string> Tags,
    AppsecWafCustomRuleAction Action = null,
    IResolvable|AppsecWafCustomRuleCondition[] Condition = null,
    string PathGlob = null,
    IResolvable|AppsecWafCustomRuleScope[] Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.blocking">Blocking</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the WAF custom rule will block the request. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the WAF custom rule is enabled. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.name">Name</a></code> | <code>string</code> | The Name of the WAF custom rule. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Tags associated with the WAF custom rule. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.condition">Condition</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>[]</code> | condition block. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.pathGlob">PathGlob</a></code> | <code>string</code> | The path glob for the WAF custom rule. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.scope">Scope</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>[]</code> | scope block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Blocking`<sup>Required</sup> <a name="Blocking" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.blocking"></a>

```csharp
public bool|IResolvable Blocking { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the WAF custom rule will block the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#blocking AppsecWafCustomRule#blocking}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the WAF custom rule is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#enabled AppsecWafCustomRule#enabled}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The Name of the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#name AppsecWafCustomRule#name}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Tags associated with the WAF custom rule.

`category` and `type` tags are required. Supported categories include `business_logic`, `attack_attempt` and `security_response`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#tags AppsecWafCustomRule#tags}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.action"></a>

```csharp
public AppsecWafCustomRuleAction Action { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#action AppsecWafCustomRule#action}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.condition"></a>

```csharp
public IResolvable|AppsecWafCustomRuleCondition[] Condition { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#condition AppsecWafCustomRule#condition}

---

##### `PathGlob`<sup>Optional</sup> <a name="PathGlob" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.pathGlob"></a>

```csharp
public string PathGlob { get; set; }
```

- *Type:* string

The path glob for the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#path_glob AppsecWafCustomRule#path_glob}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConfig.property.scope"></a>

```csharp
public IResolvable|AppsecWafCustomRuleScope[] Scope { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>[]

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#scope AppsecWafCustomRule#scope}

---

### AppsecWafCustomRuleScope <a name="AppsecWafCustomRuleScope" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleScope {
    string Env = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.env">Env</a></code> | <code>string</code> | The environment scope for the WAF custom rule. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.service">Service</a></code> | <code>string</code> | The service scope for the WAF custom rule. |

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.env"></a>

```csharp
public string Env { get; set; }
```

- *Type:* string

The environment scope for the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#env AppsecWafCustomRule#env}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The service scope for the WAF custom rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/appsec_waf_custom_rule#service AppsecWafCustomRule#service}

---

## Classes <a name="Classes" id="Classes"></a>

### AppsecWafCustomRuleActionOutputReference <a name="AppsecWafCustomRuleActionOutputReference" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.putParameters"></a>

```csharp
private void PutParameters(AppsecWafCustomRuleActionParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference">AppsecWafCustomRuleActionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parameters"></a>

```csharp
public AppsecWafCustomRuleActionParametersOutputReference Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference">AppsecWafCustomRuleActionParametersOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.parametersInput"></a>

```csharp
public IResolvable|AppsecWafCustomRuleActionParameters ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafCustomRuleAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleAction">AppsecWafCustomRuleAction</a>

---


### AppsecWafCustomRuleActionParametersOutputReference <a name="AppsecWafCustomRuleActionParametersOutputReference" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleActionParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.resetStatusCode"></a>

```csharp
private void ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCodeInput"></a>

```csharp
public double StatusCodeInput { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafCustomRuleActionParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleActionParameters">AppsecWafCustomRuleActionParameters</a>

---


### AppsecWafCustomRuleConditionList <a name="AppsecWafCustomRuleConditionList" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.get"></a>

```csharp
private AppsecWafCustomRuleConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionList.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafCustomRuleCondition[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>[]

---


### AppsecWafCustomRuleConditionOutputReference <a name="AppsecWafCustomRuleConditionOutputReference" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters"></a>

```csharp
private void PutParameters(AppsecWafCustomRuleConditionParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>

---

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference">AppsecWafCustomRuleConditionParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parameters"></a>

```csharp
public AppsecWafCustomRuleConditionParametersOutputReference Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference">AppsecWafCustomRuleConditionParametersOutputReference</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.parametersInput"></a>

```csharp
public IResolvable|AppsecWafCustomRuleConditionParameters ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafCustomRuleCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleCondition">AppsecWafCustomRuleCondition</a>

---


### AppsecWafCustomRuleConditionParametersInputList <a name="AppsecWafCustomRuleConditionParametersInputList" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleConditionParametersInputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.get"></a>

```csharp
private AppsecWafCustomRuleConditionParametersInputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafCustomRuleConditionParametersInput[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>[]

---


### AppsecWafCustomRuleConditionParametersInputOutputReference <a name="AppsecWafCustomRuleConditionParametersInputOutputReference" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleConditionParametersInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetKeyPath">ResetKeyPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetKeyPath` <a name="ResetKeyPath" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.resetKeyPath"></a>

```csharp
private void ResetKeyPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPathInput">KeyPathInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPath">KeyPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `KeyPathInput`<sup>Optional</sup> <a name="KeyPathInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPathInput"></a>

```csharp
public string[] KeyPathInput { get; }
```

- *Type:* string[]

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `KeyPath`<sup>Required</sup> <a name="KeyPath" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.keyPath"></a>

```csharp
public string[] KeyPath { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafCustomRuleConditionParametersInput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>

---


### AppsecWafCustomRuleConditionParametersOptionsOutputReference <a name="AppsecWafCustomRuleConditionParametersOptionsOutputReference" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleConditionParametersOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetCaseSensitive">ResetCaseSensitive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetMinLength">ResetMinLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaseSensitive` <a name="ResetCaseSensitive" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetCaseSensitive"></a>

```csharp
private void ResetCaseSensitive()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.resetMinLength"></a>

```csharp
private void ResetMinLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitiveInput">CaseSensitiveInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLengthInput">MinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitive">CaseSensitive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLength">MinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaseSensitiveInput`<sup>Optional</sup> <a name="CaseSensitiveInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitiveInput"></a>

```csharp
public bool|IResolvable CaseSensitiveInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLengthInput"></a>

```csharp
public double MinLengthInput { get; }
```

- *Type:* double

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.caseSensitive"></a>

```csharp
public bool|IResolvable CaseSensitive { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.minLength"></a>

```csharp
public double MinLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafCustomRuleConditionParametersOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>

---


### AppsecWafCustomRuleConditionParametersOutputReference <a name="AppsecWafCustomRuleConditionParametersOutputReference" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleConditionParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetList">ResetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInput` <a name="PutInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putInput"></a>

```csharp
private void PutInput(IResolvable|AppsecWafCustomRuleConditionParametersInput[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putInput.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>[]

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putOptions"></a>

```csharp
private void PutOptions(AppsecWafCustomRuleConditionParametersOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>

---

##### `ResetData` <a name="ResetData" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetData"></a>

```csharp
private void ResetData()
```

##### `ResetInput` <a name="ResetInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetList` <a name="ResetList" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetList"></a>

```csharp
private void ResetList()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.input">Input</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList">AppsecWafCustomRuleConditionParametersInputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.options">Options</a></code> | <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference">AppsecWafCustomRuleConditionParametersOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.inputInput">InputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.listInput">ListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.optionsInput">OptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.list">List</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.input"></a>

```csharp
public AppsecWafCustomRuleConditionParametersInputList Input { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInputList">AppsecWafCustomRuleConditionParametersInputList</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.options"></a>

```csharp
public AppsecWafCustomRuleConditionParametersOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptionsOutputReference">AppsecWafCustomRuleConditionParametersOptionsOutputReference</a>

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.inputInput"></a>

```csharp
public IResolvable|AppsecWafCustomRuleConditionParametersInput[] InputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersInput">AppsecWafCustomRuleConditionParametersInput</a>[]

---

##### `ListInput`<sup>Optional</sup> <a name="ListInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.listInput"></a>

```csharp
public string[] ListInput { get; }
```

- *Type:* string[]

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.optionsInput"></a>

```csharp
public IResolvable|AppsecWafCustomRuleConditionParametersOptions OptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOptions">AppsecWafCustomRuleConditionParametersOptions</a>

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `List`<sup>Required</sup> <a name="List" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.list"></a>

```csharp
public string[] List { get; }
```

- *Type:* string[]

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafCustomRuleConditionParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleConditionParameters">AppsecWafCustomRuleConditionParameters</a>

---


### AppsecWafCustomRuleScopeList <a name="AppsecWafCustomRuleScopeList" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleScopeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.get"></a>

```csharp
private AppsecWafCustomRuleScopeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeList.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafCustomRuleScope[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>[]

---


### AppsecWafCustomRuleScopeOutputReference <a name="AppsecWafCustomRuleScopeOutputReference" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new AppsecWafCustomRuleScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.envInput">EnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.env">Env</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.envInput"></a>

```csharp
public string EnvInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.env"></a>

```csharp
public string Env { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScopeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppsecWafCustomRuleScope InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.appsecWafCustomRule.AppsecWafCustomRuleScope">AppsecWafCustomRuleScope</a>

---



