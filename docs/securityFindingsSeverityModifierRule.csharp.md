# `securityFindingsSeverityModifierRule` Submodule <a name="`securityFindingsSeverityModifierRule` Submodule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsSeverityModifierRule <a name="SecurityFindingsSeverityModifierRule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule datadog_security_findings_severity_modifier_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsSeverityModifierRule(Construct Scope, string Id, SecurityFindingsSeverityModifierRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig">SecurityFindingsSeverityModifierRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig">SecurityFindingsSeverityModifierRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction"></a>

```csharp
private void PutAction(SecurityFindingsSeverityModifierRuleAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule"></a>

```csharp
private void PutRule(SecurityFindingsSeverityModifierRuleRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsSeverityModifierRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsSeverityModifierRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsSeverityModifierRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsSeverityModifierRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsSeverityModifierRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityFindingsSeverityModifierRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityFindingsSeverityModifierRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityFindingsSeverityModifierRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsSeverityModifierRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference">SecurityFindingsSeverityModifierRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference">SecurityFindingsSeverityModifierRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.actionInput">ActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.action"></a>

```csharp
public SecurityFindingsSeverityModifierRuleActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference">SecurityFindingsSeverityModifierRuleActionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.rule"></a>

```csharp
public SecurityFindingsSeverityModifierRuleRuleOutputReference Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference">SecurityFindingsSeverityModifierRuleRuleOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.actionInput"></a>

```csharp
public IResolvable|SecurityFindingsSeverityModifierRuleAction ActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.ruleInput"></a>

```csharp
public IResolvable|SecurityFindingsSeverityModifierRuleRule RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsSeverityModifierRuleAction <a name="SecurityFindingsSeverityModifierRuleAction" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsSeverityModifierRuleAction {
    SecurityFindingsSeverityModifierRuleActionSet Set = null,
    SecurityFindingsSeverityModifierRuleActionShift Shift = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.set">Set</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a></code> | Sets matched findings to a fixed severity. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.shift">Shift</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a></code> | Shifts matched findings up or down by one severity rank. |

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.set"></a>

```csharp
public SecurityFindingsSeverityModifierRuleActionSet Set { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

Sets matched findings to a fixed severity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#set SecurityFindingsSeverityModifierRule#set}

---

##### `Shift`<sup>Optional</sup> <a name="Shift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction.property.shift"></a>

```csharp
public SecurityFindingsSeverityModifierRuleActionShift Shift { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

Shifts matched findings up or down by one severity rank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#shift SecurityFindingsSeverityModifierRule#shift}

---

### SecurityFindingsSeverityModifierRuleActionSet <a name="SecurityFindingsSeverityModifierRuleActionSet" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsSeverityModifierRuleActionSet {
    string Severity,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.severity">Severity</a></code> | <code>string</code> | The severity to assign to matched findings. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.description">Description</a></code> | <code>string</code> | An optional free-form explanation for the severity change. |

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

The severity to assign to matched findings.

`info_none` is not supported for the `iac_misconfiguration`, `runtime_code_vulnerability`, `secret`, or `static_code_vulnerability` finding types. Valid values are `info_none`, `low`, `medium`, `high`, `critical`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#severity SecurityFindingsSeverityModifierRule#severity}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional free-form explanation for the severity change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#description SecurityFindingsSeverityModifierRule#description}

---

### SecurityFindingsSeverityModifierRuleActionShift <a name="SecurityFindingsSeverityModifierRuleActionShift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsSeverityModifierRuleActionShift {
    string SeverityDelta,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.severityDelta">SeverityDelta</a></code> | <code>string</code> | The direction in which to shift the severity of matched findings by one rank. Valid values are `up_one`, `down_one`. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.description">Description</a></code> | <code>string</code> | An optional free-form explanation for the severity change. |

---

##### `SeverityDelta`<sup>Required</sup> <a name="SeverityDelta" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.severityDelta"></a>

```csharp
public string SeverityDelta { get; set; }
```

- *Type:* string

The direction in which to shift the severity of matched findings by one rank. Valid values are `up_one`, `down_one`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#severity_delta SecurityFindingsSeverityModifierRule#severity_delta}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional free-form explanation for the severity change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#description SecurityFindingsSeverityModifierRule#description}

---

### SecurityFindingsSeverityModifierRuleConfig <a name="SecurityFindingsSeverityModifierRuleConfig" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsSeverityModifierRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    SecurityFindingsSeverityModifierRuleAction Action,
    string Name,
    SecurityFindingsSeverityModifierRuleRule Rule,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | The action to take when a severity modifier rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the severity modifier rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the severity modifier rule is enabled. Defaults to `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.action"></a>

```csharp
public SecurityFindingsSeverityModifierRuleAction Action { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

The action to take when a severity modifier rule matches a finding.

This is a discriminated union on `type`: `set` assigns a fixed severity, while `shift` moves the severity up or down by one severity rank. In this resource the union is expressed as the `set` and `shift` blocks; exactly one must be provided. A severity modifier rule's `rule.query` must not filter on `@severity` or on the `@severity_details.user_adjusted.*` namespace. Use `@severity_details.adjusted.value` instead, which reflects the severity before user-defined adjustments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#action SecurityFindingsSeverityModifierRule#action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the severity modifier rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#name SecurityFindingsSeverityModifierRule#name}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.rule"></a>

```csharp
public SecurityFindingsSeverityModifierRuleRule Rule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#rule SecurityFindingsSeverityModifierRule#rule}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the severity modifier rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#enabled SecurityFindingsSeverityModifierRule#enabled}

---

### SecurityFindingsSeverityModifierRuleRule <a name="SecurityFindingsSeverityModifierRuleRule" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsSeverityModifierRuleRule {
    string[] FindingTypes,
    string Query = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.findingTypes">FindingTypes</a></code> | <code>string[]</code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.query">Query</a></code> | <code>string</code> | A search query to further filter the findings matched by this rule. |

---

##### `FindingTypes`<sup>Required</sup> <a name="FindingTypes" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.findingTypes"></a>

```csharp
public string[] FindingTypes { get; set; }
```

- *Type:* string[]

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#finding_types SecurityFindingsSeverityModifierRule#finding_types}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_severity_modifier_rule#query SecurityFindingsSeverityModifierRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsSeverityModifierRuleActionOutputReference <a name="SecurityFindingsSeverityModifierRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsSeverityModifierRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet">PutSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift">PutShift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetSet">ResetSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetShift">ResetShift</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSet` <a name="PutSet" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet"></a>

```csharp
private void PutSet(SecurityFindingsSeverityModifierRuleActionSet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putSet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

---

##### `PutShift` <a name="PutShift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift"></a>

```csharp
private void PutShift(SecurityFindingsSeverityModifierRuleActionShift Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.putShift.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

---

##### `ResetSet` <a name="ResetSet" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetSet"></a>

```csharp
private void ResetSet()
```

##### `ResetShift` <a name="ResetShift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.resetShift"></a>

```csharp
private void ResetShift()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.set">Set</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference">SecurityFindingsSeverityModifierRuleActionSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shift">Shift</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference">SecurityFindingsSeverityModifierRuleActionShiftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.setInput">SetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shiftInput">ShiftInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.set"></a>

```csharp
public SecurityFindingsSeverityModifierRuleActionSetOutputReference Set { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference">SecurityFindingsSeverityModifierRuleActionSetOutputReference</a>

---

##### `Shift`<sup>Required</sup> <a name="Shift" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shift"></a>

```csharp
public SecurityFindingsSeverityModifierRuleActionShiftOutputReference Shift { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference">SecurityFindingsSeverityModifierRuleActionShiftOutputReference</a>

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.setInput"></a>

```csharp
public IResolvable|SecurityFindingsSeverityModifierRuleActionSet SetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

---

##### `ShiftInput`<sup>Optional</sup> <a name="ShiftInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.shiftInput"></a>

```csharp
public IResolvable|SecurityFindingsSeverityModifierRuleActionShift ShiftInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityFindingsSeverityModifierRuleAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleAction">SecurityFindingsSeverityModifierRuleAction</a>

---


### SecurityFindingsSeverityModifierRuleActionSetOutputReference <a name="SecurityFindingsSeverityModifierRuleActionSetOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsSeverityModifierRuleActionSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityFindingsSeverityModifierRuleActionSet InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionSet">SecurityFindingsSeverityModifierRuleActionSet</a>

---


### SecurityFindingsSeverityModifierRuleActionShiftOutputReference <a name="SecurityFindingsSeverityModifierRuleActionShiftOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsSeverityModifierRuleActionShiftOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDeltaInput">SeverityDeltaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDelta">SeverityDelta</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `SeverityDeltaInput`<sup>Optional</sup> <a name="SeverityDeltaInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDeltaInput"></a>

```csharp
public string SeverityDeltaInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `SeverityDelta`<sup>Required</sup> <a name="SeverityDelta" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.severityDelta"></a>

```csharp
public string SeverityDelta { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShiftOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityFindingsSeverityModifierRuleActionShift InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleActionShift">SecurityFindingsSeverityModifierRuleActionShift</a>

---


### SecurityFindingsSeverityModifierRuleRuleOutputReference <a name="SecurityFindingsSeverityModifierRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsSeverityModifierRuleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypesInput">FindingTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypes">FindingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FindingTypesInput`<sup>Optional</sup> <a name="FindingTypesInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypesInput"></a>

```csharp
public string[] FindingTypesInput { get; }
```

- *Type:* string[]

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `FindingTypes`<sup>Required</sup> <a name="FindingTypes" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.findingTypes"></a>

```csharp
public string[] FindingTypes { get; }
```

- *Type:* string[]

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityFindingsSeverityModifierRuleRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsSeverityModifierRule.SecurityFindingsSeverityModifierRuleRule">SecurityFindingsSeverityModifierRuleRule</a>

---



