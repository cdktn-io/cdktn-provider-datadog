# `securityFindingsInboxRule` Submodule <a name="`securityFindingsInboxRule` Submodule" id="@cdktn/provider-datadog.securityFindingsInboxRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsInboxRule <a name="SecurityFindingsInboxRule" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_inbox_rule datadog_security_findings_inbox_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsInboxRule(Construct Scope, string Id, SecurityFindingsInboxRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig">SecurityFindingsInboxRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig">SecurityFindingsInboxRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.putAction"></a>

```csharp
private void PutAction(SecurityFindingsInboxRuleAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a>

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.putRule"></a>

```csharp
private void PutRule(SecurityFindingsInboxRuleRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsInboxRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsInboxRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsInboxRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsInboxRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsInboxRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityFindingsInboxRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityFindingsInboxRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityFindingsInboxRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_inbox_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsInboxRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference">SecurityFindingsInboxRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference">SecurityFindingsInboxRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.actionInput">ActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.action"></a>

```csharp
public SecurityFindingsInboxRuleActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference">SecurityFindingsInboxRuleActionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.rule"></a>

```csharp
public SecurityFindingsInboxRuleRuleOutputReference Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference">SecurityFindingsInboxRuleRuleOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.actionInput"></a>

```csharp
public IResolvable|SecurityFindingsInboxRuleAction ActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.ruleInput"></a>

```csharp
public IResolvable|SecurityFindingsInboxRuleRule RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsInboxRuleAction <a name="SecurityFindingsInboxRuleAction" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsInboxRuleAction {
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction.property.description">Description</a></code> | <code>string</code> | An optional description providing more context for the rule. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description providing more context for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_inbox_rule#description SecurityFindingsInboxRule#description}

---

### SecurityFindingsInboxRuleConfig <a name="SecurityFindingsInboxRuleConfig" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsInboxRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    SecurityFindingsInboxRuleAction Action,
    string Name,
    SecurityFindingsInboxRuleRule Rule,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a></code> | The action to take when the inbox rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the inbox rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the inbox rule is enabled. Defaults to `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.action"></a>

```csharp
public SecurityFindingsInboxRuleAction Action { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a>

The action to take when the inbox rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_inbox_rule#action SecurityFindingsInboxRule#action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the inbox rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_inbox_rule#name SecurityFindingsInboxRule#name}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.rule"></a>

```csharp
public SecurityFindingsInboxRuleRule Rule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_inbox_rule#rule SecurityFindingsInboxRule#rule}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the inbox rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_inbox_rule#enabled SecurityFindingsInboxRule#enabled}

---

### SecurityFindingsInboxRuleRule <a name="SecurityFindingsInboxRuleRule" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsInboxRuleRule {
    string[] FindingTypes,
    string Query = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule.property.findingTypes">FindingTypes</a></code> | <code>string[]</code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule.property.query">Query</a></code> | <code>string</code> | A search query to further filter the findings matched by this rule. |

---

##### `FindingTypes`<sup>Required</sup> <a name="FindingTypes" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule.property.findingTypes"></a>

```csharp
public string[] FindingTypes { get; set; }
```

- *Type:* string[]

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_inbox_rule#finding_types SecurityFindingsInboxRule#finding_types}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.25.0/docs/resources/security_findings_inbox_rule#query SecurityFindingsInboxRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsInboxRuleActionOutputReference <a name="SecurityFindingsInboxRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsInboxRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityFindingsInboxRuleAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleAction">SecurityFindingsInboxRuleAction</a>

---


### SecurityFindingsInboxRuleRuleOutputReference <a name="SecurityFindingsInboxRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsInboxRuleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.findingTypesInput">FindingTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.findingTypes">FindingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FindingTypesInput`<sup>Optional</sup> <a name="FindingTypesInput" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.findingTypesInput"></a>

```csharp
public string[] FindingTypesInput { get; }
```

- *Type:* string[]

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `FindingTypes`<sup>Required</sup> <a name="FindingTypes" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.findingTypes"></a>

```csharp
public string[] FindingTypes { get; }
```

- *Type:* string[]

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityFindingsInboxRuleRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsInboxRule.SecurityFindingsInboxRuleRule">SecurityFindingsInboxRuleRule</a>

---



