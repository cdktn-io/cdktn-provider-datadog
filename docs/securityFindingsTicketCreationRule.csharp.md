# `securityFindingsTicketCreationRule` Submodule <a name="`securityFindingsTicketCreationRule` Submodule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsTicketCreationRule <a name="SecurityFindingsTicketCreationRule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule datadog_security_findings_ticket_creation_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsTicketCreationRule(Construct Scope, string Id, SecurityFindingsTicketCreationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig">SecurityFindingsTicketCreationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig">SecurityFindingsTicketCreationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putAction"></a>

```csharp
private void PutAction(SecurityFindingsTicketCreationRuleAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putRule"></a>

```csharp
private void PutRule(SecurityFindingsTicketCreationRuleRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsTicketCreationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsTicketCreationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsTicketCreationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsTicketCreationRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsTicketCreationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityFindingsTicketCreationRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityFindingsTicketCreationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityFindingsTicketCreationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsTicketCreationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference">SecurityFindingsTicketCreationRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference">SecurityFindingsTicketCreationRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.actionInput">ActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.action"></a>

```csharp
public SecurityFindingsTicketCreationRuleActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference">SecurityFindingsTicketCreationRuleActionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.rule"></a>

```csharp
public SecurityFindingsTicketCreationRuleRuleOutputReference Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference">SecurityFindingsTicketCreationRuleRuleOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.actionInput"></a>

```csharp
public IResolvable|SecurityFindingsTicketCreationRuleAction ActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.ruleInput"></a>

```csharp
public IResolvable|SecurityFindingsTicketCreationRuleRule RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsTicketCreationRuleAction <a name="SecurityFindingsTicketCreationRuleAction" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsTicketCreationRuleAction {
    double MaxTicketsPerDay,
    string ProjectId,
    string Target,
    string AssigneeId = null,
    string Fields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.maxTicketsPerDay">MaxTicketsPerDay</a></code> | <code>double</code> | The maximum number of tickets the rule may create per day. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.projectId">ProjectId</a></code> | <code>string</code> | The UUID of the Case Management project. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.target">Target</a></code> | <code>string</code> | The ticketing system to create tickets in. Valid values are `jira`, `case_management`. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.assigneeId">AssigneeId</a></code> | <code>string</code> | The UUID of the default assignee for created tickets. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.fields">Fields</a></code> | <code>string</code> | A JSON-encoded object of custom fields of the Jira issue to create. |

---

##### `MaxTicketsPerDay`<sup>Required</sup> <a name="MaxTicketsPerDay" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.maxTicketsPerDay"></a>

```csharp
public double MaxTicketsPerDay { get; set; }
```

- *Type:* double

The maximum number of tickets the rule may create per day.

If exceeded, one final ticket will be created, explaining the limit was hit and linking back to the responsible rule. Value must be between 1 and 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#max_tickets_per_day SecurityFindingsTicketCreationRule#max_tickets_per_day}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The UUID of the Case Management project. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#project_id SecurityFindingsTicketCreationRule#project_id}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

The ticketing system to create tickets in. Valid values are `jira`, `case_management`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#target SecurityFindingsTicketCreationRule#target}

---

##### `AssigneeId`<sup>Optional</sup> <a name="AssigneeId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.assigneeId"></a>

```csharp
public string AssigneeId { get; set; }
```

- *Type:* string

The UUID of the default assignee for created tickets. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#assignee_id SecurityFindingsTicketCreationRule#assignee_id}

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction.property.fields"></a>

```csharp
public string Fields { get; set; }
```

- *Type:* string

A JSON-encoded object of custom fields of the Jira issue to create.

For the list of available fields, see the [Jira documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-issues/#api-rest-api-2-issue-createmeta-projectidorkey-issuetypes-issuetypeid-get).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#fields SecurityFindingsTicketCreationRule#fields}

---

### SecurityFindingsTicketCreationRuleConfig <a name="SecurityFindingsTicketCreationRuleConfig" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsTicketCreationRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    SecurityFindingsTicketCreationRuleAction Action,
    string Name,
    SecurityFindingsTicketCreationRuleRule Rule,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.action">Action</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a></code> | The action to take when the ticket creation rule matches a finding. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the ticket creation rule. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a></code> | Defines the scope of findings to which the automation rule applies. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the ticket creation rule is enabled. Defaults to `true`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.action"></a>

```csharp
public SecurityFindingsTicketCreationRuleAction Action { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

The action to take when the ticket creation rule matches a finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#action SecurityFindingsTicketCreationRule#action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the ticket creation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#name SecurityFindingsTicketCreationRule#name}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.rule"></a>

```csharp
public SecurityFindingsTicketCreationRuleRule Rule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

Defines the scope of findings to which the automation rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#rule SecurityFindingsTicketCreationRule#rule}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the ticket creation rule is enabled. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#enabled SecurityFindingsTicketCreationRule#enabled}

---

### SecurityFindingsTicketCreationRuleRule <a name="SecurityFindingsTicketCreationRuleRule" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsTicketCreationRuleRule {
    string[] FindingTypes,
    string Query = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.findingTypes">FindingTypes</a></code> | <code>string[]</code> | The list of security finding types that the automation rule applies to. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.query">Query</a></code> | <code>string</code> | A search query to further filter the findings matched by this rule. |

---

##### `FindingTypes`<sup>Required</sup> <a name="FindingTypes" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.findingTypes"></a>

```csharp
public string[] FindingTypes { get; set; }
```

- *Type:* string[]

The list of security finding types that the automation rule applies to.

Valid values are `api_security`, `attack_path`, `host_and_container_vulnerability`, `iac_misconfiguration`, `identity_risk`, `library_vulnerability`, `misconfiguration`, `runtime_code_vulnerability`, `secret`, `static_code_vulnerability`, `workload_activity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#finding_types SecurityFindingsTicketCreationRule#finding_types}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

A search query to further filter the findings matched by this rule.

The `@workflow.*` namespace and `@status` fields are not permitted. For a reference of available fields, see the [Security Findings schema documentation](https://docs.datadoghq.com/security/guide/findings-schema/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.15.0/docs/resources/security_findings_ticket_creation_rule#query SecurityFindingsTicketCreationRule#query}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityFindingsTicketCreationRuleActionOutputReference <a name="SecurityFindingsTicketCreationRuleActionOutputReference" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsTicketCreationRuleActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetAssigneeId">ResetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetFields">ResetFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssigneeId` <a name="ResetAssigneeId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetAssigneeId"></a>

```csharp
private void ResetAssigneeId()
```

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.resetFields"></a>

```csharp
private void ResetFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.autoDisabledReason">AutoDisabledReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeIdInput">AssigneeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDayInput">MaxTicketsPerDayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeId">AssigneeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fields">Fields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDay">MaxTicketsPerDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoDisabledReason`<sup>Required</sup> <a name="AutoDisabledReason" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.autoDisabledReason"></a>

```csharp
public string AutoDisabledReason { get; }
```

- *Type:* string

---

##### `AssigneeIdInput`<sup>Optional</sup> <a name="AssigneeIdInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeIdInput"></a>

```csharp
public string AssigneeIdInput { get; }
```

- *Type:* string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fieldsInput"></a>

```csharp
public string FieldsInput { get; }
```

- *Type:* string

---

##### `MaxTicketsPerDayInput`<sup>Optional</sup> <a name="MaxTicketsPerDayInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDayInput"></a>

```csharp
public double MaxTicketsPerDayInput { get; }
```

- *Type:* double

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `AssigneeId`<sup>Required</sup> <a name="AssigneeId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.assigneeId"></a>

```csharp
public string AssigneeId { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.fields"></a>

```csharp
public string Fields { get; }
```

- *Type:* string

---

##### `MaxTicketsPerDay`<sup>Required</sup> <a name="MaxTicketsPerDay" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.maxTicketsPerDay"></a>

```csharp
public double MaxTicketsPerDay { get; }
```

- *Type:* double

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityFindingsTicketCreationRuleAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleAction">SecurityFindingsTicketCreationRuleAction</a>

---


### SecurityFindingsTicketCreationRuleRuleOutputReference <a name="SecurityFindingsTicketCreationRuleRuleOutputReference" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsTicketCreationRuleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypesInput">FindingTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypes">FindingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FindingTypesInput`<sup>Optional</sup> <a name="FindingTypesInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypesInput"></a>

```csharp
public string[] FindingTypesInput { get; }
```

- *Type:* string[]

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `FindingTypes`<sup>Required</sup> <a name="FindingTypes" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.findingTypes"></a>

```csharp
public string[] FindingTypes { get; }
```

- *Type:* string[]

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityFindingsTicketCreationRuleRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-datadog.securityFindingsTicketCreationRule.SecurityFindingsTicketCreationRuleRule">SecurityFindingsTicketCreationRuleRule</a>

---



