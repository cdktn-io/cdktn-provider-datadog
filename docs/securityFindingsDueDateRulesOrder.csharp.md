# `securityFindingsDueDateRulesOrder` Submodule <a name="`securityFindingsDueDateRulesOrder` Submodule" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityFindingsDueDateRulesOrder <a name="SecurityFindingsDueDateRulesOrder" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rules_order datadog_security_findings_due_date_rules_order}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsDueDateRulesOrder(Construct Scope, string Id, SecurityFindingsDueDateRulesOrderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig">SecurityFindingsDueDateRulesOrderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig">SecurityFindingsDueDateRulesOrderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityFindingsDueDateRulesOrder resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsDueDateRulesOrder.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsDueDateRulesOrder.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsDueDateRulesOrder.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

SecurityFindingsDueDateRulesOrder.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityFindingsDueDateRulesOrder resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityFindingsDueDateRulesOrder to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityFindingsDueDateRulesOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rules_order#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityFindingsDueDateRulesOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.ruleIdsInput">RuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.ruleIds">RuleIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuleIdsInput`<sup>Optional</sup> <a name="RuleIdsInput" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.ruleIdsInput"></a>

```csharp
public string[] RuleIdsInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RuleIds`<sup>Required</sup> <a name="RuleIds" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.ruleIds"></a>

```csharp
public string[] RuleIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrder.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityFindingsDueDateRulesOrderConfig <a name="SecurityFindingsDueDateRulesOrderConfig" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Datadog;

new SecurityFindingsDueDateRulesOrderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string[] RuleIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.name">Name</a></code> | <code>string</code> | A unique identifier for the order resource. This field has no server-side equivalent; Datadog recommends matching the resource name. |
| <code><a href="#@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.ruleIds">RuleIds</a></code> | <code>string[]</code> | The ordered list of all due date rule IDs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A unique identifier for the order resource. This field has no server-side equivalent; Datadog recommends matching the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rules_order#name SecurityFindingsDueDateRulesOrder#name}

---

##### `RuleIds`<sup>Required</sup> <a name="RuleIds" id="@cdktn/provider-datadog.securityFindingsDueDateRulesOrder.SecurityFindingsDueDateRulesOrderConfig.property.ruleIds"></a>

```csharp
public string[] RuleIds { get; set; }
```

- *Type:* string[]

The ordered list of all due date rule IDs.

The order of IDs in this attribute defines the evaluation order of the due date rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/security_findings_due_date_rules_order#rule_ids SecurityFindingsDueDateRulesOrder#rule_ids}

---



